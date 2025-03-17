import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import logo from "../assets/cortinalogo.png";

const tabs = [
  "HOME",
  "CURTAINS",
  "SOFA COVER",
  "DINING CHAIR COVER",
  "RECLINER COVER",
  "TRAVEL ACC",
  "BESTSELLERS",
];

const taglines = [
  "Call Us: 98765412132",
  "Transform Your Home with Elegance",
  "Luxury Living, One Detail at a Time",
  "Timeless Beauty for Every Space",
  "Elevate Your Home, Elevate Your Life",
  "Chic Interiors, Effortless Style",
  "Artistry in Every Corner",
  "Where Comfort Meets Sophistication"
];

export default function Header() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab.replace(/ /g, "-").toLowerCase()}`);
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Tagline Section */}
      <div className="w-full fixed top-0 left-0 bg-yellow-400 px-6 py-3 z-50 flex justify-between items-center">
        {/* Animated Tagline */}
        <div className="flex items-center justify-center min-w-[300px]">
          <h1 className="mr-2 font-bold">*</h1>
          <h1 className="text-lg text-black text-center transition-opacity duration-500">
            {taglines[index]}
          </h1>
          <h1 className="ml-2 font-bold">*</h1>
        </div>
        {/* Static Text */}
        <h1 className="ml-10 text-lg font-semibold animate-pulse">
          WE ARE AVAILABLE FOR YOU: 98765412132
        </h1>
      </div>

    




      

      {/* Navbar Section */}
      <div>

      <nav className="fixed top-[96px] left-0 w-full bg-white z-30 text-black p-4 flex items-center justify-between">
        {/* Icons Section */}
        <div className="flex items-center gap-4 pl-7">
          <ShoppingCart className="cursor-pointer text-primary transition duration-300 hover:text-black hover:scale-105" size={20} />
          <User className="cursor-pointer text-primary transition duration-300 hover:text-black hover:scale-105" size={20} />
        </div>

        {/* Logo Section */}
        <div className="text-xl font-bold flex flex-row items-center">
          <img className="h-16" src={logo} alt="Logo" />
          <h1 className="text-4xl text-btn mt-2">LuxKash</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-64 sm:w-80 pr-7">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-black px-4 py-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </nav>



      

         {/* Tabs Section */}
         <div className="fixed top-[48px] left-0 w-full bg-white px-6 py-2 z-40 flex items-center justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-3 py-2 text-black font-semibold transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 ${
              activeTab === tab ? "after:w-full text-black" : "after:w-0 hover:after:w-full text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      </div>
   

     
      {/* Fixing Content Behind Navbar */}
      <div className="pt-[144px]">
      
      </div>
    </>
  );
}
