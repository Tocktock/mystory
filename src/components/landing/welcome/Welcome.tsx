import CategoryBar from "../category/CategoryBar";
const Welcome = () => {
  return (
    <div className="absolute w-full h-full min-h-full bg-gradient-to-b from-yellow-100 to-red-200">
      <div className="h-32 border-2">
      </div>
      <div className="flex flex-col my-20 justify-center w-full">
        <span className="text-gray-700 text-6xl w-full text-center"> 내 이야기가 시작한 곳 </span>
        <span className="text-gray-700 text-6xl w-full text-center"> 나만의 공간  </span>
      </div>
      <div className="h-96 border-2">
    내 소개
      </div>
      <div className="h-96 border-2">
    만냥 구름 소개
      </div>
    </div>
  );
};

export default Welcome;
