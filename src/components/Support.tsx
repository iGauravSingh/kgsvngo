import { LuBookOpen } from "react-icons/lu";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { LuTreePine } from "react-icons/lu";
import { SlUserFemale } from "react-icons/sl";
import { GiGearHammer } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";

const supportArray = ["Education","Cleanliness","Health","Environment","Women Empowerment","Training","Agriculture"]

const Support = () => {
    return (
      <div className="">
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 font-popins ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-greenngo font-CormorantUpright">
          KGSV needs support / volunteers in the following areas 
          </h1>
          
          <div className="flex flex-wrap gap-6 justify-center items-center">

          <div className=" w-[150px] h-12 bg-[#ff1949] flex gap-2 justify-center items-center px-4 py-6 text-white">
              <LuBookOpen size={25} />
              <p className="">{supportArray[0]}</p>
            </div>
            <div className=" w-[180px] h-12 bg-[#67e8f9] flex gap-2 justify-center items-center px-4 py-6 text-white">
              <MdOutlineCleaningServices size={25} />
              <p className="">{supportArray[1]}</p>
            </div>
            <div className=" w-[180px] h-12 bg-[#45b29d] flex gap-2 justify-center items-center px-4 py-6 text-white">
              <MdOutlineHealthAndSafety size={25} />
              <p className="">{supportArray[2]}</p>
            </div>
            <div className=" w-[180px] h-12 bg-[#176e3b] flex gap-2 justify-center items-center px-4 py-6 text-white">
              <LuTreePine size={25} />
              <p className="">{supportArray[3]}</p>
            </div>
            <div className=" w-[180px] h-12 bg-[#e24277] flex gap-2 justify-center items-center px-4 py-6 text-white">
              <SlUserFemale size={25} />
              <p className=" text-center">{supportArray[4]}</p>
            </div>
            <div className=" w-[180px] h-12 bg-[#212635] flex gap-2 justify-center items-center px-4 py-6 text-white">
              <GiGearHammer size={25} />
              <p className="">{supportArray[5]}</p>
            </div>
            <div className=" w-[180px] h-12 bg-[#69bb35] flex gap-2 justify-center items-center px-4 py-6 text-white">
              <PiFarm size={25} />
              <p className="">{supportArray[6]}</p>
            </div>

          </div>
          
    
          
    
          <div className=" p-6 mt-4 font-popins bg-white/50 shadow-lg  px-4 py-4 rounded-xl">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center text-greenngo font-CormorantUpright">
              I / We wish to Associate
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block  text-sm font-bold mb-2 text-greenngo" htmlFor="name">
                  Enter Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-none focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
    
              <div>
                <label className="block  text-sm font-bold mb-2 text-greenngo" htmlFor="email">
                  Enter E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-none focus:outline-none focus:shadow-outline"
                  placeholder="Your E-mail"
                />
              </div>
    
              <div>
                <label className="block  text-sm font-bold mb-2 text-greenngo" htmlFor="phone">
                  Enter Phone Nos
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-none focus:outline-none focus:shadow-outline"
                  placeholder="Your Phone Number"
                />
              </div>
    
              <div>
                <label className="block  text-sm font-bold mb-2 text-greenngo" htmlFor="contribution">
                  Area of Proposed Contribution
                </label>
                <textarea
                  id="contribution"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-none focus:outline-none focus:shadow-outline"
                  placeholder="Describe your proposed contribution"
                ></textarea>
              </div>
    
              <div className="text-center">
                <button
                  type="submit"
                  className=" font-bold py-2 px-4 rounded focus:outline-none border-2 border-green-800 hover:bg-green-800 text-greenngo hover:text-white focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      );
}

export default Support