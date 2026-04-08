---
title: "Garmin Connect iOS"
summary: "Shipped features used by 3M+ daily active users on Garmin's flagship health and fitness app."
role: "Software Engineer, iOS"
company: "Garmin International"
date: 2019-01-01
featured: false
sortOrder: 8
tags: ["Swift", "Objective-C", "BLE", "Protobuf", "Performance"]
heroImage: "/images/logos/garmin-connect.png"
techStack: ["Swift", "Objective-C", "BLE", "Protobuf", "REST APIs", "Firebase Crashlytics"]
impact:
  - "Features shipped to 3M+ daily active users worldwide"
  - "Reduced crash rate through Crashlytics-driven debugging and proactive monitoring"
  - "Delivered fully responsive, programmatic UI layouts across all iPhone models"
  - "Supported full localization and internationalization for global user base"
problem: "Garmin Connect is the companion iOS app for Garmin's wearable ecosystem. With millions of daily users depending on real-time health data sync, the app needed rock-solid BLE communication, responsive UI, and zero tolerance for data loss, all while maintaining backward compatibility across a wide device matrix."
approach: "I worked on a vertical team alongside UX, API, QA, and product. My focus was building new features end-to-end: from BLE device communication via Protobuf, to programmatic Auto Layout UI, to networking layers consuming RESTful APIs. I leveraged Firebase Crashlytics to monitor production stability and used Charles Proxy for network debugging."
---

## Key Contributions

### Device Communication
Built and maintained the BLE + Protobuf layer for syncing health and fitness data between Garmin wearables and the iOS app. Ensured reliable data transfer across varying connection conditions and device types.

### Programmatic UI
Developed complex, fully responsive layouts without Interface Builder, all programmatic Auto Layout. This approach improved code review velocity, reduced merge conflicts, and enabled precise per-pixel control.

### Production Monitoring
Integrated Firebase Crashlytics workflows into the development cycle, enabling the team to catch and fix regressions before they impacted large user segments. Drove a culture of crash-free releases.

### Localization
Supported app localization across 20+ languages following Garmin's internal i18n protocols, ensuring date formats, measurement units, and string resources adapted correctly per locale.
