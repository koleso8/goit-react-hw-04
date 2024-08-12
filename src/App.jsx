import { useState } from 'react';
import { fetchPhotos } from './services/searchAPI';
import { useEffect } from 'react';
import SearchPhotos from './components/SearchPhotos/SearchPhotos';
import GalleryList from './components/GalleryList/GalleryList';
import LoadMore from './components/LoadMore/LoadMore';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhotos({ query, page });
        setPhotos(prev => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleChengeQuery = newQuery => {
    setPhotos([]);
    setQuery(newQuery);
    setPage(1);
  };

  const loadMore = () => setPage(prev => prev + 1);

  return (
    <>
      <header className="flex justify-center bg-cyan-600 p-4 mb-4">
        <SearchPhotos handleChengeQuery={handleChengeQuery} />
      </header>
      <main className="flex items-center flex-col">
        <GalleryList photos={photos} />
        <LoadMore loadMore={loadMore} />
      </main>
    </>
  );
};

export default App;
