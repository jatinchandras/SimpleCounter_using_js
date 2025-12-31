import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'

import pic1 from './assets/1.png'
import pic2 from './assets/2.png'
import pic3 from './assets/3.jpeg'
import Counter from './components/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Counter/>
    </div>
  )
}

export default App

