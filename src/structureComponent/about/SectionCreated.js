import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


function SectionCreated() {
  return (
    <section className="created" id="created">
        <div className="section_inner">
            <div className="section_body">
                <div className="section_text" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                    <h1>
                        CREATED
                        <br className="mo-only"/>
                        BY SULWHASOO
                    </h1>
                    <h2>
                        설화수가 만드는 제품은 한국의 미학과 현대적 감성이
                        <br className="mo-only"/>
                        조화롭게 공존하는 혁신의 결정체입니다.
                        <br/>
                        <span className="mo-margin"></span>
                        아름다운 피부를 위한 끊임 없는 노력과 수십년의 연구로
                        <br className="mo-only"/>
                        일구어낸 결과물입니다.
                        <br/>
                        <span className="mo-margin"></span>
                        세대와 시간을 초월해 사랑받는 설화수의 제품은
                        <br className="mo-only"/>
                        예술 작품과도 같습니다.
                    </h2>
                </div>

                <Swiper 
                    className="swiper_created" 
                    slidesPerView="auto" 
                    freeMode={true} 
                    data-aos="fade-up" 
                    data-aos-duration="1000" 
                    data-aos-anchor-placement="top-bottom"
                >
                    <SwiperSlide>
                        <img src={`${process.env.PUBLIC_URL}/images/about/brand_belief_content01_item01_kr_230511.jpg`} alt="created"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`${process.env.PUBLIC_URL}/images/about/brand_belief_content01_item02_kr_230511.jpg`} alt="created"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={`${process.env.PUBLIC_URL}/images/about/brand_belief_content01_item03_kr_230511.jpg`} alt="created"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default SectionCreated