import React from "react";
import { FaShoppingCart } from "react-icons/fa";



function Header(){
    return (
        <>
            <div className="w-100 bg-light text-center p-3">
                Your Ecommerce <FaShoppingCart /> <span style={{fontSize: 10, borderRadius: 100}} className="bdg text-white rounded-circle bg-primary p-1"></span>

            </div>
        </>
    )
}

export default Header;