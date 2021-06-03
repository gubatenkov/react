import React, { useEffect } from "react";

const Alert = ({ type, msg, setAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ ...alert, showed: false });
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
