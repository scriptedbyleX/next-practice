'use client'

import { useState } from 'react'

interface Commit {
  id: string
  message: string
  author: string
  timestamp: string
  files: string[]
}

interface TimelineVisualizerProps {
  title: string
  initialCommits?: Commit[]
}

export default function TimelineVisualizer({ title, initialCommits = [] }: TimelineVisualizerProps) {
  const [commits, setCommits] = useState<Commit[]>(initialCommits.length > 0 ? initialCommits : [
    {
      id: '1a2b3c4',
      message: 'Initial commit: Add project setup',
      author: 'You',
      timestamp: '2 hours ago',
      files: ['README.md', 'package.json', 'src/app/page.tsx']
    },
    {
      id: '5e6f7g8',
      message: 'Add navigation component',
      author: 'You',
      timestamp: '1 hour ago',
      files: ['src/components/Navigation.tsx', 'src/app/layout.tsx']
    },
    {
      id: '9h0i1j2',
      message: 'Style homepage with Tailwind CSS',
      author: 'You',
      timestamp: '30 minutes ago',
      files: ['src/app/page.tsx', 'src/app/globals.css']
    }
  ])
  
  const [newCommitMessage, setNewCommitMessage] = useState('')
  const [selectedCommit, setSelectedCommit] = useState<string | null>(null)
  const [isCommitting, setIsCommitting] = useState(false)

  const createNewCommit = () => {
    if (!newCommitMessage.trim()) return
    
    setIsCommitting(true)
    setTimeout(() => {
      const newCommit: Commit = {
        id: Math.random().toString(36).substring(2, 9),
        message: newCommitMessage,
        author: 'You',
        timestamp: 'Just now',
        files: ['src/components/NewFeature.tsx']
      }
      
      setCommits([...commits, newCommit])
      setNewCommitMessage('')
      setIsCommitting(false)
      setSelectedCommit(newCommit.id)
    }, 1500)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-green-100 text-sm">📸 Each commit is like a photo of your code at that moment</p>
      </div>
      
      <div className="p-4">
        {/* Create New Commit */}
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">📝 Create a New Commit</h4>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newCommitMessage}
              onChange={(e) => setNewCommitMessage(e.target.value)}
              placeholder="What did you change? (e.g., 'Add user login feature')"
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              disabled={isCommitting}
            />
            <button
              onClick={createNewCommit}
              disabled={!newCommitMessage.trim() || isCommitting}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isCommitting
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : !newCommitMessage.trim()
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg transform hover:scale-105'
              }`}
            >
              {isCommitting ? '💫 Committing...' : '📸 Commit'}
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-400"></div>
          
          {/* Commits */}
          <div className="space-y-6">
            {commits.map((commit, index) => (
              <div key={commit.id} className="relative flex items-start space-x-4">
                {/* Timeline dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 transition-all duration-300 ${
                  selectedCommit === commit.id
                    ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50 scale-125'
                    : index === commits.length - 1
                    ? 'bg-green-400 animate-pulse'
                    : 'bg-blue-400'
                }`}></div>
                
                {/* Commit info */}
                <div 
                  className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                    selectedCommit === commit.id
                      ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 shadow-lg'
                      : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedCommit(selectedCommit === commit.id ? null : commit.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-mono text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                          {commit.id}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {commit.timestamp}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {commit.message}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        by {commit.author}
                      </p>
                    </div>
                    <div className="text-gray-400">
                      {selectedCommit === commit.id ? '🔽' : '📁'}
                    </div>
                  </div>
                  
                  {/* Expanded details */}
                  {selectedCommit === commit.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        📄 Files changed:
                      </h5>
                      <div className="space-y-1">
                        {commit.files.map((file, fileIndex) => (
                          <div key={fileIndex} className="flex items-center space-x-2 text-sm">
                            <span className="text-green-500">+</span>
                            <span className="font-mono text-gray-700 dark:text-gray-300">{file}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline info */}
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
            🕐 How Git Timeline Works:
          </h4>
          <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
            <div className="flex items-center space-x-2">
              <span>📸</span>
              <span>Each commit is a snapshot of your entire project</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🔗</span>
              <span>Commits link together to form your project history</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>⏪</span>
              <span>You can travel back to any commit anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>👥</span>
              <span>Multiple developers can work on the same timeline</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Click commits to see details • Add new commits to see the timeline grow</span>
        </div>
      </div>
    </div>
  )
}