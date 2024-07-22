import Image from "next/image";
import {
  MdBarChart,
  MdAttachMoney,
  MdCheckCircle,
  MdFileCopy,
} from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Hero() {
  const statsData = [
    {
      icon: <MdBarChart />,
      label: "Earnings",
      value: "$350.4",
    },
    {
      icon: <MdAttachMoney />,
      label: "Spend this month",
      value: "$642.39",
    },
    {
      icon: null,
      label: "Sales",
      value: "$574.34",
      additionalInfo: {
        percentage: "+23%",
        text: "since last month",
      },
    },
    {
      icon: null,
      label: "Your balance",
      value: "$1,000",
      additionalInfo: {
        currency: {
          options: ["USD", "EUR", "GBA"],
          selected: "USD",
        },
      },
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          focusable="false"
          class="chakra-icon css-1efglvi"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22 5.18L10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45A10.02 10.02 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"></path>
        </svg>
      ),
      label: "New Tasks",
      value: "154",
    },
    {
      icon: <MdFileCopy />,
      label: "Total Projects",
      value: "2935",
    },
  ];
  return (
    <div className="hero  w-full pt-48 font-neue_montreal mb-[2rem]">
      <div className="flex flex-wrap  gap-[2rem]">
        {statsData.map((data, index) => {
          return (
            <div
              key={index}
              className="w-[32.5rem] py-[1.5rem]  px-[2rem] bg-white rounded-[2rem] flex items-center gap-7"
            >
              {index !== 2 && index !== 3 ? (
                <div
                  className={`" px-3 py-3 rounded-full  ${
                    index === 4
                      ? " bg-gradient-to-r from-[#3D88ED] to-[#04BCFC] text-white "
                      : "bg-[#F5F7FF] text-[#432AFA]"
                  }  text-[4rem] "`}
                >
                  {data.icon}
                </div>
              ) : null}
              <div className=" w-full flex items-center  justify-between">
                <div>
                  <p className="text-[#AAB5D2] text-xl leading-none">
                    {data.label}
                  </p>
                  <div
                    className={`text-[#1A2459] text-6xl font-neue_montreal_Bold`}
                  >
                    {data.value}{" "}
                    {index == 2 && (
                      <h1 className="text-xl text-[#AAB5D2] font-neue_montreal">
                        <span className="text-[#15BB7E]">+23% </span> since last
                        month
                      </h1>
                    )}
                  </div>
                </div>
                <div>
                  {index == 3 && (
                    <div className=" px-3 py-3 rounded-full   text-[4rem] text-[#432AFA] flex items-center">
                      <Image
                        src="data:image/png;base64,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"
                        width="48"
                        height="48"
                        alt=""
                      />
                      <RiArrowDropDownLine className="text-4xl" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
