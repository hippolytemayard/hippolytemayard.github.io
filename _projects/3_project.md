---
layout: page
permalink: /code/teeth-3d-mesh-segmentation/
title: teeth-3d-mesh-segmentation
description: MeshSegNet for automated tooth labelling on raw intra-oral 3D scans — 3DTeethSeg22 challenge (MICCAI 2022).
img: assets/img/project3/preds_vs_gt.gif
importance: 1
category: open source
github: https://github.com/hippolytemayard/teeth-3d-mesh-segmentation
meta_description: "MeshSegNet for automated tooth labelling on raw intra-oral 3D scans, upper and lower jaw, on the 3DTeethSeg22 challenge data (MICCAI 2022): 1,800 scans."
---

**Problem.** Label every tooth on a raw intra-oral scanner mesh (upper and lower jaw) with no preprocessing — a prerequisite for orthodontic planning and aligner design.

**Approach.** Implementation of [MeshSegNet](https://ieeexplore.ieee.org/abstract/document/8984309) (multi-scale graph-constrained mesh feature learning) on the [3DTeethSeg22](https://github.com/abenhamadou/3DTeethSeg22_challenge) challenge data: 1,800 scans from 900 patients, 33 labels (background + 32 FDI teeth). Per-cell features (coordinates, normals, relative position), two graph-constrained learning modules at different radii, dense cell-wise prediction, then graph-cut refinement.

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project3/preds_vs_gt.gif" class="img-fluid rounded z-depth-1" alt="Ground truth and predicted tooth labels on a rotating 3D jaw mesh" %}</div>
  <div class="col-sm-6 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project3/meshsegnet_architecture.png" class="img-fluid rounded z-depth-1" alt="MeshSegNet architecture diagram" %}</div>
</div>
<div class="caption">Left: ground truth vs prediction on a held-out jaw. Right: MeshSegNet architecture.</div>

**Takeaway.** The hard part is not the network but the mesh pipeline: decimation to a fixed cell budget, consistent normals, and keeping train/test splits patient-disjoint (upper and lower jaws of the same patient must land on the same side).
