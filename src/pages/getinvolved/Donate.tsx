import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { useForm, SubmitHandler } from "react-hook-form";

interface DonationFormInputs {
  name: string;
  email: string;
  amount: number;
  message?: string;
}

const Donate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DonationFormInputs>();

  const onSubmit: SubmitHandler<DonationFormInputs> = (data) => {
    console.log(data);
    // Handle form submission, e.g., send data to the backend
  };

  return (
    <>
      <Header />

      <>
        <div className="container mx-auto p-4 font-popins">
          {/* Hero Section */}
          <div className="relative mb-8">
            <img
              src="/img/three.jpg"
              alt="Hero Image"
              className="w-full h-64 object-cover object-top brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold">
                Support Our Cause
              </h1>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-center leading-9 tracking-wide">
              Thank you for considering a donation to the KGSV Foundation
            </h2>
            <p className="text-lg text-gray-800 mb-4 text-center leading-7 tracking-wide">
              The Foundation accepts financial support for carrying out welfare
              work in Indian villages
            </p>
          </div>

          <p className=" text-xl leading-7 tracking-wide ml-8">
            The following may kindly be noted:
          </p>

          <ul className=" list-disc text-justify mx-24 mt-8 space-y-4 tracking-wide leading-6 text-lg">
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

          <div className=" flex mt-16 justify-between items-center mx-24">
            <button className=" px-5 py-3 bg-ngodark text-slate-50 text-lg rounded-lg hover:bg-greenngo">
              <a href="https://eazypay.icicibank.com/eazypayLink?P1=5DGWtEPDCz2jwYGzLvK88g==">
                Donate
              </a>
            </button>
            <p className="text-lg">
              KGSV Foundation thanks you for your kind patronage
            </p>
          </div>

          {/* Notification Section */}
          <div className="fixed bottom-0 inset-x-0 p-2 bg-green-500 text-white text-center">
            <p>Your support makes a big difference. Thank you!</p>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
};

export default Donate;
