'use client'

import { useState } from 'react'

interface PlaygroundEditorProps {
  title: string
  initialCode: string
  language?: string
  onCodeChange?: (code: string) => void
  preview?: React.ReactNode
  height?: string
}

export default function PlaygroundEditor({ 
  title, 
  initialCode, 
  language = 'javascript',
  onCodeChange,
  preview,
  height = '300px'
}: PlaygroundEditorProps) {
  const [code, setCode] = useState(initialCode)

  const handleCodeChange = (newCode: string) => {
    setCode(newCode)
    onCodeChange?.(newCode)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-indigo-100 text-sm">✏️ Edit the code and see instant results</p>
      </div>
      
      <div className="grid md:grid-cols-2 divide-x divide-gray-200 dark:divide-gray-700">
        {/* Code Editor */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Code Editor
            </span>
          </div>
          <textarea
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="w-full p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border-2 border-gray-700 focus:border-indigo-500 focus:outline-none resize-none"
            style={{ height }}
            spellCheck={false}
          />
        </div>

        {/* Preview */}
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Live Preview
            </span>
          </div>
          <div 
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700"
            style={{ height }}
          >
            {preview || (
              <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <p>Interactive preview will appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Live Editor Active</span>
          </div>
          <button
            onClick={() => handleCodeChange(initialCode)}
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            Reset Code
          </button>
        </div>
      </div>
    </div>
  )
}