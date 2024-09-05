import React from "react";
import first from "../components/international_admissions/first.png";
import second from "../components/international_admissions/second.png";
import third from "../components/international_admissions/third.png";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { toast, Toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function IntAdm() {
    function Clicker(){
        toast("Click to learn more")
    }
  return (
    <div>
        <ToastContainer />
      <div style={{position:"sticky", top:"0"}}>
                {isMobile && MobileNavbar()}
                {!isMobile && NavBar()}
                
      </div>
      <h1 style={{fontSize:"2rem", fontWeight:"600", marginLeft:"15vw"}}>International Admissions</h1>
      <br /><br />
      <div className="flex flex-col justify-center items-ceter align-middle" style={{width:"60vw", height:"auto", marginLeft:"auto", marginRight:"auto"}}>
      <a href="https://asean-iit.in/"><img loading="eager" preload src={first}></img></a>
      </div>
      <br /><br />
      <div className="flex flex-col justify-center items-ceter align-middle" style={{width:"60vw", height:"auto", marginLeft:"auto", marginRight:"auto"}}>
      <a href="https://a2ascholarships.iccr.gov.in/"><img loading="eager" preload src={second}></img></a>
      </div>
      <br /><br />
      <div className="flex flex-col justify-center items-ceter align-middle" style={{width:"60vw", height:"auto", marginLeft:"auto", marginRight:"auto"}}>
      <a href="https://studyinindia.gov.in/"><img loading="eager" preload src={third}></img></a>
      </div>
      <br /><br /><br />
      <Footer />
    </div>
  );
}