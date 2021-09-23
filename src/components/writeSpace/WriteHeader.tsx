const WriteHeader = () => {
  return (
    <div className="flex">
      <div
        contentEditable
        placeholder="Header"
        className="placeholder-gray-300 w-full h-full from-current p-4 text-4xl font-semibold focus:outline-none"
      ></div>
    </div>
  );
};

export default WriteHeader;
