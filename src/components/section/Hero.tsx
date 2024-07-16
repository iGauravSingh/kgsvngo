import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const slide1 = "/posters/mustard.jpg";
const slide2 = "/posters/bagan.jpg";
// const slide3 = "/posters/mustard.jpg";

const images = [
  {
    id: 1,
    heading: "वसुधैव कुटुम्बकम् - विश्व एक परिवार है",
    Decsription: "the world is one family",
    image: slide1,
  },
  {
    id: 2,
    heading: "Vasudhaiva Kutumbakam - The world is one family",
    Decsription: "",
    image: slide2,
  },
  
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds

    //console.log(currentImageIndex);
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const handleLeftClick = () => {
    if (currentImageIndex > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1) % images.length);
    }
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const handleMouseEnterLeft = () => {
    setHoveredLeft(true);
  };

  const handleMouseLeaveLeft = () => {
    setHoveredLeft(false);
  };

  const handleMouseEnterRight = () => {
    setHoveredRight(true);
  };

  const handleMouseLeaveRight = () => {
    setHoveredRight(false);
  };

  const iconStyleleft = {
    color: hoveredLeft ? "white" : "black",
  };
  const iconStyleright = {
    color: hoveredRight ? "white" : "black",
  };

  return (
    <div className=" w-screen relative overflow-clip bg-white ">
      <div className="relative w-screen h-screen overflow-hidden">
        <div className=" w-full flex justify-center items-center">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ${
                index === currentImageIndex
                  ? "translate-x-0"
                  : "translate-x-full"
              } backdrop-brightness-75`}
              style={{ backgroundImage: `url(${img.image})` }}
            >
              {/* Add text caption here */}
              <div className=" z-10 flex flex-col items-center h-full">
                <div className="  w-full h-full relative">
                  <div className=" w-[500px] h-[100px] flex justify-center "></div>
                  <h2 className={` absolute aspect-auto -top-4 left-1/2 -translate-x-1/2   bg-navcolor  text-nowrap text-4xl rounded px-14 py-6 ${img.id == 1 ? 'text-[#ef2f4c]' : 'text-white'}`}>
                    {img.heading}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* next button  */}
      <div
        onClick={handleLeftClick}
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
        className=" absolute top-[50%] left-8 w-12 h-12 rounded-full bg-white hover:bg-newblue flex justify-center items-center cursor-pointer "
      >
        <IoIosArrowBack size={20} style={iconStyleleft} />
      </div>

      <div
        onClick={handleRightClick}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
        className=" absolute top-[50%] right-8 w-12 h-12 rounded-full bg-white hover:bg-newblue flex justify-center items-center cursor-pointer  "
      >
        <IoIosArrowForward size={20} style={iconStyleright} />
      </div>
    </div>
  );
};

export default Hero;
