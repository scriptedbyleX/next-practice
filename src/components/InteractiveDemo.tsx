'use client'

import { useState } from 'react'

interface InteractiveDemoProps {
  title: string
  description: string
  children: React.ReactNode
  code?: string
}

export default function InteractiveDemo({ title, description, children, code }: InteractiveDemoProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-purple-100">{description}</p>
      </div>
      
      <div className="p-6">
        {/* Interactive area */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-4">
          {children}
        </div>

        {/* Code toggle */}
        {code && (
          <div>
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center space-x-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
            >
              <svg 
                className={`w-4 h-4 transform transition-transform ${showCode ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>{showCode ? 'Hide' : 'Show'} Code</span>
            </button>

            {showCode && (
              <div className="mt-4 bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{code}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}