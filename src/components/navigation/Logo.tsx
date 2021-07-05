import Image from "next/image";
const Logo = () => {
  return (
    <div>
      <Image
        src="/images/CircleLogo.png"
        alt="Picture of the author"
        width={50}
        height={60}
      />
    </div>
  );
};

export default Logo;
