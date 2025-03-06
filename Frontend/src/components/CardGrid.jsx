
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
          src="https://images.pexels.com/photos/2227838/pexels-photo-2227838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Main" 
          className="w-full h-[100vh] object-cover rounded-lg" data-aos="fade-right"
        />
      </div>
      {/* Second div with two stacked images */}
      <div className="flex flex-col gap-4 justify-center">
        <img 
          src="https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Top" 
          className="w-full h-[45vh]  object-cover rounded-lg" data-aos="fade-up"
        />
        <img 
          src="https://images.pexels.com/photos/17390532/pexels-photo-17390532/free-photo-of-yellow-wooden-armchair-on-sunlit-lawn.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Bottom" 
          className="w-full h-[40vh] object-cover rounded-lg" data-aos="fade-down"
        />
      </div>
    </div>
      );
    }
