import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Progress } from "../ui/progress";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function Profile() {
  const personalInfo = [
    {
      category: "Education",
      value: "Stanford University",
    },
    {
      category: "Languages",
      value: "English, Spanish, Italian",
    },
    {
      category: "Department",
      value: "Product Design",
    },
    {
      category: "Work History",
      value: "Google, Facebook",
    },
    {
      category: "Organization",
      value: "Simmmple Web LLC",
    },
    {
      category: "Birthday",
      value: "20 July 1986",
    },
  ];
  const notificationSettings = [
    {
      id: "1",
      label: "Item update notifications",
    },
    {
      id: "2",
      label: "Item comment notifications",
    },
    {
      id: "3",
      label: "Buyer review notifications",
    },
    {
      id: "4",
      label: "Rating reminders notifications",
    },
    {
      id: "5",
      label: "Meetups near you notifications",
    },
    {
      id: "6",
      label: "Company news notifications",
    },
    {
      id: "7",
      label: "New launches and projects",
    },
    {
      id: "8",
      label: "Monthly product changes",
    },
    {
      id: "9",
      label: "Subscribe to newsletter",
    },
    {
      id: "10",
      label: "Email me when someone follows me",
    },
  ];
  return (
    <div className="w-full pt-48 pl-[1.5rem] pr-14">
      <div className="flex gap-[2rem] mb-[2rem]">
        <div className="w-[60%]  flex gap-[2rem]">
          <div className="w-[55%] bg-white shadow-lg rounded-3xl  p-[2rem]">
            <img
              className="rounded-3xl h-[14rem] object-cover object-left"
              src="https://horizon-ui.com/horizon-ui-chakra/static/media/banner.80db2a895510dd2719aa.png"
              alt=""
            />
            <div className="w-full flex justify-center items-center">
              <img
                className="border-4 border-white rounded-full w-32 h-32 -translate-y-1/2"
                src="https://horizon-ui.com/horizon-ui-chakra/static/media/avatar4.54d5c1de851c273b2cd9.png"
                alt=""
              />
            </div>
            <div className="text-center -translate-y-1/2">
              <h1 className="text-[#1B2559] text-5xl font-bold leading-none mb-3">
                Adela Parkson
              </h1>
              <p className="text-gray-400 text-2xl mb-5">Product Designer</p>
            </div>{" "}
            <div className="flex justify-between -translate-y-5 px-5 text-center">
              <div>
                <h1 className="text-[#1B2559] text-6xl font-bold">17</h1>
                <p className="text-gray-400 text-2xl mb-5">Posts</p>
              </div>
              <div>
                <h1 className="text-[#1B2559] text-6xl font-bold">9.7k</h1>
                <p className="text-gray-400 text-2xl mb-5">Followers</p>
              </div>
              <div>
                <h1 className="text-[#1B2559] text-6xl font-bold">274</h1>
                <p className="text-gray-400 text-2xl mb-5">Following</p>
              </div>
            </div>
          </div>
          <div className="w-[45%] bg-white shadow-lg rounded-3xl p-[2rem]">
            <div className="flex justify-between items-center mb-7">
              <h1 className="text-[#1B2559] text-6xl font-bold"></h1>
              <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
                <BsThreeDots className="text-[#432AFA] text-4xl hover:text-[#3621D9] transition-colors duration-300" />
              </div>
            </div>
            <div>
              <div className="w-full flex justify-center items-center mb-5">
                <div className="w-[10rem] h-[10rem]  rounded-full flex justify-center items-center bg-[#F4F7FE] ">
                  <svg
                    fill="#422BFA"
                    viewBox="0 0 24 24"
                    focusable="false"
                    class="chakra-icon css-1eusyjq"
                    height="5rem"
                    width="5rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0112 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0122 15c0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-center mb-16">
                <h1 className="text-[#1B2559] text-6xl font-bold">
                  Your storage
                </h1>
                <p className="text-gray-400 text-3xl mb-5">
                  Supervise your drive <br /> space in the easiest <br /> way
                </p>
              </div>
              <div className="flex justify-between items-center mb-1 ">
                <p className="text-gray-400 text-3xl">25.6GB</p>
                <p className="text-gray-400 text-3xl">50GB</p>
              </div>
              <div>
                <Progress value={40} />
              </div>
            </div>
          </div>
        </div>
        <di className="shadow-lg w-[38%] bg-white p-[2rem] rounded-3xl">
          <div className="relative w-full h-[17rem] border-2 bg-[#F6FBFD] border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.gif"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <svg
            
              fill="#422BFA"
              stroke-width="0"
              viewBox="0 0 24 24"
              focusable="false"
              class="chakra-icon css-1yyus16"
              height="6em"
              width="6em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"></path>
            </svg>
            <p className="text-6xl  font-medium text-[#422BFA]">Upload Files</p>
            <p className="text-2xl text-gray-500 mt-1">
              PNG, JPG and GIF files are allowed
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-[#1B2559] text-6xl font-bold">
              Complete your profile
            </h1>
            <p className="text-gray-400 text-3xl">
              Stay on the pulse of distributed projects with an anline
              whiteboard to plan, coordinate and discuss
            </p>
          </div>
          <button className="bg-[#422BFA] px-12 py-4 mt-5 text-white text-2xl rounded-3xl transition-all hover:bg-[#432bfabe]">
            Publish now
          </button>
        </di>
      </div>
      <div className="w-full flex gap-[2rem] mb-[2rem]">
        <div className="shadow-lg w-[49%] bg-white p-[2rem] rounded-3xl">
          <h1 className="text-[#1B2559] text-6xl font-bold">All projects</h1>
          <p className="text-gray-400 text-3xl mt-1 mb-20">
            Here you can find more details about your projects. Keep you user
            engaged by providing meaningful information.
          </p>
          <div className="">
            {[
              {
                img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Project1.d5952144f76e2cb9e5d6.png",
                text: "Project#1",
                title: "Technology behind the Blockchain",
              },
              {
                img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Project1.d5952144f76e2cb9e5d6.png",
                text: "Project#2",
                title: "Greatest way to a good Economy",
              },
              {
                img: "https://horizon-ui.com/horizon-ui-chakra/static/media/Project3.378b532af038bf47559c.png",
                text: "Project#3",
                title: "Most essential tips for Burnout",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-10 shadow-md py-5 rounded-xl px-5"
              >
                <div className="flex items-center gap-5">
                  <img className="w-32 h-32 rounded-xl" src={item.img} alt="" />
                  <div>
                    <h1 className="text-[#1B2559] text-4xl font-bold">
                      {item.title}
                    </h1>
                    <div className="flex gap-2 items-center">
                      <p className="text-gray-400 text-2xl">{item.text}</p>
                      <a href="/" className="text-[#6B57FD] text-2xl">
                        See project details
                      </a>
                    </div>
                  </div>
                </div>
                <div className="">
                  <svg
                    className="text-gray-400"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    focusable="false"
                    class="chakra-icon css-1oftuuq"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                  </svg>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="shadow-lg w-[49%] bg-white p-[2rem] rounded-3xl ">
          <h1 className="text-[#1B2559] text-6xl font-bold">
            General Information
          </h1>
          <p className="text-gray-400 text-3xl mt-1 mb-20">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get back stabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all...
          </p>
          <div className="w-full flex flex-wrap gap-[2rem]">
            {personalInfo.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[47%] p-[2rem] shadow-md rounded-3xl"
                >
                  <p className="text-gray-400 text-2xl">{item.category}</p>
                  <p className="text-[#1B2559] text-3xl font-bold   ">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full bg-white shadow-lg p-[2rem] rounded-3xl">
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-[#1B2559] text-6xl font-bold">Notifications</h1>
          <div className="bg-[#F5F7FF] px-[.9rem] py-3 rounded-2xl hover:bg-[#E5E9FF] transition-colors duration-300">
            <BsThreeDots className="text-[#432AFA] text-6xl hover:text-[#3621D9] transition-colors duration-300" />
          </div>
        </div>
        <div>
          {notificationSettings.map((item, index) => {
            return (
              <div key={index} className="h-16 w-max flex items-center mb-5">
                <Switch className="mr-5" id={item.id} />
                <Label className="text-4xl" htmlFor={item.id}>
                  {item.label}
                </Label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
