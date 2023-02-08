
const sortInitalstate = {
    sortby:"", 
    Categoryfilter:"",
    Discountfilter:""
};

const SortreducerFunc = (state, action) => {

    switch (action.type) {
        case "Sortby":
            return { ...state, sortby: action.payload };
        case "Category":
            return { ...state, Categoryfilter: action.payload }
        case "Discount":
            return{ ...state ,Discountfilter : action.payload }
        case "CLEAR-FILTER":
            return {
                ...state,
                 sortby: "", 
                 Categoryfilter: "",
                 Discountfilter: ""
            
            }
        default:
            return state;
    }
    
}

export {SortreducerFunc , sortInitalstate}