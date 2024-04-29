import { useState } from "react";
import SubGlassblowing from "./subcategory/SubGlassblowing";
import SubArtandPainting from "./subcategory/SubArtandPainting";
import SubPottery from "./subcategory/SubPottery";
import SubWoodWork from "./subcategory/SubWoodWork";
import SubMetalwork from "./subcategory/SubMetalwork";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: "artandpainting",
    title: "Art And Painting",
    component: <SubArtandPainting />,
  },
  {
    id: "pottery",
    title: "Pottery",
    component: <SubPottery />,
  },
  {
    id: "woodwork",
    title: "Woodwork",
    component: <SubWoodWork />,
  },
  {
    id: "metalwork",
    title: "Metal work",
    component: <SubMetalwork />,
  },
  {
    id: "glassblowing",
    title: "Glassblowing",
    component: <SubGlassblowing />,
  },
];

const Category = () => {
  const [activeTab, setActiveTab] = useState("artandpainting");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="overflow-y-hidden flex flex-col gap-[20px] w-full bg-white">
      <div className="flex flex-col align-middle items-center h-screen">
        <div className="flex flex-row justify-between w-full p-[20px]">
          <h2 className="text-black font-medium text-2xl leading-[38px]">
            Recommendation
          </h2>
          <Link to="/shop" className="text-black font-medium text-sm leading-[20px]">
            See more
          </Link>
        </div>
        <ul className="flex flex-row justify-center items-center w-full p-[20px]">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`cursor-pointer flex justify-center items-center flex-col w-full text-black p-[5px] rounded-[6px] ${
                activeTab === tab.id ? "active bg-black text-white" : "text-black bg-white"
              }`}
            >
              <p className={`text-dark font-normal text-lg leading-[24px]`}>
                {tab.title}
              </p>
             
            </li>
          ))}
        </ul>
        <div className=" h-screen">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <div key={tab.id} className=" w-full flex">
                {tab.component}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
