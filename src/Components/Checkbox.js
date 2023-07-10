import React from "react";

function Checkbox({ checked, handleChange }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleChange(!checked)}
        />
        Prihvaćam uvjete narudžbe
      </label>
    </div>
  );
}

export default Checkbox;
