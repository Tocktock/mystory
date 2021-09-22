import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateContent } from "../../features/markdown/markdownSlice";

const WriteBody = () => {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLTextAreaElement>(null);

  const setPreveiw = (e) => {
    if (e.key == "Enter") {
      let result = "";
      const text = textRef.current.value;
      for (let index = 0; index < text.length; index++) {
        if (text[index] == "\n") {
          if (index > 1 && text[index - 1] == " " && text[index - 2] == " ") {
            result += text[index];
          } else {
            result += "  \n";
          }
        } else result += text[index];
      }
      textRef.current.value = result;
    }
    dispatch(updateContent(textRef.current.value));
  };

  return (
    <div className="h-3/4 w-full bg-white border-l-2 border-r-2 overflow-auto">
      <textarea
        ref={textRef}
        placeholder="enter some text"
        className="w-full h-full from-current focus:outline-none p-3"
        onKeyUp={setPreveiw}
      ></textarea>
    </div>
  );
};

export default WriteBody;
