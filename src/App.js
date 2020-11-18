import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import "./styles.css";

export default function App() {
  const [val, setValue] = useState([20, 80]);
  const update = (e, item) => {
    setValue(item);
  };
  return (
    <div className="App">
      <div>
        <Slider
          className="slider"
          color="secondary"
          max={200}
          value={val}
          onChange={update}
        />
      </div>
      <span>
        {" "}
        Range {val[0]} to {val[1]}
      </span>
    </div>
  );
}
