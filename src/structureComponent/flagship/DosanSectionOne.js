import React from 'react'
import './DosanSectionOne.css'
import styled from 'styled-components';

const Section = styled.section`
&::before {
  background-image: url(${process.env.PUBLIC_URL}/images/flagship/dosan/section1_dosan_mobile.jpg);
}

@media only all and (min-width: 1024px) {
  &::before {
    background-image: url(${process.env.PUBLIC_URL}/images/flagship/dosan/section1_dosan_pc.jpg);
  }
}
`;
function DosanSectionOne() {
 
  return (
    <Section className="sec_1">
    <h2>
      Sulwhasoo Dosan
      <br />
      Flagship Store
    </h2>
    <span className="arrow_down">
      <i>SCROLL</i>
    </span>
    </Section>
    
  )
}

export default DosanSectionOne
