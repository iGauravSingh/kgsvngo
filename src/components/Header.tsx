"use client";
import { IoMdMenu } from "react-icons/io";

import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [menuCLick, setMenuclick] = useState(false);

  const handleClick = () => {
    setMenuclick((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="  px-[35px] flex gap-4 items-center">
        <img className=" w-[267px] h-[147px]" src="/posters/logo2.jpg" alt="" />
        <h1 className=" font-CormorantUpright text-xl md:text-4xl text-[#222] leading-7">
          Khushhal Gram Samaj Vikas Foundation
        </h1>
      </div>

      {/* big menu  */}
      <div className=" hidden md:block">
        <div className=" w-screen h-[60px] flex justify-end items-center gap-8 px-[35px] font-Roboto">
          <p className=" cursor-pointer">Home</p>
          <div className=" relative group flex gap-1 items-center">
            <p className=" cursor-pointer">About us</p>
            <FaAngleDown size={10} />
            <div className=" hidden group-hover:block absolute top-6 z-50">
              <div className=" w-48 bg-white text-black  text-nowrap flex flex-col gap-4 px-2 py-2">
                <p className=" cursor-pointer">Who are We</p>
                <p className=" cursor-pointer">What's KGSV About</p>
                <p className=" cursor-pointer">Mission & Vision</p>
                <p className=" cursor-pointer">The First Steps</p>
                <div className=" relative group/submenu">
                  <div className=" flex justify-between items-center">
                    <p className=" cursor-pointer">Our Plans</p>
                    <FaAngleDown size={10} />
                  </div>
                  <div className=" w-52 hidden group-hover/submenu:block absolute top-0 left-32 bg-white space-y-2 py-2 px-2 z-50">
                    <p className=" cursor-pointer">Child Education</p>
                    <p className=" cursor-pointer">Cleanliness</p>
                    <p className=" cursor-pointer">Child Health & Nutrition</p>
                    <p className=" cursor-pointer">Environment Conservation</p>
                    <p className=" cursor-pointer">Women Empowerment</p>
                  </div>
                </div>
                <div className=" relative group/submenuteam ">
                  <div className="flex justify-between items-center">
                    <p className=" cursor-pointer">Teams</p>
                    <FaAngleDown size={10} />
                  </div>
                  <div className=" hidden group-hover/submenuteam:block absolute top-0 left-32 bg-white space-y-2 py-2 px-2">
                    <p className=" cursor-pointer">Founding Team</p>
                    <p className=" cursor-pointer">Associates & Mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative group flex gap-1 items-center">
            <p className=" cursor-pointer">Posts</p>
            <FaAngleDown size={10} />
            <div className=" hidden group-hover:block absolute top-6 z-50">
              <div className=" w-48  bg-white text-black  text-nowrap flex flex-col gap-4 px-2 py-2">
                <div className=" relative group/submenu">
                  <div className=" flex justify-between items-center">
                    <p className=" cursor-pointer">Year 2024</p>
                    <FaAngleDown size={10} />
                  </div>
                  <div className=" w-52 hidden group-hover/submenu:block absolute top-0 left-32 bg-white space-y-2 py-2 px-2 z-50">
                    <p className=" cursor-pointer">Current Year</p>
                    <p className=" cursor-pointer">Previous Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative group flex gap-1 items-center">
            <p className=" cursor-pointer">Get Involved</p>
            <FaAngleDown size={10} />
            <div className=" hidden group-hover:block absolute top-6 z-50">
              <div className=" w-48 bg-white text-black  text-nowrap flex flex-col gap-4 px-2 py-2">
                <p className=" cursor-pointer">Pledge</p>
                <p className=" cursor-pointer">Wish to Associate</p>
                <p className=" cursor-pointer">Donate</p>
              </div>
            </div>
          </div>

          <div className=" relative group flex gap-1 items-center">
            <p className=" cursor-pointer">Credentials</p>
            <FaAngleDown size={10} />
            <div className=" hidden group-hover:block absolute top-6 z-50">
              <div className=" w-48 bg-white text-black  text-nowrap flex flex-col gap-4 px-2 py-2">
                <p className=" cursor-pointer">Credentials</p>
                <p className=" cursor-pointer">Annual Reports</p>
                
                
                
              </div>
            </div>
          </div>

          <p className=" cursor-pointer">Gallery</p>
          <p className=" cursor-pointer">Videos </p>
          <p className=" cursor-pointer">Contact us</p>
        </div>
      </div>

      {/* small menu  */}
      <div className=" md:hidden flex flex-col items-end">
        <div onClick={handleClick} className=" cursor-pointer">
          <IoMdMenu size={30} color="#254d42" />
        </div>

        {menuCLick ? (
          <div className=" w-screen h-[200px] bg-greenngo text-white flex flex-col items-end px-7">
            <p className=" cursor-pointer">Home</p>
            <div className=" flex gap-1 items-center">
              <p className=" cursor-pointer">About us</p>
              <FaAngleDown size={10} />
            </div>

            <div className=" flex gap-1 items-center">
              <p className=" cursor-pointer">Posts</p>
              <FaAngleDown size={10} />
            </div>

            <div className=" flex gap-1 items-center">
              <p className=" cursor-pointer">Get Involved</p>
              <FaAngleDown size={10} />
            </div>

            <div className=" flex gap-1 items-center">
              <p className=" cursor-pointer">Credentials</p>
              <FaAngleDown size={10} />
            </div>

            <p className=" cursor-pointer">Gallery</p>
            <p className=" cursor-pointer">Videos </p>
            <p className=" cursor-pointer">Contact us</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Header;

{
  /* <header className=" bg-white relative z-20 text-greenngo w-screen font-popins ">
        <div className="flex h-[150px] items-center justify-between pt-2 px-11">
          <div className=" w-full flex items-center justify-between">
            <a
              href="/"
              className="-ml-6 flex items-center px-6 text-xl"
            >
              <img className=" w-60 h-36 z-40" src="/posters/logo2.jpg" alt="logo" />
              <span className="sr-only">Back to homepage</span>
            </a>
            <p className="text-xl font-semibold">
              Khushhal Gram Samaj Vikas Foundation
            </p>
          </div> */
}
{
  /* <Button size="medium">Donate now</Button> */
}
//   </div>
// </header>
// <div className=" bg-white sticky top-0 z-20 text-greenngo py-4 w-screen">
//   <Container className="">
//     <div className="hidden lg:block">
//     <div className=" flex min-h-[--header-row-height] items-center justify-end gap-5">
//     <p className="text-lg font-medium">Home</p>
//     <p className="text-lg font-medium">About KGSV</p>
{
  /* <p className="text-lg font-medium">Remembering Gurudev</p> */
}
{
  /* <p className="text-lg font-medium">Plans</p> */
}
// <p className="text-lg font-medium">Posts</p>
// <p className="text-lg font-medium">Credentials</p>
{
  /* <p className="text-lg font-medium">Donate</p> */
}

// <p className="text-lg font-medium">Team</p>
// <p className="text-lg font-medium">Associates</p>
// <p className="text-lg font-medium">Media</p>
{
  /* <p className="text-lg font-medium">Videos</p> */
}
// <p className="text-lg font-medium">Contact</p>
// </div>
// </div>
//     <div className="lg:hidden">
//       <IoMdMenu size={30} color="#F3CA52" />

//     </div>
//   </Container>
// </div>
