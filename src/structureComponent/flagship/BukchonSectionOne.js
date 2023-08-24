import React from "react";
import './BukchonSectionOne.css'
import styled from 'styled-components';

const Section = styled.section`
&::before {
  background-image: url(${process.env.PUBLIC_URL}/images/flagship/bukchon/section1_bukchon_mobile.jpg);
}

@media only all and (min-width: 1024px) {
  &::before {
    background-image: url(${process.env.PUBLIC_URL}/images/flagship/bukchon/section1_bukchon_pc.jpg);
  }
}
`;

function BukchonSectionOne() {

  return (
    <Section className="sec_1">
      <h2>
        The House of
        <br />
        Sulwhasoo Bukchon
      </h2>
      <span className="arrow_down">
        <i>SCROLL</i>
      </span>
    </Section>
  );
}

export default BukchonSectionOne;
