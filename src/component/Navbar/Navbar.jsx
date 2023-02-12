import "./Navbar.css"
import React  from "react";
import { Link } from "react-router-dom"
import { BsCart3 , BsHeart} from "react-icons/bs";
import {FaBars} from "react-icons/fa";
import { useCart, useWishlist } from "../../context";
import { logo } from "../../Images";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
  const { auth , setAuth } = useAuth()
  const { isAuth } = auth
  const { cartState } = useCart()
  const { cart } = cartState
  const { wishState } = useWishlist()
  const { wishlistItem } = wishState
  
  return (
<div className="body-container">
  <nav  className="d-flex">
      <div className="">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      </div>
<div className="d-flex padding">

        <Link to="/Cart " className="text">
        <div className="nav-cart-wish-icon">
              <BsCart3 className="icon padding"/>
              {cart.length === 0 ? <p></p> :  <p className="cart-num" >{cart.length} </p> }
          
        </div>
      </Link>
        
      <Link to="/Wishlist" className="text">
        <div className="nav-cart-wish-icon">
              <BsHeart className="icon padding"/>
              {wishlistItem.length === 0 ? <p></p> : <p className="cart-num" >{wishlistItem.length}</p>}   
        
        </div>
      </Link>
    <div>
      {isAuth ? <h3 className="padding hide">Hi ,{auth.userName}</h3> :
          <h3 className="padding hide">Hi,</h3>}
    </div>
         
    <div>
      <Link to="/Login">
        {isAuth ?  <button className="nav-log-btn hide"  onClick={()=> setAuth(auth => ({token:"",isAuth:false,userName:""}))}>Logout</button> : <button className="nav-log-btn" >Login</button>}
      </Link>
    </div>

    <div>
        <FaBars className="icon padding Barsshow"/>
    </div>      
          
  
</div>
</nav>
</div>
);
}
export  {Navbar};