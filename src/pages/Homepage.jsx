import React from 'react'
import Hero from '../components/Hero'
import Heroright from '../components/Heroright'
import Start from '../components/Start'
import './Homepage.css'
import leftImage from '../assets/images/programming_hero.jpeg'; // Local import
import rimage from '../assets/images/magic_hero.jpg'
import bill from '../assets/images/guitar.jpeg'
import Skills from '../components/Skills'
// import rightImage from './assets/images/right-image.jpg'; // Local import

const Homepage = () => {
  return (
    <div>
      <Start></Start>
      <div className="hobs">My Hobbies</div>
      <Hero tag="AI/ML, Websites, Android & iOS Apps" title="Programming" subtitle="Checkout my Github" leftImage={leftImage} tagColor="#6eba00 " goto="https://github.com/ShivtejGhatage/"/>
      

         <Heroright tag="Hobby" title="Guitar" subtitle="" rightImage={bill} tagColor="#7937b2" showButton= {false}/>
       <div className="text">
       Water tax billing systems are an essential part of modern water management infrastructure. This platform streamlines the process of calculating and issuing water bills based on real-time usage data. By leveraging smart meters and automated systems, the platform ensures accurate billing, faster payment processing, and helps reduce discrepancies in water tax charges. It also provides an online interface for users to view and pay their bills conveniently.</div> 

       <Hero tag="Hobby" title="Magic" subtitle="Card Tricks, Cardistry and Juggling" leftImage={rimage} tagColor="#1e79ae" showButton={false}/>
       
       <div className="hobs">Technologies</div>

        <Skills></Skills>
    </div>
  )
}

export default Homepage
