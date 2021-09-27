import axios from 'axios';
import { GetServerSideProps } from 'next';
import WriteBody from '../../src/components/writeSpace/WriteBody';
import WriteHeader from '../../src/components/writeSpace/WriteHeader';
import WritePreview from '../../src/components/writeSpace/WritePreview';
import WriteTag from '../../src/components/writeSpace/WriteTag';
import WriteActionBar from '../../src/components/writeSpace/WritwActionBar';

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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const resultStatus = await axios
    .get('http://localhost:8080/jwt-auth')
    .then((v) => v.status)
    .catch((err) => err);

  if (resultStatus != 200) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
