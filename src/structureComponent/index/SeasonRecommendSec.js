import React from 'react'
import './seasonRecommend_sec.css'

function SeasonRecommend_sec() {
  return (
    <section className="season_recommend w1440">
          <h2>설화수 시즌추천</h2>
          <div className="card_section">
            <div className="card_section_container">
              <div className="card01 cardBox">
                <article><img src={`${process.env.PUBLIC_URL}/images/main/season01.png`} alt="시즌제품1"></img></article>
                <div className="card01_txt">
                  <h3>자음생세럼</h3>
                  <p className="detail_info">Concentrated Ginseng Renewing Serum EX</p>
                  <p className="price">220,000원</p>
                </div>
              </div>
              <div className="card02 cardBox">
                <article>
                  <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/images/main/season_640.jpg`} media="(max-width: 767px)"></source>
                    <source srcSet={`${process.env.PUBLIC_URL}/images/main/season_708.jpg`} media="(min-width: 768px)"></source>
                    <img src={`${process.env.PUBLIC_URL}/images/main/season_708.jpg`} alt="시즌제품2"></img>
                  </picture>
                  <div className="card02_txt">
                    <h3>자음생 듀오</h3>
                    <p>안티에이징의 결정체, 진세노믹스™ <br /> 자음생듀오로 피부 자생력을 키워주세요.</p>
                  </div>
                </article>
              </div>
              <div className="card03 cardBox">
                <article><img src={`${process.env.PUBLIC_URL}/images/main/season03.jpg`} alt="시즌제품3"></img></article>
                <div className="card03_txt">
                  <h3>자음생크림</h3>
                  <p className="detail_info">Concentrated Ginseng Renewing Cream EX</p>
                  <p className="price">270,000원</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default SeasonRecommend_sec
