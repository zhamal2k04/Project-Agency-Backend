import React from "react";
import MyFooter from "../Footer/MyFooter";
import MyNavbar from "../Navbar/MyNavbar";

const MyLayout = ({ children }) => {
  return (
    <div>
      <MyNavbar />
      <div style={{ padding: "2rem" }}></div>
      {children}
      <MyFooter />
    </div>
  );
};

export default MyLayout;
