import React, { useReducer } from "react";
import { Form, history } from "../shared";

const loginReducer = (success = false, action) => {
  switch (action.type) {
    case "login": // handle login
      if (
        action.payload.username === "admin" &&
        action.payload.password === "abc123"
      ) {
        history.push(`${process.env.PUBLIC_URL}/home`);
        return true;
      } else {
        return false;
      }

    default:
      // default/initial reducers
      return success;
  }
};

export default () => {
  const [success, dispatch] = useReducer(loginReducer, false);
  const fields = [
    {
      name: "username",
      type: "text",
      placeholder: "enter username",
      labelText: "username"
    },
    {
      name: "password",
      type: "password",
      placeholder: "enter password",
      labelText: "password"
    }
  ];
  return (
    <div className="component-login">
      <div className="header">Packing Assistance</div>
      <Form fields={fields} dispatch={dispatch} />
    </div>
  );
};
