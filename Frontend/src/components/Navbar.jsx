import { Search, ShoppingCart , User } from "lucide-react";
import logo from "../assets/cortinalogo.png"

export default function Navbar() {
  return (
    <nav className="bg-background text-white p-4 flex items-center justify-between">

        {/* Icons Section */}
        <div className="flex items-center gap-4 pl-7">
        <ShoppingCart  className="cursor-pointer text-primary transition duration-300 hover:text-black hover:scale-105" size={20} />
        <User className="cursor-pointer text-primary transition duration-300 hover:text-black hover:scale-105" size={20} />
      </div>

          {/* Logo Section */}
          <div className="text-xl font-bold flex flex-row">
        <img className="h-16" src={logo} alt="" />
        <h1 className="text-4xl text-btn mt-4">LuxKash</h1>
      </div>

     

      {/* Search Bar */}
      <div className="relative w-64 sm:w-80  pr-7">
        <input
          type="text"
          placeholder="Search..."
          className="w-full  text-black px-4 py-2 pl-10 rounded-full transition duration-300 outline-none focus:ring-1 focus:ring-accent"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>


   
    
    </nav>
  );
}
