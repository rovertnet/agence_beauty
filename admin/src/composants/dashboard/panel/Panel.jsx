import React from 'react';
import { FaUsers } from "react-icons/fa6";

const Panel = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center gap-2 bg-white shadow-md rounded-lg border-l-4 border-violet-700">
        <FaUsers color="black" />
        <div className="">
          <h2 className="text-violet-700 font-extrabold text-[1.2rem]">Clients</h2>
          <span>00</span>
        </div>
      </div>
    </div>
  );
}

export default Panel