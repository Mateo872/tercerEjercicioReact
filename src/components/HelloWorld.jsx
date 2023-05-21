import { useState } from "react";

const HelloWorld = () => {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Hello my friend{text}!</h1>
      <button
        onClick={() => {
          setText(" (from changed state)");
        }}
      >
        Click me
      </button>
    </>
  );
};

export default HelloWorld;
