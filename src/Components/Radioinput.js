import React from "react";

function Radioinput({ setValue, data, value }) {
  return (
    <div>
      <div>
        {data.map((item, itemIndex) => (
          <>
            <input
              onChange={(e) => {
                setValue(e.target.value);
              }}
              key={itemIndex}
              type="radio"
              value={item}
              name={item}
              checked={value === item}
            />

            {item}
          </>
        ))}
      </div>
    </div>
  );
}

export default Radioinput;
