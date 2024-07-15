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
        .to(".hero__heading__blackman .c", {rotate: 360, duration: 6, repeat: -1, ease: "none"})
        .from(".hero__heading__blackman .k", {scale: 0, duration: 2, ease: "elastic.out(1, 0.3)"}, "-=6.6")
        .from(".hero__heading__blackman .m", {y: -50, opacity: 0, duration: 1, ease: "bounce.out"}, "-=1")
        .from(".hero__heading__blackman .a2", {scale: 0, duration: 1.5, ease: "elastic.out(1, 0.3)"}, "-=1.5")
        .from(".hero__heading__blackman .n", {x: 100, opacity: 0, duration: 1, ease: "power3.out"}, "-=1")
        .to(".hero__scroll", {y: -20, duration: 0.6, ease: "power2.out", yoyo: true, repeat: -1}, "+=1.6");
    },
    {scope: heroAnimation},
  );

  return (
    <section className="hero" ref={heroAnimation}>
      <div className="container flex-group">
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
            <div className="hero__svg-container">
              <svg className="c" width="100%" height="100%" viewBox="0 0 337 337" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M286.756 49.1395C274.066 36.4492 246.095 41.7233 212.42 60.3054C201.748 23.4421 185.718 0 167.797 0C148.611 0 131.595 26.8635 120.997 68.2975C82.6404 49.949 51.3099 45.7963 39.0208 60.4373C28.3785 73.1163 34.0925 97.4165 51.8695 126.17C19.9031 136.76 0 151.666 0 168.18C0 186.047 23.2983 202.032 59.9657 212.705C41.3287 246.435 36.0266 274.458 48.7322 287.163C61.424 299.855 89.3997 294.578 123.08 275.99C133.753 313.038 149.823 336.616 167.797 336.616C186.908 336.616 203.867 309.96 214.473 268.798C253.012 287.309 284.518 291.542 296.85 276.85C307.563 264.088 301.703 239.552 283.65 210.551C316.257 199.94 336.616 184.882 336.616 168.18C336.616 150.151 312.894 134.038 275.65 123.366C294.184 89.7397 299.432 61.816 286.756 49.1395Z" fill="#FF78E2" />
                <circle cx="168.5" cy="168.5" r="52.5" fill="#F5F5F4" />
              </svg>
            </div>
            <div className="k">k</div>
            <div className="m">m</div>
            <div className="a2">a</div>
            <div className="n">n</div>
          </div>
        </h1>
        <h2 className="hero__scroll">Scroll down...</h2>
      </div>
    </section>
  );
}

export default Hero;
