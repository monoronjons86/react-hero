import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="BappaRaz" nayika="Chekha"></Person>
      <h1>Its my friend</h1>
      <Friend></Friend>

    </div>
  );
}
function Person(props){
  console.log(props)
  return (
    <div className="person" >
       <h1>{props.name} {props.nayika}</h1>
       <p>Profession:Cricket</p>
    </div>
  ) 
}
function Friend(){
  return(
    <div>
      <h1>Ajoy devGan</h1>
      <p>Job:Maramari</p>
    </div>
  )
}
export default App;
