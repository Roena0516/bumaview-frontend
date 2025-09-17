# CLAUDE.md

이 서비스는 면접에 대비하여 연습하는 서비스로, 각 회사의 질문들을 조회하고 답변을 하는 서비스다. 답변은 모든 사람들이 조회할 수 있으며, 평가내릴 수 있다.

# MCP Servers

## Figma Dev Mode MCP Rules

- The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets
- IMPORTANT: If the Figma Dev Mode MCP Server returns a localhost source for an image or an SVG, use that image or SVG source directly
- IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload
- IMPORTANT: do NOT use or create placeholders if a localhost source is provided

# Tech Spec

Please Check dependencies in ./package.json file.

- **Development**: TypeScript, React.js
- **Styling**: @emotion/css
- **API Request**: axios, @tanstack/react-query
- **Animation** : motion

# Directory Architecture

bumaview/
├── public/ /_ statical assets e.g. png, jpg, ... _/
├── src/
│ ├── api/ /_ API 연결 코드 _/
│ │ │ └── /_ 파일 이름은 [함수이름].tsx로 작성 _/
│ ├── pages/ /_ 실제 페이지들 _/
│ │ │ └── /_ 페이지 이름의 폴더를 만들고, 그 속에 index.tsx(퍼블리싱 코드)와 style.ts(emotion 스타일 컴포넌트)를 작성 _/
│ ├── shared/
│ │ ├── components/ /_ 여러 페이지에서 공유하는 컴포넌트들 _/
│ │ └── hooks/ /_ 여러 페이지에서 공유하는 훅들 _/

# Implement

- Each page is managed via [pageName] directory in `src/pages`.
- If you need implement some page, follow Directory Architecture rules.
- You should declare model and api when you need implement some page. see the figma design and judgment what data is necessary.
- If you think it is a frequently used component, such as a button or input, please implement it flexibly in shared so that the component can be commonly used.

# Avoid Pattern

- Do not use any type. If need some interface or type, you can write [feature page name]/types.ts and export it.
- You can use gap or empty `h-{} div` instead of margin and padding. Please avoid margin/padding styling pattern as you can.
- If a component file has more than 150 lines of code, please separate the hooks or components into modules.
- Do not use `React.[module]` pattern. please just import and use it.
- Do not use inline function. please make a handler function and use it. you can naming function with this rule via `'handle'{target}{eventName}` e.g. handleCTAButtonClick, handleAgeInputChange, etc.
- Do not use inline style css.
- If you need assets, use can copy as SVG code in figma. do not implement yourself asset file, just use svg and convert to svg component.
- Please avoid publish with `relative`, `absolute`. you can use flex and grid tailwindcss keyword.
