"use client";
import React, { FC, ReactNode } from "react";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { SessionProvider } from "@/providers/SessionProvider";
import { ToastContainer } from "react-toastify";

interface RootLayoutClientProps {
  children: ReactNode;
}

const RootLayoutClient: FC<RootLayoutClientProps> = ({ children }) => {
  return (
    <>
      <ReduxProvider>
        <SessionProvider>{children}</SessionProvider>
      </ReduxProvider>
      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
};

export default RootLayoutClient;
