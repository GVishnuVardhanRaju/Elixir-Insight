🍷 Elixir Insight (Alcohol Benefits Web Project)

A responsive, interactive web project showcasing the health benefits of popular alcoholic drinks. Combines a React + TypeScript + Tailwind landing page with a plain HTML Explore Page.

🌟 Features

Landing Page (React + TS + Tailwind)

Hero section with smooth background and animation.

Interactive sections: About, Benefits, Footer.

Fully responsive for mobile and desktop.

Tailwind CSS utility classes for modern styling.

Explore Page (HTML + CSS + JS)

Interactive drink selector with animated bottles.

Dynamic updates of drink name, description, and benefits.

Smooth scroll between FAQ and Status sections.

Mouse hover glow effects on cards.

Animations

Floating bottles and hover effects.

Light-glow effects on FAQ cards.

Responsive Design

Mobile-first approach.

Adaptive layout for bottles and cards.

Favicon

Custom favicon displayed on both landing and explore pages.

🛠 Technologies Used

Landing Page: React, TypeScript, Tailwind CSS, Vite

Explore Page: HTML5, CSS3, JavaScript

Responsive design with media queries

Animations: CSS keyframes & transitions

📁 Project Structure
alcohol-benefits/
│
├─ landing/                  # React + TS + Tailwind landing page
│  ├─ public/
│  │   └─ favicon.svg
│  ├─ src/
│  │   ├─ main.tsx
│  │   ├─ App.tsx
│  │   └─ components/
│  └─ package.json
│
├─ explore/                  # Plain HTML explore page
│  ├─ explore.html
│  ├─ redwine.png
│  ├─ lightbeer.png
│  ├─ vodka.png
│  ├─ tequila.png
│  └─ favicon-32x32.png
│
└─ README.md
🚀 Getting Started
Landing Page

Install dependencies

cd landing
npm install

Run development server

npm run dev

Open the provided localhost URL in your browser.

Explore Page

Open explore/explore.html directly in your browser, or serve with a simple HTTP server:

cd explore
npx serve

Visit http://localhost:5000 (or whichever port is shown) to view the explore page.

📌 Usage

Navigate from the landing page to the explore page via the Explore link.

On the explore page:

Click drink icons to switch bottles and see details.

Hover over FAQ cards to see glow and scale effects.

⚡ License

Open-source and free for educational purposes.

Author : G Vishnu Vardhan Raju

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
