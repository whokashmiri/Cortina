import { Star } from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recliner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const products = [
    {
      id: 1,
      type: 'image',
      image:
        "https://images.pexels.com/photos/842960/pexels-photo-842960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Elastic Geometric Printed Non-Slip Dining Chair Covers Set of 4 - Purple",
      rating: 4,
      price: "$20.00",
      oldPrice: "$30.00",
    },
    {
      id: 2,
      type: 'video',
      video:
        "https://videos.pexels.com/video-files/8044819/8044819-hd_1080_1920_25fps.mp4",
      name: "Chair Showcase Video",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
    {
      id: 3,
      type: 'image',
      image:
        "https://images.pexels.com/photos/7368313/pexels-photo-7368313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Pack of 6 Stretchable Dining Chair Cover with Frill - Maroon",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-6xl font-bold text-center mb-8 text-gray-900">
      Stretchable & Premium Luggage: <span className="text-teal-800 font-light">Luxury Meets Flexibility</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="flip-up">
        {products.map((product) => (
          <div key={product.id} className="relative group border rounded-xl overflow-hidden shadow-lg">
            {product.type === 'video' ? (
              <video autoPlay loop muted className="w-full h-96 object-cover">
                <source src={product.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            )}
            {/* Overlay revealed on hover */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-60 flex flex-col justify-center p-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
              <p className="text-white font-serif text-sm">{product.name}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" color="#facc15" />
                ))}
              </div>
              <p className="mt-2 text-white font-bold">{product.price}</p>
              <p className="text-gray-300 line-through">{product.oldPrice}</p>
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

export default Recliner;
