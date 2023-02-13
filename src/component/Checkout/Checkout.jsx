import React from 'react';
//  import { useCallback } from "react";
// import useRazorpay from "react-razorpay";
import { useCart } from '../../context';
import { Footer } from '../Footer/footer';
import { Navbar } from '../Navbar/Navbar';
import { Price } from '../Price-box/Price';
import { Link } from 'react-router-dom';
 import "./Checkout.css"
function Checkout() {
 const {cartState} = useCart()
    const { cart } = cartState
    console.log(cart)

//  const Razorpay = useRazorpay();

//   const handlePayment = useCallback(() => {
//     // const order =  createOrder(params);

//     const options: RazorpayOptions = {
//       key: "YOUR_KEY_ID",
//       amount: "3000",
//       currency: "INR",
//       name: "Acme Corp",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//     //   order_id: order.id,
//       handler: (res) => {
//         console.log(res);
//       },
//       prefill: {
//         name: "Piyush Garg",
//         email: "youremail@example.com",
//         contact: "9999999999",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzpay = new Razorpay(options);
//     rzpay.open();
//   }, [Razorpay]);
    
return <>
<Navbar/>
    <div className="Checkout-box">
        <div className="checkout-cart-data">
        <h3 className='totalpage-h3 '>Product Deatail</h3><hr />
{cart.map((item) => (
    <div key={item._id}>
        <div className='Checkout-T-Q'>
            <div className='d-flex'>   
            <img src={item.image} className="checkout-image" />
            <h3>{item.title}</h3>
            </div>
            <div>
            <h3>{item.Quantity}</h3>
            </div>
        </div>
    </div>))}</div>
        
<div className="Checkout-price-data">
        <Price />
        {/* <button className='checkout-btn' onClick={handlePayment}>Check Out</button> */}
        <Link className='checkout-btn'>Check Out</Link>
</div>     
    </div>
    
    <hr />
    <div className="Checkout-Address">
        <h3>Address</h3>
    </div>

    <Footer/>
</>
}
 export {Checkout}