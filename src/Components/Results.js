import React from "react";

function Results({ data }) {
  return (
    <div>
      {" "}
      Sažetak
      {Object.keys(data).map((item, itemIndex) => {
        return (
          <div>
            {item}: {data[item]}
          </div>
        );
      })}
    </div>
  );
}

export default Results;
