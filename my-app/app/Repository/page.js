"use client";
import { useState } from "react";
const NavItem = ({ imgSrc, message, selected }) => {
  return (
    <a
      className={`flex px-6 py-3 rounded-md mx-3 gap-4 ${
        selected ? "bg-[#1570EF]" : "bg-white"
      }
        ${selected ? "text-white" : "text-black"}
        font-[600]
        
      `}
      href=""
    >
      <img
        className={`${
          selected ? "" : "invert"
        } w-[20px] h-[18px] text-[#414651]`}
        src={`${imgSrc}`}
      />

      <p className="text-sm">{`${message}`}</p>
    </a>
  );
};

const RepositoryItem = ({
  repoName,
  repoTech,
  repoSize,
  repoVisibility,
  repoUpdate,
}) => {
  return (
    <div
      className={` h-[108px] border-[1px] border-[#E9EAEB] rounded-lg flex items-center mx-5 bg-white `}
    >
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-5 mx-5">
          <p className="font-bold">{repoName}</p>
          <button className="bg-[#EFF8FF] rounded-xl text-[#175CD3] px-2 py-1 text-[10px] border-[1px] border-[#B2DDFF]">
            {repoVisibility}
          </button>
        </div>
        <div className="flex gap-3 sm:gap-10 mx-5">
          <div className="flex gap-2 items-center">
            <p>{repoTech}</p>
            <img className="w-[8px] h-[8px]" src="./Repository/dot.png" />
          </div>
          <div className="flex items-center gap-2">
            <img src="./Repository/database.png" />
            <p className="text-[14px] sm:text-md">{repoSize}</p>
          </div>

          <p className="text-[15px] sm:text-md">Updated {repoUpdate} day ago</p>
        </div>
      </div>
    </div>
  );
};

const RepositoryDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sm:grid grid-cols-12  bg-white text-[#181D27]">
      {/* left navigation bar */}
      <div className="sm:h-screen col-span-2 bg-white border-r-[1px] border-[#E9EAEB]">
        <nav className="sm:flex flex-col gap-1 sm:h-full justify-between">
          {/* heading and logo */}
          <div className="mt-2 sm:flex sm:flex-col gap-2 sm:justify-between ">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 p-3 items-center">
                <img src="./logo_small.png" alt="logo" />
                <p className="font-Satoshi  text-[24px]">CodeAnt AI</p>
              </div>
              <div className="relative mr-5">
                <button
                  className="sm:hidden block text-2xl"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <img
                    src={`./Repository/Navigation/${
                      isMenuOpen ? "close.png" : "bars.png"
                    }`}
                  />
                </button>
              </div>
            </div>
            <hr
              className={`border-[1px] border-gray-300 sm:hidden mt-3 ${
                isMenuOpen ? "hidden" : "block"
              }`}
            ></hr>

            <div
              className={` bg-white pr-72 sm:pr-0 ${
                isMenuOpen ? "block" : "hidden sm:block"
              }`}
            >
              <select
                name="userDetails"
                className="sm:pr-14 mx-4 pr-60 py-4 sm:py-3 bg-white border-[#E9EAEB] border-[1px] rounded-md focus:outline-none  focus:ring-0 z-20 "
              >
                <option value="username">Pradeep Sahu...</option>
                <option value="Profile">Profile</option>
              </select>
            </div>

            <div
              className={`z-20 flex flex-col gap-3 mt-4  transition-all duration-300 ${
                isMenuOpen ? "block" : "hidden sm:block"
              }`}
            >
              <NavItem
                imgSrc={`./home.png`}
                message={`Repositories`}
                selected={`${true}`}
              />
              <NavItem
                imgSrc={`./Repository/code.png`}
                message={`AI Code Review`}
              />
              <NavItem
                imgSrc={`./Repository/cloud.png`}
                message={`Cloud Security`}
              />
              <NavItem
                imgSrc={`./Repository/book.png`}
                message={`How to Use`}
              />
              <NavItem imgSrc={`./Repository/gear.png`} message={`Settings`} />
            </div>
          </div>

          <div
            className={`z-20 flex flex-col justify-end mb-5 ${
              isMenuOpen ? "block" : "hidden sm:block"
            }`}
          >
            <NavItem imgSrc={`./Repository/Frame.png`} message={`Support`} />
            <NavItem imgSrc={`./Repository/sign-out.png`} message={`Logout`} />
          </div>
        </nav>
      </div>
      <div className="bg-[#E9EAEB] col-span-10 font-[inter] h-screen ">
        <div className=" mx-5 bg-white border-[1px] border-[#E9EAEB] rounded-md mt-4  py-3">
          <div className="sm:flex justify-between mx-4 rounded-2xl">
            <div className={`pb-2 px-1`}>
              <p
                className={`font-[600] text-[32px] sm:text-2xl  text-[#181D27]`}
              >
                Repositories
              </p>
              <p className="text-[20px] my-2 sm:text-md leading-[12px] font-extralight ">
                33 total repositories
              </p>
            </div>
            <div className="flex items-center gap-3 mx-2">
              <button className="bg-white text-black sm:px-3 sm:py-2 whitespace-nowrap py-3 px-5 rounded-md border-[1px] border-[#E9EAEB] flex items-center gap-x-3">
                <img
                  className="w-[20px] h-[20px]"
                  src="./Repository/Frame_2.png"
                />
                Refresh All
              </button>
              <button className="bg-blue-600 text-white sm:px-5 sm:py-2 py-3 px-5 whitespace-nowrap rounded-md flex items-center gap-x-3">
                <img
                  className="sm:w-[20px] sm:h-[20px]"
                  src="./Repository/plus.png"
                />
                <p>Add Repository</p>
              </button>
            </div>
          </div>
          <div className="mx-3 mt-3 sm:mt-0">
            <button className="flex items-center border-[1px] border-[#E9EAEB)] p-1 rounded-lg drop-shadow-md shadow-[#E9EAEB] shadow bg-white">
              <img className="px-2" src="./Repository/search.png" />
              <input
                className="px-3 py-1 pr-24 focus:outline-none bg-white"
                type="search"
                placeholder="Search Repositories"
              />
            </button>
          </div>
        </div>
        {/* from here add the sections */}

        <div className={``}>
          <RepositoryItem
            repoName={`design-system`}
            repoTech={`React`}
            repoSize={`7320 KB`}
            repoVisibility={`Public`}
            repoUpdate={`1`}
          />
          <RepositoryItem
            repoName={`codeant-ci-app`}
            repoTech={`Javascript`}
            repoSize={`5871 KB`}
            repoVisibility={`Private`}
            repoUpdate={`2`}
          />
          <RepositoryItem
            repoName={`analytics-dashboard`}
            repoTech={`Python`}
            repoSize={`4521 KB`}
            repoVisibility={`Public`}
            repoUpdate={`5`}
          />
          <RepositoryItem
            repoName={`mobile-app`}
            repoTech={`Swift`}
            repoSize={`3096 KB`}
            repoVisibility={`Public`}
            repoUpdate={`3`}
          />
          <RepositoryItem
            repoName={`e-commerce-platform`}
            repoTech={`Java`}
            repoSize={`6210 KB`}
            repoVisibility={`Private`}
            repoUpdate={`6`}
          />
          <RepositoryItem
            repoName={`blog-website`}
            repoTech={`HTML/CSS`}
            repoSize={`1876 KB`}
            repoVisibility={`Public`}
            repoUpdate={`4`}
          />
        </div>
      </div>
    </div>
  );
};

export default RepositoryDashboard;
