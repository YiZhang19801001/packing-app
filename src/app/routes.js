import React from "react";
import { Router, Route } from "react-router-dom";
import { history } from "./shared";
import { HomePage } from "./homePage";
import { Login } from "./auth";
export default () => {
  return (
    <Router history={history}>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
      <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route path={`${process.env.PUBLIC_URL}/home`} component={HomePage} />
    </Router>
  );
};
