# react-avatar-utils

A React avatar component library built with TypeScript and Vite.

## Development

Install dependencies and run the local demo:

```bash
npm install
npm run dev
```

Before proposing a change, run:

```bash
npm run lint
npm run build
```

The build script runs TypeScript project checks and creates the library bundles using Vite. The library entry point is `src/lib/index.ts`; generated declarations come from `vite-plugin-dts`.

## Package structure

The package declares React and React DOM as peer dependencies, so applications should provide their own compatible versions. The bundler also externalizes React, React DOM, and the React JSX runtime rather than embedding them in the published library.

## Contributing

Keep changes focused and describe the component behavior they affect. Include manual usage checks for visual changes, and run lint and build before submitting a pull request.

> Note: This repository is currently configured as a library project, but package publishing and consumer compatibility have not been independently verified.
