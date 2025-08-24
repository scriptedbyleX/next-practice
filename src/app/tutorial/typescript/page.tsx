'use client'

import { useState } from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import TypeChecker from '@/components/TypeChecker'
import ToggleDemo from '@/components/ToggleDemo'
import TryItBox from '@/components/TryItBox'
import SliderComparison from '@/components/SliderComparison'

export default function TypeScriptTutorial() {
  const [interfaceCode, setInterfaceCode] = useState(`interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alex",
  age: 25
}`)

  const jsVsTsExamples = [
    {
      id: 'javascript',
      label: 'JavaScript (No Types)',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">❌ JavaScript Problems</h4>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-400">
            <div className="font-mono text-sm mb-4 bg-gray-900 text-red-400 p-3 rounded">
{`function greet(person) {
  return "Hello " + person.name
}

greet("Alex")  // 💥 Runtime Error!
// person.name is undefined`}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-red-700 dark:text-red-300">
                <span>🚫</span>
                <span>No error warnings during development</span>
              </div>
              <div className="flex items-center space-x-2 text-red-700 dark:text-red-300">
                <span>💥</span>
                <span>Crashes at runtime</span>
              </div>
              <div className="flex items-center space-x-2 text-red-700 dark:text-red-300">
                <span>🤔</span>
                <span>Hard to debug in large projects</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'typescript',
      label: 'TypeScript (With Types)',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">✅ TypeScript Safety</h4>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-400">
            <div className="font-mono text-sm mb-4 bg-gray-900 text-green-400 p-3 rounded">
{`function greet(person: { name: string }) {
  return "Hello " + person.name
}

greet("Alex")  // ⚠️ TypeScript Error!
// Argument is not assignable to parameter`}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <span>⚠️</span>
                <span>Error caught during development</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <span>🛡️</span>
                <span>Prevents runtime crashes</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                <span>🧠</span>
                <span>Better IntelliSense and autocomplete</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <TutorialLayout title="TypeScript Guide" currentSection="typescript">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Hero */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
          <div className="text-4xl mb-4">🔷</div>
          <h1 className="text-3xl font-bold mb-4">TypeScript = JavaScript with Labels</h1>
          <p className="text-xl opacity-90">Add type safety to catch errors before they happen</p>
        </div>

        {/* JavaScript vs TypeScript */}
        <ToggleDemo
          title="JavaScript vs TypeScript"
          description="See why types prevent bugs before they happen!"
          options={jsVsTsExamples}
          defaultOption="javascript"
        />

        {/* Type Annotation Playground */}
        <TypeChecker
          title="Fix the TypeScript Errors!"
          initialCode={`let name = "Alex"
let age = 25
let isStudent = true

function introduce(person) {
  return "Hi, I'm " + person + " and I'm " + age
}`}
          correctCode={`let name: string = "Alex"
let age: number = 25
let isStudent: boolean = true

function introduce(person: string): string {
  return "Hi, I'm " + person + " and I'm " + age
}`}
          hint="Add type annotations with colons (:). For example: let name: string = ..."
        />

        {/* Interface Builder */}
        <TryItBox
          title="Interface Builder"
          instruction="Try changing the object properties and see TypeScript check them!"
          icon="📋"
          successMessage="Great! You're building type-safe objects!"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Interface Definition:</h4>
              <textarea
                value={interfaceCode}
                onChange={(e) => setInterfaceCode(e.target.value)}
                className="w-full h-32 p-3 bg-gray-900 text-blue-400 font-mono text-sm rounded border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 resize-none"
                spellCheck={false}
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">What this means:</h4>
              <div className="h-32 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border overflow-auto">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span><strong>Person</strong> is a contract/template</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span><strong>name</strong> must be text (string)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    <span><strong>age</strong> must be a number</span>
                  </div>
                  <div className="mt-3 p-2 bg-white dark:bg-gray-700 rounded">
                    <div className="text-xs text-gray-600 dark:text-gray-400">Any object using Person must have exactly these properties with these types!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TryItBox>

        {/* Before/After Comparison */}
        <SliderComparison
          title="Development Experience: JS vs TS"
          beforeLabel="JavaScript Development"
          afterLabel="TypeScript Development"
          beforeContent={
            <div>
              <h4 className="font-bold mb-2">😰 JavaScript Problems</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded">
                  <span className="text-red-700 dark:text-red-300">❌ Find bugs at runtime</span>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded">
                  <span className="text-yellow-700 dark:text-yellow-300">🤷 Guess parameter types</span>
                </div>
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded">
                  <span className="text-red-700 dark:text-red-300">🐛 Silent failures</span>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded">
                  <span className="text-yellow-700 dark:text-yellow-300">📚 Need extensive docs</span>
                </div>
              </div>
            </div>
          }
          afterContent={
            <div>
              <h4 className="font-bold mb-2">😎 TypeScript Benefits</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
                  <span className="text-green-700 dark:text-green-300">✅ Catch bugs while coding</span>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded">
                  <span className="text-blue-700 dark:text-blue-300">🧠 Smart autocomplete</span>
                </div>
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
                  <span className="text-green-700 dark:text-green-300">🛡️ Prevent crashes</span>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded">
                  <span className="text-purple-700 dark:text-purple-300">📖 Self-documenting code</span>
                </div>
              </div>
            </div>
          }
        />

        {/* Common Types Example */}
        <TryItBox
          title="Common TypeScript Types"
          instruction="Click each type to see examples!"
          icon="🏷️"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: 'string', example: '"Hello"', color: 'text-green-600' },
              { type: 'number', example: '42', color: 'text-blue-600' },
              { type: 'boolean', example: 'true', color: 'text-purple-600' },
              { type: 'array', example: '[1, 2, 3]', color: 'text-red-600' },
            ].map((item) => (
              <div key={item.type} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                <div className={`font-mono font-bold ${item.color}`}>{item.type}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.example}</div>
              </div>
            ))}
          </div>
        </TryItBox>

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">🚀 TypeScript Cheat Sheet</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🏷️ Basic Types</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`let name: string = "Alex"
let age: number = 25
let active: boolean = true`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔧 Functions</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`function greet(name: string): string {
  return "Hello " + name
}`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📋 Interfaces</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`interface User {
  name: string
  age: number
}`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📊 Arrays</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`let numbers: number[] = [1, 2, 3]
let names: string[] = ["Alex", "Sam"]`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">❓ Optional</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`interface Person {
  name: string
  age?: number  // Optional
}`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔄 Union Types</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`let id: string | number
id = "abc123"  // OK
id = 456       // OK`}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/tutorial/nextjs"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous: Next.js</span>
          </a>
          
          <a
            href="/tutorial/dev-tools"
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>Next: Dev Tools</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </TutorialLayout>
  )
}