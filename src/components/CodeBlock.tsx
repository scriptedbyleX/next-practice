'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  showCopy?: boolean
}

export default function CodeBlock({ code, language, title, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const getLanguageColor = (lang: string) => {
    const colors: { [key: string]: string } = {
      javascript: 'text-yellow-600',
      typescript: 'text-blue-600',
      jsx: 'text-cyan-600',
      tsx: 'text-cyan-600',
      css: 'text-pink-600',
      html: 'text-orange-600',
      bash: 'text-green-600',
      json: 'text-purple-600',
    }
    return colors[lang.toLowerCase()] || 'text-gray-600'
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      {(title || showCopy) && (
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            {title && (
              <h3 className="text-sm font-medium text-gray-200">{title}</h3>
            )}
            <span className={`text-xs px-2 py-1 rounded ${getLanguageColor(language)} bg-gray-700`}>
              {language}
            </span>
          </div>
          {showCopy && (
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-2 px-3 py-1 text-xs text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded transition-colors"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      )}
      
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-gray-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}