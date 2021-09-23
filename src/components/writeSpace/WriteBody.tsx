import { text } from "@fortawesome/fontawesome-svg-core";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateContent } from "../../features/markdown/markdownSlice";

const WriteBody = () => {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLTextAreaElement>(null);

  const setPreveiw = (e) => {
    dispatch(updateContent(textRef.current.value));
  };
  const keypress = (e) => {
    if (e.code == "Enter") {
      e.preventDefault();
      const selectionStart = textRef.current.selectionStart;
      textRef.current.value =
        textRef.current.value.slice(0, selectionStart) +
        "  \n" +
        textRef.current.value.slice(selectionStart);
      textRef.current.selectionStart = selectionStart + 3;
      textRef.current.selectionEnd = selectionStart + 3;
    }
  };

  return (
    <div className="h-3/4 w-full bg-white border-l-2 border-r-2 overflow-auto">
      <textarea
        ref={textRef}
        placeholder="enter some text"
        className="w-full h-full from-current focus:outline-none p-3"
        onKeyUp={setPreveiw}
        onKeyPress={keypress}
      ></textarea>
    </div>
  );
};

export default WriteBody;
