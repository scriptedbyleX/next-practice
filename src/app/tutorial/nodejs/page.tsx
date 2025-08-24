'use client'

import { useState } from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import ConceptCard from '@/components/ConceptCard'
import CodeBlock from '@/components/CodeBlock'
import InteractiveDemo from '@/components/InteractiveDemo'
import ProgressTracker from '@/components/ProgressTracker'
import Tooltip from '@/components/Tooltip'

const nodeSteps = [
  { id: 'what-is-node', title: 'What is Node.js?', completed: false },
  { id: 'why-use-node', title: 'Why use Node.js?', completed: false },
  { id: 'npm-basics', title: 'Understanding npm', completed: false },
  { id: 'package-json', title: 'package.json explained', completed: false },
  { id: 'practical-example', title: 'See it in action', completed: false },
]

export default function NodeJSTutorial() {
  const [steps, setSteps] = useState(nodeSteps)
  const [activeExample, setActiveExample] = useState('server')

  const toggleStep = (stepId: string) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ))
  }

  const examples = {
    server: `// A simple web server in Node.js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hello from Node.js!</h1>')
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})`,
    
    files: `// Reading files with Node.js
const fs = require('fs')

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
  } else {
    console.log('File content:', data)
  }
})`,

    modules: `// Creating and using modules
// math.js
function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

module.exports = { add, multiply }

// app.js
const math = require('./math')

console.log(math.add(5, 3))      // 8
console.log(math.multiply(4, 2))  // 8`
  }

  return (
    <TutorialLayout title="Node.js Basics" currentSection="nodejs">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Progress Tracker */}
        <ProgressTracker 
          steps={steps}
          onToggleStep={toggleStep}
        />

        {/* What is Node.js? */}
        <section id="what-is-node">
          <ConceptCard
            title="What is Node.js?"
            description="Understanding the JavaScript runtime"
            icon="🟢"
            color="green"
          >
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Think of Node.js like this: normally, JavaScript only runs in web browsers. Node.js is like a 
                  special program that lets JavaScript run on your computer directly - just like how you can run 
                  Python or Java programs.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 my-6">
                  <h4 className="text-blue-800 dark:text-blue-200 font-semibold mb-2">🏠 House Building Analogy</h4>
                  <p className="text-blue-700 dark:text-blue-300 mb-0">
                    If JavaScript is like the <strong>blueprint</strong> for a house, then:
                  </p>
                  <ul className="text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                    <li>• <strong>Browser</strong> = Building the house in a specific neighborhood (website)</li>
                    <li>• <strong>Node.js</strong> = Building the house anywhere you want (your computer)</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">❌ Before Node.js</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    JavaScript could only run in browsers. If you wanted to build the "behind-the-scenes" 
                    part of a website, you needed different languages like PHP or Python.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ With Node.js</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You can use JavaScript for everything! Front-end (what users see) AND back-end 
                    (server, databases, file handling).
                  </p>
                </div>
              </div>
            </div>
          </ConceptCard>
        </section>

        {/* Why use Node.js? */}
        <section id="why-use-node">
          <ConceptCard
            title="Why Use Node.js?"
            description="The benefits that made it popular"
            icon="🚀"
            color="blue"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Super Fast</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Handles thousands of requests without slowing down
                  </p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl mb-2">🧠</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">One Language</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Learn JavaScript once, use it everywhere
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl mb-2">📦</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Huge Ecosystem</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Millions of ready-to-use packages
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  🏢 Who Uses Node.js?
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">Big Companies:</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Netflix (streams videos to millions)</li>
                      <li>• Uber (handles ride requests)</li>
                      <li>• WhatsApp (real-time messaging)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">Perfect For:</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Chat applications</li>
                      <li>• Real-time games</li>
                      <li>• API servers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ConceptCard>
        </section>

        {/* NPM Basics */}
        <section id="npm-basics">
          <ConceptCard
            title="Understanding npm"
            description="Node's package manager explained"
            icon="📦"
            color="red"
          >
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-6 rounded-lg">
                  <h4 className="text-red-800 dark:text-red-200 font-semibold mb-2">🍕 Pizza Restaurant Analogy</h4>
                  <p className="text-red-700 dark:text-red-300 mb-2">
                    Imagine you're running a pizza restaurant:
                  </p>
                  <ul className="text-red-700 dark:text-red-300 space-y-1">
                    <li>• You could make <strong>everything</strong> from scratch (dough, sauce, cheese)</li>
                    <li>• OR you could <strong>buy ingredients</strong> from suppliers and focus on cooking</li>
                  </ul>
                  <p className="text-red-700 dark:text-red-300 mt-3">
                    <strong>npm is like having suppliers for code!</strong> Instead of writing everything yourself, 
                    you can use code that other developers have already written and tested.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What is npm?</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Package Manager:</strong> Downloads and manages code libraries</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Command Line Tool:</strong> You run it in your terminal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Registry:</strong> Millions of packages to choose from</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Common Commands</h4>
                  <div className="space-y-2">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded p-2">
                      <code className="text-sm">npm install package-name</code>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Add a package to your project</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded p-2">
                      <code className="text-sm">npm run dev</code>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Run your development server</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ConceptCard>
        </section>

        {/* package.json */}
        <section id="package-json">
          <ConceptCard
            title="package.json Explained"
            description="Your project's instruction manual"
            icon="📋"
            color="purple"
          >
            <div className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">package.json</code> file 
                  is like a recipe card for your project. It tells anyone (including npm) exactly what ingredients 
                  (packages) your project needs and how to prepare it (scripts to run).
                </p>
              </div>

              <CodeBlock 
                code={`{
  "name": "react-next-practice",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",        // Start development server
    "build": "next build",    // Build for production
    "start": "next start",    // Start production server
    "lint": "next lint"       // Check code quality
  },
  "dependencies": {
    "next": "^15.5.0",        // Main framework
    "react": "^19.1.1",       // UI library
    "react-dom": "^19.1.1"    // React for web browsers
  },
  "devDependencies": {
    "typescript": "^5.9.2",   // Only needed during development
    "eslint": "^9.34.0",      // Code quality checker
    "prettier": "^3.6.2"      // Code formatter
  }
}`}
                language="json"
                title="Your project's package.json"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="text-blue-800 dark:text-blue-200 font-semibold mb-2">🎯 Key Sections</h4>
                  <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
                    <li><strong>name:</strong> Your project's name</li>
                    <li><strong>scripts:</strong> Shortcuts for common tasks</li>
                    <li><strong>dependencies:</strong> Code your app needs to run</li>
                    <li><strong>devDependencies:</strong> Tools for development only</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="text-green-800 dark:text-green-200 font-semibold mb-2">🔢 Version Numbers</h4>
                  <div className="text-green-700 dark:text-green-300 text-sm">
                    <p className="mb-2"><code>"^15.5.0"</code> means:</p>
                    <ul className="space-y-1">
                      <li>• <strong>15</strong> = Major version</li>
                      <li>• <strong>5</strong> = Minor version</li>
                      <li>• <strong>0</strong> = Patch version</li>
                      <li>• <strong>^</strong> = Allow minor updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ConceptCard>
        </section>

        {/* Practical Examples */}
        <section id="practical-example">
          <InteractiveDemo
            title="Node.js in Action"
            description="See what Node.js can do with these examples"
          >
            <div className="space-y-6">
              <div className="flex space-x-2 mb-4">
                <button
                  onClick={() => setActiveExample('server')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeExample === 'server'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Web Server
                </button>
                <button
                  onClick={() => setActiveExample('files')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeExample === 'files'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  File Operations
                </button>
                <button
                  onClick={() => setActiveExample('modules')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeExample === 'modules'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Modules
                </button>
              </div>

              <CodeBlock 
                code={examples[activeExample as keyof typeof examples]}
                language="javascript"
                title={`${activeExample === 'server' ? 'Web Server' : activeExample === 'files' ? 'File Operations' : 'Modules'} Example`}
              />

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h4 className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">💡 Don't Worry!</h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  You don't need to memorize this code. The important thing is understanding that Node.js 
                  lets JavaScript do things like create servers, read files, and organize code into modules. 
                  With frameworks like Next.js, most of this complexity is handled for you!
                </p>
              </div>
            </div>
          </InteractiveDemo>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/tutorial"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Tutorial Hub</span>
          </a>
          
          <a
            href="/tutorial/react"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>Next: React Fundamentals</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </TutorialLayout>
  )
}