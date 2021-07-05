import Link from "next/link";

interface Props {
  target: string;
  name: string;
}

const LinkTo: React.FC<Props> = ({ target, name }) => {
  return <Link href={target}>{name}</Link>;
};

export default LinkTo;
