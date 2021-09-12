import WriteBody from "../../src/components/writeSpace/WriteBody";
import WriteHeader from "../../src/components/writeSpace/WriteHeader";
import WritePreview from "../../src/components/writeSpace/WritePreview";
import WriteTag from "../../src/components/writeSpace/WriteTag";
import WriteActionBar from "../../src/components/writeSpace/WritwActionBar";

export default function Home() {
  return (
    <div className="flex">
      <div className="h-screen w-1/2 bg-red-200">
        <WriteHeader />
        <WriteActionBar />
        <WriteBody />
        <WriteTag />
      </div>
      <div className="h-screen w-1/2 bg-blue-200">
        <WritePreview></WritePreview>
      </div>
    </div>
  );
}
