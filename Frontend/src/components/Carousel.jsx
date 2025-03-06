import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

export default function Carousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 5, // Transition speed (5ms)
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 1500); // Stay on each image for 1.5 seconds

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div>
              <h1 className="text-4xl font-bold text-center m-12 text-gray-900">Shop by Inspirations:   <span className="text-teal-800 font-light"> Curated Elegance, Timeless Style</span> </h1>

      <div ref={sliderRef} className="keen-slider w-[90%] h-[90vh] ">
        <div className="keen-slider__slide number-slide1 p-6  bg-contain">
          <img className="rounded-2xl bg-center" src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="keen-slider__slide number-slide2 p-6 bg-contain">
          <img className="rounded-2xl bg-center" src="https://images.pexels.com/photos/6232449/pexels-photo-6232449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="keen-slider__slide number-slide3 p-6 bg-contain">
          <img  className="rounded-2xl bg-center" src="https://images.pexels.com/photos/27208616/pexels-photo-27208616/free-photo-of-ceramic-vases-for-soy-candles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="keen-slider__slide number-slide4 p-6 bg-contain">
          <img className="rounded-2xl bg-center" src="https://images.pexels.com/photos/5546812/pexels-photo-5546812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="keen-slider__slide number-slide5 p-6 bg-contain">
          <img className="rounded-2xl bg-center" src="https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
        <div className="keen-slider__slide number-slide6 p-6 bg-contain">
          <img className="rounded-2xl bg-center" src="https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg" alt="" />
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-6">
          <button className="bg-btn text-white px-9 py-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center">
            View Products
          </button>
         
        </div>
    </div>
  );
}
