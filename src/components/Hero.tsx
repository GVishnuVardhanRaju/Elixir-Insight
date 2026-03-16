const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <source src="intro.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-semibold mb-5">
          Discover Alcohol Benefits
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Explore the lifestyle and wellness insights connected with moderate alcohol consumption.
        </p>

        <a href="explore.html">
          <button className="px-9 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition">
            Explore Healthy Alcohol
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero