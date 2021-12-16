import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../features/rootReducer";

const WriteActionBar = () => {
  const markdownState = useSelector((state: RootState) => state.markdownState);
  const userState = useSelector((state: RootState) => state.userState);
  const savePostAction = async () => {
    const { title, content, category } = markdownState;
    const username = userState.username;
    await axios
      .post("/api/post/create", { title, content, category, username })
      .then((v) => console.log(v));
  };
  function publishPost() {}
  return (
    <div className="flex space-x-4 my-2 py-2 bg-green-50 border-t shadow-lg justify-end ">
      <button
        onClick={savePostAction}
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
