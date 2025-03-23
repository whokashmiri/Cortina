import banner1 from "../assets/emi-banner.jpg"
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner5 = () => {
   useEffect(() => {
        AOS.init();
      }, [])
    return (
      <div className="flex flex-col md:flex-row w-full gap-4 p-4">
        {/* First Image */}
        <div className="w-full h-full">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-full object-contain rounded-lg shadow-lg" data-aos="fade-up-right"
          />
        </div>
        
      </div>
    );
  };
  
  export default Banner5;
  