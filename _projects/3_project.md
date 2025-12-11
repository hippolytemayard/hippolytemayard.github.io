---
layout: page
title: 3D Teeth Segmentation
description: Deep learning for automated tooth segmentation and labeling on 3D dental surfaces
img: assets/img/project3/preds_vs_gt.gif
importance: 1
category: research
github: https://github.com/hippolytemayard/teeth-3d-mesh-segmentation
---

Implementation of [MeshSegNet: Deep Multi-Scale Mesh Feature Learning for Automated Labeling of Raw Dental Surface from 3D Intraoral Scanners](https://ieeexplore.ieee.org/abstract/document/8984309) for automated tooth segmentation and labeling on raw dental surfaces.

The dataset used for this project is the challenge 3DTeethSeg22 dataset (associated with MICCAI 2022) and is publicly available.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project3/preds_vs_gt.gif" title="Predictions vs Ground Truth" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Ground truth (left) vs. Predictions (right) on 3D dental scans.
</div>

## Dataset

The _3DTeethSeg22_challenge_ dataset contains a collection of 3D dental surface scans obtained from intraoral scanners. These scans represent the raw dental surfaces of patients and serve as the input data for the segmentation task. The dataset includes a diverse range of dental conditions and variations, capturing different teeth shapes, sizes, and occlusions. A total of 1800 3D intra-oral scans have been collected for 900 patients covering their upper and lower jaws separately.

## Implementation Details

We base our implementation on the MeshSegNet paper as well as the official implementation (see [GitHub](https://github.com/Tai-Hsien/MeshSegNet/tree/master)).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project3/meshsegnet_architecture.png" title="MeshSegNet Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MeshSegNet architecture for 3D mesh segmentation.
</div>

## References

1. Tai-Hsien Wu, Chia-Jung Hsu, Sheng-Hong Huang, et al., "MeshSegNet: Deep Multi-Scale Mesh Feature Learning for Automated Labeling of Raw Dental Surface from 3D Intraoral Scanners," in IEEE Transactions on Medical Imaging, vol. 39, no. 4, pp. 945-956, April 2020. [Link](https://ieeexplore.ieee.org/abstract/document/8984309)

2. "3DTeethSeg22_challenge: Dataset for the MICCAI 2022 3D Teeth Segmentation Challenge," [GitHub](https://github.com/abenhamadou/3DTeethSeg22_challenge).
