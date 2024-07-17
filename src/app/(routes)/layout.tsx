import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <div className="flex-1 flex flex-row">
        <Sidebar />
        <div className="flex-[7] bg-white p-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default RouteLayout;
