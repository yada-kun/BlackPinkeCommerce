import React from "react";
import HeaderNav from "./HeaderNav";

const Layout = (props) => {
  return (
    <div className="relative">
      <HeaderNav />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
