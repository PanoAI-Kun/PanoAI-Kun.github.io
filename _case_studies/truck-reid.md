---
layout: page
title: Industrial Truck Re-Identification
description: Siamese Architecture for Extreme Environments
category: Case Study
---

# Industrial Cross-View Feature Matching & Truck Re-Identification

> **Achievement**: 🏆 **Best Paper Award 2025**
> **ROI**: 📉 **Reduced manual inspection workload by 80%**

## 1. The Challenge
Under extreme industrial environments (e.g., underground mines), traditional methods like YOLOv9 fail due to viewpoint changes and dust interference.

## 2. Technical Breakthrough: Align-then-Compare
We implemented a **Siamese Framework** consisting of:
* **Semantic-Alignment Network**: Uses **Cross-Attention** to model spatial correspondence.
* **Detail-Aware Network**: Fuses HSV and Sobel gradient features for fine-grained clues.

### Core Mathematical Model
The joint scoring function is defined as:
$$\hat{y} = \frac{1}{2}s_{ca} + \frac{1}{2}s_{da}$$

## 3. Performance Metrics
| Model | Accuracy (Extreme Lighting) |
| :--- | :--- |
| **Proposed (Ours)** | **89.64%** |
| YOLOv9 (Baseline) | 64.94% |