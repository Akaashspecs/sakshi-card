import { useState } from 'react'

import './App.css'
import LandingFirst from './LandingFirst'




function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='text-3xl text-red-500  h-screen'>

 <LandingFirst/>
 <div className='h-screen'></div>
   </div>
  )
}

export default App
