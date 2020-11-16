import React from 'react'
import { Bars, Nav, NavbarLink, NavLogo } from './NavbarElements'

const Navbar = ({ toggle }) => {
  return(
      <>
        <Nav>
            <NavbarLink to="/">Pizza</NavbarLink>
            <NavLogo onClick={toggle}>
                <p>Menu</p>
                <Bars  />
            </NavLogo>
        </Nav>
      </>
   )

 }

export default Navbar