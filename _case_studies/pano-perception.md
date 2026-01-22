---
layout: page
title: 360° Omnidirectional Perception
description: Multi-task Learning for Depth & Surface Normal
category: Case Study
---

# 360° Omnidirectional Perception: Depth & Surface Normal

> **Journal Publications**: 📄 **IEEE TIP (Tier A*)** | 📄 **CVMJ (IF: 17.2)**

## 1. The Challenge
Equirectangular Projection (ERP) introduces severe geometric distortion, causing standard CNN kernels to fail in polar regions and ignoring crucial surface normal constraints.

## 2. Research & Tech Matrix
We developed a complementary multi-task learning architecture:
* **Cross360**: Multi-scale projection fusion to maintain accuracy across varying distortion rates.
* **PanoNormal**: A joint prediction model for Depth and Surface Normal.
* **Geometric Consistency**: Leveraging 3D spatial relationships to refine both outputs.

### Core Mathematical Foundation
The optimization is guided by a joint loss function:

<div style="overflow-x: auto;">
$$\mathcal{L}_{total} = \lambda_{d}\mathcal{L}_{depth} + \lambda_{n}\mathcal{L}_{normal} + \lambda_{c}\mathcal{L}_{consistency}$$
</div>


## 3. Impact & Application
* **Academic Excellence**: Published in top-tier journals including **IEEE TIP** and **CVMJ**.
* **Industrial ROI**: Optimized processing for 3,850+ minutes of VR content, reducing conversion costs by **50%**.