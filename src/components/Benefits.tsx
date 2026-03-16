import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const benefitsData = [
  {
    icon: "fa-solid fa-heart",
    title: "Heart Health",
    desc: "Moderate alcohol consumption may support cardiovascular wellness.",
  },
  {
    icon: "fa-solid fa-brain",
    title: "Stress Relief",
    desc: "Drinks can help promote relaxation after a long day.",
  },
  {
    icon: "fa-solid fa-user-group",
    title: "Social Bonding",
    desc: "Alcohol is often enjoyed in social gatherings and celebrations.",
  },
  {
    icon: "fa-solid fa-wine-glass",
    title: "Rich Antioxidants",
    desc: "Certain drinks like red wine contain natural antioxidants.",
  },
]

const Benefits = () => {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      )
    })
  }, [])

  // Mouse light effect
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
  const card = cardsRef.current[index]
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  card.style.setProperty("--lightX", `${x}px`)
  card.style.setProperty("--lightY", `${y}px`)

  // Get the light div inside the card
  const lightDiv = card.querySelector<HTMLDivElement>(".cursor-light")
  if (lightDiv) {
    lightDiv.style.top = `${y}px`
    lightDiv.style.left = `${x}px`
    lightDiv.style.opacity = "1"
  }
}
  return (
    <section
      id="benefits"
      className="relative py-40 px-10 text-center overflow-hidden bg-[#0b0b0b]"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-5">
        Discover the Benefits
      </h2>
      <p className="max-w-xl mx-auto text-gray-400 mb-16">
        Explore how moderate alcohol consumption may influence relaxation, social bonding
        and lifestyle experiences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {benefitsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
  if (el) cardsRef.current[index] = el
}}
            onMouseMove={(e) => handleMouseMove(e, index)}
            className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              "--lightX": "50%",
              "--lightY": "50%",
            } as React.CSSProperties}
          >
          {/* Cursor Light */}
<div
  className="cursor-light absolute w-56 h-56 bg-gradient-to-r from-white/30 to-transparent rounded-full pointer-events-none"
  style={{
    top: "var(--lightY)",
    left: "var(--lightX)",
    transform: "translate(-50%, -50%)",
    transition: "top 0.1s, left 0.1s, opacity 0.3s",
    opacity: 0.3,
  }}
></div>

            {/* Icon */}
            <i className={`${item.icon} text-4xl mb-5 text-yellow-400`}></i>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-200 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits