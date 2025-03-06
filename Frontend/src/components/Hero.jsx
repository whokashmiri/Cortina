import bg from "../assets/bg-pf.webp"
import { Star } from "lucide-react";
export default function Hero() {
  return (
    <div>
    <div className="relative w-full h-screen bg-cover bg-center flex items-center text-left px-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="max-w-2xl  p-8 rounded-lg">
        <h1 className=" text-white text-4xl md:text-6xl font-bold mb-4">Where Imagination <br />Meets Interior Design</h1>
        <p className="text-white text-lg md:text-xl mb-6">At luxKash, we blend creativity and functionality to craft stunning, personalized interiors that reflect your unique taste. Our designs are as timeless.</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-9 py-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-500 flex items-center">
            Learn More
          </button>
          <button className=" text-white hover:text-black px-9 py-4 rounded-full border-2 font-semibold transition duration-300 hover:bg-yellow-500 flex items-center group">
            Contact Us
            <span className=" text-white hover:text-black ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </div >

    <div className="overflow-hidden  py-2 relative w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex min-w-full">
          {[...Array(20)].map((_, index) => (
            <span key={index} className="flex items-center text-btn text-lg font-semibold mx-4">
              <Star className="text-yellow-400 stroke-yellow-500 fill-yellow-500 mx-2" />
              AMAZING DEALS COMING SOON
            </span>
          ))}
        </div>
      </div>
    </div>
    <img className="" src={bg} alt=""  />
    </div>
  );
}
