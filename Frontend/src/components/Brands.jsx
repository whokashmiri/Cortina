import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import C1 from "../assets/Cr1.webp";
import C2 from "../assets/Cr2.webp";
import C3 from "../assets/Cr3.webp";
import C5 from "../assets/Cr5.webp";
import C6 from "../assets/Cr6.webp";

const brandIcons = [C1, C2, C3, C5, C6];

const Brands = () => {
  const sliderRef = useRef(null);
  const keenSlider = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 20 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
  });

  // Auto-play effect
  useEffect(() => {
    const slider = keenSlider[0];
    if (!slider) return;

    let interval = setInterval(() => {
      slider.next(); // Move to next slide automatically
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [keenSlider]);

  return (
    <div className="py-10 bg-gray-100 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center m-12 text-gray-900 uppercase tracking-wide">
        Prestigious Partners: A Legacy of Trust & Excellence
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
        We take pride in collaborating with world-renowned brands, crafting elegance and innovation in every detail.
      </p>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider max-w-4xl">
        {brandIcons.map((icon, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <img
              src={icon}
              alt={`Brand ${index + 1}`}
              className="h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
