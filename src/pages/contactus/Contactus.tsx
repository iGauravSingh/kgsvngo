import { useForm } from 'react-hook-form';

import Footer from "../../components/Footer"
import Header from "../../components/Header"


type Inputs = {
  name: string
  mobile: string
  email: string
  message: string
}

const Contactus = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };
  
  return (
    <>
    <Header />
    <>
    <div className="container mx-auto p-4 flex flex-col md:flex-row font-popins">
      {/* Form on the left */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile</label>
            <input
              type="tel"
              {...register('mobile', { required: 'Mobile number is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              rows={4}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Card with contact details and image on the right */}
      <div className="md:w-1/2 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Contact Details</h2>
          <p className="text-gray-700 mb-2 font-semibold">Khushhal Gram Samaj Vikas Foundation</p>
          <p className="text-gray-700 mb-2">Email: admin@kgsv.in</p>
          <p className="text-gray-700 mb-2">CIN: – U74994UP2019NPL113235</p>
          <p className="text-gray-700 mb-2">Phone: +91-9415752856</p>
          
          <img
            src="/img/eleven.jpg"
            alt="Contact"
            className="object-cover w-full h-64 rounded-lg"
          />
        </div>
      </div>
    </div>
    
    </>

    <Footer />
    </>
  )
}

export default Contactus