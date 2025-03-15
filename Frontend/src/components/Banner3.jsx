import banner1 from "../assets/homeG.webp"
import banner2 from "../assets/homeG2.webp"
import banner3 from "../assets/homeG3.webp"
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner3 = () => {
   useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="flex flex-col md:flex-row w-full mt-9 gap-2 justify-center items-center">
        {/* First Image */}
        <div className="w-[300px] h-40 flex justify-center items-center">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-full object-contain rounded-lg"
            data-aos="fade-up-right"
          />
        </div>
        <div className="w-[300px] h-40 flex justify-center items-center">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-full object-contain rounded-lg"
            data-aos="fade-up"
          />
        </div>
        <div className="w-[300px] h-40 flex justify-center items-center">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-full object-contain rounded-lg"
            data-aos="fade-up-left"
          />
        </div>
      </div>
      
      
    );
  };
  
  export default Banner3;
  