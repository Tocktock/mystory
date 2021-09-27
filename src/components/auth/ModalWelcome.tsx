import Image from 'next/image';

interface Props {}

const ModalWelcome: React.FC<Props> = (props) => (
  <div className="relative">
    <Image
      src="/images/welcomeCat.png"
      alt="welcome cat"
      width={260}
      height={390}
    />
  </div>
);

export default ModalWelcome;
