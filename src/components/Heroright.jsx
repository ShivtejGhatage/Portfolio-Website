import React, { useEffect, useState, useRef } from 'react';
import './Heroright.css';
import GetAppButton from './GetAppButton';

const Heroright = ({ tag, title, subtitle, rightImage, tagColor, goto,showButton=true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null); // Create a reference for this Hero component

  // Set up the Intersection Observer to detect when this specific Hero component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the Hero component enters the viewport
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      { threshold: 0.3 } // Trigger when 50% of the Hero component is in view
    );

    // Start observing this Hero component
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="hr">
    <div
      ref={heroRef} // Assign the ref to the Hero component div
      className={`Herodivr ${isVisible ? 'visible' : ''}`} // Trigger animation when visible
    >
      
      <div className="contentr">
        <div className="tagr" style={{ backgroundColor: tagColor }}>
          {tag}
        </div>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div></div>
        {showButton && <GetAppButton to={goto} />}
      </div>
      <div
        className="heroimgr"
      >
        <div
        className="heroimginr"
        style={{ backgroundImage: rightImage ? `url(${rightImage})` : 'none' }}
      >
        
      </div>
      </div>
    </div>
    </div>
  );
};

export default Heroright;
