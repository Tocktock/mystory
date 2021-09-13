import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateContent } from "../../features/markdown/markdownSlice";

const WriteBody = () => {
  const dispatch = useDispatch();

  const setPreveiw = (e) => {
    dispatch(updateContent(e.target.innerText));
  };

  return (
    <div className="h-1/2">
      <div className="w-full h-full bg-white">
        <div
          contentEditable
          placeholder="enter some text"
          className="w-full h-full from-current"
          onKeyDown={setPreveiw}
        ></div>
      </div>
    </div>
  );
};

export default WriteBody;
