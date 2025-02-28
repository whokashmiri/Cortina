import Sofa1 from "../assets/Sofa1.webp"
import styled from 'styled-components';
const Featured = () => {
    return (
      <div className="w-full flex flex-col items-center p-6">
        <h1 className="text-3xl font-['Oswald'] text-center mb-8 text-gray-900">Featured Product</h1>
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <img 
              src={Sofa1} 
              alt="Featured Product" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 w-full p-6 flex flex-col mt-6">
            <p className="text-gray-600 mb-2">Cortina</p>
            <h1 className=" text-xl mb-2">Elastic Digital Printed Sofa Cover 2 Seater-Multi.</h1>
            
            {/* Pricing */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl font-mono font-bold text-accent">$299</span>
              <span className="text-gray-500 font-mono line-through">$399</span>
            </div>
            
            {/* Size Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Size:</label>
              <select className="w-full p-2 border ">
                <option>2 Seater</option>
                <option>3 Seater</option>
              </select>
            </div>
            
            {/* Color Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Color:</label>
              <select className="w-full p-2 border ">
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
              </select>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-4 mb-4 flex-col">
            <StyledWrapper>
                    <button className="button w-full"  style={{ '--clr': '#A31621' }}>
                      <span className="button__icon-wrapper">
                        <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={10}>
                          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                        </svg>
                        <svg viewBox="0 0 14 15" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                        </svg>
                      </span>
                      ADD TO CART
                    </button>
                  </StyledWrapper>
                <StyledWrapper>
                    <button className="button w-full" style={{ '--clr': '#A31621' }}>
                      <span className="button__icon-wrapper">
                        <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={10}>
                          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                        </svg>
                        <svg viewBox="0 0 14 15" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                          <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
                        </svg>
                      </span>
                     BUY IT NOW
                    </button>
                  </StyledWrapper>
            </div>
            
            {/* View Details */}
            <a href="#" className="text-slate-950 text-underline-offset-8  text-start ">View Product Details</a>
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
  
  export default Featured;
  