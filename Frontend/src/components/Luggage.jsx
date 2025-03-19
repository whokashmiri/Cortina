import Luggage1 from "../assets/Plants.webp"
import Luggage2 from "../assets/Prints.webp"
import Luggage3 from "../assets/Mirror.webp"
import Luggage4 from "../assets/WallC.webp"
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Luggage = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: false // Ensures animation occurs on every scroll
    });
  
    window.addEventListener('scroll', AOS.refresh);
  
    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);
  const products = [
    {
      id: 1,
      image: Luggage1,
      name: "Black & Turquoise Printed Medium Luggage Cover",
     
    },
    {
      id: 2,
      image: Luggage2,
      name: "Navy Blue & Brown Printed Large Luggage Cover",

    },
    {
      id: 3,
      image: Luggage3,
      name: "Navy Blue & Red Printed Large Luggage Cover",
     
    },
    {
      id: 4,
      image: Luggage4,
      name: "Printed Multi-Color Medium Luggage Cover",
     
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 mt-7">
      <h1 className="text-3xl md:text-4xl font-bold text-center lg:m-10 m-4 text-gray-900">The Sale Of <span className="text-teal-800 font-light">Dreams</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-2 shadow-lg" data-aos="fade-up">
            <img
              src={product.image}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-center mt-6">
        <button className="bg-btn text-white px-9 py-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center">
          View Products
        </button>
      </div>
    </div>
  );
};


export default Luggage;
