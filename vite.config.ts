// package.json
{
  "name": "facebook-clone-react-vite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@typescript-eslint/eslint-plugin": "^7.2.0",
    "@typescript-eslint/parser": "^7.2.0",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOMIterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    
    /* Vite Setup */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
// tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tsbuildinfo",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "target": "ES2020"
  },
  "include": ["vite.config.ts"]
}
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Setup absolute path mapping for @/* -> src/
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#1877f2',
        'facebook-gray': '#f0f2f5',
        'facebook-green': '#42b72a',
      }
    },
  },
  plugins: [],
}
// index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Facebook Clone | React & Vite</title>
  </head>
  <body class="bg-facebook-gray">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom scrollbar might enhance Facebook feel */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f0f2f5;
}

::-webkit-scrollbar-thumb {
  background: #ccd0d5;
  border-radius: 4px;
}
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-2 flex items-center justify-between">
      {/* Left Section: Logo & Search */}
      <div className="flex items-center">
        <svg
          viewBox="0 0 1024 1024"
          className="w-10 h-10 fill-facebook-blue cursor-pointer mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M512 0C229.2 0 0 229.2 0 512c0 256.7 187.8 471.1 433.2 506.7v-356H307v-120.7h126.2V347.1c0-125.7 75.8-194.8 189.2-194.8 54.3 0 100.8 4.2 114.3 6V281h-76.3c-60.6 0-72.4 28.7-72.4 71.1v93.8h138.8l-22.1 120.7H631.8v356c245.4-35.6 433.2-250 433.2-506.7C1024 229.2 794.8 0 512 0z" />
        </svg>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden sm:block bg-facebook-gray text-sm py-2 px-4 rounded-full focus:outline-none w-60"
          />
        </div>
      </div>

      {/* Center Section: Navigation Icons (Placeholder) */}
      <div className="flex space-x-2 sm:space-x-8 text-gray-500">
        <div className="p-2 cursor-pointer rounded-lg hover:bg-facebook-gray transition duration-150">
          {/* Home Icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.09l9 7.5V21H16V14h-4v7H3V9.59l9-7.5z"/></svg>
        </div>
        <div className="p-2 cursor-pointer rounded-lg hover:bg-facebook-gray transition duration-150">
          {/* Watch Icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
        </div>
      </div>

      {/* Right Section: User & Menu */}
      <div className="flex items-center space-x-2">
        <button className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-facebook-blue">User Name</button>
        <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer"></div> {/* Avatar Placeholder */}
      </div>
    </header>
  );
};

export default Header;
// src/App.tsx
import React from 'react';
import Header from '@/components/Header'; // Using absolute import

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content Container */}
      <main className="flex-grow pt-4">
        <div className="max-w-7xl mx-auto flex">
          {/* Left Sidebar (Placeholder) */}
          <aside className="hidden lg:block w-1/5 xl:w-1/4 p-4 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
            <h2 className="font-bold text-lg mb-4">Shortcuts</h2>
            <ul className="space-y-2">
              <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Friends</li>
              <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Marketplace</li>
              <li className="p-2 hover:bg-gray-200 rounded cursor-pointer">Groups</li>
            </ul>
          </aside>

          {/* Center Feed */}
          <section className="w-full lg:w-3/5 xl:w-1/2 p-2 mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h1 className="text-xl font-bold text-gray-700">Welcome to Facebook Clone Feed</h1>
              <p className="text-gray-500 mt-1">Start posting!</p>
            </div>
            {/* Example Post Card */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-facebook-blue mr-3"></div>
                <div>
                  <p className="font-semibold">DevOps Senior</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
              <p>This Facebook clone structure is running smoothly thanks to Vite, React, and Tailwind CSS!</p>
              <div className="flex justify-around mt-4 pt-3 border-t">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-facebook-blue">
                  {/* Like Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.836 1.118l.842 1.684a2 2 0 010 1.796l-.842 1.684A2 2 0 0118.764 20H4.596a2 2 0 01-1.836-1.118l-.842-1.684a2 2 0 010-1.796l.842-1.684A2 2 0 014.596 12H14V10zM14 10V4"></path></svg>
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-facebook-blue">
                  {/* Comment Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.868A9.865 9.865 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <span>Comment</span>
                </button>
              </div>
            </div>
          </section>

          {/* Right Sidebar (Placeholder) */}
          <aside className="hidden xl:block w-1/4 p-4 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
            <h2 className="font-bold text-lg mb-4">Contacts</h2>
            <ul className="space-y-2">
              <li className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-facebook-green mr-2 border border-white"></div> Online User 1
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-facebook-green mr-2 border border-white"></div> Online User 2
              </li>
            </ul>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;