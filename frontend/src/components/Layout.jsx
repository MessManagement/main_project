import React, { Children } from "react";
import Foooter from "./Foooter";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Foooter />
    </>
  );
};

export default Layout;
