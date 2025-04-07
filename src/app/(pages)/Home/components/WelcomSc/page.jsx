"use client";

import WelcomComponent from "@/app/components/WelcomComponent/page";
import { useContextHeader } from "@/app/context/ContextHeader/page";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WelcomSc = ({}) => {
  const { handleSetShowScroll } = useContextHeader();
  const sectionRef = useRef(null);
  const elA = useRef(null);
  const elB = useRef(null);
  const elC = useRef(null);
  const textboxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pin: true,
        },
      });

      [elC, elB, elA].forEach((el, index) => {
        tl.to(
          el.current,
          {
            right: `100%`,
            ease: "power1.inOut",
          },
          index * 0.3 // delay giữa các phần tử
        );
      });

      tl.to(
        textboxRef.current,
        {
          left: "50%",
          scale: "1.5",
          ease: "power1.inOut",
        },
        1
      );

      // header scroll
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        onLeave: () => {
          handleSetShowScroll?.(true);
        },
        onEnterBack: () => {
          handleSetShowScroll?.(false);
        },
        markers: false,
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      trigger.kill();
    };
  }, []);

  return (
    <section
      className=" WelcomSc relative flex items-center bg-black h-screen overflow-x-hidden"
      ref={sectionRef}
    >
      <div
        ref={textboxRef}
        className="absolute top-1/2 -translate-y-1/2 left-[30%] scale-[1] -translate-x-1/2  z-20"
      >
        <WelcomComponent subtext="Hi, my name is" maintext="Phu Nguyen" />
      </div>

      <div
        ref={elA}
        className="stickanimate w-[30%] right-[0%] bg-[#059212] "
      ></div>
      <div
        ref={elB}
        className="stickanimate w-[30%] right-[10%] bg-[#06d001] "
      ></div>
      <div
        ref={elC}
        className="stickanimate w-[30%] right-[20%] bg-[#9bec00] "
      ></div>
    </section>
  );
};

export default WelcomSc;
