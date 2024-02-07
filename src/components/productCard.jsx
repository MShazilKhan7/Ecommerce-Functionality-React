import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import '../App.css'
import { UseDispatch, useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Product({details}) {
    const dispatch = useDispatch();
    const addToCart  = (product)=>{
        // dispatch an  add action
        console.log(product);
        dispatch(add(product)) // there is the current product that is the payload or the data that is passing to the add function
    }
    return (
        <div className="product-card ">
            <div className="image-div">
                <img src={details.path}/>
            </div>
            <h5>{details.name}</h5>
            <div className="product-details d-flex justify-content-between p-1 align-items-center">
                <h5>{details.price}</h5>
                <button className='btn btn-primary' type="button" onClick={()=>addToCart(details)}>Add to cart</button>
            </div>
        </div>
    )

}

export default Product;