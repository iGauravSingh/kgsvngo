import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <div className="w-screen -mb-24">
      <div className="  h-14 bg-yellow-600 text-white flex justify-center items-center gap-11 pl-2 pr-6">
        <p className=" ">
          Applied for Deductions under Section 80 (G) of Income Tax Act, 1961
        </p>
        <button className=" px-5 py-3 bg-greenngo text-slate-50 text-lg rounded-lg hover:bg-ngodark">
              <Link to="/donate">
                Donate
              </Link>
            </button>
      </div>
    </div>
  );
};

export default DonateSection;
