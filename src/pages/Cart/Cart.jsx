import React, { useEffect } from "react";
import "./Cart.css"
import { useCart } from "../../context";
import { Navbar , Footer, Price } from "../../component";
import { CartmanagementView } from "./CartmanagementVeiw";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Cart() {
  const { auth } = useAuth()
  const {cartState , dispatch} = useCart()
  const { cart } = cartState
  
useEffect(() => {
    dispatch({type : "GET-ORIGINAL-PRICE"})
    dispatch({ type: "GET-DISCOUNTED-PRICE" })
    dispatch({type : "GET-ALL-QTY-INCART"})
},[cart])
 
return <>
  <Navbar />
<div className="PAGE-CONTAINER">
  <div className="product-container " >
    {cart.map((item) => <CartmanagementView products={item}  key={item._id} />)}
  </div>
<div className="totalpage">
    <Price />
      {auth.isAuth ?
        <div className="check-out-btn">
      <Link className="text" to="/Checkout">
        <button className="checkout-btn">Place Order</button>
        </Link></div>
      : Navigate("/Login")}       
</div>
</div>
<Footer />
</>
}
export {Cart}