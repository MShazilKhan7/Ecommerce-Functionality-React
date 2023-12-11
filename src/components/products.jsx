import React from "react";
import Product from './productCard';
import "../App.css"


let allProducts  = [
    {name: "Winter Hoodie", price: "$20", path: "/images/1.jpg"},
    {name: "Winter Sweat Shirt", price: "$24.3", path: "/images/2.jpg"},
    {name: "half Seleves T-Shirt", price: "$10.23", path: "/images/3.jpg"},
    {name: "Black Sweat Shirt", price: "$26.23", path: "/images/5.jpg"},

]

function Products(){
    return(
        <>
            <div className="Products d-flex gap-2 p-2 flex-wrap">
                {allProducts.map((prod,index) => <Product key={index} details={prod}/>)}
            </div>
        </>
    )
}

export default Products;