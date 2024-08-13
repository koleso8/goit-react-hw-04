import { useState } from 'react';
import { fetchPhotos } from './services/searchAPI';
import { useEffect } from 'react';

import SearchPhotos from './components/SearchPhotos/SearchPhotos';
import GalleryList from './components/GalleryList/GalleryList';
import LoadMore from './components/LoadMore/LoadMore';
import PhotosModal from './components/PhotosModal/PhotosModal';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState({});

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhotos({ query, page });
        setPhotos(prev => [...prev, ...data.results]);
        setShowLoadMore(page < data.total_pages);
        if (data.total_pages === 0) setIsError(true);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const openModal = photo => {
    setCurrentModal(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
        <PhotosModal
          currentModal={currentModal}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />

        <GalleryList photos={photos} openModal={openModal} />

        {isLoading && <Loader />}

        {showLoadMore && photos.length > 0 && <LoadMore loadMore={loadMore} />}

        {isError && <ErrorMessage />}
      </main>
    </>
  );
};

export default App;
