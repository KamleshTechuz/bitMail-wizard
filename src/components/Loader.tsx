const Loader = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#0dceda]"></div>
    </div>
  );
};

export default Loader;
