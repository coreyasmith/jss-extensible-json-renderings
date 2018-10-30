import React from "react";
import { Placeholder } from "@sitecore-jss/sitecore-jss-react";

const Container = ({ rendering }) => (
  <div className="container border border-primary">
    <div className="p-1">
      <Placeholder rendering={rendering} name="jss-container" />
    </div>
  </div>
);

export default Container;
