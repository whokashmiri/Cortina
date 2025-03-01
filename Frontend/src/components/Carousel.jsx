/* eslint-disable react-refresh/only-export-components */
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect } from "react"
import one from "../assets/1.webp"
import two from "../assets/2.webp"
import three from "../assets/3.webp"
import four from "../assets/4.webp"
import five from "../assets/5.webp"
import six from "../assets/6.webp"
import seven from "../assets/7.webp"
import eight from "../assets/8.webp"
import nine from "../assets/9.webp"
import ten from "../assets/10.webp"

const Carousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  useEffect(() => {
    if (!instanceRef.current) return
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 2000) // Auto-slide every 2 seconds
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <div className="mt-9">
        <h1 className="text-3xl font-['Oswald'] text-center mb-8 text-gray-900">Shop by Inspirations</h1>
    
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src={one} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src={two} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src={three} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src={four} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide5">      
        <img src={five} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <img src={six} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide7">
        <img src={seven} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide8">
        <img src={eight} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide9">
        <img src={nine} alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide10">
        <img src={ten} alt="" className="rounded-2xl" />
      </div>
    </div>
    </div>
  )
}

export default Carousel;