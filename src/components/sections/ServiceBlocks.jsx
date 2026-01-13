const ServiceBlock = ({ title, description, bgColor, textColor = 'text-white', buttonText = 'View More', buttonBg = 'bg-white', buttonTextColor = 'text-gray-900' }) => {
  return (
    <div className={`${bgColor} p-8 rounded-lg flex flex-col justify-between min-h-[400px]`}>
      <div>
        <h3 className={`text-3xl font-bold ${textColor} mb-4`}>{title}</h3>
        <p className={`${textColor} mb-6`}>{description}</p>
      </div>
      <button className={`${buttonBg} ${buttonTextColor} px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-fit`}>
        {buttonText}
      </button>
    </div>
  )
}

const ServiceBlocks = () => {
  const blocks = [
    {
      title: 'WordPress Development',
      description: 'We design and develop custom WordPress websites that are fast, responsive, and SEO-optimized. Whether it\'s a landing page or a full-scale website, we handle everything from design to deployment.',
      bgColor: 'bg-blue-700',
    },
    {
      title: 'Shopify Website Designs',
      description: 'We build high-converting Shopify stores tailored to your brand fully responsive, user-friendly, and optimized for sales. From setup to customization, we handle everything.',
      bgColor: 'bg-gradient-to-br from-orange-600 to-green-600',
    },
    {
      title: 'Website and Social Media Management',
      description: 'We handle everything updates, security, backups, performance, content, speed optimization, and error debugging so your website runs smoothly, securely, and without downtime.',
      bgColor: 'bg-teal-600',
    },
    {
      title: 'Meta & Google Ads Services',
      description: 'We create and manage high-performing Meta and Google ad campaigns that drive traffic, leads, and real sales. From ad creatives to targeting and optimization, we handle it all.',
      bgColor: 'bg-blue-500',
      buttonText: 'Get Started',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((block, index) => (
            <ServiceBlock key={index} {...block} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceBlocks

