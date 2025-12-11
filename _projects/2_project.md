---
layout: page
title: Chest X-ray DDPM
description: Denoising Diffusion Probabilistic Model for chest X-ray image generation
img: assets/img/project2/diffusion_chest.png
importance: 2
category: research
github: https://github.com/hippolytemayard/chest-x-ray-generative-models
---

Implementation of [Denoising Diffusion Probabilistic Model](https://arxiv.org/abs/2006.11239) for chest X-ray image generation.

The dataset used for this project is an open dataset and is available publicly on [Kaggle](https://www.kaggle.com/datasets/francismon/curated-covid19-chest-xray-dataset).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2/diffusion_chest.png" title="Diffusion process" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The diffusion process for chest X-ray generation.
</div>

## Dataset

For this project, we utilize an open dataset called the Curated COVID-19 Chest X-ray Dataset. This dataset contains a collection of chest X-ray images, including those of patients with COVID-19, pneumonia, and other respiratory conditions. The dataset is publicly available on Kaggle, providing a rich and diverse set of chest X-ray images for training and evaluation.

## Implementation Details

We base our implementation on an existing PyTorch implementation of DDPM (see [GitHub](https://github.com/lucidrains/denoising-diffusion-pytorch)). This implementation serves as a solid foundation for our project, allowing us to leverage the power of PyTorch and build upon the existing codebase. By adapting the original DDPM framework to the specific task of generating chest X-ray images, we can explore the potential of this model in the medical imaging domain.

## Methodology

The Denoising Diffusion Probabilistic Model operates by iteratively applying a series of diffusion steps to a noise vector, gradually transforming it into a realistic image. This process involves denoising the image at each step using a trainable denoiser network. The model is trained by maximizing the likelihood of the target images in the training dataset. By optimizing the model parameters, we can generate high-quality chest X-ray images that capture the characteristics of different respiratory conditions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2/generated-sample.png" title="Generated samples" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Generated chest X-ray samples using our DDPM implementation.
</div>

## Conclusion

In this project, we propose the implementation of a Denoising Diffusion Probabilistic Model for generating chest X-ray images. By leveraging the power of DDPM and the availability of the Curated COVID-19 Chest X-ray Dataset, we aim to generate realistic and diverse chest X-ray images that can aid in medical research, diagnosis, and education.

## References

1. Ho, J., Chen, X., Srinivas, A., Duan, Y., Abbeel, P., & Arora, S. (2020). Denoising Diffusion Probabilistic Models. _arXiv preprint arXiv:2006.11239_.
2. Curated COVID-19 Chest X-ray Dataset. [Kaggle](https://www.kaggle.com/datasets/francismon/curated-covid19-chest-xray-dataset).
3. Lucidrains. Denoising Diffusion Probabilistic Model - PyTorch. [GitHub](https://github.com/lucidrains/denoising-diffusion-pytorch).
