function storeReducer(storeState, storeAction) {
  console.log("storeReducer" , storeState.storeItem)
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