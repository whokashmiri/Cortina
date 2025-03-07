import half from "../assets/half.webp"
import half2 from "../assets/half2.webp"
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
   useEffect(() => {
          AOS.init();
        }, [])
    return (
      <div className="flex flex-col md:flex-row w-full  gap-4 p-4">
        {/* First Image */}
        <div className=" md:w-1/2">
          <img
            src={half}
            alt="Banner 1"
            className="  object-cover rounded-lg shadow-lg"  data-aos="fade-down-right"
          />
        </div>
        
        {/* Second Image */}
        <div className=" md:w-1/2 ">
          <img
            src={half2}
            alt="Banner 2"
            className=" object-cover rounded-lg shadow-lg"  data-aos="fade-down-left"
          />
        </div>
      </div>
    );
  };
  
  export default Banner;
  