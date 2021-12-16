import GoTo from "./GoTo";

const MyWord = () => {
  return (
    <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
      <div className="my-20 justify-center w-full">
        <h1 className="text-gray-700 font-extrabold text-4xl md:text-5xl lg:text-6xl text-center">
          내 이야기가 시작한 곳
        </h1>
        <h1 className="text-gray-700 font-extrabold text-4xl md:text-5xl lg:text-6xl text-center mt-2">
          나의 공간
        </h1>
        <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          우리집 만냥이, 구름이를 소개하기 위해 만든 페이지
        </p>
        <GoTo></GoTo>
      </div>
    </div>
  );
};

export default MyWord;
