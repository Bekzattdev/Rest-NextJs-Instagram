import React, { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import NavLink from "../../../../../../ui/navLink/NavLink";
import LogoutButton from "./ui/LogOut";
import Image from "next/image";
import { useGetMeQuery } from "@/redux/api/auth";

const links = [
  {
    name: "Home",
    href: "/",
  },
];

const Header: FC = () => {
  const { data, isError } = useGetMeQuery();

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.start}>
            <div className={scss.logo}></div>
            <nav className={scss.nav}>
              <ul>
                {links.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      href={item.href}
                      className={scss.link}
                      name={item.name}
                      active={{
                        className: scss["activeLink"],
                        pathname: item.href,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={scss.end}>
            {data && !isError && (
              <>
                <LogoutButton />
                <Link href="/profile/my-posts" className={scss.end}>
                  <figure className={scss.avatar}>
                    <Image
                      src={data.profile.photo}
                      alt={data.profile.username}
                      width={43}
                      height={43}
                      quality={70}
                    />
                  </figure>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
