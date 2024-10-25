import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "https://kgsv-backend-production.up.railway.app";

const WomenEmpowerment = () => {
  const [postList, setPostList] = useState<any>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Fetch initial data without date filter
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/categories/6?fields=name&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
        );
        // console.log(response.data.data.attributes.posts.data)
        setPostList(response.data.data.attributes.posts.data);
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
        `${baseUrl}/api/categories/6?fields=name&populate[posts][filters][date][$gte]=${startDate}&populate[posts][filters][date][$lte]=${endDate}&populate[posts][fields][0]=title&populate[posts][fields][1]=date&populate[posts][fields][2]=description&populate[posts][sort][0]=date:desc`
      );
      setPostList(response.data.data.attributes.posts.data);
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
                  Women Empowerment
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
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WomenEmpowerment;
