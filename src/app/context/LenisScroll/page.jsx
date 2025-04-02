// components/LenisScroll.js
"use client";

import { useEffect, useRef, createContext, useContext, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Tạo context để chia sẻ instance lenis
const LenisContext = createContext(null);

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      gestureOrientation: "vertical",
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenisScroll: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}

export const useLenis = () => useContext(LenisContext);
