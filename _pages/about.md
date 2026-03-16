---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<!-- 页面基础数据配置：定义首页路径、标题、摘要和跳转别名 -->
{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "<https://cdn.jsdelivr.net/gh/>" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "<https://raw.githubusercontent.com/>" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<!-- 首页顶部个人简介区域：锚点与 About Me 标题 -->
<span class='anchor' id='about-me'></span>

# 🌴 About Me

<!-- 首页顶部个人简介正文：学校、合作导师、研究方向和实习意向 -->
I am a master's student at Tsinghua University, under the supervision of [Prof. Xiu Li](https://www.sigs.tsinghua.edu.cn/lx/main.html). I'm now a visiting student at the [LONG Group](https://long-group.cse.ust.hk/), Hong Kong University of Science and Technology (HKUST), working with [Prof. Long Chen](https://zjuchenlong.github.io/). I obtained my B.Eng in Computer Science and Technology at Harbin Institute of Technology (Shenzhen) in 2024.

My research interests lie in **_Computer Vision_**, particularly in visual content generation such as Concept Customization ([MultiBooth](https://multibooth.github.io/)), Customized Editing ([InstantSwap](https://instantswap.github.io/)).

_<span style="color:PaleVioletRed;">I am actively seeking for research internship opportunities in either academia or industry. Please feel free to contact me via email.</span>_

<!-- 首页新闻区域：新闻标题、滚动容器、样式和时间线内容 -->
<html lang="en">
<head>
<meta charset="UTF-8">
<title>News</title>
<style>
  .news-container {
    height: 150px;
    overflow: auto;
  }
  .news-item {
    display: flex;
  }
  .news-date {
    min-width: 100px;
  }
  .news-content {
    flex-grow: 1;
  }
</style>
</head>
<body>

<h1>🔥 News</h1>
<div class="news-container">
  <ul>
  <li class="news-item">
      <div class="news-date">Mar 2026</div>
      <div class="news-content"> Excited to release <a href="https://chenyangzhu1.github.io/MoKus/">MoKus</a>, A novel framework for knowledge-aware concept customization through cross-modal knowledge transfer, enabling robust and high-fidelity customized generation. </div>
    </li>
  <li class="news-item">
      <div class="news-date">Sep 2025</div>
      <div class="news-content"> Join LONG Group@HKUST as a visiting student. </div>
    </li>
  <li class="news-item">
      <div class="news-date">Jan 2025</div>
      <div class="news-content"><a href="https://instantswap.github.io/">InstantSwap</a> is accepted by ICLR2025. </div>
    </li>
    <li class="news-item">
      <div class="news-date">Dec 2024</div>
      <div class="news-content"><a href="https://multibooth.github.io/">MultiBooth</a> is accepted by AAAI2025. </div>
    </li>
    <li class="news-item">
      <div class="news-date">Dec 2024</div>
      <div class="news-content">Excited to release <a href="https://instantswap.github.io/">InstantSwap</a>, an efficient customized concept swapping method across sharp shape differences. </div>
    </li>
    <li class="news-item">
      <div class="news-date">Apr 2024</div>
      <div class="news-content">Excited to release <a href="https://multibooth.github.io/">MultiBooth</a>, a novel and efficient multi-concept customization method. </div>
    </li>
    <li class="news-item">
      <div class="news-date">Dec 2023</div>
      <div class="news-content">
        Started to cooperate with <a href="https://mayuelala.github.io/">Yue Ma</a>.
      </div>
    </li>
    <li class="news-item">
      <div class="news-date">Aug 2023</div>
      <div class="news-content">
        Started to cooperate with <a href="http://kailigo.github.io/">Dr. Kai Li</a>.
      </div>
    </li>
    <li class="news-item">
      <div class="news-date">Jul 2023</div>
      <div class="news-content">
        Awarded as an outstanding camper in Tsinghua University Summer Camp.
      </div>
    </li>
    <li class="news-item">
      <div class="news-date">Apr 2023</div>
      <div class="news-content">
        Started internship in Professor Li Xiu’s research group.
      </div>
    </li>
  </ul>
</div>

</body>
</html>

<!-- 首页论文区域：论文列表标题 -->
# 📝 Publications

<!-- 首页论文卡片：MoKus 论文信息 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='../MoKus/static/images/teaser.jpg' alt="MoKus title figure" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<font size=4 > <strong>MoKus: Leveraging Cross-Modal Knowledge Transfer for Knowledge-Aware Concept Customization</strong></font>

**<u>Chenyang Zhu</u>**, Hongxiang Li, Xiu Li, Long Chen $^{\dagger}$

*arXiv preprint arXiv:2603.12743, 2026*

<a href='https://arxiv.org/abs/2603.12743'><img src='https://img.shields.io/badge/ArXiv-2603.12743-red'></a>
<a href='https://chenyangzhu1.github.io/MoKus/'><img src='https://img.shields.io/badge/Project-Page-Green'></a>
![MultiBooth](https://img.shields.io/github/stars/HKUST-LongGroup/MoKus)

A novel framework for knowledge-aware concept customization through cross-modal knowledge transfer, enabling robust and high-fidelity customized generation.

</div>
</div>

<!-- 首页论文卡片：InstantSwap 论文信息 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='..\images\InstantSwap-title-case.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<font size=4 > <strong>InstantSwap: Fast Customized Concept Swapping across Sharp Shape Differences</strong></font>

**<u>Chenyang Zhu</u> $^{\*}$**, Kai Li $^{\*,\dagger}$, Yue Ma $^{\*}$,  Longxiang Tang, Chengyu Fang, Chubin Chen, Qifeng Chen, Xiu Li $^{\dagger}$

*In International Conference on Learning Representations (ICLR), 2025*

<a href='https://arxiv.org/abs/2412.01197'><img src='https://img.shields.io/badge/ArXiv-2412.01197-red'></a>
<a href='https://InstantSwap.github.io/'><img src='https://img.shields.io/badge/Project-Page-Green'></a>
![InstantSwap](https://img.shields.io/github/stars/chenyangzhu1/InstantSwap)


A novel training-free customized concept swapping framework, which enables efficient concept swapping across sharp shape differences.

</div>
</div>

<!-- 首页论文卡片：MultiBooth 论文信息 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='..\images\MultiBooth-Title-case.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<font size=4 > <strong>MultiBooth: Towards Generating All Your Concepts in an Image from Text</strong></font>

**<u>Chenyang Zhu</u>**, Kai Li $^{\dagger}$, Yue Ma, Chunming He, Xiu Li $^{\dagger}$

*In The AAAI Conference on Artificial Intelligence (AAAI), 2025*

<a href='https://arxiv.org/abs/2404.14239'><img src='https://img.shields.io/badge/ArXiv-2404.14239-red'></a>
<a href='https://multibooth.github.io/'><img src='https://img.shields.io/badge/Project-Page-Green'></a>
![MultiBooth](https://img.shields.io/github/stars/chenyangzhu1/MultiBooth)

A novel and efficient technique for multi-concept customization in image generation from text.

</div>
</div>

<!--
首页实习经历区域：实习标题与经历条目
# 💻 Internships

- _2023.04 - 2024.8_, Professor Li Xiu’s [research group](https://thusigsclub.github.io/thu.github.io/index.html) at Tsinghua University, Shen Zhen, China.

---
-->

<!-- 首页底部访问统计区域：ClustrMaps 地图脚本 -->
<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=368bdc&w=350&t=tt&d=Bet_ACSX3N0Q4N0Qg5FkZONno2ukkSvQt3F9rBotRSc&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080'></script>
