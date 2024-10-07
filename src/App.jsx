import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [result,setResult] = useState([]);

  const handleSubmit =(e) =>{
    e.preventDefault()
    const newTask = {
      name:value
    }
    setResult((prev)=>[...prev ,newTask])
  }

  

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} >
        <div>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            className="w-[200px] h-[40px]"
          />
          <button type="submit">click me </button>
        </div>
        </form>
        <ul>
          {result.map((task)=>(
            <li key = {task.name}>
              {task.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
