import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.css";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const LoadingScreen = () => {
  const [hide, setHide] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let t1;
    let t2;

    const playCurtain = () => {
      t1 = setTimeout(() => setHide(true), 400);
      t2 = setTimeout(() => setGone(true), 400 + 1500);
    };

    if (document.readyState === "complete") {
      playCurtain();
    } else {
      window.addEventListener("load", playCurtain);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("load", playCurtain);
    };
  }, []);

  if (gone) return null;

  return (
    <div className="loading-screen">
      <motion.video
        className="loading-screen-video"
        src="/loading-horse.mp4"
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 1 }}
        animate={{ opacity: hide ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="loading-blocks">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="loading-row" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                key={blockIndex}
                className="loading-block"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: hide ? 0 : 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: calculateRandomBlockDelay(rowIndex, 10),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
