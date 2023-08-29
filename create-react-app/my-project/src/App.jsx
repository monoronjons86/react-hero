import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/NestedComponents/Person'
import Card from './Card/Card'


const App = ()=> {
  return (
    <div>
      <Person></Person>
      <Person></Person>
      <Card></Card>
    </div>

  )
}

export default App
