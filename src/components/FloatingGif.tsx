import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

interface FloatingGifProps {
  isVideoPlaying?: boolean;
}

const gifs = [
  { src: "/images/floating/robot-float.gif", alt: "Робот парит" },
  { src: "/images/floating/robot-glow.gif", alt: "Робот светится" },
  { src: "/images/floating/robot-wave.gif", alt: "Робот машет" }
];

export default function FloatingGif({ isVideoPlaying = false }: FloatingGifProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const positionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVideoPlayingRef = useRef(isVideoPlaying);

  const getRandomPosition = useCallback(() => {
    const size = 80;
    const padding = 30;
    const maxX = window.innerWidth - size - padding;
    const maxY = window.innerHeight - size - padding;
    return { 
      x: Math.random() * maxX + padding, 
      y: Math.random() * maxY + padding 
    };
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isVideoPlaying) {
        setPosition(getRandomPosition());
        setIsVisible(true);
      }
    }, 15000);
  }, [isVideoPlaying, getRandomPosition]);

  const switchGifAndPosition = useCallback(() => {
    setCurrentGifIndex((prev) => (prev + 1) % gifs.length);
    setPosition(getRandomPosition());
  }, [getRandomPosition]);

  useEffect(() => {
    if (isVisible) {
      positionTimerRef.current = setInterval(() => {
        switchGifAndPosition();
      }, 8000);
    }
    return () => {
      if (positionTimerRef.current) clearInterval(positionTimerRef.current);
    };
  }, [isVisible, switchGifAndPosition]);

  useEffect(() => {
    isVideoPlayingRef.current = isVideoPlaying;
  }, [isVideoPlaying]);

  useEffect(() => {
    if (isVideoPlaying) return;
    resetTimer();

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    const handleActivity = () => {
      if (isVisible) {
        setIsVisible(false);
      }
      if (!isVideoPlayingRef.current) {
        resetTimer();
      }
    };

    events.forEach(event => window.addEventListener(event, handleActivity));

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (positionTimerRef.current) clearInterval(positionTimerRef.current);
      events.forEach(event => window.removeEventListener(event, handleActivity));
    };
  }, [isVisible, resetTimer, isVideoPlaying]);

  useEffect(() => {
    if (isVideoPlaying && isVisible) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [isVideoPlaying, isVisible]);

  useEffect(() => {
    if (isVideoPlaying && isVisible) {
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [isVideoPlaying, isVisible]);

  useEffect(() => {
    if (!isVideoPlaying && timerRef.current === null && !isVisible) {
      resetTimer();
    }
  }, [isVideoPlaying, isVisible, resetTimer]);

  const handleClose = () => {
    setIsVisible(false);
    if (!isVideoPlaying) resetTimer();
  };

  const currentGif = gifs[currentGifIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            zIndex: 9999,
            cursor: 'pointer',
            width: '80px',
            height: '80px',
          }}
          onClick={handleClose}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-[-6px] rounded-full bg-purple-500/30 blur-md animate-pulse" />
            <img
              src={currentGif.src}
              alt={currentGif.alt}
              className="w-full h-full object-contain rounded-full shadow-2xl"
              onDragStart={(e) => e.preventDefault()}
              style={{
                filter: `drop-shadow(0 0 10px rgba(79, 70, 229, 0.6))`
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}