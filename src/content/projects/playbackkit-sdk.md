---
title: "PlaybackKit, Cross-Microsoft Video SDK"
summary: "Architected and shipped a unified video SDK from 0-to-1, integrated into 3 Microsoft products."
role: "Senior Software Engineering Manager, iOS"
company: "Microsoft"
date: 2023-06-01
featured: true
sortOrder: 3
tags: ["Swift", "SDK Design", "Video", "Architecture", "0-to-1"]
heroImage: ""
techStack: ["Swift", "AVFoundation", "Modular Architecture", "Adaptive Streaming", "Offline Caching"]
impact:
  - "Integrated into 3 Microsoft products"
  - "Eliminated duplicated engineering effort across Bing, MSN, and Start"
  - "Adaptive bitrate streaming, offline caching, accessibility-compliant controls"
  - "Established pattern for cross-team SDK development at Microsoft"
problem: "Three different Microsoft consumer products (Bing, MSN, and Start) were each building their own video playback experiences independently. This led to duplicated effort, inconsistent UX, and varying quality levels across products."
approach: "I identified the opportunity to unify these efforts into a shared SDK. I built an immersive video playback proof-of-concept, presented it to leadership, and secured approval to invest engineering resources. I then architected PlaybackKit as a modular SDK with clean API boundaries."
---

## The Opportunity

I noticed three teams building nearly identical video players with different approaches, different bugs, and different user experiences. Rather than letting this duplication continue, I took the initiative to build a proof-of-concept showing what a unified experience could look like.

## Architecture

### Modular Design
PlaybackKit was architected as a drop-in module with minimal configuration required. Teams could integrate the SDK and get a high-quality video playback experience out of the box, with customization hooks for product-specific needs.

### Adaptive Streaming
Built-in adaptive bitrate streaming adjusts quality based on network conditions, ensuring smooth playback across varying connectivity environments. This was critical for a global user base.

### Offline Caching
The SDK includes intelligent content caching for offline-resilient playback, particularly important for emerging markets with unreliable connectivity.

### Accessibility
All playback controls are fully accessible: VoiceOver-compatible, Dynamic Type-aware, and compliant with accessibility standards.

## Outcome
PlaybackKit was adopted into 3 Microsoft products, eliminating duplicated effort and establishing a new pattern for cross-team SDK development. The POC-to-approval-to-ship process demonstrated the value of 0-to-1 prototyping.
