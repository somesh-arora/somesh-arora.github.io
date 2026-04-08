---
title: "Abbott BLE OTA Platform"
summary: "Built an iOS app for over-the-air firmware testing of Abbott's proprietary medical devices via BLE."
role: "iOS Developer Co-op"
company: "Abbott Laboratories"
date: 2018-06-01
featured: false
sortOrder: 9
tags: ["Swift", "BLE", "Health Tech", "Firmware", "Medical Devices"]
heroImage: "/images/logos/abbott-icon.png"
techStack: ["Swift", "Core Bluetooth", "BLE", "Firebase", "Agile/Scrum"]
impact:
  - "Deployed to firmware teams in the US (Sylmar, CA) and China for device prototype testing"
  - "Eliminated manual firmware testing workflows, accelerating the device development cycle"
  - "Built asset management system used across Abbott's engineering department"
problem: "Abbott's firmware engineers needed a reliable way to test proprietary medical devices at different frequencies, modulations, and channels over BLE. Manual testing was slow and error-prone. Additionally, the engineering department lacked a unified system for tracking hardware assets."
approach: "I developed two iOS applications during my co-op. The primary app discovers nearby BLE peripherals of a specific type, establishes connections, and performs automated read/write operations on device firmware across configurable test parameters. The second app, an asset management system, used Firebase for real-time sync, barcode scanning for check-in/check-out, and role-based access control."
---

## BLE OTA Testing App

### Intelligent Device Discovery
The app scans for and identifies Abbott-specific BLE peripherals using service UUIDs, filtering out consumer devices. Once connected, it exposes firmware read/write operations across configurable frequency bands, modulation schemes, and channel parameters.

### Test Automation
Replaced manual firmware validation with structured, repeatable test sequences. Engineers can configure test matrices and execute them in batch, dramatically reducing the time from firmware build to validated prototype.

## Asset Manager

### Barcode-Based Tracking
Integrated dual barcode scanning (Code 128 for employee IDs and Code 39 for asset barcodes) enabling one-tap check-in/check-out workflows.

### Role-Based Access
Built admin and user privilege tiers with push notifications, reminder emails, device history tracking, and an asset request form. Powered by Firebase Realtime Database for instant sync across devices.
