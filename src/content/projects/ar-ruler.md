---
title: "AR Ruler, Spatial Measurement"
summary: "Measure real-world distances using ARKit and SceneKit, replacing the physical tape measure."
role: "Solo Developer"
company: ""
date: 2019-03-01
featured: false
sortOrder: 5
tags: ["Swift", "ARKit", "SceneKit", "Spatial Computing"]
heroImage: "/images/projects/ar-ruler/ar-ruler-demo.png"
techStack: ["Swift", "ARKit", "SceneKit", "UIScene"]
impact:
  - "Won First Prize in Augmented Reality Application Demonstration Competition"
  - "Sub-centimeter accuracy using ARKit's plane detection and hit testing"
  - "Demonstrates practical AR beyond gaming: utility-first spatial computing"
problem: "Physical tape measures are inconvenient and impractical in many real-world scenarios. ARKit opened the door to spatial measurement using just the iPhone's camera, but building a reliable, accurate measurement tool required careful handling of plane detection, anchor tracking, and user interaction."
approach: "I leveraged ARKit for world tracking and plane detection, combined with SceneKit for rendering measurement lines and labels in 3D space. The app uses hit testing against detected surfaces to place measurement anchors, then calculates real-world distance between them."
---

## Technical Details

### Plane Detection & Hit Testing
The app uses ARKit's horizontal and vertical plane detection to identify real-world surfaces. Measurement points are placed via ray casting from the screen tap point into the AR scene, ensuring anchors attach to real geometry rather than floating in space.

### Real-Time Rendering
SceneKit renders measurement lines, endpoints, and distance labels in real-time as the user moves their device. Labels automatically orient toward the camera for readability.

### Accuracy
By leveraging ARKit's visual-inertial odometry and plane refinement, the app achieves sub-centimeter accuracy on supported devices, sufficient for casual home improvement and furniture placement tasks.
