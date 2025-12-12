---
layout: page
title: YOLO v11 Open Source
description: Clean, modular, Apache 2.0 licensed YOLOv11 implementation in pure PyTorch with multi-task support
img: assets/img/project_yolo/showcase.jpg
importance: 1
category: research
github: https://github.com/hippolytemayard/yolov11-pytorch
---

<style>
.hero-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.hero-banner h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: white !important;
}

.hero-banner p {
  font-size: 1.1rem;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto 1.5rem;
}

.badge-row {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-badge {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.3);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  background: linear-gradient(145deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  padding: 1.8rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

.comparison-section {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  color: white;
}

.comparison-section h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white !important;
}

.comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border-radius: 12px;
}

.comparison-table th {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  color: white;
  border-bottom: 2px solid rgba(255,255,255,0.1);
}

.comparison-table td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.9);
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.check-yes {
  color: #4ade80;
  font-weight: bold;
}

.check-no {
  color: #f87171;
}

.showcase-section {
  margin: 2.5rem 0;
}

.showcase-section h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}

.showcase-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.showcase-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.showcase-item:hover img {
  transform: scale(1.05);
}

.showcase-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 2rem 1rem 1rem;
  font-weight: 600;
  font-size: 1rem;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  margin: 2rem 0;
}

.cta-section h3 {
  color: white !important;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cta-section p {
  color: rgba(255,255,255,0.9);
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: #667eea;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(0,0,0,0.3);
  color: #764ba2;
  text-decoration: none;
}

.license-badge {
  display: inline-block;
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  color: white;
  padding: 0.3rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-left: 0.5rem;
}

.update-banner {
  background: linear-gradient(90deg, #fef3c7 0%, #fde68a 100%);
  border-left: 4px solid #f59e0b;
  border-radius: 0 12px 12px 0;
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.update-banner .icon {
  font-size: 1.5rem;
}

.update-banner .text {
  flex: 1;
  color: #451a03;
  font-weight: 600;
}
</style>

<!-- Hero Banner -->
<div class="hero-banner">
  <h2>🚀 YOLOv11 Reimagined</h2>
  <p>A complete, license-free reimplementation of YOLOv11 in pure PyTorch. Built for researchers and engineers who need transparent, hackable code without vendor lock-in.</p>
  <div class="badge-row">
    <span class="tech-badge">🐍 Pure PyTorch</span>
    <span class="tech-badge">📜 Apache 2.0</span>
    <span class="tech-badge">🎯 Multi-Task</span>
    <span class="tech-badge">⚡ Production Ready</span>
  </div>
</div>

<!-- Update Banner -->
<div class="update-banner">
  <span class="icon">🚧</span>
  <div class="text">
    <strong style="color: #451a03 !important;">December 2025 Update: Open-source weights are coming soon! Currently training all models from scratch on COCO for fully Apache 2.0 licensed weights.</strong>
  </div>
</div>

<!-- Feature Cards -->
<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">🎯</div>
    <h4>Object Detection</h4>
    <p>80 COCO classes with multi-scale FPN for accurate bounding box predictions</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🎭</div>
    <h4>Instance Segmentation</h4>
    <p>Pixel-perfect instance masks using prototype-based segmentation</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">🦴</div>
    <h4>Pose Estimation</h4>
    <p>17 keypoints with skeleton connections for human pose analysis</p>
  </div>
</div>

<!-- Showcase Section -->
<div class="showcase-section">
  <h3>✨ Multi-Task Capabilities</h3>
  <div class="showcase-grid">
    <div class="showcase-item">
      {% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_detection.jpg" class="img-fluid" zoomable=true %}
      <div class="showcase-label">🎯 Detection</div>
    </div>
    <div class="showcase-item">
      {% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_segmentation.jpg" class="img-fluid" zoomable=true %}
      <div class="showcase-label">🎭 Segmentation</div>
    </div>
    <div class="showcase-item">
      {% include figure.liquid loading="eager" path="assets/img/project_yolo/showcase_pose.jpg" class="img-fluid" zoomable=true %}
      <div class="showcase-label">🦴 Pose</div>
    </div>
  </div>
</div>

<!-- Comparison Section -->
<div class="comparison-section">
  <h3>🆚 Why Choose This Implementation?</h3>
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Ultralytics</th>
        <th>This Project</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>License</strong></td>
        <td class="check-no">AGPL-3.0</td>
        <td class="check-yes">Apache 2.0 ✓</td>
      </tr>
      <tr>
        <td><strong>Commercial Use</strong></td>
        <td class="check-no">Requires paid license</td>
        <td class="check-yes">Free ✓</td>
      </tr>
      <tr>
        <td><strong>Dependencies</strong></td>
        <td class="check-no">Ultralytics package</td>
        <td class="check-yes">Pure PyTorch ✓</td>
      </tr>
      <tr>
        <td><strong>Architecture</strong></td>
        <td>YOLOv11</td>
        <td class="check-yes">100% Compatible ✓</td>
      </tr>
      <tr>
        <td><strong>Code Transparency</strong></td>
        <td class="check-no">Abstracted</td>
        <td class="check-yes">Fully Readable ✓</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- CTA Section -->
<div class="cta-section">
  <h3>🌟 Ready to Get Started?</h3>
  <p>Clone the repository and start building with license-free YOLOv11 today!</p>
  <a href="https://github.com/hippolytemayard/yolov11-pytorch" class="cta-button" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
    </svg>
    View on GitHub
  </a>
</div>

---

## 📚 References

1. **[YOLOv11-pt](https://github.com/jahongir7174/YOLOv11-pt)** by @jahongir7174 — Initial reference implementation
2. **[Ultralytics](https://github.com/ultralytics/ultralytics)** — Original YOLO architecture

---

<div style="text-align: center; margin-top: 2rem; color: #666;">
  <p><strong>Built for the Open Source Community</strong> 🌍</p>
</div>
