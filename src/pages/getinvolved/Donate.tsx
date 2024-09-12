import Footer from "../../components/Footer";
import Header from "../../components/Header";





const Donate = () => {
  

  return (
    <>
      <Header />

      <>
        <div className=" mx-1 md:mx-8 md:p-4 font-popins mt-2">
          {/* Hero Section */}
          <div className="relative mb-8">
            <img
              src="/originalpagesimages/donate11111.jpg"
              alt="Hero Image"
              className="w-full h-64 object-cover object-top"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <h1 className="text-black text-4xl font-bold font-CormorantUpright">
                Support Our Cause
              </h1> */}
            </div>
          </div>

          {/* About Section */}
          <div className=" relative md:mb-4">
            <div className=" flex flex-col md:flex-row justify-center  gap-12">
            <h2 className="text-2xl font-bold md:mb-4 text-center leading-9 tracking-wide">
              Support Our Cause
            </h2>
            
            <button className=" hidden md:block absolute right-16 px-5 py-3 bg-greenngo text-slate-50 text-lg rounded-lg hover:bg-greenngo">
              <a href="https://eazypay.icicibank.com/eazypayLink?P1=5DGWtEPDCz2jwYGzLvK88g==" target="_blank">
                Donate
              </a>
            </button>
            <div className=" flex justify-center items-center">
            <button className=" md:hidden w-32 px-5 py-3 bg-greenngo text-slate-50 text-lg rounded-lg hover:bg-greenngo">
              <a href="https://eazypay.icicibank.com/eazypayLink?P1=5DGWtEPDCz2jwYGzLvK88g==" target="_blank">
                Donate
              </a>
            </button>
            </div>
            </div>
            <p className=" ml-8 text-base text-gray-800 mt-9 ">
              The Foundation accepts financial support for carrying out welfare
              work in Indian villages.
            </p>
          </div>

          <p className=" text-lg ml-8 font-CormorantUpright font-bold">
            The following may kindly be noted:
          </p>

          <ul className=" list-disc text-justify mx-24 mt-8 space-y-4  text-xl font-semibold font-CormorantUpright">
            <li>
              Donations are accepted only through on-line transfers to the
              'Khushhal Gram Samaj Vikas Foundation' Current Account Nos.
              167105001205 / IFSC Code ICIC0001671 with ICICI Bank, Vibhuti
              khand, Gomtinagar Branch, Lucknow - 226010
            </li>
            <li>
              We do not accept donations in cash or through cheques/drafts.
            </li>
            <li>
              PLEASE DO NOT HAND OVER CASH TO ANYONE, CLAIMING TO REPRESENT KGSV
              Foundation.
            </li>
            <li>
              The inconvenience caused, due to our not accepting cash or cheque
              or draft, is deeply regretted. Kindly bear with us.
            </li>
            <li>
              Applied for Deductions under Section 80 (G) of Income Tax Act,
              1961
            </li>
          </ul>

          <div className=" flex mt-16 justify-end items-center mx-24">
            {/* <button className=" px-5 py-3 bg-ngodark text-slate-50 text-lg rounded-lg hover:bg-greenngo">
              <a href="https://eazypay.icicibank.com/eazypayLink?P1=5DGWtEPDCz2jwYGzLvK88g==" target="_blank">
                Donate
              </a>
            </button> */}
            <p className="text-lg">
              KGSV Foundation thanks you for your kind patronage
            </p>
          </div>

          {/* Notification Section */}
          <div className="fixed bottom-0 inset-x-0 p-2 bg-green-800 text-white text-center">
            <p>Your support makes a big difference. Thank you!</p>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
};

export default Donate;
