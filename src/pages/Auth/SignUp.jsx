import { useState } from "react";
import "./SignUp.css"
import {Footer} from "../../component/index"
import { logo, signup_background } from '../../Images';
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function SignUp() {

    const [firstName, setFirstname] = useState()
    const [lastName, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password , setPassword] = useState()
   const Navigate = useNavigate()

    
    
    const signupHandler = async () => {

const body = {
  email: email,
  password: password,
  firstName: firstName,
  lastName: lastName,
}
 
try {
 const response = await axios.post("/api/auth/signup", body)
 localStorage.setItem("token", response.data.encodedToken);
    setTimeout(() => {
       console.log( response.data)
  Navigate("/login")
    }, 1000);
     console.log( "sucess")
//  toast.success("Signup successfully!!")
} catch (error) {
    console.error(error)
     console.log( "error")
//   toast.error("Error while signup!!")
}
}


//     const signupHandler = async () => {
//     const body = {
//     firstName : firstName,
//      lastName : lastName,
//         email : email,
//      password : password,
//       }
      

// try {
//  const response = await axios.post("/api/auth/signup", body)
//  localStorage.setItem("token", response.data.encodedToken);
//         setTimeout(() => {
//      console.log( response.data)
//   Navigate("/Login")
//  }, 1000);
// //  toast.success("Signup successfully!!")
//       } catch (error) {
//          console.log({body})
//   console.error(error)
//   // toast.error("Error while signup!!")
// }



//   try {
//     //   const response = await axios.post('/api/auth/signup', body);
//       // const response = await axios.post("/api/auth/signup", body)
//         // localStorage.setItem("token", response.data.encodedToken);
//     const response = await axios.post("/api/auth/signup", body)
//  localStorage.setItem("token", response.data.encodedToken);
//       setTimeout(() => {
//           console.log( response.data)
//           Navigate("/Login")
//         }, 1000);
//     } catch (error) {
//       console.log({body})
//     console.log(error)
//   }
// };

    return <>
           <div className="sign-body-container"> 
          <nav  className="d-flex">
        <div className="padding-20">
          <Link to="/">
         <img src={logo} alt="" className="logo" />
          </Link>
                </div>
                </nav>
        </div>

        <div className="signup-main-containe">

            <div className="signupbackground">
                <img src={signup_background}  className="signupbackground" />
            </div>

            <div className="signup-container">

            <h3 className="margin-0 , margin">Join BOOKIE`S and start discovering your next favorite book today!</h3>
            <h3 className="margin-0">Create an account.</h3>

             
                
                
        <fieldset className="Fieldset">
            <p className="margin-0">First Name</p>      

        <input className="input-field" type="text" placeholder="Joe" onChange={(e) => {
            e.preventDefault()
            setFirstname(e.target.value)
        }} />
        </fieldset>
                                                  
  <fieldset className="Fieldset">
            <p className="margin-0">Last Name</p>      

        <input className="input-field" type="text" placeholder="Watler" onChange={(e) => {
            e.preventDefault()
            setLastname(e.target.value)
        }} />
                </fieldset>
                
                  <fieldset className="Fieldset">
            <p className="margin-0">Email Address</p>      


        <input className="input-field" type="email" placeholder="joewatler@gmail.com" onChange={(e) => {
            e.preventDefault()
            setEmail(e.target.value)
        }} />
            </fieldset>
  <fieldset className="Fieldset">
            <p className="margin-0">Confirm Password</p>      

        <input className="input-field" type="text" placeholder="Password" onChange={(e) => {
            e.preventDefault()
            setPassword(e.target.value)
            }} />
        </fieldset>
                <div className="checkbox">
                <input className="input-field-check" type="checkbox" id="checkbox-l" />
                <label htmlFor="checkbox-l" className="checkbox-l">Yes, I all agree to all the Term, Privacy Policy.</label>
                </div>
                <button className="input-field-btn" onClick={() => signupHandler()}>SignUp</button>
              
                


        </div>
        </div>
        <Footer/>
    </> 

}
export {SignUp}