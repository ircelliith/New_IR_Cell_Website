import React from 'react';
import ircellLogo from "./icons/ircellLogo.png";
import iithlogo from "./icons/iithlogo.png";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    background,
  } from '@chakra-ui/react';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

function NavDrawer(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='transparent' onClick={onOpen} style={{color:"black"}}>
        &#9776;
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{backgroundColor:"white", padding:"30px"}}>
          <DrawerCloseButton />

          <DrawerBody style={{maxWidth:"50vw"}}>
          <br /><br /><br /><br />
          <Button style={{backgroundColor:"transparent", color:"black"}}><a href="/">Home</a></Button> <br />
          <Accordion allowToggle="true">
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }} style={{maxWidth:"50vw", padding:"2px"}}>
                  <Box as='span' flex='1' textAlign='left'>
                    About Us
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <a href="/team">-IR Cell & Team</a> <br />
                <a href="/lifeatiith">-Life at IITH</a> <br />
                <a href="/downloads">-Downloads</a> <br />
                {/* <a href="/opportunity">-Opportunities</a> <br />
                <a href="/collab">-International Collaboration & Mobility</a> */}
                <hr />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <hr />
          <Accordion allowToggle="true">
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }} style={{maxWidth:"50vw", padding:"2px"}}>
                  <Box as='span' flex='1' textAlign='left'>
                    JICA
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <a href="/jica">-Japan International Cooperation Agency</a> <br />
                <hr />
              </AccordionPanel>
              <AccordionPanel>
                <a href="https://www.iith.ac.in/japandesk/">-Japan Desk</a> <br />
                <hr />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <hr />
          <Accordion allowToggle="true">
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }} style={{maxWidth:"50vw", padding:"2px"}}>
                  <Box as='span' flex='1' textAlign='left'>
                    Partnerships
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <a href="/Partners">-Partners</a> <br />
                <a href="/visitors">-Visitors</a> <br />
                <hr />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <hr />
          <Accordion allowToggle="true">
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }} style={{maxWidth:"50vw", padding:"2px"}}>
                  <Box as='span' flex='1' textAlign='left'>
                    Admissions
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <a href="/intadm">-International Admissions</a> <br />
                <a href="/visa">-Visa & Immigration</a> <br />
                <hr />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <hr />
          <Button style={{backgroundColor:"transparent", color:"black"}}><a href="/contact">Contacts</a></Button> <br />
          <Button style={{backgroundColor:"transparent", color:"black"}}><a href="/gallery">Gallery</a></Button> <br />
          

          </DrawerBody>

          <DrawerFooter>
             Developed by Web Team, IR Cell IIT Hyderabad
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function MobileNavbar(){
   return(
    <nav className="navbar" style={{position:"sticky", alignItems:"center", justifyContent:"center", textAlign:"center", overflowX:"hidden"}}>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        <img src={iithlogo} style={{width:"35vw", height:"auto", marginRight:"28vw"}} alt="International Relations Cell Logo" />
        <br />
       <NavDrawer />
      </div>
    </nav>
   );
}