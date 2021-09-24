const WriteActionBar = () => {
  function savePost() {}
  function publishPost() {}
  return (
    <div className="flex space-x-4 my-2 py-2 bg-green-50 border-t shadow-lg justify-end ">
      <button
        onClick={savePost}
        className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 border border-yellow-400 rounded-lg"
      >
        저장하기
      </button>
      <button
        onClick={publishPost}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-500 rounded-lg"
      >
        출간하기
      </button>
    </div>
  );
};

export default WriteActionBar;
