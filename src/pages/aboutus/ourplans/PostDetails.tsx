import { useParams } from "react-router-dom"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';


const baseUrl = "https://kgsv-backend-production.up.railway.app";

const PostDetails = () => {

    const { id } = useParams() 

    const [postList, setPostList] = useState<any>(null);
    const [imageArray,setImageArray] = useState<any>([])
    const [mainImage, setMainImage] = useState<any>(imageArray);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `${baseUrl}/api/posts/${id}?populate=images`
            );
            console.log(response.data.data.attributes)
            // console.log(response.data.data.attributes.posts.data)
            setPostList(response.data.data.attributes);
          } catch (error) {
            console.error("Error fetching initial posts:", error);
          }
        };
    
        fetchData();
      }, []);

      
      
      useEffect(() => {
        const storeImageLocation = () => {
            if(postList?.images.data){
                console.log(postList?.images.data)
                postList?.images.data.map((item:any) => {
                    setImageArray((prevstate:any) => [...prevstate,`${baseUrl}${item.attributes.url}`])
                    // imageArray.push(`${baseUrl}${item.attributes.url}`)
                    setMainImage(imageArray[0])
                })
            }
        }
        storeImageLocation()

      },[postList])

  return (
    <>
    <Header />

    <>
    <div className=" w-screen min-h-screen">
    <div className=" max-w-3xl mx-auto">
        {/* heading  */}
        <h1 className=" text-2xl text-center mt-4 font-popins">{postList?.title}</h1>

        {/* imageCorosel  */}
        {/* <div className=" mt-6">
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imageArray?.map((link:any, index:any) => (
        <SwiperSlide key={index}>
          <img src={link} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
        </div> */}

<div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={mainImage}
          alt="Main"
          className=" w-[600] h-[400] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-4">
        {imageArray?.map((image: any, index: any) => (
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
        

        {/* post created date  */}
        <p className=" text-sm text-slate-400 font-Roboto">{postList?.date}</p>

        {/* post description  */}
        {postList?.description.map((item:any,index:any) => (
            <p key={index} className=" mt-4">{item.children[0].text}</p>
        ))}
    </div>
    </div>
    </>

    <Footer />
    </>
  )
}

export default PostDetails

