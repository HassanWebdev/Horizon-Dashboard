'use client'
import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();
  const menuItems = [
    { text: "Main Dashboard", icon: <IoMdHome />, link: '/' },
    { text: "NFT Marketplace", icon: <IoCartOutline />, link: 'NFT-Marketplace' },
    { text: "Data Tables", icon: <MdBarChart />, link: 'Data-Tables' },
    { text: "Profile", icon: <FaUserAlt />, link: 'Profile' },
    { text: "Sign In", icon: <FaLock />, link: 'Sign-In' }
  ];
  const activeLink = pathname === '/' ? '/' : pathname.split('/')[1]; 

  return (
    <div className='h-screen border-1 px-[1.6rem] py-[2.5rem] bg-white '>
      <div className='top w-full h-24  flex justify-center items-center my-7'>  
        <h1 className='text-6xl uppercase tracking-wider'><span className='font-neue_montreal_Bold'>Horizon</span> Free</h1> 
      </div>
      <hr />
      <div id='menulinks' className='pl-12 pr-6 my-11'>
        {
          menuItems.map((item, index) => (
            <Link key={index} href={`${item.link}`}>
              <div className={`h-16 flex items-center justify-between text-start mb-4 text-4xl ${item.link === activeLink ? 'text-[#2C3749] font-neue_montreal_Medium' : 'text-[#9DA7C3]'}`}>
                <div className='flex items-center gap-7'>
                  <div className={`${item.link === activeLink ? 'text-[#422BFA]':'text-[#9DA7C3]'}`}>{item.icon}</div>
                  <div className='text-3xl'>{item.text}</div>
                </div>
                {item.link === activeLink && <div className='h-full w-[.4rem] bg-[#422BFA] rounded-xl'></div>}
              </div>
            </Link>
          ))
        }
      </div>
      <div className='w-full h-80 bg-gradient-to-r from-[#7E7FFF] to-[#5333FF] rounded-2xl flex justify-center items-center'>
      <h1 className='text-6xl uppercase tracking-wider'><span className='font-neue_montreal_Bold text-white'>Horizon</span> Free</h1> 
      </div>
    </div>
  )
}

export default Sidebar
