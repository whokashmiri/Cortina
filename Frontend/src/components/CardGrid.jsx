
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

 

export default function CardGrid() {

  useEffect(() => {
    AOS.init();
  }, [])

 
    return (
      <div className="grid grid-cols-2 gap-4 p-4 h-[100vh]">
      {/* First div with a single image */}
      <div>
        <img 
          src="https://images.pexels.com/photos/4112235/pexels-photo-4112235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Main" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Second div with two stacked images */}
      <div className="flex flex-col gap-4">
        <img 
          src="https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Top" 
          className="w-full h-1/2 object-cover rounded-lg"
        />
        <img 
          src="https://images.pexels.com/photos/1248582/pexels-photo-1248582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Bottom" 
          className="w-full h-1/2 object-cover rounded-lg"
        />
      </div>
    </div>
      );
    }
