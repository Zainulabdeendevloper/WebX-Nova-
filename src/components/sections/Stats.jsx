const StatCard = ({ title, children, bgColor = 'bg-blue-600' }) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg text-white`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  )
}

const MetricBar = ({ label, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm">{label}</span>
        <span className="text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-blue-800 rounded-full h-2">
        <div
          className="bg-white h-2 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Users Acquisition Card */}
          <StatCard title="Users Acquisition">
            <div className="mb-4 h-32 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-sm">Illustration</span>
            </div>
            <MetricBar label="New Users" percentage={80} />
            <MetricBar label="Active Users" percentage={70} />
            <MetricBar label="Retention Rate" percentage={90} />
            <MetricBar label="Engagement" percentage={85} />
          </StatCard>

          {/* 5 Methodologies */}
          <div className="flex items-center justify-center bg-gray-900 rounded-lg p-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">5</div>
              <div className="text-xl text-white">Methodologies</div>
            </div>
          </div>

          {/* Engagement Card */}
          <StatCard title="Engagement">
            <ul className="space-y-2 text-sm">
              <li>• Click-Through Rate</li>
              <li>• Conversion Rate</li>
              <li>• Time on Site</li>
              <li>• Bounce Rate</li>
            </ul>
          </StatCard>

          {/* Satisfied Users */}
          <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-xl font-bold text-white">Satisfied Users</div>
          </div>
        </div>

        {/* Global Reach Card - Full Width */}
        <div className="mt-6">
          <StatCard title="Global Reach" bgColor="bg-blue-600">
            <div className="h-48 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-sm">Global Illustration</span>
            </div>
          </StatCard>
        </div>
      </div>
    </section>
  )
}

export default Stats

