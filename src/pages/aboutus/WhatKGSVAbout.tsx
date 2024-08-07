import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const WhatKGSVAbout = () => {
  return (
    <>
      <Header />
      <div className="mx-8 font-popins">
        {/* Full screen image */}
        <div
          className="relative w-full h-[256px] bg-cover bg-center"
          style={{ backgroundImage: "url('/img/five.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold font-CormorantUpright">What's KGSV About</h1>
          </div>
        </div>

        {/* Paragraph at the bottom */}
        <div className="flex flex-col items-center justify-center py-8">
          <p className="text-gray-700 leading-7 tracking-wide text-justify">
            India is home to some 650,000 villages where 70% of its people live,
            contributing to 17-20% of the economy. Mahatma Gandhi once said,
            'The soul of India lives in its villages.'' While the country has
            since, taken giant strides in almost every field and is fast racing
            towards becoming a proud 5 trillion dollar economy, yet, the 'soul
            of India' seems caught in a time warp and struggling with basics -
            illiteracy, shelter, food, health, water, clean air, sanitation,
            care for the aged & specially-abled, respect & equal status for
            women, job opportunities. Many from the villages have, in the past
            few decades, migrated to cities only to find their dreams shattered.
            The city infrastructure is also not geared to handle the influx of
            people, and quality of life has taken a beating for the migrants &
            the city dwellers. The happiness & satisfaction index is missing and
            quite evident in the growing social strife & flare-ups, crime, and
            the dirt and squalor that one witness and reads about every day. One
            is reminded of the visionary Bharat Ratna, Industrialist, JRD Tata,
            who once said, 'I do not want India to be an economic superpower,
            but I would like India to be a happy country.'' The key to achieving
            such a society truly lies in unlocking the potential in our
            villages. Several good works are being done by many individuals and
            through the initiatives of the government and various welfare
            organizations. But the task is herculean and needs superlative
            efforts from many, many more.
          </p>
          <p className="text-gray-700  mt-4 leading-7 tracking-wide text-justify">
            KGSV Foundation is just another of these efforts to reach out to the
            deprived Indian village community and attempt to integrate them into
            the mainstream. It is an effort to educate, guide, support, & mentor
            them into finding their bearings in society and help establish
            holistically prosperous villages. It is also educating the village
            folk about the proud heritage, culture, and traditions of their
            country. It is an effort to create Model villages that would attract
            residents to stay back in the villages. It is an attempt to breed
            happiness and contentment into the lives of folk in rustic India.
            Any success would also help check the unabated influx into our
            cities that are in no way equipped to handle resultant people
            pressure. It is an attempt to percolate the benefits of
            modernization, growth, and development to the deprived masses in
            India. It is also an attempt to build an inclusive and sustainable
            agrarian society and the countryside that we can genuinely be proud
            of.
          </p>
          <p className="text-gray-700 mt-4 leading-7 tracking-wide text-justify">
            A large number of countrymen, today, are concerned. They would like
            to make a difference and work towards building a 21st century India
            that they could look upon with pride but often find themselves
            helpless. It is an attempt to create a platform where individuals
            and organizations can come together to give shape to their dreams of
            a prosperous, vibrant & resurgent India, where growth is inclusive,
            and the people value & care for human life, the environment, and
            natural resources.
          </p>
        </div>

        <div className=" flex justify-center items-center gap-7">
          <div className=" text-center text-gray-700 tracking-wide leading-7">
          <p>Our dream India has best been captured in beautiful poetry</p>
          <p>written by Nobel Laureate Gurudev Rabindranath Tagore, whom</p>
          <p>we would like to <span className=" text-red-500"><Link to="/remembering-gurudev">invoke.</Link></span></p>
          </div>
          <img src="/pages/aboutus/hand.jpg" alt="payer to poet tagore" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhatKGSVAbout;
