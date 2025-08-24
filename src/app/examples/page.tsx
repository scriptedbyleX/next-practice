'use client'

import { useState } from 'react'

export default function Examples() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [todos, setTodos] = useState<string[]>(['Learn Next.js', 'Build awesome apps'])

  const addTodo = (todo: string) => {
    if (todo.trim()) {
      setTodos([...todos, todo])
    }
  }

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          React Examples
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Counter Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Counter (useState Hook)
            </h2>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {count}
              </div>
              <div className="space-x-4">
                <button
                  onClick={() => setCount(count - 1)}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  -1
                </button>
                <button
                  onClick={() => setCount(0)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setCount(count + 1)}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  +1
                </button>
              </div>
            </div>
          </div>

          {/* Form Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Form Input (Controlled Components)
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {name && (
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-gray-800 dark:text-white">
                    Hello, <span className="font-semibold text-blue-600 dark:text-blue-400">{name}</span>!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Todo List Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Todo List (Array State Management)
            </h2>
            
            <div className="mb-6">
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="newTodo"
                  placeholder="Add a new todo..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const input = e.target as HTMLInputElement
                      addTodo(input.value)
                      input.value = ''
                    }
                  }}
                />
                <button
                  onClick={() => {
                    const input = document.getElementById('newTodo') as HTMLInputElement
                    addTodo(input.value)
                    input.value = ''
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {todos.map((todo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <span className="text-gray-800 dark:text-white">{todo}</span>
                  <button
                    onClick={() => removeTodo(index)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            
            {todos.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                No todos yet. Add one above!
              </p>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}