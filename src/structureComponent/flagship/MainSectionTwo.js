import React from "react";
import { Link } from "react-router-dom";
import './MainSectionTwo.css';
import styled from 'styled-components';

const Section = styled.section`
&::before {
  background-image: url(${process.env.PUBLIC_URL}/images/flagship/main/intro_bukchon_mobile.jpg);
}

@media only all and (min-width: 1024px) {
  &::before {
    background-image: url(${process.env.PUBLIC_URL}/images/flagship/main/intro_bukchon.jpg);
  }
}
`;

function MainSectionTwo() {
  return (
    <Section className="sec_2">
      <div className="text_cover">
        <h2>
          The House of <br />
          Sulwhasoo <br />
          Bukchon
        </h2>
        <p className="p_web">
          설화수의 시선으로 담아낸 <br />
          동시대적 아름다움을 경험하다
        </p>
        <div>
          <Link to="/flagshipBukchon" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/flagship/icon/detail_arrow_mobile.png`}}>
            <span>자세히 보기</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default MainSectionTwo;
