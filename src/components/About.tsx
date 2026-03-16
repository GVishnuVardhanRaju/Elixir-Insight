const About = () => {
  return (
    <section
      id="about"
      className="relative py-40 px-10 bg-[#0b0b0b] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">About This Website</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            This website explores the cultural and lifestyle aspects of alcoholic beverages 
            from around the world. Our goal is to present information about popular drinks, 
            their history, and their role in social experiences.
          </p>
          <p className="text-gray-400 mb-4 leading-relaxed">
            We highlight beverages such as wine, beer, whiskey, and cocktails while 
            encouraging responsible and mindful consumption. The content is designed 
            to be informative and visually engaging.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="about-drink.jpg"
            alt="About Drinks"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default About