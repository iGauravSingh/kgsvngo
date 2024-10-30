// import { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
// import Header from "../../../components/Header";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

// const EnviromentConservation = () => {
//   const [postList, setPostList] = useState<any>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // Fetch initial data without date filter
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${baseUrl}/api/categories/5?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
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
//         `${baseUrl}/api/categories/5?fields=name&populate[posts][filters][date][$gte]=${startDate}&populate[posts][filters][date][$lte]=${endDate}&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
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
//                   Enviroment Conservation
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

// export default EnviromentConservation;

// ==================================================================

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
              src="/ourPlanStatic/enviroment.jpg"
              alt="Top Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <span className="text-white text-4xl font-bold font-CormorantUpright">Begining of journey</span> */}
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4 text-center leading-7 tracking-wide ">
              Environment Conservation Plan
            </h2>
            {/* <p className="text-gray-800 leading-7 tracking-wide text-justify">
        Creation of wealth at the cost of the environment and the health of our children & society, is certainly not the purpose of agriculture. Farming must be done responsibly, not for subsistence only, but to create a win-win situation for all stake holders – KGSV
        </p> */}
          </div>

          {/* First paragraph with heading */}
          <div className=" p-4">
            {/* <p className="text-gray-800 leading-7 tracking-wide text-justify">
        It shall be the endeavor of KGSV Foundation to:</p> */}
            <ul className=" space-y-5 list-decimal px-8  tracking-wide">
              <li>
                Spread awareness on the importance of conserving water and not
                contaminating water as it is scarce on the planet & an absolute
                necessity for all life. Water must also be harvested to give
                respite to the fast depleting water table. Environment-friendly
                methods of pest control & organic fertilizers must be used to
                prevent harmful chemicals from leaching into the water table,
                from which water is drawn for irrigation & drinking, posing a
                health hazard.
              </li>
              <li>
                Gradually, motivate farmers to shift to crops that use less
                water. Introduce drip farming methods in the village to conserve
                water.
              </li>
              <li>
                Educate families that the water bodies are a resource that must
                be protected. These must not be allowed to dry up due to the
                throwing of garbage into them. Help find ways to keep them
                garbage-free and also to stop drainage of sewage & other
                contaminated water into them.
              </li>
              <li>
                The agricultural soil in rural areas must be conserved by
                periodically resorting to soil testing and replenishing the soil
                with organic fertilizers. Gradually, there must be a complete
                stoppage on the use of chemical fertilizers, and efforts made
                for improving the nitrogen content of the agricultural land.
                Today, the contaminated soil is leading to toxins entering the
                food chain, which must be immediately stopped.
              </li>
              <li>
                Educate villagers against selling soil from agricultural land to
                brick-kiln makers, as this causes the loss of topsoil, which is
                the most fertile and essential for agricultural use.
              </li>
              <li>
                Create awareness about climate change, its impact on global
                warming, and the effect it has on everyone on the planet. The
                significance of the 'Earth Day' resolve, the 22nd of April, —
                the Great Global Cleanup, sustainable clothing, sustainable food
                & environment, climate & environment literacy, and the Canopy
                Project must be explained and made part of the initiative.
              </li>
              <li>
                Encourage planting of trees by the children, one for every
                child, every year as part of the Canopy Project in the villages
                where the Foundation has centers.
              </li>
              <li>
                Care for all the trees planted during earlier years & the
                current year by the children, families, and mentors to create an
                understanding and sensitivity for the importance of trees and
                plants in mitigating climate change.
              </li>
              <li>
                Spread awareness about the pollution caused by burning of
                stubble in fields & other trash in the village and also the use
                of diesel to generate power.
              </li>
              <li>
                Sensitize all that the Earth is the only planet in the universe
                with life and a green cover and that it is our duty to preserve
                it for future generations.
              </li>
            </ul>
            <p className=" text-center mt-8">************</p>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};

export default PostList;
