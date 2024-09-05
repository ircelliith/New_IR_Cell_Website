import homecaro1 from "../components/images/homecaro1.png";
import homecaro2 from "../components/images/homecaro2.png";
import homecaro3 from "../components/images/homecaro3.png";
import t1 from "../components/team/student/t1.jpg";
import t2 from "../components/team/student/t2.jpg";
import t3 from "../components/team/student/t3.jpg";
import t4 from "../components/team/student/t4.jpg";
import t5 from "../components/team/student/t5.jpg";
import t6 from "../components/team/student/t6.jpg";
import t7 from "../components/team/student/t7.jpg";
import t8 from "../components/team/student/t8.jpg";
import t9 from "../components/team/student/t9.jpg";


import "./styles/homeStyle.css";

import React from 'react';

import { useState, useEffect } from 'react';
import { isMobile } from "react-device-detect";
import jicahome from "../components/images/jicahome.png";
import MobileNavbar from "../components/mobileNavbar.jsx";
import NavBar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

import tarunkanti from "../components/images/tarunkanti.png";
import dean from "../components/images/dean.png";
import emailicon from "../components/images/emailicon.png";


import {depData, studentData} from "../components/team/data.js";

import { Button} from "@chakra-ui/react";


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
      <div className="welcome-section" id="#abt">
        
        <div className="welcome-text" style={{padding:"30px"}}>
                <h1 style={{fontSize:"16px", color:"gray"}}>
                    <span style={{fontSize:"64px", color:"#0D0D0D", fontFamily:"Outfit"}}>
                    About Us
                        <br />
                    </span>
                    
                    <div style={{color:"#0D0D0D", maxWidth:maxW, paddingTop:"20px", fontFamily:"Outfit"}}>The International Relations Cell (IRC) is a student body working along with the Office of International Relations (OIR). It works to promote the exchange of students, faculties, and ideas between IIT Hyderabad and her international partners and establishing the globalization of IIT Hyderabad.</div>
                    <div style={{maxwidth:"20vw"}}><br></br>Achievements
                    We are working towards innovation. 
                    <br></br>We feed on ideas and turn them into reality at the Institute level. </div>
                    <br></br>
                </h1>
               
            </div>

        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
          <img src={currentImage} alt="homecarousel" style={{ width: "468px", height: "auto" }} />
        </div>
      </div>
      
      
      </div>
    );
  }

// function JicaHome(){
//     let maxW = "25vw";
//     let imgW = "468px";

//     if(isMobile){
//         maxW = "60vw";
//         imgW = "100vw";
//     }
//     return (
//         <div>
//         <div className="about-section" style={{justifyContent:"center", textAlign:"center"}} id="#abt">
//         <div>
//             <span style={{fontSize:"2.75rem", color:"#F73A48", fontWeight:"500", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto"}}>
//                         Message From&nbsp;
                           
//             </span>
                        
                    

//             <div style={{fontSize:"4.5rem", color:"#FFFFFF", fontWeight:"500", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto"}}>
//                 Dean - International Relations
//                             <br />
//             </div>
//             <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
            
//           </div>
          
//         </div>
//         <span style={{width:"100vw"}}>&nbsp;</span>
//         <img src={tarunkanti} alt="homecarousel" style={{ width: "418px", height: "auto" }} />
          
//           <div className="welcome-text" style={{padding:"120px"}}>
//                   <h1 style={{fontSize:"16px", color:"gray"}}>
                      
//                       <div style={{color:"#ffffff", maxWidth:maxW, paddingTop:"20px"}}>
//                       Hyderabad, known as the “City of Pearls,” is rich in history, culture, food, and iconic architecture. International cooperation is key to success, and IIT Hyderabad is excited to welcome international students for studies, research internships, projects, study tours, and exchange programs.
// Though young, IIT Hyderabad has proven its excellence in science, engineering, research, and innovation. We aim to be a globally recognized educational institute and prioritize strong research and academic collaborations with international partners.
// Our Office of International Relations supports our vision of high-quality education without borders. We enhance student diversity and form global partnerships.
// This website helps international students apply for postgraduate programs, semester exchanges, study abroad opportunities, project and thesis work, internships, research exchanges, and joint programs.
//                       </div>
//                       <br></br>
//                   </h1>
//                   <div className="buttons">
//                       <a href="#abt" className="about-us" style={{backgroundColor:"#1d1d1d", color:"#ffffff"}}>Read More</a>
                      
//                   </div>
//               </div>
  
//         </div>
//         </div>
//       );
//     }

function Temp(){
    return(
        <div>
            <img
            src={dean}
            preload="true"
            style={{width:"100vw", height:"auto"}}
            >
            </img>
        </div>
    );
}

function Department(){
    return(
        <div>
            <div className="welcome-section">
                <div className="text-center py-5">
                    <span style={{fontSize:"2.25rem", color:"#ffffff", fontWeight:"500", padding:"0.75rem", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto", background:"gray", borderRadius:"10px"}}>
                                Department Wise&nbsp;        
                    </span>
                                    
                    <div style={{fontSize:"4.5rem", color:"#1D1D1D", fontWeight:"500", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto"}}>
                        Faculty Advisors
                                        <br />
                        </div>
                        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
                        
                    </div>
                </div>
                <br></br>

                <span style={{width:"100%"}}>&nbsp;</span>

                {depData.map((depData, index) => (
                <div style={{width:"auto",display:"flex",padding:"20px", boxShadow:"0 0 7px 0 #666666", borderRadius:"10px", margin:"1vw", width:"40vw"}} key={index}>
                    <div className="flex flex-wrap justify-center align-middle items-center">  
                        <div className="p-2">
                            <div style={{fontSize:"1.75rem", color:"#F73A48", backgroundColor:"#FFD6D6", padding:"0.5rem", borderRadius:"8px", maxWidth:"20vw"}}>{depData.dep}</div>
                            <div style={{fontSize:"2rem", fontWeight:"600"}}>{depData.name}</div>
                            <div style={{fontSize:"1.8rem", fontWeight:"400"}}>{depData.position}</div>
                            <a href={depData.email}><img src={emailicon} style={{width:"40px", height:"auto"}}></img></a>
                        </div> 
                    </div>
                    <span style={{width:"10vw"}}>&nbsp;</span>
                    <div className="flex flex-col justify-center">
                        <img src={depData.image} alt="image" loading="lazy" style={{width:"250px",height:"auto", float:"right", borderRadius:"10px"}}></img>
                    </div>
                </div>
                ))}

            </div>
        </div>
    );
}

function MobileDep(){
    return(
        <div>
            <div className="welcome-section">
                <div className="text-center py-5">
                    <span style={{fontSize:"2.25rem", color:"#ffffff", fontWeight:"500", padding:"0.75rem", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto", background:"gray", borderRadius:"10px"}}>
                                Department Wise&nbsp;        
                    </span>
                                    
                    <div style={{fontSize:"4.5rem", color:"#1D1D1D", fontWeight:"500", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto"}}>
                        Faculty Advisors
                                        <br />
                        </div>
                        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
                        
                    </div>
                </div>
                <br></br>

                <span style={{width:"100%"}}>&nbsp;</span>

                {depData.map((depData, index) => (
                <div style={{width:"auto",display:"flex",padding:"10px", boxShadow:"0 0 7px 0 #666666", borderRadius:"10px", width:"95vw", marginBottom:"3vh"}} key={index}>
                    <div className="flex flex-wrap justify-center align-middle items-center">  
                        <div className="p-2">
                            <div style={{fontSize:"1rem", color:"#F73A48", backgroundColor:"#FFD6D6", padding:"0.5rem", borderRadius:"8px", maxWidth:"40vw"}}>{depData.dep}</div>
                            <div style={{fontSize:"1rem", fontWeight:"600"}}>{depData.name}</div>
                            <div style={{fontSize:"1.1rem", fontWeight:"400"}}>{depData.position}</div>
                            <a href={depData.email}><img src={emailicon} style={{width:"40px", height:"auto"}}></img></a>
                        </div> 
                    </div>
                    
                    <img src={depData.image} alt="image" style={{width:"35%",height:"auto", float:"right", borderRadius:"10px"}}></img>
                    
                </div>
                ))}

            </div>
        </div>
    );
}

// function StudentTeam(){
//     const [team, setTeam] = useState('overall');
//     const [hover, setHover] = useState(false);

//     const handleOverall = () => {
//         setTeam('overall');
//     }
//     const handleOutbound = () => {
//         setTeam('outbound');
//     }
//     const handleInbound = () => {
//         setTeam('inbound');
//     }
//     const handleDesign = () => {
//         setTeam('design');
//     }
//     const handleMultimedia = () => {
//         setTeam('multimedia');
//     }
//     const handleWeb = () => {
//         setTeam('web');
//     }
//     const handleOperations = () => {
//         setTeam('operations');
//     }
//     const handlePR = () => {
//         setTeam('pr');
//     }

//     return(
//         <div>
//             <div className="about-section">
//             <div className="text-center py-5">
                   
                                    
//                     <div style={{fontSize:"4.5rem", color:"#ffffff", fontWeight:"500", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto"}}>
//                         Student Cell
//                                         <br />
//                         </div>
//                         <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
                        
//                     </div>
//             </div>
//             <span style={{width:"100%"}}>&nbsp;</span>
//             <div className="flex flex-wrap justify-center text-center">
//                 <div style={{maxWidth:"10vw", padding:"15px", height:"52vh", backgroundColor:"#ffffff", borderRadius:"15px"}}>
//                     <Button colorScheme="teal" style={{marginBottom:"2vh", color:"#000000", backgroundColor:"#ffffff", boxShadow:"0 0 7px black", width:"100%", borderRadius:"15px"}} onMouseOver={handleOverall}>Overall Heads</Button>
//                     <Button style={{marginBottom:"2vh", backgroundColor:"#ffffff", boxShadow:"0 0 7px black", width:"100%", borderRadius:"15px"}} onMouseOver={handleOutbound}>Outbound</Button>
//                     <Button style={{marginBottom:"2vh", backgroundColor:"#ffffff", boxShadow:"0 0 7px black", width:"100%", borderRadius:"15px"}} onMouseOver={handleInbound}>Inbound</Button>
//                     <Button style={{marginBottom:"2vh", backgroundColor:"#ffffff", boxShadow:"0 0 7px black", width:"100%", borderRadius:"15px"}} onMouseOver={handleDesign}>Design</Button>
//                     <Button style={{marginBottom:"2vh", backgroundColor:"#ffffff", boxShadow:"0 0 7px black", width:"100%", borderRadius:"15px"}} onMouseOver={handleMultimedia}>Multimedia</Button>
//                     <Button style={{marginBottom:"2vh", backgroundColor:"#ffffff", boxShadow:"0 0 7px black", width:"100%", borderRadius:"15px"}} onMouseOver={handleWeb}>Web</Button>
//                     <Button style={{marginBottom:"2vh", backgroundColor:"#ffffff", boxShadow:"0 0 7px black", width:"100%", borderRadius:"15px"}} onMouseOver={handleOperations}>Operations</Button>
//                     <Button style={{marginBottom:"2vh", backgroundColor:"#ffffff", boxShadow:"0 0 7px black", width:"100%", borderRadius:"15px"}} onMouseOver={handlePR}>PR</Button>
//                 </div>
                
//                 <div style={{backgroundColor:"#ffffff", marginLeft:"15vw", width:"45vw", height:"70vh", borderRadius:"10px"}}>
//                     kjvrevre
//                 </div>
//                 <br />
//             </div>
//             <br />
//             </div>
//         </div>
//     );
// }
const mobileteam = [t9,t8,t4, t5, t7, t2, t1,t3,t6];
function StudentTeam(){
    return(
        <div>
            <div className="about-section">
            <div className="text-center py-5">
                   
                                    
                    <div style={{fontSize:"4.5rem", color:"#ffffff", fontWeight:"500", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto"}}>
                        Student Cell
                                        <br />
                        </div>
                        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
                        
                    </div>
                </div>
                <span style={{width:"100%"}}></span>
                {mobileteam.map((image, index) => (
                    <img key={index} loading="preload" src={image} width={700} alt={`team-${index + 1}`} />
                    ))}
            </div>
        </div>
    );
}



function MobileStudentTeam(){
    return(
        <div>
            <div className="about-section">
            <div className="text-center py-5">
                   
                                    
                    <div style={{fontSize:"4.5rem", color:"#ffffff", fontWeight:"500", fontFamily:"Outfit", marginLeft:"auto", marginRight:"auto"}}>
                        Student Cell
                                        <br />
                        </div>
                        <div className="welcome-image" style={{padding:"50px", display:"flex"}}>
                        
                    </div>
                </div>

                {mobileteam.map((image, index) => (
                    <img key={index} loading="preload" src={image} alt={`team-${index + 1}`} />
                    ))}
            </div>
        </div>
    );
}



export default function Team() {
    return (
        <div>
            
            {isMobile?<MobileNavbar/> : <NavBar />}
            <AboutHome />
            <Temp />
            {isMobile?<MobileDep/> :<Department />}
            {isMobile?<MobileStudentTeam/> :<StudentTeam />}
            <br />
            <Footer />

        </div>
    );
}
