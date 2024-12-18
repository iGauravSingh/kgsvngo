import { RiDoubleQuotesL } from "react-icons/ri";

import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    image: "/zig/new/education.jpg",
    title: "Education",
    qoutes:
      "Education is what remains after one has forgotten what one learnt in school - Albert Einstein",
    text: "KGSV mentors over 150 children, after school, to bridge the gap in academic competence for their level. KGSV Associates and Mentors from the villages, help children overcome the lack of parental guidance & support. We provide holistic education that ignites creativity & aspirations, fosters health & fitness and breeds sensitivity for nature & humanity. We endeavor is to build a level playing field for the rural children, with urban peers, and build citizens that would be caring towards the environment & society. Alongside, our model works to enhance Mentor capability and bring about parental understanding and committment. ",
  },
  {
    id: 2,
    image: "/zig/new/clean.jpg",
    title: "Cleanliness",
    qoutes: "Cleanliness is the hallmark of civilization - Unknown ",
    text: "Promoting cleanliness in the villages is a KGSV priority and integral part of our program. The children, the parents & villagers are educated in personal hygiene and ensuring that they keep their surrounding clean. Under guidance of Mentors, cleanliness drives are undertaken in villages, with children carrying placards, delivering speeches on the importance of cleanliness for health & welfare of all. Our effort to reach out to local primary schools has received enthusiastic support and active participation from school teachers & children.  KGSV children are driving the change. ",
  },
  {
    id: 3,
    image: "/zig/new/health.jpg",
    title: "Health",
    qoutes:
      "Healthy citizens are the greatest asset that a country can have - Winston S Churchill",
    text: "Healthy and fit children can make better students & are the future society. KGSV monitors health of its children through paediatric & dental doctors that periodically record child growth in health cards. A range of extra-curricluar activities - annual sports, martial arts & yog classes, drammatics and physical drills are intended to achieve this. Creating awareness on Nutrition is important part of our curriculum and imparted to both parents and children. Logistics of a healthy diet plan is being worked upon for implememnting at our centres. Menstrual hygiene program has beeh held to help adolescent girls.",
  },
  {
    id: 4,
    image: "/zig/new/enviroment.jpg",
    title: "Environment",
    qoutes:
      "We do not inherit the world from our ancestors; we borrow it from our children - Unknown",
    text: "Create  awareness in the villages on the urgent need to conserve water, electricity and preserve purity of land, water & air. Envirnomental study is part of KGSV curriculum. Our centres observe the Earth day, the Environmemt Day, the Water day and engage in tree plantation and drives to eliminate the mushrooming parthenium grass. The villagers are periodically engaged in awareness programs to do away with single use plastics, not burning stubble left in farm lands, keeping water bodies & environment clean andf minimize use of chemicals in farming. ",
  },
  {
    id: 5,
    image: "/zig/new/women.jpg",
    title: "Women Empowerment",
    qoutes:
      "Empowering women is the key to building a future that we want - Amartya Sen",
    text: "A family charter christened, 'KGSV Sankalp Patr', is periodically read out to the women and they are motivated to its principles. Counselling is also done on the importance of education for the upfliftment of their families from poverty and that they must wholeheartedly focus on child education. They are constantly involved in programs to keep neighboorhood & village clean as a way to healthy living. Their skills have been channelized into making paper envelopes and beautiful containers & fans using dry grass. The women are motivated to action and that they should stop looking for things that are given free as a way to life",
  },
  {
    id: 6,
    image: "/zig/new/agriculture.jpg",
    title: "Agriculture",
    qoutes:
      "It's been proven that of all the interventions to reduce poverty, improving agricultural productivity is the best - Bill Gates",
    text: "KGSV has been creating awreness amongst farmers on the benefits use of organic fertlizers, soil testing, use of environment friendly pest control methods and organic farming. We are helping connect the farmers to the Krishi Vigyan Kendra (ICAR), Amber, District Sidhauli that has provided good quality seeds, advises on tackling agricultre related problems, increase production  and also provides training. The Women have been helped grow vegetables in small kitchen gardens, at home, for consumption. The farmers are also made aware of the menace of parthenium grass & the damage the burning of stubble causes to the soil & environment. ",
  },
  
];

const ruralprospdata =[
  {
    id: 7,
    image: "/zig/new/rural.jpg",
    title: "Rural Prosperity",
    qoutes:
      "Strenghten the rural areas by providing opportunity and fulfilling aspirations. This will put a stop to meaningless migration to urban centres, allowing both to flourish ",
    text: "It is KGSV's endeavour to help people undertsand that  progress and prosperity are only possible when there is brotherhood amongst people and they work together to create good public institutions / places and environment. That we have be fisrt movers rather than wait for others. We have been explaining to the villagers and KGSV children that 'nothing in life is free' and everything has a cost, which someone pays. KGSV has taken a small step to achieve this through holistic education in villages, promoting a caring & sharing society, in keeping our Vedic adage 'Vasudhaiv Kutumbakam'. ",
  }
] 

const boxVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const boxVariant2 = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};



const Zig = () => {

  return (
    <div className=" pb-7 font-popins flex justify-center overflow-x-hidden ">
      <div className="  mx-8 my-8 flex flex-col items-center">
      
      <h2 className=" text-center text-2xl md:text-4xl text-greenngo font-CormorantUpright text-nowrap">
      KGSV <span className=" text-xl md:text-3xl">(केजस्वी)</span>
        </h2>
        <h2 className=" overflow-x-hidden text-center text-xl md:text-4xl text-greenngo font-CormorantUpright mt-2 px-2">
          <span>An endeavour to fullfill rural aspirations</span> <span>& create Model villages.</span>
            
        </h2>
        <h2 className=" text-center text-4xl text-greenngo font-CormorantUpright mt-5">Our Work</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className=" mt-7  flex flex-col justify-center items-center"
          >
            <h2 className=" font-medium text-[33px] text-greenngo font-CormorantUpright">
              {item.title}
            </h2>
            <div className=" relative flex flex-col lg:flex-row lg:justify-between lg:gap-6 items-center ">
              
              {/* Qoutes and text container  */}
              <div className=" mt-5 max-w-[600px] ">

                {/* Qoutes  */}
                <div className=" px-5  opacity-50 overflow-x-hidden"><RiDoubleQuotesL size={70} color="#176e3b" /></div>
                <div className="    ">
                  <p className=" overflow-x-hidden px-5 font-DancingScript text-3xl text-center text-ngodark font-semibold">
                    {item.qoutes}
                  </p>
                </div>
                {/* text on right  */}
                <motion.div
                  variants={boxVariant2}
                  initial="hidden"
                  whileInView="show"
                  className="    mt-12 bg-white/30 backdrop-blur-lg shadow-lg  px-4 py-4 rounded-xl"
                >
                  <p className=" text-justify text-sm md:text-base px-1 sm:px-0 px-4">{item.text}</p>
                </motion.div>
              </div>
              

              {/* image on left  lg:-mt-32 */}

              <div className=" lg:h-[498px] mt-4 ">
              <motion.div
                variants={boxVariant}
                initial="hidden"
                whileInView="show"
                className=" w-[400px]  xl:w-[550px] h-[350px] rounded-3xl  "
              >
                <img
                  className=" w-full h-full object-cover rounded-3xl"
                  src={item.image}
                  alt={item.title}
                />
              </motion.div>
              </div>
            </div>
          </div>
        ))}

        {/* rural prosperity section  */}
        {ruralprospdata.map((item) => (
          <div
            key={item.id}
            className=" mt-7  flex flex-col justify-center items-center"
          >
            <h2 className=" font-medium text-[33px] text-greenngo font-CormorantUpright">
              {item.title}
            </h2>
            <div className=" relative flex flex-col lg:flex-row lg:justify-between lg:gap-6 items-center ">
              
              {/* Qoutes and text container  */}
              <div className=" mt-5 max-w-[600px] ">

                {/* Qoutes  */}
                {/* Qoutes  */}
                <div className=" px-5  opacity-50 overflow-x-hidden"><RiDoubleQuotesL size={70} color="#176e3b" /></div>
                <div className="    ">
                  <p className=" overflow-x-hidden px-5 font-DancingScript text-3xl text-center text-ngodark font-semibold">
                    {item.qoutes} - KGSV
                  </p>
                </div>
                {/* text on right  */}
                <motion.div
                  variants={boxVariant2}
                  initial="hidden"
                  whileInView="show"
                  className="    mt-12 bg-white/30 backdrop-blur-lg shadow-lg  px-4 py-4 rounded-xl"
                >
                  <p className=" text-justify text-sm md:text-base px-1 sm:px-0 px-4">{item.text}</p>
                </motion.div>
              </div>
              

              {/* image on left  lg:-mt-32 */}

              <div className=" lg:h-[498px] mt-4 ">
              <motion.div
                variants={boxVariant}
                initial="hidden"
                whileInView="show"
                className="  w-[400px]  xl:w-[550px] h-[350px] rounded-3xl    "
              >
                <img
                  className=" w-full h-full object-cover rounded-3xl"
                  src={item.image}
                  alt={item.title}
                />
              </motion.div>
              </div>
            </div>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default Zig;
