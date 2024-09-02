import LayoutAuth from "@/appPages/auth/components/layout/LayoutAuth";
import { FC, ReactNode } from "react";

interface LayouProps {
  children: ReactNode;
}
const layout: FC<LayouProps> = ({ children }) => {
  return <LayoutAuth>{children}</LayoutAuth>;
};

export default layout;
