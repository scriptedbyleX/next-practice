'use client'

import { useState } from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import UtilityClassBuilder from '@/components/UtilityClassBuilder'
import ColorSystemExplorer from '@/components/ColorSystemExplorer'
import ResponsiveTester from '@/components/ResponsiveTester'
import ToggleDemo from '@/components/ToggleDemo'
import TryItBox from '@/components/TryItBox'
import SliderComparison from '@/components/SliderComparison'

export default function TailwindTutorial() {
  const [selectedComponent, setSelectedComponent] = useState('card')

  const cssApproaches = [
    {
      id: 'traditional',
      label: 'Traditional CSS',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">😰 Writing Custom CSS</h4>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-400">
            <div className="font-mono text-sm mb-4 bg-gray-900 text-gray-300 p-3 rounded max-h-32 overflow-y-auto">
{`.card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #6b7280;
  line-height: 1.5;
}

.card:hover {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}`}
            </div>
            <div className="space-y-2">
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Lots of custom CSS to write</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Need to remember exact values</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Inconsistent styles across team</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Hard to maintain and update</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tailwind',
      label: 'Tailwind CSS',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">😎 Utility-First Approach</h4>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-400">
            <div className="font-mono text-sm mb-4 bg-gray-900 text-green-400 p-3 rounded">
{`<div className="
  bg-white 
  rounded-lg 
  shadow-lg 
  p-6 
  mb-4 
  border 
  border-gray-200 
  hover:shadow-xl 
  hover:-translate-y-1 
  transition-all
">
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    Card Title
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Card content goes here
  </p>
</div>`}
            </div>
            <div className="space-y-2">
              <div className="text-green-700 dark:text-green-300 text-sm">✅ No custom CSS needed</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Consistent design system</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Easy to read and maintain</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Responsive by default</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const componentPatterns = {
    card: {
      name: 'Card Component',
      code: 'bg-white rounded-lg shadow-lg p-6 border border-gray-200',
      preview: (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 max-w-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h3>
          <p className="text-gray-600">This is a beautiful card component built with Tailwind utilities.</p>
        </div>
      )
    },
    button: {
      name: 'Button Component',
      code: 'bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors',
      preview: (
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
          Click Me
        </button>
      )
    },
    input: {
      name: 'Input Component',
      code: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500',
      preview: (
        <input 
          type="text" 
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      )
    },
    badge: {
      name: 'Badge Component',
      code: 'inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm',
      preview: (
        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          New Feature
        </span>
      )
    }
  }

  return (
    <TutorialLayout title="Tailwind CSS" currentSection="tailwind">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Hero */}
        <div className="text-center bg-gradient-to-r from-cyan-500 to-teal-600 rounded-lg p-8 text-white">
          <div className="text-4xl mb-4">🎨</div>
          <h1 className="text-3xl font-bold mb-4">Tailwind = IKEA Instructions for Styling</h1>
          <p className="text-xl opacity-90">Build beautiful designs with small utility pieces that fit together perfectly</p>
        </div>

        {/* CSS Approach Comparison */}
        <ToggleDemo
          title="Traditional CSS vs Tailwind CSS"
          description="See why developers love the utility-first approach!"
          options={cssApproaches}
          defaultOption="traditional"
        />

        {/* Utility Class Builder */}
        <UtilityClassBuilder title="Build Components with Utilities" />

        {/* Color System Explorer */}
        <ColorSystemExplorer title="Tailwind Color System" />

        {/* Responsive Design Tester */}
        <ResponsiveTester title="Responsive Design Testing">
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Responsive Design
            </h2>
            <p className="text-sm md:text-base lg:text-lg opacity-90">
              This text and layout adapts to different screen sizes automatically!
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Item 1</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Item 2</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg md:col-span-2 lg:col-span-1">
                <div className="w-8 h-8 bg-white/30 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Item 3</p>
              </div>
            </div>
          </div>
        </ResponsiveTester>

        {/* Component Patterns */}
        <TryItBox
          title="Popular Component Patterns"
          instruction="Click different components to see the utility classes used!"
          icon="🧱"
          successMessage="You're learning component patterns!"
        >
          <div className="space-y-6">
            {/* Component selector */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(componentPatterns).map(([key, component]) => (
                <button
                  key={key}
                  onClick={() => setSelectedComponent(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedComponent === key
                      ? 'bg-cyan-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {component.name}
                </button>
              ))}
            </div>

            {/* Component preview and code */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">🎯 Component Preview:</h4>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg min-h-32 flex items-center justify-center">
                  {componentPatterns[selectedComponent as keyof typeof componentPatterns].preview}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">📋 Utility Classes:</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-cyan-400 font-mono text-sm break-all">
                    className="
                    <span className="text-green-400 block ml-2">
                      {componentPatterns[selectedComponent as keyof typeof componentPatterns].code}
                    </span>
                    "
                  </div>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(componentPatterns[selectedComponent as keyof typeof componentPatterns].code)}
                  className="mt-2 w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2 rounded transition-colors text-sm"
                >
                  📋 Copy Classes
                </button>
              </div>
            </div>
          </div>
        </TryItBox>

        {/* Development Speed Comparison */}
        <SliderComparison
          title="Development Speed: Custom CSS vs Tailwind"
          beforeLabel="Custom CSS"
          afterLabel="Tailwind CSS"
          beforeContent={
            <div>
              <h4 className="font-bold mb-2">🐌 Traditional Workflow</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded">
                  <span className="text-red-700 dark:text-red-300">⏱️ Write custom CSS classes</span>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded">
                  <span className="text-yellow-700 dark:text-yellow-300">🔄 Switch between files</span>
                </div>
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded">
                  <span className="text-red-700 dark:text-red-300">🤔 Think of class names</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  <span className="text-gray-700 dark:text-gray-300">😓 Maintain consistency</span>
                </div>
              </div>
            </div>
          }
          afterContent={
            <div>
              <h4 className="font-bold mb-2">⚡ Tailwind Workflow</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
                  <span className="text-green-700 dark:text-green-300">🎯 Apply utilities directly</span>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded">
                  <span className="text-blue-700 dark:text-blue-300">🚀 Work in one file</span>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded">
                  <span className="text-purple-700 dark:text-purple-300">🎨 Consistent design system</span>
                </div>
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
                  <span className="text-green-700 dark:text-green-300">✨ Instant visual feedback</span>
                </div>
              </div>
            </div>
          }
        />

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">🚀 Tailwind CSS Cheat Sheet</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🎨 Colors</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>bg-blue-500</div>
                <div>text-red-600</div>
                <div>border-green-400</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📐 Spacing</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>p-4 m-2</div>
                <div>px-6 py-3</div>
                <div>space-x-4</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📝 Typography</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>text-xl</div>
                <div>font-bold</div>
                <div>text-center</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📦 Layout</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>flex items-center</div>
                <div>grid grid-cols-2</div>
                <div>rounded-lg</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 Responsive</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>md:text-lg</div>
                <div>lg:grid-cols-3</div>
                <div>sm:p-6</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✨ Effects</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>shadow-lg</div>
                <div>hover:scale-105</div>
                <div>transition-all</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎯 States</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>hover:bg-blue-600</div>
                <div>focus:ring-2</div>
                <div>active:scale-95</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📏 Sizing</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>w-full h-32</div>
                <div>max-w-md</div>
                <div>aspect-square</div>
              </div>
            </div>
          </div>
        </div>

        {/* Congratulations */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 text-center text-white">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
          <p className="text-xl mb-6 opacity-90">
            You've completed the entire web development tutorial! You now understand:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              'Node.js & npm basics',
              'React components & state', 
              'Next.js routing & rendering',
              'TypeScript type safety',
              'ESLint & Prettier tools',
              'Git version control',
              'Tailwind CSS styling',
              'Professional workflows'
            ].map((skill, index) => (
              <div key={index} className="bg-white/20 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-green-300">✅</span>
                  <span className="text-sm">{skill}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/tutorial"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              🏠 Back to Tutorial Hub
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/tutorial/git"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous: Git Workflow</span>
          </a>
          
          <a
            href="/tutorial"
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <span>🏆 Tutorial Complete!</span>
          </a>
        </div>
      </div>
    </TutorialLayout>
  )
}