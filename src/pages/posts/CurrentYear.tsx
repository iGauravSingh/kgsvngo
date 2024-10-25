import { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



const CurrentYear = () => {

  const currentYear = new Date().getFullYear();
const startDate = `${currentYear}-01-01`; // Start of the year
const endDate = `${currentYear}-12-31`; // End of the year

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

// Assuming startDate and endDate are defined
const apiUrl = `https://kgsv-backend-production.up.railway.app/api/posts?filters[date][$gte]=${startDate}&filters[date][$lte]=${endDate}&sort[0]=date:desc`;

const [postList, setPostList] = useState<any>(null);
  

  // Fetch initial data without date filter
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        // console.log(response)
        console.log(response.data.data)
        setPostList(response.data.data);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <>
    <Header />

    <div className="w-screen min-h-screen lg:pl-14 md:pl-7  mt-8">
        <div className=" flex flex-col-reverse lg:flex-row md:justify-between ">
          <div className=" w-full lg:mx-8">
            {/* Display filtered posts */}
            <div className="flex flex-col gap-5 ">
              <div className=" w-full h-[200px] bg-[#eeeeee] flex justify-start items-center pl-8">
                <h1 className=" font-CormorantUpright text-4xl text-[#ec1d28] text-center">
                  Current Year's Activities
                </h1>
              </div>
              <div className="flex flex-col gap-5 ">
                {postList?.map((item: any) => (
                  <Link to={`/postdetails/${item.id}`}>
                    <div
                      key={item.id}
                      className=" w-full h-full bg-white border-b border-slate-300 pb-6 px-4"
                    >
                      <h3 className="text-4xl font-CormorantUpright text-[#3a3a3a]">
                        {item.attributes.title}{" "}
                        <span className=" font-Roboto">-</span>{" "}
                        {item.attributes.date}
                      </h3>
                      <p className=" text-[#3a3a3a] text-base font-Roboto mt-5 leading-8 text-justify">
                        {item.attributes.description?.[0]?.children?.[0]?.text.slice(
                          0,
                          300
                        )}
                        ...
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </div>

    <Footer />
    </>
  )
}

export default CurrentYear