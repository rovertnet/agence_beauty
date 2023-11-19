import React from 'react';
import {RxDashboard} from "react-icons/rx";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaBolt } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className=" md:px-3 bg-[#6c49f9] h-full px-7">
      <div className="px-11 py-4 flex items-center justify-center border-b-[1px] border-[#ececee]/[0.3]">
        <h1 className=" font-bold text-xl text-white leading-10 cursor-pointer ">
          Admin
        </h1>
      </div>
      <div className=" py-2 border-b-[1px] border-[#ececee]/[0.3] text-md text-white">
        <a
          href="#"
          className="flex items-center gap-1 font-bold text-[1rem] border-l-[3px] border-white pl-4 bg-[#bb8eff74] py-2"
        >
          <RxDashboard />
          DashBoard
        </a>
      </div>
      <div className=" pt-[5px] border-b-[1px] border-[#ececee]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          INTERFACE
        </p>
        <a
          href="#"
          className=" flex items-center justify-between gap-[10px] py-2 hover:border-white hover:pl-4 hover:border-l-[3px] hover:border-white text-white hover:bg-[#bb8eff74]"
        >
          <div className=" flex items-center gap-1">
            <BsFillInfoSquareFill />
            <p className=" text-base">Infos site</p>
          </div>
          <BiChevronRight />
        </a>
        <a
          href="#"
          className=" flex items-center justify-between gap-[10px] py-[10px] text-white hover:border-white hover:pl-4 hover:border-l-[3px] hover:border-white hover:bg-[#bb8eff74]"
        >
          <div className=" flex items-center gap-1">
            <BiSolidMessageSquareDots />
            <p className=" text-base">Message</p>
          </div>
          <BiChevronRight />
        </a>
      </div>

      <div className=" pt-[10px] border-b-[1px] border-[#ececee]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          USER
        </p>
        <a
          href="#"
          className=" flex items-center justify-between gap-[10px] py-2 text-white hover:border-white hover:pl-4 hover:border-l-[3px] hover:border-white hover:bg-[#bb8eff74]"
        >
          <div className=" flex items-center gap-1">
            <FaUsersGear />
            <p className=" text-base">Client</p>
          </div>
          <BiChevronRight />
        </a>
        <a
          href="#"
          className=" flex items-center justify-between gap-[10px] py-[10px] text-white hover:border-white hover:pl-4 hover:border-l-[3px] hover:border-white hover:bg-[#bb8eff74]"
        >
          <div className=" flex items-center gap-1">
            <BiSolidMessageRoundedDots />
            <p className=" text-base">Témoignage</p>
          </div>
          <BiChevronRight />
        </a>
      </div>

      <div className=" flex items-center justify-center pt-[15px]">
        <div className=" h-[40px] w-[40px] bg-[#bb8eff74] rounded-full flex items-center justify-center cursor-pointer">
          <BiChevronLeft color="white" />
        </div>
      </div>
      <div className="bg-[#bb8eff74] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[10px] rounded-md">
        <FaBolt color="white" />
        <p className=" text-center text-[12px] leading-[10px] font-normal text-white/[0.4]">
          Dans l'écrin douillet de notre agence de beauté, chaque visite devient
        </p>
        <button className="bg-[#9200d0] text-white py-3 px-2 rounded-md text-md">
          upgrade to pro!
        </button>
      </div>
    </div>
  );
}

export default Sidebar