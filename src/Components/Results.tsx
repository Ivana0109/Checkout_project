import React from "react";
import { InputData } from "./types";

type Props = {
  data: InputData;
};

function Results({ data }: Props) {
  return (
    <div>
      {" "}
      Sažetak
      {(Object.keys(data) as Array<keyof typeof data>).map((item) => {
        return (
          <div>
            {item}: {data?.[item]}
          </div>
        );
      })}
    </div>
  );
}

export default Results;
