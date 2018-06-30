---
layout: post
comments: true
title:  "Rerouting in MAMP for AJAX"
excerpt: "Rerouting"
date:   2018-06-30 11:00:00
mathjax: true
---

* Problems: A website cannot call AJAX from an outside API

* Simple solution: Rerouting

* Steps (examples):
    * 1) Create a rerouting file in MAMP/conf/apache/extra/my_route.conf


    ```
    ProxyPassMatch "^/tetsuzan(:92\d\d)/(.*)$" "http://150.65.242.87$1/$2"
    ProxyPassReverse "^/tetsuzan(:92\d\d)/(.*)$" "http://150.65.242.87$1/$2"

    ProxyPassMatch "^/tetsuzan(:81\d\d)/(.*)$" "http://150.65.242.87$1/$2"
    ProxyPassReverse "^/tetsuzan(:81\d\d)/(.*)$" "http://150.65.242.87$1/$2"

    ```

    * 2) Modify httpd.conf to include the config

   ```
   Include /Applications/MAMP/conf/apache/extra/my_route.conf
   ```









