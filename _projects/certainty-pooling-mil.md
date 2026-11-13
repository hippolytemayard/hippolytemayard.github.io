---
layout: page
permalink: /code/certainty-pooling-mil/
title: certainty-pooling-mil
description: "PyTorch implementation of Certainty Pooling (Gildenblat et al., 2020) for weakly supervised classification of histopathology slides — one label per slide, no label per tile."
importance: 3
category: open source
github: https://github.com/hippolytemayard/certainty-pooling-mil
meta_description: "PyTorch implementation of Certainty Pooling (Gildenblat et al., 2020) for weakly supervised classification of histopathology slides, with one label per slide."
---

**Problem.** Each slide is a _bag_ of tiles. Tiles are represented by pre-extracted ResNet features, and only the slide-level binary label is known. The model has to score a slide from its tiles without tile-level supervision.

**Method.** Max pooling picks the tile with the highest score, so a single over-confident negative tile can flip the slide prediction. [Certainty pooling](https://arxiv.org/abs/2008.10548) weights each tile score by the model's certainty about it:

1. Run `T` stochastic forward passes with dropout active (Monte-Carlo dropout).
2. Certainty of tile `k`: `C_k = 1 / (std(X_k) + eps)`, where `X_k` is the vector of its `T` predictions.
3. The slide is represented by the tile `k* = argmax_k (C_k * h_k)`, where `h_k` is the deterministic prediction.
4. The loss is computed on the selected tile only.

**What is in the repository.** Certainty pooling, per bag and batched over bags of different sizes; a tile classifier (5 fully connected layers with dropout, sigmoid output); class-weighted binary cross-entropy; single, repeated and stratified k-fold training; inference on a held-out set, single model or k-fold ensemble. The dataset is not distributed with the repository.

**Reference.** J. Gildenblat, I. Ben-Shaul, Z. Lapp, E. Klaiman. _Certainty Pooling for Multiple Instance Learning_. arXiv:2008.10548, 2020.
