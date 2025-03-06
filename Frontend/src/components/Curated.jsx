import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Curated = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="flex items-center justify-between p-10">
      <div className="w-1/2"  data-aos="flip-up">
        <h1 className="text-5xl font-bold">About Our Interior <br  /> <span className="text-teal-800 font-light">Design</span> </h1>
      </div>
      <div className="w-1/2"  data-aos="flip-down">
        <p>The future of interior design is a seamless fusion of technology and culture—where luxury meets convenience, spaces adapt to lifestyles, and nature harmonizes with modernity. True opulence now lies in wellness, comfort, and elegance.</p>
      </div>
    </div>
  );
};

export default Curated;