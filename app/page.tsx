import cv from "@/data/cv.json";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  BookOpen,
  Building2,
  GraduationCap,
  Mail,
  BookMarked,
  FlaskConical,
  Users,
  Award,
  Globe2,
} from "lucide-react";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header */}
        <Card className="border-t-4 border-t-blue-600">
          <CardHeader className="pb-4">
            <div className="flex items-start gap-5">
              <Image
                src="/profile.jpg"
                alt={cv.name}
                width={96}
                height={96}
                className="rounded-full object-cover shrink-0 border-2 border-blue-100"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Lý Lịch Khoa Học</p>
                <h1 className="text-3xl font-bold text-foreground">{cv.name}</h1>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="secondary">{cv.degree}</Badge>
                  <Badge variant="secondary">{cv.position}</Badge>
                  {cv.expertise.specializations.map((s) => (
                    <Badge key={s} className="bg-blue-600 text-white hover:bg-blue-700">{s}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{cv.workplace.university}</p>
                  <p>{cv.workplace.faculty}</p>
                  <p>{cv.workplace.department}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0" />
                <span>{cv.degree} — đạt năm <strong className="text-foreground">{cv.degreeYear}</strong></span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${cv.contact.emailWork}`} className="text-blue-600 hover:underline">
                  {cv.contact.emailWork}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${cv.contact.emailPersonal}`} className="text-blue-600 hover:underline">
                  {cv.contact.emailPersonal}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              Quá trình đào tạo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cv.education.map((edu, i) => (
              <div key={i} className="relative pl-4 border-l-2 border-blue-200">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{edu.level}</span>
                  <Badge variant="outline" className="font-mono text-xs">{edu.period}</Badge>
                </div>
                <p className="text-sm font-medium text-blue-700">{edu.school}</p>
                <p className="text-sm text-muted-foreground">Chuyên ngành: {edu.major}</p>
                <p className="text-sm text-muted-foreground italic mt-1">&ldquo;{edu.thesis}&rdquo;</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Research Fields */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FlaskConical className="h-5 w-5 text-blue-600" />
              Lĩnh vực chuyên môn &amp; hướng nghiên cứu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Chuyên môn</p>
              <div className="flex flex-wrap gap-2">
                {cv.expertise.specializations.map((s) => (
                  <Badge key={s} className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100">{s}</Badge>
                ))}
                {cv.expertise.majors.map((s) => (
                  <Badge key={s} className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100">{s}</Badge>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Hướng nghiên cứu</p>
              <div className="flex flex-wrap gap-2">
                {cv.expertise.researchDirections.map((s) => (
                  <Badge key={s} variant="secondary">{s}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookMarked className="h-5 w-5 text-blue-600" />
              Đề tài nghiên cứu
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cv.projects.map((p, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/40 border space-y-2">
                <p className="font-medium text-foreground leading-snug">{p.title}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Badge variant="outline">{p.level}</Badge>
                  <Badge variant="outline">{p.year}</Badge>
                  <Badge variant="outline">{p.budget}</Badge>
                  <Badge className={p.role === "Chủ nhiệm"
                    ? "bg-emerald-100 text-emerald-700 border border-emerald-200 hover:bg-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"}>
                    {p.role}
                  </Badge>
                  <Badge className="bg-green-100 text-green-700 border border-green-200 hover:bg-green-200">{p.result}</Badge>
                  {p.code && <span className="font-mono text-muted-foreground">#{p.code}</span>}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Graduate Students */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="h-5 w-5 text-blue-600" />
              Hướng dẫn học viên cao học
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-muted-foreground">
                    <th className="text-left py-2 pr-4 font-medium">Học viên</th>
                    <th className="text-left py-2 pr-4 font-medium">Luận văn</th>
                    <th className="text-left py-2 font-medium">Năm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {cv.students.map((s, i) => (
                    <tr key={i} className="hover:bg-muted/30">
                      <td className="py-2.5 pr-4 font-medium whitespace-nowrap">{s.name}</td>
                      <td className="py-2.5 pr-4 text-muted-foreground">{s.thesis}</td>
                      <td className="py-2.5">
                        <Badge variant="outline" className="font-mono">{s.year}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Publications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Công trình đã công bố
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            {/* ISI Journals */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                <Globe2 className="h-4 w-4" /> Tạp chí quốc tế (ISI)
              </h3>
              <div className="space-y-3">
                {cv.publications.journals.map((pub, i) => (
                  <div key={i} className="p-3 rounded-md border bg-card space-y-1">
                    <p className="text-sm font-medium text-foreground">&ldquo;{pub.title}&rdquo;</p>
                    <p className="text-xs text-muted-foreground">{pub.authors}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs text-blue-700 font-medium">{pub.venue}</span>
                      <Badge variant="outline" className="font-mono text-xs">{pub.year}</Badge>
                      <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs hover:bg-emerald-200">{pub.indexed}</Badge>
                      <span className="text-xs text-muted-foreground">ISSN: {pub.issn}</span>
                      <span className="text-xs text-muted-foreground">IF: {pub.impactFactor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* International Conferences */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                <Award className="h-4 w-4" /> Kỷ yếu Hội nghị Quốc tế
              </h3>
              <div className="space-y-3">
                {cv.publications.conferences.map((pub, i) => (
                  <div key={i} className="p-3 rounded-md border bg-card space-y-1">
                    <p className="text-sm font-medium text-foreground">&ldquo;{pub.title}&rdquo;</p>
                    <p className="text-xs text-blue-700 font-medium">{pub.venue}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <Badge variant="outline" className="font-mono text-xs">{pub.year}</Badge>
                      {pub.role && <Badge variant="secondary" className="text-xs">{pub.role}</Badge>}
                      <span className="text-xs font-mono text-muted-foreground">{pub.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Globe2 className="h-5 w-5 text-blue-600" />
              Trình độ ngoại ngữ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 text-sm">
              {cv.languages.map((lang) => (
                <div key={lang.skill} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200">
                  <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-blue-800 font-medium">{lang.skill}: {lang.level}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground pb-4">
          <p>Khai ngày {cv.signedDate} — {cv.name}</p>
        </div>

      </div>
    </div>
  );
}
