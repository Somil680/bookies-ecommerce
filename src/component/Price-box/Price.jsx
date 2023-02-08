import React from 'react';
import "./Price.css"
import { useCart } from "../../context";


function Price() {
    const {cartState , } = useCart()
    const {  Totalprice, AfterDiscounted_Price , CARTQty } = cartState
    const SavingOnProduct = Totalprice - AfterDiscounted_Price;

    return <>

    {/* <div><h3>Total Quantity : {CARTQty}</h3></div> */}
      <h3 className="totalpage-h3" >Price Detail</h3><hr />
  <div className="s-flex height">
      <h3>Price ({CARTQty} items): </h3>
      <h3>Rs.{Totalprice} </h3>
          
  </div>
  <div className="s-flex  height">
      <h3>Discount: </h3>
          <h3 className="color">-Rs.{SavingOnProduct}</h3>
  </div>
  <div className="s-flex height ">
      <h3 > Delivery Charges:</h3>
      <h3 className="color">FREE</h3>
  </div>
  <div className="s-flex sep-part">
      <h3>Total Amount: </h3>
      <h3>Rs.{ AfterDiscounted_Price}</h3>
  </div>
  <div className="s-flex color inbold ">
          <p>You will be save ₹{SavingOnProduct } on this order</p>
  </div>
         

    </>
}
export {Price}