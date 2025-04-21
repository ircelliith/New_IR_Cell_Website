import React from 'react';
import './styles/navbarStyle.css'; // Assuming you have a CSS file for styling
import './../App.css';
import ircellLogo from "./icons/ircellLogo.png";
import iithlogo from "./icons/iithlogo.png";
import notificationicon from "./icons/notificationicon.png";
import { isMobile } from 'react-device-detect';

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

import { Button } from '@chakra-ui/react'


const NavBar = () => {
  //Apparaently using ismobile is waste because this navbar is not visible in mobile view
  let homescroller = isMobile ? "0" : "0";
  const handleHomeScroll = () => {
      window.scrollTo({
          top: homescroller,
          behavior: "smooth",
      });
  };

  let abtscroller = isMobile ? "750" : "600";
    const handleabtScroll = () => {
        window.scrollTo({
            top: abtscroller,
            behavior: "smooth",
        });
    };
  
    let jicascroller = isMobile ? "1150" : "1000";
    const handlejicaScroll = () => {
        window.scrollTo({
            top: jicascroller,
            behavior: "smooth",
        });
    };

    let partscroller = isMobile ? "1750" : "1650";
    const handlepartScroll = () => {
        window.scrollTo({
            top: partscroller,
            behavior: "smooth",
        });
    };

    let admscroller = isMobile ? "2350" : "2320";
    const handleadmScroll = () => {
        window.scrollTo({
            top: admscroller,
            behavior: "smooth",
        });
    };

    let contscroller = isMobile ? "750" : "3500";
    const handleContScroll = () => {
        window.scrollTo({
            top: contscroller,
            behavior: "smooth",
        });
    };

    let galscroller = isMobile ? "750" : "5600";
    const handlegalScroll = () => {
        window.scrollTo({
            top: galscroller,
            behavior: "smooth",
        });
    };

    let handleFooterScroll = () => {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
      });
    };

  return (
    <nav className="navbar" style={{position:"sticky"}}>
      <div className="navbar-logo">
        <img src={iithlogo} style={{width:"10vw", height:"auto"}} alt="International Relations Cell Logo" />
        
      </div>
      <ul className="navbar-links">
      
        <Menu>
          <MenuButton as={Button} onMouseOver={handleHomeScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Home
          </MenuButton>
          <MenuList className='menulist'>
              <MenuItem className='menuitem'><a href="/">Return to Home</a></MenuItem>
          </MenuList>
        </Menu>
        
        <Menu>
          <MenuButton as={Button} onMouseOver={handleabtScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            About Us
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/team">IR Cell & Team</a></MenuItem>
            <MenuItem className='menuitem'><a href="/lifeatiith">Life at IITH</a></MenuItem>
            <MenuItem className='menuitem'><a href="/downloads">Downloads</a></MenuItem>
            {/* <MenuItem className='menuitem'><a href="/opportunity">Opportunities</a></MenuItem>
            <MenuItem className='menuitem'><a href="/collab">International <br></br>Collaboration <br></br>& Mobility</a></MenuItem> */}
          </MenuList>
        </Menu>
        
        <Menu>
          <MenuButton as={Button} onMouseOver={handlejicaScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            JICA
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/jica">Japan International Cooperation Agency</a></MenuItem>
            <MenuItem className='menuitem'><a href="https://www.iith.ac.in/japandesk/">JICA</a></MenuItem>
            </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} onMouseOver={handlepartScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Partners
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/Partners">Our Partners</a></MenuItem>
            <MenuItem className='menuitem'><a href="/visitors">Visitors</a></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} onMouseOver={handleadmScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Admissions
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/intadm">International Admission</a></MenuItem>
            <MenuItem className='menuitem'><a href="/visa">Visa & Immigration</a></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} onMouseOver={handleContScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Contacts
          </MenuButton>
        </Menu>
        
        <Menu>
          <MenuButton as={Button} onMouseOver={handlegalScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Gallery
          </MenuButton>
        </Menu>
      </ul>
      <div className="navbar-notification">
        <img src={notificationicon} onMouseOver={handleFooterScroll} style={{width:"46px", height:"46px"}} alt="Notifications" />
        
      </div>
    </nav>
  );
};

export default NavBar;
