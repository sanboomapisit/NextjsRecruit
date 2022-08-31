import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: JSX.Element
};

function Layout({ children }: Props) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-light flex-1 p-4 text-white border border-dashed overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;
