// import { useEffect, useState } from "react";
// import Footer from "../../../components/Footer";
// import Header from "../../../components/Header";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

// const WomenEmpowerment = () => {
//   const [postList, setPostList] = useState<any>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // Fetch initial data without date filter
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${baseUrl}/api/categories/6?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
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
//         `${baseUrl}/api/categories/6?fields=name&populate[posts][filters][date][$gte]=${startDate}&populate[posts][filters][date][$lte]=${endDate}&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
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
//                   Women Empowerment
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

// export default WomenEmpowerment;

// ==========================================================

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import { Link } from "react-router-dom";

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

// // https://kgsv-backend-production.up.railway.app/api/categories/1?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc

// // ${baseUrl}/api/categories/1?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][sort][0]=date:desc

// const PostList = () => {
//   const [postList, setPostList] = useState<any>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // Fetch initial data without date filter

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${baseUrl}/api/categories/1?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
//         );
//         setPostList(response.data.data.attributes.posts.data);
//       } catch (error) {
//         console.error("Error fetching initial posts:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Fetch data based on date filter

//     // `${baseUrl}/api/categories/1?fields=name&populate[posts][filters][date][$gte]=${startDate}&populate[posts][filters][date][$lte]=${endDate}&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`

//   // `${baseUrl}/api/categories/1?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`

//   const handleSearch = async () => {
//     if (!startDate || !endDate) {
//       alert("Please select both start and end dates.");
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `${baseUrl}/api/categories/1?fields=name&populate[posts][filters][date][$gte]=${startDate}&populate[posts][filters][date][$lte]=${endDate}&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
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
//                   Agricultural Development
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

// export default PostList;

// ===================================================================================

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
              src="/ourPlanStatic/women1.jpeg"
              alt="Top Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <span className="text-white text-4xl font-bold font-CormorantUpright">Begining of journey</span> */}
            </div>
          </div>

          <div className="my-8 p-4">
            <h2 className="text-2xl font-bold mb-4 text-center leading-7 tracking-wide ">
              Women Empowerment Plan
            </h2>
            {/* <p className="text-gray-800 leading-7 tracking-wide text-justify">
        Creation of wealth at the cost of the environment and the health of our children & society, is certainly not the purpose of agriculture. Farming must be done responsibly, not for subsistence only, but to create a win-win situation for all stake holders – KGSV
        </p> */}
          </div>

          {/* First paragraph with heading */}
          <div className="my-8 p-4">
            <p className="text-gray-800 leading-8 tracking-wide text-justify">
              Women Education & employment Plan
            </p>
            <ul className=" space-y-5 list-decimal px-8 py-4 tracking-wide">
              <li>
                All women must learn to read and write in the local language.
              </li>
              <li>Must learn how to open & operate bank accounts and ATMs.</li>
              <li>
                Must understand the importance of education for their children,
                so that they encourage and ensure 100% attendance in schools.
                The children must not be made to work on fields, industry, and
                animal rearing but encouraged to study and play.
              </li>
              <li>
                Educate women on Common Law, their rights and general safety
                while at home & at work.
              </li>
              <li>
                Must understand the importance of small family and to treat boys
                and girls at par. Marriage should be considered only once the
                children complete their education, have attained marriageable
                age as per Law, and achieved financial independence.
              </li>
              <li>
                Must understand the importance of conserving water, the purity
                of air, and the need to nurture a clean and green environment.
              </li>
              <li>
                Must be aware of the cleanliness in their houses, the
                neighborhood, and the village for a healthy family and
                environment.
              </li>
              <li>
                Must understand the nutrition & hygiene requirements of the body
                for children, women, and family. Must consume the right kind of
                foods for a healthy body & mind. Where women own farmland, guide
                the selection of crops, use of the correct type of fertilizers,
                and increasing productivity.
              </li>
              <li>
                Inculcate a spirit of collaboration and an attitude to be
                caring, helpful, and kind. Moral education & bringing positivity
                to be an essential part of the curriculum.
              </li>
              <li>
                Support to grow any local trade/skill available in the village
                into a professional source of employment for the women.
              </li>
              <li>
                Impart some vocational training so that they could engage in
                gainful employment and add to the family income.
              </li>
              <li>
                Provide the women, infrastructure support, guidance in
                production, and sale of products so that maximum benefit could
                accrue to them.
              </li>
            </ul>

            <div className=" flex flex-wrap justify-center items-center gap-6 mt-6">
              <img className=" w-screen md:w-[250px] h-[450px] md:h-[350px]" src="/ourPlanStatic/three.jpg" alt="one" />
              <img className=" w-screen md:w-[250px] h-[450px] md:h-[350px]" src="/ourPlanStatic/two.jpg" alt="one" />
              <img className=" w-screen md:w-[250px] h-[450px] md:h-[350px]" src="/ourPlanStatic/one.jpg" alt="one" />
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
