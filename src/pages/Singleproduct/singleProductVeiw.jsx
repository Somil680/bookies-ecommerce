import React from "react";
import "./singleproduct.css"
import { useCart , useWishlist } from "../../context";
import { findInArray } from "../../utensiles/find";
import {   useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
function SingleproductView({ products , productId }) {
const { auth } = useAuth()
const {isAuth} = auth
const { cartState , dispatch } = useCart()
const { wishState, wishDispatch } = useWishlist()
const Navigate = useNavigate()
const isInCart = findInArray(productId, cartState.cart)
    const cartHandler = (id, products) => {
        if (isAuth) {
            if (isInCart) {
                Navigate("/Cart")
            } else {
                dispatch({
                    type: "Add-to-cart",
                    payload: products
                })
                toast.success('Added To Cart!');
            }
        } else {
            toast.warn("Please Login yourself")
        }
    }

const isInWishlist = findInArray(productId, wishState.wishlistItem);
    const wishHandler = (id, products) => {
        if (isAuth) { 
        if (isInWishlist) {
            Navigate("/Wishlist")
        } else {
            wishDispatch({ type: "Add-to-Wishlist", payload: products })
            toast.success("Add to Wishlist")
       
        }
        } else {
            toast.warn("Please Login yourself")
    }
}

return <>
{products.map((products , productId) => (

<div key={products._id} className="Single-product" >
<img src={products.image} alt="" className="Single-image" />
       
<div className="Single-item">
    <h2 className="item-titlez">{products.title}</h2>
    <h4 className="item-author">{products.author}</h4>
    <p className="item-category">{products.categoryName}</p>
                
    <div className="item-price-div">
        <p className="item-price">Rs.{products.price}</p>
        <p className="item-intprice">Rs.{products.intprice}</p>
        <p className="item-discount">({products.discount})</p>
    </div>
    <div className="">
        <button className="singleitem-add" onClick={() => cartHandler(productId, products)}>{isInCart ? "Go To Cart" : "Add To Cart"}</button>     
        <button className="singleitem-add" onClick={() => wishHandler(productId, products)}>{isInWishlist ? "Go To Wishlist" : "Add To Wishlist"}</button>     
    </div>    
                

        </div>
</div>
))}
</>
}

export { SingleproductView}


