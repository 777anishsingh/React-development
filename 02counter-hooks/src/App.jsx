import './App.css'
import { useState } from 'react';

function App() {


  let [counter, setCounter] = useState(10) //useState HOOK USED
  // [/*This is a variable*/,/*This is a fn*/]

  return (
    <>
      <h1>Chai aur react {counter}</h1>
      <h2>counter value: {counter} </h2>

      {/* Add Value */}
      <button
        onClick={() => {
          if(counter>=20)
            setCounter(counter)
          else
            setCounter(counter+1)
        }
        }>Add Value {counter}</button>

      <br />

      {/* //remove value */}
      <button
        onClick={() => {
          if (counter <= 0) {
            setCounter(counter)
          } else
            setCounter(counter - 1)
        }
        }>Remove value {counter}</button>

    </>
  )
}

export default App
