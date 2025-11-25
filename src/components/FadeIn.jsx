import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  
  // تحديد اتجاه الحركة
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.6, // مدة الحركة
        delay: delay,  // التأخير
        ease: [0.25, 0.25, 0.25, 0.75], // نوع الحركة (ناعمة)
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // الحركة تحصل مرة واحدة بس لما العنصر يظهر
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;