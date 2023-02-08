import React from 'react';


function storeReducer(storeState, storeAction) {

    switch (storeAction.type) {
        case "Fetch-products":
            return {...storeState,
                storeItem:[...storeState.storeItem , ...storeAction.payload]
            };
        
    
        default:
            return storeState
    }
    
}

export {storeReducer}