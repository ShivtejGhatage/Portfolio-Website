import React from 'react'
import './Start.css'
import { useSpring, animated } from '@react-spring/web';  // Import React Spring
import iitbImage from '../assets/images/s3.gif';

const Start = ({title, subtitle}) => {
  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1G9SPeMvYLELPCIxOEy7mS9yzEPXKbbpk/view?usp=drive_link', '_blank'); // "_blank" opens in a new tab
      };
      
  const titleSProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 170, friction: 26 },  // Customize speed of the animation
    delay: 300,  // Delay before the animation starts
  });

  // Defining the animation for the "I am Shivtej" text
  const titleSredProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 170, friction: 26 },  // Customize speed of the animation
    delay: 800, // Delay before the animation starts
  });
  const subtitleProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 170, friction: 26 },  // Customize speed of the animation
    delay: 1300, // Delay before the animation starts
  });
  return (
    <div className='Startdiv'>
      <div className="st">
      <animated.div className="titleS" style={titleSProps}>
        Welcome
      </animated.div>
      <animated.div className="titleSred" style={titleSredProps}>
        I am Shivtej
      </animated.div>
        
      
      <animated.div className="subtitleS" style={subtitleProps}>
        An Electrical Engineering Student at the 
      </animated.div>
      <animated.div className="subtitleS" style={subtitleProps}>
         Indian Institute of Technology, Bombay
      </animated.div>

    <button className="redbutton" onClick={handleClick}>
      Curriculum Vitae
      <span className="arrow">→</span>
    </button>
      {/* <button className='redbutton'>
      </button> */}

      </div>
      <div className="purpSuper">
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div class="elfsight-app-f984956c-91bc-494b-828b-0a31387ea7a5" data-elfsight-app-lazy></div>
        <div className="purp">
        <img src={iitbImage} className="iitb" alt="ssvrrw" />
        </div>     
      </div>
    </div>
  )
}

export default Start
