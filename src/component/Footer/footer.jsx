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
<a className="social-link" href="https://github.com/Somil680"><SiGithub/></a>
<a className="social-link" href="https://www.linkedin.com/in/somil-agrawal-0b5092189/"><SiLinkedin/></a>
<a className="social-link" href="https://twitter.com/AgrawalSomil151"><SiTwitter/></a>
<a className="social-link" href="https://www.instagram.com/_somil_agrawal_/"><SiInstagram /></a>
            </div>
        </div>
</footer>
    
    </>

}
export {Footer}

// SiGithub SiLinkedin SiInstagram SiTwitter