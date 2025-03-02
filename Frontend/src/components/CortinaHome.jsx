import {useEffect} from "react";
import styled from 'styled-components';


import AOS from 'aos';
import 'aos/dist/aos.css';

const CortinaHome = () => {
  useEffect(() => {
      AOS.init();
    }, [])
    return (
      <div className="bg-gray-100 text-gray-800 p-6 md:p-12 flex flex-col lg:flex-row justify-between items-start">
        {/* Left Section - Company Info */}
        <div className="w-full lg:w-1/3 text-center lg:text-left" data-aos="fade-up-right">
          <h1 className="text-2xl md:text-4xl font-bold font-['Oswald'] text-gray-900">
            BHAIRAVNATH EXIM PRIVATE LIMITED
          </h1>
          <p className="mt-4 text-lg md:text-sm text-justify font-sans pr-9">
            At <span className="font-semibold">Cortina</span>, we bring style and functionality to your home with a curated range of high-quality products.
        
            From premium stretch sofa and recliner covers to elegant curtains and versatile dining chair covers, our collection enhances the comfort and aesthetics of your space.
          </p>
          <div className="mt-10">
          <h3 className="mt-3">Newsletter</h3>
          <p className="mt-3">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <input type="email"  placeholder="Enter Your Email Address " className="pt-2 pb-2 pr-14 pl-8 mt-3  border-2 outline-0"/>
          <StyledWrapper>
                    <button className="button mt-4" style={{ '--clr': '#A31621' }}>
                      <span className="button__icon-wrapper">
                        <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={10}>
                          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                        </svg>
                        <svg viewBox="0 0 14 15" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                        </svg>
                      </span>
                      VIEW PRODUCTS
                    </button>
                  </StyledWrapper>
          </div>
          
        </div>
  
        {/* Middle Section - Categories */}
        <div className="w-full lg:w-1/3 text-center">
          <h2 className="text-xl font-semibold font-['Oswald'] text-gray-900">OUR CATEGORIES</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2" data-aos="fade-up-right">
            {["CURTAINS", "SOFA COVER", "DINING CHAIR COVER", "RECLINER COVER", "TRAVEL ACC", "BESTSELLERS", "GIFTING"].map((category, index) => (
              <div key={index} className=" p-3 rounded-lg shadow-md">
                {category}
              </div>
            ))}
          </div>
        </div>
  
        {/* Right Section - Quick Links */}
        <div className="w-full lg:w-1/3 text-center">
          <h2 className="text-xl font-semibold font-['Oswald'] text-gray-900">Quick Links</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2" data-aos="fade-left">
            {["Track Order", "Blogs", "Become a Retailer", "Return/Exchange/Refund policy", "FAQS", "Terms of Service", "Shipping policy", "About us", "Contact us"].map((link, index) => (
              <div key={index} className=" p-3 rounded-lg shadow-md">
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };


  const StyledWrapper = styled.div`
.button {
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  border: none;
  cursor: pointer;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--clr);
  color: #fff;
  border-radius: 10rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s;
}

.button__icon-wrapper {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  color: var(--clr);
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.button:hover {
  background-color: #000;
}

.button:hover .button__icon-wrapper {
  color: #000;
}

.button__icon-svg--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover .button__icon-svg:first-child {
  transition: transform 0.3s ease-in-out;
  transform: translate(150%, -150%);
}

.button:hover .button__icon-svg--copy {
  transition: transform 0.3s ease-in-out 0.1s;
  transform: translate(0);
}
`;
  
  export default CortinaHome;