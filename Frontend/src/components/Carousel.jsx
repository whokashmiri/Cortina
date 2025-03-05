/* eslint-disable react-refresh/only-export-components */
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect } from "react"


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
    <div>
    <div className="mt-9">
        <h1 className="text-6xl font-bold text-center m-12 text-gray-900">Shop by   <span className="text-teal-800 font-light"> Inspirations</span> </h1>
    
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src="https://images.pexels.com/photos/279640/pexels-photo-279640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide2">
        <img src="https://images.pexels.com/photos/3034738/pexels-photo-3034738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide3">
        <img src="https://images.pexels.com/photos/2724373/pexels-photo-2724373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide4">
        <img src="https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide9">
        <img src="https://images.pexels.com/photos/19050708/pexels-photo-19050708/free-photo-of-windows-in-urban-apartment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide5">      
        <img src="https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide6">
        <img src="https://images.pexels.com/photos/30841382/pexels-photo-30841382/free-photo-of-cozy-cafe-overlooking-istanbul-s-scenic-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide7">
        <img src="https://images.pexels.com/photos/7407771/pexels-photo-7407771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
      <div className="keen-slider__slide number-slide8">
        <img src="https://images.pexels.com/photos/6598909/pexels-photo-6598909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
    
      <div className="keen-slider__slide number-slide10">
        <img src="https://images.pexels.com/photos/7746617/pexels-photo-7746617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-2xl" />
      </div>
    </div>

    
    </div>
    <div className="flex gap-4 justify-center mt-6">
          <button className="bg-btn text-white px-9 py-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center">
            View Products
          </button>
         
        </div>

    </div>
  )
}

export default Carousel;