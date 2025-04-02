import ArrowNextSc from "@/app/components/ArrowNextSc/page";
import MyTextbox from "@/app/components/MyTextbox/page";
import Image from "next/image";
import React from "react";

const ContactSc = () => {
  return (
    <section
      id="ContactSc"
      className="ContactSc min-h-[75vh] relative pt-[calc(var(--scroll-header-height))] flex justify-center items-center"
    >
      <div className="container flex flex-col justify-center items-center">
        <MyTextbox title={"Contact Me"} desc={"Get in Touch"} />
        <div className="ContactSc__mycontact mt-[50px] border border-[1px] rounded-[28px] px-[12px] py-[24px] flex  max-sm:flex-col gap-[32px] justify-center items-center">
          <a
            className="ContactSc__mycontact-item flex gap-2 justify-center items-center"
            href="mailto:trungphuntp@gmail.com"
            target="_blank"
          >
            <Image
              className="icon"
              src={"/emailicon.png"}
              alt="email icon"
              height={40}
              width={40}
            />
            <p className="myemail text-black text-[20px]">
              Trungphuntp@gmail.com
            </p>
          </a>
          <a
            className="ContactSc__mycontact-item flex gap-2 justify-center items-center"
            href="https://www.linkedin.com/in/trungphuntp/"
            target="_blank"
          >
            <Image
              className="icon"
              src={"/linkedin.png"}
              alt="email icon"
              height={32}
              width={32}
            />
            <p className="myemail text-black text-[20px]">LinkedIn</p>
          </a>
        </div>
      </div>
      <ArrowNextSc className={`rotate-180`} linkNextSc={"herosc"} />
    </section>
  );
};

export default ContactSc;
