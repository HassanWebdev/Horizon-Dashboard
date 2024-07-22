'use client';
import React from "react";
import { MdCalendarToday, MdBarChart } from "react-icons/md";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x:{
        grid:{
          display: false,
        },
        beginAtZero: true,
      },
      y:{
        grid:{
          display: false,
        },
        display:false,
        beginAtZero: true,
      }
    },
    
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 10,
        hitRadius: 10,
      },  
    },
  };
  const data = {
    labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    datasets: [
      {
        label: 'Revenue',
        data: [70, 100, 60, 110, 60, 110],
        borderColor: 'rgba(67,24,255,0.85)',
        tension: 0.4,
        borderWidth: 5,
      },
      {
        label: 'Profit',
        data: [30, 60, 20, 70, 10, 70],
        borderColor: 'rgba(57,184,255,0.85)',
        tension: 0.4,
        borderWidth: 5,
      },
    ],
  };
  const options2 = {
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        beginAtZero: true,
        display: false,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },  
    barPercentage: .2,
    borderRadius: 10, 
  };
  
  const data2 = {
    labels: ['17', '18', '19', '20', '21', '22', '23', '24', '25'],
    datasets: [
      {
        label: 'Product A',
        data: [400, 370,410,350,360,330,310,390,410],
        backgroundColor: 'rgb(118,84,254)',
        hoverBackgroundColor: 'rgba(118,84,254,1)',
        hoverOffset: 10,
      },
      {
        label: 'Product B',
        data: [400, 370,410,350,360,330,310,390,410],
        backgroundColor: 'rgb(128,217,255)',
        hoverBackgroundColor: 'rgba(128,217,255,1)',
        hoverOffset: 10,
      },
      {
        label: 'Product C',
        data: [400, 370,410,350,360,330,310,390,410],
        backgroundColor: 'rgb(228,236,248)',
        hoverBackgroundColor: 'rgba(228,236,248,1)',
        hoverOffset: 10, 
      }
    ]
  };
  return (
    <div className="w-full mb-[2rem] flex gap-[2rem] ">
      <div className="p-[2rem] w-[47.8%] bg-white rounded-3xl shadow-lg">
        <div className="pt-[.5rem] pr-[2rem] flex justify-between items-center">
          <div>
            <button className="px-[1.6rem] py-3 rounded-2xl flex items-center justify-center gap-3 bg-[#F5F7FF] hover:bg-[#E5E9FF] transition-colors duration-300">
              <MdCalendarToday className="text-[#A3AFD1] text-2xl" />
              <span className="font-neue_montreal text-[#A3AFD1] text-[1.6rem] hover:text-[#8B98C7] transition-colors duration-300">
                This month
              </span>
            </button>
          </div>
          <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
            <MdBarChart className="text-[#432AFA] text-6xl hover:text-[#3621D9] transition-colors duration-300" />
          </div>
        </div>
        <div id="value-graph" className="w-full flex">
          <div className="w-[30%] mt-[2.8rem] mr-[2rem] ">
            <h1 className="text-[3.4rem] text-[#1B2559] font-bold">$37.5K</h1>
            <div className="flex gap-3 text-[#01B574] text-3xl ">
              <h1 className="text-[#A3AFD0]" >Total <br /> Spent</h1>
              <h1 className="flex items-center gap-1 font-bold">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-ibg3ji" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8L18 14H6L12 8Z"></path>
                </svg> 
                +2.45%
              </h1>
            </div>
            <h1 className="text-[#01B574] flex items-center gap-2 mt-7 text-4xl font-bold">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" focusable="false" className="chakra-icon css-123kgl9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
              </svg> 
              <span>On track</span>
            </h1>
          </div>
          <div id="for graph" className="w-[60%]">
            <Line className="mt-[8rem]" options={options} data={data}/>
          </div>
        </div>
      </div>
      <div className="p-[2rem] w-[50%] bg-white rounded-3xl shadow-lg">
        <div className="py-[1rem] px-[1.5rem] flex justify-between items-center">
          <div>
            <h1 className="text-[#1B2559] text-6xl font-bold ">Weekly Revenue</h1>
          </div>
          <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
            <MdBarChart className="text-[#432AFA] text-6xl hover:text-[#3621D9] transition-colors duration-300" />
          </div>
        </div>
        <div>
          <Bar className="-mt-[1rem]"  options={options2} data={data2}/>
        </div>
      </div>
    </div>
  );
}

export default Chart;