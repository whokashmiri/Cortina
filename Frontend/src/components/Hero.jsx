import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Travel from "../assets/Travel.webp";
import Chair from "../assets/Chair.webp";
import Curtains from "../assets/Curtains.webp";
import Recliner from "../assets/Recliner.webp";
import Sofa from "../assets/Sofa.webp";

import AOS from 'aos';
import 'aos/dist/aos.css';


const images = [Travel, Chair, Curtains, Recliner, Sofa];


 

export default function Hero() {

  useEffect(() => {
    AOS.init();
  }, [])
  const [opacities, setOpacities] = useState([]);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const newOpacities = s.track.details.slides.map((slide) => slide.portion);
      setOpacities(newOpacities);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div ref={sliderRef} className="relative w-full h-[450px] overflow-hidden">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="absolute inset-0 w-full h-full transition-opacity duration-500" data-aos="fade-up-right"
          style={{ opacity: opacities[idx] }}
        >
          <img src={src} className="w-full h-full object-cover" alt={`Slide ${idx + 1}`} />
        </div>
      ))}
    </div>
  );
};


