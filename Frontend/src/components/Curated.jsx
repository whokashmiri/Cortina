import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Curated = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="flex items-center justify-between p-10">
      <div className="w-1/2"  data-aos="flip-up">
        <h1 className="text-6xl font-bold">About Our Interior <br  /> <span className="text-teal-800 font-light">Design</span> </h1>
      </div>
      <div className="w-1/2"  data-aos="flip-down">
        <p>The future of interior design is a fusion of cutting-edge technology and evolving cultural aesthetics. Imagine smart homes seamlessly blending luxury with convenience, modular furniture that adapts to your lifestyle, and biophilic designs that bring the serenity of nature indoors. Designers are redefining opulence by prioritizing mental and physical well-being, curating spaces that are not just visually stunning but also deeply rejuvenating. This is the era of sophisticated, wellness-centric living—where every element is crafted to elevate comfort, style, and elegance.</p>
      </div>
    </div>
  );
};

export default Curated;