import { useEffect } from "react";

export default formValues => {
  let success = false;
  useEffect(() => {
    console.log("auth login hooks triggered");
    if (formValues === { username: admin, password: abc123 }) {
      success = true;
    }
  }, [formValues]);

  return success;
};
