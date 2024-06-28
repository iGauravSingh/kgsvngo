import Footer from "../../components/Footer"
import Header from "../../components/Header"


const WishToAssociate = () => {
  return (
    <>
    <Header />

    <>
    <div className="container mx-auto p-4 font-popins">
      {/* Image with centered text */}
      <div className="relative mb-8">
        <img
          src="/img/five.jpg"
          alt="Descriptive Alt Text"
          className="w-full h-64 object-cover brightness-90"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Wish To Associate</h1>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="mb-8">
        <blockquote className="text-xl italic font-semibold text-gray-900 text-justify">
        "We are a start-up organisation and are in process of building a team & partners. We require help for our Projects in Rural India in field of - education, garbage management, health & nutrition, clean & green environment, agriculture, women empowerment, skills in creating job opportunities & helping a sustainable living. Your knowledge, expertise & passion would be an asset in realising our goals.""
        </blockquote>
      </div>

      <div className=" flex flex-col justify-center items-center gap-7 text-lg">
      <p>Thank you for considering an association with KGSV Foundation. </p>

<p>Kindly mail us the information requested below and we will get in touch with you.</p>
      </div>

     <div className=" flex justify-center mt-8 mb-10">
     <form className="space-y-4 sm:w-[300px] md:w-[500px] lg:w-[600px] bg-green-100 px-9 py-8 rounded-lg">
      <h1 className=" text-center text-3xl font-semibold font-DancingScript">Associate Form</h1>
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
                  rows={5}
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
    
    </>

    <Footer />
    </>
  )
}

export default WishToAssociate