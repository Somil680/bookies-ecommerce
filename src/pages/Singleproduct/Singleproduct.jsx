import "./singleproduct.css"
import React from 'react'
import { useParams } from 'react-router-dom';
import { Navbar , Footer } from '../../component';
import { useStore } from '../../context';
import { SingleproductView } from './singleProductVeiw';



function Singleproduct() {
    const { productId } = useParams()
    const { storeState } = useStore()
    const Store = storeState.storeItem
    
    console.log(productId)
   const products = [Store.find((element) => element._id === productId)];

  
    return <>
    <Navbar />
    <SingleproductView products={products} productId={productId} />
    <Footer/>
       
      
    </>
}
export {Singleproduct};
 