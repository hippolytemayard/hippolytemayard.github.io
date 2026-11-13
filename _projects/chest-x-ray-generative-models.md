---
layout: page
permalink: /code/chest-x-ray-generative-models/
title: chest-x-ray-generative-models
description: "Unconditional generation of chest X-rays with a denoising diffusion probabilistic model (DDPM), trained at 128×128 on a public chest radiography dataset."
img: assets/img/project_chest/generated-sample.png
importance: 2
category: open source
github: https://github.com/hippolytemayard/chest-x-ray-generative-models
---

**What this is.** Unconditional generation of chest X-rays with a [Denoising Diffusion Probabilistic Model](https://arxiv.org/abs/2006.11239), trained at 128×128 on a public chest radiography dataset ([Kaggle](https://www.kaggle.com/datasets/francismon/curated-covid19-chest-xray-dataset)).

<div class="row justify-content-center">
  <div class="col-sm-8 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project_chest/generated-sample.png" class="img-fluid rounded z-depth-1" alt="Generated chest X-rays" %}</div>
</div>
<div class="caption">Samples from the trained model.</div>

**Scope and credits.** The U-Net and the Gaussian diffusion code are adapted from [lucidrains/denoising-diffusion-pytorch](https://github.com/lucidrains/denoising-diffusion-pytorch). This repository adds:

- single-channel (grayscale) training on radiographs,
- a dataset and normalization pipeline for the X-ray images,
- a YAML-driven training entry point,
- an inference notebook and a released checkpoint.

No quantitative evaluation (FID, downstream task) is reported.

**References.** J. Ho, A. Jain, P. Abbeel. _Denoising Diffusion Probabilistic Models_. NeurIPS 2020. U. Sait et al. _Curated Dataset for COVID-19 Posterior-Anterior Chest Radiography Images (X-Rays)_. Mendeley Data, 2020.
