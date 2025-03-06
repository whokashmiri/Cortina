/* eslint-disable react/prop-types */
import { Combine, Diamond,  ExpandIcon } from "lucide-react";
import { useEffect, useState } from "react";

const productsData = {
  BestSellers: [
    { id: 1, name: "Product 1", price: "$50", img: "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Product 2", price: "$60", img: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Product 3", price: "$70", img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Product 4", price: "$80", img: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Product 5", price: "$90", img: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Product 6", price: "$100", img: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "Product 7", price: "$110", img: "https://images.pexels.com/photos/1080719/pexels-photo-1080719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ],
  NewArrivals: [
    { id: 8, name: "New Item 1", price: "$40", img: "https://images.pexels.com/photos/1046639/pexels-photo-1046639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 9, name: "New Item 2", price: "$45", img: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 10, name: "New Item 3", price: "$55", img: "https://images.pexels.com/photos/163046/welcome-to-our-home-welcome-tablet-an-array-of-163046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 11, name: "New Item 4", price: "$65", img: "https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 12, name: "New Item 5", price: "$75", img: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 13, name: "New Item 6", price: "$85", img: "https://images.pexels.com/photos/1148450/pexels-photo-1148450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ],
  Exclusive: [
    { id: 14, name: "Exclusive 1", price: "$200", img: "https://images.pexels.com/photos/1543447/pexels-photo-1543447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 15, name: "Exclusive 2", price: "$220", img: "https://images.pexels.com/photos/4440220/pexels-photo-4440220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 16, name: "Exclusive 3", price: "$240", img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 17, name: "Exclusive 4", price: "$260", img: "https://images.pexels.com/photos/4112237/pexels-photo-4112237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 18, name: "Exclusive 5", price: "$280", img: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 19, name: "Exclusive 6", price: "$300", img: "https://images.pexels.com/photos/1510173/pexels-photo-1510173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  ],
};

const ProductModal = ({ title, products, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-slate-300 rounded-lg p-3 w-full max-w-2xl h-[80vh] overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button onClick={onClose} className="text-gray-700 hover:text-red-500 text-2xl">
          &times;
        </button>
      </div>
      <div className="h-[calc(100%-3rem)] overflow-y-auto grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default function IconGrid() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-gray-100">
      {/* First Div - Three Centered Buttons */}
      <div className="flex gap-6">
      <button
        className="flex items-center gap-2 px-8 py-3 text-lg font-semibold border-2 border-black rounded-full hover:cursor-pointer"
        onClick={() => openModal("BestSellers")}
      >
        <Diamond className="text-yellow-400 stroke-yellow-500 " /> Best Sellers
      </button>
      <button
        className="flex items-center gap-2 px-8 py-3 text-lg font-semibold border-2 border-black rounded-full hover:cursor-pointer"
        onClick={() => openModal("NewArrivals")}
      >
        <Combine className="text-yellow-400 stroke-yellow-500" /> New Arrivals
      </button>
      <button
        className="flex items-center gap-2 px-8 py-3 text-lg font-semibold border-2 border-black rounded-full hover:cursor-pointer"
        onClick={() => openModal("Exclusive")}
      >
        <ExpandIcon className="text-yellow-400 stroke-yellow-500" /> Exclusive
      </button>

      {selectedCategory && (
        <ProductModal
          title={selectedCategory.replace(/([A-Z])/g, " $1")} // Format title
          products={productsData[selectedCategory]}
          onClose={closeModal}
        />
      )}
    </div>

      {/* Second Div - 6 Buttons (3 per row) */}
      <div className="grid grid-cols-3 gap-6">
  <button className="flex items-center gap-2 px-16 py-5 text-lg font-semibold border-2 border-slate-400 rounded-3xl outline-none hover:cursor-pointer">
    <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/910458/pexels-photo-910458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Icon 1" />
    <span className="text-gray-700 font-medium">Option 1</span>
  </button>
  <button className="flex items-center gap-2 px-16 py-5 text-lg font-semibold border-2 border-slate-400 rounded-3xl outline-none hover:cursor-pointe">
    <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/30969443/pexels-photo-30969443/free-photo-of-elegant-woven-baskets-with-abstract-patterns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Icon 2" />
    <span className="text-gray-700 font-medium">Option 2</span>
  </button>
  <button className="flex items-center gap-2 px-16 py-5 text-lg font-semibold border-2 border-slate-400 rounded-3xl outline-none hover:cursor-pointe">
    <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Icon 3" />
    <span className="text-gray-700 font-medium">Option 3</span>
  </button>
  <button className="flex items-center gap-2 px-16 py-5 text-lg font-semibold border-2 border-slate-400 rounded-3xl outline-none hover:cursor-pointe">
    <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/5546812/pexels-photo-5546812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Icon 4" />
    <span className="text-gray-700 font-medium">Option 4</span>
  </button>
  <button className="flex items-center gap-2 px-16 py-5 text-lg font-semibold border-2 border-slate-400 rounded-3xl outline-none hover:cursor-pointe">
    <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/6964470/pexels-photo-6964470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Icon 5" />
    <span className="text-gray-700 font-medium">Option 5</span>
  </button>
  <button className="flex items-center gap-2 px-16 py-5 text-lg font-semibold border-2 border-slate-400 rounded-3xl outline-none hover:cursor-pointe">
    <img className="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/15770567/pexels-photo-15770567/free-photo-of-pink-tulips-in-bucket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Icon 6" />
    <span className="text-gray-700 font-medium">Option 5</span>
  </button>
</div>

    </div>
  );
}
