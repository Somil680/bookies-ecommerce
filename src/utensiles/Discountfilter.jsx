const discountFilter = (products, Discountfilter) => {
    switch (Discountfilter) {
        case "10%":
            return [...products.filter(item => item.discount >= "10%")];
        case "20%":
            return [...products.filter(item => item.discount >= "20%")];
        case "30%":
            return [...products.filter(item => item.discount >= "30%")];
        case "40%":
            return [...products.filter(item => item.discount >= "40%")];
        case "50%":
            return [...products.filter(item => item.discount >= "50%")];
        default:
            return products
    }
    
}
export {discountFilter}