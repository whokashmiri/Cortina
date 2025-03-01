const CortinaHome = () => {
    return (
      <div className="bg-gray-100 text-gray-800 p-6 md:p-12 flex flex-col lg:flex-row justify-between items-start">
        {/* Left Section - Company Info */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold font-['Oswald'] text-gray-900">
            BHAIRAVNATH EXIM PRIVATE LIMITED
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            At <span className="font-semibold">Cortina</span>, we bring style and functionality to your home with a curated range of high-quality products.
          </p>
          <p className="mt-2 text-lg md:text-xl">
            From premium stretch sofa and recliner covers to elegant curtains and versatile dining chair covers, our collection enhances the comfort and aesthetics of your space.
          </p>
        </div>
  
        {/* Middle Section - Categories */}
        <div className="w-full lg:w-1/3 text-center">
          <h2 className="text-xl font-semibold font-['Oswald'] text-gray-900">OUR CATEGORIES</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {["CURTAINS", "SOFA COVER", "DINING CHAIR COVER", "RECLINER COVER", "TRAVEL ACC", "BESTSELLERS", "GIFTING"].map((category, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
                {category}
              </div>
            ))}
          </div>
        </div>
  
        {/* Right Section - Quick Links */}
        <div className="w-full lg:w-1/3 text-center">
          <h2 className="text-xl font-semibold font-['Oswald'] text-gray-900">Quick Links</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
            {["Track Order", "Blogs", "Become a Retailer", "Return/Exchange/Refund policy", "FAQS", "Terms of Service", "Shipping policy", "About us", "Contact us"].map((link, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CortinaHome;