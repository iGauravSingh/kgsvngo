import Footer from "../../components/Footer"
import Header from "../../components/Header"


const Credentials = () => {
  return (
    <>
    <Header />

    <>
    <div className="App">
      {/* Full screen image with text on top */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/img/eleven.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Credentials</h1>
        </div>
      </div>

      

      {/* Image on  */}
      <div className=" w-full flex justify-center mt-5 mb-10">
        <img src="/credentials/credential.jpeg" alt="credential" />
      </div>
    </div>
    </>

    <Footer />
    </>
  )
}

export default Credentials