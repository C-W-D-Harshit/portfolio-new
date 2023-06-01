import React from "react";
import Main_Card from "./Main_Card";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Main_Card />
      {children}
      <Sidebar />
    </div>
  );
};

export default Layout;
