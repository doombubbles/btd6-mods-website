import React, { FunctionComponent } from "react";
import { PageProps } from "gatsby";
import MyHelmet from "./my-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/fonts.scss";

const Layout: FunctionComponent<Omit<PageProps, "children">> = ({
  children,
}) => {
  return (
    <>
      <MyHelmet />
      {children}
    </>
  );
};

export default Layout;
