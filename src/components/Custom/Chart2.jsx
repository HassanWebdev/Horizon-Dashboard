"use client";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Bar, Pie } from "react-chartjs-2";
import { RiArrowDropDownLine } from "react-icons/ri";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  ArcElement,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart2() {
  const tableData = [
    {
      name: "Horizon UI PRO",
      progress: 17.5,
      quantity: 2458,
      date: "12 Jan 2021",
    },
    {
      name: "Horizon UI Free",
      progress: 10.8,
      quantity: 1485,
      date: "21 Feb 2021",
    },
    {
      name: "Weekly Update",
      progress: 21.3,
      quantity: 1024,
      date: "13 Mar 2021",
    },
    {
      name: "Venus 3D Asset",
      progress: 31.5,
      quantity: 858,
      date: "24 Jan 2021",
    },
    {
      name: "Marketplace",
      progress: 12.2,
      quantity: 258,
      date: "24 Oct 2022",
    },
  ];
  const options2 = {
    maintainAspectRatio: false,
    responsive: true,
    ticks: {
      font: {
        size: 15,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        display: false,
        max: 700,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    barPercentage: 0.4,
    categoryPercentage: 0.7,
    borderRadius: 12,
  };

  const data2 = {
    labels: ["00", "04", "08", "12", "16", "18"],
    datasets: [
      {
        label: "Daily Traffic",
        data: [100, 200, 300, 200, 300, 400],
        backgroundColor: "rgb(87,49,254)",
        hoverBackgroundColor: "rgba(118,84,254,1)",
        hoverOffset: 10,
      },
    ],
  };
  const data3 = {
    labels: ["Your files", "System", "Empty"],
    datasets: [
      {
        data: [63, 25, 12],
        backgroundColor: [
          "rgb(67,25,254)",
          "rgb(107,210,254)",
          "rgb(239,244,251)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const optionsPie = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  return (
    <div className=" w-full mb-[2rem] flex gap-[2rem]">
      <div className="p-[2rem] pb-[5rem] w-[47.8%] bg-white rounded-3xl shadow-lg">
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
            {tableData.map((data, index) => (
              <div key={index} className="flex items-center">
                <div className="w-[40%] flex gap-3 items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-[#432AFA] rounded-md border-2 border-gray-300 focus:ring-0 focus:ring-offset-0"
                  />
                  <h1 className="text-2xl font-bold text-[#1B2559]">
                    {data.name}
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
      <div className="relative  p-[2rem] w-[24.2%]  bg-white rounded-3xl shadow-lg">
        <div className="flex items-center">
          <div>
            <h1 className="text-[#A8B3D2] text-2xl">
              Daily Traffic <br />
              <span className="text-[3rem] leading-none mr-2 text-black font-bold">
                2.579
              </span>
              Visitors
            </h1>
          </div>
          <div>
            <h1 className="flex items-center gap-1 font-bold text-2xl text-[#01B574]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                focusable="false"
                className="chakra-icon css-ibg3ji"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 8L18 14H6L12 8Z"></path>
              </svg>
              +2.45%
            </h1>
          </div>
        </div>
        <div className="px-10 absolute bottom-0 left-0 right-0 top-20">
          <Bar data={data2} options={options2} />
        </div>
      </div>
      <div className=" p-[2rem] w-[24%] bg-white rounded-3xl shadow-lg flex flex-col justify-evenly">
        <div id="pie chart" className="cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#000000] font-bold text-4xl text-center">
                Your pie <br />
                chart
              </h1>
            </div>
            <div  className="cursor-pointer">
              <h1 className="flex items-center font-bold text-2xl text-gray-300">
                Monthly
                <RiArrowDropDownLine className="text-[3rem]" />
              </h1>
            </div>
          </div>
        </div>
        <div id="chart" className="h-96">
          <Pie data={data3} options={optionsPie} />
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <div className="w-3 h-3 rounded-full bg-[#4319FE] mb-1"></div>
            <h1 className="text-gray-400 font-bold text-xl">Your files <br /> <span className="text-3xl text-[#1A2558]">63 %</span></h1>
          </div>
          <div>
          <div className="w-3 h-3 rounded-full bg-[#6BD2FE] mb-1"></div>
          <h1 className="text-gray-400 font-bold text-xl">System <br /> <span className="text-3xl text-[#1A2558]">25 %</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart2;
