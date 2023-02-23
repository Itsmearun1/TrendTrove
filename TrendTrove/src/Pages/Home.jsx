import React from 'react'
import "../Components/Slider.css";
import "./Home.css"
import Slider1 from '../Components/Slider'
import Slider2 from '../Components/Slider'
import Slider3 from '../Components/Slider3';
import Slider4 from '../Components/Slider4';
const Home = () => {
  return (
    <div className='wrapper'>
      <Slider1/>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D1-1440x90-11.jpg" id="zoom"/>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg" id="zoom"/>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-SpecieUpYourBrandGame-SectionheaderStrip.jpg" id="zoom"/>
      <Slider2/>
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Sectionheader.jpg" alt="" id="zoom" />
      <div className='imgbox1'>
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Relianceone.jpg" alt="" />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-Relianceone.jpg" alt="" />
        <img src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Rewards-inviteFriends.jpg" alt="" />
      </div>
      <Slider3/>
      <Slider4/>
      </div>
  )
}

export default Home