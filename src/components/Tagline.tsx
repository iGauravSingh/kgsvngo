
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


// https://kgsv-backend-production.up.railway.app/api/posts?populate=image&sort[0]=date:desc&pagination[limit]=1



const baseUrl = 'https://kgsv-backend-production.up.railway.app'

const apiurl = `${baseUrl}/api/posts?populate=images&sort[0]=date:desc&pagination[limit]=1`

const Tagline = () => {

  const [postList, setPostList] = useState<any>(null);
  const [idd, setIdd] = useState<any>(null)

   // Fetch initial data without date filter
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiurl}`
        );
        console.log(response.data.data[0])
        setPostList(response.data.data[0].attributes);
        setIdd(response.data.data[0].id)
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center w-screen">


      <div className=" relative w-screen md:w-[50%] h-[250px] font-CormorantUpright overflow-clip ">

        <div className=" w-full h-full absolute top-0 left-0 z-10">
          <img
            className=" w-full h-full z-10 object-cover"
            src="/posters/bannerngo2.jpg"
            alt="banner"
          />
        </div>
        <div className=" w-full h-full flex flex-col justify-end items-center gap-20 text-white pt-9 pb-10 mt-2 ">
          <p className=" text-center text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] z-30">
            Dedicated to supporting Rural Communities
          </p>
          <p className="text-center text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] z-30">
            6th year
          </p>
        </div>
      </div>
      {/* // */}

      
      <div className=" relative w-screen md:w-[50%] h-[250px]  overflow-clip">
      
        <img
          className=" w-full h-full object-cover"
          src={`${baseUrl}${postList?.images.data[0].attributes.url}`}
          alt=""
        />
        
        {/* <Link to={`/postdetails/${postList.id}`}></Link> */}
        <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-t from-gray-900 via-gray-900/10 z-50">
        <Link to={`/postdetails/${idd}`}>
          <div className=" h-full w-full flex flex-col justify-end px-4 py-2 font-CormorantUpright text-white">
            <h6>{postList?.date}</h6>
            <h4>{postList?.title}</h4>
            <h4 className="">Read More...</h4>
          </div>
          </Link>
        </div>
        
      </div>
      
      {/* // */}

    </div>
  );
};

export default Tagline;
