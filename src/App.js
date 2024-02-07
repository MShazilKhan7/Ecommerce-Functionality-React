import logo from './logo.svg';
import './App.css';
import Products from './components/products';
import NavbarComp from './components/navbar';
import { Cart } from './components/cart';
import { BrowserRouter, Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/rootLayout';

function App() {
  let productdets = {
    name: "New sewat shirt",
    path: "/images/1.jpg",
    price: "34$"
  }
  const router = createBrowserRouter(createRoutesFromElements(

        <Route path='/' element={<RootLayout/>}>
          <Route index path="/" element={<Products/>} />
          <Route path="products" element={<Products/>} />
          <Route path='cart' element={<Cart/>} />
        </Route>
  ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
