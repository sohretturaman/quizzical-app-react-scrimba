/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";

const Result = () => {
  const route = useRoutes();

  const { state } = route.props;
  console.log("state val", state);

  return <div>Result</div>;
};

export default Result;
