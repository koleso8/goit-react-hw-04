const Photo = ({ urls, alt_description, openModal }) => {
  return (
    <li
      className="overflow-hidden flex items-center justify-center h-64 rounded-xl hover:scale-105 transition-all "
      onClick={() =>
        openModal({
          large: urls.regular,
          alt_description,
        })
      }
    >
      <img src={urls.small} alt={alt_description} />
    </li>
  );
};
export default Photo;
