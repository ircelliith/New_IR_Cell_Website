import Footer from "../components/footer";
import NavBar from "../components/homenavbar";
import MobileNavbar from "../components/mobileNavbar";
import React, { useState, useEffect } from "react";
//import FlagFun from "../components/Flag";

import "./styles/homeStyle.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import tempglobe from "../components/images/tempglobe.png";
import homecaro1 from "../components/images/homecaro1.png";
import homecaro2 from "../components/images/homecaro2.png";
import homecaro3 from "../components/images/homecaro3.png";
import jicahome from "../components/images/jicahome.png";
import partnerhome from "../components/images/partnerhome.png";
import intadmhome from "../components/images/intadmhome.png";
import visahome from "../components/images/visahome.png";
import tarun from "../components/images/tarun.png";
import azmath from "../components/images/azmath.png";
import pranitha from "../components/images/pranitha.png";
import Reegan from "../components/images/Reegan.png";
import homegall from "../components/images/homegall.png";

import callicon from "../components/icons/callicon.png";
import locicon from "../components/icons/locicon.png";
import emailicon from "../components/icons/emailicon.png";
import webicon from "../components/icons/webicon.png";
import aboutusgradient from "../components/images/aboutusgradient.png";

import { isMobile } from "react-device-detect";

import { ReactTyped } from "react-typed";

import FullscreenAlert from "../components/fullscreenHandler";

//import GoogleMapReact from 'google-map-react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    background,
  } from '@chakra-ui/react'

  import { Box } from "@chakra-ui/react";


function MainHome(){
    // const [flags, setFlags] = useState([]);
    // let i = 0;
    // let arr = ['in','us','jp','de','br','fr','cn','ru','gb','it','ca','kr','au','es','nl','mx','sa','se','tr','ch','id','no','pl','ar','at','be','dk','fi','gr','ie','il','my','pt','sg','th','za','hk','hu','cz','ro','ae','cl','ph','co','vn','bg','eg','ua','rs','hr','is','lt','nz','pe','pk','qa','sk','si','cr','do','ec','ee','gt','lv','mt','ni','uy','ve','bh','cy','kz','lu','mk','om','pa','pr','re','tn','bd','lb','lk','ge','bo','dz','gh','hn','jm','ke','kw','mu','ng','np','py','sv','tt','ug','am','bw','ci','lb','ma','md','me','na','sn','tz','ua','zw','al','ba','cr','cu','et','fj','jm','kh','la','mg','mk','mn','mu','mw','mz','ni','pe','rw','sz','tg','tt','ua','uy','ve','vn','ye','af','ao','az','bb','bj','bt','bw','bz','cd','cg','dj','dm','er','gm','gn','gw','kg','km','lr','ls','mg','ml','mr','mw','mz','na','ne','pg','sc','sl','so','sr','st','sz','td','tg','tl','tm','to','tv','tz','ug','uz','vc','vu','ws','zm','zw','af','ao','az','bb','bj','bt','bw','bz','cd','cg','dj','dm','er','gm','gn','gw','kg','km','lr','ls','mg','ml','mr','mw','mz','na','ne','pg','sc','sl','so','sr','st','sz','td','tg','tl','tm','to','tv','tz','ug','uz','vc','vu','ws','zm','zw','af','ao','az','bb','bj','bt','bw','bz','cd','cg','dj','dm','er','gm','gn','gw','kg','km','lr'];
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //     setFlags((prevFlags) => [...prevFlags, { imageUrl: '../components/flagicons/'+arr[i]+'.png', delay: Math.random() * 1000 }]);
    //     i++;
    //     if(i==252){
    //         i=0;
    //     }
    //     }, 500);

    //     return () => clearInterval(intervalId);
    // }, []);

    let abtscroller = isMobile ? "750" : "600";
    const handleScroll = () => {
        window.scrollTo({
            top: abtscroller,
            behavior: "smooth",
        });
    }
    let a=0;
    let c=0;
    let b = "3rem";

    if (isMobile) {
        alert("This website is not optimized for mobile devices. Please use a desktop or a laptop for the best experience");
        a = "2vw"
        b="2rem"
        c="4vw"
    }
    return (
        <div className="welcome-section" id="/welcome" style={{marginLeft:"10vw"}}>
            <div className="welcome-text">
                <h1 style={{fontSize:b, marginLeft:c}}>
                    <span style={{fontSize:"2.7rem", color:"#F73A48", fontFamily:"Outfit"}}>
                    <ReactTyped strings={["Welcome To", "स्वागत", "いらっしゃいませ", "Willkommen", "Bem-vindo"]} 
                        typeSpeed={100} 
                        backSpeed={80} 
                        backDelay={100} 
                        loop 
                        />
                        <br />
                    </span>
                    
                    <span className="highlight">International <br></br>Relations</span> <br />
                    IIT Hyderabad
                </h1>
                <div className="buttons" style={{marginLeft:c}}>
                    <a onClick={handleScroll} className="about-us">About Us</a>
                    <button className="top-vlogs" onClick={()=>toast("Coming Soon")}>Top vlogs</button>
                </div>
                
    
            </div>
            <div className="welcome-image">
                <img src={tempglobe} alt="Globe" style={{width:"616px", height:"auto"}} />
            </div>
        </div>
    
    );
}



function AboutHome() {
    const [carouselImages, setCarouselImages] = useState([
      homecaro1,
      homecaro2,
      homecaro3,
    ]);
    const [carouselImageState, setCarouselImageState] = useState(1);
  
    const carouselNextHandler = () => {
      const nextIndex = (carouselImageState % carouselImages.length) + 1;
      setTimeout(setCarouselImageState(nextIndex), 1000);
      
    }
  
    const currentImageIndex = carouselImageState - 1; 
    console.log(currentImageIndex);
    const currentImage = carouselImages[currentImageIndex];

    useEffect(() => {
        const intervalId = setInterval(() => {
          carouselNextHandler();
        }, 3000); // Execute every 4 seconds (adjust as needed)
    
        return () => clearInterval(intervalId);
      }, []);

    
    const statsData = [
        { number: '150+', label: 'Outgoing Students' },
        { number: '50+', label: 'Incoming Students' },
        { number: '60+', label: 'Seminars' },
        { number: '80+', label: 'Partners' },
      ];
    
    let maxW = "20vw";
    let imgW = "468px";

    if(isMobile){
        maxW = "60vw";
        imgW = "100vw";
    }

    return (
      <div>
      <div className="about-section" id="#abt">
        
        <div className="welcome-text" style={{padding:"30px"}}>
                <h1 style={{fontSize:"16px", color:"gray"}}>
                    <span style={{fontSize:"64px", color:"#FFFFFF", fontFamily:"Outfit"}}>
                    About Us
                        <br />
                    </span>
                    
                    <div style={{color:"white", maxWidth:maxW, paddingTop:"20px", fontFamily:"Outfit"}}>The International Relations Cell (IRC) is a student body working along with the Office of International Relations (OIR). It works to promote the exchange of students, faculties, and ideas between IIT Hyderabad and her international partners and establishing the globalization of IIT Hyderabad.</div>
                    <div style={{maxwidth:"20vw"}}><br></br>Achievements
                    We are working towards innovation. 
                    <br></br>We feed on ideas and turn them into reality at the Institute level. </div>
                    <br></br>
                </h1>
                <div className="buttons">
                    <a href="/team" className="about-us">Read More</a>
                    
                </div>
            </div>

        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
          <img src={currentImage} alt="homecarousel" style={{ width: "468px", height: "auto" }} />
        </div>
      </div>
      
       <div className="stats-container">
            {statsData.map((stat, index) => (
                <div className="stat-box" key={index}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>

      </div>
    );
  }

function JicaHome(){
    let maxW = "25vw";
    let imgW = "468px";
    

    if(isMobile){
        maxW = "60vw";
        imgW = "100vw";
        
    }
    return (
        <div>
        <div className="welcome-section" id="#abt">

        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
            <img src={jicahome} alt="homecarousel" style={{ width: "418px", height: "auto" }} />
          </div>
          
          <div className="welcome-text" style={{padding:"120px"}}>
                  <h1 style={{fontSize:"16px", color:"gray"}}>
                      <span style={{fontSize:"64px", color:"#F73A48", fontWeight:"500", fontFamily:"Outfit"}}>
                      JICA
                          <br />
                      </span>
                      
                      <div style={{color:"#1d1d1d", maxWidth:maxW, paddingTop:"20px"}}>
                      IITH has a very unique collaboration with Japanese universities and industries. The FRIENDSHIP (Future Researchers at Indian Institute of Technology Hyderabad to Enhance Network Development)
                      </div>
                      <br></br>
                  </h1>
                  <div className="buttons">
                      <a href="/jica" className="about-us" style={{backgroundColor:"#1d1d1d", color:"#ffffff"}}>Read More</a>
                      
                  </div>
              </div>
  
        </div>
        </div>
      );
    }

function PartnerHome(){
    let d = "25vw";
    if (isMobile){
        d = "45vw";
    }
    return(
    <div>
      <div className="partner-section" id="#abt" style={{padding:"80px"}}>
        <div className="partner-sectiona" style={{backgroundColor:"#1d1d1d", borderRadius:"14px"}}>
        <div className="welcome-text" style={{padding:"30px"}}>
                <h1 style={{fontSize:"16px", color:"gray"}}>
                    <span style={{fontSize:"64px", color:"#FFFFFF", fontFamily:"Outfit"}}>
                    Our Partners
                        <br />
                    </span>
                    
                    <div style={{color:"white", maxWidth:d, paddingTop:"20px"}}>
                    IIT Hyderabad currently has “30+” MOUs.
                    <br /> We always uphold our commitment to collaboration and innovation towards humanity, and our global effort is no less. We have partnered with some of the best institutions around the world to bring the best of the world to our students as well as to take the best of our students to the world.

                    </div>
                    <br />
                </h1>
                <div className="buttons">
                    <a href="/Partners" className="about-us" style={{backgroundColor:"White", color:"black", marginRight:"1vw"}}>Read More</a>
                    <a href="/visitors" className="about-us">See All MOUs </a>
                    
                </div>
            </div>

        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
          <img src={partnerhome} alt="homecarousel" style={{ width: "468px", height: "auto" }} />
        </div>
        </div>

      </div>
      
      </div>
    );
}

function AdmissionHome(){
    let d = "25vw";
    let e = "25vw";
    if (isMobile){
        d = "75vw";
        e="45vw";
    }

    return(
    <div>
      
      <div className="welcome-section" id="#abt" style={{padding:"80px", textAlign:"center"}}>
      <span style={{fontSize:"64px", color:"#F73A48", fontWeight:"500", marginTop:"2vh", marginRight:"10vw"}}>Admissions</span>
        <div className="partner-sectiona" style={{backgroundColor:"#ffffff", borderRadius:"14px", boxShadow:"0px 0px 4px 4px #f0f0f0"}}>
        <div className="welcome-text" style={{padding:"30px"}}>
                <div style={{fontSize:"16px", color:"gray"}}>
                    <span style={{fontSize:"42px", color:"#000000", fontFamily:"Outfit"}}>   
                    International Admission
                        <br />
                    </span>
                    
                    <div className="flex flex-col" style={{color:"#000000", maxWidth:d, paddingTop:"20px"}}>
                    
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#F73A48', color: 'white' }} style={{marginBottom:"3vh", border:"2px solid black", padding:"10px",  maxWidth:d}}>
                                <Box as='span' flex='1' textAlign='left'>
                                Doctoral Fellowship in India
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            The internationally renowned Institutions in technical education, the Indian Institutes of Technology (IITs) are inviting scholars from ASEAN countries to apply for PhD fellowships to strengthen the deep and historical relations between India and ASEAN. The institution thrives for its quality education and strict selection criteria. When selected, you will be able to complete your Ph.D. with funding from the Government of India. The funding includes a monthly stipend and an annual research grant for up to 5 years of their Ph.D. program.
                            <br /><br />Website: <a href="https://asean-iit.in/" style={{color:"blue"}}>https://asean-iit.in/</a>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#F73A48', color: 'white' }} style={{marginBottom:"3vh", border:"2px solid black", padding:"10px",maxWidth:d}}>
                                <Box as='span' flex='1' textAlign='left'>
                                Indian Council for Cultural Relations (ICCR)
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            India is well known as an education hub attracting international students from all over the world. India’s robust education system, in the backdrop of its rich diversity and vibrant culture & history, affords a broad range of options for students. And as a rapidly growing country with a leading technological edge, studying in India has much to offer, whether it is Engineering, Computers, Arts, Philosophy, Political Sciences or Classics etc. Indian Council for Cultural Relations administers various scholarship programs annually and awards about 3000+ scholarships under 21 different schemes to foreign students from about 180 countries.
                            In a step forward towards “Digital India” ICCR developed the “Admissions to Alumni (A2A) Portal) to streamline the enrolment process. 
                            <br /><br />Website: <a href="https://www.iccr.gov.in/" style={{color:"blue"}}>https://www.iccr.gov.in/</a>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton _expanded={{ bg: '#F73A48', color: 'white' }} style={{marginBottom:"3vh", border:"2px solid black", padding:"10px", maxWidth:d}}>
                                <Box as='span' flex='1' textAlign='left'>
                                Study in India (SII)
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            The Study in India programme seeks to endorse India as a prime education hub for international students by inviting them to pursue their higher education in the country. With an attractive set of salient features, the programme is the perfect platform for international students to experience the best of what Indian education has to offer. Therefore, it encourages international students to explore valuable educational opportunities enabled by the top Indian universities.

                            The added advantage of the Study in India Programme is quality assurance wherein it partners up with institutes/universities in India.
                            <br /><br />Website: <a href="https://www.iccr.gov.in/" style={{color:"blue"}}>https://studyinindia.gov.in/</a>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    </div>
                    <br />
                </div>
                <div className="buttons" style={{fontSize:"1.5rem", fontWeight:"bold"}}>
                    <a href="/intadm">View More</a>
                    
                </div>
            </div>

        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
          <img src={intadmhome} alt="homecarousel" style={{ width: "304px", height: "auto" }} />
        </div>
        </div>

        
        {/**2nd card */}
        <div className="partner-sectiona" style={{backgroundColor:"#ffffff", borderRadius:"14px", boxShadow:"0px 0px 4px 4px #f0f0f0", marginTop:"8vh"}}>
        
        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
          <img src={visahome} alt="homecarousel" style={{ width: "501px", height: "auto" }} />
        </div>

        <div className="welcome-text" style={{padding:"30px"}}>
                <h1 style={{fontSize:"16px", color:"gray"}}>
                    <span style={{fontSize:"42px", color:"#000000", fontFamily:"Outfit"}}>   
                    Visa & Immigration
                        <br />
                    </span>
                    
                    <div style={{color:"#000000", maxWidth:e, paddingTop:"20px"}}>
                    We understand how overwhelming and confusing it can get to relocate to a new country. We are here to help you with the visa and immigration process. We will guide you through the process and make sure you have a smooth transition to IIT Hyderabad.

                    </div>
                    <br />
                </h1>
                <div className="buttons">
                    <a href="/visa" className="about-us" style={{backgroundColor:"black", color:"white", marginRight:"1vw"}}>Read More</a>
                    
                    
                </div>
            </div>

        
        </div>

      </div>
      
      </div>
    );

}

function ContactsHome(){

    let leftMar = "0vw";
    let rightMar = "0vw";
    let lm = "19.1vw";
    let lmm = "41.2vw";
    let btm = "32.5vh";
    let lmmm = "5vw"
    let btmm = "8vh";
    let mobCardbg = isMobile?"transparent":"#ffffff"
    let mobBorder = isMobile?"":"0px 0px 2px 2px #f0f0f0";

    

      if(isMobile){
        leftMar = "0vw";
        //rightMar = "12vw";
        lm = "8vw";
        btm = "5vh";
        lmm = "14vw";
        
    }

    const styles = {
        container: {
          fontFamily: 'Outfit',
          padding: '20px',
          backgroundColor: '#1d1d1d',
          justifyContent: 'center',
          alignItems: 'center',
        },
        heading: {
          textAlign: 'left',
          fontSize: '40px',
          color:"#ffffff",
          fontWeight:"500",
          marginBottom:"20px"
          
        },
        contacts: {
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          backgroundColor: '#ffffff',
          alignItems:"center",
          boxShadow: "0px 0px 2px 2px #f0f0f0",
          padding:"10px",
          paddingTop:"20vh",
          borderRadius:"25px",
        },
        map: {
            display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems:"center",
          boxShadow: mobBorder,
          backgroundColor: mobCardbg,
          borderRadius:"25px",
          width:"50vw",
          height: "62vh",
          marginTop:"25vh"
        },

        email: {
            display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems:"center",
          boxShadow: mobBorder,
          backgroundColor: mobCardbg,
          borderRadius:"25px",
          width:"20vw",
          height: "18vh",
          marginTop:"25vh",
          paddingRight:"6vw"
        }
      };

      
      let mobFontclr = isMobile?"text-white":"";

    return (
        <div style={styles.container}>
           <div style={{padding:"80px"}}>
          <h1 style={styles.heading}>Contacts</h1>
          <img src={callicon} style={{position:"relative", width:"70.75px", height:"auto", alignSelf:"center", left:lmm, top:"3.1vh"}}></img>
          <div style={styles.contacts}>
           
            {/**Prof Tarun Card */}
            <div style={{marginBottom:"5vh", boxShadow: "0px 0px 2px 2px #f0f0f0",  borderRadius:"15px" , padding:"10px", marginLeft:"10px" }}>
                <div className="welcome-section" id="#abt" style={{borderRadius:"15px"}}>
                <div className="welcome-image" style={{display:"flex"}}>
                    <img src={tarun} alt="tarun" style={{ width: "100px", height: "auto", borderRadius:"100px" }} />
                </div>
                <div className="welcome-text" style={{padding:"0px", marginLeft:"5vw"}}>
                        <h1 style={{fontSize:"16px", color:"gray"}}>
                                                   
                            <div style={{color:"#1d1d1d", maxWidth:"20vw", paddingTop:"20px"}}>
                            <span style={{fontWeight:"bold"}}>Prof Tarun Kanti Panda</span><br></br>
                            Dean (International Relations) & Professor, Department of Chemistry
                            <br /><br />
                            <span style={{fontWeight:"bold"}}>Email:</span> <br></br>dean.ir@iith.ac.in <br></br>office.ir@iith.ac.in<br></br>
                            <span style={{fontWeight:"bold"}}>Phone:</span>+91-040-2301-6007
                            </div>
                            
                            <br></br>
                        </h1>
                    </div>
        
                </div>
            </div>
            {/**Prof Tarun Card */}

            {/**Prof Azmath Card */}
            <div style={{marginBottom:"5vh", boxShadow: "0px 0px 2px 2px #f0f0f0", padding:"10px", borderRadius:"15px", marginLeft:"10px"}}>
                <div className="welcome-section" id="#abt" style={{borderRadius:"15px"}}>
                <div className="welcome-image" style={{display:"flex"}}>
                    <img src={azmath} alt="tarun" style={{ width: "100px", height: "auto", borderRadius:"100px" }} />
                </div>
                <div className="welcome-text" style={{padding:"0px", marginLeft:"5vw"}}>
                        <h1 style={{fontSize:"16px", color:"gray"}}>
                                                   
                            <div style={{color:"#1d1d1d", maxWidth:"20vw", paddingTop:"20px"}}>
                            <span style={{fontWeight:"bold"}}>Mr Azmath Ali SK</span><br></br>
                            Manager, Inbound & Outbound Programs and International Admissions
                            <br /><br />
                            <span style={{fontWeight:"bold"}}>Email:</span> <br></br>inbound.ir@iith.ac.in <br></br>outbound.ir@iith.ac.in<br></br>
                            <span style={{fontWeight:"bold"}}>Phone: </span> -
                            </div>
                            <br></br>
                        </h1>
                    </div>
        
                </div>
            </div>
            {/**Prof azmath Card */}

           
                {/**Prof Pranitha Card */}
            <div style={{marginBottom:"5vh", boxShadow: "0px 0px 2px 2px #f0f0f0", padding:"10px", borderRadius:"15px", marginLeft:"10px", width:"100%"}}>
                <div className="welcome-section" id="#abt" style={{borderRadius:"15px"}}>
                <div className="welcome-image" style={{display:"flex"}}>
                    <img src={pranitha} alt="tarun" style={{ width: "100px", height: "auto", borderRadius:"100px" }} />
                </div>
                <div className="welcome-text" style={{padding:"0px", marginLeft:"5vw"}}>
                        <h1 style={{fontSize:"16px", color:"gray"}}>
                                                   
                            <div style={{color:"#1d1d1d", maxWidth:"20vw", paddingTop:"20px"}}>
                            <span style={{fontWeight:"bold"}}>Ms. A Pranitha</span><br></br>
                            Section Officer, Japan desk
                            <br /><br />
                            <span style={{fontWeight:"bold"}}>Email:</span> <br></br>japandesk.ir@iith.ac.in <br /><br /><br /><br />
                            <span style={{fontWeight:"bold"}}>Phone: </span> -
                            </div>
                            <br></br>
                        </h1>
                    </div>
        
                </div>
            </div>
            

            {/**Prof Reegan Card */}
            <div style={{marginBottom:"5vh", boxShadow: "0px 0px 2px 2px #f0f0f0", padding:"10px", borderRadius:"15px", marginLeft:"10px"}}>
                <div className="welcome-section" id="#abt" style={{borderRadius:"15px"}}>
                <div className="welcome-image" style={{display:"flex"}}>
                    <img src={Reegan} alt="tarun" style={{ width: "100px", height: "auto", borderRadius:"100px" }} />
                </div>
                <div className="welcome-text" style={{padding:"0px", marginLeft:"5vw"}}>
                        <h1 style={{fontSize:"16px", color:"gray"}}>
                                                   
                            <div style={{color:"#1d1d1d", maxWidth:"20vw", paddingTop:"20px"}}>
                            <span style={{fontWeight:"bold"}}>Mr Reegan</span><br></br>
                            Office Assistant
                            <br /><br />
                            <span style={{fontWeight:"bold"}}>Email:</span> <br></br>- <br></br>-<br></br>
                            <span style={{fontWeight:"bold"}}>Phone:</span> -
                            </div>
                            <br></br>
                        </h1>
                    </div>
        
                </div>
            </div>
            {/**Prof Tarun Card */}
          </div>

        <div style={{display:"flex", flexWrap:"wrap"}}>
            {/**Maps Section */}
            
          <div style={styles.map} className="bg-transparent">
          {!isMobile?<img src={locicon} style={{position:"relative", width:"70.75px", height:"auto", alignSelf:"center", left:lm, bottom:btm, right:rightMar}}></img>:<></>}
          
            <iframe 
                title="IIT Hyderabad Map"
                     src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121701.4115544901!2d77.97060479726562!3d17.594702700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefdc136bffbb%3A0x73414ff6594c9191!2sIndian%20Institute%20of%20Technology%20Hyderabad!5e0!3m2!1sen!2sin!4v1721224241735!5m2!1sen!2sin"
                width="550vw" 
                height="300vw" 
                style={{borderRadius:"15px", marginLeft:leftMar, justifyContent:"center", alignItems:"center"}}
                allowFullScreen="" 
                loading="lazy">
            </iframe>
          </div>

          <div style={{marginLeft:"10vw", width:"auto"}}>
          <div style={styles.email} className={mobCardbg}>
          {!isMobile?<img src={emailicon} style={{position:"relative", width:"70.75px", height:"auto", alignSelf:"center", left:lmmm, bottom:btmm}}></img>:<></>}
            <span className={mobFontclr} style={{fontSize:"1.5rem", paddingLeft:"0.5vw"}}>Email</span>
            <a href="mailto:ir.cell@campus.iith.ac.in" className={mobFontclr} style={{paddingLeft:"6vw", fontSize:"1.2rem"}}>ir.cell@campus.iith.ac.in</a>
          </div>
          <div style={styles.email} className={mobCardbg}>
          {!isMobile?<img src={webicon} style={{position:"relative", width:"70.75px", height:"auto", alignSelf:"center", left:lmmm, bottom:btmm}}></img>:<></>}
            <span className={mobFontclr} style={{fontSize:"1.5rem",paddingLeft:"0"}}>Website</span>
            <a href="https://ir.iith.ac.in/" className={mobFontclr} style={{paddingLeft:"6vw", fontSize:"1.2rem"}}>https://ir.iith.ac.in/</a>
          </div>
          </div>
        
          </div>
        
          </div>
        </div>
      );
}

function GalleryHome(){
    return (
    <div>
      <div className="welcome-section" id="#abt" style={{padding:"80px", textAlign:"center"}}>
        <a href="/gallery" onMouseOver={()=>toast.success("Click Now to View More!")}><img src={homegall} style={{width:"70vw", height:"auto"}} alt="gallery" loading="preload" /></a>
        
      </div>
      <ToastContainer autoClose={1000} />
    </div>
    );
}

export default function Home() {
    
    let overflow = isMobile?"overflow-x-hidden":"";
    return(
        <div className={overflow}>
            
            <div style={{position:"sticky", top:"0"}}>
                {isMobile && MobileNavbar()}
                {!isMobile && NavBar()}
                
            </div>
            {/**Adding Each segment as a component defined above */}
            <MainHome />
            <AboutHome />
            <JicaHome />
            <PartnerHome />
            <AdmissionHome />
            <ContactsHome />
            <GalleryHome />
            {/**End of the components */}
            
            <footer className="static">
                <Footer />
            </footer>
            
        </div>
    );
}