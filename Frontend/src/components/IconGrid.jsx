/* eslint-disable react/prop-types */
import { Combine, Diamond, ExpandIcon,  Star } from "lucide-react";
import { useState } from "react";

const productsData = {
  BestSellers: [
    { id: 1, name: "Odalis Decorative Bottle", description:"Mirror, 18x21 cm 10 pack (7 1/8x8 1/4  10 pack", price: "$50", img: "https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg" },
    { id: 2, name: "Pietro Decorative Bottle", price: "$60", img: "https://images.pexels.com/photos/8022977/pexels-photo-8022977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 3, name: "Eloria Decorative Glass Vase", price: "$70", img: "https://images.pexels.com/photos/30818059/pexels-photo-30818059/free-photo-of-two-people-sharing-gourmet-meal-at-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 4, name: "Isidro Decorative Glass Bottle", price: "$80", img: "https://images.pexels.com/photos/8290032/pexels-photo-8290032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 5, name: "Luis Decorative Glass Vase - Big", price: "$90", img: "https://images.pexels.com/photos/30888208/pexels-photo-30888208/free-photo-of-cozy-morning-with-latte-art-and-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 6, name: "Lía Decorative Glass Vase", price: "$100", img: "https://images.pexels.com/photos/30734874/pexels-photo-30734874/free-photo-of-charming-outdoor-restaurant-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    // { id: 7, name: "Divan Gold Bathroom Accessories", price: "$110", img: "https://images.pexels.com/photos/30875287/pexels-photo-30875287/free-photo-of-dreamy-portrait-of-woman-with-abstract-colors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ],
  NewArrivals: [
    { id: 8, name: "New Item 1", price: "$40", img: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 9, name: "New Item 2", price: "$45", img: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 10, name: "New Item 3", price: "$55", img: "https://images.pexels.com/photos/31018111/pexels-photo-31018111/free-photo-of-vibrant-yellow-daffodils-in-a-glass-vase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 11, name: "New Item 4", price: "$65", img: "https://images.pexels.com/photos/31062844/pexels-photo-31062844/free-photo-of-vibrant-abstract-blue-and-orange-fluid-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 12, name: "New Item 5", price: "$75", img: "https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 13, name: "New Item 6", price: "$85", img: "https://images.pexels.com/photos/30993583/pexels-photo-30993583/free-photo-of-vibrant-red-tulips-in-glass-vase-on-pastel-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ],
  Exclusive: [
    { id: 14, name: "Exclusive 1", price: "$200", img: "https://images.pexels.com/photos/31045613/pexels-photo-31045613/free-photo-of-charming-kitchen-with-cat-and-open-shelves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 15, name: "Exclusive 2", price: "$220", img: "https://images.pexels.com/photos/1008692/pexels-photo-1008692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 16, name: "Exclusive 3", price: "$240", img: "https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 17, name: "Exclusive 4", price: "$260", img: "https://images.pexels.com/photos/31058475/pexels-photo-31058475/free-photo-of-elegant-indoor-setting-with-art-and-floral-arrangement.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 18, name: "Exclusive 5", price: "$280", img: "https://images.pexels.com/photos/7552373/pexels-photo-7552373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 19, name: "Exclusive 6", price: "$300", img: "https://images.pexels.com/photos/31043486/pexels-photo-31043486/free-photo-of-modern-indoor-plant-in-stylish-pot-on-countertop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ],
};

const getRandomColor = (index) => {
  const colors = ["#255F38", "#205781", "#57B4BA", "#FA7070", "#625020", "#0c35"]; // Define different colors
  return colors[index % colors.length]; // Cycle through colors to avoid repetition
};

export default function IconGrid() {
  const [selectedCategory, setSelectedCategory] = useState("BestSellers");

  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-7 ">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button className={`flex items-center gap-2 px-6 py-2 text-base md:px-8 md:py-3 md:text-lg font-semibold border-2 rounded-full ${selectedCategory === "BestSellers" ? "bg-black text-white" : "border-black"}`} onClick={() => setSelectedCategory("BestSellers")}>
          <Diamond className="text-yellow-400 stroke-yellow-500" /> Best Sellers
        </button>
        <button className={`flex items-center gap-2 px-6 py-2 text-base md:px-8 md:py-3 md:text-lg font-semibold border-2 rounded-full ${selectedCategory === "NewArrivals" ? "bg-black text-white" : "border-black"}`} onClick={() => setSelectedCategory("NewArrivals")}>
          <Combine className="text-yellow-400 stroke-yellow-500" /> New Arrivals
        </button>
        <button className={`flex items-center gap-2 px-6 py-2 text-base md:px-8 md:py-3 md:text-lg font-semibold border-2 rounded-full ${selectedCategory === "Exclusive" ? "bg-black text-white" : "border-black"}`} onClick={() => setSelectedCategory("Exclusive")}>
          <ExpandIcon className="text-yellow-400 stroke-yellow-500" /> Exclusive
        </button>
      </div>

      {/* Product Grid */}
      <div className="flex flex-col items-center justify-center ">
  <div className="grid justify-center items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-screen lg:px-8 lg:py-8 pl-4 pr-4">
    {productsData[selectedCategory].map((product, index) => {
      const topColor = getRandomColor(index);
      return (
        <div
          key={product.id}
          className="relative border h-96 w-full max-w-full px-4 py-4  rounded-lg shadow-md overflow-hidden bg-white"
        >
          <div
            className="absolute top-0 left-0 w-full h-1/2 transform rotate-[-10deg] origin-bottom-left"
            style={{ backgroundColor: topColor }}
          ></div>
          <img
            src={product.img}
            alt={product.name}
            className="absolute mt-7 top-10 right-12 w-60 h-60 object-cover rounded-full border-2 border-white shadow-md"
          />
          <div className="absolute top-4 left-4 text-white z-10">
            <h1 className="text-sm px-2 rounded-3xl shadow-lg bg-black text-white font-semibold">{product.name}</h1>
            <div className="flex flex-row">
              <p className="text-sm mr-2 text-yellow-300 font-semibold">₹{product.price}</p>
            </div>
          </div>
          <div className="absolute bottom-2 left-2 flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <p className="text-sm text-gray-800">4.5</p>
          </div>
          <button className="absolute bottom-2 right-2 bg-btn text-white px-4 py-2 text-xs font-semibold rounded-3xl shadow-md hover:bg-teal-600 transition">
            Add to Cart
          </button>
        </div>
      );
    })}
  </div>
      </div>


    </div>
  );
}
