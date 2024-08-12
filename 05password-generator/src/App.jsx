import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberCheck, setNumberCheck] = useState(false)
  const [spChar, setSpChar] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook for copying the password on clipboard
  const passwordRef = useRef(null)

  const pwGenerator = useCallback(() => { // ----useCallback(function,[dependecies])----  callback hook used to make a password generator
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberCheck) str += "0123456789"
    if (spChar) str += "!@#$%^&*(){}|:<>`?~/.,;[]"

    for (let i = 1; i <= length; i++) { //password generator logic
      let charAtIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charAtIndex)
    }
    setPassword(pass)

  }, [length, numberCheck, spChar, setPassword])

const copyPassword = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password) //this is special object for windows it may vary
},[password])


  useEffect(() => {
    pwGenerator()
  }, [length, numberCheck, spChar, pwGenerator]) //agr is array ke elements me kuch vi chedchad ho to dubara fn run krdo



  // pwGenerator()
  return (
    <>
      {/* Password placeholder and copy butoom */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-14 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-2 mb-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text"
            value={password}
            ref={passwordRef}
            className='outline-none w-full px-3  py-1 '
            placeholder='Password'
            readOnly
          />
          <button onClick={copyPassword} className=' outline-none bg-blue-900 text-white  px-3 py-0.5 shrink-0'>COPY</button>
        </div>

        {/* Slider for length */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={5}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>

          {/* div Check Box for number */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberCheck}
              className='cursor-pointer'
              onChange={() => { setNumberCheck((prev) => !prev) }}
            />
            <label>Numbers</label>
          </div>

          {/* div Check Box for spl. characters */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={spChar}
              className='cursor-pointer'
              onChange={() => { setSpChar((prev) => !prev) }} // discussed this call back fn in the counter video
            />
            <label >Special Charaters</label>
          </div>




        </div>
      </div>
    </>
  )
}

export default App
