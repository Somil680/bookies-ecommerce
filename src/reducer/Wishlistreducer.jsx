import React from 'react';

const GetLocalWishData = () => {
    let LocalWishData = localStorage.getItem("BookiesWish")
    if (LocalWishData === []) {
        return [];
    } else {
        return JSON.parse(LocalWishData)
    }
}

const initalWishlist = {
    //  wishlistItem : []
     wishlistItem : GetLocalWishData()
}

function wishlistReducer(wishState, wishAction) {

    switch (wishAction.type) {
        case "Add-to-Wishlist":
            return {
                ...wishState,
                 wishlistItem : [...wishState.wishlistItem , wishAction.payload ]
            }
        case "REMOVE-FROM-WISHLIST":
            return {
                ...wishState,
                wishlistItem : wishState.wishlistItem.filter(item => item._id !== wishAction.payload)
            }
        default:
            return wishState;
    }
}
export {wishlistReducer ,initalWishlist}