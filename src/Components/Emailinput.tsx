import React, { useState } from "react";
import Inputcontainer from "./Inputcontainer";

type Props={
  setValue:(value:string)=>void,

  placeholder:string, error:string, setError:(value:string)=>void
}

function Emailinput({ setValue, placeholder, error, setError }:Props) {
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = (value : string ) => {
    if (!isValidEmail(value)) {
      setError("Email is invalid");
    } else {
      setError(null!);
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
