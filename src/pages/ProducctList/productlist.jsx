import "./productlist.css"
import React from "react";
import { CartVeiw } from "./cardVeiw";
import { Navbar } from "../../component";
import { Footer } from "../../component";
import { Filter } from "../../component/Filtter/Filter"
import { useStore } from "../../context";
import { getsortdata } from "../../utensiles/getsort";
import { useSort } from "../../context";
import { categoryFilter } from "../../utensiles/Categoryfilter";
import { discountFilter } from "../../utensiles/Discountfilter";


function Productlist() {

  const { state } = useSort()
  const { storeState } = useStore()
  const defaultdata = [...storeState.storeItem]
  const sorteddata = getsortdata([...defaultdata], state.sortby)
  const categorydata = categoryFilter([...sorteddata], state.Categoryfilter)
  const discountdata = discountFilter([...categorydata], state.Discountfilter)

  


  return <div >
<Navbar />
    <div className="display-flex">
<div className="filter-bar">
  <Filter /></div>
  <div className="product-grid">{
    discountdata.map((item) => <CartVeiw products={item} key={item._id} />)
}</div></div>
<Footer />

</div>
}
export {Productlist }