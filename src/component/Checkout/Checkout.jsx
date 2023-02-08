 import React from 'react';
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