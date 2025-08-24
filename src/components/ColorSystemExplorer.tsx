'use client'

import { useState } from 'react'

interface ColorSystemExplorerProps {
  title: string
}

const colorFamilies = {
  gray: { name: 'Gray', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  red: { name: 'Red', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  blue: { name: 'Blue', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  green: { name: 'Green', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  yellow: { name: 'Yellow', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  purple: { name: 'Purple', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  pink: { name: 'Pink', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  indigo: { name: 'Indigo', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
}

export default function ColorSystemExplorer({ title }: ColorSystemExplorerProps) {
  const [selectedColor, setSelectedColor] = useState<{ family: string, shade: number } | null>(null)
  const [copiedClass, setCopiedClass] = useState<string | null>(null)

  const copyColorClass = (family: string, shade: number, type: 'bg' | 'text' | 'border') => {
    const className = `${type}-${family}-${shade}`
    navigator.clipboard.writeText(className)
    setCopiedClass(className)
    setTimeout(() => setCopiedClass(null), 2000)
  }

  const getContrastTextColor = (family: string, shade: number) => {
    return shade >= 500 ? 'text-white' : 'text-gray-900'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-pink-100 text-sm">🌈 Explore Tailwind's color system and get utility classes</p>
      </div>
      
      <div className="p-4">
        {/* Color Palette */}
        <div className="space-y-6">
          {Object.entries(colorFamilies).map(([familyKey, family]) => (
            <div key={familyKey}>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 capitalize">
                {family.name} Colors
              </h4>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {family.shades.map((shade) => (
                  <div key={shade} className="relative group">
                    <button
                      onClick={() => setSelectedColor({ family: familyKey, shade })}
                      className={`w-full aspect-square rounded-lg border-2 transition-all duration-200 bg-${familyKey}-${shade} ${
                        selectedColor?.family === familyKey && selectedColor?.shade === shade
                          ? 'border-black dark:border-white scale-110 shadow-lg'
                          : 'border-gray-200 dark:border-gray-600 hover:scale-105 hover:shadow-md'
                      }`}
                      title={`${familyKey}-${shade}`}
                    />
                    {/* Shade label */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className={`text-xs font-bold ${getContrastTextColor(familyKey, shade)}`}>
                        {shade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Color Details */}
        {selectedColor && (
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Color Preview */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  🎨 {colorFamilies[selectedColor.family as keyof typeof colorFamilies].name} {selectedColor.shade}
                </h4>
                
                <div className="space-y-3">
                  {/* Background Preview */}
                  <div className={`bg-${selectedColor.family}-${selectedColor.shade} p-6 rounded-lg flex items-center justify-center`}>
                    <span className={`font-semibold ${getContrastTextColor(selectedColor.family, selectedColor.shade)}`}>
                      Background Color
                    </span>
                  </div>
                  
                  {/* Text Preview */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <span className={`font-semibold text-${selectedColor.family}-${selectedColor.shade}`}>
                      Text Color
                    </span>
                  </div>
                  
                  {/* Border Preview */}
                  <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg border-4 border-${selectedColor.family}-${selectedColor.shade} flex items-center justify-center`}>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Border Color
                    </span>
                  </div>
                </div>
              </div>

              {/* Utility Classes */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  📋 Utility Classes
                </h4>
                
                <div className="space-y-3">
                  {[
                    { type: 'bg' as const, label: 'Background', icon: '🎨' },
                    { type: 'text' as const, label: 'Text', icon: '📝' },
                    { type: 'border' as const, label: 'Border', icon: '🔲' },
                  ].map(({ type, label, icon }) => {
                    const className = `${type}-${selectedColor.family}-${selectedColor.shade}`
                    return (
                      <div key={type} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                        <div className="flex items-center space-x-3">
                          <span>{icon}</span>
                          <div>
                            <div className="font-medium text-gray-800 dark:text-gray-200">{label}</div>
                            <code className="text-sm text-gray-600 dark:text-gray-400">{className}</code>
                          </div>
                        </div>
                        <button
                          onClick={() => copyColorClass(selectedColor.family, selectedColor.shade, type)}
                          className={`px-3 py-1 text-sm rounded transition-colors ${
                            copiedClass === className
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }`}
                        >
                          {copiedClass === className ? '✅ Copied!' : '📋 Copy'}
                        </button>
                      </div>
                    )
                  })}
                </div>

                {/* Usage Examples */}
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">💡 Usage Examples:</h5>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="bg-gray-900 text-green-400 p-2 rounded">
                      &lt;div className="bg-{selectedColor.family}-{selectedColor.shade}"&gt;
                    </div>
                    <div className="bg-gray-900 text-green-400 p-2 rounded">
                      &lt;h1 className="text-{selectedColor.family}-{selectedColor.shade}"&gt;
                    </div>
                    <div className="bg-gray-900 text-green-400 p-2 rounded">
                      &lt;button className="border-{selectedColor.family}-{selectedColor.shade}"&gt;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Color Theory Tips */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4">
            🎨 Color Usage Tips:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700 dark:text-purple-300">
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span>💡</span>
                <span><strong>50-200:</strong> Very light - good for backgrounds and subtle accents</span>
              </div>
              <div className="flex items-start space-x-2">
                <span>🎯</span>
                <span><strong>300-400:</strong> Light - perfect for borders and secondary text</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span>🔥</span>
                <span><strong>500-600:</strong> Medium - ideal for primary colors and buttons</span>
              </div>
              <div className="flex items-start space-x-2">
                <span>⚫</span>
                <span><strong>700-900:</strong> Dark - great for text and strong accents</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        {!selectedColor && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <span>👆</span>
              <span>Click any color above to see utility classes and examples</span>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
          <span>Click colors to explore • Copy utility classes • See live examples</span>
        </div>
      </div>
    </div>
  )
}