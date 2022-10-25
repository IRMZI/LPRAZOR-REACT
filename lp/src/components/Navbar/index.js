import React from "react";
import { NavItem } from "reactstrap";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  FaBars,
  NavMenu,
  NavLinks,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/">RAZOR</Navlogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"> about </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
