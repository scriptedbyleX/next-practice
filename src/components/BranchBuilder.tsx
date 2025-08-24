'use client'

import { useState } from 'react'

interface Branch {
  id: string
  name: string
  color: string
  commits: number
  isActive: boolean
  mergedInto?: string
}

interface BranchBuilderProps {
  title: string
}

export default function BranchBuilder({ title }: BranchBuilderProps) {
  const [branches, setBranches] = useState<Branch[]>([
    { id: 'main', name: 'main', color: 'bg-blue-500', commits: 3, isActive: false },
    { id: 'feature-login', name: 'feature/login', color: 'bg-green-500', commits: 2, isActive: true },
  ])
  
  const [newBranchName, setNewBranchName] = useState('')
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)
  const [showMergeOptions, setShowMergeOptions] = useState(false)

  const branchColors = ['bg-purple-500', 'bg-red-500', 'bg-yellow-500', 'bg-pink-500', 'bg-indigo-500']

  const createBranch = () => {
    if (!newBranchName.trim()) return
    
    const newBranch: Branch = {
      id: newBranchName.toLowerCase().replace(/\s+/g, '-'),
      name: newBranchName,
      color: branchColors[branches.length % branchColors.length],
      commits: 0,
      isActive: false
    }
    
    setBranches([...branches, newBranch])
    setNewBranchName('')
  }

  const switchToBranch = (branchId: string) => {
    setBranches(branches.map(branch => ({
      ...branch,
      isActive: branch.id === branchId
    })))
    setSelectedBranch(branchId)
  }

  const addCommitToBranch = (branchId: string) => {
    setBranches(branches.map(branch => 
      branch.id === branchId 
        ? { ...branch, commits: branch.commits + 1 }
        : branch
    ))
  }

  const mergeBranch = (fromBranchId: string, toBranchId: string) => {
    setBranches(branches.map(branch => {
      if (branch.id === fromBranchId) {
        return { ...branch, mergedInto: toBranchId }
      }
      if (branch.id === toBranchId) {
        const fromBranch = branches.find(b => b.id === fromBranchId)
        return { ...branch, commits: branch.commits + (fromBranch?.commits || 0) }
      }
      return branch
    }))
    setShowMergeOptions(false)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-purple-100 text-sm">🌳 Create branches to work on features without breaking main code</p>
      </div>
      
      <div className="p-4">
        {/* Branch Creation */}
        <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">🌱 Create New Branch</h4>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newBranchName}
              onChange={(e) => setNewBranchName(e.target.value)}
              placeholder="Branch name (e.g., feature/dark-mode)"
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={createBranch}
              disabled={!newBranchName.trim()}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                !newBranchName.trim()
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                  : 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg transform hover:scale-105'
              }`}
            >
              🌱 Create Branch
            </button>
          </div>
        </div>

        {/* Branch Visualization */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">🌳 Branch Network</h4>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <div className="space-y-4 min-w-max">
              {branches.map((branch, index) => (
                <div key={branch.id} className="flex items-center space-x-4">
                  {/* Branch line */}
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${branch.color}`}></div>
                    <div className={`h-0.5 w-20 ${branch.color}`}></div>
                  </div>
                  
                  {/* Branch info */}
                  <div 
                    className={`flex-1 p-3 rounded-lg border-2 transition-all cursor-pointer ${
                      branch.isActive
                        ? 'border-yellow-400 bg-yellow-900/20 shadow-lg'
                        : selectedBranch === branch.id
                        ? 'border-blue-400 bg-blue-900/20'
                        : 'border-gray-600 bg-gray-800 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedBranch(selectedBranch === branch.id ? null : branch.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-white font-mono font-semibold">{branch.name}</span>
                        {branch.isActive && (
                          <span className="text-yellow-400 text-sm">← Active</span>
                        )}
                        {branch.mergedInto && (
                          <span className="text-green-400 text-sm">✓ Merged</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">{branch.commits} commits</span>
                        {!branch.isActive && !branch.mergedInto && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              switchToBranch(branch.id)
                            }}
                            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors"
                          >
                            Switch
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Commit dots */}
                  <div className="flex space-x-1">
                    {Array.from({ length: branch.commits }).map((_, commitIndex) => (
                      <div key={commitIndex} className={`w-2 h-2 rounded-full ${branch.color} opacity-75`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branch Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => {
              const activeBranch = branches.find(b => b.isActive)
              if (activeBranch) addCommitToBranch(activeBranch.id)
            }}
            disabled={!branches.some(b => b.isActive)}
            className={`p-4 rounded-lg border-2 transition-all ${
              branches.some(b => b.isActive)
                ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 cursor-pointer'
                : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 cursor-not-allowed'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">📝</div>
              <div className="font-semibold">Make Commit</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Add to active branch</div>
            </div>
          </button>

          <button
            onClick={() => setShowMergeOptions(!showMergeOptions)}
            disabled={branches.length < 2}
            className={`p-4 rounded-lg border-2 transition-all ${
              branches.length >= 2
                ? 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 cursor-pointer'
                : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 cursor-not-allowed'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🔀</div>
              <div className="font-semibold">Merge Branches</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Combine branch work</div>
            </div>
          </button>

          <div className="p-4 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20">
            <div className="text-center">
              <div className="text-2xl mb-2">ℹ️</div>
              <div className="font-semibold">Active Branch</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {branches.find(b => b.isActive)?.name || 'None'}
              </div>
            </div>
          </div>
        </div>

        {/* Merge Options */}
        {showMergeOptions && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800 animate-fadeIn">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">🔀 Merge Branches</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {branches.filter(b => !b.mergedInto).map(fromBranch => (
                <div key={fromBranch.id}>
                  <h5 className="font-medium mb-2">Merge {fromBranch.name} into:</h5>
                  <div className="space-y-2">
                    {branches.filter(b => b.id !== fromBranch.id && !b.mergedInto).map(toBranch => (
                      <button
                        key={toBranch.id}
                        onClick={() => mergeBranch(fromBranch.id, toBranch.id)}
                        className="w-full text-left px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                      >
                        → {toBranch.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Branch Concepts */}
        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
            🌳 How Git Branches Work:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700 dark:text-purple-300">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span>🌱</span>
                <span>Branches let you work on features separately</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🛡️</span>
                <span>Main branch stays stable and working</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span>🔀</span>
                <span>Merge combines branch work back together</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>👥</span>
                <span>Multiple people can work on different branches</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
          <span>Create branches • Make commits • Practice merging</span>
        </div>
      </div>
    </div>
  )
}