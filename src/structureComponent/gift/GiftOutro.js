import React from 'react'
import './gift_outro.css'

function Gift_outro() {
  return (
    <section className="gift_outro" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500">
      <div className="outro_img">
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}/images/gift/sulwhasoo_gift_outro_img_pc_kr_230705.jpg`} media="(min-width: 768px)"></source>
          <img src={`${process.env.PUBLIC_URL}/images/gift/sulwhasoo_gift_outro_img_mo_kr_230705_360.jpg`} alt="기프트배너"></img>
        </picture>
      </div>
    </section>
  )
}

export default Gift_outro
