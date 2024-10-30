// // import Footer from "../../../components/Footer"
// // import Header from "../../../components/Header"

// // const ChildEducation = () => {
// //   return (
// //     <>
// //     <Header />

// //     <>
// //     <div className=" w-screen h-screen font-popins flex justify-center items-center">
// //       <p>Comming Soon</p>
// //     </div>
// //     </>

// //     <Footer />
// //     </>
// //   )
// // }

// // export default ChildEducation

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import { Link } from "react-router-dom";

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

// const PostList = () => {
//   const [postList, setPostList] = useState<any>(null);
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // Fetch initial data without date filter
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${baseUrl}/api/categories/2?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
//         );
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
//         `${baseUrl}/api/categories/2?fields=name&populate[posts][filters][date][$gte]=${startDate}&populate[posts][filters][date][$lte]=${endDate}&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
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
//                   Child Education
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

// ===========================================================

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
              src="/ourPlanStatic/child2.jpg"
              alt="Top Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <span className="text-white text-4xl font-bold font-CormorantUpright">Begining of journey</span> */}
            </div>
          </div>

          <div className="my-8 p-4">
            <h2 className="text-2xl font-bold mb-6 text-center leading-7 tracking-wide ">
              Education Plan - 'Core 7'
            </h2>
            <p className="text-gray-800 leading-7 tracking-wide text-justify">
              To wholisically educate children and lay strong foundations for
              higher education & career growth, also grooming them to become
              responsible and caring citizens. Our endeavour will be to help the
              children in the following areas:
            </p>
          </div>

          {/* First paragraph with heading */}
          <div className="my-8 p-4">
            {/* <p className="text-gray-800 leading-8 tracking-wide text-justify">
              Women Education & employment Plan
            </p> */}
            <ul className=" space-y-5 list-decimal px-8  tracking-wide">
              <li>
                Reading, writing, understanding and communication in Hindi/local
                language and English
              </li>
              <li>Elementary maths, quick computing and digital learning</li>
              <li>Building a scientific temperament and IQ</li>
              <li>General awareness</li>
              <li>Health, hygiene and nutrition</li>
              <li>Environmental study & conservation</li>
              <li>Personality & character building</li>
            </ul>

            <div className=" flex flex-wrap justify-center items-center gap-6 mt-6">
              <img
                className=" w-screen md:w-[350px] h-[250px] md:h-[350px]"
                src="/ourPlanStatic/seven.jpg"
                alt="one"
              />
              <img
                className=" w-screen md:w-[350px] h-[250px] md:h-[350px]"
                src="/ourPlanStatic/eight.jpg"
                alt="one"
              />
              <img
                className=" w-screen md:w-[350px] h-[250px] md:h-[350px]"
                src="/ourPlanStatic/nine.jpg"
                alt="one"
              />
            </div>

            
          </div>

          {/* second para  */}
          <div className="my-8 p-4">
            {/* <p className="text-gray-800 leading-8 tracking-wide text-justify">
              Women Education & employment Plan
            </p> */}
            <ul className=" space-y-5 list-decimal px-8 py-4 tracking-wide">
              <li>
                Motivate parents to register and ensure that their children
                attend school. We will mentor children in our Child Mentoring
                Centers (CMC), post classes in school.
              </li>
              <li>
                A library in every CMC so that children have access to story &
                course books, atlases, dictionaries, digital media, games &
                gadgets that support learning & awareness.
              </li>
              <li>
                Enable centres by providing laptops to mentors, tablets to
                children, and other digital infrastructure at the centre for
                digital learning in a phased manner.
              </li>
              <li>
                Facilitate learning through educational modules and online
                classes for children in English, Mathematics, and Science.
              </li>
              <li>
                Provide a career path to children through preparation for
                competitive examinations, vocational & personality development
                courses.
              </li>
              <li>
                A Child Sports Club (CSC), with every CMC to promote games,
                exercise & sports for general fitness and an alert mind.
              </li>
              <li>
                Health camps to take periodic stock of child health. Educate
                children & parents in general health care, hygiene, and a
                nutritious diet.
              </li>
              <li>
                Cleanliness drives, tree plantation, and sensitivity & care for
                the environment to be ingrained through hands-on work, nature
                walks, & educational tours.
              </li>
              <li>
                Moral education through books & digital media, life sketches of
                eminent personalities & their work, and education on Indian
                culture.
              </li>
              <li>
                Inspire imagination to make learning innovative & interesting,
                so that passion for learning and confidence become drivers for
                academic excellence.
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
