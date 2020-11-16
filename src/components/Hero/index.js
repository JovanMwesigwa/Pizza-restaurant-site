import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroH1, HeroBtn, HeroItem, HeroP } from './HeroElements'

const Hero = (props) => {

  const [ isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return(
    <>
      <HeroContainer>
        <Navbar toggle={toggle}  />
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <HeroContent>
          <HeroItem>
            <HeroH1>Greatest Pizza Here</HeroH1>
            <HeroP>Ready in 60seconds</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItem>
        </HeroContent>
      </HeroContainer>
    </>
   )

 }

export default Hero