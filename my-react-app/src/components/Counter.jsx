import { useState } from "react";

function Counter() {
  const [count, countstart] = useState(0);
  

  return (
    <div>
      <h1>{count}</h1>
      <button className="cursor-pointer" onClick={() => countstart(count + 1)}>Increase</button>
      <button className="cursor-pointer" onClick={() => countstart(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;