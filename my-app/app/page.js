"use client";

import { useState } from "react";
import { SignIn, SelfHosted } from "./components/SignIn";
import Disclaimer from "./components/Disclaimer";
import LeftComponents from "./components/LeftComponents";
import { Options } from "./components/LeftComponents/TopCardComponents";

export default function Home() {
  const [isSelfHosted, setIsSelfHosted] = useState(false);

  const handleClick = (event) => {
    // console.log("The status of the isSelfHosted is : " + isSelfHosted);
    console.log(event);
    const { name } = event;
    if (name == "saas") {
      setIsSelfHosted(false);
    } else {
      setIsSelfHosted(true);
    }
  };
  return (
    <div className=" grid grid-cols-2 h-screen w-full bg-[#FAFAFA] font-[inter] ">
      <div className="sm:grid hidden  bg-white col-span-1 items-center justify-center">
        {/* top component */}
        <div className="drop-shadow-2xl  shadow-lg shadow-black -top-[100px] rounded-2xl border-[1px] border-[#E9EAEB] text-[#081735] w-[447px] mx-9 px-9 py-4 z-10 relative overflow-hidden">
          <div className=" flex border-b-[1px] border-[#E9EAEB] pr-10 py-5">
            <img className="w-[28px] h-[31px] mx-2" src="./logo.png"></img>
            <p className="font-[700] text-[18px] leading-[27px] ">
              AI to Detect & Autofix Bad Code
            </p>
          </div>
          {/* <hr className="border-[1px] border-[#E9EAEB]" /> */}

          <div className="flex justify-between">
            <Options main={"30+"} message={"Language Support"} />
            <Options main={"10K+"} message={"Developers"} />
            <Options main={"100K+"} message={"Hours Saved"} />
          </div>
        </div>
        {/* bottom component */}

        {/* top-full -left-1/2 -bottom-5 */}
        <div className="drop-shadow-2xl shadow-2xl shadow-black text-[#081735] font-[inter] rounded-xl w-[270px] h-[164px] absolute top-[360px] left-[350px] z-20 bg-white">
          <div className="px-10 py-5 flex gap-5">
            <div className="flex flex-col gap-5">
              <img className="w-[56px] h-[57px]" src="./circle.png" />
              <div className=" flex-col gap-3 inline-block">
                <p className="font-[700] text-[14px] leading-[20px]">
                  Issues Fixed
                </p>
                <p className="font-[700] text-[32px] leading-[32px]">500K+</p>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <img src="./arrow.png" />
                <p className="font-[700] text-[#0049C6]">14%</p>
              </div>
              <div className="whitespace-nowrap">
                <p className="">This week</p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 w-[284px] h-[319px]"
          src="./Subtract.png"
        />
      </div>
      {/* right layer */}
      <div className="col-span-1 grid bg-[#FAFAFA]">
        {/* main container */}
        <div className="border-[#D5D7DA] border-[1px] rounded-lg align-center h-[602px] sm:mx-[60px] bg-white my-[80px] ">
          {/* top view */}
          <div className="flex flex-col justify-center rounded-lg  border-[1px] px-[36px] py-[24px]">
            <div className="bg-[#FFFFFF]  justify-center flex flex-col text-center gap-y-[36px] mb-[24px]">
              <div className="flex justify-center">
                <img src="./logo.png" alt="codeAnt logo" />
                <p className="text-black text-[30px] whitespace-nowrap inline-block">
                  CodeAnt AI
                </p>
              </div>

              <div className="inline-block">
                <p className="text-black text-[32px] leading-[48px] font-[inter] font-bold">
                  Welcome to CodeAnt AI
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#E9EAEB] rounded-md">
              <div className="grid grid-cols-2 ">
                <button
                  className={`${isSelfHosted ? "bg-[#FAFAFA]" : "bg-[#1570EF]"} 
                    ${isSelfHosted ? "text-gray-600" : "text-[#FAFAFA]"}
                    col-span-1  px-[14px] py-[16px] rounded-lg font-bold`}
                  onClick={(e) => handleClick(e.target)}
                  name="saas"
                >
                  SAAS
                </button>
                <button
                  className={`bg-${
                    isSelfHosted ? "[#1570EF]" : "[#FAFAFA]"
                  } col-span-1 text-${
                    isSelfHosted ? "[#FAFAFA]" : "gray-600"
                  } rounded-lg font-bold`}
                  onClick={(e) => handleClick(e.target)}
                  name="selfhosted"
                >
                  Self Hosted
                </button>
              </div>
            </div>
          </div>
          {/* end of top view  */}
          {isSelfHosted != true ? (
            <SignIn Destination={`./Repository`} />
          ) : (
            <SelfHosted />
          )}
        </div>
        <div className="flex justify-center items-center relative -top-16">
          <Disclaimer />
        </div>
      </div>
    </div>
  );
}
