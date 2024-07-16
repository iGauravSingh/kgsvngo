import { useState } from "react";
import Modal from "react-modal";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { FaRegPlayCircle } from "react-icons/fa";

Modal.setAppElement("#root");

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const Videos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const videos: Video[] = [
    {
      id: 1,
      title: "Sample 1",
      thumbnail: "/img/one.jpg",
      videoUrl: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=8RAjpiDteTZqKm-x",
    },
    {
      id: 2,
      title: "Video 2",
      thumbnail: "/img/two.jpg",
      videoUrl: "https://www.youtube.com/embed/O5O3yK8DJCc?si=NEm3zrBDF9MiY5Rw",
    },
    {
      id: 3,
      title: "Video 3",
      thumbnail: "/img/three.jpg",
      videoUrl: "https://www.youtube.com/embed/7PIji8OubXU?si=LzOIpM6XtpA5WJSz",
    },
    {
      id: 4,
      title: "Sample 2",
      thumbnail: "/img/one.jpg",
      videoUrl: "https://www.youtube.com/embed/O5O3yK8DJCc?si=NEm3zrBDF9MiY5Rw",
    },
    {
      id: 5,
      title: "Video 4",
      thumbnail: "/img/two.jpg",
      videoUrl: "https://www.youtube.com/embed/7PIji8OubXU?si=LzOIpM6XtpA5WJSz",
    },
    {
      id: 6,
      title: "Video 5",
      thumbnail: "/img/three.jpg",
      videoUrl: "https://www.youtube.com/embed/7PIji8OubXU?si=LzOIpM6XtpA5WJSz",
    },
  ];

  // const videos: Video[] = [
  //   { id: 1, title: 'Video 1', thumbnail: 'thumbnail-url-1.jpg', videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ' },
  //   { id: 2, title: 'Video 2', thumbnail: 'thumbnail-url-2.jpg', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  //   { id: 3, title: 'Video 3', thumbnail: 'thumbnail-url-3.jpg', videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' },
  // ];

  const openModal = (videoUrl: string) => {
    console.log(videoUrl);
    setCurrentVideoUrl(videoUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentVideoUrl("");
    setModalIsOpen(false);
  };

  return (
    <>
      <Header />

      <>
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 mb-8 font-popins">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(video.videoUrl)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80"><FaRegPlayCircle size={50} color="white" /></div>
              {/* <div className="p-4">
            <h2 className="text-xl font-bold">{video.title}</h2>
          </div> */}
            </div>
          ))}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Video Modal"
            className="flex justify-center items-center"
            overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
          >
            <div className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-green-700 bg-white rounded-full p-2"
              >
                &times;
              </button>
              <div className="relative">
                <iframe
                  width="560"
                  height="315"
                  src={currentVideoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  
                  
                ></iframe>
              </div>
            </div>
          </Modal>
        </div>
      </>

      <Footer />
    </>
  );
};

export default Videos;
