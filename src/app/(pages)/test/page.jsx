"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollBallsSection() {
  const sectionRef = useRef(null);
  const ballsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000", // scroll dài hơn
          scrub: true,
          pin: true,
          markers: true, // xoá đi khi xong
        },
      });

      // 5 animation cho 5 quả cầu, lần lượt
      ballsRef.current.forEach((ball, index) => {
        tl.to(
          ball,
          {
            x: "-100vw", // di chuyển từ phải sang trái
            ease: "none",
          },
          index * 0.2 // delay theo index (chia đều trong timeline)
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      {/* Text box cố định */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-4xl font-bold">Hiệu ứng nền khi scroll</h1>
        <p className="mt-4 text-lg">
          5 quả cầu sẽ xuất hiện dần khi bạn scroll
        </p>
      </div>

      {/* Background balls */}
      <div className="absolute inset-0 flex items-center justify-end gap-10 pr-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (ballsRef.current[i] = el)}
            className="w-20 h-20 rounded-full bg-pink-400 opacity-80"
          />
        ))}
      </div>
    </section>
  );
}
