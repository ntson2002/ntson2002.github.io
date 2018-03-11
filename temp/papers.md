---
layout: page
title: Interesting papers
permalink: /papers/
---
<body onload="start()">
<p>A fairly random set of papers that I found interesting. Updated weekly. Filter by subject, click for details</p>

<center>
  <div class="showmore" id="showgenerativepapers" style="display:inline-block;">Generative DL</div>
  <div class="showmore" id="shownlgpapers" style="display:inline-block;">NL Generation</div>
  <div class="showmore" id="showmiscpapers" style="display:inline-block;">Misc</div>
  <!-- <div class="showmore" id="showneuropapers" style="display:inline-block;">Neuroscience</div> -->
	<!-- <div class="showmore" id="showpredictivepapers" style="display:inline-block;">Predictive DL</div> -->
  <!-- <div class="showmore" id="showalgpapers" style="display:inline-block;">Algorithmic DL</div> -->
  <!-- <div class="showmore" id="showtheorypapers" style="display:inline-block;">DL Theory</div> -->
</center>

<div class="container">
  <div id="timeline">
    
    <!-- Year Section -->
    <div class="tyear">2017</div>

      <!-- Month Section -->
      <div id="generativepapers" class="timelineitem">
        <div class="tdate">September</div>
        <div class="ttitle" onClick="showDetails('Auto-encoding-Sentence-Compression-Model')">
          Language as a Latent Variable: Discrete Generative Models for Sentence Compression
          <a href="http://aclweb.org/anthology/D/D16/D16-1031.pdf">
            <sup class="tlink">link</sup>
          </a>
        </div>
        <div id="Auto-encoding-Sentence-Compression-Model" style="display:none;">
          <div class="tauthor">Yishu Miao<sup>1</sup>, Phil Blunsom<sup>2</sup></div>
          <div class="taffiliation"><sup>1</sup>University of Oxford, <sup>2</sup>Google Deepmind</div>
          <div class="tcontent">
            <div class="timg_border"><img class="timage" src="/assets/papers/Auto-encoding-Sentence-Compression-Model.png"></div>
          </div>
            <div class="tdesc">
              <p> <b>Hypothesis</b>
              <ul> 
                <li>A variational auto encoder can be used for inference of a generative model where the latent variable is a language itself.</li>
              </ul>
              </p>

              <p> <b>Interesting methods</b>
              <ul> 
                <li>Generative auto encoding sentence compression model (ASC)</li>
                <li>Other generative methods use continuous latent variables, this work uses discrete latent variables (words)</li>
                <li>For autoencoding, rather than embedding inputs as points in a vector space, they describe them as explicit natural language sentences.</li>
                <li>Discrete variational auto encoder is a natural fit for sentence compression.</li>
                <li>Because it is discrete, they cannot use SGD. Instead, they use the REINFORCE algorithm to mitigate the problem of high variance during sampling-based variational inference.
                </li>
                <li>In early stages it is difficult to generate reasonable compression samples possible words to be sampled from)</li>
                <li>They use pointer networks to construct the variational distribution to combat this (which results in limiting the latent space to sequences appearing only in the source sentence -- the size of the softmax would be the words in the input sentence instead of <i><b>|V|</b></i></li>
                <li>Forced attention sentence compression (FSC)</li>
                <li>FSC model shares the pointer network of the ASC model and combines a softmax output layer over the whole vocab. It can switch selecting sentences from the source or generating it from the background distribution.</li>
              </ul>
              </p>

              <p> <b>Details</b>
              <ul> 
                <li>ASC consists of four recurrent networks: encoder, compressor, decoder, and language model:</li>
                <li><i>Compression model</i>: inference network </li>
                <li><i>Reconstruction model</i>: is a generative network that reconstructs the source sentences <i><b>s</b></i> based on the latent compressions</li>
                <li>As the prior distribution a language model <i><b>p(c)</b></i> is used to regularize the latent compressions</li>
              </ul>
              </p>

              <p> <b>Results</b>
                 <ul> 
                <li>Gigaword (sentence compression/summarization task)</li>
                <li>Around 1 point imporvement of ROUGE-1 and ROUGE-L over Nallapati 2016 work. In ROUGE-2 they are comparable.</li>
              </ul>
              </p>

            </div>
          </div>
        </div>


  </div>

<script>
function start() {
	var show_nlg_papers = true;
  $("#shownlgpapers").click(function() {
    if(!show_nlg_papers) {
      $('[id=nlgpapers]').each(function() {
      	$('[id=nlgpapers]').slideDown('fast', function() {
      		$("#shownlgpapers").css('border', '2px solid #777');
      	})
      });
      show_nlg_papers = true;
    } else {
      $('[id=nlgpapers]').each(function() {
      	$('[id=nlgpapers]').slideUp('fast', function() {
      		$("#shownlgpapers").css('border', '2px solid #CCC');
      	})
      });
      show_nlg_papers = false;
    }
  });

    var show_neuro_papers = true;
  $("#showneuropapers").click(function() {
    if(!show_neuro_papers) {
      $('[id=neuropapers]').each(function() {
        $('[id=neuropapers]').slideDown('fast', function() {
          $("#showneuropapers").css('border', '2px solid #777');
        })
      });
      show_neuro_papers = true;
    } else {
      $('[id=neuropapers]').each(function() {
        $('[id=neuropapers]').slideUp('fast', function() {
          $("#showneuropapers").css('border', '2px solid #CCC');
        })
      });
      show_neuro_papers = false;
    }
  });

    var show_misc_papers = true;
  $("#showmiscpapers").click(function() {
    if(!show_misc_papers) {
      $('[id=miscpapers]').each(function() {
        $('[id=miscpapers]').slideDown('fast', function() {
          $("#showmiscpapers").css('border', '2px solid #777');
        })
      });
      show_misc_papers = true;
    } else {
      $('[id=miscpapers]').each(function() {
        $('[id=miscpapers]').slideUp('fast', function() {
          $("#showmiscpapers").css('border', '2px solid #CCC');
        })
      });
      show_misc_papers = false;
    }
  });

  	var show_generative_papers = true;
  $("#showgenerativepapers").click(function() {
    if(!show_generative_papers) {
      $('[id=generativepapers]').each(function() {
      	$('[id=generativepapers]').slideDown('fast', function() {
      		$("#showgenerativepapers").css('border', '2px solid #777');
      	})
      });
      show_generative_papers = true;
    } else {
      $('[id=generativepapers]').each(function() {
      	$('[id=generativepapers]').slideUp('fast', function() {
      		$("#showgenerativepapers").css('border', '2px solid #CCC');
      	})
      });
      show_generative_papers = false;
    }
  });


}

</script>

<script type="text/javascript">

function showDetails(name) {
    $('#' + name).toggle(); 
}

// $(function(){
//   $('#ttitle').click(function(){
//      $('#xor_details').toggle(); 
//   });
// });
</script>