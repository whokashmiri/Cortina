import { Star } from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Curtains = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1528822855841-e8bf3134cdc9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of 2 Velvet Room Darkening Solid Door Curtains- Green",
      rating: 4,
      price: "$20.00",
      oldPrice: "$30.00",
    },
    {
      id: 2,
      video: "https://videos.pexels.com/video-files/8943421/8943421-uhd_1440_2732_25fps.mp4", // Alternative direct video link for testing
      name: "Pack of 2 Velvet Room Darkening Solid Door Curtains- White",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1628428988931-14bc33099075?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pack of 2 Velvet Room Darkening Solid Door Curtains- Peach",
      rating: 3,
      price: "$18.00",
      oldPrice: "$28.00",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center m-12 text-gray-900">
        The Elegant Curtains: <span className="text-teal-800 font-light">Luxury and Grace</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="flip-up">
        {products.map((product) => (
          <div key={product.id} className="relative group border rounded-xl overflow-hidden shadow-lg">
            {product.video ? (
              <>
                {console.log("Video URL:", product.video)}
                <video autoPlay loop muted className="w-full h-96 object-cover">
                  <source src={product.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            ) : (
              <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
            )}
            {/* Overlay revealed on hover */}
            <div className="absolute bottom-0 right-0 w-full h-32 bg-black bg-opacity-60 flex flex-col justify-center p-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
              <p className="text-white font-serif text-sm">{product.name}</p>
              <div className="flex items-center mt-2">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" color="#facc15" />
                ))}
              </div>
              <div className="flex flex-row">
              <p className=" text-white font-bold">{product.price}</p>
              <p className="ml-3 text-gray-300 line-through">{product.oldPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-center mt-6">
        <button className="bg-btn text-white px-9 py-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center">
          View Products
        </button>
      </div>
    </div>
  );
};

export default Curtains;
