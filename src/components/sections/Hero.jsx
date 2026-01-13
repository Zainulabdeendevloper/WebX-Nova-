const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
      }}
      aria-label="Hero section"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8">
          You deserve a stunning portfolio
        </h1>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors"
          aria-label="Get started with WebX Nova"
        >
          GET STARTED
        </button>
      </div>
    </section>
  )
}

export default Hero
