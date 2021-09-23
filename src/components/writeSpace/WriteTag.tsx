import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
} from "../../features/markdown/markdownSlice";
import { RootState } from "../../features/rootReducer";

const WriteTag = () => {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLInputElement>(null);
  const markdownState = useSelector((state: RootState) => state.markdownState);

  const newKeyPress = (e) => {
    if (e.code == "Enter") {
      e.preventDefault();
      dispatch(addCategory(textRef.current.value));
      textRef.current.value = "";
    }
  };

  const removeThis = (e) => {
    e.preventDefault();
    dispatch(deleteCategory(e.target.innerText));
  };

  return (
    <div className="flex h-14 border-t border-b py-2 ">
      {markdownState.category.map((v) => {
        return (
          <button
            className="max-w-xl text-center align-middle border-green-500 hover:bg-coYellow-500 bg-coYellow-400 text-green-500 font-bold px-4 mx-1 rounded-xl"
            onClick={removeThis}
            key={v}
          >
            {v}
          </button>
        );
      })}
      <label htmlFor=""></label>
      <input
        className="border rounded-xl flex w-32 outline-none px-4"
        ref={textRef}
        onKeyPress={newKeyPress}
      ></input>
    </div>
  );
};

export default WriteTag;
