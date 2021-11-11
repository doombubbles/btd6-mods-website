import React, { FunctionComponent } from "react";
import { PageProps } from "gatsby";
import MyHelmet from "./my-helmet";
import "../css/bootstrap.scss";
import "../css/fonts.scss";
import BackgroundImage from "./background-image";
import { Scrollbars } from "react-custom-scrollbars";
import { use100vh } from "react-div-100vh";

const Layout: FunctionComponent<Omit<PageProps, "children">> = ({
  children,
}) => {
  const height = use100vh() ?? 1000;

  return (
    <>
      <MyHelmet />
      <Scrollbars
        universal
        autoHeight
        autoHeightMax={height}
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
            height: height,
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
