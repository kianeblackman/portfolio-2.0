import { useState, useEffect } from "react";

function Hero() {
  const [time, setTime] = useState(new Date());

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

  return (
    <>
      <h2>London, {ukTime}</h2>
      <h1>Kiane Blackman</h1>
      <h2>Scroll down...</h2>
    </>
  );
}

export default Hero;
