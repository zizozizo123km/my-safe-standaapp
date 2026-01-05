// .gitignore
/node_modules
/dist
/dist-ssr
*.log
.DS_Store
.env
.env.local
.idea
.vscode
npm-debug.log*
yarn-error.log*
pnpm-debug.log*
tsconfig.tsbuildinfo

// index.html
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

// package.json
{
  "name": "facebook-clone-react",
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

// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};

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

// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOMContentLoadede"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
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
    "tsBuildInfoFile": "./node_modules/.tsconfig.node.tsbuildinfo",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2020",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    background-color: #f0f2f5; /* Facebook gray background */
}

// src/App.tsx
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="flex">
        {/* Left Sidebar (Hidden on small screens) */}
        <div className="hidden lg:block w-[300px] h-[calc(100vh-56px)] overflow-y-auto pt-4 sticky top-14">
            <div className='p-4 text-gray-700'>
                {/* Navigation Links Placeholder */}
                <p className='font-bold mb-2'>Shortcuts</p>
                <div className='p-2 hover:bg-gray-200 rounded-lg cursor-pointer'>Friends</div>
                <div className='p-2 hover:bg-gray-200 rounded-lg cursor-pointer'>Groups</div>
                <div className='p-2 hover:bg-gray-200 rounded-lg cursor-pointer'>Marketplace</div>
            </div>
        </div>

        {/* Feed Center */}
        <div className="flex-grow max-w-4xl mx-auto pt-6 px-4">
            <div className="space-y-6">
                {/* Story Placeholder */}
                <div className="h-48 bg-white rounded-lg shadow p-4 flex items-center justify-center">
                    Stories Section Placeholder
                </div>
                
                {/* Post Creator Placeholder */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <p className="border-b pb-3 mb-3 text-gray-500">What's on your mind?</p>
                    <div className="flex justify-between text-sm text-gray-600">
                        <button className="flex items-center p-2 rounded-lg hover:bg-gray-100">Live Video</button>
                        <button className="flex items-center p-2 rounded-lg hover:bg-gray-100">Photo/Video</button>
                        <button className="flex items-center p-2 rounded-lg hover:bg-gray-100">Feeling/Activity</button>
                    </div>
                </div>

                {/* Feed Post Placeholder */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="font-bold">A Post Title</h2>
                    <p className="text-sm text-gray-500 mb-4">5m ago</p>
                    <p>This is where content from the feed goes.</p>
                </div>
                {/* More Posts */}
                <div className="bg-white p-4 rounded-lg shadow h-60">Another Post</div>
                <div className="bg-white p-4 rounded-lg shadow h-60">Yet Another Post</div>
            </div>
        </div>

        {/* Right Sidebar (Contacts/Ads) (Hidden on small screens) */}
        <div className="hidden xl:block w-[300px] h-[calc(100vh-56px)] overflow-y-auto pt-4 sticky top-14">
            <div className='p-4 text-gray-700'>
                <p className='font-bold mb-4'>Contacts</p>
                {/* Contact List Placeholder */}
                <div className='p-2 hover:bg-gray-200 rounded-lg cursor-pointer flex items-center space-x-2'>
                    <div className='h-8 w-8 rounded-full bg-green-500'></div>
                    <span>Online Friend</span>
                </div>
                <div className='p-2 hover:bg-gray-200 rounded-lg cursor-pointer flex items-center space-x-2'>
                    <div className='h-8 w-8 rounded-full bg-green-500'></div>
                    <span>Another Friend</span>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;

// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-14 p-2 bg-white shadow-md">
      {/* Left Section: Logo & Search */}
      <div className="flex items-center space-x-2">
        <h1 className="text-4xl font-bold text-facebook-blue cursor-pointer">f</h1>
        <div className="hidden sm:flex items-center rounded-full bg-facebook-gray p-2">
          {/* Search Icon Placeholder */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search Facebook" 
            className="hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Middle Section: Navigation Icons */}
      <div className="flex justify-center flex-grow mx-2">
        <div className="flex space-x-2 md:space-x-8">
          {/* Home Icon Placeholder */}
          <div className="p-3 md:px-10 rounded-lg text-facebook-blue border-b-4 border-facebook-blue cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-10v10a1 1 0 001 1h3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1z" />
            </svg>
          </div>
          {/* Watch Icon Placeholder (Example of inactive tab) */}
          <div className="p-3 md:px-10 rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Section: User Menu & Actions */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* User Avatar Placeholder */}
        <div className="flex items-center p-1 rounded-full hover:bg-gray-100 cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-gray-400"></div>
            <span className="hidden lg:inline-flex whitespace-nowrap ml-2 font-semibold">User</span>
        </div>
        
        {/* Menu Icon Placeholder */}
        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
            M
        </div>
        {/* Notifications Icon Placeholder */}
        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
            N
        </div>
        {/* Chat Icon Placeholder */}
        <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
            C
        </div>
      </div>
    </header>
  );
};

export default Header;

// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);