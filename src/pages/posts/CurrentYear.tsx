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
const apiUrl = `https://kgsv-backend-production.up.railway.app/api/posts?populate[filters][date][$gte]=${startDate}&populate[filters][date][$lte]=${endDate}&fields[0]=title`;

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

    <>
    <div className="relative w-screen min-h-screen lg:pl-14 md:pl-7 pl-5 mt-8">
        <div className="max-w-xl">
          {/* Display filtered posts */}
          <div className="flex flex-col gap-5">
            {postList?.map((item: any) => (
              <div key={item.id}>
                <h3 className="text-2xl font-semibold text-green-950 cursor-pointer">
                  <Link to={`/postdetails/${item.id}`}>{item.attributes.title}</Link>
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.attributes.date}
                </p>
              </div>
            ))}
          </div>
        </div>
    </div>
    </>

    <Footer />
    </>
  )
}

export default CurrentYear