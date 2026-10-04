import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-yellow-300 text-green p-4 rounded-xl">Tailwind CSS</h1>
   <Card  name = "rahulshukla" btnText ="Click Me"/>
   <Card  name = "himanshushukla" btnText ="Visit Me"/>
      <Card  name = "Rahul" />
   <Card  name = "Love" btnText ="Nice Click Here"/>

    </>
  )}

  
export default App
