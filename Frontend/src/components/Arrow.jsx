import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const Quick = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed left-0 sm:left-2 flex flex-col sm:flex-col items-start sm:items-center space-y-4 sm:space-y-6 z-40">
      <div className="fixed left-4 sm:bottom-6 bottom-7 sm:left-2 flex flex-col sm:flex-col items-start sm:items-center space-y-4 sm:space-y-6 z-40">
        {showButtons && (
          <>
            <button
              onClick={scrollToTop}
              className="bg-btn text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all"
            >
              <ArrowUp size={20} className="stroke-white"/>
            </button>
            <button
              onClick={scrollToBottom}
              className="bg-btn  p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all"
            >
              <ArrowDown size={20} className="stroke-white"/>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quick;
