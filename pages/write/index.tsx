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
        <WriteActionBar />
        <WriteBody />
        <div className="h-8">
          <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 border border-yellow-400 rounded">
            저장하기
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-500 rounded">
            출간하기
          </button>
        </div>
      </div>
      <div className="h-screen w-1/2 overflow-auto bg-gray-50">
        <WritePreview></WritePreview>
      </div>
    </div>
  );
}
