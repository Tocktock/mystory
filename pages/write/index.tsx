import axios from "axios";
import { GetServerSideProps } from "next";
import WriteBody from "../../src/components/writeSpace/WriteBody";
import WriteHeader from "../../src/components/writeSpace/WriteHeader";
import WritePreview from "../../src/components/writeSpace/WritePreview";
import WriteTag from "../../src/components/writeSpace/WriteTag";
import WriteActionBar from "../../src/components/writeSpace/WritwActionBar";

export default function Home() {
  return (
    <div className="flex mx-4">
      <div className="h-screen w-1/2 ">
        <WriteHeader />
        <WriteTag />
        <WriteBody />
        <WriteActionBar />
      </div>
      <div className="h-screen w-1/2 overflow-auto bg-gray-50">
        <WritePreview />
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookieReq = ctx.req ? ctx.req.headers.cookie : null;
  const result = await axios.get(process.env.SERVER_URI + "/jwt-auth", {
    headers: {
      Cookie: cookieReq + ";",
    },
  });

  if (result.status != 200) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
