---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a Ph.D. student at <a href="https://vmcl.bit.edu.cn/">VMCL group</a> of <a href="https://english.bit.edu.cn/">Beijing Institute of Technology (BIT)</a>. 
I am reaserching under the supervision of <a href="https://wang-lizhi.github.io/">Prof. Lizhi Wang</a>. 
Before joining BIT, I received my bachelor's degree from <a href="https://en.ustb.edu.cn/"> University of Science and Technology Beijing (USTB)</a> in 2020.

Welcome to visit <a href="https://vmcl-isp.site/">https://vmcl-isp.site/</a> to get my public technical blogs.

*I plan to follow my advisor, <a href="https://wang-lizhi.github.io/">Prof. Lizhi Wang</a>, to join the <a href="https://vmcl.bnu.edu.cn/">VMCL group</a> at <a href="https://english.bnu.edu.cn/">Beijing Normal University</a> as a postdoctoral researcher. We welcome collaborations from both academic and industrial partners. Please feel free to reach out to us through the lab.*
# 🔥 News
- *2025.08.29*: &nbsp;⭐⭐ We have launched an online demo on [Hugging Face Space](https://huggingface.co/spaces/hansen97/YOND)! Explore [**YOND** (You Only Need a Denoiser)](https://arxiv.org/abs/2506.03645), our practical blind raw image denoising method.
- *2024.07.23*: &nbsp;🎉🎉 Our paper ([DMID](https://ieeexplore.ieee.org/document/10607932)) is accepted by **TPAMI**.
- *2023.08.03*: &nbsp;🎉🎉 Our paper ([PMN [J]](https://github.com/megvii-research/PMN/tree/TPAMI)) is accepted by **TPAMI**.
- *2022.11.17*: &nbsp;🎉🎉 Our paper ([PMN [C]](https://github.com/megvii-research/PMN/)) win the <span style="color:red"> Best Paper Runner-Up Award</span> of **ACMMM 2022**.


# ⭐Representative Works
<!-- YOND -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">YOND | TPAMI Minor Revision</div><img src='images/YOND_teaser.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[YOND: Practical Blind Raw Image Denoising Free from Camera-Specific Data Dependency](https://arxiv.org/abs/2506.03645)

**Hansen Feng**, 
[Lizhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[Yiqi Huang](), 
[Tong Li](https://scholar.google.com/citations?hl=zh-CN&user=KANjABUAAAAJ), 
[Lin Zhu](https://scholar.google.com/citations?hl=zh-CN&user=32d6xfEAAAAJ), 
[Hua Huang](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***(TPAMI Minor Revision)***

<a href="https://arxiv.org/abs/2506.03645">Paper</a> | 
<a href="https://huggingface.co/spaces/hansen97/YOND">Online Demo</a> | 
<a href="https://github.com/fenghansen/YOND_public">Code (Eval Only)</a> | 
<a href="https://fenghansen.github.io/publication/YOND">Project</a>

- We introduce a novel blind raw image denoising method. With our method, an AWGN denoiser can generalize to various real raw data with a single training on synthetic datasets. We name our method YOND, as you need nothing else under our method, **Y**ou **O**nly **N**eed a **D**enoiser.
- YOND consists of three key modules: the coarse-to-fine noise estimation (CNE), the expectation-matched variance-stabilizing transform (EM-VST), and the SNR-guided denoiser (SNR-Net).
- Extensive experiments across diverse camera datasets, along with flexible solutions for challenging cases, demonstrate the practicality of YOND.
</div>
</div>

<!-- PNNP -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PNNP | TPAMI Minor Revision</div><img src='images/PNNP_example.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Physics-guided Noise Neural Proxy for Practical Low-light Raw Image Denoising](https://arxiv.org/abs/2310.09126)

**Hansen Feng**, 
[Lizhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[Yiqi Huang](), 
[Yuzhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=JzBbU18AAAAJ), 
[Lin Zhu](https://scholar.google.com/citations?hl=zh-CN&user=32d6xfEAAAAJ), 
[Hua Huang](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***(TPAMI Minor Revision)***

<a href="https://arxiv.org/abs/2310.09126">Paper</a> |
<a href="https://github.com/fenghansen/PNNP">Code (Eval Only)</a> |
<a href="https://fenghansen.github.io/publication/PNNP/">Project</a> |
<a href="https://pan.baidu.com/s/1WMv2x7yqg0kMTBCddqkCLQ?pwd=vmcl">Results & Checkpoints</a>

- In this paper, we propose a novel strategy: learning the noise model from dark frames instead of paired real data. 
- Based on the proposed strategy, we introduce an efficient **P**hysics-guided **N**oise **N**eural **P**roxy (PNNP) to approximate the real-world sensor noise model.
- The low data dependency of PNNP exhibits its powerful potential for practical low-light raw image denoising. 
</div>
</div>

<!-- DMID -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">DMID | TPAMI 2024</div><img src='images/DMID_pipeline.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Stimulating the Diffusion Model for Image Denoising via Adaptive Embedding and Ensembling](https://ieeexplore.ieee.org/document/10607932)

[Tong Li](https://scholar.google.com/citations?hl=zh-CN&user=KANjABUAAAAJ) *, **Hansen Feng** *, 
[Lizhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[Lin Zhu](https://scholar.google.com/citations?hl=zh-CN&user=32d6xfEAAAAJ), 
[Zhiwei Xiong](https://scholar.google.com/citations?hl=zh-CN&user=Snl0HPEAAAAJ), 
[Hua Huang](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***TPAMI, 2024***

<a href="https://arxiv.org/abs/2307.03992">Paper</a> |
<a href="https://github.com/Li-Tong-621/DMID">Code</a> | 
<a href="https://zhuanlan.zhihu.com/p/1898420817429262557">Chinese Note (Tong Li)</a> |
<a href="https://zhuanlan.zhihu.com/p/639911080">Chinese Note (Hansen)</a>

- We present a novel strategy called the **D**iffusion **M**odel for **I**mage **D**enoising (DMID) by understanding and rethinking the diffusion model from a denoising perspective.
- Our DMID strategy includes an adaptive embedding method that embeds the noisy image into a pre-trained unconditional diffusion model and an adaptive ensembling method that reduces distortion in the denoised image.
</div>
</div>

<!-- PMN [J] -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PMN[J] | TPAMI 2024</div><img src='images/pipeline.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learnability Enhancement for Low-light Raw Denoising: A Data Perspective](https://ieeexplore.ieee.org/abstract/document/10207751)

**Hansen Feng**, 
[Lizhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[Yuzhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=JzBbU18AAAAJ), 
[Haoqiang Fan](https://scholar.google.com/citations?hl=zh-CN&user=bzzBut4AAAAJ), 
[Hua Huang](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***TPAMI, 2023***

<a href="https://ieeexplore.ieee.org/abstract/document/10207751">Paper</a> |
<a href="https://github.com/megvii-research/PMN/tree/TPAMI">Code</a> |
<a href="https://fenghansen.github.io/publication/PMN">Project</a> | 
[Chinese Note](https://zhuanlan.zhihu.com/p/651674070) | 
<a href="https://pan.baidu.com/s/1fXlb-Q_ofHOtVOufe5cwDg?pwd=vmcl">Dataset</a>

- The limited data volume, complicated noise model, and underdeveloped data quality have constituted the learnability bottleneck of the data mapping between paired real data, which limits the performance of the learning-based method.
- To break through the bottleneck, we introduce a learnability enhancement strategy including three efficient methods: shot noise augmentation (SNA), dark shading correction (DSC), and a developed image acquisition protocol with corresponding **L**ow-light **R**aw **I**mage **D**enoising (LRID) dataset.
</div>
</div>

<!-- PMN [C] -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PMN[C] | ACMMM 2022</div><img src='images/2022Learnability_MM.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learnability Enhancement for Low-light Raw Denoising: Where Paired Real Data Meets Noise Modeling](https://arxiv.org/abs/2207.06103)

***ACMMM, 2022 <span style="color:red">(Best Paper Runner-Up Award)</span>***

**Hansen Feng**, 
[Lizhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[Yuzhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=JzBbU18AAAAJ), 
[Hua Huang](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

<a href="https://arxiv.org/abs/2207.06103">Paper</a> |
<a href="https://github.com/megvii-research/PMN">Code</a> |
<a href="https://fenghansen.github.io/publication/PMN">Project</a> | 
[Chinese Note](https://zhuanlan.zhihu.com/p/544592330) | 
<a href="https://www.bilibili.com/video/BV1pG411E7mE/">Video</a>

- We present a learnability enhancement strategy to reform paired real data according to noise modeling (PMN).
</div>
</div>

# 📝 Publications
- **Hansen Feng**, Lizhi Wang, Yiqi Huang, Tong Li, Lin Zhu, Hua Huang. [YOND: Practical Blind Raw Image Denoising Free from Camera-Specific Data Dependency](https://arxiv.org/abs/2506.03645). ``(TPAMI Minor Revision)`` [![](https://img.shields.io/github/stars/fenghansen/YOND_public?style=social&label=Stars)](https://github.com/fenghansen/YOND_public) [![Hugging Face Space](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Space-blue)](https://huggingface.co/spaces/hansen97/YOND)

- **Hansen Feng**, Lizhi Wang, Yiqi Huang, Yuzhi Wang, Lin Zhu, Hua Huang. [Physics-guided Noise Neural Proxy for Practical Low-light Raw Image Denoising](https://arxiv.org/pdf/2310.09126). ``(TPAMI Minor Revision)`` [![](https://img.shields.io/github/stars/fenghansen/PNNP?style=social&label=Stars)](https://github.com/fenghansen/PNNP)

- <u>Tong Li</u>, **<u>Hansen Feng</u>**, Lizhi Wang, Lin Zhu, Zhiwei Xiong, Hua Huang. [Stimulating the Diffusion Model for Image Denoising via Adaptive Embedding and Ensembling](https://arxiv.org/abs/2307.03992). ``TPAMI 2024`` [![](https://img.shields.io/github/stars/Li-Tong-621/DMID?style=social&label=Stars)](https://github.com/Li-Tong-621/DMID)

- **Hansen Feng**, Lizhi Wang, Yuzhi Wang, Haoqiang Fan, Hua Huang. [Learnability Enhancement for Low-light Raw Image Denoising: A Data Perspective](https://ieeexplore.ieee.org/document/10207751). ``TPAMI 2023`` [![](https://img.shields.io/github/stars/megvii-research/PMN?style=social&label=Stars)](https://github.com/megvii-research/PMN)

- **Hansen Feng**, Lizhi Wang, Yuzhi Wang, Hua Huang. [Learnability Enhancement for Low-light Raw Denoising: Where Paired Real Data Meets Noise Modeling](https://arxiv.org/abs/2207.06103). ``ACMMM 2022`` <span style="color:red">(Best Paper Runner-Up Award)</span> [![](https://img.shields.io/github/stars/megvii-research/PMN?style=social&label=Stars)](https://github.com/megvii-research/PMN)

# 📖 Educations
- *2020 ~ 2026*, Beijing Institute of Technology <a href="https://english.bit.edu.cn/">(BIT)</a>, Ph.D.
- *2016 ~ 2020*, University of Science and Technology Beijing <a href="https://en.ustb.edu.cn/">(USTB)</a>, Bechelor's Degree
- *2010 ~ 2016*, High School Affiliated to Renmin University of China <a href="https://en.wikipedia.org/wiki/High_School_Affiliated_to_Renmin_University_of_China">(RDFZ)</a>, Middle School


# 💻 Internships
- *2024.05 - present*, [Axera](https://axera-tech.com/), Research (AI-ISP)
- *2021.03 - 2023.08*, [Megvii](https://www.megvii.com/), Research (IS)
- *2020.07 - 2021.03*, [SenseTime](https://www.sensetime.com/), Research (ISP&Codec)

# 🎖 Honors and Awards
- Best Paper Runner-Up Award of the [ACM Multimedia 2022](https://2022.acmmm.org/best-paper-award/)
- Outstanding Graduate of SAEE, University of Science and Technology Beijing, 2020
- The First Prize of [NOIP 2011 (Beijing)](https://blog.sina.com.cn/s/blog_4ee63ce90102dwjd.html), Senior Group, 2011