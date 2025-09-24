# Brighterspace 📚⚡

> A Chrome extension that will transform Brightspace (D2L) into a productivity-first learning workspace

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange)](https://github.com/reavesx/wxt-brighterspace)

## 🎯 Vision

Brighterspace aims to solve the fragmented UX of Brightspace/D2L by providing students with:

- **🎯 One-Click Rubric-Aware Submission** - Extract assignment rubrics and auto-generate submission checklists
- **📋 Persistent Task Sidebar** - Always-visible task list that syncs across devices
- **👥 Real-Time Study Groups** - Share collaborative study queues with classmates  
- **🔄 Offline-First Sync** - Work offline, sync when connected using CRDT technology
- **📸 Evidence Capture** - Screenshot and attach submission evidence directly from the extension
- **🔒 Privacy-First** - Local storage, explicit consent, minimal permissions

## 🚧 Project Status

**Currently in initial development phase.** This repository contains the project plan and will house the implementation as development progresses.

### 6-Month Development Timeline (Sept 2025 - March 2026)

**Phase 1: Foundation (October)**
------------------------------------------------------
- [ ] Chrome extension scaffold with Manifest V3
- [ ] React/Preact UI framework setup with Tailwind
- [ ] Basic content script injection into Brightspace
- [ ] IndexedDB storage layer with Dexie.js
- [ ] Initial sidebar UI and task management

**Phase 2: Core Features (November)**
-----------------------------------------------------  
- [ ] Rubric detection and parsing from Brightspace pages
- [ ] Local task persistence and offline functionality
- [ ] Quick submission workflow with screenshot capture
- [ ] Extension options/settings page
- [ ] Basic Chrome extension permissions and security

**Phase 3: Backend & Sync (December)**
- [ ] Node.js/Express backend with GraphQL API
- [ ] PostgreSQL database schema and Redis cache
- [ ] JWT authentication system
- [ ] Basic client-server synchronization
- [ ] Deploy staging environment

**Phase 4: Advanced Collaboration (January)**
- [ ] CRDT integration with Yjs for conflict-free editing
- [ ] WebSocket relay for real-time collaboration
- [ ] Study group creation and sharing workflows
- [ ] Advanced rubric-aware automation features
- [ ] Performance optimization and caching

**Phase 5: Polish & Testing (February)**
- [ ] Comprehensive testing suite (unit, integration, E2E)
- [ ] UX polish and accessibility improvements
- [ ] Privacy compliance and telemetry implementation
- [ ] Cross-browser compatibility testing
- [ ] Security audit and penetration testing

**Phase 6: Release & Launch (March)**
- [ ] Production deployment and monitoring
- [ ] Chrome Web Store submission and approval
- [ ] User documentation and onboarding
- [ ] Beta testing with student groups
- [ ] Public v1.0 release

## 🏗️ Planned Architecture

### Frontend Stack
- **Extension Platform**: Chrome Extension Manifest V3
- **UI Framework**: React + Preact with Tailwind CSS
- **State Management**: IndexedDB via Dexie.js + CRDT (Yjs)
- **Real-time Sync**: WebSockets with conflict-free collaborative editing

### Backend Stack
- **API**: Node.js + Express with GraphQL
- **Database**: PostgreSQL + Redis cache
- **Authentication**: JWT with OAuth2 (Google/School SSO)
- **Real-time**: Socket.IO WebSocket relay
- **Infrastructure**: Docker + Kubernetes

### Advanced Feature: CRDT Sync
The standout technical feature will be offline-first CRDT synchronization using Yjs, enabling:
- Conflict-free collaborative editing of study queues
- Seamless offline/online transitions
- Real-time updates across devices and group members
- Distributed systems architecture in a browser extension

## 📊 Target Use Cases

### For Individual Students
- Access assignments and rubrics in a persistent sidebar
- Generate pre-submission checklists from rubric criteria
- Capture and organize submission evidence
- Work offline and sync when connection returns

### For Study Groups  
- Create shared collaborative study queues
- Annotate assignment rubrics together in real-time
- Track group progress on assignments
- Share resources and notes seamlessly

## 🚀 Getting Started (Once Released)

This project is currently in development. When the alpha is ready:

1. Download from the Releases page
2. Load as unpacked Chrome extension
3. Navigate to Brightspace and start using the sidebar
4. Create study groups and collaborate in real-time

## 🔒 Privacy & Security Principles

Being designed with privacy as a core principle:

- **Local-first storage**: Data stays on device by default
- **Explicit consent**: All sharing features require opt-in
- **Minimal permissions**: Only necessary Chrome extension permissions
- **Secure sharing**: Encrypted group data
- **Optional telemetry**: Anonymous usage analytics with clear opt-out

## 🎯 Why This Project?

### Problem
Brightspace/D2L has fragmented UX that slows students down - rubrics are hidden, submissions are clunky, and there's no shared study workflow.

### Solution  
An extension that injects persistent productivity tools while maintaining privacy and working offline-first.

### Technical Challenge
Building distributed systems (CRDT sync + WebSocket relay + browser storage) in a Chrome extension demonstrates systems thinking and full-stack capabilities.

## 📈 Success Metrics (Planned)

- Number of active student users
- Average time saved per assignment submission
- Number of study groups created and actively used
- User retention and engagement rates

## 🤝 Contributing

This project is in early development. Contributions will be welcomed once the basic framework is established. 

Planned contribution areas:
- Chrome extension development
- React/TypeScript frontend
- Node.js backend development
- UX/UI design
- Testing and QA

## 📝 License

This project will be licensed under the MIT License.

## 🔮 Future Vision

Beyond the initial 14-day MVP:
- AI-powered submission suggestions
- Integration with Google Drive/OneDrive  
- Mobile companion app
- Advanced analytics dashboard
- School SSO integrations

---

**🚀 Follow along as we build this from scratch!**

*This project aims to demonstrate modern web development skills while solving a real student problem. Not affiliated with D2L Corporation.*