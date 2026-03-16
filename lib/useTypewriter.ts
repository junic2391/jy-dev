import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed = 50, delay = 300, enabled = true) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    setDisplayed("");
    setDone(false);
    const delayTimer = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(delayTimer);
  }, [text, speed, delay, enabled]);

  return { displayed, done };
}
