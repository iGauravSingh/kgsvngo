import axios from 'axios';
import Modal from 'react-modal';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from 'react';

Modal.setAppElement('#root');

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [currentImageTitle, setCurrentImageTitle] = useState('');
  const [backImage, setBackImage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const openModal = (image: any) => {
    setCurrentImageUrl('https://kgsv-backend-production.up.railway.app' + image.largeUrl);
    setCurrentImageTitle(image.name);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentImageUrl('');
    setCurrentImageTitle('');
    setModalIsOpen(false);
  };

  const fetchLargeImages = async (page = 1, pageSize = 12) => {
    const start = (page - 1) * pageSize;
    try {
      const response = await axios.get('https://kgsv-backend-production.up.railway.app/api/upload/files', {
        params: {
          limit: pageSize,
          start: start,
        },
      });

      const largeImages = response?.data
        .filter((file: any) => file.formats?.large)
        .map((file: any) => ({
          id: file.id,
          name: file.name,
          largeUrl: file.formats.large.url,
          createdAt: file.createdAt,
        }));

      return largeImages;
    } catch (error) {
      console.error('Error fetching large images:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchLargeImages(currentPage, pageSize);
      setBackImage(images);
    };

    fetchImages();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Header />

      <div className="mx-8 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-9 font-popins">
        {backImage.map((image: any) => (
          <div
            key={image.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              src={'https://kgsv-backend-production.up.railway.app' + image.largeUrl}
              alt={image.name}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
      >
        <div className="rounded-lg overflow-hidden relative p-4 max-w-3xl w-full">
          <div className="relative">
            <img src={currentImageUrl} alt={currentImageTitle} className="w-full h-auto" />
          </div>
        </div>
      </Modal>

      <Footer />
    </>
  );
};

export default Gallery;
