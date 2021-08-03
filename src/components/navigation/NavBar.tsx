import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuthenticated } from "../../features/user/userSlice";
import { useCookies } from "react-cookie";

import { RootState } from "../../features/rootReducer";
const NavBar = (props) => {
  const userState = useSelector((state: RootState) => state.userState);
  const [pageListState, setPageListState] = useState<any>(null);

  useEffect(() => {
    setPageListState(
      [
        { name: "블로그", href: "/post" },
        userState.isAuthenticated && { name: "로그아웃", href: "signout" },
        { name: "로그인", href: "/signin" },
        userState.isAuthenticated && { name: "글쓰기", href: "/write/post" },
        userState.isAuthenticated && { name: "관리", href: "/setting" },
      ].filter((v) => v)
    );
  }, [userState.isAuthenticated]);

  return (
    <div className="absolute flex w-full h-12 mt-12 ">
      <div className="container mx-auto px-36 flex justify-between">
        <Logo></Logo>
        <ul className="flex items-center">
          {pageListState &&
            pageListState.map((v) => {
              return (
                <Link href={v.href} key={v.href}>
                  <a>
                    <li className="mx-4" key={v.href}>
                      <span className="text-lg font-bold text-gray-200 hover:text-gray-500">
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
