import "./Navbar.css"
import React  from "react";
import { Link } from "react-router-dom"
import { BsCart3 , BsHeart} from "react-icons/bs";
import { useCart, useWishlist } from "../../context";
import { logo } from "../../Images";
import { useAuth } from "../../context/AuthContext";
function Navbar() {
  const { auth , setAuth } = useAuth()
  const { isAuth } = auth
  {isAuth ? console.log(isAuth) : console.log(isAuth)}
  console.log(auth.userName)
const { cartState } = useCart()
  const { cart } = cartState
  const { wishState } = useWishlist()
  const { wishlistItem } = wishState
  
  return (
<div className="body-container">
  <nav  className="d-flex">
      <div className="padding-20">
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
      {isAuth ? <h3 className="padding">Hi ,{auth.userName}</h3> :
          <h3 className="padding">Hi,</h3>}
    </div>
         
    <div>
      <Link to="/Login">
        {isAuth ?  <button className="nav-log-btn"  onClick={()=> setAuth(auth => ({token:"",isAuth:false,userName:""}))}>Logout</button> : <button className="nav-log-btn" >Login</button>}
      </Link>
    </div>
  
</div>
</nav>
</div>
);
}
export  {Navbar};