---
layout: page
title: Certainty Pooling for MIL
description: Implementation of Certainty Pooling for Multiple Instance Learning on breast cancer metastases detection
img: assets/img/project1/slide.png
importance: 1
category: research
github: https://github.com/hippolytemayard/certainty-pooling-mil
---

This project proposes an implementation of [*Certainty Pooling for Multiple Instance Learning, Gildenblat et al.*](https://arxiv.org/pdf/2008.10548.pdf) on the data challenge [**Detecting breast cancer metastases**](https://challengedata.ens.fr/participants/challenges/18/) hosted by Owkin.

## Introduction

Multiple Instance Learning is a form of weakly supervised learning in which the data is arranged in sets of instances called bags with one label assigned per bag. The bag level class prediction is derived from the multiple instances through application of a permutation invariant pooling operator on instance predictions or embeddings.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/slide.png" title="MIL slide" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Whole slide image analysis for breast cancer metastases detection.
</div>

## Certainty Pooling

Let us remind the Multiple Instance Pooling general assumptions. A bag is positive if at least one of the instances contains evidence for the label, that is, in our case, if at least one tile contains malignant cells. On the other hand, a bag is negative if all the instances does not contain evidence for the label (in our case, a slide is negative if all the tiles contain normal cells).

We define a bag as a group of instances $${x_1,...,x_K}$$, where K is the size of the bag. It is important to note that K can vary and is not constant. $$Y \in \{0, 1\}$$ is the binary label associated with every bag.

The equation below summarizes the Multiple Instance Learning assumption:

$$
Y=\left\{\begin{array}{l}0, \text { iff } y_{k}=0, \text { for } k \in\{1 \ldots K\} \\ 1, \quad \text { otherwise }\end{array}\right\}
$$

The Certainty Pooling operator appears to be an efficient pooling function in the case of low evidence ratio bags, compared to classical pooling operators. Indeed, the more a bag contains instances, the more likely the evidence ratio will be low.

The Certainty Pooling method is based on the calculation of a certainty score that will be allocated to every instances of a bag. This certainty score is based on Monte-Carlo (MC) dropout, a method that measures certainty in Deep Learning models.

We define $$X_k$$ as the vector of MC dropout predictions for an instance k. The instance certainty score $$C_k$$ is defined as:

$$
C_{k}=C\left(X_{k}\right)=\frac{1}{\sigma\left(X_{k}\right)+\epsilon}
$$

where $$\sigma$$ is the standard deviation operator and $$\epsilon$$ is a small number that prevents division by zero.

Once the certainty score $$C_{k}$$ has been computed for all the instances $$k \in\{1 \ldots K\}$$, the global bag level prediction $$Z_{m}$$ is defined as:

$$
Z_{m}=h_{k^{*} m} \text { where } k^{*}=\operatorname{argmax}\left(C_{k} \cdot h_{k m}\right)
$$

where $$k^{*}$$ is the index of the instance having the highest certainty weighted model output.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/archi.png" title="Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Architecture of the Certainty Pooling method.
</div>
