import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = (props) => {
  return(
    <FeatureContainer>
        <h1>Pizza of the Day.</h1>
        <p>Truffle alfreado sauce topped with 24 carat gold dust.</p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
   )

 }

export default Feature