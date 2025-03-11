
import { Apple, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";



const brandIcons = [
  Apple,

  Facebook,
  
  Twitter,
  Youtube,
  Linkedin,
];


const Brands = () => {
  return (
    <div className="py-10 bg-gray-100 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center m-12 text-gray-900 uppercase tracking-wide">
        Prestigious Partners: A Legacy of Trust & Excellence
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
        We take pride in collaborating with world-renowned brands, crafting elegance and innovation in every detail.
      </p>
      <div className="flex justify-center space-x-12">
        {brandIcons.map((Icon, index) => (
          <Icon key={index} size={90} className="text-gray-700 hover:text-gray-900 transition-colors duration-300" />
        ))}
      </div>
  </div>

  );
};

export default Brands ;
