# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

이 서비스는 면접에 대비하여 연습하는 서비스로, 각 회사의 질문들을 조회하고 답변을 하는 서비스다. 답변은 모든 사람들이 조회할 수 있으며, 평가내릴 수 있다.

# Common Commands

## Development
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (runs TypeScript check + Vite build)
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview the production build

## Linting and Type Checking
- Always run `npm run lint` after making changes to ensure code quality
- The build command includes TypeScript compilation check via `tsc -b`
- No separate typecheck command exists - use `npm run build` to verify TypeScript errors

# Architecture Overview

## Navigation System
The app uses a custom navigation context (`NavigationContext`) instead of React Router:
- All pages are managed through the `NavigationProvider` in `App.tsx`
- Use `useNavigation()` hook to navigate between pages: `navigateToPage('page-name')`
- Available pages: main, login, signup, interview-setup, interview, interview-complete, question-answers, answer-detail
- Pages are conditionally rendered in `App.tsx` based on `currentPage` state

## Page Structure Pattern
Each page follows a consistent structure in `src/pages/[page-name]/`:
- `index.tsx` - Main component export and UI logic
- `style.ts` - Emotion CSS styles using `css` template literals
- `types.ts` - TypeScript interfaces specific to the page (when needed)

## Shared Components
- All reusable components are in `src/shared/components/`
- Export components through `src/shared/components/index.ts`
- Components include: Button, Input, Dropdown, FilterModal, BackIcon, SearchIcon, DropdownIcon

# MCP Servers

## Figma Dev Mode MCP Rules

- The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets
- IMPORTANT: If the Figma Dev Mode MCP Server returns a localhost source for an image or an SVG, use that image or SVG source directly
- IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload
- IMPORTANT: do NOT use or create placeholders if a localhost source is provided

# Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: @emotion/css with CSS-in-JS pattern
- **State Management**: React Context (NavigationContext)
- **HTTP Client**: axios
- **Data Fetching**: @tanstack/react-query (available but not widely used yet)
- **Animation**: motion library

# Directory Architecture

```
bumaview/
├── public/                     # Static assets (png, jpg, etc.)
├── src/
│   ├── api/                    # API connection code
│   │   └── [functionName].tsx  # API functions named by their purpose
│   ├── pages/                  # Application pages
│   │   └── [page-name]/        # Each page has its own directory
│   │       ├── index.tsx       # Main component logic
│   │       ├── style.ts        # Emotion CSS styles
│   │       └── types.ts        # Page-specific TypeScript types
│   ├── shared/
│   │   ├── components/         # Reusable components across pages
│   │   ├── context/           # React contexts (NavigationContext)
│   │   └── hooks/             # Shared custom hooks
│   ├── App.tsx                # Main app with navigation logic
│   └── main.tsx               # App entry point
```

# Implementation Guidelines

- Each page is managed via [pageName] directory in `src/pages`
- Follow the Directory Architecture rules when creating new pages
- Create page-specific types in `[page-name]/types.ts` and export them
- For frequently used components, implement them in `shared/components/` for reusability
- Use the NavigationContext for page transitions instead of URL-based routing

# Code Style Rules

## Prohibited Patterns
- Do not use `any` type - create proper interfaces in `[page-name]/types.ts`
- Do not use `React.[module]` pattern - import directly (e.g., `import { useState }` not `React.useState`)
- Do not use inline functions in JSX - create named handler functions with pattern: `handle{Target}{EventName}` (e.g., `handleCTAButtonClick`)
- Do not use inline CSS styles - use emotion CSS-in-JS in `style.ts` files
- Do not use `margin`/`padding` - prefer `gap` and empty spacing divs
- Do not use `position: relative/absolute` - use flexbox and grid layouts

## Required Patterns
- Component files over 150 lines must be split into separate modules
- Use SVG assets from Figma directly - do not create custom asset files
- Import shared components from `src/shared/components`
- Use proper TypeScript interfaces for all data structures

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
