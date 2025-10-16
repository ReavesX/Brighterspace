# Brighterspace
A cross-browser extension built with WXT that retools the D2L-based Brightspace LMS, improving the UI and extending its functionality.
# Brighterspace Development Phases 🚀
*6-phase development roadmap from initial scaffold to public release.*

---

## 🏗️ Phase 1: Foundation (v0.1.x)
**Goal:** Build a functional, **cross-browser** extension skeleton using WXT that loads, builds cleanly, and injects into Brightspace.

### 0.1.0 – Repo setup
- `chore(init)`: Scaffold project with **WXT** (React, TS, Tailwind)
- `chore(config)`: Add ESLint and Prettier for code quality

### 0.1.1 – WXT configuration
- `feat(config)`: Configure `wxt.config.ts` with manifest details (permissions, icons)
- `feat(entrypoints)`: Establish background and content script entrypoints

### 0.1.2 – Popup skeleton
- `feat(popup)`: Implement React popup with placeholder nav
- `style(popup)`: Add Tailwind styles for popup layout

### 0.1.3 – Content script injection
- `feat(content-script)`: Implement logic to interact with Brightspace pages
- `test(content-script)`: Add smoke test for DOM injection

### 0.1.4 – IndexedDB layer
- `feat(storage)`: Set up Dexie schema for tasks
- `refactor(storage)`: Abstract storage utils for the sidebar

### 0.1.5 – Initial sidebar
- `feat(sidebar)`: Add persistent sidebar container as a UI entrypoint
- `feat(sidebar)`: Render placeholder task list from storage

---

## ⚡ Phase 2: Core Features (v0.2.x)
**Goal:** Implement rubric parsing, task persistence, quick submission, and screenshot capture.
*(This phase is unchanged as it focuses on application logic.)*

### 0.2.0 – Rubric detection
- `feat(parser)`: Add DOM parser for rubric tables
- `test(parser)`: Add unit tests for rubric JSON output

### 0.2.1 – Task persistence
- `feat(sidebar)`: Store tasks in IndexedDB
- `feat(sidebar)`: Reload tasks on init

### 0.2.2 – Offline mode
- `feat(storage)`: Add offline-first handling
- `fix(storage)`: Resolve task sync race conditions

### 0.2.3 – Quick submission workflow
- `feat(workflow)`: Embed rubric checklist on submission page
- `feat(workflow)`: Add one-click "submit with rubric" button

### 0.2.4 – Screenshot capture
- `feat(capture)`: Integrate Chrome API for screenshots
- `feat(capture)`: Attach screenshots to task entries

### 0.2.5 – Options/settings
- `feat(options)`: Build extension settings page
- `style(options)`: Polish settings UI with Tailwind

---

## ☁️ Phase 3: Backend & Sync (v0.3.x)
**Goal:** Establish a cloud backend with authentication, sync, and staging deployment.
*(This phase is unchanged as it focuses on the backend.)*

### 0.3.0 – Backend scaffold
- `chore(api)`: Scaffold Node.js + Express server
- `infra(docker)`: Add Dockerfile + docker-compose

### 0.3.1 – Database schema
- `feat(db)`: Add PostgreSQL schema for tasks/users
- `feat(db)`: Add Redis cache for recent tasks

### 0.3.2 – GraphQL API
- `feat(api)`: Implement GraphQL schema + resolvers
- `test(api)`: Add integration tests for tasks query

### 0.3.3 – Authentication
- `feat(auth)`: Add JWT-based auth
- `feat(auth)`: Integrate OAuth2 for Google/School SSO

### 0.3.4 – Client-server sync
- `feat(sync)`: Implement push/pull for tasks
- `fix(sync)`: Handle merge conflicts gracefully

### 0.3.5 – Staging deployment
- `infra(ci)`: Set up GitHub Actions CI/CD
- `infra(aws)`: Deploy backend to AWS EC2 + S3

---

## 👥 Phase 4: Advanced Collaboration (v0.4.x)
**Goal:** Enable CRDT-based real-time collaboration and advanced rubric automation.
*(This phase is unchanged as it focuses on application logic.)*

### 0.4.0 – CRDT integration
- `feat(crdt)`: Integrate Yjs for conflict-free sync
- `test(crdt)`: Add CRDT merge scenario tests

### 0.4.1 – WebSocket relay
- `feat(ws)`: Add WebSocket server for group updates
- `feat(client)`: Connect sidebar to WebSocket

### 0.4.2 – Study groups
- `feat(groups)`: Implement group creation + invite links
- `feat(groups)`: Sync group tasks in real time

### 0.4.3 – Advanced rubric automation
- `feat(rubric)`: Auto-generate checklist from rubric JSON
- `feat(rubric)`: Mark completed criteria in real time

### 0.4.4 – Performance optimization
- `perf(parser)`: Optimize rubric parsing with caching
- `perf(sidebar)`: Lazy load large task lists

---

## ✨ Phase 5: Polish & Testing (v0.5.x)
**Goal:** Improve UX, add testing coverage, ensure privacy compliance, and leverage WXT for multi-browser support.

### 0.5.0 – Test suite
- `test(unit)`: Add Jest unit tests
- `test(e2e)`: Add Puppeteer end-to-end tests

### 0.5.1 – UX polish
- `feat(ui)`: Add animations + accessibility roles
- `fix(ui)`: Improve color contrast for dark mode

### 0.5.2 – Privacy compliance
- `feat(privacy)`: Implement consent modal
- `feat(telemetry)`: Add optional anonymous analytics

### 0.5.3 – Cross-browser support
- `chore(build)`: **Generate and test builds for Firefox, Edge, and other target browsers using WXT's built-in capabilities**
- `test(compat)`: Address any browser-specific CSS or API issues

### 0.5.4 – Security audit
- `chore(audit)`: Run dependency vulnerability scan
- `fix(auth)`: Patch JWT library version

---

## 🎉 Phase 6: Release (v1.0.x)
**Goal:** Final polish and public launch on the Chrome Web Store and other marketplaces.

### 1.0.0-alpha – Internal release
- `docs(readme)`: Update usage instructions
- `chore(build)`: Optimize production build with **Vite**

### 1.0.0-beta – Beta testing
- `docs(contrib)`: Add contribution guidelines
- `feat(onboarding)`: Add user onboarding flow

### 1.0.0 – Public release
- `release(1.0.0)`: Stable MVP release
- `docs(readme)`: Add demo video + success metrics

---

## 📊 Development Timeline

| Phase | Timeline | Status |
|:------|:----------|:--------|
| **Phase 1: Foundation** | October 2025 | 🟡 In Progress |
| **Phase 2: Core Features** | November 2025 | ⚪ Planned |
| **Phase 3: Backend & Sync** | December 2025 | ⚪ Planned |
| **Phase 4: Advanced Collaboration** | January 2026 | ⚪ Planned |
| **Phase 5: Polish & Testing** | February 2026 | ⚪ Planned |
| **Phase 6: Release** | March 2026 | ⚪ Planned |

---

## 🎯 Key Milestones
- **v0.1.5** – Working **cross-browser** extension with sidebar
- **v0.2.5** – Full offline functionality with rubric parsing
- **v0.3.5** – Cloud sync and authentication working
- **v0.4.4** – Real-time collaboration features complete
- **v0.5.4** – Production-ready with full test coverage
- **v1.0.0** – Public release on extension stores

---

> **Status:** Actively in development.
> **Current Version:** v0.1.x – Foundation Phase.