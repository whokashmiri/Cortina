import Sofa_Blue from "../assets/Sofa_Blue.webp"
import Chair_Cover from "../assets/Chair_Cover.webp"
import Washable from "../assets/Washable.jpg"
import ReclinerCover from "../assets/ReclinerCover.webp"
import Luggage from "../assets/Luggage.webp"
import Sofa_Cover from "../assets/Sofa_Cover.webp"
import styled from 'styled-components';


export default function CardGrid() {
    const cards = [
      { image: Sofa_Blue, title: "HORECA" },
      { image: Chair_Cover, title: "DINING CHAIR COVER" },
      { image: Washable, title: "WASHABLE CURTAINS" },
      { image: ReclinerCover, title: "RECLINER COVER" },
      { image: Luggage, title: "TRAVEL ACCESSORIES" },
      { image: Sofa_Cover, title: "SOFA COVERS" }
    ];
  
    return (
        <div className="mt-9">
          <h1 className="text-3xl font-['Oswald'] text-center mb-8 text-gray-900">Make Your Home Beautiful</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-white group"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 text-white p-4  transition-opacity duration-300">
                  <h1 className="text-2xl font-['Oswald'] text-white mb-2">{card.title}</h1>
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
            ))}
          </div>
        </div>
      );
    }
    
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
    