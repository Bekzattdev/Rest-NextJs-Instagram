import { FC, ReactNode } from "react";

interface LayoutAuthProps {
  children: ReactNode;
}

const LayoutAuth: FC<LayoutAuthProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
export default LayoutAuth;
