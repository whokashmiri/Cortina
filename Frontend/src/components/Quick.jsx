import { useState } from "react";
import { PhoneCall, MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const Quick = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-btn text-white h-14 w-14 rounded-xl  p-3 flex items-center justify-center  shadow-lg hover:bg-yellow-600 transition-all"
      >
        {open ? <X size={24} className="stroke-white" /> : <PhoneCall size={24} className="stroke-white" />}
        
        

      </button>

      {/* Card */}
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="bg-white p-3 rounded-2xl shadow-xl w-80 mt-3"
        >
            <p className="text-teal-600">  7 Experts Online Now To Assist You</p>
          <h1 className="text-xl font-bold text-gray-800">Talk To A Expert Now</h1>
          <p className="text-gray-600 mt-2">
            We&apos;re here to help. Call us or chat on WhatsApp.
          </p>
          <div className="flex items-center gap-2 mt-3 text-blue-600 font-semibold">
            <PhoneCall size={20} />
            <p>+91 98765 43210</p>
          </div>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white flex items-center justify-center gap-2 p-2 mt-4 rounded-lg shadow hover:bg-green-600 transition-all"
          >
            <MessageCircle size={20} />
            Chat Now
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Quick;
