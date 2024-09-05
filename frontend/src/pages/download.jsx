import React from 'react';
import { isMobile } from 'react-device-detect';
import MobileNavbar from '../components/mobileNavbar';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { downloadables } from '../components/downloadables/data';

export default function Download() {
  return (
    <div>
      {isMobile ? <MobileNavbar /> : <NavBar />}
      <br /><br /><br />
      <div className='text-center itens-center'>
        <span className='float-left' style={{fontSize:"3rem", color:"#F73A48", fontWeight:"700", marginLeft:"5vw"}}>Downloads</span> <br /><br /><br /><br />
      {downloadables.map((downloadables, index) => (
        <div key={index} style={{fontSize:"1.25rem", backgroundColor:"#1d1d1d", color:"#ffffff", padding:"1.5rem", marginBottom:"3vh", marginLeft:"auto", marginRight:"auto", maxWidth:"20vw", borderRadius:"18px"}}>
            <a href={downloadables.link} download>{downloadables.title}</a>
        </div>
      ))}
      </div>
      <Footer  />
    </div>
  );
}