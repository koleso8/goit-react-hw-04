import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="bg-cyan-950 opacity-70 flex items-center justify-center w-full h-full fixed top-0 left-0">
      <MagnifyingGlass
        visible={true}
        height="160"
        width="160"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#038cfc"
      />
    </div>
  );
};

export default Loader;
