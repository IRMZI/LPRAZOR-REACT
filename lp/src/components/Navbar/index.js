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
          <Navlogo to="/">RAZOR</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="inicio">Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="razorSite">Quem é a razor</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="criadores">Criadores</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
