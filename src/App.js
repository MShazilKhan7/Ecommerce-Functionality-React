import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Products from './components/products';

function App() {
  let productdets = {
    name: "New sewat shirt",
    path: "/images/1.jpg",
    price: "34$"
  }

  return (
    <>
    <Header/>
    <Products />
    </>
  );
}

export default App;
