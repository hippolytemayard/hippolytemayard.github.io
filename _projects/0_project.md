---
layout: page
permalink: /code/yolov11-pytorch/
title: yolov11-pytorch
description: Apache-2.0 re-implementation of YOLOv11 in pure PyTorch — detection, instance segmentation and pose, without the AGPL dependency.
img: assets/img/project_yolo/showcase.jpg
importance: 1
category: open source
github: https://github.com/hippolytemayard/yolov11-pytorch
---

**Problem.** The reference YOLOv11 implementation is AGPL-3.0 and tied to the Ultralytics package. Teams shipping commercial products either pay for a licence or avoid the architecture altogether.

**What this is.** A clean-room, readable PyTorch implementation of the YOLOv11 architecture under Apache 2.0, architecture-compatible with the original, with the three task heads:

- **Detection** — 80 COCO classes, multi-scale FPN head.
- **Instance segmentation** — prototype-based mask head.
- **Pose** — 17 COCO keypoints with skeleton decoding.

<div class="row">
  <div class="col-sm-4 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_detection.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}</div>
  <div class="col-sm-4 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_segmentation.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}</div>
  <div class="col-sm-4 mt-3 mt-md-0">{% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_pose.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}</div>
</div>
<div class="caption">Detection · instance segmentation · pose, same backbone.</div>

| | Ultralytics | This project |
|---|---|---|
| Licence | AGPL-3.0 | Apache 2.0 |
| Commercial use | Paid licence | Free |
| Dependency | `ultralytics` package | PyTorch only |
| Architecture | YOLOv11 | Compatible |

**Status.** Code complete for the three heads. Weights are being trained from scratch on COCO so that they can be released under Apache 2.0 as well — no Ultralytics checkpoints are redistributed.

**References.** [YOLOv11-pt](https://github.com/jahongir7174/YOLOv11-pt) (initial reference), [Ultralytics](https://github.com/ultralytics/ultralytics) (original architecture).
