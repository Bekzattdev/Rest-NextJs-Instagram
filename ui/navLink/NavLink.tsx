"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface IProps {
  className: string;
  href: string;
  name: string;
  active: {
    pathname: string;
    className: string;
  };
}

const NavLink: React.FC<IProps> = ({ className, href, name, active }) => {
  const pathname = usePathname();
  return (
    <Link
      className={clsx(className, {
        [active.className]: pathname === active.pathname,
      })}
      href={href}
    >
      {name}
    </Link>
  );
};
export default NavLink;
