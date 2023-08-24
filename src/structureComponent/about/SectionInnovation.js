import React from 'react'
import './SectionInnovation.css';

function SectionInnovation() {
  return (
    <section className="innovation" id="innovation">
        <div className="section_inner">
            <div className="section_body">
                <div className="section_text" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <h1>
                    OUR INNOVATION
                </h1>
                <h2>
                    설화수의 중추에는 설화수 한방 과학 연구 센터가 있습니다.
                    <br/>
                    <span className="mo-margin"></span>
                    설화수 한방 과학 연구 센터는 아시아의 지혜와 현대 과학을
                    <br className="mo-only"/>
                    끊임없이 접목하며 설화수만의 혁신을 이끌고 있습니다.
                    <br/>
                    <span className="mo-margin"></span>
                    1960년대부터 시작된 설화수의 인삼 연구는 자연의 재료로 만든
                    <br className="mo-only"/>
                    독보적 화장품을 만들기 위해 50여 년이 넘도록 계속되어 왔습니다.
                    <br/>
                    <span className="mo-margin"></span>
                    발전에 발전을 거듭한 현재, 설화수 한방 과학 연구 센터는
                    <br className="mo-only"/>
                    건강한 피부를 위한 최고의 솔루션을 끊임없이 만들어내고 있습니다.
                </h2>
                </div>
                <div className="section_img" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="center-bottom">
                    <picture>
                        <source media="(max-width: 750px)" srcSet={`${process.env.PUBLIC_URL}/images/about/brand_belief_content_img03_mo_kr_230511.jpg`}/>
                        <source media="(min-width: 1023px)" srcSet={`${process.env.PUBLIC_URL}/images/about/brand_belief_content_img03_pc_kr_230511.jpg`}/>
                        <img src={`${process.env.PUBLIC_URL}/images/about/brand_belief_content_img03_pc_kr_230511.jpg`} alt="이미지 설명"/>
                    </picture>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionInnovation