import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import '../App.css'

function Product(details) {
    return (
        <div className="product-card ">
            <div className="image-div">
                <img src={details.details.path}/>
            </div>
            <h5>{details.details.name}</h5>
            <div className="product-details d-flex justify-content-between p-1 align-items-center">
                <h5>{details.details.price}</h5>
                <a className="btn fs-6 d-flex align-align-items-center " href="#"><FaCartArrowDown /></a>
            </div>
        </div>
    )

}

export default Product;