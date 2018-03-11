---
layout: post
comments: true
title:  "Git tutorials"
excerpt: "Git tutorials"
date:   2018-03-11 11:00:00
mathjax: true
---

# Table of contents
1. [Introduction](#introduction)


## Basic command <a name="introduction">

* basic commands
```
git --version
git add -A
git reset
git status
git branch
git branch -a
git branch branch1
git checkout branch1
git add -A
git commit -m “message"
git push -u origin branch1
```

```
git checkout master
git pull origin master
git branch --merge
git merge branch1
```

```
git branch -d branch1
git push origin --delete branch1
```

* add remote address into .git/config
```
git remote add origin https://github.com/ntson2002/memn2n-snli.git
```
* see remote addresses
```
git remote -v
```

* save dirty state
```
git stash
git stash list
git stash apply
git stash drop stash@{0}
git stash pop
    = apply + drop
```

