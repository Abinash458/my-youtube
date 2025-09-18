import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helpers";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const prime = useMemo(() => findPrime(number), [number]);

  console.log("Re- render");
  return (
    <div
      className={
        "m-4 w-64 h-64 p-2 border border-black " +
        (isDark && "bg-black text-white")
      }
    >
      <div>
        <button
          className="p-2 m-2 bg-green-400"
          onClick={() => setIsDark(!isDark)}
        >
          Toogle Theme
        </button>
      </div>
      <div>
        <input
          className="border border-black w-full px-2"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>nth Prime: {prime}</div>
    </div>
  );
};

export default Demo;
