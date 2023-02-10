import "./Wishlist.css"
import { useWishlist } from "../../context"
import { Navbar } from "../../component"
import { WishlistVeiw } from "./WishlistView"
import { Footer } from "../../component/Footer/footer"

function Wishlist() {
    const { wishState } = useWishlist()
    const {wishlistItem} = wishState
 return <>
<Navbar /> 
  <div className="main-container">
   {wishlistItem.map((item) => <WishlistVeiw products={item} key={item._id } />)}
  </div>
<Footer/>
</>
}
export {Wishlist}