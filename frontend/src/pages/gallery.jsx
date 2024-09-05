import React from "react";
import NavBar from "../components/navbar";
import gallimg from "../components/images/gallery.png";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";

export default function Gallery() {
  return (
    <div>
      <div style={{position:"sticky", top:"0"}}>
                {isMobile && MobileNavbar()}
                {!isMobile && NavBar()}
                
      </div>
      <h1 style={{fontSize:"2rem", fontWeight:"600", marginLeft:"15vw"}}>Welcome to Gallery</h1>
      <br /><br />
      <div className="flex flex-col justify-center items-ceter align-middle" style={{width:"40vw", height:"auto", marginLeft:"auto", marginRight:"auto"}}>
      <img src={gallimg}></img>
      </div>
      <br /><br /><br />
      <Footer />
    </div>
  );
}