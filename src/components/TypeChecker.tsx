'use client'

import { useState, useEffect } from 'react'

interface TypeCheckerProps {
  title: string
  initialCode: string
  correctCode?: string
  hint?: string
}

export default function TypeChecker({ title, initialCode, correctCode, hint }: TypeCheckerProps) {
  const [code, setCode] = useState(initialCode)
  const [errors, setErrors] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState(false)

  // Simple TypeScript error simulation
  useEffect(() => {
    const checkErrors = () => {
      const newErrors: string[] = []
      
      // Check for common TypeScript issues
      if (code.includes('let name = ') && !code.includes(': string')) {
        newErrors.push('Variable "name" needs a type annotation. Try: let name: string = ...')
      }
      
      if (code.includes('let age = ') && !code.includes(': number')) {
        newErrors.push('Variable "age" needs a type annotation. Try: let age: number = ...')
      }
      
      if (code.includes('function ') && code.includes('(') && !code.includes(': ')) {
        newErrors.push('Function parameters need type annotations')
      }
      
      if (code.includes('return ') && !code.includes('): ')) {
        newErrors.push('Function needs return type annotation')
      }

      // Check if code matches correct solution
      if (correctCode && code.trim() === correctCode.trim()) {
        setIsCorrect(true)
        setErrors([])
      } else {
        setIsCorrect(false)
        setErrors(newErrors)
      }
    }

    checkErrors()
  }, [code, correctCode])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-blue-100 text-sm">🔍 Fix the TypeScript errors to make the code work</p>
      </div>
      
      <div className="p-4">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Code Editor */}
          <div>
            <div className="mb-2">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Code Editor
              </span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-40 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border-2 border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
              spellCheck={false}
            />
          </div>

          {/* Error Display */}
          <div>
            <div className="mb-2">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                TypeScript Checker
              </span>
            </div>
            <div className="h-40 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-gray-300 dark:border-gray-600 overflow-y-auto">
              {isCorrect ? (
                <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Perfect! No TypeScript errors 🎉</span>
                </div>
              ) : errors.length > 0 ? (
                <div className="space-y-2">
                  {errors.map((error, index) => (
                    <div key={index} className="flex items-start space-x-2 text-red-600 dark:text-red-400">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{error}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 dark:text-gray-400 text-sm">
                  Start typing to see TypeScript feedback...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hint */}
        {hint && errors.length > 0 && (
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-600 dark:text-yellow-400">💡</span>
              <span className="text-yellow-800 dark:text-yellow-200 font-medium">Hint:</span>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">{hint}</p>
          </div>
        )}
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isCorrect ? 'bg-green-500' : errors.length > 0 ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
            <span>{isCorrect ? 'Code is valid!' : errors.length > 0 ? `${errors.length} error(s)` : 'Checking...'}</span>
          </div>
          <button
            onClick={() => setCode(initialCode)}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Reset Code
          </button>
        </div>
      </div>
    </div>
  )
}