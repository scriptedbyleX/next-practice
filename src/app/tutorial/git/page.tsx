'use client'

import { useState } from 'react'
import TutorialLayout from '@/components/TutorialLayout'
import TimelineVisualizer from '@/components/TimelineVisualizer'
import BranchBuilder from '@/components/BranchBuilder'
import ToggleDemo from '@/components/ToggleDemo'
import TryItBox from '@/components/TryItBox'
import SliderComparison from '@/components/SliderComparison'

export default function GitTutorial() {
  const [gitCommands, setGitCommands] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  const workflowSteps = [
    { command: 'git add .', description: 'Stage all changes for commit', icon: '📁' },
    { command: 'git commit -m "Add new feature"', description: 'Create a snapshot with message', icon: '📸' },
    { command: 'git push origin main', description: 'Upload changes to GitHub', icon: '☁️' },
  ]

  const gitVsNoGitExamples = [
    {
      id: 'without-git',
      label: 'Without Version Control',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">😰 The Old Way</h4>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-400">
            <div className="space-y-3 mb-4">
              <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                📁 my-project-v1/
              </div>
              <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                📁 my-project-v2-with-login/
              </div>
              <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                📁 my-project-v2-BACKUP/
              </div>
              <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                📁 my-project-FINAL/
              </div>
              <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                📁 my-project-FINAL-FINAL/
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Multiple confusing copies</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Lost work when files get deleted</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ Can't easily collaborate</div>
              <div className="text-red-700 dark:text-red-300 text-sm">❌ No idea what changed when</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'with-git',
      label: 'With Git Version Control',
      content: (
        <div className="p-4">
          <h4 className="font-bold mb-3">😎 The Git Way</h4>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-400">
            <div className="space-y-3 mb-4">
              <div className="font-mono text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded flex items-center space-x-2">
                <span>📁 my-project/</span>
                <span className="text-blue-600 text-xs">(One folder with full history!)</span>
              </div>
              <div className="ml-4 space-y-1 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📸</span>
                  <span>v1.0: Initial version</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📸</span>
                  <span>v1.1: Add user login</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📸</span>
                  <span>v1.2: Fix login bug</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📸</span>
                  <span>v2.0: Add dashboard</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-green-700 dark:text-green-300 text-sm">✅ One folder with complete history</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Travel back to any version instantly</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Perfect collaboration with teams</div>
              <div className="text-green-700 dark:text-green-300 text-sm">✅ Know exactly what changed and when</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const executeStep = (stepIndex: number) => {
    const step = workflowSteps[stepIndex]
    setGitCommands([...gitCommands, step.command])
    setCurrentStep(stepIndex + 1)
  }

  return (
    <TutorialLayout title="Git Workflow" currentSection="git">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Hero */}
        <div className="text-center bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-8 text-white">
          <div className="text-4xl mb-4">📚</div>
          <h1 className="text-3xl font-bold mb-4">Git = Time Machine + Photo Album</h1>
          <p className="text-xl opacity-90">Save snapshots of your code and travel back in time when needed</p>
        </div>

        {/* Git vs No Git Comparison */}
        <ToggleDemo
          title="Why Do We Need Version Control?"
          description="See the chaos of managing code without Git vs the organized Git way!"
          options={gitVsNoGitExamples}
          defaultOption="without-git"
        />

        {/* Git Workflow Simulator */}
        <TryItBox
          title="Git Workflow Practice"
          instruction="Click the steps to practice a typical Git workflow!"
          icon="🔄"
          successMessage="Great! You're learning the Git workflow!"
        >
          <div className="space-y-6">
            {/* Step buttons */}
            <div className="grid md:grid-cols-3 gap-4">
              {workflowSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => executeStep(index)}
                  disabled={currentStep !== index}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    currentStep > index
                      ? 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
                      : currentStep === index
                      ? 'border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 cursor-pointer'
                      : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <div className="font-semibold">Step {index + 1}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{step.description}</div>
                    </div>
                  </div>
                  {currentStep > index && (
                    <div className="mt-2 text-green-600 dark:text-green-400 text-sm">✅ Completed</div>
                  )}
                </button>
              ))}
            </div>

            {/* Command output */}
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2">Terminal</span>
              </div>
              <div className="space-y-2">
                {gitCommands.length === 0 ? (
                  <div className="text-gray-500 text-sm">$ Click the steps above to see Git commands in action...</div>
                ) : (
                  gitCommands.map((command, index) => (
                    <div key={index} className="font-mono text-green-400 text-sm">
                      <span className="text-gray-500">$ </span>
                      {command}
                    </div>
                  ))
                )}
                {currentStep >= workflowSteps.length && (
                  <div className="text-blue-400 text-sm animate-pulse">
                    🎉 Workflow complete! Your changes are now on GitHub.
                  </div>
                )}
              </div>
            </div>

            {currentStep >= workflowSteps.length && (
              <button
                onClick={() => {
                  setGitCommands([])
                  setCurrentStep(0)
                }}
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                🔄 Try Again
              </button>
            )}
          </div>
        </TryItBox>

        {/* Timeline Visualizer */}
        <TimelineVisualizer title="Git Commit Timeline" />

        {/* Branch Builder */}
        <BranchBuilder title="Git Branching Playground" />

        {/* Development Process Comparison */}
        <SliderComparison
          title="Solo Development vs Team Collaboration"
          beforeLabel="Working Alone"
          afterLabel="Team with Git"
          beforeContent={
            <div>
              <h4 className="font-bold mb-2">👤 Solo Developer</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded">
                  <span className="text-blue-700 dark:text-blue-300">✅ Simple - just you</span>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/20 p-2 rounded">
                  <span className="text-yellow-700 dark:text-yellow-300">⚠️ No backup if you mess up</span>
                </div>
                <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded">
                  <span className="text-red-700 dark:text-red-300">❌ Limited by your skills</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                  <span className="text-gray-700 dark:text-gray-300">😴 Slower progress</span>
                </div>
              </div>
            </div>
          }
          afterContent={
            <div>
              <h4 className="font-bold mb-2">👥 Team with Git</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
                  <span className="text-green-700 dark:text-green-300">🚀 Multiple people working together</span>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded">
                  <span className="text-blue-700 dark:text-blue-300">🛡️ Complete history and backups</span>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded">
                  <span className="text-purple-700 dark:text-purple-300">🌟 Learn from others' code</span>
                </div>
                <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded">
                  <span className="text-green-700 dark:text-green-300">⚡ Much faster development</span>
                </div>
              </div>
            </div>
          }
        />

        {/* Git Concepts Explained */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '📁', title: 'Repository', desc: 'Project folder with Git superpowers' },
            { icon: '📸', title: 'Commit', desc: 'Snapshot of your code at a point in time' },
            { icon: '🌱', title: 'Branch', desc: 'Separate timeline to work on features' },
            { icon: '☁️', title: 'Push/Pull', desc: 'Upload/download changes to/from GitHub' },
          ].map((concept, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="text-3xl mb-2 text-center">{concept.icon}</div>
              <h4 className="font-semibold text-center mb-2">{concept.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{concept.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">🚀 Git Cheat Sheet</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">📁 Getting Started</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>git init</div>
                <div>git clone &lt;url&gt;</div>
                <div>git status</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📸 Making Commits</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>git add .</div>
                <div>git commit -m "message"</div>
                <div>git log</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🌱 Working with Branches</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>git branch feature</div>
                <div>git checkout feature</div>
                <div>git merge feature</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">☁️ GitHub Sync</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>git push origin main</div>
                <div>git pull origin main</div>
                <div>git remote -v</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔍 Checking Changes</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>git diff</div>
                <div>git show</div>
                <div>git log --oneline</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⏪ Time Travel</h4>
              <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded space-y-1">
                <div>git checkout &lt;commit&gt;</div>
                <div>git reset --hard</div>
                <div>git revert &lt;commit&gt;</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/tutorial/dev-tools"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous: Dev Tools</span>
          </a>
          
          <a
            href="/tutorial/tailwind"
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>Next: Tailwind CSS</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </TutorialLayout>
  )
}