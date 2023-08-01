import React from 'react';
import { motion } from 'framer-motion';
import Path from '../assets/configs/svgpath';

function WelcomePage() {
  const draw = {
    hidden: { opacity: 0, pathLength: 0, stroke: '#ffffff' },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        default: { duration: 2 },
        pathLength: { ease: "easeInOut", duration: 20 },
        opacity: { ease: "easeInOut", duration: 2 }
      },
    }
  };

  // An example of SVG path for a rectangle, replace it with your own path
  const path = Path

  return (
    <div className="title">
      <motion.svg
          width="850"
          height="75"
          viewBox="0 -2 900 100"
      >
          <motion.path
              d={path}
              fill="transparent"
              strokeWidth="4"
              stroke="#D3DDE7"
              variants={draw}
              initial="hidden"
              animate="visible"
          />
      </motion.svg>
    </div>
  )
}


export default WelcomePage;
