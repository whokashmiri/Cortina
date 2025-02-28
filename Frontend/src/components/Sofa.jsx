import { Star } from "lucide-react";
import styled from 'styled-components';
import Sofa1 from "../assets/Sofa1.webp"
import Sofa2 from "../assets/Sofa2.webp"
import Sofa3 from "../assets/Sofa3.webp"
import Sofa4 from "../assets/Sofa4.webp"
import {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';



const Sofa = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  const products = [
    {
      id: 1,
      image: Sofa1,
      name: "ElasticDigital Printed Sofa Cover 3 Seater-Mult",
      rating: 4,
      price: "$20.00",
      oldPrice: "$30.00",
    },
    {
      id: 2,
      image: Sofa2,
      name: "Reversible 3 Seater Sofa Cover-Blue & Brown",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
    {
      id: 3,
      image: Sofa3,
      name: "Stretchable Polyester Printed Recliner Cover",
      rating: 3,
      price: "$18.00",
      oldPrice: "$28.00",
    },
    {
      id: 4,
      image: Sofa4,
      name: "Reversible 3 Seater Sofa Cover-Brown & Grey",
      rating: 4,
      price: "$22.00",
      oldPrice: "$32.00",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-['Oswald'] text-center mb-8 text-gray-900">Premium Stretch Sofa Covers for 3 Seaters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="flip-right">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl p-2 shadow-lg bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover rounded-2xl"
            />
            <p className="mt-4 font-serif text-sm">{product.name}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < product.rating ? "text-yellow-400" : "text-yellow-500"}`}
                />
              ))}
            </div>
            <p className="mt-2 text-sm font-bold">{product.price}</p>
            <p className="text-gray-500 line-through">{product.oldPrice}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
      <StyledWrapper>
                    <button className="button" style={{ '--clr': '#A31621' }}>
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
export default Sofa;
