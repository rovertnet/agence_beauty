import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiSettings2Fill } from "react-icons/ri";
import { RiNotificationFill } from "react-icons/ri";

const Navbar = (props) => {
  
  return (
    <div className=" md:px-14 bg-slate-200 w-full h-full px-3 py-4 shadow-md">
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

        </div>
      </div>
    </div>
  );
}

export default Navbar