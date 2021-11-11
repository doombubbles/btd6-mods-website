import React from "react";
import workshop from "../images/Workshop_No_UI.png";

const BackgroundImage = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: -1,
        backgroundImage: `url(${workshop})`,
        backgroundSize: "cover",
        filter: "blur(5px)",
        transform: "scale(1.1)",
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default BackgroundImage;
