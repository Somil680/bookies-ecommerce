import "./homepage.css"
import React from "react";
import {Link} from "react-router-dom"
import { Footer, Navbar } from "../../component";
import {  audiobook12, banner1, doglapan, gautamAdani, iAmonir, sub_banner1, sub_banner2, zakir , life, banner2 , gardenUp ,thecompany ,multibagger ,book1 } from "../../Images";

function Home() {
  return (
    <div className="main-body">
      <Navbar />
    <div className="main">
      
      <div >
        <img src={banner1} alt=""  className="banner"/>
        </div>
        
<div className="explore-container">
          <h2>Explore our most famous Author book and Bestseller books </h2>
          
<div className="product-container-explore ">
        
            
        <div className="container-home">
               <Link to="/productlist">
          <img src={multibagger} alt="" className="books" />
          <h4 className="margin0">Multibegger Stock</h4>
          <p className="margin0">Prasenjit Paul</p>
          </Link>
         </div>
        

            <div className="container-home">
                 <Link to="/productlist">
          <img src={gardenUp} alt="" className="books" />
          <h4 className="margin0">Garden UP</h4>
                <p className="margin0">Dr Ekta Chaudhary</p>
                </Link>
        </div>
         <div className=" ex-btn">
                <Link to="/productlist">
          
              <button className="explore-button ">
                
                  Explore more
            </button>
                </Link>
         
        </div> 

            <div className="container-home">
               <Link to="/productlist">
          <img src={thecompany} alt="" className="books" />
           <h4 className="margin0">The Company we Keep</h4>
          <p className="margin0">Divya Khanna</p>
              </Link> 
        </div>
        
            <div className="container-home">
                  <Link to="/productlist">
          <img src={book1} alt="" className="books" />
           <h4 className="margin0">Build Don't Talk</h4>
          <p className="margin0">Raj Shamani</p>
</Link>
        </div>

    </div>
</div>
      
        <h1 className="topheading">Catch up on what we're reading</h1>
      <div className="sub">
        <img src={sub_banner1} alt=""  className="sub-banner" />
        <img src={sub_banner2} alt=""  className="sub-banner" />
      </div>

      <div>
        <img src={audiobook12} alt="" className="s-banner" />
      </div>

      <h1 className="topheading">BESTSELLER COLLECTION</h1>

      <div className="product-container-home ">
        
        <div className="container-home">
          <img src={doglapan} alt="" className="books" />
          <h4 className="margin0">Doglapan</h4>
          <p className="margin0">Ashneer Grower</p>
         </div>
        
        <div className="container-home">
          <img src={zakir} alt="" className="books" />
          <h4 className="margin0">Zikr</h4>
          <p className="margin0">Muzafar Ali</p>
        </div>

        <div className="container-home">
          <img src={gautamAdani} alt="" className="books" />
          <h4 className="margin0">Gautam Adani</h4>
          <p className="margin0">R.N. Bhaskar</p>
        </div>

        <div className="container-home">
          <img src={iAmonir} alt="" className="books" />
           <h4 className="margin0">I An Onir</h4>
          <p className="margin0">Irene Dhar Malik</p>

        </div>
        
        <div className="container-home">
          <img src={life} alt="" className="books" />
           <h4 className="margin0">Life Amazing Secrets</h4>
          <p className="margin0">Gaur Gopal Das</p>

        </div>

      </div>

      <div>
        <img src={banner2} alt="" className="s-banner" />
      </div>
      </div>
       
        
      <Footer/>
    </div>

  );
}
export  {Home};
