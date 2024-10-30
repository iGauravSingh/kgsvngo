// import { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
// import Header from "../../../components/Header";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

// const Cleanliness = () => {
//   const [postList, setPostList] = useState<any>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // Fetch initial data without date filter
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${baseUrl}/api/categories/4?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
//         );
//         // console.log(response.data.data.attributes.posts.data)
//         setPostList(response.data.data.attributes.posts.data);
//       } catch (error) {
//         console.error("Error fetching initial posts:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Fetch data based on date filter
//   const handleSearch = async () => {
//     if (!startDate || !endDate) {
//       alert("Please select both start and end dates.");
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `${baseUrl}/api/categories/4?fields=name&populate[posts][filters][date][$gte]=${startDate}&populate[posts][filters][date][$lte]=${endDate}&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
//       );
//       setPostList(response.data.data.attributes.posts.data);
//     } catch (error) {
//       console.error("Error fetching filtered posts:", error);
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div className="w-screen min-h-screen lg:pl-14 md:pl-7  mt-8">
//         <div className=" flex flex-col-reverse lg:flex-row md:justify-between ">
//           <div className=" w-full lg:mx-8">
//             {/* Display filtered posts */}
//             <div className="flex flex-col gap-5 ">
//               <div className=" w-full h-[200px] bg-[#eeeeee] flex justify-start items-center pl-8">
//                 <h1 className=" font-CormorantUpright text-4xl text-[#ec1d28] text-center">
//                   Cleanliness
//                 </h1>
//               </div>
//               <div className="flex flex-col gap-5 ">
//                 {postList?.map((item: any) => (
//                   <Link key={item.id} to={`/postdetails/${item.id}`}>
//                     <div
//                       key={item.id}
//                       className=" w-full h-full bg-white border-b border-slate-300 pb-6 px-4"
//                     >
//                       <h3 className="text-4xl font-CormorantUpright text-[#3a3a3a]">
//                         {item.attributes.title}{" "}
//                         <span className=" font-Roboto">-</span>{" "}
//                         {item.attributes.date}
//                       </h3>
//                       <p className=" text-[#3a3a3a] text-base font-Roboto mt-5 leading-8 text-justify">
//                         {item.attributes.description?.[0]?.children?.[0]?.text.slice(
//                           0,
//                           300
//                         )}
//                         ...
//                       </p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Time Filter */}
//           <div className="mt-7 mb-10 md:mt-0 md:mr-16">
//             <div className="flex justify-center items-center gap-6">
//               <div className=" flex flex-col gap-2">
//                 <h3 className=" text-center font-sans text-lg font-medium">
//                   From
//                 </h3>
//                 <input
//                   className=" border border-green-900 px-2 py-1 rounded-sm"
//                   type="date"
//                   onChange={(e) => setStartDate(e.target.value)}
//                   value={startDate}
//                 />
//               </div>

//               <div className=" flex flex-col gap-2">
//                 <h3 className=" text-center font-sans text-lg font-medium">
//                   To
//                 </h3>
//                 <input
//                   className=" border border-green-900 px-2 py-1 rounded-sm"
//                   type="date"
//                   onChange={(e) => setEndDate(e.target.value)}
//                   value={endDate}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={handleSearch}
//                 className="px-3 py-2 bg-green-950 text-slate-100 text-lg"
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Cleanliness;

// ======================================

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const PostList = () => {
  return (
    <>
      <Header />
      <>
        <div className=" mx-8 font-popins text-justify ">
          {/* Image on top with text */}
          <div className="relative w-full h-64 mt-2">
            <img
              src="/ourPlanStatic/cleaniness.jpg"
              alt="Top Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <span className="text-white text-4xl font-bold font-CormorantUpright">Begining of journey</span> */}
            </div>
          </div>

          <div className="my-8 p-4">
            <h2 className="text-2xl font-bold  text-center leading-7 tracking-wide ">
              Rural Cleanliness Plan
            </h2>
            {/* <p className="text-gray-800 leading-7 tracking-wide text-justify">
        Creation of wealth at the cost of the environment and the health of our children & society, is certainly not the purpose of agriculture. Farming must be done responsibly, not for subsistence only, but to create a win-win situation for all stake holders – KGSV
        </p> */}
          </div>

          {/* First paragraph with heading */}
          <div className="my-8 ">
            <p className="text-gray-800 leading-8 tracking-wide text-justify">
              Women Education & employment Plan
            </p>
            <ul className=" space-y-5 list-decimal px-8 py-4 tracking-wide">
              <li>
                Periodic meetings with villagers to emphasize the importance of
                cleanliness & hygiene for their health and the environment.
              </li>
              <li>
                Teaching of basic hygiene to be an essential part of our CMC
                curriculum. Other than personal hygiene, teaching the children
                not to spit and pocket their own litter, if there is no trash
                bin around, and throw it into the garbage bag/bin in the house.
                Children to be motivated to be torch bearers for our
                ‘Cleanliness Program’ in the villages.
              </li>
              <li>
                Children will be mentored that it is a good practice to clean
                our house, neighbourhood & village, periodically. They will also
                be taught to give due importance and regard to people that
                perform cleaning duties and help them. Children will be
                encouraged to participate in village cleaning activities to
                ingrain the dignity of labour into them.
              </li>
              <li>
                All the children will be provided disposable hand gloves,
                garbage bags, and face masks while engaging them in cleaning
                activities. Adequate safety kits and safeguards will be promoted
                while people engage in cleaning activities.
              </li>
              <li>
                Through our Household Mentor, simultaneously, we will reach out
                to every household in the village and educate them on the types
                of garbage and the reason why wet & dry garbage must be
                segregated. Gradually, the households will be motivated to start
                collecting dry & wet garbage in separate bags/bins.
              </li>
              <li>
                A few garbage collection points are to be identified in each
                village, that can be easily accessed by the village households.
                To secure the collection of the trash, a pit will be dug and
                villagers encouraged to throw the daily garbage into the
                designated pits.
              </li>
              <li>
                The wet garbage is to be converted to compost for use, and the
                dry garbage pits will either be covered or the garbage moved
                periodically to a designated trash dumping ground.
              </li>
              <li>
                Spraying of disinfectant/lime in the water bodies and open
                drainages that pose a health hazard in the village. Cleaning of
                the water bodies in the villages would be examined and taken up.
              </li>
              <li>
                Shifting animals to animal sheds made away from the residential
                area in villages to the community area so that villagers live in
                a clean environment and are not infected by animal-transmitted
                diseases. The animals also can be better cared for, in their
                sheds.
              </li>
            </ul>

            <div className=" flex flex-wrap justify-center items-center gap-6 mt-6">
              <img
                className=" w-screen md:w-[350px] h-[250px] md:h-[350px]"
                src="/ourPlanStatic/four.jpg"
                alt="one"
              />
              <img
                className=" w-screen md:w-[350px] h-[250px] md:h-[350px]"
                src="/ourPlanStatic/five.jpg"
                alt="one"
              />
              <img
                className=" w-screen md:w-[350px] h-[250px] md:h-[350px]"
                src="/ourPlanStatic/six.jpg"
                alt="one"
              />
            </div>
            <p className=" text-center mt-8">************</p>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};

export default PostList;
