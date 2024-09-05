import React from "react";
import NavBar from "../components/navbar";
import MobileNavbar from "../components/mobileNavbar";
import Footer from "../components/footer";
import { isMobile } from "react-device-detect";

const visitors = [
    {
      title: "Visitors",
      description: "CNRS Director of Research (France), Professor and Senior University Research Administrator (URA)",
      logo: "Japan_Flag.png",
      university: "University of Rennes 1",
      country: "Japan",
    },
    {
      title: "Visitors",
      description: "CNRS Director of Research (France), Professor and Senior University Research Administrator (URA)",
      logo: "Japan_Flag.png",
      university: "University of Rennes 1",
      country: "Japan",
    },
    {
      title: "Visitors",
      description: "CNRS Director of Research (France), Professor and Senior University Research Administrator (URA)",
      logo: "Japan_Flag.png",
      university: "University of Rennes 1",
      country: "Japan",
    },
    {
      title: "Visitors",
      description: "CNRS Director of Research (France), Professor and Senior University Research Administrator (URA)",
      logo: "Japan_Flag.png",
      university: "University of Rennes 1",
      country: "Japan",
    },
    {
      title: "Visitors",
      description: "CNRS Director of Research (France), Professor and Senior University Research Administrator (URA)",
      logo: "Japan_Flag.png",
      university: "University of Rennes 1",
      country: "Japan",
    },
    {
      title: "Visitors",
      description: "CNRS Director of Research (France), Professor and Senior University Research Administrator (URA)",
      logo: "Japan_Flag.png",
      university: "University of Rennes 1",
      country: "Japan",
    },
  ];
  
  export default function Visitors() {
    return (
      <div className="gap-4 flex flex-col items-center px-4">
        {isMobile ? <MobileNavbar /> : <NavBar />}
        Coming Soon.....
        {/* <h1 className="text-3xl font-bold mb-12">Visitors</h1>
        {visitors.map((visitor, index) => (
          <div
            key={index}
            className="bg-[#FCFCFC] border-[0.125px] shadow-md w-full flex flex-col sm:flex-row items-center rounded-[16px] px-5 py-[20px] sm:py-[40px] gap-4 sm:gap-[80px] justify-between"
          >
            <div className="flex flex-col text-center sm:text-left gap-2 mb-3 sm:mb-0">
              <h1 className="text-[16px] font-bold">{visitor.title}</h1>
              <p className="text-sm sm:text-base">{visitor.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <img className="h-[40px] sm:h-[50px] shadow-md rounded-md" src={visitor.logo} alt="Country Flag" />
              <div className="flex flex-col text-center sm:text-left">
                <p className="text-sm sm:text-base">{visitor.university}</p>
                <p className="text-sm sm:text-base">{visitor.country}</p>
              </div>
            </div>
          </div>
        ))} */}
      <Footer />
      </div>
    );
  }