import Hero from "./Hero.tsx";
import About from "./About.tsx";

function Home() {
  return (
    <div id="home" className="wrapper">
      <Hero />
      <About />
    </div>
  );
}

export default Home;
