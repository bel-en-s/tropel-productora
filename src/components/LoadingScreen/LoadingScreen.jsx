import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const screenRef = useRef();
  const tweenRef = useRef();

  useEffect(() => {
    let timer;

    const playCurtain = () => {
      tweenRef.current = gsap.to(screenRef.current, {
        yPercent: -100,
        duration: 2.2,
        ease: "power4.inOut",
        onComplete: () => {
          if (screenRef.current) screenRef.current.style.display = "none";
        },
      });
    };

    if (document.readyState === "complete") {
      timer = setTimeout(playCurtain, 400);
    } else {
      window.addEventListener("load", playCurtain);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", playCurtain);
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  return (
    <div className="loading-screen" ref={screenRef}>
      <video
        className="loading-screen-video"
        src="/home/hero.mp4"
        poster="/home/hero.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default LoadingScreen;
