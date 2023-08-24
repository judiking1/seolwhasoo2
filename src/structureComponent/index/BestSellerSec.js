import React from 'react'
import './bestseller_sec.css'

function BestSeller_sec() {
  return (
    <section className="bestseller w1440">
          <picture>
            <source srcSet={`${process.env.PUBLIC_URL}/images/main/bestseller_1440.jpg`} media="(min-width: 768px)"></source>
            <img src={`${process.env.PUBLIC_URL}/images/main/bestseller_640.jpg`} alt="베스트셀러"></img>
          </picture>
          <div className="bestseller_txt">
            <h2>베스트 셀러</h2>
            <p>건강하게 빛나고 힘 있게 채우는 <br/> 설화수의 시그니처 케어</p>
            <button>자세히 보기</button>
          </div>
        </section>
  )
}

export default BestSeller_sec
