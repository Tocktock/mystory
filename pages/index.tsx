import NavBar from "../src/components/navigation/NavBar";
import Welcome from "../src/components/landing/welcome/Welcome";
import CategoryBar from "../src/components/landing/category/CategoryBar";
import NewPost from "../src/components/landing/newpost/NewPost";
export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <NewPost></NewPost>
    </>
  );
}
