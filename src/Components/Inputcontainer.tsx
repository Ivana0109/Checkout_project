import React, { useState } from "react";
import styles from "./Inputcontainer.module.css";

type Props = {
  setValue: (value: string) => void;
  placeholder: string;
  min?: number;
  max?: number;
  error: string;
  setError: (value: string) => void;
};
function Inputcontainer({
  setValue,
  placeholder,
  min,
  max,
  error,
  setError,
}: Props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        required
        onChange={(e) => {
          setError(null!);
          const value = e.target.value;
          if (!!max && value.length >max) {
            setError(`Number of characters must be lower than ${max}`);
          } else if (!!min && value.length <min) {
            setError(`Number of characters must be higher than ${min}`);
          } else {
            setValue(value);
          }
        }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default Inputcontainer;
