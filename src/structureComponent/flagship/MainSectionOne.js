import React from "react";
import { Link } from "react-router-dom";
import './MainSectionOne.css';
import styled from 'styled-components';

const Section = styled.section`
&::before {
  background-image: url(${process.env.PUBLIC_URL}/images/flagship/main/intro_dosan_mobile.jpg);
}

@media only all and (min-width: 1024px) {
  &::before {
    background-image: url(${process.env.PUBLIC_URL}/images/flagship/main/intro_dosan.jpg);
  }
}
`;

function MainSectionOne() {
  return (
    <Section className="sec_1">
      <div className="text_cover">
        <h2>
          Dosan <br />
          Flagship <br />
          Store
        </h2>
        <p className="p_web">
          등불이 어둠을 밝혀 길을 안내하듯 <br />
          아름다움을 널리 비추다
        </p>
        <div>
          <Link to="/flagshipDosan" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/flagship/icon/detail_arrow_mobile.png`}}>
            <span>자세히 보기</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default MainSectionOne;
