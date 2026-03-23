# 📓 WorkLin

A powerful, open-source workspace platform inspired by Notion. WorkLin combines the flexibility of block-based editing with real-time collaboration, AI assistance, and enterprise-grade features.

![WorkLin](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18.2-blue)

## ✨ Features

### Core Features
- 📄 **Page Management**: Create, organize, and manage pages with rich metadata
- 🧱 **Block-Based Editor**: Rich text editing with TipTap (headings, lists, code, tables, embeds)
- 🔄 **Real-time Collaboration**: Multi-user editing with Yjs (coming soon)
- 🔐 **Authentication**: Firebase Auth with email and Google sign-in
- 💾 **Cloud Sync**: All data synced to Firebase Firestore
- 📁 **Workspace Management**: Multiple workspaces with sharing and permissions
- 🎨 **Modern UI**: Beautiful interface with ShadCN UI and Tailwind CSS
- 🌙 **Dark Mode**: Full dark mode support
- 📱 **Responsive**: Works seamlessly on desktop, tablet, and mobile

### Advanced Features (In Progress)
- 🤖 **AI Writing Assistant**: Generate, summarize, and improve content
- 💬 **Comments & Mentions**: Collaborate with threaded comments
- 📊 **Database Views**: Table, Board (Kanban), and Calendar views
- 🔍 **Advanced Search**: Full-text search with filters
- 📤 **Export**: Export pages as PDF, Markdown, or HTML
- 🔗 **Page Linking**: Bidirectional links between pages
- 📋 **Templates**: Create and use page templates
- 📈 **Analytics**: Workspace statistics and insights

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Firebase account (for cloud features)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/fyiclub-vitb/WorkLin.git
cd WorkLin

# Install dependencies (REQUIRED)
npm install

# If you get esbuild errors, run this first:
# Remove-Item -Recurse -Force node_modules
# Remove-Item -Force package-lock.json
# npm cache clean --force
# npm install

# Start development server
npm run dev
```

**⚠️ Important:** 
- Run `npm install` first! This installs all dependencies including `react-router-dom`
- If you get esbuild version errors, delete `node_modules` and `package-lock.json`, then run `npm install` again
- See `QUICK_FIX.md` or double-click `FIX_AND_RUN.bat` for automated fix

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🎯 Demo Credentials

**Try WorkLin instantly with demo credentials:**

```
Email: demo@worklin.com
Password: demo123

**Test User Credentials:**
Email: test@worklin.local
Password: Password123!
```

**Quick Start:**
1. Visit the landing page at `http://localhost:3000`
2. Click **"Get Started"** button
3. On login page, click **"Use Demo Credentials"** button (auto-fills)
4. Or manually enter: `demo@worklin.com` / `demo123`
5. Start using WorkLin! 🚀

### Environment Setup

#### 1. Firebase Setup (Required for Cloud Features)

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password and Google)
3. Create a Firestore database
4. Copy your Firebase config to `.env` file:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```
5. Set up Firestore security rules (see `firestore.rules`)
6. Set up Storage security rules (see `storage.rules`)

#### 2. Yjs Server Setup (Optional - For Real-time Collaboration)

For real-time collaboration features, deploy the Yjs server on Cloud Run or any Node host:

1. The Yjs server is in the `yjs-server/` directory
2. Deploy it to Cloud Run, Railway, Fly.io, or any platform that runs Node.js
3. Add the WebSocket URL to your `.env` file:
   ```env
   VITE_YJS_WEBSOCKET_URL=wss://your-yjs-server-url
   ```

**Notes**:
- ✅ Collaboration is optional. The app works perfectly without it!
- ✅ Use `wss://` (secure WebSocket) not `ws://` for production

#### 3. Google Gemini API Setup (Optional - For AI Features)

WorkLin includes AI writing assistance powered by Google Gemini.

1. Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Add to your root `.env` file:
   ```env
   VITE_GEMINI_API_KEY=your-gemini-api-key
   ```
3. Restart your dev server if running:
   ```bash
   npm run dev
   ```

**Rate Limits**: 15 requests per minute per user (client-side rate limiting)

**Free Tier**: 60 RPM, 1,500 requests/day - No credit card required!

**Note**: For production, set `VITE_GEMINI_API_KEY` in your Firebase project's environment config.

See [GEMINI_API_SETUP.md](GEMINI_API_SETUP.md) for detailed setup instructions.

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run lint

# Deploy to Firebase
npm run deploy
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18.2+ with Vite
- **Language**: TypeScript 5.0+ (strict mode)
- **Styling**: Tailwind CSS 3.3+ with ShadCN UI
- **Icons**: Lucide React
- **State Management**: Zustand
- **Rich Text Editor**: TipTap
- **Animations**: Framer Motion
- **UI Components**: Radix UI + ShadCN

### Backend & Database
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage - Image and file storage
- **Functions**: Firebase Cloud Functions
- **Hosting**: Firebase Hosting
- **Collaboration Server**: Cloud Run (or any Node host) - Yjs WebSocket server

### Collaboration
- **Real-time Sync**: Yjs + WebRTC (or Firebase)
- **Presence**: Firebase Realtime Database

### DevOps
- **Build Tool**: Vite 4.4+
- **Testing**: Vitest + Playwright
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
worklin/
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # ShadCN UI components
│   │   ├── editor/          # TipTap editor components
│   │   ├── auth/            # Authentication components
│   │   ├── collaboration/   # Real-time collaboration
│   │   ├── workspace/       # Workspace management
│   │   └── ...              # Other components
│   ├── lib/                 # Library code
│   │   ├── firebase/        # Firebase services
│   │   │   ├── config.ts
│   │   │   ├── auth.ts
│   │   │   ├── database.ts
│   │   │   └── storage.ts
│   │   └── utils.ts         # Utility functions
│   ├── store/               # Zustand stores
│   │   └── workspaceStore.ts
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript types
│   └── styles/              # Global styles
├── public/                  # Static assets
├── env.example              # Environment variables template
├── GITHUB_ISSUES.md         # 30 open source issues
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎯 Usage

### Creating Pages

1. Click the "New Page" button in the sidebar
2. The new page will appear in the sidebar
3. Click on it to start editing

### Managing Pages

- **Delete Page**: Click the trash icon next to a page to move it to trash
- **Trash View**: Click "Trash" in the sidebar to view deleted pages
- **Restore Page**: In trash view, click the restore icon to restore a page
- **Permanent Delete**: In trash view, click the permanent delete icon to permanently remove a page
- **Home**: Click "Home" in the sidebar to clear page selection and return to home view

### Adding Blocks

1. Click "Add Block" at the bottom of the editor
2. Or press Enter while editing a block to create a new one below

### Block Types

- **Text**: Regular paragraph text (auto-expanding textarea)
- **H1, H2, H3**: Headings with different sizes
- **List**: Bulleted list items
- **Todo**: Checkbox items with strikethrough when checked

### Editing Blocks

- Click on any block to edit
- Change block type using the dropdown on hover
- Delete blocks using the trash icon on hover
- Press Enter to create a new block below

## 🤝 Contributing

We welcome contributions! This project is part of ACWOC (All Contributors Welcome Open Challenge). Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Getting Started

1. Fork the repository
2. Check out [GITHUB_ISSUES.md](GITHUB_ISSUES.md) for 30 open issues ranging from easy to hard
3. Comment on an issue to claim it
4. Create your feature branch (`git checkout -b feature/issue-{number}-{description}`)
5. Make your changes
6. Commit your changes (`git commit -m 'Add: description of changes'`)
7. Push to the branch (`git push origin feature/issue-{number}-{description}`)
8. Open a Pull Request

### Issue Difficulty Levels

- 🟢 **Easy**: Good for beginners, simple UI components, basic features
- 🟡 **Medium**: Intermediate features, integrations, complex UI
- 🔴 **Hard**: Advanced features, real-time systems, complex algorithms

See [GITHUB_ISSUES.md](GITHUB_ISSUES.md) for the complete list of 30 issues!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [x] Basic block-based editor
- [x] Firebase integration
- [x] Firebase Storage for image uploads
- [x] Authentication (demo mode)
- [x] Workspace management
- [x] Trash system with restore functionality
- [x] Settings page
- [x] Landing page
- [x] Login page with demo credentials
- [x] Responsive design (mobile-friendly)
- [x] Dark mode support
- [X] Real-time collaboration (Yjs + Cloud Run) - See Issue #21
- [X] AI writing assistant - See Issue #23
- [X] Database views - See Issue #14
- [X] Comments system - See Issue #12
- [X] Page templates - See Issue #13
- [X] Advanced search - See Issue #8, #19
- [X] Export functionality - See Issue #16
- [ ] Mobile app/PWA - See Issue #25

**Check [GITHUB_ISSUES.md](GITHUB_ISSUES.md) for 30 open issues ready for contributors!**

## 🙏 Acknowledgments

- Inspired by [Notion](https://www.notion.com/)'s block-based editor
- Built with React, Vite, Tailwind CSS, Firebase, and TipTap
- UI components from [ShadCN UI](https://ui.shadcn.com/)
- Icons provided by [Lucide](https://lucide.dev)

## 🔗 Links

- **GitHub**: [https://github.com/fyiclub-vitb/WorkLin](https://github.com/fyiclub-vitb/WorkLin)
- **Live Demo**: Deployed on Firebase Hosting

## Discussions 
💬 Have questions or doubts?
Please use the **Discussions** tab to ask and interact with maintainers.

---

Made with ❤️ by the WorkLin team
