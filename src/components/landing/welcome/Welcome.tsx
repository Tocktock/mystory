import CategoryBar from "../category/CategoryBar";
const Welcome = () => {
  return (
    <div className="w-full h-224 min-h-full bg-gradient-to-b from-gray-800 to-black">
      <div className="h-4/5"></div>
      <div className="h-1/5">
        <CategoryBar></CategoryBar>
      </div>
    </div>
  );
};

export default Welcome;
