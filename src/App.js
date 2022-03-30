import "./styles.css";
import React from "react";

export default function App() {
  let [value, setValue] = React.useState(0);
  const onChange = (event) => {
    console.log(event.target.value);
    if (event) {
      setValue(event.target.value);
    }
  };
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input type="number" onChange={onChange} value={value} />
      </div>
    </>
  );
}
