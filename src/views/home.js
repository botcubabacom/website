import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Embellished Hearty Gull</title>
        <meta property="og:title" content="Embellished Hearty Gull" />
      </Helmet>
      <span className="home-text">Botcu Baba</span>
      <span className="home-text1">
        <span>En akıllı Knight Online makrosu!</span>
        <br></br>
        <span>Zekasıyla basit kullanım ve yüksek performans sunar</span>
      </span>
      <img
        alt="header"
        src="/knight-online-1500w.jpg"
        loading="eager"
        className="home-image"
      />
      <img
        alt="image"
        src="/dark-2000w.jpg"
        loading="eager"
        className="home-image1"
      />
      <a
        href="https://dosya.co/jstk4tu20gwo/mysetup.exe.html"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <span>İndir</span>
        <br></br>
      </a>
      <a
        href="https://www.shopier.com/ShowProductNew/products.php?id=4140718"
        className="home-link1"
      >
        Satın Al
      </a>
    </div>
  )
}

export default Home
