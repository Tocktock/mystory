import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
  const PageList = [
    { name: "블로그", href: "/post" },
    { name: "로그아웃", href: "signout" },
    { name: "로그인", href: "/signin" },
    { name: "글쓰기", href: "/write/post" },
    { name: "관리", href: "/setting" },
  ];

  return (
    <div className="absolute flex w-full h-12 mt-12 ">
      <div className="container mx-auto px-36 flex justify-between">
        <Logo></Logo>
        <ul className="flex items-center">
          {PageList.map((v) => {
            return (
              <Link href={v.href}>
                <a>
                  <li className="mx-4" key={v.href}>
                    <span className="text-lg font-bold text-blue-500 hover:text-blue-400">
                      {v.name}
                    </span>
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
