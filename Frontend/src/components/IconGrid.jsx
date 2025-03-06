import { Combine, Diamond, DiamondIcon, DiscIcon, ExpandIcon, PercentDiamondIcon } from "lucide-react";

export default function IconGrid() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-gray-100">
      {/* First Div - Three Centered Buttons */}
      <div className="flex gap-6">
      <button className="flex items-center gap-2 px-8 py-3 text-lg font-semibold border-2 border-black rounded-full outline-none hover:cursor-pointer">
  <Diamond className="text-yellow-500 stroke-yellow-500 fill-yellow-500" /> Best Sellers
</button>
        <button className="flex items-center gap-2 px-8 py-3 text-lg font-semibold border-2 border-black rounded-full outline-none hover:cursor-pointer">
  <Combine className="text-yellow-500 stroke-yellow-500 fill-yellow-500" /> New Arrivals</button>
        <button className="flex items-center gap-2 px-8 py-3 text-lg font-semibold border-2 border-black rounded-full outline-none hover:cursor-pointer">
  <ExpandIcon className="text-yellow-500 stroke-yellow-500 fill-yellow-500" /> Exclusive
</button>


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
