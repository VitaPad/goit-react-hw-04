import { useEffect, useState } from 'react';
import { fetchPhotos } from '../articles-api';
import ImageGallery from './ImageGallery';

import './App.css';
import SearchBar from './SearchBar.jsx';
import Loader from './Loader.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import LoadMoreBtn from './LoadMoreBtn.jsx';
import ImageModal from './ImageModal.jsx';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

/* const modalStyles = {
  ...customStyles,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Сірий фон з прозорістю
}; */

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  const openButton = (total_pages, page) => {
    setShowBtn(total_pages && total_pages !== page);
  };

  const openModal = urls => {
    setIsOpen(true);
    setSelectedImageUrl(urls);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async newQuery => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getPhotos() {
      try {
        setLoading(true);
        const data = await fetchPhotos(query, page);
        const totalPages = data.total_pages;
        console.log(totalPages);
        setPhotos(prevPhotos => {
          return [...prevPhotos, ...data];
        });
        openButton(totalPages, page);
        setShowBtn(true);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, [page, query]);

  return (
    <>
      <SearchBar query={query} onSubmit={handleSubmit} setQuery={setQuery} />
      {isLoading && <Loader />}
      {photos.length > 0 && (
        <ImageGallery items={photos} openModal={openModal} />
      )}
      {error && (
        <ErrorMessage
          message={'Failed to fetch photos. Please try again later.'}
        />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        imageUrl={selectedImageUrl}
        style={customStyles}
      />
      {showBtn && (
        <LoadMoreBtn onClick={handleLoadMore} openButton={openButton} />
      )}
    </>
  );
}

export default App;

/* photos.length < totalPages * perPage  */
