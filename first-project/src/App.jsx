import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Devices from './Component/Devices/Devices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Devices name="Uphone" price="13000"></Devices>
    <Devices name="Samsung" price="14000"></Devices>

    </>
  )
}

export default App
