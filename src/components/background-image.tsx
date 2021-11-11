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
        backgroundImage: `url(${workshop}`,
        backgroundSize: "cover",
        filter: "blur(5px)",
        display: "block",
        margin: "-10px -10px -10px -10px",
        height: "calc(100% + 20px)",
        width: "calc(100% + 20px)",
      }}
    />
  );
};

export default BackgroundImage;
