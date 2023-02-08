
import React from "react";
import "./Cart.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from "../../context";
import { MdDelete } from "react-icons/md";



function CartmanagementView({products }) {
     const { _id, image, title, author, price, categoryName, intprice, discount  , Quantity} = products
    const {cartState , dispatch } = useCart()
    const { cart } = cartState    
    
    const Remove_from_cart = () => {
        dispatch({ type: "REMOVE-FROM-CART", payload: _id, price: price })
        toast.success("Removed from Cart")
    }

     
return <>
<div key={_id} className="sub-container" >
        <img src={image}  className="cart-image" />
    <div className="desc-container">     
       <div className="item-desc">
    <h4 className="item-title">{title}</h4>
    <h5 className="item-author">{author}</h5>
    <p className="item-category">{categoryName}</p>
                
    <div className="item-price-div">
        <p className="item-price">Rs.{price}</p>
        <p className="item-intprice">Rs.{intprice}</p>
        <p className="item-discount">({discount})</p>
    </div>
    </div>
        <div className="inc-quantity">
             <div className="d-flex">       
        <button className="inc-btn" onClick={() =>dispatch({ type: "INCREASE-QTY", payload: _id ,price : price })}>+</button>
        <p className="qty">{Quantity}</p>
        <button className="inc-btn" onClick={() => dispatch({ type: "DESCREASE-QTY", payload: _id, price: price })}>-</button>
            </div>          
      <MdDelete size="1.5rem" onClick={()=>Remove_from_cart()} />
      
      </div>
    </div>
</div>
         
  
 









     </>
}
 export {CartmanagementView}