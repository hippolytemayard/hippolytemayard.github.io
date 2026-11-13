---
layout: page
permalink: /code/yolov11-pytorch/
title: yolov11-pytorch
description: Apache-2.0 re-implementation of the YOLOv11 architecture in pure PyTorch — detection, instance segmentation and pose heads. Trained weights to come.
img: assets/img/project_yolo/showcase.jpg
importance: 4
category: open source
github: https://github.com/hippolytemayard/yolov11-pytorch
---

**Problem.** The reference YOLOv11 implementation is AGPL-3.0 and tied to the Ultralytics package. Using the architecture under a permissive licence takes two things: an independent implementation, and weights trained independently.

**What this is.** A readable PyTorch re-implementation of the YOLOv11 architecture under Apache 2.0, with no dependency on the `ultralytics` package, and the three task heads:

- **Detection** — 80 COCO classes, multi-scale FPN head.
- **Instance segmentation** — prototype-based mask head.
- **Pose** — 17 COCO keypoints with skeleton decoding.

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_detection.jpg" class="img-fluid rounded z-depth-1" alt="Object detection example with bounding boxes" zoomable=true %}</div>
  <div class="col-sm-4 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_segmentation.jpg" class="img-fluid rounded z-depth-1" alt="Instance segmentation example with masks" zoomable=true %}</div>
  <div class="col-sm-4 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_pose.jpg" class="img-fluid rounded z-depth-1" alt="Pose estimation example with skeletons" zoomable=true %}</div>
</div>
<div class="caption">Detection · instance segmentation · pose, same backbone — run with Ultralytics weights transferred to this implementation, which remain AGPL-3.0.</div>

|                 | Ultralytics           | This project              |
| --------------- | --------------------- | ------------------------- |
| Code licence    | AGPL-3.0              | Apache 2.0                |
| Dependency      | `ultralytics` package | PyTorch only              |
| Trained weights | AGPL-3.0              | To come, under Apache 2.0 |
| COCO benchmark  | Published             | Not yet                   |

**Status.** Code complete for the three heads. Weights are being trained from scratch on COCO, to be released under Apache 2.0; no weights and no COCO mAP are published yet. Until then, the code runs with Ultralytics checkpoints converted by the transfer script, which stay under AGPL-3.0 — no Ultralytics checkpoints are redistributed.

**References.** [YOLOv11-pt](https://github.com/jahongir7174/YOLOv11-pt) (initial reference), [Ultralytics](https://github.com/ultralytics/ultralytics) (original architecture).
