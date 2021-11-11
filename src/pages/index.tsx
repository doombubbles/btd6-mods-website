import React from "react";
import cx from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import { use100vh } from "react-div-100vh";

const Index = () => {
  const height = use100vh() ?? 1000;
  return (
    <div className={"w-100 d-flex flex-column"} style={{ minHeight: height }}>
      <h1 className={"text-center luckiest-guy mt-4"}>
        doombubbles' BTD6 Mods and More
      </h1>
      <StaticImage
        src={"../images/000-EngineerMonkey.png"}
        alt={"Engineer"}
        className={"m-auto"}
        height={400}
        loading={"eager"}
        placeholder={"none"}
      />
      <h1 className={cx("luckiest-guy", "text-center", "text-nowrap")}>
        Under Construction
      </h1>
    </div>
  );
};

export default Index;
