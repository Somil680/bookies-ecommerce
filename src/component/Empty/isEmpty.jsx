import "./isEmpty.css"
import { background } from "../../Images/index"
import { Navbar  } from "../Navbar/Navbar"
import { Footer } from "../Footer/footer"
const IsEmpty = () => {
    return <>
        <Navbar/>
        <div className="isEmpty-div">
            <img src={background} className="isEmpty-image" />
        </div>
        <Footer/>
    </>
}
export {IsEmpty}    