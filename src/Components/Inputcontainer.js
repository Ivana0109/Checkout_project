import React, { useState } from "react";
import styles from "./Inputcontainer.module.css";

function Inputcontainer({ setValue, placeholder, min, max, error, setError }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        required
        onChange={(e) => {
          setError(null);
          const value = e.target.value;
          if (value.length > max && !!max) {
            setError(`Number of characters must be lower than ${max}`);
          } else if (value.length < min && !!min) {
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
