"use client";
import MyIcon from "@/app/components/Icon/page";
import MyButton from "@/app/components/MyButton/page";
import Mylink from "@/app/constants/Mylink";
import { useLenis } from "@/app/context/LenisScroll/page";
import Image from "next/image";
import React from "react";

const HeroAction = () => {
  const { lenisScroll } = useLenis();

  const handleScrollTo = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    lenisScroll.scrollTo(e?.target?.getAttribute("href"), {
      duration: 0.7, // thời gian cuộn (tính bằng giây)
      offset: 0, // có thể thêm offset nếu cần
      easing: (t) => t, // hàm easing nếu muốn custom
    });
  };

  return (
    <div className="action grid grid-cols-2 gap-6 mt-4">
      <MyButton
        variant={"outline"}
        linkin={"/CVPhuNguyen.pdf"}
        download={"CVPhuNguyen"}
      >
        Download CV
      </MyButton>
      <MyButton
        linkin={"#ContactSc"}
        onClick={(e) => {
          handleScrollTo(e);
        }}
      >
        Contact Info
      </MyButton>
      <MyIcon link={Mylink.github} className={"ml-auto"}>
        <Image src={"/github.png"} alt="github" height={32} width={32} />
      </MyIcon>
      <MyIcon link={Mylink.linkedin}>
        <Image src={"/linkedin.png"} alt="github" height={32} width={32} />
      </MyIcon>
      <MyIcon link={Mylink.linkedin} className={"ml-auto"}>
        <Image src={"/facebook_icon.png"} alt="github" height={32} width={32} />
      </MyIcon>
    </div>
  );
};

export default HeroAction;
