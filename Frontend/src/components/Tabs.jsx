import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/cortinalogo.png";

const tabs = [
  "HOME",
  "CURTAINS",
  "SOFA",
  "CHAIR",
  "RECLINER ",
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab.replace(/ /g, "-").toLowerCase()}`);
    setIsDropdownOpen(false); // Close dropdown on selection
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
      <div className="w-full fixed top-0 left-0 bg-yellow-400 px-4 sm:px-6 py-2 sm:py-3 z-50 flex flex-wrap justify-center sm:justify-between items-center text-sm sm:text-lg text-center">
        <div className="flex items-center justify-center min-w-[250px] sm:min-w-[300px]">
          <h1 className="mr-2 font-bold">*</h1>
          <h1 className="text-black text-center transition-opacity duration-500">
            {taglines[index]}
          </h1>
          <h1 className="ml-2 font-bold">*</h1>
        </div>

        <div className="w-full sm:w-auto text-center">
          <h1 className="text-xs sm:text-lg font-semibold animate-pulse">
            WE ARE AVAILABLE FOR YOU: 98765412132
          </h1>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="fixed top-[40px] sm:top-[50px] left-0 w-full bg-white z-40 text-black flex items-center justify-between mt-3 lg:mt-0 py-2 sm:py-3">
        {/* Icons Section */}
        <div className="flex items-center gap-2 sm:gap-4 pl-3 sm:pl-7">
          <ShoppingCart className="cursor-pointer text-primary hover:text-black transition-all duration-300" size={18} />
          <User className="cursor-pointer text-primary hover:text-black transition-all duration-300" size={18} />
        </div>

        {/* Logo Section */}
        <div className="flex flex-row items-center">
          <img className="h-10 sm:h-12" src={logo} alt="Logo" />
          <h1 className="text-xl sm:text-2xl font-thin text-btn mt-1 sm:mt-2">LuxKash</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-40 sm:w-64 md:w-80 pr-3 sm:pr-7">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-black px-3 py-1 sm:py-2 pl-8 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
        </div>
      </nav>

      {/* Tabs Section */}
      <div className="fixed top-[80px] sm:top-[90px] left-0 w-full bg-white px-4 sm:px-6 py-2 z-30 mt-4">
        {/* Mobile Dropdown */}
        <div className="sm:hidden">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 text-black font-semibold">
            <Menu size={22} />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg flex flex-col z-40 border-t border-gray-200"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className="px-4 py-3 text-black font-medium hover:bg-gray-100 text-left"
                  >
                    {tab}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

         {/* Desktop Tabs */}
      <div className="hidden sm:flex gap-4 md:mt-4 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-3 py-2  text-black  font-semibold transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 ${
              activeTab === tab ? "after:w-full text-black" : "after:w-0 hover:after:w-full text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      </div>

      {/* Fixing Content Behind Navbar */}
      <div className="pt-[120px] sm:pt-[130px]"></div>
    </>
  );
}
