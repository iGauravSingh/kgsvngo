import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const founderData = [
  {
    id: 1,
    name: "Dr. Anshu Srivastva",
    image: "/pages/team/anshu.png",
    description:
      "Dr Anshu Srivastava –Ph. D in Computer Science and coordinating the training cell of QRAT Computer Group, Lucknow.  She is in Computer field for past 25 years and guided many M.Tech and Ph.D.  Research scholars’ .Anshu is proficient in administration, training and computers and manages our office besides IT, HR, Training and web-site development. She is a keen philanthropist and working enthusiastically towards realization of goals of the Foundation.",
  },
  {
    id: 2,
    name: "V N Srivastava",
    image: "/pages/team/vn_siri.jpg",
    description:
      "V N Srivastava is a Fellow Chartered Accountant and richly experienced finance professional who has served various Industry over 30 years. His last assignment was as Chief Financial Officer with M/s SofniterSpA, Milan in Italy. He is now in full time practise and have varied interest including rural development. He is actively devoting to the cause of KGSV to set up a model village that can then be replicated elsewhere.",
  },
  {
    id: 3,
    name: "Dr Alka Srivastava",
    image: "/pages/team/alka.jpg",
    description:
      "Dr Alka Srivastava, is an MBBS from RIMS, Ranchi and received Residency training in Pediatrics at the University of Illinois, Chicago. She is currently working at L. Medicine, a multi -specialty group associated with Loyola University Medical Center and MacNeal Hospital, in suburban Chicago. She has been a practicing Pediatrician for 26+ years and been involved with multiple aspects of rural health and education since high school years. She is a keen enthusiast for child health, education and shares our rural development cause for building an inclusive society. With deep roots and linkages in India, she volunteers inputs & support for upliftment of deprived rural masses and related Projects.",
  },
  {
    id: 4,
    name: "Col Sanjay Chandra",
    image: "/pages/team/sanjay.png",
    description:
      "Col Sanjay Chandra took premature retirement from the armed forces and has been working in the corporate sector for the past 10 years dealing with current and emerging technologies. He is a skilled and experienced operational strategist who has profound interest in education of children. He espouses the rural development cause and volunteers support for rural projects and execution. He shares our vision for upliftment of rural masses including setting up of a few model villages which will pave a path for mass upliftment aimed at education, hygiene & sanitation and vocational training.",
  }
  
];

const foundingData5 = [
  {
    id: 5,
    name: "Dr. Ajay Verma",
    image: "/pages/team/ajay.png",
    description:
      "Dr. Ajay Verma, Founder Director, ARTHGRAM Agri and Business Services has 37 years of diversified experience. He has served Gujarat Agriculture University, Anand, JN Agriculture University, Jabalpur, Govt. veterinary department, Bhopal, Oriental Insurance Company, Future Generali India Insurance Company and Swisscontact Worldwide Dhaka, Bangladesh. He has made notable contribution towards developing crop insurance and financial inclusion in various Government sponsored schemes, MFIs, NGOs and Rural banks to distribute low-cost financial products. Dr Verma shares our vision on rural development and has volunteered his experience, understanding and support for projects related to crop, veterinary and area of micro-finance.",
  },
]

const FoundingTeam = () => {
  return (
    <>
      <Header />

      <>
        <div className=" mx-8 p-4 font-popins">
          {/* Image with centered text */}
          <div className="relative mb-8">
            <img
              src="/img/five.jpg"
              alt="Descriptive Alt Text"
              className="w-full h-64 object-cover brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold font-CormorantUpright">Founding Team</h1>
            </div>
          </div>

          {/* founder  */}
          {/* <div className=" flex justify-between items-center font-popins border-green-800">
            <div className=" w-[70%]">
              <h2 className=" text-2xl font-semibold text-greenngo">Founder</h2>
              <p className="text-justify leading-7 tracking-wide">
                Vikas C Varma is a general insurance professional who retired
                from Future Generali India Insurance, Mumbai in November 2018,
                after working in the insurance sector for 35 plus years. He is
                now dedicated to the rural development cause and has initiated a
                few related projects in a village cluster in district Sitapur,
                UP , India. His vision is to set up a model village in the
                district, that can then be replicated elsewhere
              </p>
            </div>

            <div>
              <img
                className=" w-40 h-60"
                src="/pages/team/founder.jpg"
                alt="founder"
              />
            </div>
          </div> */}

<h2 className=" text-2xl font-semibold text-greenngo">Founder</h2>
<div className=" flex justify-center items-center mt-8">
            
              <div  className="flex flex-col items-center bg-white border border-green-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-green-100 ">
              <img
                className="object-cover w-48 h-56 rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/pages/team/founder.jpg"
                alt="founders"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-greenngo">
                Vikas C Varma
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700 leading-7 tracking-wide text-justify">
                Vikas C Varma is a general insurance professional who retired
                from Future Generali India Insurance, Mumbai in November 2018,
                after working in the insurance sector for 35 plus years. He is
                now dedicated to the rural development cause and has initiated a
                few related projects in a village cluster in district Sitapur,
                UP , India. His vision is to set up a model village in the
                district, that can then be replicated elsewhere.
                </p>
              </div>
            </div>
            
            </div>

          {/* founding member  */}

          <div className=" mt-8">
            <h2 className=" text-2xl font-semibold text-greenngo">
              Founding Members
            </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {founderData.map((item) => (
              <div key={item.id} className="flex flex-col items-center bg-white border border-green-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-green-100 ">
              <img
                className="object-cover w-48 h-56 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.image}
                alt="founders"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-greenngo">
                  {item.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700 leading-7 tracking-wide text-justify">
                  {item.description}
                </p>
              </div>
            </div>
            ))}
            </div>
            <div className=" flex justify-center items-center mt-8">
            {foundingData5.map((item) => (
              <div key={item.id} className="flex flex-col items-center bg-white border border-green-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-green-100 ">
              <img
                className="object-cover w-48 h-56 rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.image}
                alt="founders"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-greenngo">
                  {item.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700 leading-7 tracking-wide text-justify">
                  {item.description}
                </p>
              </div>
            </div>
            ))}
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};

export default FoundingTeam;
