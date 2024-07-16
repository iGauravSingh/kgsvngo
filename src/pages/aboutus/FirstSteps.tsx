import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { VideoCarousel } from "../../components/section/Video-carousel"


const FirstSteps = () => {
  return (
    <>
    <Header />
    <>
    <div className="container mx-auto font-popins text-justify">
      {/* Image on top with text */}
      <div className="relative w-full h-64">
        <img
          src="/img/seven.jpg"
          alt="Top Image"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">First Steps Little Steps</span>
        </div>
      </div>
      

      <div className="my-8 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center leading-7 tracking-wide ">Beginning of a journey</h2>
        <p className="text-gray-800 leading-7 tracking-wide text-justify">
        In September 2018, we identified a cluster of 7 villages in Tehsil Sidhauli, District Sitapur, Uttar Pradesh, India, for the start of our  Project’. The cluster is located roughly 55-60 km from the state capital, Lucknow.
        </p>
      </div>

      {/* First paragraph with heading */}
      <div className="my-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Project Punnapur</h2>
        <p className="text-gray-800 leading-7 tracking-wide text-justify">
        We started our work in the selected cluster with child education. The first informal interaction with children & parents in village Punnapur, Tehsil Sidhauli, District Sitapur was had, at Mayur Dhaba, on 12th September, 2018. It was evident, from the initial meetings, that the children were very eager to learn and the parents more than keen to help in any way, if only someone could come forward to help and guide the children in studies. Interaction with children continued  at Mayur Dhaba and a Mentor was appointed. The children selected were from those studying in primary & junior schools in village Punnapur & neighbourhood. On an experimental basis, formal classes were started on 8th October, 2018 in batches of 24 children on alternate days in a make-shift classroom at Mayur Dhaba, in the village, after school hours. Mr. Srikrishna Verma, the owner of the Dhaba, was also enthusiastic and allowed the use of their temporary kitchen space for teaching. Thus came up our first Child Mentoring Center(CMC), at Mayur Dhaba, at village Punnapur.
        </p>
        <p className=" mt-5 mb-5 leading-7 tracking-wide text-justify">
        A 2nd Mentor was appointed after some time and the two Mentors helped children  improve communication, reading & writing skills, understanding, and have been working to bridge the gap in education for their academic levels. We periodically communicated with parents to ensure that they send their children to school. It has also been emphasized that children must be allowed to study at home, using them as little as possible for domestic chores, farm, and animal rearing work. We will endeavour to bring digital technology and gadgets to help children, in due course. Apart from education, the emphasis is to be laid upon health, hygiene, and physical fitness. Moral education, to be caring, kind, and also responsible for the environment, is part of the curriculum. Immense enthusiasm amongst children and parents has given us hope and drives us.
        </p>
      </div>

      <VideoCarousel />

      {/* Second paragraph with heading */}
      <div className="my-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Project Gadhwe</h2>
        <p className="text-gray-800 leading-7 tracking-wide text-justify">
        In December, 2018 another village in the Cluster about 5 kms from Punnapur, Gadhwe, was identified for a cleanliness drive. Two rounds of meetings were  held with the villagers in January 2019 & Februray 2019 to explain to them the importance of keeping their houses and neighbourhood clean. The villagers were advised to collect wet and dry garbage in separate bins in the homes and hand it over to a collector in the morning. A pit for storing the damp waste, away from the village, was made  with guidance from Kisan Vikas Kendra [KVK] officials, and another enclosure for the dry garbage nearby. The thought process was  to have the trash removed to the storage pits so that the living area of the village could have a hygienic environment.
        </p>
        <p className=" mt-5 mb-5 leading-7 tracking-wide text-justify">
        The enthusiam of the villagers has been lukewarm but we are convinced that we could gradually get them to see the amount of damage that the littered garbage does to their health, particularly to the aged and children, and the eco-system.  Here too, the children are seen as the agents of change and would be closely involved in our mission to clean the village. However, it was notable that a number of villagers constantly asked us if we could take up child education for their children, the way we had been doing at Punnapur. This has encouraged us to begin looking at a 2nd CMC in Gadhwe / neighbouring Asal.
        </p>
      </div>

      <VideoCarousel />

      <p className=" mt-5 mb-8 leading-7 tracking-wide text-justify">
      The first little steps were taken by our team on an entreprenurial & experimental basis while applying for a license to work as an oragnization. The license for Khushhal Gram Samaj Vikas Foundation (KGSV Foundation) came on February 5th, 2019, which got us moving to giving shape to our mission & vision for rural development.
        </p>
    </div>
    </>
    <Footer />
    </>
  )
}

export default FirstSteps