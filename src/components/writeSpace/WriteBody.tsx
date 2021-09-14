import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateContent } from "../../features/markdown/markdownSlice";

const WriteBody = () => {
  const dispatch = useDispatch();

  const setPreveiw = (e) => {
    dispatch(updateContent(e.target.innerText));
  };

  return (
    <div className="h-3/4 w-full bg-white">
      <div
        contentEditable
        placeholder="enter some text"
        className="w-full h-full from-current focus:outline-none p-3"
        onKeyUp={setPreveiw}
      ></div>
    </div>
  );
};

export default WriteBody;
