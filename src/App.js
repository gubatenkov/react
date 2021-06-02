import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#34eb5e").all(1));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (e) {
      setError(true);
      console.log("error");
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? "error" : null}
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => {
              setColor(e.target.value);
              setError(false);
            }}
            required
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...color}
              hexCode={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
