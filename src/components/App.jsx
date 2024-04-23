import { useEffect, useState } from 'react';
import { fetchPhotos } from '../articles-api';
import ImageGallery from './ImageGallery';

import './App.css';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
        setPhotos(prevPhotos => {
          return [...prevPhotos, ...data];
        });
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
      {photos.length > 0 && <ImageGallery items={photos} />}
      {error && (
        <ErrorMessage
          message={'Failed to fetch photos. Please try again later.'}
        />
      )}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
