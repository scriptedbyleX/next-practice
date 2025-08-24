'use client'

import { useState } from 'react'

interface SliderComparisonProps {
  title: string
  beforeLabel: string
  afterLabel: string
  beforeContent: React.ReactNode
  afterContent: React.ReactNode
}

export default function SliderComparison({ 
  title, 
  beforeLabel, 
  afterLabel, 
  beforeContent, 
  afterContent 
}: SliderComparisonProps) {
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-pink-100 text-sm">🔄 Drag the slider to compare</p>
      </div>
      
      <div className="p-4">
        {/* Slider */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {beforeLabel}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {afterLabel}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
            style={{
              background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${sliderValue}%, #e5e7eb ${sliderValue}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-center mt-1">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {sliderValue}% → {afterLabel}
            </span>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="relative bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden" style={{ height: '300px' }}>
          {/* Before Content */}
          <div 
            className="absolute top-0 left-0 w-full h-full transition-all duration-300"
            style={{ 
              clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
            }}
          >
            <div className="w-full h-full p-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700">
              {beforeContent}
            </div>
          </div>

          {/* After Content */}
          <div 
            className="absolute top-0 left-0 w-full h-full transition-all duration-300"
            style={{ 
              clipPath: `inset(0 0 0 ${sliderValue}%)`,
            }}
          >
            <div className="w-full h-full p-4 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30">
              {afterContent}
            </div>
          </div>

          {/* Divider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-pink-500 shadow-lg transition-all duration-300"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-pink-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
          <span>Drag the slider above to see the difference</span>
        </div>
      </div>
    </div>
  )
}