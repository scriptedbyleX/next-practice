'use client'

import { useState } from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import ToggleDemo from '@/components/ToggleDemo'
import TryItBox from '@/components/TryItBox'
import SliderComparison from '@/components/SliderComparison'

export default function NextJSTutorial() {
  const [routingExample, setRoutingExample] = useState('')

  const routingExamples = [
    {
      id: 'traditional',
      label: 'Traditional Way',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">❌ Complex Setup Required</h4>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-400">
            <div className="font-mono text-sm space-y-2">
              <div>📁 src/router.js</div>
              <div>📁 src/routes/home.js</div>
              <div>📁 src/routes/about.js</div>
              <div>📁 src/routes/contact.js</div>
            </div>
            <div className="mt-4 bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs overflow-x-auto">
{`const router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})`}
            </div>
            <p className="text-red-700 dark:text-red-300 text-sm mt-2">
              😓 Need to manually configure every route
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'nextjs',
      label: 'Next.js Way',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">✅ File-based Routing</h4>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-400">
            <div className="font-mono text-sm space-y-2">
              <div>📁 app/page.tsx → "/"</div>
              <div>📁 app/about/page.tsx → "/about"</div>
              <div>📁 app/contact/page.tsx → "/contact"</div>
            </div>
            <div className="mt-4 bg-white dark:bg-gray-800 p-3 rounded font-mono text-xs">
{`// Just create files!
// No router config needed 🎉`}
            </div>
            <p className="text-green-700 dark:text-green-300 text-sm mt-2">
              😎 Create folder = instant route!
            </p>
          </div>
        </div>
      )
    }
  ]

  const renderingExamples = [
    {
      id: 'csr',
      label: 'Client Side (CSR)',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">🏪 Like Fast Food</h4>
          <div className="space-y-3">
            <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <span>1️⃣</span>
                <span className="font-medium">Browser gets empty HTML</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Like getting an empty plate</div>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <span>2️⃣</span>
                <span className="font-medium">Downloads JavaScript</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Gets ingredients to make food</div>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <span>3️⃣</span>
                <span className="font-medium">Renders in browser</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cooks food at your table</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded">
            <p className="text-sm"><strong>Good for:</strong> Interactive apps, once loaded</p>
            <p className="text-sm"><strong>Slow:</strong> Initial page load</p>
          </div>
        </div>
      )
    },
    {
      id: 'ssr',
      label: 'Server Side (SSR)',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">🍽️ Like Fine Dining</h4>
          <div className="space-y-3">
            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <span>1️⃣</span>
                <span className="font-medium">Server cooks everything</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Kitchen prepares your meal</div>
            </div>
            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <span>2️⃣</span>
                <span className="font-medium">Sends ready HTML</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Brings finished dish to you</div>
            </div>
            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded">
              <div className="flex items-center space-x-2 mb-2">
                <span>3️⃣</span>
                <span className="font-medium">Instant display</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">You eat immediately!</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded">
            <p className="text-sm"><strong>Good for:</strong> Fast initial loads, SEO</p>
            <p className="text-sm"><strong>Better:</strong> First page experience</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <TutorialLayout title="Next.js Features" currentSection="nextjs">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Hero */}
        <div className="text-center bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-8 text-white">
          <div className="text-4xl mb-4">🔺</div>
          <h1 className="text-3xl font-bold mb-4">Next.js = React with Superpowers</h1>
          <p className="text-xl opacity-90">File-based routing, server rendering, and performance optimizations built-in</p>
        </div>

        {/* File-based Routing */}
        <ToggleDemo
          title="File-based Routing Magic"
          description="Create folders → Get routes automatically!"
          options={routingExamples}
          defaultOption="traditional"
        />

        {/* Route Builder Interactive */}
        <TryItBox
          title="Route Builder Playground"
          instruction="Type a path and see how Next.js would organize it!"
          icon="📁"
          successMessage="You're building routes like a pro!"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                What page do you want to create?
              </label>
              <div className="space-y-3">
                <button
                  onClick={() => setRoutingExample('/blog')}
                  className="w-full text-left p-3 bg-blue-100 dark:bg-blue-900/30 rounded border hover:bg-blue-200 dark:hover:bg-blue-900/50"
                >
                  Blog Page → <code className="text-sm">/blog</code>
                </button>
                <button
                  onClick={() => setRoutingExample('/products/shoes')}
                  className="w-full text-left p-3 bg-green-100 dark:bg-green-900/30 rounded border hover:bg-green-200 dark:hover:bg-green-900/50"
                >
                  Products → <code className="text-sm">/products/shoes</code>
                </button>
                <button
                  onClick={() => setRoutingExample('/user/profile/settings')}
                  className="w-full text-left p-3 bg-purple-100 dark:bg-purple-900/30 rounded border hover:bg-purple-200 dark:hover:bg-purple-900/50"
                >
                  User Settings → <code className="text-sm">/user/profile/settings</code>
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Next.js File Structure:</h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded font-mono text-sm min-h-32">
                {routingExample === '/blog' && (
                  <div>
                    <div>📁 app/</div>
                    <div>&nbsp;&nbsp;📁 blog/</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;📄 page.tsx</div>
                    <div className="mt-2 text-green-600">✅ Route: /blog</div>
                  </div>
                )}
                {routingExample === '/products/shoes' && (
                  <div>
                    <div>📁 app/</div>
                    <div>&nbsp;&nbsp;📁 products/</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;📁 shoes/</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📄 page.tsx</div>
                    <div className="mt-2 text-green-600">✅ Route: /products/shoes</div>
                  </div>
                )}
                {routingExample === '/user/profile/settings' && (
                  <div>
                    <div>📁 app/</div>
                    <div>&nbsp;&nbsp;📁 user/</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;📁 profile/</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📁 settings/</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📄 page.tsx</div>
                    <div className="mt-2 text-green-600">✅ Route: /user/profile/settings</div>
                  </div>
                )}
                {!routingExample && (
                  <div className="text-gray-500 dark:text-gray-400">
                    Click a button above to see the file structure!
                  </div>
                )}
              </div>
            </div>
          </div>
        </TryItBox>

        {/* Server vs Client Rendering */}
        <ToggleDemo
          title="Server vs Client Rendering"
          description="When should you cook in the kitchen vs at the table?"
          options={renderingExamples}
          defaultOption="csr"
        />

        {/* Performance Comparison */}
        <SliderComparison
          title="Performance: Traditional React vs Next.js"
          beforeLabel="Regular React"
          afterLabel="Next.js"
          beforeContent={
            <div>
              <h4 className="font-bold mb-2">Traditional React</h4>
              <div className="space-y-2">
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Slow initial load</span>
                  </div>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Manual optimization</span>
                  </div>
                </div>
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>SEO challenges</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  Loading time: ~3-5 seconds
                </div>
              </div>
            </div>
          }
          afterContent={
            <div>
              <h4 className="font-bold mb-2">Next.js</h4>
              <div className="space-y-2">
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Fast server rendering</span>
                  </div>
                </div>
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Auto optimization</span>
                  </div>
                </div>
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>SEO-friendly</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  Loading time: ~0.5-1 second
                </div>
              </div>
            </div>
          }
        />

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">🚀 Next.js Cheat Sheet</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">📁 File Routing</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`app/
  page.tsx      → /
  about/
    page.tsx    → /about`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⚡ Server Components</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`// Runs on server
export default function Page() {
  return <h1>Fast!</h1>
}`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🖱️ Client Components</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`'use client'
// Interactive elements
const [state, setState] = useState()`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔗 Navigation</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`import Link from 'next/link'
<Link href="/about">About</Link>`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🖼️ Images</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`import Image from 'next/image'
<Image src="/pic.jpg" alt="Auto optimized!" />`}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📊 Metadata</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                {`export const metadata = {
  title: 'My Page',
  description: 'SEO ready!'
}`}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/tutorial/react"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous: React</span>
          </a>
          
          <a
            href="/tutorial/typescript"
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>Next: TypeScript</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </TutorialLayout>
  )
}