import React, { FunctionComponent } from "react";
import { PageProps } from "gatsby";
import MyHelmet from "./my-helmet";
import "../css/bootstrap.scss";
import "../css/fonts.scss";
import BackgroundImage from "./background-image";
import { Scrollbars } from "react-custom-scrollbars";

const Layout: FunctionComponent<Omit<PageProps, "children">> = ({
  children,
}) => {
  return (
    <>
      <MyHelmet />
      <Scrollbars
        universal
        autoHeight
        autoHeightMax={10000}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        renderTrackVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              width: 10,
              top: 2,
              bottom: 2,
              borderRadius: 3,
              right: 2,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />
        )}
      >
        <div
          style={{
            height: "100vh",
          }}
        >
          <BackgroundImage />
          {children}
        </div>
      </Scrollbars>
    </>
  );
};

export default Layout;
