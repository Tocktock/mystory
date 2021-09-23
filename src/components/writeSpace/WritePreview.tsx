import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import remarkGfm from "remark-gfm";
import { RootState } from "../../features/rootReducer";

const WritePreview = () => {
  const markdownState = useSelector((state: RootState) => state.markdownState);
  return (
    <div className="prose flex flex-col p-5 ">
      <ReactMarkdown
        children={markdownState.content}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </div>
  );
};

export default WritePreview;
