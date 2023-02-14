import "./Error404.css"
import { Error404page } from "../../Images"
import { Footer } from "../Footer/footer"
import { Navbar } from "../Navbar/Navbar"
import { Link } from "react-router-dom"

function Error404() {
    return (
        <>
            <Navbar/>
            <div className="errorcontainer">
                
                <img src={Error404page} className="error-image" />
                <h1>-PAGE NOT FOUND-</h1>
                <h3>Go back to <Link to="/">Home</Link> </h3>
            </div>
           
            <Footer/>
        </>
    )
}
export {Error404}