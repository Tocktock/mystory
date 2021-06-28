const NavBar = () => {
  const PageList = [
    { name: "로그아웃", href: "signout" },
    { name: "로그인", href: "/signin" },
    { name: "글쓰기", href: "/write/post" },
    { name: "관리", href: "/setting" },
  ];

  return (
    <div className="flex justify-between w-full h-12 bg-green-100">
      This is Navigation Bar
      <ul className="flex">
        {PageList.map((v) => {
          return (
            <li className="mx-2" key={v.href}>
              {v.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
