import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <div className="w-screen -mb-24">
      <div className="  relative min-h-14 bg-yellow-600 text-white flex justify-center items-center  pl-2 pr-6">
        <p className=" text-center text-sm md:text-base ">
          <span className=" flex flex-col lg:flex-row">
          <span>KGSV has Applied for Deductions under Section 80 (G) </span>
          <span>of Income Tax Act, 1961</span>
          </span>
        </p>
        <button className="lg:hidden ml-4 px-5 py-3 bg-greenngo text-slate-50 text-lg rounded-lg hover:bg-ngodark">
              <div className=" text-right">
              <Link to="/donate">
                Donate
              </Link>
              </div>
            </button>
        <button className=" hidden lg:block absolute right-16 px-5 py-3 bg-greenngo text-slate-50 text-lg rounded-lg hover:bg-ngodark">
              <div className=" text-right">
              <Link to="/donate">
                Donate
              </Link>
              </div>
            </button>
      </div>
    </div>
  );
};

export default DonateSection;
