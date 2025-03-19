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
      type: 'video',
      video:
        "https://videos.pexels.com/video-files/7953152/7953152-hd_1080_1920_25fps.mp4",
      name: "Elastic Geometric Printed Non-Slip Dining Chair Covers Set of 4 - Purple",
      rating: 4,
      price: "$20.00",
      oldPrice: "$30.00",
    },
    {
      id: 2,
      type: 'video',
      video:
      "https://videos.pexels.com/video-files/4112662/4112662-hd_1080_1920_25fps.mp4",
      name: "Chair Showcase Video",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
    {
      id: 3,
      type: 'video',
      video:
        "https://videos.pexels.com/video-files/7185897/7185897-hd_1080_1920_30fps.mp4",
      name: "Pack of 6 Stretchable Dining Chair Cover with Frill - Maroon",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
    {
      id: 4,
      type: 'video',
      video:
        "https://videos.pexels.com/video-files/7857029/7857029-uhd_1440_2560_24fps.mp4",
      name: "Pack of 6 Stretchable Dining Chair Cover with Frill - Maroon",
      rating: 5,
      price: "$25.00",
      oldPrice: "$35.00",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
   <h1 className="text-3xl md:text-4xl font-bold text-center lg:m-10 m-4 text-gray-900">
  Exquisite Videos: <span className="text-teal-800 font-light">Curated from Our Instagram</span>
</h1>







      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="flip-up">
  {products.map((product) => (
    <div key={product.id} className="relative group border rounded-xl overflow-hidden shadow-lg">
      {/* Always use video, even if the product had an image */}
      <video autoPlay loop muted className="w-full h-96 object-cover">
        <source src={product.video || "/default-video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay revealed on hover */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-60 flex flex-col justify-center p-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
        <p className="text-white font-serif text-sm">{product.name}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5" color="#facc15" />
          ))}
        </div>
        <p className="mt-2 text-white font-bold">{product.price}</p>
        <p className="text-gray-300 line-through">{product.oldPrice}</p>
      </div> */}
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
