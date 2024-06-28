import Footer from "../../components/Footer"
import Header from "../../components/Header"


import { useForm, SubmitHandler } from 'react-hook-form';

interface DonationFormInputs {
  name: string;
  email: string;
  amount: number;
  message?: string;
}

const Donate = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<DonationFormInputs>();

  const onSubmit: SubmitHandler<DonationFormInputs> = data => {
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
          className="w-full h-[400px] object-cover object-top brightness-90"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Support Our Cause</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-center">
        Thank you for considering a donation to the KGSV Foundation</h2>
        <p className="text-lg text-gray-800 mb-4 text-center">
        The Foundation accepts financial support for carrying out welfare work in Indian villages
        </p>
      </div>

      {/* Donation Form */}
      <div className=" w-full flex justify-center">
      <div className=" p-6 rounded-lg shadow-lg mb-8 sm:w-[300px] md:w-[500px] lg:w-[600px] bg-green-100">
        <h2 className="text-2xl font-bold mb-4">Donate Now</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Donation Amount
            </label>
            <input
              id="amount"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('amount', { required: 'Donation amount is required', min: 1 })}
            />
            {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message (Optional)
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('message')}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <a href="https://eazypay.icicibank.com/eazypayLink?P1=5DGWtEPDCz2jwYGzLvK88g=="
              type="submit"
              target="_blank"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Donate
            </a>
          </div>
        </form>
      </div>
      </div>

      {/* Notification Section */}
      <div className="fixed bottom-0 inset-x-0 p-2 bg-green-500 text-white text-center">
        <p>Your support makes a big difference. Thank you!</p>
      </div>
    </div>
    </>

    <Footer />
    </>
  )
}

export default Donate