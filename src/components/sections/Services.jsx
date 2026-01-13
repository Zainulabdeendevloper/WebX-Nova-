const ServiceCard = ({ title, description, rotation, offsetX, offsetY, bgColor, image, isMobile = false }) => {
  const cardStyle = isMobile ? {} : {
    transform: `rotate(${rotation}deg) translate(${offsetX}px, ${offsetY}px)`,
    position: 'absolute',
    zIndex: 10,
  }

  return (
    <div
      className={`${bgColor} p-4 md:p-6 rounded-lg shadow-2xl max-w-sm ${isMobile ? 'relative mb-6' : ''}`}
      style={cardStyle}
    >
      <div className={isMobile ? '' : 'transform -rotate-12'}>
        {image && (
          <div className="mb-4 h-32 md:h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image</span>
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white text-xs md:text-sm mb-4">{description}</p>
        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
          View More
        </button>
      </div>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      title: 'MERN STACK Development',
      description: 'We design and develop custom MERN stack applications that are fast, responsive, and scalable. Whether it\'s a landing page or a full-scale web application, we handle everything from frontend to backend.',
      rotation: -12,
      offsetX: 0,
      offsetY: 0,
      bgColor: 'bg-blue-600',
      image: true,
    },
    {
      title: 'Shopify Website Designs',
      description: 'We build high-converting Shopify stores tailored to your brand fully responsive, user-friendly, and optimized for sales. From setup to customization, we handle everything.',
      rotation: 8,
      offsetX: 50,
      offsetY: 30,
      bgColor: 'bg-orange-600',
      image: true,
    },
    {
      title: 'Website and Social Media Management',
      description: 'We handle everything updates, security, backups, performance, content, speed optimization, and error debugging so your website runs smoothly, securely, and without downtime.',
      rotation: -8,
      offsetX: -30,
      offsetY: 50,
      bgColor: 'bg-teal-600',
      image: true,
    },
    {
      title: 'Meta & Google Ads Services',
      description: 'We create and manage high-performing Meta and Google ad campaigns that drive traffic, leads, and real sales. From ad creatives to targeting and optimization, we handle it all.',
      rotation: 12,
      offsetX: 40,
      offsetY: -20,
      bgColor: 'bg-blue-500',
      image: true,
    },
  ]

  return (
    <section id="services" className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      {/* Mobile Layout */}
      <div className="md:hidden max-w-7xl mx-auto">
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} isMobile={true} />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-7xl mx-auto relative min-h-[600px]">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} isMobile={false} />
        ))}
      </div>
    </section>
  )
}

export default Services
