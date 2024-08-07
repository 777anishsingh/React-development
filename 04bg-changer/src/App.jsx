import { useState } from 'react'


function App() {
  const [color, setColor] = useState('#eeeeee')

  return (
    <>
    <div className='w-screen h-screen duration-700'style={{backgroundColor:color}}>

      <div className='fixed flex justify-center top-12 inset-x-0 px-2' >

        <div className='flex flex-wrap justify-center gap-5 shadow-xl bg-black px-10 py-6 rounded-full'>

          <button  
            onClick={()=>setColor("#f23041")} // on click ko fun chahiye but agr we directly give -- onClick={setColor("red")} -- asee then it get its return value that null isliye we take  value of setColor from a callback
            className='outline-none px-5 py-2 rounded-3xl ' style={{backgroundColor:'	#f23041'}}>RED</button>
          <button 
            onClick={()=>setColor("#ff7518")}
            className='outline-none px-3 py-2 rounded-3xl ' style={{backgroundColor:'#ff7518'}}>ORANGE</button>
          <button 
            onClick={()=>setColor("#faee70")}
            className='outline-none px-3 py-2 rounded-3xl ' style={{backgroundColor:'#faee70'}}>YELLOW</button>
          <button 
            onClick={()=>setColor("#aae9a9")}
            className='outline-none px-5 py-2 rounded-3xl ' style={{backgroundColor:'#aae9a9'}}>GREEN</button>
          <button 
            onClick={()=>setColor("#68b0e5")}
            className='outline-none px-5 py-2 rounded-3xl ' style={{backgroundColor:'#68b0e5'}}>BLUE</button>
          <button 
            onClick={()=>setColor("#2d3b95")}
            className='outline-none px-3 py-2 rounded-3xl ' style={{backgroundColor:'#2d3b95'}}>INDIGO</button>
          <button 
            onClick={()=>setColor("	#5c5d86")}
            className='outline-none px-3 py-2 rounded-3xl ' style={{backgroundColor:'	#5c5d86'}}>VOILET</button>

        </div>
      </div>
    </div>


    </>
  )
}

export default App
