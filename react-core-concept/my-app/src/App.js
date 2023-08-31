import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="BappaRaz" nayika="Chekha"></Person>
      <h1>Its my friend</h1>
      <Friend age="23"></Friend>

    </div>
  );
}
function Person(props){
  console.log(props)
  return (
    <div className="person" >
       <h1>{props.name}</h1>
       <h1>Nayika:{props.nayika}</h1>
       <p>Profession:Cricket</p>
    </div>
  ) 
}
function Friend(props){
  console.log(props)
  return(
    <div>
      <h1>{props.age}</h1>
      <p>Job:Maramari</p>
    </div>
  )
}
export default App;
