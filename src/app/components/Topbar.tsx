import { MessageSquare, Bell, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-[#e5b76c] text-2xl font-semibold">To do</h2>
        <p className="text-zinc-100">Welcome to admin modern dashboard</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="relative">
            <input
            type="search"
            name=""
            id=""
            placeholder="Search here..."
            className="px-5 py-3 rounded-full bg-[#1e1e1e] placeholder:text-[12px] w-[400px]"
            />
            <Search className="absolute top-[15px] right-3 text-blue-500" size={18}/>
        </div>
        <div className="flex justify-center items-center border-[1px] border-slate-700 p-2 rounded-xl relative">
            <div className="absolute -top-3 -right-3 bg-blue-500 border-[2px] border-white text-white text-[10px] p-2 rounded-lg">
                84
            </div>
            <MessageSquare className="text-slate-600"/>
        </div>
        <div className="flex justify-center items-center border-[1px] border-slate-700 p-2 rounded-xl relative">
            <div className="absolute -top-3 -right-3 bg-blue-500 border-[2px] border-white text-white text-[10px] p-2 rounded-lg">
                2
            </div>
            <Bell className="text-slate-600"/>
        </div>
        <Image src='/jas.jpg' alt="avatar" width={40} height={40} className="rounded-full object-cover"/>
      </div>
    </div>
  );
};

export default Topbar;
