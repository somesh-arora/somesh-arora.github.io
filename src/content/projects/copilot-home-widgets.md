---
title: "Copilot Home Widgets"
summary: "Architected a server-driven personalization system from 0-to-1, adopted cross-platform across iOS, Windows, and GroupMe."
role: "Member of Technical Staff, iOS"
company: "Microsoft AI"
date: 2025-04-01
featured: false
sortOrder: 4
tags: ["Swift", "SwiftUI", "Server-Driven UI", "Cross-Platform", "0-to-1"]
heroImage: ""
techStack: ["Swift", "SwiftUI", "Server-Driven UI", "RESTful APIs", "Cross-Platform Architecture"]
impact:
  - "Adopted cross-platform across iOS, Windows, and GroupMe"
  - "Replaced static content with dynamic, context-aware personalization"
  - "Clean API design validated by multi-platform adoption"
  - "Server-driven architecture enables personalization without app updates"
problem: "Copilot's home screen displayed static content that didn't adapt to user context or behavior. This led to low engagement with the home experience and missed opportunities for personalization."
approach: "I architected a server-driven widget system from scratch. The server sends widget configurations that the client renders dynamically, enabling personalization without app updates. Widgets adapt based on user behavior, time of day, recent interactions, and other contextual signals."
---

## Architecture

### Server-Driven Design
The widget system uses a server-driven architecture where the backend sends widget type, configuration, and content as structured data. The iOS client renders these dynamically, meaning new widget types and personalization strategies can be deployed without shipping app updates.

### Context-Aware Personalization
Widgets adapt based on multiple contextual signals: user behavior patterns, time of day, recent interactions, and engagement history. This creates a home experience that feels tailored to each user.

### Cross-Platform Adoption
The architecture was designed with clean API boundaries and platform-agnostic data contracts. This enabled adoption across iOS, Windows, and GroupMe, a validation of the architectural approach and API design quality.

## Outcome
The system replaced static content with dynamic, context-aware experiences that drive higher engagement. Cross-platform adoption across three surfaces validated the architectural decisions and established a pattern for server-driven UI.
