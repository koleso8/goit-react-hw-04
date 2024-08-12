const LoadMore = ({ loadMore }) => {
  return (
    <button
      className="w-36 cursor-pointer transition-all 
bg-cyan-600 text-white font-bold px-6 py-2 rounded-lg
border-cyan-100
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-cyan-100 shadow-cyan-100 active:shadow-none"
      type="button"
      onClick={() => loadMore()}
    >
      Load more
    </button>
  );
};

export default LoadMore;
