// import React from "react";
// import "../App.css";
// import NavBar from "../components/navbar";
// import Footer from "../components/footer";
// import { isMobile } from "react-device-detect";
// import MobileNavbar from "../components/mobileNavbar";

// export default function Visa() {
//   return (
//     <div>
//     <div style={{position:"sticky", top:"0"}}>
//                 {isMobile && MobileNavbar()}
//                 {!isMobile && NavBar()}
                
//             </div>
//     <div className="gap-6 flex flex-col p-5 overflow-x-hidden">
//       <section className="defaultSection">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="sectionHeading text-center">
//                 <h2 style={{fontSize:"5rem"}}>Visa & Immigration</h2>
//                 <hr />
//               </div>
//             </div>

//             <div className="col-lg-12" style={{ backgroundColor: "#f0f0f0" }}>
//               <div className="subSectionHeading">
//                 <hr />
//               </div>
//             </div>

//             {/* ... (rest of the code for visa types, as provided in the previous response) */}

//             <div class="col-lg-12" style="background-color: #f0f0f0;">
//                 <div class="subSectionHeading">
//                     <h3>Visa Type</h3>
//                     <br></br>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f5f5f5;">

//                 <div class="textBox">
//                     <h4><b>Student Visas</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>S-1 For higher education (including South Asian University and Nalanda University),
//                             provisional
//                             student visa, for a short-term course and for those coming under student exchange program.
//                         </li>
//                         <li>S-2 For school education in India</li>
//                         <li>S-3 For studying Yoga, Vedic culture, Indian system of music and dance and Buddhist studies
//                         </li>
//                         <li>S-4 Theological Studies and Missionary students</li>
//                         <li>S-5 For Research scholar, visiting research faculty, research scholar on bilateral exchange
//                             programme, members of botanical scientific, anthropological etc.
//                             expeditions</li>
//                         <li>S-6 For those coming for internship in India (including those coming under French VIE
//                             programme)
//                         </li>
//                     </ul>

//                     <b>Dependent Visas under student visa category</b>
//                     <ul>
//                         <li>S-1X For dependent of student of regular courses in universities imparting higher
//                             education</li>
//                         <li>S-3X For dependent of student studying Yoga, Vedic culture, Indian system of music and
//                             dance and
//                             Buddhist studies</li>
//                         <li>S-5X For dependent of student for Research scholar, visiting research faculty, research
//                             scholar
//                             on bilateral exchange programme, members of botanical
//                             scientific, anthropological etc. expeditions</li>

//                     </ul>

//                     <b>NOTE: *For dependents of those coming under S-1, S-3 and S-5 Visas only. For
//                         other
//                         category,
//                         no dependent visa will be granted.*
//                     </b>

//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f0f0f0;">
//                 <div class="textBox">
//                     <h4><b>Conference Visas</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>
//                             C-1 For participants of conferences organized by Government authorities
//                         </li>
//                         <li>C-2 For participants of conferences organized by non-Government authorities</li>
//                     </ul>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f5f5f5;">

//                 <div class="textBox">
//                     <h4><b>Employment Visas</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>
//                             E-1 All cases of employment (except intra company transferees and employment in NGO’s)
//                         </li>
//                         <li>
//                             E-2 Intra company transferees
//                         </li>
//                         <li>
//                             E-3 For employment in NGO’s
//                         </li>
//                         <li>
//                             E-4 For those coming to exclude projects in power and steel sectors
//                         </li>
//                     </ul>

//                     <b>Dependent Visas under employment visa category: </b>
//                     <ul>
//                         <li>
//                             E-1X For dependents of employment visa holders
//                         </li>
//                         <li>
//                             E-2X For dependents of Intra company transferees
//                         </li>
//                         <li>
//                             E-3X For dependents of employees employed in NGO’s

//                         </li>
//                         <li>
//                             E-4X For dependents of those coming to exclude projects in power and steel sectors
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f0f0f0;">

//                 <div class="textBox">
//                     <h4><b>Business Visas</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>
//                             B-1 For those coming to establish an industrial/business venture, those required to travel
//                             frequently on long-term business activities and for investors
//                         </li>
//                         <li>
//                             B-2 For all other business activities (other than those covered under B-1 and sports
//                             persons)
//                         </li>
//                         <li>
//                             B-3 For sports persons and coaches including those engaged in commercial sports events in
//                             India
//                             on contract with remuneration
//                         </li>
//                     </ul>
//                     <b>Dependent Visas under business visa category:</b>
//                     <ul>
//                         <li>
//                             B-1X For dependents of those coming to establish an industrial/business venture, those
//                             required
//                             to travel frequently on long-term business activities and
//                             for investors
//                         </li>
//                         <li>
//                             B-2 X For dependents of businessperson coming for all other business activities (other than
//                             those covered under B-1 and sports persons)

//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f5f5f5;">
//                 <div class="textBox">
//                     <h4><b>Diplomatic Visas</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>
//                             D-1 Diplomat assigned in India (on diplomatic passport only)
//                         </li>
//                         <li>
//                             D-2 Diplomat on a visit to India for official purpose (on diplomatic passport only)
//                         </li>
//                         <li>
//                             D-3 Diplomat assigned to non-UN international organization in India
//                         </li>
//                         <li>UD-1 UN Diplomat assigned to India</li>
//                         <li>UD-2 UN Diplomat on a visit to India</li>
//                     </ul>
//                     <b>Dependent Visas under diplomatic visa category:</b>
//                     <ul>
//                         <li>
//                             D-1X Dependent of diplomat (Diplomat assigned in India (on diplomatic passport only))
//                         </li>
//                         <li>
//                             D-2X Dependent of diplomat (Diplomat on a visit to India for official purpose (on diplomatic
//                             passport only))
//                         </li>
//                         <li>
//                             D-3X Dependent of diplomat (Diplomat assigned to non-UN international organization in India)
//                         </li>
//                         <li>
//                             UD-1X Dependent of UN diplomat assigned to India
//                         </li>
//                         <li>UD-2X Dependent of UN diplomat on a visit to India</li>
//                     </ul>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f0f0f0;">
//                 <div class="textBox">
//                     <h4><b>Double Entry Visa (Only for Bangladesh Nationals)</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>
//                             X-Double Entry - (Double Entry Visa)
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f5f5f5;">
//                 <div class="textBox">
//                     <h4><b>e-Emergency X-Misc Visa</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>
//                             eXM- e-Emergency X-Misc VISA
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f0f0f0;">
//                 <div class="textBox">
//                     <h4><b>Entry Visa</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>X-1 - For persons of Indian origin and spouse and children of an Indian citizen / Person of
//                             Indian origin / OCI card (other than those registered as OCI
//                             cardholder)

//                         </li>
//                         <li>
//                             X-2 - For those coming to join Auroville Foundation, Aurobindo Ashram, Missionaries of
//                             Charity,Templates or similar approved organizations
//                         </li>
//                         <li>
//                             X-Misc - For those categories for which X-Misc visa has been specified in various chapters
//                             of
//                             the Visa manual and for purposes which are not covered by any other visa category
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f5f5f5;">
//                 <div class="textBox">
//                     <h4><b>e-Visa</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>e-BV - (e-Business Visa)
//                         </li>
//                         <li>e-CV - (e-Conference Visa)
//                         </li>
//                         <li>
//                             e-Med V - (e-Medical Visa)
//                         </li>
//                         <li>
//                             e-Med X V - (e-Medical Attendant Visa)
//                         </li>
//                         <li>
//                             e-TV - (e-Tourist Visa)
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div class="col-lg-12" style="background-color: #f0f0f0;">
//                 <div class="textBox">
//                     <h4><b>Visa-on-Arrival</b></h4>
//                     <br></br>
//                     <ul>
//                         <li>VoA- Visa on arrival for Japanaese and South Korean nationals
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="defaultSection">
//         <div className="container-fluid">
//           <div className="col-lg-12">
//             <div className="subSectionHeading">
//               <h3 style={{fontSize:"2rem", fontWeight:"bold"}}>Visa Provision/Policies</h3>
//               <hr />
//             </div>
//             <a href="https://indianvisaonline.gov.in/" style={{color:"blue"}}> Click Here for More Details </a>

//             <div className="visaTable">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Sl. No.</th>
//                     <th>Type of visa</th>
//                     <th>Period for which granted</th>
//                     <th>Entry</th>
                    
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>1</td>
//                     <td>Business Visa</td>
//                     <td>5 years</td>
//                     <td>Multiple</td>
                    
//                   </tr>
//                   <tr>
//                     <td>2</td>
//                     <td>Employment
//                     Visa</td>
//                     <td>1 year/ period of
//                     contract</td>
//                     <td>Multiple</td>
                   
//                   </tr>
//                   <tr>
//                     <td>3</td>
//                     <td>Student
//                     Visa/Research
//                     Visa</td>
//                     <td>Period of course/ 5
//                     years</td>
//                     <td>Multiple</td>
                   
//                   </tr>
//                   <tr>
//                     <td>4</td>
//                     <td>Intern</td>
//                     <td>Duration of the
//                     Internship or One
//                     year, whichever is less</td>
//                     <td>Single/ Double/ Multiple</td>
//                   </tr>
//                   {/* Add more rows as needed for other visa types */}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="sectionColor">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="sectionHeading">
//                 <h2></h2>
//                 <hr />
//               </div>
//             </div>

//             <div className="col-lg-12">
//               <div className="textBox">
//                 <h4 style={{fontSize:"2rem"}}><b>Visa Extension</b></h4>
//                 <br />
//                 <ul>
//                   <li>
//                     For certain visa types, it is possible to extend your visa while still residing in India.
//                     Extension
//                     of such visas can be done online through the e-Foreigners Regional Registration Office
//                     (e-FRRO)
//                     portal
                    
//                   </li>
//                   <a href="https://indianfrro.gov.in/eservices/home.jsp" style={{color:"blue"}}>Click Here to Visit FRRO</a>
//                   {/* ... (rest of the information about visa extension) */}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//     <Footer />
//     </div>
//   );
// }

import React from "react";
import "../App.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";

export default function Visa() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
        {isMobile && MobileNavbar()}
        {!isMobile && NavBar()}
      </div>
      <div className="container-fluid" style={{ padding: "40px 20px" }}>
        {/* <section className="defaultSection" style={{ marginBottom: "40px" }}> */}
          {/* <div className="row"> */}
            <div className="col-lg-12" style={{ padding: "20px", textAlign: "center" }}>
              {/* <div style={{ backgroundColor: "#ffffff", padding: "30px", border: "1px solid #ddd", borderRadius: "8px" }}> */}
                <h1 style={{ fontSize: "2.5rem", fontFamily: "'Roboto', sans-serif", marginBottom: "15px", color: "#333" }}>
                  Visa & Immigration
                </h1>
              {/* </div> */}
            </div>
          {/* </div> */}
        {/* </section> */}

        <section className="defaultSection" style={{ marginBottom: "40px" }}>
          <div className="row">
            <div className="col-lg-12" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", marginBottom: "15px", color: "#333" }}>Visa Type</h2>
                <hr style={{ borderColor: "#333", width: "50px", margin: "10px auto" }} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f5f5f5", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>Student Visas</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>S-1 For higher education (including South Asian University and Nalanda University), provisional student visa, for a short-term course and for those coming under student exchange program.</li>
                  <li>S-2 For school education in India</li>
                  <li>S-3 For studying Yoga, Vedic culture, Indian system of music and dance and Buddhist studies</li>
                  <li>S-4 Theological Studies and Missionary students</li>
                  <li>S-5 For Research scholar, visiting research faculty, research scholar on bilateral exchange programme, members of botanical scientific, anthropological etc. expeditions</li>
                  <li>S-6 For those coming for internship in India (including those coming under French VIE programme)</li>
                </ul>
                <h5 style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", margin: "15px 0 10px" }}>Dependent Visas under student visa category</h5>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>S-1X For dependent of student of regular courses in universities imparting higher education</li>
                  <li>S-3X For dependent of student studying Yoga, Vedic culture, Indian system of music and dance and Buddhist studies</li>
                  <li>S-5X For dependent of student for Research scholar, visiting research faculty, research scholar on bilateral exchange programme, members of botanical scientific, anthropological etc. expeditions</li>
                </ul>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li><b>NOTE: For dependents of those coming under S-1, S-3 and S-5 Visas only. For other category, no dependent visa will be granted.</b></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>Conference Visas</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>C-1 For participants of conferences organized by Government authorities</li>
                  <li>C-2 For participants of conferences organized by non-Government authorities</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f5f5f5", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>Employment Visas</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>E-1 All cases of employment (except intra company transferees and employment in NGO’s)</li>
                  <li>E-2 Intra company transferees</li>
                  <li>E-3 For employment in NGO’s</li>
                  <li>E-4 For those coming to exclude projects in power and steel sectors</li>
                </ul>
                <h5 style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", margin: "15px 0 10px" }}>Dependent Visas under employment visa category</h5>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>E-1X For dependents of employment visa holders</li>
                  <li>E-2X For dependents of Intra company transferees</li>
                  <li>E-3X For dependents of employees employed in NGO’s</li>
                  <li>E-4X For dependents of those coming to exclude projects in power and steel sectors</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>Business Visas</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>B-1 For those coming to establish an industrial/business venture, those required to travel frequently on long-term business activities and for investors</li>
                  <li>B-2 For all other business activities (other than those covered under B-1 and sports persons)</li>
                  <li>B-3 For sports persons and coaches including those engaged in commercial sports events in India on contract with remuneration</li>
                </ul>
                <h5 style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", margin: "15px 0 10px" }}>Dependent Visas under business visa category</h5>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>B-1X For dependents of those coming to establish an industrial/business venture, those required to travel frequently on long-term business activities and for investors</li>
                  <li>B-2 X For dependents of businessperson coming for all other business activities (other than those covered under B-1 and sports persons)</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f5f5f5", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>Diplomatic Visas</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>D-1 Diplomat assigned in India (on diplomatic passport only)</li>
                  <li>D-2 Diplomat on a visit to India for official purpose (on diplomatic passport only)</li>
                  <li>D-3 Diplomat assigned to non-UN international organization in India</li>
                  <li>UD-1 UN Diplomat assigned to India</li>
                  <li>UD-2 UN Diplomat on a visit to India</li>
                </ul>
                <h5 style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", margin: "15px 0 10px" }}>Dependent Visas under diplomatic visa category</h5>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>D-1X Dependent of diplomat (Diplomat assigned in India (on diplomatic passport only))</li>
                  <li>D-2X Dependent of diplomat (Diplomat on a visit to India for official purpose (on diplomatic passport only))</li>
                  <li>D-3X Dependent of diplomat (Diplomat assigned to non-UN international organization in India)</li>
                  <li>UD-1X Dependent of UN diplomat assigned to India</li>
                  <li>UD-2X Dependent of UN diplomat on a visit to India</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>Double Entry Visa (Only for Bangladesh Nationals)</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>X-Double Entry - (Double Entry Visa)</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f5f5f5", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>e-Emergency X-Misc Visa</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>eXM- e-Emergency X-Misc VISA</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>Entry Visa</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>X-1 - For persons of Indian origin and spouse and children of an Indian citizen / Person of Indian origin / OCI card (other than those registered as OCI cardholder)</li>
                  <li>X-2 - For those coming to join Auroville Foundation, Aurobindo Ashram, Missionaries of Charity, Templates or similar approved organizations</li>
                  <li>X-Misc - For those categories for which X-Misc visa has been specified in various chapters of the Visa manual and for purposes which are not covered by any other visa category</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f5f5f5", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>e-Visa</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>e-BV - (e-Business Visa)</li>
                  <li>e-CV - (e-Conference Visa)</li>
                  <li>e-Med V - (e-Medical Visa)</li>
                  <li>e-Med X V - (e-Medical Attendant Visa)</li>
                  <li>e-TV - (e-Tourist Visa)</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", textAlign: "center", marginBottom: "10px" }}>Visa-on-Arrival</h4>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>VoA- Visa on arrival for Japanaese and South Korean nationals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="defaultSection" style={{ marginBottom: "40px" }}>
          <div className="row">
            <div className="col-lg-12" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", marginBottom: "15px", color: "#333" }}>Visa Provision / Policies</h2>
                <hr style={{ borderColor: "#333", width: "50px", margin: "10px auto" }} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f5f5f5", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "center" }}>
                <a href="https://indianvisaonline.gov.in/" style={{ color: "blue", display: "block", marginBottom: "20px" }}>Click Here for More Details</a>
                <div style={{ textAlign: "justify" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#333", color: "#fff" }}>
                        <th style={{ padding: "10px", textAlign: "center" }}>Sl. No.</th>
                        <th style={{ padding: "10px", textAlign: "center" }}>Type of visa</th>
                        <th style={{ padding: "10px", textAlign: "center" }}>Period for which granted</th>
                        <th style={{ padding: "10px", textAlign: "center" }}>Entry</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "#fff" }}>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "justify" }}>Business Visa</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "justify" }}>5 years</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Multiple</td>
                      </tr>
                      <tr style={{ backgroundColor: "#f9f9f9" }}>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>2</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "justify" }}>Employment Visa</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "justify" }}>1 year/ period of contract</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Multiple</td>
                      </tr>
                      <tr style={{ backgroundColor: "#fff" }}>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>3</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "justify" }}>Student Visa/Research Visa</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "justify" }}>Period of course/ 5 years</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Multiple</td>
                      </tr>
                      <tr style={{ backgroundColor: "#f9f9f9" }}>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>4</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "justify" }}>Intern</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "justify" }}>Duration of the Internship or One year, whichever is less</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Single/ Double/ Multiple</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionColor" style={{ marginBottom: "40px" }}>
          <div className="row">
            <div className="col-lg-12" style={{ padding: "20px", textAlign: "center" }}>
              <div style={{ backgroundColor: "#f0f0f0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", marginBottom: "15px", color: "#333" }}>Visa Extension</h2>
                <hr style={{ borderColor: "#333", width: "50px", margin: "15px auto" }} />
              </div>
            </div>
            <div className="col-lg-12" style={{ padding: "20px" }}>
              <div style={{ backgroundColor: "#f5f5f5", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", textAlign: "justify" }}>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6", listStyleType: "disc" }}>
                  <li>For certain visa types, it is possible to extend your visa while still residing in India. Extension of such visas can be done online through the e-Foreigners Regional Registration Office (e-FRRO) portal</li>
                  <li><a href="https://indianfrro.gov.in/eservices/home.jsp" style={{ color: "blue" }}>Click Here to Visit FRRO</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}