import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

// https://kgsv-backend-production.up.railway.app/api/categories/1?fields=name&populate[posts][filters][date][$lt]=2024-01-01&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc

// https://kgsv-backend-production.up.railway.app/api/posts?filters[date][$lt]=2024-01-01&sort[0]=date:desc

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

const categoryArray = [
  "Agricultural Development",
  "Child Education",
  "Child Health And Nutrition",
  "Cleanliness",
  "Enviroment Conservation",
  "Women Empowerment",
];

const PreviousYears = () => {
  // const apiUrl = `https://kgsv-backend-production.up.railway.app/api/posts?filters[date][$lt]=2024-01-01&sort[0]=date:desc`;

  const [postList, setPostList] = useState<any>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Fetch initial data without date filter
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentYear = new Date().getFullYear();
const startOfYear = `${currentYear}-01-01`;
const queryUrl = `https://kgsv-backend-production.up.railway.app/api/posts?filters[date][$lt]=${startOfYear}&sort[0]=date:desc`;
        const response = await axios.get(queryUrl);
        // console.log(response)
        // console.log(response.data.data)
        setPostList(response.data.data);
      } catch (error) {
        console.error("Error fetching initial posts:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch data based on date filter
  const handleSearch = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    try {
      const response = await axios.get(
        `https://kgsv-backend-production.up.railway.app/api/posts?filters[date][$gte]=${startDate}&filters[date][$lte]=${endDate}&sort[0]=date:desc`
      );
      console.log(response?.data.data);
      setPostList(response?.data.data);
    } catch (error) {
      console.error("Error fetching filtered posts:", error);
    }
  };

  // fetch data based on category filter 
 // Fetch data based on date filter
 const handleCategorySearch = async (id: number) => {
  const currentYear = new Date().getFullYear();
const startOfYear = `${currentYear}-01-01`;

console.log(id)

const categoryId = id + 1

console.log(categoryId)
  try {
    const response = await axios.get(`https://kgsv-backend-production.up.railway.app/api/categories/${categoryId}?fields=name&populate[posts][filters][date][$lt]=${startOfYear}&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`);
    console.log(response?.data.data.attributes.posts.data);
    setPostList(response?.data.data.attributes.posts.data);
  } catch (error) {
    console.error("Error fetching filtered posts:", error);
  }
};

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
                  Previous Year's Activities
                </h1>
              </div>
              <div className="flex flex-col gap-5 ">
                {postList?.map((item: any) => (
                  <Link key={item.id} to={`/postdetails/${item.id}`}>
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
          {/* container for time and category filter  */}
          <div>
            {/* Time Filter */}
            <div className="mt-7 mb-10 md:mt-0 md:mr-16">
              <div className="flex justify-center items-center gap-6">
                <div className=" flex flex-col gap-2">
                  <h3 className=" text-center font-sans text-lg font-medium">
                    From
                  </h3>
                  <input
                    className=" border border-green-900 px-2 py-1 rounded-sm"
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                  />
                </div>

                <div className=" flex flex-col gap-2">
                  <h3 className=" text-center font-sans text-lg font-medium">
                    To
                  </h3>
                  <input
                    className=" border border-green-900 px-2 py-1 rounded-sm"
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleSearch}
                  className="px-3 py-2 bg-green-950 text-slate-100 text-lg"
                >
                  Search
                </button>
              </div>
            </div>

            {/* category filter  */}
            <div className=" mt-4 mb-4 flex flex-col items-center justify-center">
              <h2 className=" mb-4 text-xl font-Roboto  tracking-wide">Category Filter</h2>
              <div className=" space-y-4">
                {categoryArray.map((item,index) => (
                  <div onClick={() =>handleCategorySearch(index)} key={item} className=" w-[250px] text-center text-white py-2 rounded-md font-popins tracking-wide cursor-pointer bg-green-800 ">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PreviousYears;
