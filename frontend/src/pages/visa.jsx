import React from "react";
import "../App.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";

export default function Visa() {
  return (
    <div>
    <div style={{position:"sticky", top:"0"}}>
                {isMobile && MobileNavbar()}
                {!isMobile && NavBar()}
                
            </div>
    <div className="gap-6 flex flex-col p-5 overflow-x-hidden">
      <section className="defaultSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sectionHeading text-center">
                <h2 style={{fontSize:"5rem"}}>Visa & Immigration</h2>
                <hr />
              </div>
            </div>

            <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
              <div className="subSectionHeading">
                <hr />
              </div>
            </div>

            {/* ... (rest of the code for visa types, as provided in the previous response) */}

            <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
              <div className="textBox">
                <h4 style={{fontSize:"2rem"}}><b>Entry Visa</b></h4>
                <br />
                <ul>
                  <li>
                    X-1 - For persons of Indian origin and spouse and children of an Indian citizen / Person of
                    Indian origin / OCI card (other than those registered as OCI
                    cardholder)
                  </li>
                  <li>
                    X-2 - For those coming to join Auroville Foundation, Aurobindo Ashram, Missionaries of
                    Charity,Templates or similar approved organizations
                  </li>
                  <li>
                    X-Misc - For those categories for which X-Misc visa has been specified in various chapters
                    of
                    the Visa manual and for purposes which are not covered by any other visa category
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12" style={{ backgroundColor: "#f5f5f5" }}>
              <div className="textBox">
                <h4 style={{fontSize:"2rem"}}><b>e-Visa</b></h4>
                <br />
                <ul>
                  <li>e-BV - (e-Business Visa)</li>
                  <li>e-CV - (e-Conference Visa)</li>
                  <li>
                    e-Med V - (e-Medical Visa)
                  </li>
                  <li>
                    e-Med X V - (e-Medical Attendant Visa)
                  </li>
                  <li>
                    e-TV - (e-Tourist Visa)
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
              <div className="textBox">
                <h4 style={{fontSize:"2rem"}}><b>Visa-on-Arrival</b></h4>
                <br />
                <ul>
                  <li>VoA- Visa on arrival for Japanaese and South Korean nationals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="defaultSection">
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="subSectionHeading">
              <h3 style={{fontSize:"2rem", fontWeight:"bold"}}>Visa Provision/Policies</h3>
              <hr />
            </div>
            <a href="https://indianvisaonline.gov.in/" style={{color:"blue"}}> Click Here for More Details </a>

            <div className="visaTable">
              <table>
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Type of visa</th>
                    <th>Period for which granted</th>
                    <th>Entry</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Business Visa</td>
                    <td>5 years</td>
                    <td>Multiple</td>
                    
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Employment
                    Visa</td>
                    <td>1 year/ period of
                    contract</td>
                    <td>Multiple</td>
                   
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Student
                    Visa/Research
                    Visa</td>
                    <td>Period of course/ 5
                    years</td>
                    <td>Multiple</td>
                   
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Intern</td>
                    <td>Duration of the
                    Internship or One
                    year, whichever is less</td>
                    <td>Single/ Double/ Multiple</td>
                  </tr>
                  {/* Add more rows as needed for other visa types */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionColor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="sectionHeading">
                <h2></h2>
                <hr />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="textBox">
                <h4 style={{fontSize:"2rem"}}><b>Visa Extension</b></h4>
                <br />
                <ul>
                  <li>
                    For certain visa types, it is possible to extend your visa while still residing in India.
                    Extension
                    of such visas can be done online through the e-Foreigners Regional Registration Office
                    (e-FRRO)
                    portal
                    
                  </li>
                  <a href="https://indianfrro.gov.in/eservices/home.jsp" style={{color:"blue"}}>Click Here to Visit FRRO</a>
                  {/* ... (rest of the information about visa extension) */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
}