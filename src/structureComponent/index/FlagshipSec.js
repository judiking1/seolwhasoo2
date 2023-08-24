import React from 'react'
import {Link} from 'react-router-dom'
import './flagship_sec.css'

function Flagship_sec() {
  return (
    <section className="flagship w1440">
          <div className="flagship_container">
            <div className="bukchon_box">
              <Link to="#" className="bukchon">
                <article><img src={`${process.env.PUBLIC_URL}/images/main/bukchon.jpg`} alt="북촌"></img></article>
                <h2>설화수 북촌 플래그십 스토어</h2>
                <button>자세히 보기</button>
              </Link>
            </div>
            <div className="dosan_box">
              <Link to="#" className="dosan">
                <article><img src={`${process.env.PUBLIC_URL}/images/main/dosan.jpg`} alt="도산"></img></article>
                <h2>설화수 도산 플래그십 스토어</h2>
                <button>자세히 보기</button>
              </Link>
            </div>
          </div>
        </section>
  )
}

export default Flagship_sec
