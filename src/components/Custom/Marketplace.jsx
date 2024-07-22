"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Avatar } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Progress } from "@/components/ui/progress";
function Marketplace() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (index) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(index)) {
        return prevFavorites.filter((i) => i !== index);
      } else {
        return [...prevFavorites, index];
      }
    });
  };
  const artworks = [
    {
      name: "@maddison_c21",
      artwork: 9821,
      progress: 73,
    },
    {
      name: "@karl.will02",
      artwork: 7032,
      progress: 68,
    },
    {
      name: "@andreea.1z",
      artwork: 5204,
      progress: 79,
    },
    {
      name: "@abraham47.y",
      artwork: 4309,
      progress: 71,
    },
    {
      name: "@simmmple.web",
      artwork: 3871,
      progress: 75,
    },
  ];
  const trendingNFTs = [
    {
      text: "Trending NFTs",
    },
    {
      text: "Art",
    },
    {
      text: "Music",
    },
    {
      text: "Collectibles",
    },
    {
      text: "Sports",
    },
  ];
  const cards = [
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png",
      title: "Abstract Colors",
      author: "By Esthera Jackson",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft2.7897c45d2601ee3adfb5.png",
      title: "ETH AI Brain",
      author: "By Nick Wilson",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
      title: "Mesh Gradients",
      author: "By Will Smith",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft4.5fc37877b25c9fb9a52d.png",
      title: "Swipe Circles",
      author: "By Peter Will",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft5.62dbaf7dd91b4180035c.png",
      title: "Colorful Heaven",
      author: "By Mark Benjamin",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft6.9ff5403226e81a6fd390.png",
      title: "3D Cubes Art",
      author: "By Manny Gates",
    },
  ];
  const Rightmembers = [
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft1.0fea34cca5aed6cad72b.png",
      title: "Colorful Heaven",
      artist: "Mark Benjamin",
      price: 0.91,
      currency: "ETH",
      timeAgo: "30s",
      category: "Abstract",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft2.7897c45d2601ee3adfb5.png",

      title: "Abstract Colors",
      artist: "Esthera Jackson",
      price: 0.91,
      currency: "ETH",
      timeAgo: "58s",
      category: "Abstract",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft3.3b3e6a4b3ada7618de6c.png",

      title: "ETH AI Brain",
      artist: "Nick Wilson",
      price: 0.91,
      currency: "ETH",
      timeAgo: "1m",
      category: "AI Art",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft4.5fc37877b25c9fb9a52d.png",

      title: "Swipe Circles",
      artist: "Peter Will",
      price: 0.91,
      currency: "ETH",
      timeAgo: "1m",
      category: "Abstract",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft5.62dbaf7dd91b4180035c.png",

      title: "Mesh Gradients",
      artist: "Will Smith",
      price: 0.91,
      currency: "ETH",
      timeAgo: "2m",
      category: "Abstract",
    },
    {
      img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Nft6.9ff5403226e81a6fd390.png",

      title: "3D Cubes Art",
      artist: "Manny Gates",
      price: 0.91,
      currency: "ETH",
      timeAgo: "3m",
      category: "3D",
    },
  ];
  return (
    <div className="pt-48 mb-[2rem] w-full font-neue_montreal pl-[1.5rem] pr-14">
      <div className="w-full flex gap-[2rem]">
        <div className="px-[6.6rem] py-[5.6rem] w-[60%]  bg-[#451DE8] rounded-[3rem]">
          <h1 className="text-white font-bold  text-[3.5rem] leading-none mb-10">
            Discover, collect, <br /> and sell <br /> extraordinary NFTs
          </h1>
          <p className="text-3xl  mb-20 text-[#E0D7FF]">
            Enter in this creative world. <br /> Discover now the latest NFTs or{" "}
            <br /> start creating your own!
          </p>
          <div>
            <button className="px-[3rem] py-[1rem] bg-white text-2xl text-black rounded-3xl">
              Discover now
            </button>{" "}
            <button className="px-[3rem] py-[1rem]  text-2xl text-white rounded-3xl">
              Watch video
            </button>
          </div>
        </div>
        <div className="w-[38%] p-[2rem] bg-white rounded-3xl shadow-lg">
          <div className="flex justify-between items-center pb-7">
            <h1 className="text-[#1B2559] text-5xl font-bold">Top Creators</h1>
            <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
              <h1 className="text-[#432AFA] text-3xl hover:text-[#3621D9] transition-colors duration-300">
                See all
              </h1>
            </div>
          </div>
          <div className=" px-5 rounded-xl">
            <div className="w-full flex justify-between  py-[2rem] ">
              <h1 className="text-[#A3AFD1] uppercase text-[1.2rem] font-bold w-[50%]">
                NAME
              </h1>
              <div className="w-[50%] flex">
                {["Artworks", "rating"].map((label, index) => (
                  <h1
                    key={index}
                    className={`text-[#A3AFD1] uppercase text-[1.2rem] font-bold w-1/2 ${
                      index === 0 ? "text-start" : "text-center"
                    }`}
                  >
                    {label}
                  </h1>
                ))}
              </div>
            </div>
            <div>
              {artworks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex justify-between items-center py-7"
                  >
                    <div className="flex">
                      <Avatar
                        src={`https://i.pravatar.cc/150?img=${index + 1}`}
                        sx={{ width: 25, height: 25, mr: 1 }}
                      />
                      <h1 className="text-3xl font-bold text-[#263060] w-[50%] text-start">
                        {item.name}
                      </h1>
                    </div>

                    <div className="w-[50%] flex">
                      <h1 className="text-3xl font-bold text-[#263060] w-1/2 text-center">
                        {item.artwork}
                      </h1>
                      <h1 className="text-3xl font-bold text-[#263060] w-1/2 text-center flex justify-center items-center">
                        <Progress value={item.progress} className="w-[70%]" />
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[60%] p-[2rem] flex items-center gap-[5rem] justify-center">
        <div className="text-[#1B2559] text-5xl font-bold flex justify-end items-end">
          Trending NFTs
        </div>
        {trendingNFTs.map((item, index) => {
          return (
            <div key={index}>
              {index !== 0 && (
                <div className="text-[#6857FC] cursor-pointer text-3xl font-bold">
                  {item.text}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full flex gap-[2rem]">
        <div id="left-side" className="w-[60%]">
          <div className=" w-full flex gap-5">
            {cards.map((card, index) => {
              if (index > 2) return "";
              else
                return (
                  <div
                    key={index}
                    className="w-1/3 p-[2rem] bg-white shadow-lg rounded-3xl"
                  >
                    <div className=" relative rounded-3xl mb-[2rem]">
                      <img src={card.img} alt="" className=" rounded-3xl" />
                      <div
                        className="absolute right-5 top-5 h-10 w-10 cursor-pointer bg-white rounded-full flex justify-center items-center"
                        onClick={() => toggleFavorite(index)}
                      >
                        {favorites.includes(index) ? (
                          <IoMdHeart className="text-[#6857FC] text-3xl" />
                        ) : (
                          <IoIosHeartEmpty className="text-[#6857FC] text-3xl" />
                        )}
                      </div>
                    </div>
                    <div className="text-[#1B2559] text-4xl font-bold mb-1">
                      {card.title}
                    </div>
                    <div className="text-gray-400 text-xl mb-5">
                      {card.author}
                    </div>
                    <div className=" w-[12rem] mb-10 translate-x-2 overflow-hidden">
                      {" "}
                      <AvatarGroup
                        total={9}
                        className="flex justify-center items-center"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={`https://i.pravatar.cc/150?img=${index + 3}`}
                          className="w-12 h-12"
                        />

                        <Avatar
                          alt="Agnes Walker"
                          src={`https://i.pravatar.cc/150?img=${index + 2}`}
                          className="w-12 h-12"
                        />
                        <Avatar
                          alt="Trevor Henderson"
                          src={`https://i.pravatar.cc/150?img=${index + 3}`}
                          className="w-12 h-12"
                        />
                      </AvatarGroup>
                    </div>
                    <div className="text-[#523CFB] text-2xl font-bold tracking-wider mb-5">
                      Current Bid:0.91ETH
                    </div>
                    <button className="bg-[#11057B] transition-all hover:bg-[#11057bb9] text-gray-200 text-3xl px-8 py-2 font-neue_montreal tracking-wider rounded-full">
                      Place Bid
                    </button>
                  </div>
                );
            })}
          </div>
          <div className="text-[#1B2559] p-[2rem]  text-6xl font-bold">
            Recently Added
          </div>
          <div className=" w-full flex gap-5">
            {cards.map((card, index) => {
              if (index < 3) return "";
              else
                return (
                  <div
                    key={index}
                    className="w-1/3 p-[2rem] bg-white shadow-lg rounded-3xl"
                  >
                    <div className=" relative rounded-3xl mb-[2rem]">
                      <img src={card.img} alt="" className=" rounded-3xl" />
                      <div
                        className="absolute right-5 top-5 h-10 w-10 cursor-pointer bg-white rounded-full flex justify-center items-center"
                        onClick={() => toggleFavorite(index)}
                      >
                        {favorites.includes(index) ? (
                          <IoMdHeart className="text-[#6857FC] text-3xl" />
                        ) : (
                          <IoIosHeartEmpty className="text-[#6857FC] text-3xl" />
                        )}
                      </div>
                    </div>
                    <div className="text-[#1B2559] text-4xl font-bold mb-1">
                      {card.title}
                    </div>
                    <div className="text-gray-400 text-xl mb-5">
                      {card.author}
                    </div>
                    <div className=" w-[12rem] overflow-hidden mb-10 translate-x-2">
                      {" "}
                      <AvatarGroup
                        total={9}
                        className="flex justify-center items-center"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={`https://i.pravatar.cc/150?img=${index + 3}`}
                          className="w-12 h-12"
                        />

                        <Avatar
                          alt="Agnes Walker"
                          src={`https://i.pravatar.cc/150?img=${index + 2}`}
                          className="w-12 h-12"
                        />
                        <Avatar
                          alt="Trevor Henderson"
                          src={`https://i.pravatar.cc/150?img=${index + 3}`}
                          className="w-12 h-12"
                        />
                      </AvatarGroup>
                    </div>
                    <div className="text-[#523CFB] text-2xl font-bold tracking-wider mb-5">
                      Current Bid:0.91ETH
                    </div>
                    <button className="bg-[#11057B] text-gray-200 text-3xl px-8 py-2 font-semibold tracking-wider rounded-full">
                      Place Bid
                    </button>
                  </div>
                );
            })}
          </div>
        </div>
        <div
          id="right-side"
          className="w-[38%]  bg-white shadow-lg rounded-3xl p-[2rem]"
        >
          <div className="flex justify-between items-center pb-7">
            <h1 className="text-[#1B2559] text-5xl font-bold">Histroy</h1>
            <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
              <h1 className="text-[#432AFA] text-3xl hover:text-[#3621D9] transition-colors duration-300">
                See all
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {
              Rightmembers.map((item,index)=>{
                return (
                  <div key={index} className="flex justify-between cursor-pointer items-center transition-all px-3 py-3 rounded-3xl hover:shadow-lg ">
                    <div className="flex items-center gap-5">
                      <img src={item.img} className="w-28 h-28 rounded-3xl" alt="" />
                      <div>
                        <h1 className="text-3xl font-bold text-[#1B2559]">{item.title}</h1>
                        <h1 className="text-xl text-gray-400"> By {item.artist}</h1>
                      </div>
                    </div>
                    <div className="flex gap-5 items-center">
                    <svg className="text-2xl" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" focusable="false" class="chakra-icon css-1gpdrkf" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                      <h1 className="text-3xl font-bold text-black">{item.price} <br />{item.currency}</h1>
                      <h1 className="text-2xl text-gray-400">{item.timeAgo} <br />ago</h1>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
