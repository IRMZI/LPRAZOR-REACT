import React from "react";
import {FaBars} from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="inicio" spy={true} smooth={true} offset={50} duration={500}>RAZOR</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="inicio" spy={true} smooth={true} offset={50} duration={500}>Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='Crazor'>Quem é a razor</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="criadores" spy={true} smooth={true} offset={50} duration={500}>Criadores</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
