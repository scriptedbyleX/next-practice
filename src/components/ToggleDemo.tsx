'use client'

import { useState } from 'react'

interface ToggleDemoProps {
  title: string
  description: string
  options: {
    id: string
    label: string
    content: React.ReactNode
  }[]
  defaultOption?: string
}

export default function ToggleDemo({ 
  title, 
  description, 
  options, 
  defaultOption 
}: ToggleDemoProps) {
  const [activeOption, setActiveOption] = useState(defaultOption || options[0]?.id)

  const activeContent = options.find(option => option.id === activeOption)?.content

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-emerald-100 text-sm">{description}</p>
      </div>
      
      <div className="p-4">
        {/* Toggle Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveOption(option.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeOption === option.id
                  ? 'bg-emerald-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="min-h-48">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-6 border-2 border-emerald-200 dark:border-emerald-800">
            {activeContent}
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>Click the buttons above to see different examples</span>
        </div>
      </div>
    </div>
  )
}