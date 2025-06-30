import React,{ useState } from 'react'
function Counter() {
    const[count,setCount]=useState(0);
   
  return (
    <div>
      <h2>Count:{count}</h2>
      <button classname="btn" onClick={()=>setCount(count+1)}>Increment</button>
      <button classname="btn"onClick={()=>setCount(count-1)}>Decrement</button>
      <button classname="reset"onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;
//usestate-hook
//add state-data that changes over time
//class-stateful,functional-stateless
//hooks-special functions that let us hook into react features
