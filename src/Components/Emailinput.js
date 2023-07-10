import React, { useState } from "react";
import Inputcontainer from "./Inputcontainer";

function Emailinput({ setValue, placeholder, error, setError }) {
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = (value) => {
    if (!isValidEmail(value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setValue(value);
  };
  return (
    <Inputcontainer
      setValue={handleChange}
      placeholder={placeholder}
      error={error}
      setError={setError}
    />
  );
}

export default Emailinput;
