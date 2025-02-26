const Curated = () => {
    const cards = [
      { title: "Gifts Under", desc: "499", bg: "bg-[url('https://images.pexels.com/photos/11118148/pexels-photo-11118148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" },
      { title: "Gifts Under", desc: "799", bg: "bg-[url('https://images.pexels.com/photos/29463065/pexels-photo-29463065/free-photo-of-festive-christmas-gift-display-with-ornaments.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" },
      { title: "Gifts Under", desc: "999", bg: "bg-[url('https://images.pexels.com/photos/10614158/pexels-photo-10614158.jpeg')] bg-cover bg-center" },
      { title: "Gifts Under", desc: "1499", bg: "bg-[url('https://images.pexels.com/photos/29569495/pexels-photo-29569495/free-photo-of-elegant-red-gift-box-with-heart-rings-for-romantic-occasions.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" },
      { title: "Gifts Under", desc: "1999", bg: "bg-[url('https://images.pexels.com/photos/15538307/pexels-photo-15538307/free-photo-of-still-life-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" },
      { title: "Gifts Under", desc: "2499", bg: "bg-[url('https://images.pexels.com/photos/19411554/pexels-photo-19411554/free-photo-of-a-red-box-with-red-clothes-on-red-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" }, 
    ];
  
    return (
      <div className="container mx-auto px-4 mt-14">
        <h1 className="text-3xl font-['Oswald'] text-center mb-8 text-gray-900">Curated Gifts for You</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 h-48">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 rotate-6`}
            >
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-white to-white bg-clip-text text-transparent mb-2">{card.title}</h3>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-600 to-emerald-600 bg-clip-text text-transparent">{card.desc}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Curated;
