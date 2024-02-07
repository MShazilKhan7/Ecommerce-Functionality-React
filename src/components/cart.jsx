import { useSelector, useDispatch } from "react-redux"
import { remove } from "../store/cartSlice"

export function Cart(){
    const products = useSelector(state => state.cart)
    console.log("returned from use selector....",products);
    console.log("i am running");
    const dispatch = useDispatch()
    const removeCartItem = (id)=>{
        console.log(id);
        dispatch(remove(id));
    }
    return (
        <>
            <h2>Your Items</h2>
            <div className="Products d-flex gap-2 p-2 flex-wrap">
            {products.map((product, index)=>{
                return ( 
                <div key={index} className="product-card ">
                    <div className="image-div">
                        <img src={product.path}/>
                    </div>
                    <h5>{product.name}</h5>
                    <div className="product-details d-flex justify-content-between p-1 align-items-center">
                        <h5>{product.price}</h5>
                    <button className='btn btn-danger' type="button" onClick={()=>removeCartItem(product.id)}>remove</button>

                    </div>
                </div>
                )
            })}
            </div>
           
        </>
    )
}