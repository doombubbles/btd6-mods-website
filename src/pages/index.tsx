import React from "react";
import engineer from "../images/000-EngineerMonkey.png";
import cx from "classnames";

const Index = () => {
  return (
    <div className={"w-100 h-100 d-flex flex-column"}>
      <h1 className={"w-100 text-center luckiest-guy text-white mt-4"}>
        doombubbles' BTD6 Mods and More
      </h1>
      <div className={"w-25 h-auto m-auto"}>
        <img alt={"Engineer"} src={engineer} className={"w-100 h-auto"} />
        <h1
          className={cx(
            "luckiest-guy",
            "text-center",
            "text-white",
            "text-nowrap"
          )}
        >
          Under Construction
        </h1>
      </div>
    </div>
  );
};

export default Index;