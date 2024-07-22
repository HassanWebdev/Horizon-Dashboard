"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Layout({ children }) {
  const pathname = usePathname();
  const checkroute = () => {
    if (!pathname.includes("/Sign-In")) {
      return <Sidebar />;
    } else return null;
  };
  return (
    <div
      className={`w-full  h-auto ${pathname.includes("/Sign-In") ? "" : "flex"}`}
    >
      <div
        className={`${
          pathname.includes("/Sign-In")
            ? "hidden"
            : "w-[22%] fixed top-0 left-0 "
        }`}
      >
        {checkroute()}
      </div>
      <div
        className={`${
          pathname.includes("/Sign-In") ? "w-[100%]" : "w-[78%] ml-[22%]"
        }`}
      >
        {pathname.includes("/Sign-In") ? null : <Navbar />}
        {children}
      </div>
    </div>
  );
}

export default Layout;
