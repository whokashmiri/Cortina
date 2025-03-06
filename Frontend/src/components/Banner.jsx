import half from "../assets/half.webp"
import half2 from "../assets/half2.webp"


const Banner = () => {
    return (
      <div className="flex flex-col md:flex-row w-full  gap-4 p-4">
        {/* First Image */}
        <div className=" md:w-1/2">
          <img
            src={half}
            alt="Banner 1"
            className="  object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Second Image */}
        <div className=" md:w-1/2 ">
          <img
            src={half2}
            alt="Banner 2"
            className=" object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };
  
  export default Banner;
  