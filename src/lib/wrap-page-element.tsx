import React, { FunctionComponent, ReactElement } from "react";
import { PageProps } from "gatsby";
import Layout from "../components/layout";

export const wrapPageElement: FunctionComponent<{
  props: PageProps;
  element: ReactElement;
}> = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
