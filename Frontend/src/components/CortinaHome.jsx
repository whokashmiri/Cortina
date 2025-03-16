import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CortinaHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  let date = new Date()
  let year = date.getFullYear()
  

  return (
    <div className="bg-gray-100  text-gray-800 p-6 md:p-12 flex flex-col  lg:flex-col justify-between items-start">
      {/* Left Section - Company Info */}
      <div className=" flex flex-row  lg:flex-row">
      <div className="w-full lg:w-1/3 text-center lg:text-left" data-aos="fade-up-right">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">LUXKASH PRIVATE LIMITED</h1>
        <p className="mt-4 text-lg md:text-sm text-justify pr-9">
          At <span className="font-semibold">LUXKASH</span>, We bring style and functionality to your home with a curated selection of high-quality products designed for both comfort and sophistication.
          From premium stretch sofa and recliner covers that offer a perfect fit to elegant curtains that add a touch of luxury, and versatile dining chair covers that enhance your space, every piece is crafted to transform your home with effortless elegance.
        </p>
      </div>

      {/* Middle Section - Newsletter */}
      <div className="w-full lg:w-1/3 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Newsletter</h1>
        <p className="mt-3">Subscribe to receive updates, access to exclusive deals, and more.</p>
        <input type="email" placeholder="Enter Your Email Address " className="pt-2 pb-2 pr-14 pl-8 mt-3 w-full border-2 outline-0" />
        <button className="bg-btn text-white px-9 py-4 mt-6 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center uppercase tracking-widest">
          Subscribe
        </button>
      </div>

      {/* Right Section - Quick Links */}
      <div className="w-full lg:w-1/3 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Quick Links</h1>
        <div className="mt-4 w-full flex flex-col items-start gap-2" data-aos="fade-left">
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
            <li key={index} className="w-full text-left list-none ml-10">{link}</li>
          ))}
        </div>
      </div>
      </div>

      {/* Footer Section - Placed Below */}
      <div className="w-full flex flex-row justify-between text-center mt-12 border-t pt-6">
        <p className="text-gray-700 text-sm">
          &copy; {year} LuxKash LLP. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="text-gray-700 hover:text-gray-900">Cookie Policy</a>
          <span>|</span>
          <a href="#" className="text-gray-700 hover:text-gray-900">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default CortinaHome;
