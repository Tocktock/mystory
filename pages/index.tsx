import NavBar from "../src/components/navigation/NavBar";
import Welcome from "../src/components/welcome/Welcome";
import CategoryBar from "../src/components/category/CategoryBar";
import NewPost from "../src/components/newpost/newpost";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <CategoryBar></CategoryBar>
      <NewPost></NewPost>
    </div>
  );
}
