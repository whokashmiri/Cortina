import { HomeIcon, Heart, ThumbsUpIcon, IndianRupee } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const IconGrid = () => {
     useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-['Oswald'] text-center mb-8 text-gray-900">Reasons To Love Us</h1>
      <div className=" flex grid-cols-1 gap-4 lg:gap-28 ">
        <div className="flex flex-col items-center"  data-aos="fade-up-right">
          <HomeIcon className=" text-4xl" size={77} />
          <p className="mt-10 font-extrabold font-[Oswald] text-gray-700">100% Authentic</p>
        </div>
        <div className="flex flex-col items-center"  data-aos="fade-up-left">
          <Heart className=" text-4xl" size={77}/>
          <p className="mt-10 font-extrabold font-[Oswald] text-gray-700">Great design</p>
        </div>
        <div className="flex flex-col items-center"  data-aos="fade-down-right">
          <ThumbsUpIcon className=" text-4xl" size={77} />
          <p className="mt-10 font-extrabold font-[Oswald] text-gray-700">Trust of 10 Lakh Customers</p>
        </div>
        <div className="flex flex-col items-center"  data-aos="fade-down-left">
          <IndianRupee className=" text-4xl" size={77} />
          <p className="mt-10 font-extrabold font-[Oswald] text-gray-700">Easy Return And Refund</p>
        </div>
      </div>
    </div>
  );
};

export default IconGrid;
