import { motion } from "framer-motion";
import { useEffect } from "react";
import { Crown, ShoppingCart} from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [
  {
    price: "8990",
    description: "Crafting unique and efficient digital experiences.",
    image:"https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg",
    size: "h-full"
  },
  {
    price: "11111",
    description: "Bringing ideas to life with stunning visuals.",
    image: "https://images.pexels.com/photos/27920699/pexels-photo-27920699/free-photo-of-minimalist-setup-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "h-full"
  },
  {
    price: "1000",
    description: "Ensuring smooth and efficient workflows.",
    image: "https://images.pexels.com/photos/1366872/pexels-photo-1366872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isVideo: true,
    size: "h-full"
  },
  {
    price: "9999",
    description: "Building solutions that grow with your needs.",
    image: "https://images.pexels.com/photos/27471032/pexels-photo-27471032/free-photo-of-code-ca243-and-link-in-bio-blossoms-as-lively-as-summer-decorative-throw-blankets-for-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "h-96 "
  },
  {
    price: "8890",
    description: "Crafting unique and efficient digital experiences.",
    image:"https://images.pexels.com/photos/12506515/pexels-photo-12506515.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "h-full"
  },
  {
    price: "7990",
    description: "Bringing ideas to life with stunning visuals.",
    image: "https://images.pexels.com/photos/4065159/pexels-photo-4065159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "h-96"
  },
  {
    price: "10900",
    description: "Ensuring smooth and efficient workflows.",
    image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    isVideo: true,
    size: "h-full"
  },
  {
    price: "9990",
    description: "Building solutions that grow with your needs.",
    image: "https://images.pexels.com/photos/4112558/pexels-photo-4112558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "h-full "
  },
];

export default function Featured() {
   useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center m-12 text-gray-900">
        The Premium Products: <span className="text-teal-800 font-light">Exquisite Luxury Collection

</span>
      </h1>

      <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <div
              className="h-96 bg-cover bg-center relative transition-transform duration-300 rounded-xl"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {/* Premium Tag */}
              <div className="absolute flex flex-row top-3 left-3 bg-yellow-300 text-black text-xs font-semibold p-2  rounded-lg" data-aos="fade-down">
                <h1 className=""> Premium</h1> <Crown className="ml-2 "  size={14}/>
              </div>
              

              {/* Overlay for readability */}
              <div className="absolute inset-0  flex flex-col justify-end clip-custom text-white  duration-300">
                <div className="bg-white w-full rounded-r-2xl text-center p-2 " 
                  style={{ clipPath: "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)" }}

                >
                <p className="text-lg rounded-r-2xl  text-black font-semibold w-fit  "> ${card.price}</p>
                </div>
                
                <button 
  className="relative m-3 flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-medium py-3 px-8 rounded-l-full rounded-r-xl shadow-lg hover:from-gray-700 hover:to-gray-500 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
  style={{ clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)" }}
>
  {/* Animated Cart Icon */}
  <motion.span 
    className="bg-white text-gray-900 p-2 rounded-full shadow-md"
    whileHover={{ y: -3, rotate: -10 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <ShoppingCart className="w-5 h-5" />
  </motion.span>
  Add To Cart
</button>




              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

      <div className="flex gap-4 justify-center mt-6">
        <button className="bg-btn text-white px-9 py-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center">
          View Products
        </button>
      </div>
    </div>
  );
}
