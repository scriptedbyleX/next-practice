'use client'

import { useState } from 'react'

interface ResponsiveTesterProps {
  title: string
  children: React.ReactNode
}

const devices = [
  { name: 'Mobile', width: 375, icon: '📱' },
  { name: 'Tablet', width: 768, icon: '📟' },
  { name: 'Desktop', width: 1200, icon: '🖥️' },
  { name: 'Large', width: 1600, icon: '📺' },
]

export default function ResponsiveTester({ title, children }: ResponsiveTesterProps) {
  const [currentWidth, setCurrentWidth] = useState(1200)
  const [selectedDevice, setSelectedDevice] = useState('Desktop')

  const handleDeviceChange = (device: typeof devices[0]) => {
    setCurrentWidth(device.width)
    setSelectedDevice(device.name)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-teal-100 text-sm">📐 Test your design across different screen sizes</p>
      </div>
      
      <div className="p-4">
        {/* Device Controls */}
        <div className="flex flex-wrap gap-2 mb-4">
          {devices.map((device) => (
            <button
              key={device.name}
              onClick={() => handleDeviceChange(device)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedDevice === device.name
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <span>{device.icon}</span>
              <span>{device.name}</span>
              <span className="text-xs opacity-75">({device.width}px)</span>
            </button>
          ))}
        </div>

        {/* Width Slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Custom Width: {currentWidth}px
            </label>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {currentWidth < 640 ? 'Mobile' : currentWidth < 1024 ? 'Tablet' : 'Desktop'}
            </span>
          </div>
          <input
            type="range"
            min="320"
            max="1600"
            value={currentWidth}
            onChange={(e) => {
              const width = Number(e.target.value)
              setCurrentWidth(width)
              const device = devices.find(d => Math.abs(d.width - width) < 50)
              if (device) {
                setSelectedDevice(device.name)
              } else {
                setSelectedDevice('Custom')
              }
            }}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>

        {/* Responsive Preview */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-hidden">
          <div className="mb-2 flex items-center justify-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Preview ({currentWidth}px)
            </span>
          </div>
          <div className="flex justify-center">
            <div 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-inner overflow-hidden transition-all duration-300 border-2 border-gray-300 dark:border-gray-600"
              style={{ 
                width: `${Math.min(currentWidth, 800)}px`,
                maxWidth: '100%',
                minHeight: '300px'
              }}
            >
              <div className="p-4 h-full">
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* Breakpoint Info */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">📐 Tailwind Breakpoints:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div className={`p-2 rounded ${currentWidth >= 0 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <div className="font-medium">sm: 640px+</div>
              <div className="text-gray-600 dark:text-gray-400">Small devices</div>
            </div>
            <div className={`p-2 rounded ${currentWidth >= 768 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <div className="font-medium">md: 768px+</div>
              <div className="text-gray-600 dark:text-gray-400">Medium devices</div>
            </div>
            <div className={`p-2 rounded ${currentWidth >= 1024 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <div className="font-medium">lg: 1024px+</div>
              <div className="text-gray-600 dark:text-gray-400">Large devices</div>
            </div>
            <div className={`p-2 rounded ${currentWidth >= 1280 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
              <div className="font-medium">xl: 1280px+</div>
              <div className="text-gray-600 dark:text-gray-400">Extra large</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
          <span>Drag the slider or click device buttons to test responsiveness</span>
        </div>
      </div>
    </div>
  )
}