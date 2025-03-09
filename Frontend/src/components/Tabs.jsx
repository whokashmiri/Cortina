import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = [
  "HOME",
  "CURTAINS",
  "SOFA COVER",
  "DINING CHAIR COVER",
  "RECLINER COVER",
  "TRAVEL ACC",
  "BESTSELLERS",
  
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab.replace(/ /g, "-").toLowerCase()}`);
  };

  return (
    <div  className="p-4  space-x-4 flex items-center justify-center ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-2 py-2 rounded-2xl transition-all duration-300 ${
            activeTab === tab
              ? "bg-btn text-white rounded-2xl"
              : " text-black hover:bg-teal-700 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
