import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/mobileNavbar";
import NavBar from "../components/navbar";
import {
  Box,
  IconButton,
  Image,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Collapse,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import img1 from "../components/images/partnerhome.png";
import { doctprogram, erasmus, partner } from "../components/partners/data";

import shortcut from "../components/partners/shortcut.png";
import Footer from "../components/footer";

const images = [img1];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const [expandedCard, setExpandedCard] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  let wow = "70vw"
  if (isMobile){
    wow = "90vw"
  }

  return (
    <div>
      <div style={{ position: "static", top: "0", width: "100%", zIndex: "1000" }}>
        {isMobile ? <MobileNavbar /> : <NavBar />}
      </div>
      <br />
      <div className="flex flex-col items-center">
        <img src={shortcut} alt="shortcut" style={{ width: wow, height: "auto" }} />
      </div>
      
      <br /><br />

      <Box backgroundColor="#1D1D1D" padding="20px" marginTop="20px">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          marginBottom="20px"
        >
          Our Partners
        </Text>
        <HStack spacing={4} className="flex flex-wrap justify-center items-center align-middle" style={{width:"80vw", marginLeft:"auto", marginRight:"auto", padding:"2px"}}>
          {partner.map((p, index) => (
            <Box
              key={index}
              width="auto"
              backgroundColor="white"
              borderRadius="8px"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              className="flex flex-col items-center p-5"
              style={{margin:"10px"}}
            >
              <p style={{fontWeight:"700"}}>{p.country}</p>
              <Image
                src={p.image}
                alt={`Partner ${index + 1}`}
                width="100%"
                height="auto"
              />
              <Button
                width="100%"
                onClick={() => toggleExpand(index)}
                leftIcon={
                  expandedCard === index ? (
                    <ChevronUpIcon />
                  ) : (
                    <ChevronDownIcon />
                  )
                }
              >
                {expandedCard === index ? "Collapse" : "Expand"}
              </Button>
              <Collapse
                in={expandedCard === index}
                startingHeight={0}
              >
                <Box padding="10px">
                  <Text>
                    {p.partnership || "Partnership details coming soon"}
                  </Text>
                </Box>
              </Collapse>
            </Box>
          ))}
        </HStack>

          {/*For other part*/}
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          marginBottom="20px"
        >
          Joint Doctoral Programmes
        </Text>
        <HStack spacing={4} className="flex flex-wrap justify-center items-center align-middle" style={{width:"80vw", marginLeft:"auto", marginRight:"auto", padding:"2px"}}>
          {doctprogram.map((pa, index) => (
            <Box
              key={index}
              width="auto"
              backgroundColor="white"
              borderRadius="8px"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              className="flex flex-col items-center p-5"
              style={{margin:"10px"}}
            >
              <p style={{fontWeight:"700"}}>{pa.country}</p>
              <Image
                src={pa.image}
                alt={`Partner ${index + 1}`}
                width="100%"
                height="auto"
              />
              <Button
                width="100%"
                onClick={() => toggleExpand(index)}
                leftIcon={
                  expandedCard === index ? (
                    <ChevronUpIcon />
                  ) : (
                    <ChevronDownIcon />
                  )
                }
              >
                {expandedCard === index ? "Collapse" : "Expand"}
              </Button>
              <Collapse
                in={expandedCard === index}
                startingHeight={0}
              >
                <Box padding="10px">
                  <Text>
                    {pa.partnership || "Partnership details coming soon"}
                  </Text>
                </Box>
              </Collapse>
            </Box>
          ))}
        </HStack>


        {/*For erasmus part*/}
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          marginBottom="20px"
        >
          Erasmus+ Programme
        </Text>
        <HStack spacing={4} className="flex flex-wrap justify-center items-center align-middle" style={{width:"80vw", marginLeft:"auto", marginRight:"auto", padding:"2px"}}>
          {erasmus.map((paa, index) => (
            <Box
              key={index}
              width="auto"
              backgroundColor="white"
              borderRadius="8px"
              overflow="hidden"
              boxShadow="md"
              position="relative"
              className="flex flex-col items-center p-5"
              style={{margin:"10px"}}
            >
              <p style={{fontWeight:"700"}}>{paa.country}</p>
              <Image
                src={paa.image}
                alt={`Partner ${index + 1}`}
                width="100%"
                height="auto"
              />
              <Button
                width="100%"
                onClick={() => toggleExpand(index)}
                leftIcon={
                  expandedCard === index ? (
                    <ChevronUpIcon />
                  ) : (
                    <ChevronDownIcon />
                  )
                }
              >
                {expandedCard === index ? "Collapse" : "Expand"}
              </Button>
              <Collapse
                in={expandedCard === index}
                startingHeight={0}
              >
                <Box padding="10px">
                  <Text>
                    {paa.partnership || "Partnership details coming soon"}
                  </Text>
                </Box>
              </Collapse>
            </Box>
          ))}
        </HStack>

      </Box>
      <Footer />
    </div>
  );
};

export default Partners;
