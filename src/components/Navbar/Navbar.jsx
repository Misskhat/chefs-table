import React from "react";
import profileIcon from "../../assets/images/profitIcon.png"
import searchIcon from "../../assets/images/searchIcon.svg"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-20 mt-2.5">
      <div>
        <button title="Recipe Calories" className="text-3xl font-bold">Recipe Calories</button>
      </div>
      <div className="text-[#150b2bb3] flex items-center justify-center space-x-12">
        <a href="#home"><p title="Home">Home</p></a>
        <a href="#recipes"><p title="Recipes">Recipes</p></a>
        <a href="#about"><p title="About">About</p></a>
        <a href="#search"><p title="Search">Search</p></a>
      </div>
      <div>
        <div className="flex items-center justify-center space-x-3">
            <div className="flex space-x-2.5 rounded-3xl bg-gray-300 p-2 items-center">
                <img title="Search Icon" src={searchIcon} alt="Search Icon" />
                <input type="search" placeholder="Search" className="border-none px-3 rounded-3xl bg-gray-300" />
            </div>
            <div><img className="bg-[#0BE58A;] rounded-4xl p-1" title="Profile Icon" src={profileIcon} alt="profile icon"/></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
