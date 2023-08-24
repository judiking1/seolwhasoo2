import React, { useEffect, useRef } from 'react'
import './SectionJourney.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JourneyData } from './SectionJourneyData'
function SectionJourney() {
  
  const listRef = useRef(null);
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const list = listRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky",
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        start: "top top",
        end: "100%",
      },
      defaults: { ease: "none", duration: 1 },
    });

    timeline
      .add("start")
      .fromTo(
        ".indicator_bar",
        { width: "0%" },
        {
          width: "100%",
        },
        "start"
      )
      .to(
        ".swiper_list",
        {
          x: function () {
            return (
              -(list.scrollWidth - document.documentElement.clientWidth) +
              "px"
            );
          },
        },
        "start"
      );
      setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);  // 100ms 뒤에 초기화
    
    return () => {
      // ScrollTrigger 인스턴스 정리
      timeline.scrollTrigger.kill();
      gsap.killTweensOf(timeline);
    };
  }, []);

  return (
    <section className="journey" id="journey">
      <div className="section_inner">
        <div className="sticky">
          <div className="section_contents">
            <div className="section_header">
              <p>our journey</p>
            </div>
            <div className="section_body">
              <div className="horizontal_scroll">
                <div className="swiper_list" ref={listRef}>
                  {JourneyData.map((item, index) => (
                    <div key={index} className={`swiper_list_item ${item.class}`}>
                        <div className="item_inner">
                            <div className="journey_img">
                                <img src={item.img} alt={`사진${index+1}`} />
                            </div>
                            <div className="text_wrap">
                                <p className="text_y">{item.year}</p>
                                <p className="text_m">{item.mainText}</p>
                                <p className="text_s">{item.description}</p>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
                <div className="indicator">
                  <div className="indicator_bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionJourney