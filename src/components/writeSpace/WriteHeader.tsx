import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateTitle } from "../../features/markdown/markdownSlice";

const WriteHeader = () => {
  const dispatch = useDispatch();
  const updateTitleHandler = (e) => dispatch(updateTitle(e.target.value));
  return (
    <div className="flex">
      <input
        onKeyUp={updateTitleHandler}
        placeholder="제목을 입력하세요."
        className="placeholder-gray-300 w-full h-full from-current p-4 text-4xl font-semibold focus:outline-none"
      ></input>
    </div>
  );
};

export default WriteHeader;
