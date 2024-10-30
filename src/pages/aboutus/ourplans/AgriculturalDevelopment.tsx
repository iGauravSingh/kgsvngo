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
          src="/ourPlanStatic/agriculture.jpeg"
          alt="Top Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <span className="text-white text-4xl font-bold font-CormorantUpright">Begining of journey</span> */}
        </div>
      </div>
      

      <div className="my-8 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center leading-7 tracking-wide ">Agriculture Development Plan</h2>
        <p className="text-gray-800 leading-7 tracking-wide text-justify">
        Creation of wealth at the cost of the environment and the health of our children & society, is certainly not the purpose of agriculture. Farming must be done responsibly, not for subsistence only, but to create a win-win situation for all stake holders – KGSV
        </p>
      </div>

      {/* First paragraph with heading */}
      <div className="my-8 p-4">
        
        <p className="text-gray-800 leading-7 tracking-wide text-justify">
        It shall be the endeavor of KGSV Foundation to:</p>
        <ul className=" space-y-5 list-decimal px-8 py-4 tracking-wide">
          <li>Promote environment friendly organic farming practices, that are easier on the soil and also on the produce that is eventually consumed by the people.  </li>
          <li>Educate farmers to switch over from crops that consume large amount of water and are responsible for depletion of limited water resources and are also not necessarily a source of nutrition, to nutritious crops that consume less water and are healthy.</li>
          <li>Encourage farmers to switch over to growing organic vegetables, fruits, pulses and other foods that can be consumed by their families and also help address the nutritional deficiencies of their children, while selling the surplus to the markets. </li>
          <li>Resolve the numerous problems faced by the farmers relating to scarcity of water, availability of organic fertilizers & the right variety of seeds, knowledge of environment friendly pest control methods, destruction of crops by stray cattle and the use of scientific methods for farming. For this, KGSV would work in close coordination with the Agriculture Science Centre of the ICAR and other Universities of Agriculture.</li>
          <li>Teach the relevance of drip irrigation to the farmers and its impact on not only conserving water but also in increasing produce. Help them to gradually adopt the drip irrigation method of farming.</li>
          <li>Discourage the burning of stubble in the fields and educate the farmers on the need for soil testing to adequately replenish the fertility of soil using environment friendly methods.</li>
          <li>Endeavor to create a market place for the farmers so that they can get the right price for their produce.</li>
          <li>Very small landholdings are an impediment to a good produce and we would endeavor to create cooperatives of small farmers so that the landholdings can be increased, making it easier & cost effective to use modern agricultural implements & methods.</li>
          <li>All efforts would be directed towards raising farmer incomes, consequently the lifestyles, but in harmony with the environment and nutrition needs of the society.</li>
        </ul>
        <p className=" text-center mt-8">************</p>
      </div>

      
    </div>
    </>
    <Footer />
    </>
  )
}

export default PostList