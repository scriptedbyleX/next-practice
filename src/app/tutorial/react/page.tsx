'use client'

import { useState } from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import PlaygroundEditor from '@/components/PlaygroundEditor'
import ToggleDemo from '@/components/ToggleDemo'
import TryItBox from '@/components/TryItBox'
import SliderComparison from '@/components/SliderComparison'

export default function ReactTutorial() {
  const [componentProps, setComponentProps] = useState({
    name: 'Alex',
    age: 25,
    color: 'blue'
  })

  const [counter, setCounter] = useState(0)

  // Interactive Component Preview
  const ComponentPreview = ({ name, age, color }: { name: string, age: number, color: string }) => (
    <div className={`p-4 bg-${color}-100 dark:bg-${color}-900/20 rounded-lg border-2 border-${color}-300 dark:border-${color}-700`}>
      <h4 className="font-bold text-lg">Hello, I'm {name}!</h4>
      <p className="text-sm">I'm {age} years old.</p>
      <div className={`w-4 h-4 bg-${color}-500 rounded-full mt-2`}></div>
    </div>
  )

  const jsxExamples = [
    {
      id: 'html',
      label: 'Regular HTML',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">HTML (Static)</h4>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm">
            {`<div class="card">
  <h2>John Doe</h2>
  <p>Age: 30</p>
  <button onclick="sayHello()">
    Click me
  </button>
</div>`}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            ❌ Can't easily change data or reuse
          </p>
        </div>
      )
    },
    {
      id: 'jsx',
      label: 'JSX (React)',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">JSX (Dynamic)</h4>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm">
            {`<div className="card">
  <h2>{user.name}</h2>
  <p>Age: {user.age}</p>
  <button onClick={handleClick}>
    Click me
  </button>
</div>`}
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">
            ✅ Dynamic data with {`{}`} and reusable!
          </p>
        </div>
      )
    }
  ]

  const stateExamples = [
    {
      id: 'without',
      label: 'Without State',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">Static Counter</h4>
          <div className="text-center">
            <div className="text-4xl font-bold mb-4 text-gray-500">0</div>
            <button className="bg-gray-300 px-4 py-2 rounded cursor-not-allowed">
              Can't Click (No State)
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
            😞 Number never changes
          </p>
        </div>
      )
    },
    {
      id: 'with',
      label: 'With State',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">Interactive Counter</h4>
          <div className="text-center">
            <div className="text-4xl font-bold mb-4 text-blue-600">{counter}</div>
            <div className="space-x-2">
              <button 
                onClick={() => setCounter(counter - 1)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                -1
              </button>
              <button 
                onClick={() => setCounter(counter + 1)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                +1
              </button>
            </div>
          </div>
          <p className="text-sm text-green-600 dark:text-green-400 mt-3">
            😎 Click buttons to change the number!
          </p>
        </div>
      )
    }
  ]

  return (
    <TutorialLayout title="React Fundamentals" currentSection="react">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Hero */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
          <div className="text-4xl mb-4">⚛️</div>
          <h1 className="text-3xl font-bold mb-4">React = LEGO Blocks for Websites</h1>
          <p className="text-xl opacity-90">Build complex UIs from simple, reusable pieces</p>
        </div>

        {/* JSX Comparison */}
        <SliderComparison
          title="JSX vs HTML"
          beforeLabel="Regular HTML"
          afterLabel="JSX (React)"
          beforeContent={
            <div>
              <h4 className="font-bold mb-2">Static HTML</h4>
              <div className="bg-red-100 p-3 rounded border-l-4 border-red-400">
                <div className="font-mono text-sm mb-2">&lt;h1&gt;Hello World&lt;/h1&gt;</div>
                <div className="font-mono text-sm mb-2">&lt;p&gt;User: John&lt;/p&gt;</div>
                <p className="text-red-700 text-xs">❌ Can't change data easily</p>
              </div>
            </div>
          }
          afterContent={
            <div>
              <h4 className="font-bold mb-2">Dynamic JSX</h4>
              <div className="bg-green-100 p-3 rounded border-l-4 border-green-400">
                <div className="font-mono text-sm mb-2">&lt;h1&gt;{`{greeting}`}&lt;/h1&gt;</div>
                <div className="font-mono text-sm mb-2">&lt;p&gt;User: {`{user.name}`}&lt;/p&gt;</div>
                <p className="text-green-700 text-xs">✅ Data changes automatically!</p>
              </div>
            </div>
          }
        />

        {/* Components Playground */}
        <TryItBox
          title="Component Props Playground"
          instruction="Change the values below and watch the component update!"
          icon="🎮"
          successMessage="Nice! You're changing props in real-time!"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name:</label>
                <input
                  type="text"
                  value={componentProps.name}
                  onChange={(e) => setComponentProps({...componentProps, name: e.target.value})}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Age:</label>
                <input
                  type="number"
                  value={componentProps.age}
                  onChange={(e) => setComponentProps({...componentProps, age: Number(e.target.value)})}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Color:</label>
                <select
                  value={componentProps.color}
                  onChange={(e) => setComponentProps({...componentProps, color: e.target.value})}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                >
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="purple">Purple</option>
                  <option value="red">Red</option>
                </select>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Live Component:</h4>
              <ComponentPreview {...componentProps} />
            </div>
          </div>
        </TryItBox>

        {/* State Demo */}
        <ToggleDemo
          title="State vs No State"
          description="State = Component Memory. See the difference!"
          options={stateExamples}
          defaultOption="without"
        />

        {/* Interactive Code Editor */}
        <PlaygroundEditor
          title="JSX Playground"
          initialCode={`function Greeting({ name, emoji }) {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2>Hello {name}! {emoji}</h2>
      <p>Welcome to React!</p>
    </div>
  )
}

// Try changing the name or emoji below:
<Greeting name="Alex" emoji="👋" />`}
          preview={
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <h2 className="font-bold">Hello Alex! 👋</h2>
              <p>Welcome to React!</p>
            </div>
          }
        />

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">🚀 React Cheat Sheet</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">📦 Components</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>
}`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🧠 State</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`const [count, setCount] = useState(0)
// count = current value
// setCount = function to change it`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🏷️ Props</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`<Welcome name="Alex" age={25} />
// Pass data to components`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📝 JSX</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`<div className="style">
  <h1>Hello {name}!</h1>
</div>`}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/tutorial/nodejs"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous: Node.js</span>
          </a>
          
          <a
            href="/tutorial/nextjs"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>Next: Next.js Features</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </TutorialLayout>
  )
}