import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateContent } from "../../features/markdown/markdownSlice";

const WriteBody = () => {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const enterCheck = (e) => {
    if (e.key == "Enter") {
      textRef.current.value =
        textRef.current.value.substring(0, textRef.current.selectionStart) +
        "  " +
        textRef.current.value.substring(textRef.current.selectionStart);
    }
  };
  const setPreveiw = (e) => {
    dispatch(updateContent(textRef.current.value));
  };

  return (
    <div className="h-3/4 w-full bg-white border-l-2 border-r-2 overflow-auto">
      <textarea
        ref={textRef}
        placeholder="enter some text"
        className="w-full h-full from-current focus:outline-none p-3"
      ></textarea>
    </div>
  );
};

export default WriteBody;
