# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/dist
# dist-ssr

# misc
.DS_Store
.env.local
.env.*.local

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# IDEs and editors
.vscode
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Facebook Clone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
{
  "name": "facebook-clone",
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
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Facebook specific colors
        'fb-blue': '#1877f2',
        'fb-gray': '#f0f2f5',
        'fb-green': '#42b72a',
      }
    },
  },
  plugins: [],
}
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOMIterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": "./src",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
{
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "types": ["node"]
  },
  "include": ["vite.config.ts"]
}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Set default background color for the Facebook feel */
body {
    background-color: #f0f2f5;
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center h-14 px-4 max-w-7xl mx-auto">
        
        {/* Left: Logo/Search */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-fb-blue mr-4 select-none">facebook</h1>
          <input 
            type="text" 
            placeholder="Search Facebook" 
            className="hidden lg:block bg-fb-gray px-3 py-1.5 rounded-full text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-fb-blue w-60"
          />
        </div>

        {/* Center: Navigation Icons */}
        <nav className="flex space-x-1 lg:space-x-2">
            {/* Home Icon */}
            <div className="p-3 lg:p-4 cursor-pointer rounded-lg hover:bg-fb-gray transition duration-150 border-b-4 border-fb-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-fb-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-2 2m-2 2v10a1 1 0 001 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            {/* Watch/Video Icon Placeholder */}
            <div className="p-3 lg:p-4 cursor-pointer rounded-lg hover:bg-fb-gray transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5z" /></svg>
            </div>
        </nav>

        {/* Right: User Menu Icons */}
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-400 cursor-pointer flex items-center justify-center text-white font-bold text-sm">U</div>
            <button className="hidden sm:block p-2 rounded-full bg-fb-gray hover:bg-gray-300 text-gray-600 transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-fb-gray">
      <Header />
      
      <main className="max-w-7xl mx-auto pt-4 px-1 lg:px-4">
        {/* Layout: Left Sidebar (3) | Middle Feed (6) | Right Widgets (3) */}
        <div className="grid grid-cols-12 gap-4">
          
          {/* Left Sidebar */}
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-16 space-y-2">
              <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-400 mr-3"></div>
                <span className="font-medium text-sm">User Profile</span>
              </div>
              
              <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200 rounded-lg">
                <span className="text-xl mr-3">👥</span>
                <span className="font-medium text-sm">Friends</span>
              </div>
              <hr className="my-2 border-gray-300" />
              <p className="text-xs text-gray-500 px-2">Shortcuts</p>
            </div>
          </div>

          {/* Middle Feed & Story Area */}
          <div className="col-span-12 lg:col-span-6 space-y-4">
            
            {/* Story/Reels Placeholder */}
            <div className="h-40 bg-white rounded-lg shadow p-4 flex items-center justify-center border border-gray-200">
                <span className="text-gray-500">Stories Area Placeholder</span>
            </div>

            {/* Create Post Widget */}
            <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
              <div className="flex items-center border-b pb-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-400 mr-2"></div>
                  <input 
                    type="text" 
                    className="flex-grow bg-fb-gray p-2 rounded-full placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-fb-blue" 
                    placeholder="What's on your mind, User?"
                  />
              </div>
              <div className="flex justify-around pt-2 text-sm text-gray-600">
                  <button className="flex items-center hover:bg-gray-100 p-2 rounded transition">
                      <span className="text-xl mr-1">🎥</span> Live Video
                  </button>
                  <button className="flex items-center hover:bg-gray-100 p-2 rounded transition">
                      <span className="text-xl mr-1">📸</span> Photo/Video
                  </button>
                  <button className="flex items-center hover:bg-gray-100 p-2 rounded transition hidden sm:flex">
                      <span className="text-xl mr-1">🙂</span> Feeling/Activity
                  </button>
              </div>
            </div>
            
            {/* Feed Item Placeholder 1 */}
            <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
                <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-300 mr-2"></div>
                    <div>
                        <p className="font-semibold text-sm">Example User</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                </div>
                <p className="text-gray-800">Setting up the basic structure for the Facebook clone layout using Tailwind CSS. It looks great on both desktop and mobile!</p>
                <div className="flex justify-between border-t mt-3 pt-2 text-gray-500 text-sm">
                    <button className="p-1 w-1/3 hover:bg-fb-gray rounded transition">👍 Like</button>
                    <button className="p-1 w-1/3 hover:bg-fb-gray rounded transition">💬 Comment</button>
                    <button className="p-1 w-1/3 hover:bg-fb-gray rounded transition">📤 Share</button>
                </div>
            </div>

          </div>

          {/* Right Widgets */}
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-16 space-y-4">
              <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
                <h2 className="font-semibold mb-2 text-gray-600">Sponsored</h2>
                <div className="text-sm text-gray-500 space-y-2">
                    <p>Ad 1: Learn DevOps & React</p>
                    <p>Ad 2: Vite Configuration Tips</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
                <h2 className="font-semibold mb-2 text-gray-600">Contacts</h2>
                <div className="space-y-2">
                    <p className="text-sm text-gray-700">Online Contact 1</p>
                    <p className="text-sm text-gray-700">Online Contact 2</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;