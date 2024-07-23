"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Progress } from "@/components/ui/progress";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { IoIosCheckbox } from "react-icons/io";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Footer() {
  const [value, onChange] = useState(new Date());
  const data = [
    {
      name: "Horizon UI PRO",
      icon: <FaCheckCircle color="00B575" />,
      date: "18 Apr 2022",
      progress: 70,
      text: "Approved",
    },
    {
      name: "Horizon UI Free",
      icon: <FaTimesCircle color="EF5C50" />,
      date: "18 Apr 2022",
      progress: 30,
      text: "Disabled",
    },
    {
      name: "Marketplace",
      icon: <FaExclamationCircle color="FEB447" />,
      date: "20 May 2021",
      progress: 90,
      text: "Error",
    },
    {
      name: "Weekly Updates",
      icon: <FaCheckCircle color="00B575" />,
      date: "12 Jul 2021",
      progress: 50,
      text: "Approved",
    },
  ];
  const tasks = [
    { text: "Landing Page Design" },
    { text: "Dashboard Builder" },
    { text: "Mobile App Design" },
    { text: "Illustrations" },
    { text: "Promotional LP" },
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysArray = [];

    // Add empty slots for days before the 1st of the month
    for (let i = 0; i < (firstDayOfMonth + 6) % 7; i++) {
      daysArray.push(null);
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(new Date(year, month, i));
    }

    return daysArray;
  };

  const navigateMonth = (direction) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1)
    );
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date) => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };
  return (
    <div>
      <div className="w-full mb-[2rem] flex gap-[2rem] ">
        <div className="p-[2rem] w-[50%] bg-white rounded-3xl shadow-lg">
          <div className="flex justify-between items-center mb-7">
            <h1 className="text-[#1B2559] text-6xl font-bold">Complex Table</h1>
            <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
              <BsThreeDots className="text-[#432AFA] text-6xl hover:text-[#3621D9] transition-colors duration-300" />
            </div>
          </div>
          <div className="w-full flex justify-between mb-5">
            {["Name", "Status", "Date", "Progress"].map((label, index) => (
              <h1
                key={index}
                className={`text-[#A3AFD1] uppercase text-[1.2rem] font-bold w-1/4 ${
                  index === 0 ? "text-start" : "text-center"
                }`}
              >
                {label}
              </h1>
            ))}
          </div>
          <hr className="mb-5" />
          <div className="w-full flex flex-col justify-between">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="w-full flex justify-between items-center mb-7">
                    <h1 className="text-3xl font-bold text-[#263060] w-1/4 text-start">
                      {item.name}
                    </h1>
                    <div className="flex items-center w-1/4">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="text-[2rem]">{item.icon}</div>
                          <h1 className="text-[#263060] text-3xl font-bold">
                            {item.text}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <h1 className="text-3xl font-bold text-[#263060] w-[14%] text-start ">
                      {item.date}
                    </h1>
                    <h1 className="text-3xl font-bold text-[#263060] w-1/4 text-end flex justify-center translate-x-5">
                      <Progress value={item.progress} className="w-[70%]" />
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-[2rem] w-[25%] bg-white rounded-3xl shadow-lg">
          <div className="flex justify-between items-center mb-7">
            <div className="flex items-center  gap-4">
              <div className=" h-16 w-16 flex items-center justify-center rounded-full bg-[#F5F7FF]">
                <IoIosCheckbox className=" text-[#432BFB] text-[2.3rem]" />
              </div>
              <div>
                <h1 className="text-[#263060] text-[2rem] font-bold">Tasks</h1>
              </div>
            </div>
            <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
              <BsThreeDots className="text-[#432AFA] text-[1.6rem] hover:text-[#3621D9] transition-colors duration-300" />
            </div>
          </div>
          <div>
            <div>
              {tasks.map((item, index) => {
                return (
                  <div key={index} className="flex justify-between mb-7 px-5">
                    {" "}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-6 w-6 bg-[#432AFA]  rounded-md border-2 border-gray-300 focus:ring-0 focus:ring-offset-0"
                      />
                      <h1 className="text-3xl w-[80%] font-neue_montreal text-[#1B254B] font-bold">
                        {item.text}
                      </h1>
                    </div>
                    <div className="text-[2rem] text-gray-400 flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="chakra-icon css-1c49n9p"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-[2rem] w-[25%] bg-white rounded-3xl shadow-lg">
          <div className="max-w-md mx-auto bg-white  rounded-lg overflow-hidden">
            <div className="flex items-center justify-between  ">
              <button
                onClick={() => navigateMonth(-1)}
                className="bg-[#421BFC] text-white px-5 py-5 text-3xl rounded-2xl"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <h2 className="text-3xl font-semibold text-gray-800">
                {formatDate(currentDate)}
              </h2>
              <button
                onClick={() => navigateMonth(1)}
                className="bg-[#421BFC] text-white px-5 py-5 text-3xl rounded-2xl"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 mt-10 ">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-center text-xl font-medium text-gray-600 mb-2  py-1"
                >
                  {day}
                </div>
              ))}
              {getDaysInMonth(currentDate).map((date, index) => (
                <button
                  key={index}
                  onClick={() => date && setSelectedDate(date)}
                  className={`text-center  text-3xl py-1 rounded-xl ${
                    date
                      ? isToday(date)
                        ? "bg-[#4319FE] text-white"
                        : isSelected(date)
                        ? "bg-[#4319FE] text-white"
                        : "hover:bg-gray-300"
                      : "text-[#421BFC]"
                  }`}
                  disabled={!date}
                >
                  {date ? date.getDate() : ""}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
