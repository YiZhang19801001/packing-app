import React from "react";
import Routes from "./routes";
import { history } from "./shared";

export default () => {
  return (
    <>
      <button
        onClick={() => {
          history.push(`${process.env.PUBLIC_URL}/home`);
        }}
      >
        go home
      </button>
      <button
        onClick={() => {
          history.push(`${process.env.PUBLIC_URL}/login`);
        }}
      >
        go login
      </button>
      <Routes />
    </>
  );
};
