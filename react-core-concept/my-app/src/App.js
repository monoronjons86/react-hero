import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Rubel','BappaRaz','kubar','salman','Riyaz','hero']
  const singers=[
    {Name:'Rana',Age:"22",job:'computer operator'},
    {Name:'Tonmoy',Age:"23",job:"Google"},
    {Name:'Roman',Age:"24",job:"Network engineer"}
  ]
  return (
    <div>
      {
        nayoks.map(nayok=><li>Name:{nayok}</li>)
      }
      {
        nayoks.map(nayok=><Person name={nayok}></Person>)
      }
      {
        singers.map(singer=><Person name={singer.Name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name="BappaRaz" nayika="Chekha"></Person> */}
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
