import "./Filter.css"
import { useSort } from "../../context";


const Filter = () => {
const { state, dispatchSort } = useSort()
const { sortby, Categoryfilter, Discountfilter } =state

return <>
    <div className="fillter-component">
        <h2>Filters</h2>

<div>
    <p className="clear-btn" onClick={() => dispatchSort({ type: "CLEAR-FILTER" })}>Clear All</p>
</div>

<div className="sort-button">
<select name="Sort " id="price-sort" value={state.sortby} onChange={(e) => dispatchSort({ type: "Sortby", payload: e.target.value })} >
        <option id="option" checked value="/">Default</option>
        <option id="option"  value="Low-to-High">Low to High</option>
        <option id="option"  value="High-to-Low">High to Low</option>
    </select>
</div>

<div className="sort-button">
    <select name=" Category" id="price-sort" value={state.Categoryfilter} onChange={(e) => dispatchSort({ type: "Category", payload: e.target.value })} >
        <option id="option" checked value="/">Chooes Category</option>
        <option id="option"  value="Friction-Book">Friction</option>
        <option id="option"  value="Non-Friction-Book">Non-Friction</option>
        <option id="option"  value="Horror">Horror</option>
    </select>
</div>


<div className="sort-button">
    <select name=" Category" id="price-sort"value={state.Discountfilter} onChange={(e) => dispatchSort({ type: "Discount", payload: e.target.value })} >
        <option id="option" checked value="/">Discount</option>
        <option id="option"  value="10%">10% and Above</option>
        <option id="option"  value="20%">20% and Above</option>
        <option id="option"  value="30%">30% and Above</option>
        <option id="option"  value="40%">40% and Above</option>
        <option id="option"  value="50%">50% and Above</option>
    </select>
</div>

  
</div>
</>
    
}

 export {Filter};





















        {/* <div className="disc-input">
                 <input type="radio" name="discount" id="10" 
                 onChange={()=>dispatchSort({type : "Discount" , payload : "10%"})}/>
                 <label htmlFor="10">10% and Above</label>
        </div>
        <div className="disc-input">
                 <input type="radio" name="discount" id="20"
                 onChange={()=>dispatchSort({type : "Discount" , payload : "20%"})}/>
                 <label htmlFor="20">20% and Above</label>
        </div>
        <div className="disc-input">
                 <input type="radio" name="discount" id="30"
                 onChange={()=>dispatchSort({type : "Discount" , payload : "30%"})}/>
                 <label htmlFor="30">30% and Above</label>
        </div>
        <div className="disc-input">
                 <input type="radio" name="discount" id="40"
                 onChange={()=>dispatchSort({type : "Discount" , payload : "40%"})}/>
                 <label htmlFor="40">40% and Above</label>
        </div>
        <div className="disc-input">
                 <input type="radio" name="discount" id="50"
                 onChange={()=>dispatchSort({type : "Discount" , payload : "50%"})}/>
                 <label htmlFor="50">50% and Above</label>
        </div>
    </div> */}