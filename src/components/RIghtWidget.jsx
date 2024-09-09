import React, { useState } from 'react';
import "./styles.css";

function RightWidget() {
  const [activeTab, setActiveTab] = useState("About Me");
  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <div className="bg-customGray p-4 rounded-lg mb-5 mt-10 mx-auto max-w-screen-lg">
      <div className="bg-black p-4 rounded-full flex justify-between items-center h-[60px] mx-auto mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-2 text-center rounded-full transition-colors duration-300 ${
              activeTab === tab
                ? "bg-gray-700 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="text-container mt-4 text-textColor font-normal text-base leading-[1.5]">
        {activeTab === "About Me" && (
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
            <br /> <br />
            I was born and raised in Albany, NY & have been living in Santa Carla
            for the past 10 years with my wife Tiffany and my 4-year-old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calendar is usually blocked between 9-10 AM. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias inventore expedita quisquam aut eaque quia velit, fuga labore architecto facilis harum aliquid rem accusamus nihil saepe necessitatibus. Minus aperiam ipsam veniam porro iusto est, blanditiis voluptatum quo. Aperiam accusamus quia animi tenetur iste excepturi est alias consequuntur quam tempore.
          </p>
        )}
        {activeTab === "Experiences" && (
          <p>Here are some of my experiences...</p>
        )}
        {activeTab === "Recommended" && (
          <p>These are some recommendations for you...</p>
        )}
      </div>
    </div>
  );
}

export default RightWidget;
