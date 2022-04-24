import React, { useState } from "react";
import "./index.css";
import B from "./components/b";
import C from "./components/c";

export default () => {
  const [data, setData] = useState([
    { key: 1, name: 11 },
    { key: 2, name: 22 },
    { key: 3, name: 33 },
    { key: 4, name: 44 },
    { key: 5, name: 55 },
  ]);
  return (
    <div>
      <div
        onClick={() => {
          setData([
            { key: 5, name: 115 },
            { key: 5, name: 225 },
            { key: 5, name: 335 },
            { key: 5, name: 445 },
            { key: 5, name: 555 },
          ]);
        }}
        className="button"
      >
        点击切换
      </div>
      {data.map((item) => (
        <div key={item.key}>
          <span>
            {item.key}-{item.name}
          </span>
        </div>
      ))}
      <B />
      <C />
      <div>1-{new Date().getTime()}</div>
    </div>
  );
};
