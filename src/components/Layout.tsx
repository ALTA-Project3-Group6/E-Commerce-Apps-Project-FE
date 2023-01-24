import React, { FC } from "react";
import { NavBar } from "./NavBar";
import { Hearder } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen  flex flex-col overflow-auto ">
      <Hearder />
      <div className="h-full w-full overflow-auto ">{children}</div>
      <NavBar />
    </div>
  );
};

export const LayoutPlain: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen  flex flex-col overflow-auto ">
      <div className="h-full w-full overflow-auto ">{children}</div>
    </div>
  );
};

export const LayoutNavigation: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen  flex flex-col overflow-auto ">
      <div className="h-full w-full overflow-auto ">{children}</div>
      <NavBar />
    </div>
  );
};
