import { useState } from "react";
import "./Contador.css"

function Contador() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <div className="container-count">
      <h1 className="title">Experimente o contador</h1>
      <h1 className="title-2">Contador: {count}</h1>
      <button className="button" onClick={handleClick}>Add + 1</button>
      </div>
    </div>
  );
}

export default Contador;
