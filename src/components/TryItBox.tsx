'use client'

import { useState } from 'react'

interface TryItBoxProps {
  title: string
  instruction: string
  children: React.ReactNode
  successMessage?: string
  icon?: string
}

export default function TryItBox({ 
  title, 
  instruction, 
  children, 
  successMessage = "Great job! 🎉",
  icon = "🧪"
}: TryItBoxProps) {
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleInteraction = () => {
    setHasInteracted(true)
    // Reset after 3 seconds to encourage more experimentation
    setTimeout(() => setHasInteracted(false), 3000)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-yellow-200 dark:border-yellow-800">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-yellow-100 text-sm">{instruction}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div 
          onClick={handleInteraction}
          onMouseEnter={handleInteraction}
          className="relative"
        >
          {children}
        </div>

        {/* Success Message */}
        {hasInteracted && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg animate-bounce">
            <div className="flex items-center space-x-2">
              <span className="text-green-600 dark:text-green-400">✅</span>
              <span className="text-green-800 dark:text-green-200 font-medium">
                {successMessage}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-3 bg-yellow-50 dark:bg-yellow-900/20 border-t border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center space-x-2 text-sm text-yellow-800 dark:text-yellow-300">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></span>
          <span>Hover or click to experiment!</span>
        </div>
      </div>
    </div>
  )
}