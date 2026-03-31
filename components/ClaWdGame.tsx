'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Card } from '@/components/ui/card'

// ── Canvas dimensions ──────────────────────────────────────────────
const W = 600
const H = 180
const GROUND = 138   // y of ground line
const GRAV = 0.62
const JUMP = -13
const PS = 3         // logical pixels → canvas pixels

// ── CLAWD sprite (10w × 12h logical pixels) ────────────────────────
// 0=transparent  1=body  2=eye/accent
const FRAME_A: number[][] = [
  [0,0,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,2,1,1,1,1,2,1,1],
  [1,1,1,1,0,0,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,0,1,1,1,1,0,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,0,0,1,1,0,0],
  [0,0,1,0,0,0,0,1,0,0],
  [0,1,0,0,0,0,0,0,1,0],
  [0,1,1,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0],
]

const FRAME_B: number[][] = [
  [0,0,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,2,1,1,1,1,2,1,1],
  [1,1,1,1,0,0,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [1,1,0,1,1,1,1,0,1,1],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,1,1,0,0,1,1,0,0],
  [0,0,1,0,0,0,0,1,0,0],
  [0,1,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,1,1,0],
  [0,0,0,0,0,0,0,0,1,0],
]

// ── Bug sprites ────────────────────────────────────────────────────
const BUG_SM: number[][] = [
  [0,1,0,1,1,0,1,0],
  [1,1,1,1,1,1,1,1],
  [1,2,1,1,1,1,2,1],
  [1,1,1,1,1,1,1,1],
  [0,1,0,1,1,0,1,0],
  [1,0,1,0,0,1,0,1],
  [0,0,1,0,0,1,0,0],
  [0,1,0,0,0,0,1,0],
]

const BUG_LG: number[][] = [
  [0,1,0,1,1,0,1,0],
  [1,1,1,1,1,1,1,1],
  [1,2,1,1,1,1,2,1],
  [1,1,1,1,1,1,1,1],
  [0,1,0,1,1,0,1,0],
  [0,1,1,0,0,1,1,0],
  [0,1,0,1,1,0,1,0],
  [1,1,1,1,1,1,1,1],
  [1,2,1,1,1,1,2,1],
  [1,1,1,1,1,1,1,1],
  [0,1,0,1,1,0,1,0],
  [1,0,1,0,0,1,0,1],
  [0,0,1,0,0,1,0,0],
  [0,1,0,0,0,0,1,0],
]

// Pre-computed sizes
const PH = FRAME_A.length * PS       // 36
const PW = FRAME_A[0].length * PS    // 30
const PLAYER_X = 85

// ── Helpers ────────────────────────────────────────────────────────
function drawSprite(
  ctx: CanvasRenderingContext2D,
  sprite: number[][],
  sx: number, sy: number,
  body: string, accent: string,
) {
  for (let r = 0; r < sprite.length; r++) {
    for (let c = 0; c < sprite[r].length; c++) {
      const v = sprite[r][c]
      if (v === 0) continue
      ctx.fillStyle = v === 2 ? accent : body
      ctx.fillRect(sx + c * PS, sy + r * PS, PS, PS)
    }
  }
}

function beep(freq1: number, freq2: number, dur: number, vol = 0.08) {
  try {
    const ac = new AudioContext()
    const o = ac.createOscillator()
    const g = ac.createGain()
    o.connect(g); g.connect(ac.destination)
    o.frequency.setValueAtTime(freq1, ac.currentTime)
    o.frequency.exponentialRampToValueAtTime(freq2, ac.currentTime + dur)
    g.gain.setValueAtTime(vol, ac.currentTime)
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur)
    o.start(); o.stop(ac.currentTime + dur)
  } catch { /* AudioContext not available */ }
}

type Phase = 'idle' | 'play' | 'over'

interface Obs { x: number; tall: boolean }
interface Particle { x: number; y: number; vx: number; vy: number; life: number; color: string }

// ── Component ──────────────────────────────────────────────────────
export default function ClaWdGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef(0)

  const g = useRef({
    phase: 'idle' as Phase,
    py: GROUND - PH, pvy: 0, grounded: true,
    animFrame: 0, animTimer: 0,
    obstacles: [] as Obs[],
    particles: [] as Particle[],
    score: 0, hi: 0, speed: 3.5,
    bgScroll: 0, nextObs: 90, fc: 0,
  })

  const [uiPhase,  setUiPhase]  = useState<Phase>('idle')
  const [uiScore,  setUiScore]  = useState(0)

  const interact = useCallback(() => {
    const s = g.current
    if (s.phase === 'idle') { s.phase = 'play'; setUiPhase('play'); return }
    if (s.phase === 'over') {
      const hi = s.hi
      Object.assign(s, {
        phase: 'play', py: GROUND - PH, pvy: 0, grounded: true,
        animFrame: 0, animTimer: 0, obstacles: [], particles: [],
        score: 0, speed: 3.5, nextObs: 90, fc: 0, hi,
      })
      setUiPhase('play'); setUiScore(0); return
    }
    if (s.phase === 'play' && s.grounded) {
      s.pvy = JUMP; s.grounded = false
      beep(350, 700, 0.1)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const s = g.current
    try { s.hi = parseInt(localStorage.getItem('clawd_hi') ?? '0') || 0 } catch { /* ignore */ }

    function tick() {
      // ── Background ──────────────────────────────────────────────
      ctx.fillStyle = '#080814'; ctx.fillRect(0, 0, W, H)

      // Stars (two layers, different scroll speeds)
      for (let i = 0; i < 25; i++) {
        const sx = ((i * 67 + 9) - s.bgScroll * (i % 2 === 0 ? 0.1 : 0.2) + W * 3) % W
        const sy = (i * 37 + 5) % (GROUND - 30)
        ctx.fillStyle = i % 4 === 0 ? '#ffffff88' : '#ffffff33'
        ctx.fillRect(sx, sy, i % 5 === 0 ? 2 : 1, i % 5 === 0 ? 2 : 1)
      }

      // Ground
      ctx.fillStyle = '#0c1f3a'; ctx.fillRect(0, GROUND, W, H - GROUND)
      ctx.fillStyle = '#00dd77'; ctx.fillRect(0, GROUND, W, 2)
      ctx.fillStyle = '#0a192e'
      for (let x = ((- s.bgScroll) % 20 + 20) % 20; x < W; x += 20) {
        ctx.fillRect(x, GROUND + 2, 1, H - GROUND - 2)
      }

      // ── Game logic ───────────────────────────────────────────────
      if (s.phase === 'play') {
        s.fc++
        s.bgScroll += s.speed
        s.score   += 0.07
        s.speed    = 3.5 + s.score * 0.003

        // Physics
        s.pvy += GRAV; s.py += s.pvy
        if (s.py >= GROUND - PH) { s.py = GROUND - PH; s.pvy = 0; s.grounded = true }

        // Walk animation
        if (s.grounded) { s.animTimer++; if (s.animTimer >= 8) { s.animFrame ^= 1; s.animTimer = 0 } }

        // Spawn
        s.nextObs--
        if (s.nextObs <= 0) {
          s.obstacles.push({ x: W + 20, tall: Math.random() < 0.3 })
          const gap = Math.max(40, 85 - s.score * 0.05)
          s.nextObs = Math.floor(gap + Math.random() * gap * 0.5)
        }
        for (const o of s.obstacles) o.x -= s.speed
        s.obstacles = s.obstacles.filter(o => o.x > -40)

        // Particles physics
        for (const p of s.particles) { p.x += p.vx; p.y += p.vy; p.vy += 0.13; p.life-- }
        s.particles = s.particles.filter(p => p.life > 0)

        // Collision (shrunk hitboxes for fairness)
        const px = PLAYER_X - PW / 2 + 5, py = s.py + 5
        const pw = PW - 10,                ph = PH - 8

        for (const obs of s.obstacles) {
          const sp  = obs.tall ? BUG_LG : BUG_SM
          const oh  = sp.length * PS, ow = sp[0].length * PS
          const ox  = obs.x - ow / 2 + 4, oy = GROUND - oh + 2

          if (px < ox + ow - 8 && px + pw > ox && py < oy + oh - 4 && py + ph > oy) {
            s.phase = 'over'
            if (Math.floor(s.score) > s.hi) {
              s.hi = Math.floor(s.score)
              try { localStorage.setItem('clawd_hi', String(s.hi)) } catch { /* ignore */ }
            }
            const COLS = ['#00ff88', '#ff3366', '#ffdd00', '#00ccff']
            for (let i = 0; i < 20; i++) {
              s.particles.push({
                x: PLAYER_X, y: s.py + PH / 2,
                vx: (Math.random() - 0.5) * 7,
                vy: Math.random() * -7 - 2,
                life: 30, color: COLS[i % COLS.length],
              })
            }
            setUiPhase('over')
            beep(600, 60, 0.5, 0.15)
            break
          }
        }
        setUiScore(Math.floor(s.score))
      }

      // ── Draw particles ───────────────────────────────────────────
      for (const p of s.particles) {
        ctx.globalAlpha = p.life / 30
        ctx.fillStyle = p.color
        ctx.fillRect(p.x, p.y, 3, 3)
      }
      ctx.globalAlpha = 1

      // ── Draw obstacles ───────────────────────────────────────────
      for (const obs of s.obstacles) {
        const sp = obs.tall ? BUG_LG : BUG_SM
        const oh = sp.length * PS, ow = sp[0].length * PS
        drawSprite(ctx, sp, obs.x - ow / 2, GROUND - oh, '#ff2255', '#ffaacc')
      }

      // ── Draw CLAWD ───────────────────────────────────────────────
      const frame = s.animFrame === 0 ? FRAME_A : FRAME_B
      drawSprite(ctx, frame, PLAYER_X - PW / 2, s.py, '#00ff88', '#ffffff')

      // ── HUD ──────────────────────────────────────────────────────
      ctx.font = 'bold 9px monospace'
      ctx.fillStyle = '#00aa55'
      ctx.fillText(`SCR:${String(Math.floor(s.score)).padStart(5, '0')}`, 8, 16)
      ctx.fillStyle = '#1a4433'
      ctx.fillText(`HI: ${String(s.hi).padStart(5, '0')}`, W - 96, 16)

      // ── Overlay screens ──────────────────────────────────────────
      if (s.phase === 'idle') {
        ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0, 0, W, H)
        ctx.textAlign = 'center'
        ctx.font = 'bold 18px monospace'; ctx.fillStyle = '#00ff88'
        ctx.fillText('⚡  CLAWD  RUNNER  ⚡', W / 2, H / 2 - 18)
        ctx.font = '9px monospace'; ctx.fillStyle = '#449966'
        ctx.fillText('HELP CLAWD DODGE THE BUGS!', W / 2, H / 2 + 2)
        ctx.fillStyle = '#224433'
        ctx.fillText('SPACE  /  CLICK  /  TAP  TO  START', W / 2, H / 2 + 18)
        ctx.textAlign = 'left'
      }

      if (s.phase === 'over') {
        ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(0, 0, W, H)
        ctx.textAlign = 'center'
        ctx.font = 'bold 18px monospace'; ctx.fillStyle = '#ff3366'
        ctx.fillText('GAME  OVER', W / 2, H / 2 - 16)
        ctx.font = '9px monospace'; ctx.fillStyle = '#aa4455'
        ctx.fillText(`SCORE: ${Math.floor(s.score)}   HI: ${s.hi}`, W / 2, H / 2 + 4)
        ctx.fillStyle = '#443344'
        ctx.fillText('SPACE  /  CLICK  TO  RETRY', W / 2, H / 2 + 20)
        ctx.textAlign = 'left'
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); interact() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [interact])

  return (
    <Card className="overflow-hidden border-2 border-green-950">
      {/* Terminal title bar */}
      <div className="bg-[#060610] px-4 py-2 flex items-center justify-between border-b border-green-950">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
            <span className="w-3 h-3 rounded-full bg-green-500 block" />
          </div>
          <span className="text-xs font-mono text-green-700">clawd_runner.exe</span>
        </div>
        <span className="text-xs font-mono text-green-900">
          {uiPhase === 'play' && `⚡ ${uiScore}`}
          {uiPhase === 'over' && `💀 ${uiScore}`}
          {uiPhase === 'idle' && '— READY —'}
        </span>
      </div>

      {/* Game canvas */}
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        onClick={interact}
        className="block w-full cursor-pointer select-none"
        style={{ imageRendering: 'pixelated', background: '#080814' }}
      />

      {/* Status bar */}
      <div className="bg-[#060610] px-4 py-1.5 border-t border-green-950 flex justify-between items-center">
        <p className="text-xs font-mono text-green-900">
          {uiPhase === 'idle' && '▶ PRESS SPACE OR CLICK TO START'}
          {uiPhase === 'play'  && '↑ SPACE / CLICK / TAP TO JUMP'}
          {uiPhase === 'over'  && '🔄 SPACE / CLICK TO RETRY'}
        </p>
        <span className="text-xs font-mono text-green-950">v1.0</span>
      </div>
    </Card>
  )
}
