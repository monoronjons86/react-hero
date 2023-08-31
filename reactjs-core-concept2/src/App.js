import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
    {Name:"laptop",price:75000},
    {Name:"mobile",price:15000},
    {Name:"watch",price:2000}
  ]
  return (
    <div className="App">
      {
        products.map(product=><Product name={product.Name} price={product.price}></Product>)
      }
     {/* <Product name="laptop"></Product>
     <Product name="laptop" price="45000"></Product> */}
    </div>
  );
}
function Product(props){
  return(
    <div className="product">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
