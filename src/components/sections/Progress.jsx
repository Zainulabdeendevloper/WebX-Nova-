const ProgressCard = ({ percentage, title, description }) => {
  return (
    <div className="bg-gray-900 p-6 md:p-8 rounded-lg">
      <div className="text-4xl md:text-5xl font-bold text-green-500 mb-4">{percentage}%</div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm md:text-base">{description}</p>
      <div className="w-full bg-gray-800 rounded-full h-2" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
        <div
          className="bg-green-500 h-2 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

const Progress = () => {
  const stats = [
    {
      percentage: 87,
      title: 'Conversion Rate',
      description: 'Strategic site development tailored to maximize engagement and boost conversions across all devices.',
    },
    {
      percentage: 47,
      title: 'Customer Loyalty',
      description: 'Performance-driven ad campaigns that turn clicks into customers through precision targeting and creative design.',
    },
    {
      percentage: 95,
      title: 'User Growth',
      description: 'Clients see measurable ROI growth within weeks of launch thanks to our integrated design and marketing strategies.',
    },
    {
      percentage: 25,
      title: 'Reduced Bounce Rate',
      description: 'Reduction in bounce rates through clean UX, blazing-fast loading speeds, and optimized landing pages.',
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-950" aria-label="Progress statistics">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Turn Clicks into Clients With Seamless Web and Marketing Experience
        </h2>
        <p className="text-gray-400 text-center mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base">
          Our goal is to provide the services to our clients to make them grow seamlessly and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ProgressCard key={index} {...stat} />
          ))}
        </div>
        {/* Decorative Text Strip */}
        <div className="mt-12 md:mt-16 overflow-hidden" aria-hidden="true">
          <div className="flex animate-scroll whitespace-nowrap">
            <span className="text-white text-xl md:text-2xl font-bold mr-8">
              GROWTH STRATEGY SMART AND RESPONSIVE FUTURE READY WEBSITE CREATIVE AND RESPONSIVE
            </span>
            <span className="text-white text-xl md:text-2xl font-bold mr-8">
              GROWTH STRATEGY SMART AND RESPONSIVE FUTURE READY WEBSITE CREATIVE AND RESPONSIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progress
