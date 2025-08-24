'use client'

import { useState } from 'react'
import Link from 'next/link'
import TutorialLayout from '@/components/TutorialLayout'
import ConceptCard from '@/components/ConceptCard'
import ProgressTracker from '@/components/ProgressTracker'

const tutorialModules = [
  {
    id: 'nodejs',
    title: 'Node.js Basics',
    description: 'Learn what Node.js is and why we use it for web development',
    icon: '🟢',
    color: 'green' as const,
    href: '/tutorial/nodejs',
    duration: '10 mins',
    difficulty: 'Beginner'
  },
  {
    id: 'react',
    title: 'React Fundamentals', 
    description: 'Understand components, JSX, and the building blocks of React',
    icon: '⚛️',
    color: 'blue' as const,
    href: '/tutorial/react',
    duration: '15 mins',
    difficulty: 'Beginner'
  },
  {
    id: 'nextjs',
    title: 'Next.js Features',
    description: 'Explore Next.js routing, rendering, and powerful features',
    icon: '🔺',
    color: 'purple' as const,
    href: '/tutorial/nextjs',
    duration: '20 mins',
    difficulty: 'Intermediate'
  },
  {
    id: 'typescript',
    title: 'TypeScript Guide',
    description: 'Add type safety to your JavaScript with TypeScript',
    icon: '🔷',
    color: 'indigo' as const,
    href: '/tutorial/typescript',
    duration: '12 mins',
    difficulty: 'Beginner'
  },
  {
    id: 'dev-tools',
    title: 'Development Tools',
    description: 'Master ESLint, Prettier, and other essential dev tools',
    icon: '🛠️',
    color: 'yellow' as const,
    href: '/tutorial/dev-tools',
    duration: '8 mins',
    difficulty: 'Beginner'
  },
  {
    id: 'git',
    title: 'Git Workflow',
    description: 'Version control your code like a professional developer',
    icon: '📚',
    color: 'red' as const,
    href: '/tutorial/git',
    duration: '15 mins',
    difficulty: 'Beginner'
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: 'Style your apps with utility-first CSS framework',
    icon: '🎨',
    color: 'blue' as const,
    href: '/tutorial/tailwind',
    duration: '10 mins',
    difficulty: 'Beginner'
  }
]

export default function TutorialHub() {
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set())

  const toggleModule = (moduleId: string) => {
    const newCompleted = new Set(completedModules)
    if (newCompleted.has(moduleId)) {
      newCompleted.delete(moduleId)
    } else {
      newCompleted.add(moduleId)
    }
    setCompletedModules(newCompleted)
  }

  const progressSteps = tutorialModules.map(module => ({
    id: module.id,
    title: module.title,
    completed: completedModules.has(module.id)
  }))

  return (
    <TutorialLayout title="Complete Web Development Tutorial" currentSection="overview">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Your Web Development Journey!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This interactive tutorial covers everything we set up today. You'll learn about Node.js, React, Next.js, 
            TypeScript, development tools, Git, and Tailwind CSS - all explained in beginner-friendly terms with 
            hands-on examples.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What You'll Master Today
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Modern Web Technologies</h3>
              <p className="text-sm opacity-90">Learn the latest tools used by professional developers</p>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Hands-on Practice</h3>
              <p className="text-sm opacity-90">Interactive examples you can try and modify</p>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-6 text-white">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold mb-2">Professional Skills</h3>
              <p className="text-sm opacity-90">Real-world practices used in the industry</p>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mb-12">
          <ProgressTracker 
            steps={progressSteps}
            onToggleStep={toggleModule}
          />
        </div>

        {/* Tutorial Modules */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tutorial Modules
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tutorialModules.map((module, index) => (
              <ConceptCard
                key={module.id}
                title={module.title}
                description={module.description}
                icon={module.icon}
                color={module.color}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{module.duration}</span>
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      module.difficulty === 'Beginner' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {module.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href={module.href}
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      <span>Start Module</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                    <button
                      onClick={() => toggleModule(module.id)}
                      className={`flex items-center space-x-1 text-sm transition-colors ${
                        completedModules.has(module.id)
                          ? 'text-green-600 dark:text-green-400'
                          : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{completedModules.has(module.id) ? 'Completed' : 'Mark Done'}</span>
                    </button>
                  </div>
                </div>
              </ConceptCard>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="mb-6 opacity-90">
            Begin with Node.js basics and work your way through each module. Don't worry if something seems complex - 
            each concept builds on the previous one!
          </p>
          <Link
            href="/tutorial/nodejs"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <span>Start with Node.js</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </TutorialLayout>
  )
}