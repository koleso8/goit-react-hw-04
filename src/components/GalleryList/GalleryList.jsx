import Photo from './Photo';

const GalleryList = ({ photos, openModal }) => {
  return (
    <div className="mb-4">
      <ul className="flex flex-wrap gap-4 justify-center">
        {photos?.map(item => {
          return <Photo key={item.id} openModal={openModal} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default GalleryList;
