'use client'

import { useEffect, useState } from 'react'

interface Step {
  id: string
  title: string
  completed: boolean
}

interface ProgressTrackerProps {
  steps: Step[]
  currentStep?: string
  onToggleStep?: (stepId: string) => void
}

export default function ProgressTracker({ steps, currentStep, onToggleStep }: ProgressTrackerProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const completedCount = steps.filter(step => step.completed).length
  const progressPercentage = (completedCount / steps.length) * 100

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Progress Tracker
        </h3>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {completedCount} of {steps.length} completed
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6">
        <div 
          className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Steps list */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center space-x-3">
            <button
              onClick={() => onToggleStep?.(step.id)}
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                step.completed
                  ? 'bg-green-500 border-green-500 text-white'
                  : currentStep === step.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                  : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
              }`}
            >
              {step.completed && (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {!step.completed && currentStep === step.id && (
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              )}
            </button>
            
            <span className={`text-sm flex-1 ${
              step.completed 
                ? 'text-green-600 dark:text-green-400 line-through' 
                : currentStep === step.id
                ? 'text-blue-600 dark:text-blue-400 font-medium'
                : 'text-gray-700 dark:text-gray-300'
            }`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {completedCount === steps.length && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 dark:text-green-200 font-medium">
              🎉 Congratulations! You've completed this section!
            </span>
          </div>
        </div>
      )}
    </div>
  )
}