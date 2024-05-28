import Container from "./Container";

import {  motion } from 'framer-motion'

const items = [
  {
    id: 1,
    image: "/zig/education.jpg",
    title: "Our Work In Education Sector",
    text: "KGSV mentors over 150 children, after school, to bridge the gap in academic competence for their level. KGSV Associates and Mentors from the villages, help children overcome the lack of parental guidance & support. We provide holistic education that ignites creativity & aspirations, fosters health & fitness and breeds sensitivity for nature & humanity. We endeavor is to build a level playing field for the rural children, with urban peers, and build citizens that would be caring towards the environment & society. Alongside, our model works to enhance Mentor capability and bring about parental understanding and committment. ",
  },
  {
    id: 2,
    image: "/zig/clean.jpg",
    title: "Our Work In Cleaniness Sector",
    text: "Promoting cleanliness in the villages is a KGSV priority and integral part of our program. The children, the parents & villagers are educated in personal hygiene and ensuring that they keep their surrounding clean. Under guidance of Mentors, cleanliness drives are undertaken in villages, with children carrying placards, delivering speeches on the importance of cleanliness for health & welfare of all. Our effort to reach out to local primary schools has received enthusiastic support and active participation from school teachers & children.  KGSV children are driving the change. ",
  },
  {
    id: 3,
    image: "/zig/health.jpg",
    title: "Our Work In Health Sector",
    text: "Healthy and fit children can make better students & are the future society. KGSV monitors health of its children through paediatric & dental doctors that periodically record child growth in health cards. A range of extra-curricluar activities - annual sports, martial arts & yog classes, drammatics and physical drills are intended to achieve this. Creating awareness on Nutrition is important part of our curriculum and imparted to both parents and children. Logistics of a healthy diet plan is being worked upon for implememnting at our centres. Menstrual hygiene program has beeh held to help adolescent girls.",
  },
  {
    id: 4,
    image: "/zig/enviroment.jpg",
    title: "Our Work In Enviroment Sector",
    text: "Create  awareness in the villages on the urgent need to conserve water, electricity and preserve purity of land, water & air. Envirnomental study is part of KGSV curriculum. Our centres observe the Earth day, the Environmemt Day, the Water day and engage in tree plantation and drives to eliminate the mushrooming parthenium grass. The villagers are periodically engaged in awareness programs to do away with single use plastics, not burning stubble left in farm lands, keeping water bodies & environment clean andf minimize use of chemicals in farming. ",
  },
  {
    id: 5,
    image: "/zig/wemp.jpg",
    title: "Our Work In Women Empowerment Sector",
    text: "A family charter christened, 'KGSV Sankalp Patr', is periodically read out to the women and they are motivated to its principles. Counselling is also done on the importance of education for the upfliftment of their families from poverty and that they must wholeheartedly focus on child education. They are constantly involved in programs to keep neighboorhood & village clean as a way to healthy living. Their skills have been channelized into making paper envelopes and beautiful containers & fans using dry grass. The women are motivated to action and that they should stop looking for things that are given free as a way to life",
  },
  {
    id: 6,
    image: "/zig/agri.jpg",
    title: "Our Work In Agriculture Sector",
    text: "KGSV has been creating awreness amongst farmers on the benefits use of organic fertlizers, soil testing, use of environment friendly pest control methods and organic farming. We are helping connect the farmers to the Krishi Vigyan Kendra (ICAR), Amber, District Sidhauli that has provided good quality seeds, advises on tackling agricultre related problems, increase production  and also provides training. The Women have been helped grow vegetables in small kitchen gardens, at home, for consumption. The farmers are also made aware of the menace of parthenium grass & the damage the burning of stubble causes to the soil & environment. ",
  },
  {
    id: 7,
    image: "/zig/socity.jpg",
    title: "Our Work In Socity Sector",
    text: "It is KGSV's endeavour to help people undertsand that  progress and prosperity are only possible when there is brotherhood amongst people and they work together to create good public institutions / places and environment. That we have be fisrt movers rather than wait for others. We have been explaining to the villagers and KGSV children that 'nothing in life is free' and everything has a cost, which someone pays. KGSV has taken a small step to achieve this through holistic education in villages, promoting a caring & sharing society, in keeping our Vedic adage 'Vasudhaiv Kutumbakam'. ",
  },
];

const boxVariant = {
  hidden: {
      opacity: 0,
      x: 100,
  },
  show: {
      x: 0,
      opacity: 1,
      transition: {
          type: 'tween',
          duration: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
      }
  }
}

const boxVariant2 = {
  hidden: {
      opacity: 0,
      x: -100,
  },
  show: {
      x: 0,
      opacity: 1,
      transition: {
          type: 'tween',
          duration: 1.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
      }
  }
}

const Zig = () => {
  return (
    <div className=" w-screen mt-5 font-popins">
      <Container>
      {items.map((item) => (
        <div className=" mt-10">
          <h2 className=" text-center font-bold text-4xl text-yellowngo">{item.title}</h2>
        <div key={item.id} className=" flex flex-col lg:flex-row items-center lg:justify-between">
          
          {/* text on right  */}
          <motion.div
          variants={boxVariant2}
          initial='hidden'
          whileInView='show'
          className=" w-[500px] h-[350px] lg:mt-80 mt-5 ">
            <p className=" text-justify">{item.text}</p>
          </motion.div>

          {/* image on left  */}

          <motion.div
          variants={boxVariant}
          initial='hidden'
          whileInView='show'
          className=" w-[450px] h-[350px] rounded-3xl overflow-clip lg:-mt-32">
            <img className=" w-full h-full object-cover" src={item.image} alt={item.title} />
          </motion.div>
        </div>
        </div>
      ))}
      </Container>
    </div>
  );
};

export default Zig;
