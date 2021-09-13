import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import remarkGfm from "remark-gfm";
import { RootState } from "../../features/rootReducer";

const WritePreview = ({ content }) => {
  const markdownState = useSelector((state: RootState) => state.markdownState);
  return (
    <div className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownState.content}
      </ReactMarkdown>
    </div>
  );
};

export default WritePreview;
