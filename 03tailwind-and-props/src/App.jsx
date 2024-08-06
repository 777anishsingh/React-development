import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-teal-800 text-blue-200 rounded-2xl p-4 mb-6'>tailwind test</h1>
      <Card nameOfPerson="Ankita Saini" btnText="Click to Know More"/>
      <Card nameOfPerson="Nipun Sharma" btnText="Know More"/>
    </>
  )
}

export default App
