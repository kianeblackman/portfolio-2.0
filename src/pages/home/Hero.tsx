import {useState, useEffect, useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Hero() {
  const [time, setTime] = useState(new Date());
  const heroAnimation = useRef(null);

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

  useGSAP(
    () => {
      const tl = gsap.timeline({delay: 1});
      tl.from(".hero__heading__kiane .k", {x: -50, opacity: 0, duration: 1.5, ease: "power3.out"})
        .from(".hero__heading__kiane .i", {y: -50, opacity: 0, duration: 1, ease: "bounce.out"}, "-=1")
        .from(".hero__heading__kiane .a", {scale: 0, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1.5")
        .from(".hero__heading__kiane .n", {x: 100, opacity: 0, duration: 1, ease: "power3.out"}, "-=1")
        .from(".hero__heading__kiane .e", {rotate: 360, opacity: 0, duration: 2, ease: "back.out(1.7)"}, "-=1.5")
        .from(".hero__heading__blackman .b", {y: -50, opacity: 0, duration: 1, ease: "bounce.out"}, "-=1")
        .from(".hero__heading__blackman .l", {scale: 0, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1.5")
        .from(".hero__heading__blackman .a1", {x: 100, opacity: 0, duration: 1, ease: "power3.out"}, "-=1")
        .from(".hero__heading__blackman .c", {rotate: 360, opacity: 0, duration: 2, ease: "back.out(1.7)"}, "-=1.5")
        .from(".hero__heading__blackman .k", {scale: 0, duration: 2, ease: "elastic.out(1, 0.3)"}, "-=1.5")
        .from(".hero__heading__blackman .m", {y: -50, opacity: 0, duration: 1, ease: "bounce.out"}, "-=1")
        .from(".hero__heading__blackman .a2", {scale: 0, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1.5")
        .from(".hero__heading__blackman .n", {x: 100, opacity: 0, duration: 1, ease: "power3.out"}, "-=1")
        .to(".hero__heading__kiane .k", {rotateY: 360, duration: 1, ease: "none", repeat: -1, repeatDelay: 2, yoyo: true}, "+=2")
        .to(".hero__scroll", {y: -20, duration: 0.6, ease: "power2.out", yoyo: true, repeat: -1}, "-=1");
    },
    {scope: heroAnimation},
  );

  return (
    <section className="hero" ref={heroAnimation}>
      <h2 className="hero__time">London, {ukTime}</h2>
      <h1 className="hero__heading">
        <div className="hero__heading__kiane">
          <div className="k">K</div>
          <div className="i">i</div>
          <div className="a">a</div>
          <div className="n">n</div>
          <div className="e">e</div>
        </div>
        <div className="hero__heading__blackman">
          <div className="b">B</div>
          <div className="l">l</div>
          <div className="a1">a</div>
          <div className="c">c</div>
          <div className="k">k</div>
          <div className="m">m</div>
          <div className="a2">a</div>
          <div className="n">n</div>
        </div>
      </h1>
      <h2 className="hero__scroll">Scroll down...</h2>
    </section>
  );
}

export default Hero;
