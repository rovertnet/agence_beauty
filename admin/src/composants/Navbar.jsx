import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiSettings2Fill } from "react-icons/ri";
import { RiNotificationFill } from "react-icons/ri";
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = (props) => {
  const [themeMode, setThemeMode] = useState(false);
  const toggleThemeMode = () => {
    setThemeMode(!themeMode)
  }
  return (
    <div className=" md:px-14 bg-slate-200 dark:bg-gray-900 w-full h-full px-3 py-4 shadow-md">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center justify-center">
          <input
            type="text"
            placeholder="Rechercher un élément"
            className=" px-3 py-2 w-full rounded-tl-xl rounded-bl-xl border-none"
          />
          <button className=" bg-[#6c49f9] text-white px-3 py-2 rounded-tr-xl rounded-br-xl">
            <FaSearch className=" text-2xl" />
          </button>
        </div>

        <div className=" flex items-center justify-center space-x-5">
          <button>
            <RiNotificationFill className=" text-[#6c49f9] text-2xl" />
          </button>
          <button>
            <RiSettings2Fill className=" text-[#6c49f9] text-2xl" />
          </button>
          <button
            className={` rounded-full text-2xl bg-slate-200 hover:bg-slate-300 hover:rounded-full ${
              themeMode ? "text-black" : "text-black"
            }`}
            onClick={toggleThemeMode}
          >
            {themeMode ? <MdSunny /> : <BsFillMoonStarsFill />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar