import React from 'react';

const GetLocalStorageCartData = ()=> {
    let LocalCartData = localStorage.getItem("BookiesCart")
    if (LocalCartData === []) {
        console.log(LocalCartData)
        console.log(JSON.parse(LocalCartData))
        return [];
        
    } else {
        return JSON.parse(LocalCartData);
    }
}

const initalState = {
    Totalprice: 0,
    // cart: [],
    cart: GetLocalStorageCartData(),
    AfterDiscounted_Price : null,
    CARTQty : null
}



function Cartreducer(cartState, action) {
    switch (action.type) {
        case "Add-to-cart":
            return {
                ...cartState,
                cart: [...cartState.cart, action.payload],
            };
        case "INCREASE-QTY":
            return {
                ...cartState,
                cart: cartState.cart.map((items) =>
                    items._id === action.payload ? { ...items, Quantity: items.Quantity + 1 } : items,),
                
                
            };
        case "DESCREASE-QTY":
            return {
                ...cartState,
                cart: cartState.cart.map((items) =>
                    items._id === action.payload ?
                        items.Quantity > 1 ? { ...items, Quantity: items.Quantity - 1 } : { ...items, Quantity: 1 } : items
                ),
                
               
            };
        case "REMOVE-FROM-CART":
            return {
                ...cartState,
                cart: cartState.cart.filter(items => items._id !== action.payload),
                Totalprice: Number(cartState.Totalprice) - Number(action.price),
              
            };
        case "GET-ORIGINAL-PRICE":
            const updatePrice = ((acc, curr) => acc + curr.intprice * curr.Quantity)
            const initialprice = cartState.cart.reduce(updatePrice, 0)
            return {
                ...cartState, Totalprice: initialprice
            };
        case "GET-DISCOUNTED-PRICE":
            const After_discounted_price = ((acc, curr) => acc + curr.price * curr.Quantity)
            const Discounted_price = cartState.cart.reduce(After_discounted_price, 0)
            return {
                ...cartState ,  AfterDiscounted_Price : Discounted_price
            }
        case "GET-ALL-QTY-INCART":
            const Totalcardqty = ((acc , curr) =>  acc + curr.Quantity)
            const allQTY = cartState.cart.reduce(Totalcardqty, 0)
            return {
                ...cartState, CARTQty : allQTY
            }
            default:
                return cartState;    
    }   
    
}

      
export {Cartreducer , initalState }