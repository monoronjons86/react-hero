import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  return (
    <div className="App">
      {/* <Country></Country> */}
      <Man></Man>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function Country(){
  const [count,setCount]=useState(55)
  //increase
  const increaseCount=()=>{
    const newCount=count+1
    setCount(newCount)
  }
      //decrease
const deCount=()=>setCount(count -1)
  return(
    <div>
      <h1>Count:{count}</h1> 
      <button onClick={increaseCount}>Increase</button>
      <button onClick={deCount}>Decrease</button>
      </div>
  )
}

function ExternalUsers(){
  const[users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h2>External users</h2>
      {/* <p>{users.length}</p> */}
      {
        users.map(user=> <li>{user.name}</li>)
      }
    </div>
  )
}
// const products=[
//   {Name:"laptop",price:75000},
//   {Name:"mobile",price:15000},
//   {Name:"watch",price:2000}
// ]
// {
//   products.map(product=><Product name={product.Name} price={product.price}></Product>)
// }
// {/* <Product name="laptop"></Product>
// <Product name="laptop" price="45000"></Product> */}
// 
const Man=()=>{
   const [count,setCount] =useState(55)
   const increaseCount=()=>{
    const newCount=count+1
    setCount(newCount)
   }
  return(
    <div>
      <button onClick={increaseCount}>Increase</button>

    </div>
  )
}
export default App;
