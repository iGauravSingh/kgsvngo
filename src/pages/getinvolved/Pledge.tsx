import Footer from "../../components/Footer"
import Header from "../../components/Header"


const Pledge = () => {
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
          <h1 className="text-white text-3xl font-bold">Pledge</h1>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="mb-8">
        <blockquote className="text-xl italic font-semibold text-gray-900 text-justify">
          "KGSV Foundation aims to build a few model villages. This requires support & cooperation from everyone, no matter how small the contribution. It would be a privilege to have you associate with us. We could begin the journey, by taking a small pledge on some key issues that we all believe in. This will be a very significant first step, towards realizing our goals."
        </blockquote>
      </div>

      <h1 className=" text-center text-3xl font-semibold">I Pledge</h1>

      {/* Paragraph with List Elements */}
      <div className="mb-12 flex justify-center mt-12">
        
        <ul className="list-disc list-inside pl-4 text-gray-800 space-y-5 text-base text-justify">
          <li>to conserve water and take special care to save while I drink, clean , wash or bathe at home or in any public place.</li>
          <li>to maintain purity of air - take care to minimize burning of any material that contaminates or releases toxic gases into the environment</li>
          <li>to 'cleanliness of public places'. Will carry garbage bag & bring home my litter & garbage. Will use public-bins only if clean & maintained</li>
          <li>to promote peace of public place by not 'honking' or engaging in any other activity that results in high decibel noise</li>
          <li>to not engage in any act that pollutes or contaminates or causes spurious food, food products & medicines to be manufactured, marketed or sold</li>
          <li>to save electricity and use environment friendly bulbs & gadgets , bags and products wherever possible</li>
          <li>to be disciplined , caring & responsible citizen and do my best for preservation & maintenance of 'public welfare, peace & environment protection'</li>
        </ul>
      </div>

      {/* Notification at the Bottom */}
      <div className=" inset-x-0 p-4 bg-green-500 text-white text-center mb-12">
        <p>We also invite you to associate with the KGSV Foundation and further its cause in other ways, outlined here</p>
      </div>
    </div>
    </>
    <Footer />
    </>
  )
}

export default Pledge