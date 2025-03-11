import Cushion from "../assets/Cushion.webp";
import Teal2 from "../assets/Teal2.webp";
import Teal3 from "../assets/Teal3.webp";
import Table1 from "../assets/Table1.webp";
import Table2 from "../assets/Table2.webp";
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Grid = () => {
   useEffect(() => {
      AOS.init();
    }, [])
  
  return (
    <div className="  p-6">
     <h2 className="text-4xl font-bold text-center m-12 text-gray-900">
     Illuminated Spotlight:
      <span className="text-teal-800 font-light"> Icons of Prestige & Influence </span>
        
      </h2>
    <div className="flex h-[92vh]  gap-4"> {/* Added gap-4 between main divs */}
      {/* First Div (Same height as Second Div) */}
      <div className="h-full w-[35%]">
        <img
          src={Cushion}
          alt="Main" 
          className="h-full w-full object-cover rounded-lg"  data-aos="fade-right"
        />
      </div>

      {/* Second Div (Fully Occupying Remaining Space) */}
      <div className="flex flex-col flex-grow gap-4">
        {/* Row 1 */}
        <div className="flex flex-grow gap-4" >
          <img
            src={Teal2}
            alt="Small 1"
            className="w-1/2 h-full object-cover rounded-lg" data-aos="fade-up"
          />
          <img
            src={Teal3}
            alt="Small 2"
            className="w-1/2 h-full object-cover rounded-lg" data-aos="fade-down"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-grow gap-4">
          <img
            src={Table1}
            alt="Small 3"
            className="w-1/2 h-full object-cover rounded-lg" data-aos="fade-left"
          />
          <img
            src={Table2}
            alt="Small 4"
            className="w-1/2 h-full object-cover rounded-lg" data-aos="fade-left"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Grid;
