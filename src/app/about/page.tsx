export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-8">
            About This Project
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              What You'll Learn
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  Next.js Features
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• App Router (Next.js 13+)</li>
                  <li>• Server Components</li>
                  <li>• Client Components</li>
                  <li>• File-based Routing</li>
                  <li>• API Routes</li>
                  <li>• Static Generation (SSG)</li>
                  <li>• Server-Side Rendering (SSR)</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                  React Concepts
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Components & Props</li>
                  <li>• State Management</li>
                  <li>• Event Handling</li>
                  <li>• Hooks (useState, useEffect)</li>
                  <li>• Context API</li>
                  <li>• Error Boundaries</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              Development Tools
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">ESLint</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Code quality and consistency
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Prettier</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Automatic code formatting
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Tailwind CSS</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Utility-first CSS framework
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}