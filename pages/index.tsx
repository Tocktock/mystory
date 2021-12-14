import NavBar from "../src/components/navigation/NavBar";
import MyWord from "../src/components/landing/myword/MyWord";
import NewPost from "../src/components/landing/newpost/NewPost";
import Introduce from "../src/components/landing/introduce/Introduce";
import ManyangGuremGrid from "../src/components/landing/introduce/ManyangGurem";

export default function Home() {
  return (
    <div className="absolute flex flex-col w-full h-full bg-gradient-to-b from-yellow-100 to-red-200 overflow-scroll">
      {/* <NavBar /> */}
      <MyWord />
      <Introduce></Introduce>
      <ManyangGuremGrid></ManyangGuremGrid>
    </div>
  );
}
