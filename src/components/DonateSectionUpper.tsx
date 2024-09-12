import { Link } from "react-router-dom";

const DonateSectionUpper = () => {
  return (
    <div className="w-screen z-50 mb-16">
      <div className=" relative  h-14 bg-yellow-600 text-white flex justify-center items-center  pl-2 pr-6 ">
        <p className=" text-center">
          Join Our Cause For a Greener and Prosperous India.
        </p>
        <button className=" absolute right-16 px-5 py-3 bg-greenngo text-slate-50 text-lg rounded-lg hover:bg-ngodark">
              <Link to="/donate">
                Donate
              </Link>
            </button>
      </div>
    </div>
  );
};

export default DonateSectionUpper;
