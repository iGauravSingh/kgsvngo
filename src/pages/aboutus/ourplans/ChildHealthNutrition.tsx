// import { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
// import Header from "../../../components/Header";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

// const ChildHealthNutrition = () => {
//   const [postList, setPostList] = useState<any>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // Fetch initial data without date filter
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${baseUrl}/api/categories/3?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
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
//                   Child Health And Nutrition
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

// export default ChildHealthNutrition;

// ===============================================

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
              src="/ourPlanStatic/child1.jpeg"
              alt="Top Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <span className="text-white text-4xl font-bold font-CormorantUpright">Begining of journey</span> */}
            </div>
          </div>

          <div className="my-8 p-4">
            <h2 className="text-2xl font-bold  text-center leading-7 tracking-wide ">
              Child Health & Nutrition Plan
            </h2>
            {/* <p className="text-gray-800 leading-7 tracking-wide text-justify">
        Creation of wealth at the cost of the environment and the health of our children & society, is certainly not the purpose of agriculture. Farming must be done responsibly, not for subsistence only, but to create a win-win situation for all stake holders – KGSV
        </p> */}
          </div>

          {/* First paragraph with heading */}
          <div className="">
            <p className="text-gray-800 font-bold leading-7 tracking-wide text-justify">
              Health Plan:
            </p>
            <ul className=" space-y-5 list-decimal px-8 py-4 tracking-wide">
              <li>
                Parents to be educated on the importance of preventive health
                care and guided to maintain & keep health records of their
                children, from birth until the children are grown up.
              </li>
              <li>
                Health-care cards, to help parents record & monitor the growth
                of their child, to be distributed to all families. The date of
                birth of children to be recorded on the card for registration of
                birth and all future reference.
              </li>
              <li>
                Parents to be educated on the importance of administering
                vaccinations as per the Immunization Schedule given in the
                health cards. All vaccinations given to the child to be
                recorded.
              </li>
              <li>
                ‘Useful health-care Instructions’ are printed on ‘health cards’
                for providing immediate relief to children in case of illness,
                until a doctor can be reached. Every instruction to be explained
                to parents & children for exigencies.
              </li>
              <li>
                Parents to be guided and helped maintain ‘first aid kits’ at
                home for emergency situations. Children also to be familiarized
                with the use and need to have ‘first aid kits’.
              </li>
              <li>
                Parents & children to be educated and guided on the importance
                of personal, home, and village hygiene for preventive health
                care for all.
              </li>
              <li>
                Physical activity & fitness to be encouraged in children as an
                important part of the curriculum for achieving our goals in
                child health care.
              </li>
              <li>
                Health-care camps to be organized so that a doctor could monitor
                health & growth.
              </li>
              <li>
                Health camps to educate & help adolescent girls through
                psychological crises they often face at puberty and also
                encourage hygiene through the use of sanitary napkins.
              </li>
            </ul>
            
          </div>

          {/* Second paragraph with heading */}
          <div className="my-8 p-4">
            <p className="text-gray-800 font-bold leading-7 tracking-wide text-justify">
              Nutrition Plan:
            </p>
            <ul className=" space-y-5 list-decimal px-8 py-4 tracking-wide">
              <li>
                Parents & children to be educated on what constitutes a healthy
                diet and a constant effort to ensure that they adhere to it.
                Emphasis to be laid on consuming whole grain cereal food, green
                vegetables, milk & milk products, and other protein-rich
                foods—eggs, lentils, etc.—and fruits and drinking plenty of
                water.
              </li>
              <li>
                A healthy diet has also been incorporated in our ‘health-care’
                card and is an important part of our initiative.
              </li>
              <li>
                Encourage eating fresh foods and ensure to check the validity of
                packaged foods before purchase. Discourage use of plastic
                bottles, utensils, and packaging.
              </li>
              <li>
                Help set up kitchen gardens in every house, where space is
                available, so that consumption of green vegetables and fruits
                becomes a part of the regular diet of families.
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
