import "./footer.css";
import {  SiGithub, SiLinkedin ,SiInstagram, SiTwitter } from "react-icons/si";

function Footer() {
    
    return <>
    
<footer className="footer">
         <hr  className="hr"/>
        <div className="footer-line">
            <div >
                 <h4 style={{margin:"0px"}}>© Bookie's 2023. All rights reserved. Site – Managed by Somil Agrawal.</h4>
            </div>
            <div >
            <a className="social-link" href="/"><SiGithub/></a>
            <a className="social-link" href="/"><SiLinkedin/></a>
            <a className="social-link" href="/"><SiTwitter/></a>
            <a className="social-link" href="/"><SiInstagram /></a>
            </div>
        </div>
</footer>
    
    </>

}
export {Footer}

// SiGithub SiLinkedin SiInstagram SiTwitter