'use client'

import { useState } from 'react'

interface CodeFormatterProps {
  title: string
  language?: string
}

const messyCode = `function example(name,age){
const message="Hello "+name+",you are "+age+" years old.";
if(age>=18){
return{
adult:true,
message:message,
canVote:true
}
}else{
return{
adult:false,message:message,canVote:false}
}}`

const prettyCode = `function example(name, age) {
  const message = "Hello " + name + ", you are " + age + " years old."
  
  if (age >= 18) {
    return {
      adult: true,
      message: message,
      canVote: true
    }
  } else {
    return {
      adult: false,
      message: message,
      canVote: false
    }
  }
}`

export default function CodeFormatter({ title, language = 'javascript' }: CodeFormatterProps) {
  const [currentCode, setCurrentCode] = useState(messyCode)
  const [isFormatted, setIsFormatted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const formatCode = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentCode(prettyCode)
      setIsFormatted(true)
      setIsAnimating(false)
    }, 1000)
  }

  const resetCode = () => {
    setCurrentCode(messyCode)
    setIsFormatted(false)
    setIsAnimating(false)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-yellow-100 text-sm">✨ Watch Prettier automatically format messy code</p>
      </div>
      
      <div className="p-4">
        {/* Controls */}
        <div className="flex space-x-3 mb-4">
          <button
            onClick={formatCode}
            disabled={isFormatted || isAnimating}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isFormatted || isAnimating
                ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                : 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg transform hover:scale-105'
            }`}
          >
            {isAnimating ? '✨ Formatting...' : isFormatted ? '✅ Formatted!' : '🎯 Format Code'}
          </button>
          
          <button
            onClick={resetCode}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            🔄 Reset
          </button>
        </div>

        {/* Code Display */}
        <div className="relative">
          <div className={`transition-all duration-1000 ${isAnimating ? 'blur-sm scale-95' : ''}`}>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 uppercase tracking-wide">{language}</span>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isFormatted ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span className="text-xs text-gray-400">
                    {isFormatted ? 'Formatted' : 'Needs formatting'}
                  </span>
                </div>
              </div>
              <pre className="text-sm text-green-400 leading-relaxed">
                <code>{currentCode}</code>
              </pre>
            </div>
          </div>

          {/* Animation Overlay */}
          {isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <div className="text-center text-white">
                <div className="text-4xl mb-2">✨</div>
                <div className="font-semibold">Prettier is working...</div>
                <div className="text-sm opacity-75">Adding proper spacing and formatting</div>
              </div>
            </div>
          )}
        </div>

        {/* Improvements List */}
        {isFormatted && (
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 animate-fadeIn">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ What Prettier Fixed:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <span>📏</span>
                <span>Added proper spacing around operators and commas</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <span>📐</span>
                <span>Fixed indentation for nested code blocks</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <span>📝</span>
                <span>Organized object properties on separate lines</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <span>🎯</span>
                <span>Made code consistent and readable</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          <span>Prettier automatically formats your code on save - no manual work needed!</span>
        </div>
      </div>
    </div>
  )
}