import NavBar from "../src/components/navigation/NavBar";
import Welcome from "../src/components/landing/welcome/Welcome";
import NewPost from "../src/components/landing/newpost/NewPost";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Home() {
  return (
    <>
      <NavBar />
      <Welcome />
      <NewPost />
    </>
  );
}
