import React from "react";
type Props= {
  checked:boolean,
  handleChange:(value:boolean)=>void
}
function Checkbox({ checked, handleChange }:Props) {
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
