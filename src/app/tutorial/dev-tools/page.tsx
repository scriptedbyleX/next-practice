'use client'

import { useState } from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import CodeFormatter from '@/components/CodeFormatter'
import ToggleDemo from '@/components/ToggleDemo'
import TryItBox from '@/components/TryItBox'
import SliderComparison from '@/components/SliderComparison'

export default function DevToolsTutorial() {
  const [selectedScript, setSelectedScript] = useState('')
  
  const eslintExamples = [
    {
      id: 'without',
      label: 'Without ESLint',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">😬 Code Without ESLint</h4>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-400">
            <div className="font-mono text-sm mb-4 bg-gray-900 text-gray-300 p-3 rounded">
{`function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price
  }
  var tax = total * 0.1
  return total + tax;
}

console.log("Total: " + calculateTotal(cart))`}
            </div>
            <div className="space-y-2">
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Mixed 'var' and modern practices</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Inconsistent semicolons</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Old-style string concatenation</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ No style consistency</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'with',
      label: 'With ESLint',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">😎 Code With ESLint</h4>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-400">
            <div className="font-mono text-sm mb-4 bg-gray-900 text-green-400 p-3 rounded">
{`function calculateTotal(items) {
  let total = 0
  for (const item of items) {
    total += item.price
  }
  const tax = total * 0.1
  return total + tax
}

console.log(\`Total: \${calculateTotal(cart)}\`)`}
            </div>
            <div className="space-y-2">
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Consistent 'const' and 'let'</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Modern for...of loop</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Template literals for strings</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Consistent style across team</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const packageScripts = [
    { name: 'dev', command: 'next dev', description: 'Start development server with hot reload' },
    { name: 'build', command: 'next build', description: 'Build optimized production version' },
    { name: 'start', command: 'next start', description: 'Start production server' },
    { name: 'lint', command: 'next lint', description: 'Check code for errors and style issues' },
    { name: 'format', command: 'prettier --write .', description: 'Format all code files automatically' },
    { name: 'type-check', command: 'tsc --noEmit', description: 'Check TypeScript types without building' },
  ]

  return (
    <TutorialLayout title="Development Tools" currentSection="dev-tools">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Hero */}
        <div className="text-center bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg p-8 text-white">
          <div className="text-4xl mb-4">🛠️</div>
          <h1 className="text-3xl font-bold mb-4">Dev Tools = Your Coding Assistants</h1>
          <p className="text-xl opacity-90">Automated helpers that keep your code clean and catch errors</p>
        </div>

        {/* Code Formatter Demo */}
        <CodeFormatter 
          title="Prettier: Auto-Format Your Code"
        />

        {/* ESLint Comparison */}
        <ToggleDemo
          title="ESLint: Your Code Grammar Checker"
          description="See how ESLint keeps your code consistent and error-free!"
          options={eslintExamples}
          defaultOption="without"
        />

        {/* Package.json Explorer */}
        <TryItBox
          title="package.json Explorer"
          instruction="Click different sections to learn what they do!"
          icon="📋"
          successMessage="You're learning how package.json works!"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Your package.json file:</h4>
              <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 rounded max-h-80 overflow-auto">
{`{
  "name": "react-next-practice",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.5.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "typescript": "^5.9.2",
    "eslint": "^9.34.0",
    "prettier": "^3.6.2",
    "tailwindcss": "^4.1.12"
  }
}`}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">What each part means:</h4>
              <div className="space-y-3 max-h-80 overflow-auto">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200">📦 name & version</h5>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Project identity - like an ID card for your app</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-green-800 dark:text-green-200">⚡ scripts</h5>
                  <p className="text-green-700 dark:text-green-300 text-sm">Shortcuts for common commands - like speed dial for tasks</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded border-l-4 border-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-purple-800 dark:text-purple-200">📚 dependencies</h5>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">Libraries your app needs to run - like ingredients for a recipe</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors cursor-pointer">
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-200">🔧 devDependencies</h5>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">Tools only needed during development - like kitchen utensils</p>
                </div>
              </div>
            </div>
          </div>
        </TryItBox>

        {/* Script Runner Simulator */}
        <TryItBox
          title="npm Scripts in Action"
          instruction="Click the scripts to see what each command does!"
          icon="⚡"
        >
          <div className="space-y-3">
            {packageScripts.map((script) => (
              <div key={script.name} className="flex items-center space-x-4">
                <button
                  onClick={() => setSelectedScript(script.name)}
                  className={`px-4 py-2 rounded font-mono text-sm transition-all ${
                    selectedScript === script.name
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  npm run {script.name}
                </button>
                <div className="flex-1">
                  <div className="font-mono text-sm text-gray-600 dark:text-gray-400">{script.command}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">{script.description}</div>
                </div>
              </div>
            ))}
            
            {selectedScript && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 animate-bounce">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 dark:text-green-400">🚀</span>
                  <span className="font-semibold text-green-800 dark:text-green-200">
                    Running: npm run {selectedScript}
                  </span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                  {packageScripts.find(s => s.name === selectedScript)?.description}
                </p>
              </div>
            )}
          </div>
        </TryItBox>

        {/* Development Experience Comparison */}
        <SliderComparison
          title="Coding Experience: Without vs With Dev Tools"
          beforeLabel="No Dev Tools"
          afterLabel="With Dev Tools"
          beforeContent={
            <div>
              <h4 className="font-bold mb-2">😤 Manual Everything</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded">
                  <span className="text-red-700 dark:text-red-300">❌ Manual code formatting</span>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded">
                  <span className="text-yellow-700 dark:text-yellow-300">🐛 Find bugs at runtime</span>
                </div>
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded">
                  <span className="text-red-700 dark:text-red-300">📏 Inconsistent style</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  <span className="text-gray-700 dark:text-gray-300">😓 Time-consuming setup</span>
                </div>
              </div>
            </div>
          }
          afterContent={
            <div>
              <h4 className="font-bold mb-2">🎉 Automated Helpers</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
                  <span className="text-green-700 dark:text-green-300">✨ Auto-format on save</span>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded">
                  <span className="text-blue-700 dark:text-blue-300">🔍 Catch errors while typing</span>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded">
                  <span className="text-purple-700 dark:text-purple-300">🎯 Consistent team style</span>
                </div>
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
                  <span className="text-green-700 dark:text-green-300">⚡ One-command setup</span>
                </div>
              </div>
            </div>
          }
        />

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">🚀 Dev Tools Cheat Sheet</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <span>🔍</span>
                <span>ESLint</span>
              </h4>
              <div className="text-sm bg-white dark:bg-gray-800 p-3 rounded">
                <p className="mb-2">Catches errors and enforces code style</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-1 rounded">npm run lint</code>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <span>✨</span>
                <span>Prettier</span>
              </h4>
              <div className="text-sm bg-white dark:bg-gray-800 p-3 rounded">
                <p className="mb-2">Auto-formats code consistently</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-1 rounded">npm run format</code>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <span>📋</span>
                <span>package.json</span>
              </h4>
              <div className="text-sm bg-white dark:bg-gray-800 p-3 rounded">
                <p className="mb-2">Project config and dependencies</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-1 rounded">npm install</code>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <span>🔷</span>
                <span>TypeScript</span>
              </h4>
              <div className="text-sm bg-white dark:bg-gray-800 p-3 rounded">
                <p className="mb-2">Type checking for safety</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-1 rounded">npm run type-check</code>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <span>⚡</span>
                <span>Scripts</span>
              </h4>
              <div className="text-sm bg-white dark:bg-gray-800 p-3 rounded">
                <p className="mb-2">Shortcuts for common tasks</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-1 rounded">npm run dev</code>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center space-x-2">
                <span>📦</span>
                <span>npm</span>
              </h4>
              <div className="text-sm bg-white dark:bg-gray-800 p-3 rounded">
                <p className="mb-2">Package manager and runner</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-700 p-1 rounded">npm run build</code>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/tutorial/typescript"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous: TypeScript</span>
          </a>
          
          <a
            href="/tutorial/git"
            className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>Next: Git Workflow</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </TutorialLayout>
  )
}