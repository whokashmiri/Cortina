import { useState } from "react";

const cards = [
  {
    title: "Explore Nature",
    subtitle: "Beauty of the Wild",
    description: "Discover the serenity and adventure of untouched landscapes.",
    image: "https://images.pexels.com/photos/26110235/pexels-photo-26110235/free-photo-of-man-on-boat-on-dal-lake-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "City Lights",
    subtitle: "Urban Adventures",
    description: "Experience the hustle and bustle of metropolitan life.",
    image: "https://images.pexels.com/photos/19598284/pexels-photo-19598284/free-photo-of-lamb-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Mountain Escape",
    subtitle: "Peak Experiences",
    description: "Reach new heights with breathtaking views and thrilling climbs.",
    image: "https://images.pexels.com/photos/8630102/pexels-photo-8630102.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Ocean Breeze",
    subtitle: "Feel the Waves",
    description: "Relax by the shore and soak in the calming sound of waves.",
    image: "https://images.pexels.com/photos/16045166/pexels-photo-16045166/free-photo-of-palm-trees-spring-trees-and-bushes-around-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Desert Wonders",
    subtitle: "Golden Horizons",
    description: "Vast dunes and mesmerizing sunsets await your journey.",
    image: "https://images.pexels.com/photos/19082137/pexels-photo-19082137/free-photo-of-autumn-leaves-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Hero() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">
      <div className="relative flex justify-center items-center w-full max-w-7xl gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-end p-8 text-white bg-cover bg-center cursor-pointer transition-all duration-500 rounded-full shadow-lg 
              ${hovered === index ? "w-screen h-[85vh] z-10 rounded-2xl scale-100" : "w-0 h-0 scale-0"} 
              ${hovered === null ? "w-[25%] h-[70vh]  scale-100" : ""}`}
            style={{ backgroundImage: `url(${card.image})` }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="absolute inset-0 rounded-3xl bg-opacity-40"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold">{card.title}</h1>
              <h3 className="text-xl font-semibold text-gray-300">{card.subtitle}</h3>
              <p className="mt-3 text-base text-gray-200">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
