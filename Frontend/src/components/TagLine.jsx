import { useState, useEffect } from "react";

const taglines = [
  "Call Us: 98765412132",
  "Transform Your Home with Elegance",
  "Luxury Living, One Detail at a Time",
  "Timeless Beauty for Every Space",
  "Elevate Your Home, Elevate Your Life",
  "Chic Interiors, Effortless Style",
  "Artistry in Every Corner",
  "Where Comfort Meets Sophistication"
];

export default function TagLine() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center bg-yellow-400 px-6 py-2">
      {/* Animated Text */}
      <div className="flex items-center justify-center min-w-[300px]">
        <h1 className="mr-2 font-bold">*</h1>
        <h1 className="text-lg text-black text-center transition-opacity duration-500">
          {taglines[index]}
        </h1>
        <h1 className="ml-2 font-bold">*</h1>
      </div>

      {/* Static Text */}
      <h1 className="ml-10 text-lg font-semibold animate-pulse">WE ARE AVAILABLE FOR YOU: 98765412132</h1>
    </div>
  );
}
