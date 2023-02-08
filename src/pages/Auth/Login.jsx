import React from 'react';
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logo } from '../../Images';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../../component';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import axios from "axios";
function Login() {
  
const navigate = useNavigate()
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {auth:{token,isAuth},setAuth } = useAuth();

const loginHandler = async () => {
 const body = {
 email : email,
 password : password,
 }

 try {
     const response = await axios.post("/api/auth/login", body)
     console.log(response.data.foundUser.firstName)
     if(response.data.encodedToken){
    navigate("/")
         setAuth(auth => ({ ...auth, token: response.data.encodedToken, isAuth: true, userName: response.data.foundUser.firstName }))
         console.log("login")
    toast.success("Login successfully")
     }else {
    toast.warn("Invalid username && Password")
             console.log("unemail")
     }
 } catch (error) {
  toast.error("Error while logging")
         console.log("errpr while logging")
 }
}

return<>
<div className="body-container">
    <nav  className="d-flex">
        <div className="padding-20">
          <Link to="/"><img src={logo} alt="" className="logo" /></Link>
        </div>
    </nav>
</div>


<div className="LoginCompoenent">
<div className="Login-page">
            
<h3 className="margin-0 , margin">Welcome to BOOKIE`S </h3>
<h3 className="margin-0">LogIn account.</h3>

<div className="google-btn">
    <div className="google-icon-wrapper">
    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    </div>
    <p className="btn-text"><b>Continue with google</b></p>
</div>
 <hr />
                
<fieldset className="Fieldset">
    <p className="margin-0">Email Address</p>      
    <input className="input-field" type="email" placeholder="joewatler@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
/></fieldset>
            
<fieldset className="Fieldset">
    <p className="margin-0">Confirm Password</p>      
    <input className="input-field" type="text" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
/></fieldset>
            
<div className="login-button-box">
<button
     className="login-submit-btn"type="submit"
    onClick={() => loginHandler()} >Login
                </button> 
                
<Link to="/">
    <button className="login-submit-btn" type="submit"
        onClick={() => {
                  toast.success("Login successfully")
                  setAuth(auth => ({token:"",isAuth:true,userName:"Guest"}))}}>
        Login As Guest
    </button>
</Link>
</div>
<p>Don't have an account <Link to="/SignUp"> SignUp </Link> ?</p>

</div> 
</div>
<Footer/>
</>
}
export {Login}