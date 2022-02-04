
import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const [factor,changeFactor] = useState(1);


  const increment = ()=>{
    setCounter(counter + factor);

  }

  const decrement = ()=>{

    setCounter(counter - factor);
  }

  const setStyle = ()=>{
    const myobj = {color:"black"};
    if(counter > 100){
      myobj.color = "green";
    }
    else if (counter<-100){
      myobj.color = "red";
    }

    return myobj;
  }
 

  return (
    <div className="App">
      <h1 data-testid="header">My Counter</h1>

      <h2 data-testid="counter" style={setStyle()}>{counter}</h2>

      <button data-testid="increment-button" onClick={increment}>+</button>
      <input type="number" data-testid="factor" value = {factor} onChange={(event)=>{
        changeFactor( parseInt(event.target.value) );
        
      }} />
      <button data-testid="decrement-button" onClick={decrement}>-</button>


  
    </div>
  );
}

export default App;
