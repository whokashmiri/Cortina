import Cushion from "../assets/Cushion.webp";
import Teal2 from "../assets/Teal2.webp";
import Teal3 from "../assets/Teal3.webp";
import Table1 from "../assets/Table1.webp";
import Table2 from "../assets/Table2.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Grid = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center m-4 lg:m-10 text-gray-900">
        Illuminated Spotlight:
        <span className="text-teal-800 font-light"> Icons of Prestige & Influence </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Column - Large Image */}
        <div className="col-span-1 lg:col-span-1">
          <img
            src={Cushion}
            alt="Main"
            className="w-full h-auto md:h-full object-cover rounded-lg"
            data-aos="fade-right"
          />
        </div>

        {/* Second Column - Two Rows of Two Images */}
        <div className="grid grid-cols-2 gap-4 col-span-1 lg:col-span-2">
          <img
            src={Teal2}
            alt="Small 1"
            className="w-full h-auto object-cover rounded-lg"
            data-aos="fade-up"
          />
          <img
            src={Teal3}
            alt="Small 2"
            className="w-full h-auto object-cover rounded-lg"
            data-aos="fade-down"
          />
          <img
            src={Table1}
            alt="Small 3"
            className="w-full h-auto object-cover rounded-lg"
            data-aos="fade-left"
          />
          <img
            src={Table2}
            alt="Small 4"
            className="w-full h-auto object-cover rounded-lg"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
