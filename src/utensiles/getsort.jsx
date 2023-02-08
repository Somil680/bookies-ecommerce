const getsortdata = (products, sortby) => {
    
    switch (sortby) {
        case "Low-to-High":
            return [...products.sort((a,b) => a.price - b.price)];
        case "High-to-Low":
            return [ ...products.sort((a, b) => b.price - a.price)];
        case "Default":
            return products;
        default:
            return products;
    }
    
}

export { getsortdata }