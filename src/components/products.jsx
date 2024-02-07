import React from "react";
import Product from './productCard';
import "../App.css"


let allProducts  = [
    {id:"0" , name: "Winter Hoodie", price: "$20", path: "/images/1.jpg"},
    {id:"1" , name: "Winter Sweat Shirt", price: "$24.3", path: "/images/2.jpg"},
    {id:"2" , name: "half Seleves T-Shirt", price: "$10.23", path: "/images/3.jpg"},
    {id:"3" , name: "Black Sweat Shirt", price: "$26.23", path: "/images/5.jpg"},
]
function Products(){
    return(
        <>
            <div className="Products d-flex gap-2 p-2 flex-wrap">
                {allProducts.map((product,index) => <Product key={index} details={product}/>)}
            </div>
        </>
    )
}

export default Products;