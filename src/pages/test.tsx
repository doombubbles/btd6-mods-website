import React from "react";
import { Button } from "react-bootstrap";
import cx from "classnames";

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      <Button className={cx("luckiest-guy")}>A Button</Button>
    </div>
  );
};

export default Test;
