import MyWord from "../src/components/landing/MyWord";
import PostSeries from "../src/components/landing/PostSeries";
import Introduce from "../src/components/landing/Introduce";
import ManyangGuremGrid from "../src/components/landing/ManyangGurem";
import ManyangGuremIntroduce from "../src/components/landing/ManyangGuremIntroduce";

export default function Home() {
  return (
    <div className="">
      <header className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 to-red-200">
          {/* background */}
        </div>
        <MyWord />
        <Introduce></Introduce>
        <ManyangGuremIntroduce></ManyangGuremIntroduce>
      </header>
      <section >
        <ManyangGuremGrid></ManyangGuremGrid>
        <PostSeries></PostSeries>
      </section>
    </div>
  );
}
