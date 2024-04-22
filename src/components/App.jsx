import { useEffect, useState } from 'react';
import { fetchPhotos } from '../articles-api';
import ImageGallery from './ImageGallery';

import './App.css';
import SearchBar from './SearchBar';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = async newQuery => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getPhotos() {
      const data = await fetchPhotos(query, page);
      setPhotos(prevPhotos => {
        return [...prevPhotos, ...data];
      });
    }

    getPhotos();
  }, []);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery items={photos} />
    </>
  );
}

export default App;
