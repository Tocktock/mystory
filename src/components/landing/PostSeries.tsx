import { useRef, useState } from "react";
import PostSeriesCard from "./PostSeriesCard";

// 회전 목마식으로,
// 데이터를 불러와서 할 예정임.
const PostSeries = () => {
  return (
    <div className="relative border-2 mt-16 bg-gradient-to-b from-blue-50 to-white">
      <header className="flex">
        <h1 className="font-extrabold text-6xl mt-12 mx-auto"> Blog Series </h1>
      </header>
      <div className="relative container grid grid-cols-3 grid-rows-2 justify-center mt-12 mx-auto rounded-lg bg-gray-900 overflow-hidden " >
        <PostSeriesCard imgSrc={"manyang_8"} ></PostSeriesCard>
        <PostSeriesCard imgSrc={"manyang_8"} ></PostSeriesCard>
        <PostSeriesCard imgSrc={"manyang_8"} ></PostSeriesCard>
        <PostSeriesCard imgSrc={"manyang_8"} ></PostSeriesCard>
        <PostSeriesCard imgSrc={"manyang_8"} ></PostSeriesCard>
        <PostSeriesCard imgSrc={"manyang_8"} ></PostSeriesCard>
      </div>
    </div>
  )
};

export default PostSeries;
