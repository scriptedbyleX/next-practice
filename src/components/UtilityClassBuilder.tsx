'use client'

import { useState } from 'react'

interface UtilityClassBuilderProps {
  title: string
}

const utilityCategories = {
  background: {
    name: 'Background',
    icon: '🎨',
    options: [
      { class: 'bg-blue-500', label: 'Blue', preview: 'bg-blue-500' },
      { class: 'bg-green-500', label: 'Green', preview: 'bg-green-500' },
      { class: 'bg-red-500', label: 'Red', preview: 'bg-red-500' },
      { class: 'bg-purple-500', label: 'Purple', preview: 'bg-purple-500' },
      { class: 'bg-gray-100', label: 'Light Gray', preview: 'bg-gray-100' },
    ]
  },
  text: {
    name: 'Text',
    icon: '📝',
    options: [
      { class: 'text-white', label: 'White Text', preview: 'text-white' },
      { class: 'text-black', label: 'Black Text', preview: 'text-black' },
      { class: 'text-blue-600', label: 'Blue Text', preview: 'text-blue-600' },
      { class: 'text-lg', label: 'Large Text', preview: 'text-lg' },
      { class: 'font-bold', label: 'Bold', preview: 'font-bold' },
    ]
  },
  spacing: {
    name: 'Spacing',
    icon: '📐',
    options: [
      { class: 'p-4', label: 'Padding', preview: 'p-4' },
      { class: 'm-4', label: 'Margin', preview: 'm-4' },
      { class: 'px-6', label: 'Horizontal Padding', preview: 'px-6' },
      { class: 'py-3', label: 'Vertical Padding', preview: 'py-3' },
      { class: 'space-x-4', label: 'Horizontal Space', preview: 'space-x-4' },
    ]
  },
  layout: {
    name: 'Layout',
    icon: '📦',
    options: [
      { class: 'rounded-lg', label: 'Rounded', preview: 'rounded-lg' },
      { class: 'shadow-lg', label: 'Shadow', preview: 'shadow-lg' },
      { class: 'border-2', label: 'Border', preview: 'border-2' },
      { class: 'flex', label: 'Flex', preview: 'flex' },
      { class: 'items-center', label: 'Center Items', preview: 'items-center' },
    ]
  }
}

export default function UtilityClassBuilder({ title }: UtilityClassBuilderProps) {
  const [selectedClasses, setSelectedClasses] = useState<string[]>(['bg-blue-500', 'text-white', 'p-4', 'rounded-lg'])
  const [activeCategory, setActiveCategory] = useState<keyof typeof utilityCategories>('background')

  const toggleClass = (className: string) => {
    if (selectedClasses.includes(className)) {
      setSelectedClasses(selectedClasses.filter(c => c !== className))
    } else {
      // Remove conflicting classes (same property)
      const filteredClasses = selectedClasses.filter(c => {
        if (className.startsWith('bg-') && c.startsWith('bg-')) return false
        if (className.startsWith('text-') && c.startsWith('text-') && className !== 'text-lg' && c !== 'text-lg') return false
        if ((className.startsWith('p-') || className.startsWith('px-') || className.startsWith('py-')) && 
            (c.startsWith('p-') || c.startsWith('px-') || c.startsWith('py-'))) return false
        return true
      })
      setSelectedClasses([...filteredClasses, className])
    }
  }

  const copyClasses = () => {
    navigator.clipboard.writeText(selectedClasses.join(' '))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-cyan-100 text-sm">🎨 Click utilities to build your component styling</p>
      </div>
      
      <div className="p-4">
        {/* Category Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {Object.entries(utilityCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as keyof typeof utilityCategories)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                activeCategory === key
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Utility Options */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">{utilityCategories[activeCategory].name} Options:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {utilityCategories[activeCategory].options.map((option) => (
              <button
                key={option.class}
                onClick={() => toggleClass(option.class)}
                className={`p-3 rounded-lg border-2 transition-all text-left ${
                  selectedClasses.includes(option.class)
                    ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <div className="font-mono text-sm text-cyan-600 dark:text-cyan-400 mb-1">
                  {option.class}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {option.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Preview */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Preview */}
          <div>
            <h4 className="font-semibold mb-3">🎯 Live Preview:</h4>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg min-h-32 flex items-center justify-center">
              <div className={selectedClasses.join(' ')}>
                Sample Component
              </div>
            </div>
          </div>

          {/* Generated Code */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">📋 Generated Code:</h4>
              <button
                onClick={copyClasses}
                className="text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-1 rounded transition-colors"
              >
                📋 Copy
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="text-cyan-400 font-mono text-sm">
                &lt;div className="
                <br />
                <span className="ml-4 text-green-400">
                  {selectedClasses.join(' ')}
                </span>
                <br />
                "&gt;
                <br />
                <span className="ml-4 text-white">Sample Component</span>
                <br />
                &lt;/div&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Selected Classes */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
            🏷️ Selected Classes ({selectedClasses.length}):
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedClasses.map((className) => (
              <span
                key={className}
                onClick={() => toggleClass(className)}
                className="inline-flex items-center space-x-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors"
              >
                <span>{className}</span>
                <span className="text-blue-600 dark:text-blue-300">×</span>
              </span>
            ))}
          </div>
          {selectedClasses.length === 0 && (
            <p className="text-blue-600 dark:text-blue-400 text-sm">
              No classes selected. Click utilities above to add them!
            </p>
          )}
        </div>

        {/* What Each Class Does */}
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            💡 What These Classes Do:
          </h4>
          <div className="space-y-2 text-sm">
            {selectedClasses.map((className) => (
              <div key={className} className="flex items-center space-x-2">
                <span className="font-mono bg-yellow-200 dark:bg-yellow-800 px-2 py-1 rounded text-yellow-800 dark:text-yellow-200">
                  {className}
                </span>
                <span className="text-yellow-700 dark:text-yellow-300">
                  {className.startsWith('bg-') && '→ Sets background color'}
                  {className.startsWith('text-') && !className.includes('-lg') && '→ Sets text color'}
                  {className === 'text-lg' && '→ Makes text larger'}
                  {className === 'font-bold' && '→ Makes text bold'}
                  {className.startsWith('p-') && '→ Adds padding (space inside)'}
                  {className.startsWith('m-') && '→ Adds margin (space outside)'}
                  {className.startsWith('px-') && '→ Adds horizontal padding'}
                  {className.startsWith('py-') && '→ Adds vertical padding'}
                  {className.startsWith('rounded') && '→ Rounds the corners'}
                  {className.startsWith('shadow') && '→ Adds drop shadow'}
                  {className.startsWith('border') && '→ Adds border'}
                  {className === 'flex' && '→ Makes container flexible'}
                  {className === 'items-center' && '→ Centers items vertically'}
                  {className.startsWith('space-x') && '→ Adds space between child elements'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
          <span>Click categories • Select utilities • See live preview • Copy code</span>
        </div>
      </div>
    </div>
  )
}