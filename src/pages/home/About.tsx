import {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About() {
  const aboutAnimation = useRef(null);

  useGSAP(
    () => {
      /* About load animation */

      gsap
        .timeline({scrollTrigger: {trigger: ".lines", start: "top 95%", end: "top 20%", scrub: 1}})
        .from(".lines .line-sm", {y: 10, opacity: 0, duration: 0.5, ease: "power2.out"})
        .from(".lines .line-md", {y: 15, opacity: 0, duration: 0.5, ease: "power2.out"}, "-=0.3")
        .from(".lines .line-lg", {y: 20, opacity: 0, duration: 0.5, ease: "power2.out"}, "-=0.3");

      /* Interests load animation */

      gsap
        .timeline({
          scrollTrigger: {trigger: ".container", start: "top top", end: "bottom center", pin: true, scrub: 1},
        })
        .from(".about-section", {rotate: -20, y: 200, x: -200, duration: 0.5, ease: "power2.out"})
        .from(".interests .text-card:nth-child(1)", {y: 600, duration: 0.5, ease: "power2.out"}, "-=0.25")
        .from(".interests .text-card:nth-child(2)", {y: 700, duration: 0.5, ease: "power2.out"}, "-=0.25")
        .from(".interests .text-card:nth-child(3)", {y: 800, duration: 0.5, ease: "power2.out"}, "-=0.25")
        .from(".interests .text-card:nth-child(4)", {y: 900, duration: 0.5, ease: "power2.out"}, "-=0.25")
        .from(".interests .text-card:nth-child(5)", {y: 250, duration: 0.5, ease: "power2.out"}, "-=0.25")
        .from(".interests .text-card:nth-child(6)", {y: 300, duration: 0.5, ease: "power2.out"}, "-=0.25");
    },

    {scope: aboutAnimation},
  );

  return (
    <div className="about" ref={aboutAnimation}>
      <div className="container">
        <div className="lines">
          <div className="line-sm"></div>
          <div className="line-md"></div>
          <div className="line-lg"></div>
        </div>
        <div className="even-columns | gap-lg">
          <div className="about-section | text-card">
            <p>
              I'm a Uk based <span className="accent | bold">creative web developer</span> with a strong background in graphic design. I work with a wide range of tools and pride myself on my adaptability and ability to quickly learn new technologies.
            </p>
            <br />
            <p>My unique combination of design and development skills enables me to understand both the aesthetic and technical aspects of a project.</p>
          </div>
          <div className="interests | flex-group | gap-lg">
            <div className="text-card">
              <p>I enjoy crafting scalable stylesheets using tools like Sass to ensure maintainability and efficiency in web development projects.</p>
            </div>
            <div className="text-card">
              <p>Animating interfaces with GSAP is a passion of mine, where I explore dynamic visual storytelling and user engagement.</p>
            </div>
            <div className="text-card">
              <p>Exploring frameworks beyond React allows me to broaden my perspective and skill set in frontend development.</p>
            </div>
            <div className="text-card">
              <p>Exploring frameworks beyond React allows me to broaden my perspective and skill set in frontend development.</p>
            </div>
            <div className="text-card">
              <p>Exploring frameworks beyond React allows me to broaden my perspective and skill set in frontend development.</p>
            </div>
            <div className="text-card">
              <p>Exploring frameworks beyond React allows me to broaden my perspective and skill set in frontend development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
