import React from 'react';
import './styles/footerStyle.css';
import instaicon from './icons/instaicon.png';
import linkedinicon from './icons/linkedinicon.png';
import xicon from './icons/xicon.png';
import { isMobile } from 'react-device-detect';
import { FormEvent } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const apiKey = process.env.API_KEY || 'AIzaSyDiLuc55UkgoOaEo0wYG5wt7JwDFGvQDQI';
  const spreadsheetId = process.env.spreadsheetId || '1MKc5eQP_M43ukqhKIjr6DFlB9jU9HzZlI7Q93Q3KctE';
  const range = 'Sheet1'; 

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW&key=${apiKey}`;


  async function handleChange(e) {
    e.preventDefault();

    const emailInput = e.target
    setEmail(emailInput.value)

  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    
    const data = {
      values: [[email]],
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

  }
    catch(error){
      toast.error("Subscription Failed. Please try again!");
    }
    finally{
      toast.success("Thank You for Subscribing!");
      setEmail('');
    }
  }


    

  let maxWid = "18vw";
  if (isMobile){
    maxWid = "60vw";
  }
  return (
    <footer className="footer">
      <ToastContainer />
      <div className="footersection" style={{marginLeft:"8vw"}}>
        <h3 className='footerh3'>International <br></br>Relations Cell</h3>
        <p style={{fontWeight:"300", maxWidth:maxWid, fontSize:"1rem"}}>
          The International Relations Cell (IRC) is a student body working along
          with the Office of International Relations (OIR). It works to promote
          the exchange of students, faculties, and ideas between IIT Hyderabad
          and its international partners and establishing the globalization of
          IIT Hyderabad.
        </p>
      </div>
      <div className="footersection" style={{marginLeft:"7vw"}}>
        <h3 className="footerh3">Quick <br></br>links</h3>
        <ul className='footerul'>
          <li className='footerli'><a href="/home" style={{marginBottom:"5vh"}}>Home</a></li>
          <li className='footerli'><a href="/team">Team</a></li>
          <li className='footerli'><a href="/jica">Programs</a></li>
          <li className='footerli'><a href="/intadm">Admissions</a></li>
          <li className='footerli'><a href="/gallery">Gallery</a></li>
        </ul>
      </div>
      <div className="footersection">
        <h3 className='footerh3'>Contact <br></br>Us</h3>
        <ul className='footerul'>
          <li className='footerli'><a href="mailto:dean.ir@iith.ac.in" style={{textDecorationLine: "underline"}}>dean.ir@iith.ac.in</a></li>
          <li className='footerli'><a href="mailto:office.ir@iith.ac.in" style={{textDecorationLine: "underline"}}>office.ir@iith.ac.in</a></li>
          <li className='footerli'>+91-040-2301-6007</li>
        </ul>
      </div>
      <div className="footersection">
        <h3 className='footerh3'>Subscribe</h3>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} className="footerinput" type="email" placeholder="Enter your Email" />
          <button type='submit' className="footerbutton" style={{marginLeft:"0.5vw"}}>Subscribe</button>
        </form>
        <div className="social-links">
          <a href="https://www.instagram.com/ir.cell.iith/"><img src={instaicon} style={{width:"23px", height:"23px"}}></img></a>
          <a href="https://www.linkedin.com/company/international-relations-cell-iit-hyderabad/"><img src={linkedinicon} style={{width:"23px", height:"23px"}}></img></a>
          <a href="https://x.com/ircell_iith"><img src={xicon} style={{width:"23px", height:"23px"}}></img></a>
        </div>
      </div>
      <div className="footerbottom">
        <p>© 2024-25 Indian Institute of Technology Hyderabad, Telangana, India. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
