import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Checkout } from "./component/Checkout/Checkout";
import { RequiredAuth } from "./component/RequiredAuth";
import { Login } from "./pages/Auth/Login";
import { SignUp } from "./pages/index";
import {Home, Productlist , Cart , Wishlist , Singleproduct } from "./pages/index";

function App() {

  return (
    <div className="App">
      

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/" element={<Home/>} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/Singleproduct/:productId" element={<Singleproduct/>}/>
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={
          <RequiredAuth>
            <Cart />
         </RequiredAuth> 
        } />

        <Route path="/Wishlist" element={<RequiredAuth><Wishlist /></RequiredAuth>} />
        

    </Routes>
      
<ToastContainer 
position="bottom-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
// pauseOnFocusLoss
draggable
// pauseOnHover
theme="light"
/>   
      
    </div>
  );
}

export default App;
