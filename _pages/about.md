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

<div class="lang-content" data-lang="en" markdown="1">

I am currently a Ph.D. student at <a href="https://vmcl.bit.edu.cn/">VMCL group</a> of <a href="https://english.bit.edu.cn/">Beijing Institute of Technology (BIT)</a>.
I am reaserching under the supervision of <a href="https://wang-lizhi.github.io/">Prof. Lizhi Wang</a>.
Before joining BIT, I received my bachelor's degree from <a href="https://en.ustb.edu.cn/"> University of Science and Technology Beijing (USTB)</a> in 2020.

Welcome to visit <a href="https://vmcl-isp.site/">https://vmcl-isp.site/</a> to get my public technical blogs.

*I plan to follow my advisor, <a href="https://wang-lizhi.github.io/">Prof. Lizhi Wang</a>, to join the <a href="https://vmcl.bnu.edu.cn/">VMCL group</a> at <a href="https://english.bnu.edu.cn/">Beijing Normal University</a> as a postdoctoral researcher. We welcome collaborations from both academic and industrial partners. Please feel free to reach out to us through the lab.*

</div>

<div class="lang-content" data-lang="zh" markdown="1" style="display:none;">

我是<a href="https://vmcl.bit.edu.cn/">VMCL课题组</a>的一名博士生，就读于<a href="https://english.bit.edu.cn/">北京理工大学 (BIT)</a>。
我的导师是<a href="https://wang-lizhi.github.io/">王立志教授</a>。
在加入BIT之前，我于2020年在<a href="https://en.ustb.edu.cn/">北京科技大学 (USTB)</a>获得学士学位。

欢迎访问 <a href="https://vmcl-isp.site/">https://vmcl-isp.site/</a> 获取我的公开技术博客。

*我计划跟随导师<a href="https://wang-lizhi.github.io/">王立志教授</a>，加入<a href="https://english.bnu.edu.cn/">北京师范大学</a>的<a href="https://vmcl.bnu.edu.cn/">VMCL课题组</a>从事博士后研究。我们欢迎学术界和工业界的合作，请随时通过实验室联系我们。*

</div>

<div class="lang-content" data-lang="en" markdown="1">


# 🔥 News
- *2026.01.12*: &nbsp;🎉🎉 Our paper [PNNP](https://ieeexplore.ieee.org/document/11342300) is accepted by **TPAMI**.
- *2025.08.29*: &nbsp;⭐⭐ We have launched an online demo on [Hugging Face Space](https://huggingface.co/spaces/hansen97/YOND)! Explore [**YOND** (You Only Need a Denoiser)](https://arxiv.org/abs/2506.03645), our practical blind raw image denoising method.
- *2024.07.23*: &nbsp;🎉🎉 Our paper [DMID](https://ieeexplore.ieee.org/document/10607932) is accepted by **TPAMI**.
- *2023.08.03*: &nbsp;🎉🎉 Our paper [PMN[J]](https://github.com/megvii-research/PMN/tree/TPAMI) is accepted by **TPAMI**.
- *2022.11.17*: &nbsp;🎉🎉 Our paper [PMN[C]](https://github.com/megvii-research/PMN/) win the <span style="color:red"> Best Paper Runner-Up Award</span> of **ACMMM 2022**.



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
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PNNP | TPAMI 2026</div><img src='images/PNNP_example.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning Physics-Informed Noise Models from Dark Frames for Low-Light Raw Image Denoising](https://doi.org/10.1109/TPAMI.2026.3651447)

**Hansen Feng**, 
[Lizhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[Yiqi Huang](), 
[Yuzhi Wang](https://scholar.google.com/citations?hl=zh-CN&user=JzBbU18AAAAJ), 
[Lin Zhu](https://scholar.google.com/citations?hl=zh-CN&user=32d6xfEAAAAJ), 
[Hua Huang](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***TPAMI 2026***

<a href="https://doi.org/10.1109/TPAMI.2026.3651447">Paper</a> |
<a href="https://arxiv.org/abs/2310.09126">Arxiv</a> | 
<a href="https://github.com/fenghansen/PNNP">Code (Eval Only)</a> |
<a href="https://fenghansen.github.io/publication/PNNP/">Project</a> |
<a href="https://pan.baidu.com/s/1WMv2x7yqg0kMTBCddqkCLQ?pwd=vmcl">Results & Checkpoints</a>

- In this paper, we propose a novel strategy: learning the noise model from dark frames instead of paired real data. 
- Based on the proposed strategy, we introduce an efficient **P**hysics-informed **N**oise **N**eural **P**roxy (PNNP) to approximate the real-world sensor noise model.
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

- **Hansen Feng**, Lizhi Wang, Yiqi Huang, Yuzhi Wang, Lin Zhu, Hua Huang. [Learning Physics-Informed Noise Models from Dark Frames for Low-Light Raw Image Denoising](https://arxiv.org/pdf/2310.09126). ``TPAMI 2026`` [![](https://img.shields.io/github/stars/fenghansen/PNNP?style=social&label=Stars)](https://github.com/fenghansen/PNNP)

- <u>Tong Li</u>, **<u>Hansen Feng</u>**, Lizhi Wang, Lin Zhu, Zhiwei Xiong, Hua Huang. [Stimulating the Diffusion Model for Image Denoising via Adaptive Embedding and Ensembling](https://arxiv.org/abs/2307.03992). ``TPAMI 2024`` [![](https://img.shields.io/github/stars/Li-Tong-621/DMID?style=social&label=Stars)](https://github.com/Li-Tong-621/DMID)

- **Hansen Feng**, Lizhi Wang, Yuzhi Wang, Haoqiang Fan, Hua Huang. [Learnability Enhancement for Low-light Raw Image Denoising: A Data Perspective](https://ieeexplore.ieee.org/document/10207751). ``TPAMI 2023`` [![](https://img.shields.io/github/stars/megvii-research/PMN?style=social&label=Stars)](https://github.com/megvii-research/PMN)

- **Hansen Feng**, Lizhi Wang, Yuzhi Wang, Hua Huang. [Learnability Enhancement for Low-light Raw Denoising: Where Paired Real Data Meets Noise Modeling](https://arxiv.org/abs/2207.06103). ``ACMMM 2022`` <span style="color:red">(Best Paper Runner-Up Award)</span> [![](https://img.shields.io/github/stars/megvii-research/PMN?style=social&label=Stars)](https://github.com/megvii-research/PMN)


# 📖 Educations
- *2020 ~ 2026*, Beijing Institute of Technology <a href="https://english.bit.edu.cn/">(BIT)</a>, Ph.D.
- *2016 ~ 2020*, University of Science and Technology Beijing <a href="https://en.ustb.edu.cn/">(USTB)</a>, Bechelor's Degree
- *2010 ~ 2016*, High School Affiliated to Renmin University of China <a href="https://en.wikipedia.org/wiki/High_School_Affiliated_to_Renmin_University_of_China">(RDFZ)</a>, Middle School



# 💻 Internships
- *2024.05 - 2026.06*, [Axera](https://axera-tech.com/), Research (AI-ISP)
- *2021.03 - 2023.08*, [Megvii](https://www.megvii.com/), Research (IS)
- *2020.07 - 2021.03*, [SenseTime](https://www.sensetime.com/), Research (ISP&Codec)


# 🎖 Honors and Awards
- Best Paper Runner-Up Award of the [ACM Multimedia 2022](https://2022.acmmm.org/best-paper-award/)
- Outstanding Graduate of SAEE, University of Science and Technology Beijing, 2020
- The First Prize of [NOIP 2011 (Beijing)](https://blog.sina.com.cn/s/blog_4ee63ce90102dwjd.html), Senior Group, 2011

</div>

<div class="lang-content" data-lang="zh" markdown="1" style="display:none;">

<span class='anchor' id='news-zh'></span>

# 🔥 新闻动态
- *2026.01.12*: &nbsp;🎉🎉 我们的论文 [PNNP](https://ieeexplore.ieee.org/document/11342300) 被 **TPAMI** 接收。
- *2025.08.29*: &nbsp;⭐⭐ 我们在 [Hugging Face Space](https://huggingface.co/spaces/hansen97/YOND) 上线了在线演示！欢迎体验我们的实用Raw图像盲去噪方法 [**YOND** (You Only Need a Denoiser)](https://arxiv.org/abs/2506.03645)。
- *2024.07.23*: &nbsp;🎉🎉 我们的论文 [DMID](https://ieeexplore.ieee.org/document/10607932) 被 **TPAMI** 接收。
- *2023.08.03*: &nbsp;🎉🎉 我们的论文 [PMN[J]](https://github.com/megvii-research/PMN/tree/TPAMI) 被 **TPAMI** 接收。
- *2022.11.17*: &nbsp;🎉🎉 我们的论文 [PMN[C]](https://github.com/megvii-research/PMN/) 荣获 **ACMMM 2022** <span style="color:red">最佳论文 runner-up 奖</span>。


<span class='anchor' id='representative-works-zh'></span>

# ⭐代表工作
<!-- YOND -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">YOND | TPAMI Minor Revision</div><img src='images/YOND_teaser.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[YOND: Practical Blind Raw Image Denoising Free from Camera-Specific Data Dependency](https://arxiv.org/abs/2506.03645)

**冯汉森**, 
[王立志](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[黄奕棋](), 
[李桐](https://scholar.google.com/citations?hl=zh-CN&user=KANjABUAAAAJ), 
[朱林](https://scholar.google.com/citations?hl=zh-CN&user=32d6xfEAAAAJ), 
[黄华](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***(TPAMI Minor Revision)***

<a href="https://arxiv.org/abs/2506.03645">论文</a> | 
<a href="https://huggingface.co/spaces/hansen97/YOND">在线演示</a> | 
<a href="https://github.com/fenghansen/YOND_public">代码 (仅评测)</a> | 
<a href="https://fenghansen.github.io/publication/YOND">项目页</a>

- 本文提出了一种新颖的Raw图像盲去噪方法。通过该方法，一个 AWGN 去噪器仅通过在合成数据集上的单次训练即可泛化到各种真实Raw数据。本文将其命名为 YOND，因为在本文方法下，**Y**ou **O**nly **N**eed a **D**enoiser（你只需要一个去噪器）。
- YOND 包含三个核心模块：由粗到精的噪声估计（CNE）、期望匹配的方差稳定变换（EM-VST）以及信噪比引导的去噪器（SNR-Net）。
- 在多个相机数据集上的大量实验，以及对挑战性场景的灵活解决方案，充分验证了 YOND 的实用性。
</div>
</div>

<!-- PNNP -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PNNP | TPAMI 2026</div><img src='images/PNNP_example.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning Physics-Informed Noise Models from Dark Frames for Low-Light Raw Image Denoising](https://doi.org/10.1109/TPAMI.2026.3651447)

**冯汉森**, 
[王立志](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[黄奕棋](), 
[汪彧之](https://scholar.google.com/citations?hl=zh-CN&user=JzBbU18AAAAJ), 
[朱林](https://scholar.google.com/citations?hl=zh-CN&user=32d6xfEAAAAJ), 
[黄华](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***TPAMI 2026***

<a href="https://doi.org/10.1109/TPAMI.2026.3651447">论文</a> |
<a href="https://arxiv.org/abs/2310.09126">Arxiv</a> | 
<a href="https://github.com/fenghansen/PNNP">代码 (仅评测)</a> |
<a href="https://fenghansen.github.io/publication/PNNP/">项目页</a> |
<a href="https://pan.baidu.com/s/1WMv2x7yqg0kMTBCddqkCLQ?pwd=vmcl">结果与权重</a>

- 本文提出了一种新颖的策略：从暗帧中学习噪声模型，而非依赖配对真实数据。
- 基于该策略，本文引入了高效的**噪声神经代理**（**P**hysics-informed **N**oise **N**eural **P**roxy, PNNP），用于逼近真实世界传感器噪声模型。
- PNNP 的低数据依赖展现了其在实用低光Raw图像去噪中的强大潜力。
</div>
</div>

<!-- DMID -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">DMID | TPAMI 2024</div><img src='images/DMID_pipeline.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Stimulating the Diffusion Model for Image Denoising via Adaptive Embedding and Ensembling](https://ieeexplore.ieee.org/document/10607932)

[李桐](https://scholar.google.com/citations?hl=zh-CN&user=KANjABUAAAAJ) *, **冯汉森** *, 
[王立志](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[朱林](https://scholar.google.com/citations?hl=zh-CN&user=32d6xfEAAAAJ), 
[熊志伟](https://scholar.google.com/citations?hl=zh-CN&user=Snl0HPEAAAAJ), 
[黄华](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***TPAMI, 2024***

<a href="https://arxiv.org/abs/2307.03992">论文</a> |
<a href="https://github.com/Li-Tong-621/DMID">代码</a> | 
<a href="https://zhuanlan.zhihu.com/p/1898420817429262557">中文笔记 (李桐)</a> |
<a href="https://zhuanlan.zhihu.com/p/639911080">中文笔记 (冯汉森)</a>

- 本文提出了一种名为 **DMID**（**D**iffusion **M**odel for **I**mage **D**enoising）的新策略，从去噪的视角理解和重新思考扩散模型。
- 本文的 DMID 策略包括一种自适应嵌入方法，将噪声图像嵌入到预训练的无条件扩散模型中，以及一种自适应集成方法，减少去噪图像中的失真。
</div>
</div>

<!-- PMN [J] -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PMN[J] | TPAMI 2024</div><img src='images/pipeline.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learnability Enhancement for Low-light Raw Denoising: A Data Perspective](https://ieeexplore.ieee.org/abstract/document/10207751)

**冯汉森**, 
[王立志](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[汪彧之](https://scholar.google.com/citations?hl=zh-CN&user=JzBbU18AAAAJ), 
[范浩强](https://scholar.google.com/citations?hl=zh-CN&user=bzzBut4AAAAJ), 
[黄华](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

***TPAMI, 2024***

<a href="https://ieeexplore.ieee.org/abstract/document/10207751">论文</a> |
<a href="https://github.com/megvii-research/PMN/tree/TPAMI">代码</a> |
<a href="https://fenghansen.github.io/publication/PMN">项目页</a> | 
[中文笔记](https://zhuanlan.zhihu.com/p/651674070) | 
<a href="https://pan.baidu.com/s/1fXlb-Q_ofHOtVOufe5cwDg?pwd=vmcl">数据集</a>

- 有限的数据量、复杂的噪声模型以及不成熟的数据质量共同构成了配对真实数据之间数据映射的可学习性瓶颈，限制了基于学习方法的去噪性能。
- 为突破该瓶颈，本文提出了一种可学习性增强策略，包含三种高效方法：散粒信号增广（SNA）、暗阴影校正（DSC），以及一套完善的图像采集协议与相应的**低光Raw图像去噪**（**L**ow-light **R**aw **I**mage **D**enoising, LRID）数据集。
</div>
</div>

<!-- PMN [C] -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PMN[C] | ACMMM 2022</div><img src='images/2022Learnability_MM.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learnability Enhancement for Low-light Raw Denoising: Where Paired Real Data Meets Noise Modeling](https://arxiv.org/abs/2207.06103)

***ACMMM, 2022 <span style="color:red">(最佳论文候选奖)</span>***

**冯汉森**, 
[王立志](https://scholar.google.com/citations?hl=zh-CN&user=FEprmwYAAAAJ), 
[汪彧之](https://scholar.google.com/citations?hl=zh-CN&user=JzBbU18AAAAJ), 
[黄华](https://scholar.google.com/citations?hl=zh-CN&user=EplUB7oAAAAJ)

<a href="https://arxiv.org/abs/2207.06103">论文</a> |
<a href="https://github.com/megvii-research/PMN">代码</a> |
<a href="https://fenghansen.github.io/publication/PMN">项目页</a> | 
[中文笔记](https://zhuanlan.zhihu.com/p/544592330) | 
<a href="https://www.bilibili.com/video/BV1pG411E7mE/">视频</a>

- 本文提出了一种基于噪声建模的可学习性增强策略，用于重构配对真实数据（PMN）。
</div>
</div>

<span class='anchor' id='publications-zh'></span>

# 📝 论文发表
- **冯汉森**, 王立志, 黄奕棋, 李桐, 朱林, 黄华. [YOND: Practical Blind Raw Image Denoising Free from Camera-Specific Data Dependency](https://arxiv.org/abs/2506.03645). ``(TPAMI Minor Revision)`` [![](https://img.shields.io/github/stars/fenghansen/YOND_public?style=social&label=Stars)](https://github.com/fenghansen/YOND_public) [![Hugging Face Space](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Space-blue)](https://huggingface.co/spaces/hansen97/YOND)

- **冯汉森**, 王立志, 黄奕棋, 汪彧之, 朱林, 黄华. [Learning Physics-Informed Noise Models from Dark Frames for Low-Light Raw Image Denoising](https://arxiv.org/pdf/2310.09126). ``TPAMI 2026`` [![](https://img.shields.io/github/stars/fenghansen/PNNP?style=social&label=Stars)](https://github.com/fenghansen/PNNP)

- <u>李桐</u>, **<u>冯汉森</u>**, 王立志, 朱林, 熊志伟, 黄华. [Stimulating the Diffusion Model for Image Denoising via Adaptive Embedding and Ensembling](https://arxiv.org/abs/2307.03992). ``TPAMI 2024`` [![](https://img.shields.io/github/stars/Li-Tong-621/DMID?style=social&label=Stars)](https://github.com/Li-Tong-621/DMID)

- **冯汉森**, 王立志, 汪彧之, 范浩强, 黄华. [Learnability Enhancement for Low-light Raw Image Denoising: A Data Perspective](https://ieeexplore.ieee.org/document/10207751). ``TPAMI 2023`` [![](https://img.shields.io/github/stars/megvii-research/PMN?style=social&label=Stars)](https://github.com/megvii-research/PMN)

- **冯汉森**, 王立志, 汪彧之, 黄华. [Learnability Enhancement for Low-light Raw Denoising: Where Paired Real Data Meets Noise Modeling](https://arxiv.org/abs/2207.06103). ``ACMMM 2022`` <span style="color:red">(最佳论文候选)</span> [![](https://img.shields.io/github/stars/megvii-research/PMN?style=social&label=Stars)](https://github.com/megvii-research/PMN)

<span class='anchor' id='educations-zh'></span>

# 📖 教育背景
- *2020 ~ 2026*, <a href="https://english.bit.edu.cn/">北京理工大学 (BIT)</a>, 博士
- *2016 ~ 2020*, <a href="https://en.ustb.edu.cn/">北京科技大学 (USTB)</a>, 学士
- *2010 ~ 2016*, <a href="https://en.wikipedia.org/wiki/High_School_Affiliated_to_Renmin_University_of_China">中国人民大学附属中学 (RDFZ)</a>, 中学


<span class='anchor' id='internships-zh'></span>

# 💻 实习经历
- *2024.05 - 2026.06*, [爱芯元智 (Axera)](https://axera-tech.com/), 研究 (AI-ISP)
- *2021.03 - 2023.08*, [旷视科技 (Megvii)](https://www.megvii.com/), 研究 (IS)
- *2020.07 - 2021.03*, [商汤科技 (SenseTime)](https://www.sensetime.com/), 研究 (ISP&Codec)

<span class='anchor' id='honors-and-awards-zh'></span>

# 🎖 荣誉奖项
<!-- - 北京理工大学校级优秀博士学位论文, 2026 -->
- [ACM Multimedia 2022](https://2022.acmmm.org/best-paper-award/) 最佳论文候选（Best Paper Runner-Up Award）
- 北京科技大学自动化学院优秀毕业生, 2020
- [NOIP 2011 (北京)](https://blog.sina.com.cn/s/blog_4ee63ce90102dwjd.html) 提高组一等奖, 2011

</div>
