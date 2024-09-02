import { FC, ReactNode } from "react";
import LayoutSite from "@/appPages/site/components/layout/LayoutSite";
interface LayoutType {
  children: ReactNode;
}
const Layout: FC<LayoutType> = ({ children }) => {
  return <LayoutSite>{children}</LayoutSite>;
};
export default Layout;
