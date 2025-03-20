import { useState, useEffect } from "react";
import { Eye, Heart, ShoppingBasket,  ShoppingCart,  X } from "lucide-react";

const products = [
   { id: 1, name: "Corsica Daiko Polyresin Bird Figurine", price: 20, image: "https://images.pexels.com/photos/3148596/pexels-photo-3148596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 2, name: "Monolith Marvel Ceramic Pebble Table Lamp", price: 25, image: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 3, name: "Alpine Polyresin Ganesha Fountain - 25x39cm", price: 30, image: "https://images.pexels.com/photos/3023934/pexels-photo-3023934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 4, name: "Fluorescence Victor Floor Lamp Revamped", price: 18, image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 5, name: "Corsica Cascade Polyresin Mini Elephant Fountain - 13x18cm", price: 22, image: "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 6, name: "Gloria Artificial Hanging Creepers in Pot", price: 27, image: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 7, name: "Corsica Eden Artificial Succulent in Glass Jar", price: 35, image: "https://images.pexels.com/photos/31018111/pexels-photo-31018111/free-photo-of-vibrant-yellow-daffodils-in-a-glass-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 8, name: "Artesia Devise Melamine Set of 3 Wall Plates", price: 40, image: "https://images.pexels.com/photos/31024737/pexels-photo-31024737/free-photo-of-colorful-ceramic-plates-displayed-on-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 9, name: "Iliano Ginko Metal Leaf Wall Accent", price: 15, image: "https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 10, name: "Gloria Artificial Plants in Ceramic Planter", price: 28, image: "https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 11, name: "Corsica Reflection Round Decorative Mirror - 54cm", price: 32, image: "https://images.pexels.com/photos/30993583/pexels-photo-30993583/free-photo-of-vibrant-red-tulips-in-glass-vase-on-pastel-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
   { id: 12, name: "Corsica Jaguar Polyresin African Lady with Figurine", price: 19, image: "https://images.pexels.com/photos/30923808/pexels-photo-30923808/free-photo-of-cozy-rustic-kitchen-with-tea-setup-and-bamboo-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 13, name: "Brezza  Canvas Flower and Bicycle Printed Picture Frames", price: 45, image: "https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 14, name: "Artistry Canvas African Lady Picture Frame - 50x75cm", price: 50, image: "https://images.pexels.com/photos/2086361/pexels-photo-2086361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 15, name: "Reflection Ferndale Metal Decorative Mirror - 51x72cm", price: 55, image: "https://images.pexels.com/photos/3585033/pexels-photo-3585033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 16, name: "Paloma Finch Ceramic Vase with Birds - Large", price: 60, image: "https://images.pexels.com/photos/10658143/pexels-photo-10658143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
 ];

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
  
    useEffect(() => {
      document.body.style.overflow = selectedProduct ? "hidden" : "auto";
    }, [selectedProduct]);
  
    const openModal = (product) => {
      setSelectedProduct(product);
      setQuantity(1);
    };
  
    const closeModal = () => setSelectedProduct(null);
  
    return (
      <div className="container mx-auto pt-7">
        <h1 className="text-3xl md:text-4xl font-bold text-center lg:m-10 m-4  text-gray-900">Exquisite Creations: <span className="text-teal-800 font-light">Luxury Meets Uniqueness</span> </h1>
        <div className="lg:pl-8 lg:pr-8 pl-4 pr-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative border rounded-lg shadow-md p-1 text-center overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-72 hover:scale-105 object-cover rounded-md" />
              
              {/* Favorite Button */}
              <div className="absolute top-2 right-2 flex items-center space-x-2 bg-btn hover:bg-teal-700 p-2 rounded-full shadow-md cursor-pointer">
                <Heart className="stroke-red-500 w-5 h-5" />
              </div>
  
              <h2 className="text-sm font-semibold mt-2 px-2">{product.name}</h2>
              
              <div className="flex justify-between items-center m-2">
                <ShoppingCart className="cursor-pointer text-gray-500 hover:text-black" />
                <p className="text-yellow-600 font-extrabold">Price: ${product.price}</p>
                <Eye className="cursor-pointer text-gray-500 hover:text-black" onClick={() => openModal(product)} />
              </div>
            </div>
          ))}
        </div>
  
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-300 p-2 rounded-lg shadow-lg w-[90%] max-w-2xl relative">
              <button className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-300" onClick={closeModal}>
                <X className="w-6 h-6 stroke-yellow-600 hover:stroke-yellow-800" />
              </button>
              <div className="flex  flex-col md:flex-row">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full md:w-1/2 h-72 object-cover rounded-md " />
                <div className="md:ml-6 mt-4 md:mt-0">
                  <h2 className="text-xl mt-6 font-semibold">{selectedProduct.name}</h2>
                  <p className="text-lg text-yellow-600 font-bold mt-2">Price: ${selectedProduct.price}</p>
                  
                  <div className="flex items-center mt-4">
                    <button className="text-2xl" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                    <span className="px-4 text-lg">{quantity}</span>
                    <button className="text-2xl" onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                  
                  <ShoppingBasket className="mt-4 h-10 w-10 p-2 bg-blue-500 rounded-full hover:bg-green-600 text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  