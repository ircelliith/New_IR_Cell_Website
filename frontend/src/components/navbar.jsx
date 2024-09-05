import React from 'react';
import './styles/navbarStyle.css'; // Assuming you have a CSS file for styling
import './../App.css';
import ircellLogo from "./icons/ircellLogo.png";
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
import { Navigate } from 'react-router-dom';


const NavBar = () => {
  let contscroller = isMobile ? "750" : "3500";
    const handleContScroll = () => {
        window.scrollTo({
            top: contscroller,
            behavior: "smooth",
        });
    };

    let galscroller = isMobile ? "750" : "5400";
    const handlegalScroll = () => {
        window.scrollTo({
            top: galscroller,
            behavior: "smooth",
        });
    };
  
  return (
    <nav className="navbar" style={{position:"sticky"}}>
      <div className="navbar-logo">
        <a href='https://ir.iith.ac.in/'><img src={ircellLogo} style={{width:"145px", height:"49px"}} alt="International Relations Cell Logo" /></a>
        
      </div>
      <ul className="navbar-links">
      
        <Menu>
          <MenuButton as={Button} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Home
          </MenuButton>
          <MenuList className='menulist'>
              <MenuItem className='menuitem'><a href="/">Return to Home</a></MenuItem>
          </MenuList>
        </Menu>
        
        <Menu>
          <MenuButton as={Button} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            About Us
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/team"><a href="">IR Cell & Team</a></a></MenuItem>
            <MenuItem className='menuitem'><a href="/lifeatiith">Life at IITH</a></MenuItem>
            <MenuItem className='menuitem'><a href="/downloads">Downloads</a></MenuItem>
            <MenuItem className='menuitem'><a href="/opportunity">Opportunities</a></MenuItem>
            <MenuItem className='menuitem'><a href="/collab">International <br></br>Collaboration <br></br>& Mobility</a></MenuItem>
          </MenuList>
        </Menu>
        
        <Menu>
          <MenuButton as={Button}  style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            JICA
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/jica">Japan International Cooperation Agency</a></MenuItem>
            </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Partners
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/Partners">Our Partners</a></MenuItem>
            <MenuItem className='menuitem'><a href="/visitors">Visits</a></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Admissions
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/intadm">International Admission</a></MenuItem>
            <MenuItem className='menuitem'><a href="/visa">Visa & Immigration</a></MenuItem>
          </MenuList>
        </Menu>

        
      </ul>
      <div className="navbar-notification">
        <img src={notificationicon} style={{width:"46px", height:"46px"}} alt="Notifications" />
        
      </div>
    </nav>
  );
};

export default NavBar;
