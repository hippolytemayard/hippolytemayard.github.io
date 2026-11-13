---
layout: page
title: products
permalink: /products/
description: Clinical AI I have built and taken to production.
nav: true
nav_order: 1
---

<div class="products">

<div class="product">
  <div class="product-head">
    <h3>Second Opinion 3D — CBCT pathology & anatomy</h3>
    <span class="product-org">Pearl AI · 2025 – present</span>
  </div>
  <p><strong>Role.</strong> Technical owner of the 3D program; program lead since February 2026.</p>
  <p><strong>Scope.</strong> Detection of five pathologies and segmentation of eight anatomical structures on cone-beam CT. Two FDA 510(k) submissions filed. Validation protocol, locked test set with enforced train/test independence, performance reports, technical file.</p>
  <p><strong>Outcome.</strong> Pathology models shipped commercially seven months after the first one was trained, with both 510(k) submissions filed in the same period; <a href="https://hellopearl.com/news/pearl-launches-second-opinion-3d-bringing-fda-cleared-3d-imaging-ai-to-general-dentists-for-the-first-time">general launch in September 2026</a>. Pearl is the <a href="https://hellopearl.com/news/pearl-becomes-first-dental-ai-company-cleared-by-fda-for-both-2d-and-3d-imaging">first dental-AI company cleared by the FDA for both 2D and 3D imaging</a> (May 2025).</p>
  <p class="product-stack">PyTorch · MONAI · nnU-Net · AWS · MLflow · GitLab CI</p>
</div>

<div class="product">
  <div class="product-head">
    <h3>Second Opinion — 2D caries detection</h3>
    <span class="product-org">Pearl AI · 2025 – present</span>
  </div>
  <p><strong>Role.</strong> Owner of the caries model on intra-oral and panoramic X-rays.</p>
  <p><strong>Scope.</strong> Cut false positives by 25% at constant recall, by investigating real-world failure modes through systematic re-annotation of dismissed clinical cases and retraining the detection model — directly reducing user churn. Operating points designed for two clinical personas (recall-first vs specificity-first), default threshold set between them, per-site sensitivity presets with per-class PR curves, per-device robustness checks. Caries progression shipped on top.</p>
  <p><strong>Reach.</strong> 50,000+ clinicians, 23,000+ practices, 120+ countries.</p>
</div>

<div class="product">
  <div class="product-head">
    <h3>Allisone — clinical diagnostic features</h3>
    <span class="product-org">Allisone.ai · 2021 – 2024</span>
  </div>
  <p><strong>Role.</strong> Founding deep-learning engineer.</p>
  <p><strong>Scope.</strong> First computer-vision models of the company — classification, detection and segmentation on 2D panoramic and intra-oral X-rays — powering 5+ clinical features; detection, segmentation and generative modelling on 3D CBCT; the research behind SISTR and the MICCAI 2023 paper.</p>
  <p><strong>Outcome.</strong> Product in daily use by dentists; the company raised a €10M seed round in 2022.</p>
</div>

<div class="product">
  <div class="product-head">
    <h3>Surgitec-Robotics — 3D brain-vessel segmentation</h3>
    <span class="product-org">Theodo Data & AI · 2024</span>
  </div>
  <p><strong>Role.</strong> Lead AI engineer.</p>
  <p><strong>Scope.</strong> Vessel segmentation on 3D brain imaging for surgical trajectory planning in minimally invasive neurosurgery.</p>
</div>

</div>
