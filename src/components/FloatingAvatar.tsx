import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { aiFunFacts } from '../data/aiFunFacts';

function FloatingAvatar() {
  const [isDragging, setIsDragging] = useState(false);
  const [bounds, setBounds] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState('');
  const avatarRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    const updateBounds = () => {
      if (avatarRef.current) {
        const avatarWidth = avatarRef.current.offsetWidth;
        const avatarHeight = avatarRef.current.offsetHeight;
        
        setBounds({
          left: -window.innerWidth + avatarWidth + 20,
          right: -20,
          top: -window.innerHeight + avatarHeight + 20,
          bottom: -20
        });
      }
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  useEffect(() => {
    let timeoutId: number;
    
    const animate = () => {
      if (!isDragging) {
        const time = Date.now() * 0.001;
        const radius = 30;
        
        const newX = Math.sin(time) * radius;
        const newY = Math.sin(time * 2) * radius / 2;
        
        x.set(Math.max(bounds.left, Math.min(bounds.right, newX)));
        y.set(Math.max(bounds.top, Math.min(bounds.bottom, newY)));
      }
      
      timeoutId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(timeoutId);
  }, [isDragging, x, y, bounds]);

  const handleClick = () => {
    if (!isDragging) {
      const randomFact = aiFunFacts[Math.floor(Math.random() * aiFunFacts.length)];
      setCurrentFact(randomFact);
      setShowFact(true);
      setTimeout(() => setShowFact(false), 5000);
    }
  };

  return (
    <motion.div
      ref={avatarRef}
      drag
      dragMomentum={false}
      dragConstraints={bounds}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onClick={handleClick}
      style={{
        x: xSpring,
        y: ySpring,
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 50,
      }}
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 1.2 }}
    >
      {/* Fun Fact Message */}
      <AnimatePresence>
        {showFact && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-64"
          >
            <div className="bg-white px-4 py-2 rounded-xl shadow-lg border-2 border-blue-200">
              <p className="text-blue-600 text-sm">{currentFact}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Weee Message */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isDragging ? {
          opacity: [0, 1, 1, 0],
          y: [-20, -30, -40, -50],
          x: [-10, 10, -10, 10]
        } : { opacity: 0, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
      >
        <div className="bg-white px-3 py-1 rounded-full shadow-lg">
          <span className="text-blue-500 font-bold text-lg">weeeeeeeee!</span>
        </div>
      </motion.div>

      <div className="relative w-16 h-16 cursor-grab active:cursor-grabbing">
        {/* Main Robot Body */}
        <div className="w-16 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full relative overflow-hidden border-2 border-white shadow-lg">
          {/* Face */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Eyes */}
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{
                  scale: isDragging ? [1, 1.2, 1] : 1,
                }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="w-2.5 h-2.5 bg-white rounded-full"
              />
              <motion.div
                animate={{
                  scale: isDragging ? [1, 1.2, 1] : 1,
                }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="w-2.5 h-2.5 bg-white rounded-full"
              />
            </div>
          </div>
          {/* Smile */}
          <motion.div
            animate={{
              scaleX: isDragging ? 1.2 : 1,
              y: isDragging ? 2 : 0,
            }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-white rounded-full border-t-0"
          />
        </div>

        {/* Antenna */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-3 bg-white rounded-full" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
            className="w-3 h-3 bg-blue-300 rounded-full -mt-1"
          />
        </div>

        {/* Small Decorative Circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 -left-1 w-3 h-3 bg-blue-300 rounded-full border border-white" />
          <div className="absolute top-1/2 -right-1 w-3 h-3 bg-blue-300 rounded-full border border-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FloatingAvatar;