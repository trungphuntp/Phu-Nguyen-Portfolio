"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LenisScroll from "@/app/context/LenisScroll/page";
export default function Page() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        markers: true,
      },
      x: 400,
      rotation: 360,
      duration: 3,
    });
  }, []);

  return (
    <main style={{ height: "2000px", padding: "50px" }}>
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "200px",
          background: "red",
          marginTop: "500px",
        }}
      >
        Hello ScrollTrigger + Lenis
      </div>
    </main>
  );
}
