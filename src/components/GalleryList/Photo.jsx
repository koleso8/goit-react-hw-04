const Photo = photo => {
  return (
    <li className="overflow-hidden flex items-center justify-center h-64 rounded-xl">
      <img src={photo.urls.small} alt="" />
    </li>
  );
};
export default Photo;
