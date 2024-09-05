import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import bgiith from "../components/images/bg_life_iith.png";
import charminar from "../components/images/6f049-hyderabad 1.png";
import { isMobile } from 'react-device-detect';
import MobileNavbar from '../components/mobileNavbar';
import life from "../components/downloadables/Group 244.pdf";

export default function LifeAtIITH() {
    return (
        <div className="h-full w-full">
            
            
            {/* Background Image */}
            <div className="relative">
                <img src={bgiith} alt="Life at IITH" className="w-full h-screen object-cover absolute" />
                
                <h1 className="text-white text-4xl md:text-6xl font-bold relative" style={{marginTop:"", color:"black", top:"5vh", left:"5vw"}}>Life at IITH</h1>
                
            </div>
            <div style={{position:"sticky", top:"0", marginTop:"100vh"}}>
                {isMobile && MobileNavbar()}
                {!isMobile && NavBar()}
                
            </div>

            {/* Hyderabad & Telangana Section */}
            <section className="py-8 px-4 my-16 md:px-16 lg:px-32" style={{marginTop:"0vh"}}>
                <h2 className="text-red-600 text-[64px] text-center font-semibold my-4">Hyderabad & Telangana</h2>
                <p className="text-gray-700 text-[16px] mb-4">
                    Telangana, the 29th state of India, was formed on 2nd June 2014, with Hyderabad as its capital.
                    Covering 1,14,840 sq. km and housing 3,52,69,757 people, it is the twelfth largest and most populous state.
                    Known for its distinctive culture, unique cuisine, and rich history, Telangana's language, 
                    Telugu, signifies the state's rich heritage, preserved by the Godavari and Krishna rivers.
                </p>
                <p className="text-gray-700 text-[16px]-lg">
                    As a tourist destination, it offers attractions like Charminar, Birla Mandir, and Warangal Fort.
                    The economy is driven by agriculture, with rice as the major crop, and a thriving IT and startup sector 
                    with 68 special economic zones. Telangana's foundation is built on literacy, social justice, and development.
                </p>
            </section>

            {/* Charminar Image */}
            <div className="py-8">
                <img src={charminar} alt="Charminar" className="w-full h-80 object-cover grayscale" />
            </div>

            <div className='flex flex-col justify-center items-center'>
                <a href={life} download style={{fontSize:"3rem", color:"#1d1d1d", backgroundColor:"#F73A48", fontWeight:"700", padding:"10px", borderRadius:"15px"}}>Download Life Brochure</a>
            </div>

            <br /><br /><br />
            <Footer />
        </div>
    );
}