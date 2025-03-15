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
            className="relative group overflow-hidden rounded-xl shadow-2xl cursor-pointer bg-gradient-to-b from-indigo-900 to-indigo-700"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Background Image */}
            <div
              className="h-96 bg-cover bg-center relative rounded-xl transition-transform duration-500"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {/* Premium Tag */}
              <div className="absolute flex flex-row top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-semibold px-3 py-2 rounded-lg shadow-lg" data-aos="fade-down">
                <Crown className="text-black mr-2" size={14} />
                <span className="text-black">Premium</span>
              </div>

              {/* Dark Overlay + Content (Shown on Hover) */}
              <motion.div
                className="absolute inset-0  flex flex-col justify-end p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {/* Price Tag */}
                <div className="bg-gradient-to-r w-fit from-btn to-teal-700 text-white font-semibold text-sm text-center py-2 px-6 rounded-3xl shadow-lg  hover:from-yellow-600 hover:to-yellow-800  transition-all duration-500 ease-in-out transform hover:scale-105 mb-3">
                  Price : $ {card.price}
                </div>

                {/* Add to Cart Button */}
                <button
                  className="relative w-fit flex items-center gap-1 bg-gradient-to-r from-btn to-teal-700 text-white  py-1 px-3 rounded-3xl shadow-lg hover:from-yellow-600 hover:to-yellow-800 hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
                >
                  <motion.span
                    className="bg-white text-gray-900 p-2 rounded-full shadow-md"
                    whileHover={{ y: -3, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <ShoppingCart className="w-3 h-3" />
                  </motion.span>
                  Add To Cart
                </button>
              </motion.div>
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
