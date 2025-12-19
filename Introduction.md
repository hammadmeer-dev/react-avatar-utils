# Introduction to React Avatar Utils

`react-avatar-utils` is a lightweight, zero-dependency React library designed to provide flexible and robust avatar components. It fills the gap when user profile images fail to load or are unavailable, offering professional fallbacks like letter avatars, consistent random avatars, and standard default placeholders.

## Key Features

- **Zero Dependencies**: Built with inline SVGs and pure React, keeping your bundle size minimal.
- **Letter Avatar**: Automatically generates initials from names and renders them on an auto-contrasted background color.
- **Random Avatar**: Generates deterministic "random" avatars based on a seed (e.g., username), ensuring the same user always gets the same unique avatar.
- **Default Avatar**: Provides standard placeholder icons with support for gender variations ('male', 'female', 'neutral').
- **TypeScript Ready**: Fully typed for a great developer experience.
- **Library Mode**: Optimized for consumption in other React projects.

## Installation

```bash
npm install react-avatar-utils
# or
yarn add react-avatar-utils
```

## Quick Start

### Letter Avatar

Display a user's initials with a generated background color.

```tsx
import { LetterAvatar } from 'react-avatar-utils';

<LetterAvatar name="John Doe" size={50} />
```

### Random Avatar

Generate a consistent, unique avatar for a user without an uploaded photo.

```tsx
import { RandomAvatar } from 'react-avatar-utils';

// The avatar will be consistent for "johndoe"
<RandomAvatar seed="johndoe" size={50} />
```

### Default Avatar

Use a generic placeholder when no other information is available.

```tsx
import { DefaultAvatar } from 'react-avatar-utils';

<DefaultAvatar gender="neutral" size={50} />
```

## Philosophy

We believe that handling broken images or missing user data shouldn't be an afterthought. `react-avatar-utils` aims to make the fallback experience just as polished as the primary one.
