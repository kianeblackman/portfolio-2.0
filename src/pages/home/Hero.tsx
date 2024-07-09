import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Hero() {
  const [time, setTime] = useState(new Date());
  const container = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
  };

  const ukTime = time.toLocaleTimeString("en-GB", options);

  useGSAP(() => {
    gsap.fromTo(
      ".kiane",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power4.easeInOut", delay: 1 }
    );

    gsap.fromTo(
      ".blackman",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power4.easeInOut", delay: 0.5 }
    ),
      { scope: container };
  });

  return (
    <>
      <h2 className="time">London, {ukTime}</h2>
      <h1 className="home_hero heading" ref={container}>
        <span className="home_hero kiane">
          <span className="k">K</span>
          <span className="i">I</span>
          <span className="a">A</span>
          <span className="n">N</span>
          <span className="e">E</span>
        </span>
        <span className="home_hero blackman">
          <span className="b">B</span>
          <span className="l">L</span>
          <span className="a">A</span>
          <span className="c">C</span>
          <span className="k">K</span>
          <span className="m">M</span>
          <span className="a">A</span>
          <span className="n">N</span>
        </span>
      </h1>
      <h2>Scroll down...</h2>
    </>
  );
}

export default Hero;
