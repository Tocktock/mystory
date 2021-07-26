import Image from "next/image";

interface Props {}

const ModalWelcome: React.FC<Props> = (props) => {
  return (
    <div className="relative">
      <Image
        src="/images/welcomeCat.png"
        alt="welcome cat"
        width={260}
        height={390}
      ></Image>
    </div>
  );
};

export default ModalWelcome;
