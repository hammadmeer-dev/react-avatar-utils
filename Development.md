# Development Guide

This document provides instructions for setting up the `react-avatar-utils` project locally for development and contribution.

## Prerequisites

- **Node.js**: Version 20+ (Recommended: LTS)
- **npm**: Comes with Node.js

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd react-avatar-utils
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Development Workflow

We use a "Playground" approach for development. The `src/App.tsx` file serves as a testbed where you can see changes to the library components in real-time.

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will launch Vite's dev server. Open the URL shown in your terminal (usually `http://localhost:5173`) to view the playground.

2.  **Working on Components:**
    - Library components are located in `src/lib/`.
    - Edit `src/lib/LetterAvatar.tsx`, `src/lib/DefaultAvatar.tsx`, etc.
    - The playground (`src/App.tsx`) will hot-reload with your changes.

## Building the Library

To build the library for distribution:

```bash
npm run build
```

This command will:
1.  Run TypeScript type checking (`tsc`).
2.  Use Vite to bundle the code into `dist/`.
    - `react-avatar-utils.mjs` (ES Module)
    - `react-avatar-utils.cjs` (CommonJS)
3.  Generate TypeScript declaration files (`.d.ts`).

## Project Structure

```
react-avatar-utils/
├── src/
│   ├── lib/              # Library source code (published)
│   │   ├── DefaultAvatar.tsx
│   │   ├── LetterAvatar.tsx
│   │   ├── RandomAvatar.tsx
│   │   ├── utils.ts
│   │   └── index.ts      # Entry point
│   ├── App.tsx           # Playground app (not published)
│   └── main.tsx          # Playground entry
├── dist/                 # Build output
├── package.json
├── vite.config.ts        # Vite configuration
└── ...
```

## Contributing

1.  Fork the repository.
2.  Create a feature branch.
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.
