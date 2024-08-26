const Tagline = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center">


      <div className=" relative w-screen md:w-[50%] h-[250px] font-CormorantUpright overflow-clip ">

        <div className=" w-full h-full absolute top-0 left-0 z-10">
          <img
            className=" w-full h-full z-10"
            src="/posters/bannerngo.jpg"
            alt="banner"
          />
        </div>
        <div className=" w-full h-full flex flex-col justify-between items-center text-white pt-9 pb-16 ">
          <p className=" text-center text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] z-30">
            Dedicated to supporting Rural Communities
          </p>
          <p className="text-center text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] z-30">
            6th year
          </p>
        </div>
      </div>
      {/* // */}
      <div className=" relative w-screen md:w-[50%] h-[250px]  overflow-clip">
        <img
          className=" w-full h-full object-cover"
          src="/posters/mustard.jpg"
          alt=""
        />
        <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-900 via-gray-900/10 z-50">
          <div className=" h-full w-full flex flex-col justify-end px-4 py-2 font-CormorantUpright text-white">
            <h6>Mar 16, 2020</h6>
            <h4>Punnapur center</h4>
            <h4>Education camp</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagline;
