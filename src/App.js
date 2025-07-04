
import './App.css';
import Counter from './counter';
import React,{ useState } from 'react'
//Two way binding-changes in UI(like from inputs),updates the components state
function App() {
  const[darkMode,setDarkMode]=useState(false);
  const[show,setShow]=useState(false); 
  const[name,setName]=useState("");
   const toggleText = () => {
    setShow(!show);
  };
  return (
    <div className={show ? "show":"hide"}>
   <div className={darkMode ? "container dark":"container"}>
    <h1>Click Counter App</h1>
    <Counter/>
    <input type="text" 
    placeholder="Enter your name" 
    value={name} 
    onChange={(e)=>setName(e.target.value)}
    ></input>
    <p>Hello,{name}</p>
    <button className="btn" onClick={()=>setDarkMode(!darkMode)}>
      {darkMode ? "Switch to LightMode" :"Switch to darkmode"}
    </button>
    <button onClick={toggleText}>
        {show ? 'Hide' : 'show'}
      </button>
       {show&&<p style={{ marginTop: '20px', fontSize: '18px' }}>
          👋 Hello! This is the text you can show or hide.
        </p>}

    </div>
   </div>
  );
}

export default App;
