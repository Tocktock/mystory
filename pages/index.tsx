import NavBar from "../src/components/navigation/NavBar";
import Welcome from "../src/components/landing/welcome/Welcome";
import NewPost from "../src/components/landing/newpost/NewPost";

export default function Home() {
    return (
        <>
            <NavBar/>
            <Welcome/>
            <NewPost/>
        </>
    );
}
