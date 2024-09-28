import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://kgsv-backend-production.up.railway.app";

const PostDetails = () => {
  const { id } = useParams();

  const [postList, setPostList] = useState<any>(null);
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string | null>(null);

  // Fetch post data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/posts/${id}?populate=images`
        );
        setPostList(response.data.data.attributes);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchData();
  }, [id]);

  // Update image array and main image once post data is loaded
  useEffect(() => {
    if (postList?.images?.data) {
      const images = postList.images.data.map(
        (item: any) => `${baseUrl}${item.attributes.url}`
      );
      setImageArray(images);
      setMainImage(images[0]); // Set the first image as the main image
    }
  }, [postList]);

  return (
    <>
      <Header />

      <div className="w-screen min-h-screen">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h1 className="text-2xl text-center mt-4 font-popins px-5">
            {postList?.title}
          </h1>

          {/* Image Carousel */}
          <div className="flex flex-col items-center">
            {/* Main Image */}
            <div className="mb-4">
              {mainImage && (
                <img
                  src={mainImage}
                  alt="Main"
                  className="w-[600px] h-[400px] object-cover rounded-lg shadow-lg"
                />
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {imageArray.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => setMainImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className="w-24 h-24 object-cover rounded-md border-2 border-gray-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Post created date */}
          <p className="text-sm text-slate-400 font-Roboto">
            {postList?.date}
          </p>

          {/* Post description */}
          {postList?.description.map((item: any, index: any) => (
            <p key={index} className="mt-4 px-5 text-justify">
              {item.children[0].text}
            </p>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PostDetails;