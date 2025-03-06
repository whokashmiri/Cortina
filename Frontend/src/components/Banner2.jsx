import banner1 from "../assets/home_decor_desk.webp"
const Banner2 = () => {
    return (
      <div className="flex flex-col md:flex-row w-full gap-4 p-4">
        {/* First Image */}
        <div className="w-full h-full">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    );
  };
  
  export default Banner2;
  