import { Star } from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Chair = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const products = [
    {
      id: 1,
      type: 'image',
      image:
        "https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Elastic Geometric Printed Non-Slip Dining Chair Covers Set of 4 - Purple",
      rating: 4,
      price: "$20.00",
      oldPrice: "$30.00",
    },
    {
      id: 2,
      type: 'video',
      video:
        "https://videos.pexels.com/video-files/5824198/5824198-uhd_1440_2560_24fps.mp4",
      name: "Chair Showcase Video",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
    {
      id: 3,
      type: 'image',
      image:
        "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Pack of 6 Stretchable Dining Chair Cover with Frill - Maroon",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
    {
      id: 4,
      type: 'image',
      image:
        "https://images.pexels.com/photos/1125135/pexels-photo-1125135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Pack of 6 Stretchable Dining Chair Cover with Frill - Maroon",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center lg:m-10 m-4 text-gray-900">Thrones of Tomorrow
      :  <span className="text-teal-800 font-light">Redefining Luxury</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="flip-up">
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
            <div className="absolute bottom-0 right-0 w-full h-32 bg-black bg-opacity-60 flex flex-col justify-center p-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
              <p className="text-white  text-sm">{product.name}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
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
      {/* <div className="flex gap-4 justify-center mt-6">
        <button className="bg-btn text-white px-9 py-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center">
          View Products
        </button>
      </div> */}
    </div>
  );
};

export default Chair;
