
const categoryFilter = (products, Categoryfilter) => {

    switch (Categoryfilter) {
        case "Friction-Book":
            return [...products.filter(item => item.categoryName === "Friction" )];
        case "Non-Friction-Book":
            return [...products.filter(item => item.categoryName === "Non-Friction" )];
        case "Horror":
            return [...products.filter(item => item.categoryName === "Horror" )];
          
        default:
           return products
    }
    
}
export {categoryFilter}