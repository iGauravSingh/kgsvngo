
import Modal from 'react-modal';
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useState } from 'react';



Modal.setAppElement('#root');

interface Image {
  id: number;
  title: string;
  thumbnail: string;
  fullSize: string;
}


const Gallery = () => {


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [currentImageTitle, setCurrentImageTitle] = useState('');

  const images: Image[] = [
    { id: 1, title: 'Image 1', thumbnail: 'img/five.jpg', fullSize: 'img/five.jpg' },
    { id: 2, title: 'Image 2', thumbnail: 'img/six.jpg', fullSize: 'img/six.jpg' },
    { id: 3, title: 'Image 3', thumbnail: 'img/seven.jpg', fullSize: 'img/seven.jpg' },
    { id: 4, title: 'Image 4', thumbnail: 'img/eight.jpg', fullSize: 'img/eight.jpg' },
    { id: 5, title: 'Image 5', thumbnail: 'img/nine.jpg', fullSize: 'img/nine.jpg' },
    { id: 6, title: 'Image 6', thumbnail: 'img/ten.jpg', fullSize: 'img/ten.jpg' },
    { id: 7, title: 'Image 7', thumbnail: 'img/eleven.jpg', fullSize: 'img/eleven.jpg' },
    { id: 8, title: 'Image 8', thumbnail: 'img/twelve.jpg', fullSize: 'img/twelve.jpg' },
    { id: 9, title: 'Image 9', thumbnail: 'img/one.jpg', fullSize: 'img/one.jpg' },
  ];

  const openModal = (image: Image) => {
    setCurrentImageUrl(image.fullSize);
    setCurrentImageTitle(image.title);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentImageUrl('');
    setCurrentImageTitle('');
    setModalIsOpen(false);
  };

  return (
    <>
    <Header />

    <>
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-9 font-popins">
      {images.map((image) => (
        <div
          key={image.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openModal(image)}
        >
          <img
            src={image.thumbnail}
            alt={image.title}
            className="w-full h-48 object-cover"
          />
          {/* <div className="p-4">
            <h2 className="text-xl font-bold">{image.title}</h2>
          </div> */}
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
      >
        <div className=" rounded-lg overflow-hidden relative p-4 max-w-3xl w-full">
          {/* <button
            onClick={closeModal}
            className="absolute top-2 -right-1 text-white rounded-full z-40 text-4xl"
          >
            &times;
          </button> */}
          <div className="relative">
            <img src={currentImageUrl} alt={currentImageTitle} className="w-full h-auto" />
            <h2 className="text-xl font-bold text-center mt-4">{currentImageTitle}</h2>
          </div>
        </div>
      </Modal>
    </div>
    
    </>

    <Footer />
    </>
  )
}

export default Gallery