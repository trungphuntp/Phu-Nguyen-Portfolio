"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const MyIcon = styled.div`
  && {
    .iconitem__bghover {
      transition: 0.5s;
      transition-timing-function: ease-out;
      transform-origin: left;
      transform: scaleX(0);
    }
    &:hover {
      .iconitem__bghover {
        background: #50fcac;
        transform: scaleX(1);
      }
    }
  }
`;

const IconSkill = ({ title, experience }) => {
  return (
    <MyIcon className="iconitem  text-left border-[2px] border-[#000] py-[16px] px-[24px] rounded-full cursor-pointer relative overflow-hidden">
      <div className="iconitem__bghover absolute h-full w-full left-0 top-0  rounded-full z-10"></div>
      <div className="iconitem__wrapper flex relative z-20 gap-[18px] bg-transparent">
        <Image
          className="iconitem__icon shrink-0 h-[32px] w-[32px]"
          src={"/checkmark.png"}
          alt="icon check mark"
          height={32}
          width={32}
        />
        <div className="iconitem__text ">
          <p className="iconitem__text-title font-bold text-[18px]">{title}</p>
          <p className="iconitem__text-exp mt-[2px]">{experience}</p>
        </div>
      </div>
    </MyIcon>
  );
};

export default IconSkill;
