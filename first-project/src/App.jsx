import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Devices from './Component/Devices/Devices'

function App() {
 

  return (
    <>
    <Devices name="Uphone" price="13000"></Devices>
    <Devices name="Samsung" price="14000"></Devices>

      
    </>
  )
}
function Car(){
  return(
    <div>hello</div>
  )
}
export default App
