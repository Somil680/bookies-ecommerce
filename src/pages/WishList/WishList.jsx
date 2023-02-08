import "./Wishlist.css"
import { useWishlist } from "../../context"
import { Navbar } from "../../component"
import { WishlistVeiw } from "./WishlistView"
import { Footer } from "../../component/Footer/footer"
import { background } from "../../Images";


function Wishlist() {
    const { wishState } = useWishlist()
    const {wishlistItem} = wishState
    const backgroundstyle = {
      display : 'block',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height : '500px',
        width: '100%'
        
  }

  
 return <>
   <Navbar /> 
<div style={wishlistItem.length === 0 ? backgroundstyle : null} >

<div className="main-container">
  {wishlistItem.map((item) => <WishlistVeiw products={item} key={item._id } />)}
</div>
   
         
   </div>
  <Footer/>
  

</>
}
export {Wishlist}