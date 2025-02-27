/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Tabs() {
  const tabs = ["CURTAINS","SOFA COVER","DINING CHAIR COVER","RECLINER COVER","TRAVEL ACC"
    ,"BESTSELLERS" , "GIFTING"
    ];
  const dropdownLinks = ["Option 1", "Option 2", "Option 3"];

  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="p-4  space-x-6 flex items-center justify-center ">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className="relative group cursor-pointer "
          onMouseEnter={() => setActiveTab(index)}
          onMouseLeave={() => setActiveTab(null)}
        >
          {/* Tab Title */}
          <h1 className="text-sm  hover:text-accent transition uppercase">{tab}</h1>

          {/* Dropdown */}
          <div
            className={`absolute left-0 mt-2 rounded-lg shadow-lg w-40 opacity-0 transform scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 z-10`}
          >
            {dropdownLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="block px-4 py-2 bg-secondary text-black hover:text-accent  justify-between items-center transform transition-all duration-200 hover:scale-105"
              >
                {link} <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">›</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
