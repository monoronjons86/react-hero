import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/NestedComponents/Person'


const App = ()=> {
  return (
    <div>
      <Person></Person>
      <Person></Person>
    </div>

  )
}

export default App
