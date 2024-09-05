import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const FlagFun = ({ imageUrl, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const flagRef = useRef(null);

  const springProps = useSpring({
    opacity: isHovered ? 1 : 0.7,
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0px)',
    delay: delay,
    config: { mass: 1, tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={springProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={flagRef}
    >
      <img src={imageUrl} alt="flag" style={{ width: '100px', height: '60px' }} />
    </animated.div>
  );
};

export default FlagFun;