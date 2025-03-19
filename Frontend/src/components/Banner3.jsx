import homeG from "../assets/homeG.webp";
import homeG2 from "../assets/HomeG2.webp";
import homeG3 from "../assets/HomeG3.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full mt-9 gap-4 md:gap-2 p-4 justify-center items-center">
      {/* First Image */}
      <div className="w-full md:w-[300px] h-auto md:h-40 flex justify-center items-center">
        <img
          src={homeG}
          alt="Banner 1"
          className="w-full h-auto md:h-full object-contain rounded-lg"
          data-aos="fade-up-right"
        />
      </div>

      {/* Second Image */}
      <div className="w-full md:w-[300px] h-auto md:h-40 flex justify-center items-center">
        <img
          src={homeG2}
          alt="Banner 2"
          className="w-full h-auto md:h-full object-contain rounded-lg"
          data-aos="fade-up"
        />
      </div>

      {/* Third Image */}
      <div className="w-full md:w-[300px] h-auto md:h-40 flex justify-center items-center">
        <img
          src={homeG3}
          alt="Banner 3"
          className="w-full h-auto md:h-full object-contain rounded-lg"
          data-aos="fade-up-left"
        />
      </div>
    </div>
  );
};

export default Banner3;
