import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  FaApple,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { Progress } from "@/components/ui/progress";
function Datatables() {
  const tech = [
    {
      name: "Marketplace",
      tech: [
        { icons: <FaApple /> },
        { icons: <BsAndroid2 /> },
        { icons: <TfiMicrosoftAlt /> },
      ],
      date: "12.Jan.2021",
      progress: "75.5%",
    },
    {
      name: "Venus DB PRO",
      tech: [{ icons: <FaApple /> }],
      date: "21.Feb.2021",
      progress: "35.4%",
    },
    {
      name: "Venus DS",
      tech: [{ icons: <FaApple /> }, { icons: <TfiMicrosoftAlt /> }],
      date: "13.Mar.2021",
      progress: "25%",
    },
    {
      name: "Venus 3D Asset",
      tech: [
        { icons: <FaApple /> },
        { icons: <BsAndroid2 /> },
        { icons: <TfiMicrosoftAlt /> },
      ],
      date: "24.Jan.2021",
      progress: "100%",
    },
    {
      name: "Marketplace",
      tech: [{ icons: <FaApple /> }, { icons: <TfiMicrosoftAlt /> }],
      date: "Oct 24, 2022",
      progress: "75.5%",
    },
  ];
  const data = [
    {
      Name: "Marketplace",
      progress: 75.5,
      quantity: 2458,
      date: "12.Jan.2021",
    },
    {
      Name: "Venus DB PRO",
      progress: 35.4,
      quantity: 1485,
      date: "21.Feb.2021",
    },
    { Name: "Venus DS", progress: 25, quantity: 1024, date: "13.Mar.2021" },
    {
      Name: "Venus 3D Asset",
      progress: 100,
      quantity: 858,
      date: "24.Jan.2021",
    },
    {
      Name: "Marketplace",
      progress: 75.5,
      quantity: 258,
      date: "Oct 24, 2022",
    },
    {
      Name: "Marketplace",
      progress: 75.5,
      quantity: 258,
      date: "Oct 24, 2022",
    },
    { Name: "Marketplace", progress: 75.5, quantity: 258, date: "12.Jan.2021" },
    {
      Name: "Venus DB PRO",
      progress: 35.4,
      quantity: 858,
      date: "21.Feb.2021",
    },
    { Name: "Venus DS", progress: 25, quantity: 1024, date: "13.Mar.2021" },
    {
      Name: "Venus 3D Asset",
      progress: 100,
      quantity: 258,
      date: "24.Jan.2021",
    },
    {
      Name: "Marketplace",
      progress: 75.5,
      quantity: 1024,
      date: "Oct 24, 2022",
    },
  ];
  const data2 = [
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
  const table = [
    {
      Name: "Marketplace",
      progress: 75.5,
      quantity: 2458,
      date: "12.Jan.2021",
    },
    {
      Name: "Venus DB PRO",
      progress: 35.4,
      quantity: 1485,
      date: "21.Feb.2021",
    },
    { Name: "Venus DS", progress: 25, quantity: 1024, date: "13.Mar.2021" },
    {
      Name: "Venus 3D Asset",
      progress: 100,
      quantity: 858,
      date: "24.Jan.2021",
    },
  ];
  return (
    <div className="pt-48 mb-[2rem] w-full font-neue_montreal pl-[1.5rem] pr-14 flex flex-wrap gap-[2rem]">
      <div className="w-[49%] bg-white rounded-3xl shadow-lg  p-[2rem]">
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-[#1B2559] text-6xl font-bold">
            Development Table
          </h1>
          <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
            <BsThreeDots className="text-[#432AFA] text-6xl hover:text-[#3621D9] transition-colors duration-300" />
          </div>
        </div>
        <div className="w-full flex justify-between mb-5">
          {["Name", "Tech", "Date", "Progress"].map((label, index) => (
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
          {tech.map((item, index) => {
            return (
              <div key={index}>
                <div className="w-full flex justify-between items-center mb-16">
                  <h1 className="text-2xl font-bold text-[#263060] w-1/4 text-start">
                    {item.name}
                  </h1>
                  <div className="flex items-center w-1/4  translate-x-9">
                    <div>
                      <div className="flex items-center gap-4 ">
                        {item.tech.map((item, index) => (
                          <div
                            key={index}
                            className="text-[1.8rem] text-gray-400"
                          >
                            {item.icons}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-[#263060] w-1/4 text-center ">
                    {item.date}
                  </h1>
                  <div className="text-2xl font-bold text-[#263060] w-1/4 text-end flex justify-center items-center ">
                    <h1 className="mr-3">{item.progress}</h1>

                    <Progress value={item.progress} className="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[49%] bg-white rounded-3xl shadow-lg p-[2rem]">
        {" "}
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-[#1B2559] text-6xl font-bold">Check Table</h1>
          <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
            <BsThreeDots className="text-[#432AFA] text-6xl hover:text-[#3621D9] transition-colors duration-300" />
          </div>
        </div>
        <div id="rows">
          <div id="labels" className="flex mb-5">
            <div className="w-[40%] ">
              <h1 className="text-[#A3AFD1] text-[1.2rem] uppercase font-bold">
                Name
              </h1>
            </div>
            <div className="flex justify-between w-[60%]">
              {["progress", "quantity", "date"].map((label, index) => (
                <h1
                  key={index}
                  className="text-[#A3AFD1] uppercase text-[1.2rem] font-bold w-1/3 text-center"
                >
                  {label}
                </h1>
              ))}
            </div>
          </div>
          <hr className="mb-5" />
          <div className="flex flex-col gap-[4rem]">
            {data.map((data, index) => (
              <div key={index} className="flex items-center">
                <div className="w-[40%] flex gap-3 items-center">
                  <input
                    type="checkbox"
                  
                    className="form-checkbox h-6 w-6 text-[#432AFA] rounded-md border-2 border-gray-300 focus:ring-0 focus:ring-offset-0"
                  />
                  <h1 className="text-2xl font-bold text-[#1B2559]">
                    {data.Name}
                  </h1>
                </div>
                <div className="flex justify-between w-[60%]">
                  <h1 className="text-2xl font-bold text-[#1B2559] w-1/3 text-center">
                    {data.progress}%
                  </h1>
                  <h1 className="text-2xl font-bold text-[#1B2559] w-1/3 text-center">
                    {data.quantity}
                  </h1>
                  <h1 className="text-2xl font-bold text-[#1B2559] w-1/3 text-center">
                    {data.date}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[49%] bg-white rounded-3xl shadow-lg p-[2rem]">
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-[#1B2559] text-6xl font-bold">4-Column Table</h1>
          <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
            <BsThreeDots className="text-[#432AFA] text-6xl hover:text-[#3621D9] transition-colors duration-300" />
          </div>
        </div>
        <div id="rows">
          <div id="labels" className="flex mb-5">
            <div className="w-[40%] ">
              <h1 className="text-[#A3AFD1] text-[1.2rem] uppercase font-bold">
                Name
              </h1>
            </div>
            <div className="flex justify-between w-[60%]">
              {["progress", "quantity", "date"].map((label, index) => (
                <h1
                  key={index}
                  className="text-[#A3AFD1] uppercase text-[1.2rem] font-bold w-1/3 text-center"
                >
                  {label}
                </h1>
              ))}
            </div>
          </div>
          <hr className="mb-5" />
          <div className="flex flex-col gap-[4rem]">
            {table.map((data, index) => (
              <div key={index} className="flex items-center">
                <div className="w-[40%] flex gap-3 items-center">
                  <h1 className="text-2xl font-bold text-[#1B2559]">
                    {data.Name}
                  </h1>
                </div>
                <div className="flex justify-between w-[60%]">
                  <h1 className="text-2xl font-bold text-[#1B2559] w-1/3 text-center">
                    {data.progress}%
                  </h1>
                  <h1 className="text-2xl font-bold text-[#1B2559] w-1/3 text-center">
                    {data.quantity}
                  </h1>
                  <h1 className="text-2xl font-bold text-[#1B2559] w-1/3 text-center">
                    {data.date}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[49%] bg-white rounded-3xl shadow-lg p-[2rem]">
        {" "}
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
        <div className="w-full flex flex-col justify-between ">
          {data2.map((item, index) => {
            return (
              <div key={index}>
                <div className="w-full flex justify-between items-center mb-16">
                  <h1 className="text-2xl font-bold text-[#263060] w-1/4 text-start">
                    {item.name}
                  </h1>
                  <div className="flex items-center w-1/4">
                    <div>
                      <div className="flex items-center gap-2 translate-x-7">
                        <div className="text-[2rem]">{item.icon}</div>
                        <h1 className="text-[#263060] text-2xl font-bold">
                          {item.text}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-[#263060] w-1/4 text-center ">
                    {item.date}
                  </h1>
                  <h1 className="text-2xl font-bold text-[#263060] w-1/4 text-end flex justify-center translate-x-5">
                    <Progress value={item.progress} className="w-[70%]" />
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Datatables;
