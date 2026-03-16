const drinksData = [
  {
    img: "wine.jpg",
    title: "Wine",
    desc: "Known for antioxidants and elegant taste, often enjoyed in celebrations.",
  },
  {
    img: "beer.jpg",
    title: "Beer",
    desc: "A refreshing drink brewed from grains, famous worldwide for social gatherings.",
  },
  {
    img: "whiskey.jpg",
    title: "Whiskey",
    desc: "Aged spirit known for its deep flavor and smooth finish.",
  },
  {
    img: "cocktail.jpg",
    title: "Cocktails",
    desc: "Creative mixtures of spirits, juices and flavors served in stylish ways.",
  },
]

const Drinks = () => {
  return (
    <section
      id="drinks"
      className="relative py-40 px-10 text-center overflow-hidden bg-[#0b0b0b]"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-5">Popular Drinks</h2>
      <p className="max-w-xl mx-auto text-gray-400 mb-16">
        Discover some of the most enjoyed alcoholic beverages around the world.
        Each drink has its own taste, culture, and unique characteristics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {drinksData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />

            {/* Info */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Drinks