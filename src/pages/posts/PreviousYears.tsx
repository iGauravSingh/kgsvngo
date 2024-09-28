import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

// https://kgsv-backend-production.up.railway.app/api/posts?filters[date][$lt]=2024-01-01&sort[0]=date:desc

// const baseUrl = "https://kgsv-backend-production.up.railway.app";

const PreviousYears = () => {
  const apiUrl = `https://kgsv-backend-production.up.railway.app/api/posts?filters[date][$lt]=2024-01-01&sort[0]=date:desc`;

  const [postList, setPostList] = useState<any>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Fetch initial data without date filter
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
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

  return (
    <>
      <Header />

      <>
        <div className="w-screen min-h-screen lg:pl-14 md:pl-7 pl-5 mt-8">
          <div className=" flex flex-col-reverse md:flex-row md:justify-between ">
            <div className="max-w-xl">
              {/* Display filtered posts */}
              <div className="flex flex-col gap-5">
                {postList?.map((item: any) => (
                  <div key={item.id}>
                    <h3 className="text-2xl font-semibold text-green-950 cursor-pointer">
                      <Link to={`/postdetails/${item.id}`}>
                        {item.attributes.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.attributes.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Filter */}
            <div className="mt-7 mb-10 md:mt-0 md:mr-16">
              <div className="flex items-center gap-4">
                <input
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                />
                <input
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                />
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
      </>

      <Footer />
    </>
  );
};

export default PreviousYears;
