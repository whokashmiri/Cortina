import { motion } from "framer-motion";

const cards = [
  {
    title: "Innovative Solutions",
    description: "Crafting unique and efficient digital experiences.",
    image:"https://images.pexels.com/photos/12506515/pexels-photo-12506515.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "h-64"
  },
  {
    title: "Creative Designs",
    description: "Bringing ideas to life with stunning visuals.",
    image: "https://images.pexels.com/photos/27920699/pexels-photo-27920699/free-photo-of-minimalist-setup-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "h-80"
  },
  {
    title: "Seamless Integration",
    description: "Ensuring smooth and efficient workflows.",
    image: "https://videos.pexels.com/video-files/5823707/5823707-uhd_1440_2560_24fps.mp4",
    isVideo: true,
    size: "h-72 mt-6"
  },
  {
    title: "Scalable Architecture",
    description: "Building solutions that grow with your needs.",
    image: "https://images.pexels.com/photos/27471032/pexels-photo-27471032/free-photo-of-code-ca243-and-link-in-bio-blossoms-as-lively-as-summer-decorative-throw-blankets-for-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "h-96 "
  },
];

export default function Featured() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        The Featured Products:<span className="text-teal-800 font-light">A Showcase of Elegance and Innovation

</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer ${card.size}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-115 ${card.size}`} style={{ backgroundImage: `url(${card.image})` }}>
              {card.isVideo && (
                <motion.video
                  src={card.image}
                  autoPlay
                  loop
                  muted
                  className="w-full object-cover absolute inset-0"
                />
              )}
            </div>
            <div className="absolute top-0 right-0 w-full h-1/2 bg-black bg-opacity-60 flex flex-col justify-center p-4 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
              <h3 className="text-lg text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{card.title}</h3>
              <p className="text-sm text-white  mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {card.description}
                <motion.span
                  className="inline-block text-white "
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >

                </motion.span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 justify-center mt-6">
        <button className="bg-btn text-white px-9 py-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-600 flex items-center">
          View Products
        </button>
      </div>
    </div>
  );
}
