"use client";
import { IoMdMenu } from "react-icons/io";

import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuCLick, setMenuclick] = useState(false);

  const [aboutClick,setAboutClick] = useState(false)
  const [postClick,setPostClick] = useState(false)
  const [getInClick,setGetInClick] = useState(false)
  const [credential,setCredential] = useState(false)

  const handleaboutClick =  () => {
    setAboutClick((prevstate) => !prevstate)
  }

  const handlepostClick =  () => {
    setPostClick((prevstate) => !prevstate)
  }
  const handlegetInClick =  () => {
    setGetInClick((prevstate) => !prevstate)
  }
  const handlecredential =  () => {
    setCredential((prevstate) => !prevstate)
  }

  const handleClick = () => {
    setMenuclick(true);
  };

  const handleMenuClose = () => {
    setMenuclick(false);
  };

  return (
    <nav>
      <div className="  px-[35px] flex gap-4 items-center overflow-x-clip">
        <img className=" w-[90px] h-[60px] md:w-[150px] md:h-[101px] lg:w-[267px] lg:h-[147px]" src="/posters/logo2.jpg" alt="" />
        <h1 className=" font-CormorantUpright text-xl md:text-4xl text-[#222] leading-7 font-[500]">
          Khushhal Gram Samaj Vikas Foundation
        </h1>
      </div>

      {/* big menu  */}
      <div className=" hidden lg:block">
        <div className=" w-screen h-[60px] flex justify-end items-center gap-8 px-[35px] font-Roboto">
          <p className=" cursor-pointer">
            <Link to="/">Home</Link>
          </p>
          <div className=" relative group flex gap-1 items-center">
            <p className=" cursor-pointer">About us</p>
            <FaAngleDown size={10} />
            <div className=" hidden group-hover:block absolute top-6 z-50">
              <div className=" w-48 bg-white text-black  text-nowrap flex flex-col gap-4 px-2 py-2">
                <Link
                  to="/whoweare"
                  className=" cursor-pointer border-b-2 border-green-100 pb-2"
                >
                  Who are We
                </Link>
                <Link
                  to="/whatkgsvabout"
                  className=" cursor-pointer border-b-2 border-green-100 pb-2"
                >
                  What's KGSV About
                </Link>
                <Link
                  to="/missionvision"
                  className=" cursor-pointer border-b-2 border-green-100 pb-2"
                >
                  Mission & Vision
                </Link>
                <Link
                  to="/firststeps"
                  className=" cursor-pointer border-b-2 border-green-100 pb-2"
                >
                  The First Steps
                </Link>
                <div className=" relative group/submenu">
                  <div className=" flex justify-between items-center border-b-2 border-green-100 pb-2">
                    <Link to="/" className=" cursor-pointer  ">
                      Our Plans
                    </Link>
                    <FaAngleDown size={10} />
                  </div>
                  <div className=" w-52 hidden group-hover/submenu:block absolute top-0 left-32 bg-white space-y-2 py-2 px-2 z-50">
                    <p>
                      <Link
                        to="/agriculturalDevelopment"
                        className=" cursor-pointer border-b-2 border-green-100 pb-2"
                      >
                        Agricultural Development
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/childeducation"
                        className=" cursor-pointer border-b-2 border-green-100 pb-2"
                      >
                        Child Education
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/cleanliness"
                        className=" cursor-pointer border-b-2 border-green-100 pb-2"
                      >
                        Cleanliness
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/child-health-nutrition"
                        className=" cursor-pointer border-b-2 border-green-100 pb-2"
                      >
                        Child Health & Nutrition
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/enviroment-conservation"
                        className=" cursor-pointer border-b-2 border-green-100 pb-2"
                      >
                        Environment Conservation
                      </Link>
                    </p>
                    <p>
                      <Link
                        to="/women-empowerment"
                        className=" cursor-pointer "
                      >
                        Women Empowerment
                      </Link>
                    </p>
                  </div>
                </div>
                <div className=" relative group/submenuteam ">
                  <div className="flex justify-between items-center ">
                    <Link to="/" className=" cursor-pointer b">
                      Teams
                    </Link>
                    <FaAngleDown size={10} />
                  </div>
                  <div className=" hidden group-hover/submenuteam:block absolute top-0 left-32 bg-white space-y-2 py-2 px-2">
                    <p>
                      <Link
                        to="/foundingteam"
                        className=" cursor-pointer border-b-2 border-green-100 pb-2"
                      >
                        Founding Team
                      </Link>
                    </p>

                    <p>
                      <Link
                        to="/associates-mentors"
                        className=" cursor-pointer border-b-2 border-green-100 pb-2"
                      >
                        Associates & Mentors
                      </Link>
                    </p>
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
                  <div className=" flex flex-col ">
                  <p className=" cursor-pointer border-b-2 border-green-100 pb-2">
                      <Link to="/currentyear">Current Year</Link>
                    </p>
                    <p className=" cursor-pointer ">
                      <Link to="/previousyears">Previous Years</Link>
                    </p>
                    
                    
                  </div>
                  {/* <div className=" w-52 hidden group-hover/submenu:block absolute top-0 left-32 bg-white space-y-2 py-2 px-2 z-50">
                    <p className=" cursor-pointer border-b-2 border-green-100 pb-2">
                      <Link to="/currentyear">Current Year</Link>
                    </p>
                    <p className=" cursor-pointer ">
                      <Link to="/previousyears">Previous Years</Link>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className=" relative group flex gap-1 items-center">
            <p className=" cursor-pointer">Get Involved</p>
            <FaAngleDown size={10} />
            <div className=" hidden group-hover:block absolute top-6 z-50">
              <div className=" w-48 bg-white text-black  text-nowrap flex flex-col gap-4 px-2 py-2">
                <p className=" cursor-pointer border-b-2 border-green-100 pb-2">
                  <Link to="/pledge">Pledge</Link>
                </p>
                <p className=" cursor-pointer border-b-2 border-green-100 pb-2">
                  <Link to="/wish-to-associate">Wish to Associate</Link>
                </p>
                <p className=" cursor-pointer">
                  <Link to="/donate">Donate</Link>
                </p>
              </div>
            </div>
          </div>

          <div className=" relative group flex gap-1 items-center">
            <p className=" cursor-pointer">Credentials</p>
            <FaAngleDown size={10} />
            <div className=" hidden group-hover:block absolute top-6 z-50">
              <div className=" w-48 bg-white text-black  text-nowrap flex flex-col gap-4 px-2 py-2">
                <p className=" cursor-pointer border-b-2 border-green-100 pb-2">
                  <Link to="/credentials">Credentials</Link>
                </p>
                <p className=" cursor-pointer">
                  <Link to="/annual-reports">Annual Reports</Link>
                </p>
              </div>
            </div>
          </div>
          <p className=" cursor-pointer">
            <Link to="/donate">Donate</Link>
          </p>
          <p className=" cursor-pointer">
            <Link to="/gallery">Gallery</Link>
          </p>
          <p className=" cursor-pointer">
            <Link to="/video">Videos</Link>{" "}
          </p>
          <p className=" cursor-pointer">
            <Link to="/contact">Contact us</Link>
          </p>
        </div>
        <div className=" border border-opacity-5 border-green-950 w-screen"></div>
      </div>

      {/* small menu  */}
      <div className=" lg:hidden flex flex-col items-end">
        <div onClick={handleClick} className=" cursor-pointer">
          <IoMdMenu size={30} color="#254d42" />
        </div>

        {menuCLick ? (
          <div className="fixed inset-0 flex items-center justify-center bg-green-900 bg-opacity-80 z-50 overflow-y-auto">
            <button
              onClick={handleMenuClose}
              aria-label="Close Menu"
              className="absolute top-6 right-6 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className=" text-white text-xl flex flex-col gap-2 mt-10 py-4">

              <Link to="/" className=" cursor-pointer">Home</Link>

              <div className=" flex flex-col ">

                <div onClick={handleaboutClick} className="flex gap-1 items-center">
                  <p className=" cursor-pointer">About us</p>
                <FaAngleDown size={10} />
                </div>
                
                {/* dropdown  */}
                {aboutClick && (
                  <div className="ml-24 text-base">
                  <p><Link to="/whoweare" className=" cursor-pointer">Who are we</Link></p>
                  <p><Link to="/whatkgsvabout" className=" cursor-pointer">What's KGSV About</Link></p>
                  <p><Link to="/missionvision" className=" cursor-pointer">Mission & Vision</Link></p>
                  <p><Link to="/firststeps" className=" cursor-pointer">The First Steps</Link></p>
                  <p><Link to="/ourplans" className=" cursor-pointer">Our Plans</Link></p>
                  <p><Link to="/foundingteam" className=" cursor-pointer">Teams</Link></p>
                  </div>
                )}
                
              </div>

              <div className=" flex flex-col">
                <div onClick={handlepostClick} className="flex gap-1 items-center">
                <p className=" cursor-pointer">Posts</p>
                <FaAngleDown size={10} />
                </div>
                {/* dropdown  */}
                {postClick && (
                  <div className="ml-24 text-base">
                  <Link to="/currentyear" className=" cursor-pointer">Current Posts</Link>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <div onClick={handlegetInClick} className="flex gap-1 items-center">
                <p className=" cursor-pointer">Get Involved</p>
                <FaAngleDown size={10} />
                </div>
                {getInClick && (
                  <div className="ml-24 text-base">
                  <p><Link to="/pledge" className=" cursor-pointer">Pledge</Link></p>
                  <p><Link to="/wish-to-associate" className=" cursor-pointer">Wish to associate</Link></p>
                  <p><Link to="/donate" className=" cursor-pointer">Donate</Link></p>
                  </div>
                )}
              </div>

              <div className=" flex flex-col">
                <div onClick={handlecredential} className=" flex gap-1 items-center">
                <p className=" cursor-pointer">Credentials</p>
                <FaAngleDown size={10} />
                </div>
                {/* dropdown  */}
                {credential && (
                  <div className=" ml-24 text-base">
                  <p><Link to="/credentials" className=" cursor-pointer">Credentials</Link></p>
                  <p><Link to="/annual-reports" className=" cursor-pointer">Annual Reports</Link></p>
                  </div>
                )}
              </div>
              <Link to="/donate" className=" cursor-pointer">Donate</Link>
              <Link to="/gallery" className=" cursor-pointer">Gallery</Link>
              <Link to="/video" className=" cursor-pointer">Videos </Link>
              <Link to="/contact" className=" cursor-pointer">Contact us</Link>
            </div>
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
//['Agriculture','Child Education','Cleanliness','Child Health & Nutrition','Environment Conservation','Women Empowerment']