import Link from "next/link";
import Logo from "./Logo";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "../../features/rootReducer";
import {showModal} from "../../features/modal/modalSlice";
import axios from "axios";

const NavBar = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.userState);
    const [pageListState, setPageListState] = useState<any>(null);
    useEffect(() => {
        setPageListState(
            [
                userState.isAuthenticated && {name: "글쓰기", href: "/write"},
                userState.isAuthenticated && {name: "관리", href: "/setting"},
            ].filter((v) => v)
        );
    }, [userState.isAuthenticated]);

    const test = async () => {
        await axios.get("http://localhost:8080/jwt-auth").then(v=>console.log(v))
    }

    return (
        <div className="absolute flex w-full h-12 mt-12 ">
            <div className="container mx-auto px-36 flex justify-between">
                <Logo/>
                <div className="flex items-center">
                    <ul className="flex">
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
                <div className="flex">
                        <button onClick={test} > this is test button</button>
                </div>

                <div className="flex">
                    {!userState.isAuthenticated && (
                        <button className="mx-4" onClick={() => dispatch(showModal())}>
                          <span className="text-lg font-bold text-gray-200 hover:text-gray-500">
                            로그인
                          </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
