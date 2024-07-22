import React from "react";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdUpload } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Navbar() {
  const pathname = usePathname();
  const activeLink =
    pathname === "/" ? "Main Dashboard" : pathname.split("/")[1];

  return (
    <div className="w-[75%] z-50 flex justify-between items-center rounded-3xl px-[1.3rem] py-[1rem] backdrop-blur-md fixed top-10">
      <div>
        <div className="flex gap-2 text-2xl text-[#666F7D]">
          <Link href="/" className="transition-all hover:underline">
            Pages
          </Link>
          <h1>/</h1>
          <Link href="/" className="transition-all hover:underline">
            <h1>{activeLink}</h1>
          </Link>
        </div>
        <div className="text-[3.5rem] leading-none text-[#1B244A] font-neue_montreal_Medium cursor-pointer">
          {activeLink}
        </div>
      </div>
      <div
        id="input"
        className="bg-white w-max flex gap-5 items-center shadow-xl rounded-full p-[1rem]"
      >
        <div className="relative flex items-center">
          <IoMdSearch className="text-4xl absolute left-5" />
          <input
            type="text"
            placeholder="Search..."
            className="text-2xl h-16 rounded-full px-[1.1rem] pl-[4rem] pr-[1.6rem] bg-[#F5F7FF]"
          />
        </div>
        <Popover>
          <PopoverTrigger>
            <CiBellOn className="text-4xl text-[#A0AEC0] cursor-pointer transition-all duration-300 ease-in-out" />
          </PopoverTrigger>
          <PopoverContent className="w-[45rem] p-4 transition-all duration-300 ease-in-out translate-x-[-15rem] translate-y-[3rem] rounded-3xl">
            <NotificationContent />
          </PopoverContent>
        </Popover>
        <IoInformationCircleOutline className="text-4xl text-[#A0AEC0] cursor-pointer" />
        <Popover>
          <PopoverTrigger>
            <Avatar className="h-14 w-14 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-[25rem] transition-all duration-300 ease-in-out translate-x-[-8rem] translate-y-8">
            <UserContent />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

const NotificationContent = () => (
  <div className="text-3xl rounded-3xl">
    <div className="flex justify-between mb-5">
      <h3 className="text-3xl font-semibold mb-2">Notifications</h3>{" "}
      <h3 className="cursor-pointer">Mark all read</h3>
    </div>
    <button
      type="button"
      role="menuitem"
      tabIndex="-1"
      className="flex items-center w-full py-3 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
    >
      <div className="flex-shrink-0 w-28 h-32 rounded-3xl  mr-5 bg-gradient-to-r from-[#7E7FFF] to-[#5333FF] flex justify-center items-center">
        <MdUpload className="w-14 h-16  text-white" />
      </div>
      <div>
        <p className="font-medium text-gray-900">
          New Update: Horizon UI Dashboard PRO
        </p>
        <p className="text-sm text-gray-500">
          A new update for your downloaded item is available!
        </p>
      </div>
    </button>
    <button
      type="button"
      role="menuitem"
      tabIndex="-1"
      className="flex items-center w-full py-3 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
    >
      <div className="flex-shrink-0 w-28 h-32 rounded-3xl  mr-5 bg-gradient-to-r from-[#7E7FFF] to-[#5333FF] flex justify-center items-center">
        <MdUpload className="w-14 h-16  text-white" />
      </div>
      <div>
        <p className="font-medium text-gray-900">
          New Update:Horizon Design System Free
        </p>
        <p className="text-sm text-gray-500">
          A new update for your downloaded item is available!
        </p>
      </div>
    </button>
  </div>
);

const UserContent = () => {
  const dummyName = "Hey, Adela";

  return (
    <div className="py-7 cursor-pointer">
      <p className="mb-5 px-8 text-2xl font-neue_montreal_Medium">
        👋 {dummyName}
      </p>
      <hr />
      <div className="text-3xl px-10 ">
        <p className="my-5">Profile Settings</p>
        <p className="mb-5">Newsletter Settings</p>
        <button className="text-red-400 rounded transition-colors">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
