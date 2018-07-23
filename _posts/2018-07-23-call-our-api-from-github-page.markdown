
---
layout: post
comments: true
title:  "Call our API from Github pages"
excerpt: "Rerouting"
date:   2018-07-23 11:00:00
mathjax: true
---

* Problems: A Github page cannot call our API link from a different server

* Solution: 
  * Modify your API file
  * Append `web.header('Access-Control-Allow-Origin', 'https://ntson2002.github.io')` 

```
class JccRreTagger:
    def POST(self):
        web.header('Access-Control-Allow-Origin', 'https://ntson2002.github.io')
```


