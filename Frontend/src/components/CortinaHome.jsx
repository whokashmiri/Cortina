import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CortinaHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="bg-gray-100 text-gray-800 p-6 md:p-12 flex flex-col lg:flex-col justify-between items-start">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Left Section - Company Info */}
        <div className="w-full md:w-1/3 text-center md:text-left" data-aos="fade-up-right">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">LUXKASH PRIVATE LIMITED</h1>
          <p className="mt-4 text-lg md:text-sm text-justify md:pr-9">
            At <span className="font-semibold">LUXKASH</span>, We bring style and functionality to your home with a curated selection of high-quality products designed for both comfort and sophistication.
            From premium stretch sofa and recliner covers that offer a perfect fit to elegant curtains that add a touch of luxury, and versatile dining chair covers that enhance your space, every piece is crafted to transform your home with effortless elegance.
          </p>
        </div>

        {/* Middle Section - Google Map */}
        <div className="w-full md:w-1/3 text-center">
          <iframe
            title="Map to My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050.954477782946!2d74.43927901790236!3d34.30651944479686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e10fb052de0635%3A0xafe9d668178d6d84!2sGoExalt%20System%20LLC!5e0!3m2!1sen!2sin!4v1737605539647!5m2!1sen!2sin"
            className="w-full h-56 md:h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Section - Quick Links */}
        <div className="w-full md:w-1/3 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Quick Links</h1>
          <div className="mt-4 flex flex-col items-center md:items-start gap-2" data-aos="fade-left">
            {[
              "Track Order",
              "Blogs",
              "Become a Retailer",
              "Return/Exchange/Refund policy",
              "FAQs",
              "Terms of Service",
              "Shipping Policy",
              "About Us",
              "Contact Us",
            ].map((link, index) => (
              <li key={index} className="text-left list-none">{link}</li>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section - Placed Below */}
      <div className="w-full flex flex-col md:flex-row justify-between text-center mt-12 border-t pt-6">
        <p className="text-gray-700 text-sm">&copy; {year} LuxKash LLP. All rights reserved.</p>
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 text-sm">
          <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="text-gray-700 hover:text-gray-900">Cookie Policy</a>
          <span className="hidden md:inline">|</span>
          <a href="#" className="text-gray-700 hover:text-gray-900">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default CortinaHome;
