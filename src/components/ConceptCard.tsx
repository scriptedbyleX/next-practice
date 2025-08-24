interface ConceptCardProps {
  title: string
  description: string
  icon: string
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo'
  children?: React.ReactNode
}

export default function ConceptCard({ 
  title, 
  description, 
  icon, 
  color = 'blue',
  children 
}: ConceptCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200',
    green: 'from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200',
    purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200',
    red: 'from-red-500 to-red-600 text-red-600 bg-red-50 border-red-200',
    yellow: 'from-yellow-500 to-yellow-600 text-yellow-600 bg-yellow-50 border-yellow-200',
    indigo: 'from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50 border-indigo-200',
  }

  const [gradientClass, textClass, bgClass, borderClass] = colorClasses[color].split(' ')

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 ${borderClass} dark:border-gray-700 overflow-hidden transition-transform hover:scale-105`}>
      {/* Header with gradient background */}
      <div className={`bg-gradient-to-r ${gradientClass} p-6 text-white`}>
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{icon}</div>
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-blue-100 dark:text-gray-200">{description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      {children && (
        <div className="p-6">
          {children}
        </div>
      )}
    </div>
  )
}