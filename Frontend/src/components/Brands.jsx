import Featured from "../assets/Featured_Web2.webp";



const Brands = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 pt-4">
            {/* First Image */}
            <div className="w-full h-full">
              <img
                src={Featured}
                alt="Banner 1"
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
            
          </div>
  );
};

export default Brands;
