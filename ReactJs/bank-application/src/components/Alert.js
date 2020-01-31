import React from "react";
import "./Alert.css";

export default props => {
  return <div className="alert">{props.children}</div>;
};
