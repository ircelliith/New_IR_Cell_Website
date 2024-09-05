import React from 'react';
import '../App.css'; // Import the CSS file for styling
import { isMobile } from 'react-device-detect';
import MobileNavbar from '../components/mobileNavbar.jsx';
import NavBar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import jica1 from "../components/images/jica1.png";
import homecaro2 from "../components/images/homecaro2.png";
import partnerhome from "../components/images/partnerhome.png";
import jica2 from "../components/images/jica2.png";
import jica3 from "../components/images/jica3.png";

const JicaPage = () => {
  let pad = "40px";
  if (isMobile) {
    pad = "0px";
  }
  return (
    <>
    <div style={{position:"sticky", top:"0"}}>
                {isMobile && MobileNavbar()}
                {!isMobile && NavBar()}
                
      </div>
    <div className="flex flex-col items-center overflow-x-hidden" style={{padding:pad}}>
      
      <br></br>
      <header className="jica-header mb-24 flex flex-wrap">
        <h1 className='font-bold text-[64px] float-left'>Japan International Cooperation <br/>Agency <span className='text-[#F73A48]'>(JICA)</span></h1>
      </header>

      <img className='object-cover w-full' src={jica1}/>      
      

      <section className="jica-content">
      
        
        
        
        <h2 className='font-bold text-3xl py-6'>About the Program</h2>

        <p className='font-base text-[16px]' style={{fontFamily:"sans-serif"}}>
          IITH has a very unique collaboration with Japanese universities and industries. 
          The FRIENDSHIP (Future Researchers at Indian Institute of Technology Hyderabad 
          to Enhance Network Development with Scholarship) Project aims to contribute to 
          the further development in the educational and research activities of IITH through 
          the world-class research network between IITH and higher education institutions 
          & industrial clusters of Japan, whereby both can establish education and research 
          excellence in the field of science, technology and engineering in the future.
        </p>

        <h2 className='font-bold text-3xl py-6'>Project Overview</h2>
        <p className='font-base text-[16px]'>
          Japan International Cooperation Agency (JICA) started the "The Project for Future 
          Researchers at IITH to Enhance Network Development with Scholarship of Japan" 
          (FRIENDSHIP Project) on 2nd January 2017 for the period of 8 years till 31st March 2020. 
          Under this first phase, IITH provided several postgraduate scholarships in Japan for 
          33 of the eligible IITH students. Japanese universities and industries also offered 
          internships. Similar numbers of projects were supported in the second and third years 
          of the project, along with several joint research projects and joint supervision of 
          research findings and large-scale events. The increased number of students who obtained 
          internships and/or employment opportunities at Japanese companies. In sum, the Project 
          produced a number of excellent alumni members globally.
        </p>
        <p className='font-base text-[16px]'>
          After the success of phase 1 to sustain the momentum built by the Project, 
          the FRIENDSHIP 2.0 project was launched in December 2021.
        </p>

        <h2 className='font-bold text-3xl py-6' >Purpose & Activities</h2>
        <div className='grid xl:grid-cols-2 gap-12 p-2 '>
          <img className=' object-cover rounded-[16px]' src={homecaro2}/>
        <p className='font-base text-[16px]' >
        The purpose of the FRIENDSHIP 2.0 project is to establish a sustainable platform for academic and industrial collaborations between India and Japan at IITH,
         expecting that human resources produced 
        through the platform will continuously contribute to academic and industrial development both in India and Japan.<br/>
        <br/>
        The FRIENDSHIP 2.0 project now offers IITH-Japan
         FRIENDSHIP Scholarship 2.0 for doctoral study at Japanese universities, exclusively for graduates from master &apos;s programs of IITH in science and technology. The scholarship 
         aims to establish
          sustainable academic and industrial research collaborations between India and Japan through promoting joint research, joint supervision, and other joint activities during grantees’ doctoral 
          study in Japan as trainees of “the JICA long-term training program&quot;.<br/>
          <br/>
          A program that provides trainees with opportunities to pursue higher degrees at Japanese universities. 
        FRIENDSHIP Scholarship 2.0 has its purpose and activities, following the regulations of the JICA long-term training program.</p>
        <p className='font-base text-[16px] my-5' >
        A final 10 students were selected in 2022. Nine of the successful applicants were enrolled in October 2022, and one in April 2023. Some students will enroll in the doctoral course after six months as research students, while others will directly enrol in the doctoral course to begin their research FRIENDSHIP 2.0 also offers Research Grant. The FRIENDSHIP 2.0 Research Grant aims to enhance sustainable collaboration between IIT Hyderabad (IITH) and academic institutions and/or industries in Japan in association with the FRIENDSHIP 2.0 Scholarship. Establishing academic collaboration including collaborative degree programs through a combination of research grants and long-term training programs is also one of the purposes of this grant.<br/><br/>
        FRIENDSHIP 2.0 Research Grant offers two kinds of grants in science and technology, namely (AC) academic collaboration and (IC) industry-university collaboration.</p>
        <img className=' object-cover rounded-[16px]' src={partnerhome}/>
        
        </div>


        <div className=''>
          <h2 className='font-bold text-3xl py-6'>The list of Joint Research Granted in 2022</h2>
          <img className="my-8" src={jica2}/>
        </div>
        <div className=''>
          <h2 className='font-bold text-2xl py-6'>Various activities to promote India-Japan collaboration, including Japan Desk events, 
            are carried out with the support of the JICA project team. </h2>
            <h3 className='font-bold text-2xl'>The main activities are as follows:</h3>
            <ul className='list-disc text-lg font-normal py-6'>
  <li>Baseline Study Survey & Report Preparation</li>
  <li>FRIENDSHIP2.0 Scholarship 2nd batch promotion activities</li>
  <li>Japan Desk Logo Contest</li>
  <li>Orientation for 1st batch FRIENDSHIP 2.0 Scholarship participants</li>
  <li>Detailed planning survey & study and report (November 2022)</li>
  <li>Japan Desk Collaboration events with Japanese companies</li>
  <li>Participation in CEATEC International Exhibition (from 18th to 21st October at Makuhari Messe for on-site exhibition and from 1st to 31st October for online exhibition)</li>
  <li>Online seminar to introduce IITH at CEATEC International Exhibition (19th October, 13:30-14:30)</li>
  <li>2nd Joint Coordinating Committee (JCC) meeting (1st December @ IITH + online)</li>
  <li>Recruitment and selection of the second batch of FRIENDSHIP 2.0 Scholarship Scholars (about 20 Scholars) -- Application deadline: 16th December</li>
  <li>FRIENDSHIP2.0 Joint Research Grant Program Batch 2 Call for Applications and Selection (about 10) -- Application deadline November 2</li>
</ul>


        </div>
        <div>
          <h1 className='font-bold text-[40px] text-[#F73A48]'>Japan Desk</h1>
          <div>
            <h1 className='font-bold text-xl py-4'>
            Purpose
            </h1>
            <p className='font-base text-[16px]'>Japan Desk to become a sustainable platform for academic and industry-university collaboration between India and Japan by providing a one-stop service in academic and industry-university collaboration at IITH.
            </p>
<h1 className='font-bold text-xl py-4'>Japan Desk Steering Committee</h1>
<p className='font-base text-[16px]'>A Japan Desk Steering Committee and Japan Desk Partners will be established as a mechanism for the Japan Desk to develop and expand the India-Japan partnership sustainably and autonomously. The Steering Committee will consist of Deans who are in charge of facilitating Japan Desk activities and will support planning, decision-making, and implementation of activities. Regular meetings of the Steering Committee will be held to review the progress raised by the task forces and provide feedback to the task forces on the measures to be taken, and receive approval from the Director of IITH, who is also the Project Director.
</p>
<h1 className='font-bold text-xl py-4'>Task Force</h1>
<p className='font-base text-[16px]'>Task Forces are formed for Japan Desk activities by faculty and staff members from IITH to serve as working members for the various activities of the Japan Desk.
</p>
<h1 className='font-bold text-xl py-4'>Japan Desk Partners</h1>
<p className='font-base text-[16px]'>The Japan Desk Partners will be composed of external members from India-Japan partnership promotion organizations, the JICA Friendship Scholars’ Associations and IITH start-up companies, etc., and collaborates with the Steering Committee as necessary in providing expert advice and introducing relevant personnel through personal connections.
</p>
          </div>
        </div>
        <div className='my-24'>
          <div className='border-2 border-black rounded-lg  '>
            <img className='rounded-lg p-12 w-auto' src={jica3}/>

          </div>

        </div>
      </section>
      
      

    </div>
    <Footer />
    </>
  );
};

export default JicaPage;