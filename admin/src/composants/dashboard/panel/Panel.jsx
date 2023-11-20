import React from 'react';
import { FaUsers } from "react-icons/fa6";

const Panel = () => {
  return (
    <div className="flex items-center justify-center space-x-12 mx-8">
      <div className="flex items-center justify-center w-full space-x-4 p-7 gap-2 bg-white shadow-md rounded-lg border-l-4 border-violet-700">
        <FaUsers color="black" className=" text-5xl" />
        <div className=" items-center">
          <h2 className="text-violet-700 font-extrabold text-[1.2rem]">
            Clients
          </h2>
          <span>00</span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full space-x-4 p-7 gap-2 bg-white shadow-md rounded-lg border-l-4 border-violet-700">
        <FaUsers color="black" className="text-5xl" />
        <div className=" items-center">
          <h2 className="text-violet-700 font-extrabold text-[1.2rem]">
            Clients
          </h2>
          <span>00</span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full space-x-4 p-7 gap-2 bg-white shadow-md rounded-lg border-l-4 border-violet-700">
        <FaUsers color="black" className="text-5xl" />
        <div className=" items-center">
          <h2 className="text-violet-700 font-extrabold text-[1.2rem]">
            Clients
          </h2>
          <span className=" flex items-center">00</span>
        </div>
      </div>
    </div>
  );
}

export default Panel