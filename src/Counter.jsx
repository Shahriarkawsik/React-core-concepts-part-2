import { useState } from "react"

export default function Counter(){
   const [count , setCount]= useState(0);

   const handleStateAddition = () =>{
    const newCount = count + 1;
    setCount(newCount); 
   }
   const handleStateSubtraction = () =>{
    if(count >= 1){
      const newCount = count - 1;
      setCount(newCount);
    }
    return 0
   }

  return(
    <div style={
      {border:'2px solid green',
        borderRadius:'15px',
        padding:'15px'
      }
    }>
      <h1>counter: {count}</h1>
      <button onClick={handleStateAddition}>Add Count</button>
      <button onClick={handleStateSubtraction}>Reduce Count</button>
      
    </div>
  )
}