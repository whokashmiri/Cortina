import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

export default function Carousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 5,
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 640px)": { perView: 2, spacing: 15 }, // Tablets
      "(min-width: 1024px)": { perView: 3, spacing: 20 }, // Large screens
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 2000);

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="pt-6 mt-7">
      <h1 className="text-3xl md:text-4xl font-bold text-center m-4 lg:m-10 text-gray-900">
        Shop by Inspirations: <span className="text-teal-800 font-light">Curated Elegance, Timeless Style</span>
      </h1>

      <div ref={sliderRef} className="keen-slider w-[90%] mx-auto">
        {[
          "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/6232449/pexels-photo-6232449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/27208616/pexels-photo-27208616/free-photo-of-ceramic-vases-for-soy-candles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/5546812/pexels-photo-5546812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg",
        ].map((src, index) => (
          <div key={index} className="keen-slider__slide p-2 md:p-4 lg:p-6">
            <img
              className="rounded-2xl w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover"
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
