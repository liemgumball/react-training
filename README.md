# React-training

## Target:

-   Apply knowledge of React/TypeScript (with ES6 syntax).
-   Understand and apply React Components
-   Understand and apply React Hooks

## Design on figma:

[Figma](https://www.figma.com/file/IOcRRwJGcAWrGZaHUp3F7p/React-practice?type=design&node-id=1%3A63&mode=dev)

## Information:

-   Time line: 2023/09/11 – 2023/09/22
-   Editor: Visual Studio Code
-   Supported browser: Chrome, Firefox, MS Edge, Opera, Safari lasted
-   Supported screen: Screen width 996px or larger

## Team size:

-   1 dev: Liem Nguyen

## Develop Environment:

-   [Visual Studio Code](https://code.visualstudio.com/)
-   React & TypeScript
-   [Github](https://github.com/)

## Folder structure:

```
.
├── src/
│   ├── assets/
│   ├── compoents/
│   ├── constants/
│   ├── data/
│   ├── features/
│   │   ├── authentication/
│   │       ├── services/
│   │       ├── hooks/
│   │       ├── index.tsx
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── App.tsx
│   └── main.tsx
└── README.md
```

## Getting started

**Require JSON Server & JSON Server Auth**

```
npm install -g json-server json-server-auth
```

-   Step 01: Clone repository with HTTPS

```bash
git clone https://github.com/liemgumball/react-training.git
```

-   Step 02: Change to branch feature/practice-one

```bash
git checkout feature/practice-one
```

-   Step 03: Move to folder which just cloned in your computer

```bash
cd practice-one
```

-   Step 04: Install packages

```bash
npm install
```

-   Step 05: Run json-server

```bash
json-server --watch src/data/db.json --port 3000 -m .node_modules/json-server-auth

# or
json-server-auth --watch src/data/db.json --port 3000
```

-   Step 06: Run

```bash
npm run dev
```
