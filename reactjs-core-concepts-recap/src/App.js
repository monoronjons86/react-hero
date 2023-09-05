import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name='Dhaka' special="vibag"></District>
      <District name="Bramonbaria" special="jodo akbar"></District>
      <District name="Sumilla" special="moyna and moti"></District>
    </div>
  );
}
const districtStyle={
  backgroundColor:'yellow',
  margin:'20px',
  borderRadius:'20px'

}

function District(props){
  return(
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Specialty:</p>
    </div>
  )
}

export default App;
