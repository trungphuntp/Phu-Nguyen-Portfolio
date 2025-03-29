import React from "react";
import Image from "next/image";
import MyButton from "@/app/components/MyButton/page";
import Mylink from "@/app/constants/Mylink";
import MyIcon from "@/app/components/Icon/page";
import ArrowNextSc from "@/app/components/ArrowNextSc/page";

const HeroSc = () => {
  return (
    <section
      id="herosc"
      className="herosc min-h-[calc(100vh-var(--header-height))] relative flex justify-center items-center"
    >
      <div className="container">
        <div className="herosc__content mx-auto max-w-[800px] w-full flex items-center gap-8 justify-between max-lg:flex-col max-lg:justify-center ">
          {/* avatar */}
          <div className="herosc__content-avatar  max-w-[400px] w-full  aspect-[400/400] rounded-full overflow-hidden">
            <img
              className="h-auto w-full object-cover object-top"
              src="/my-avatar.png"
              srcSet="/my-avatar.png 2x"
              width={400}
              height={400}
              alt="My avatar"
            />
          </div>
          {/* infor */}
          <div className="herosc__content-infor text-center max-w-[300px]">
            <p className="MyGreeting capitalize font-semibold">Hello, I'm</p>
            <h2 className="Myname capitalize text-[var(--text-color-body-2)] h2-heading font-semibold">
              Phu Nguyen
            </h2>
            <p className="Myjob capitalize font-semibold text-[2.8rem] max-sm:text-[2.2rem]">
              Frontend Developer
            </p>
            <div className="action grid grid-cols-2 gap-6 mt-4">
              <MyButton variant={"outline"}>Download CV</MyButton>
              <MyButton linkin={"#ContactSc"}>Contact Info</MyButton>
              <MyIcon link={Mylink.github} className={"ml-auto"}>
                <Image
                  src={"/github.png"}
                  alt="github"
                  height={32}
                  width={32}
                />
              </MyIcon>
              <MyIcon link={Mylink.linkedin}>
                <Image
                  src={"/linkedin.png"}
                  alt="github"
                  height={32}
                  width={32}
                />
              </MyIcon>
            </div>
          </div>
        </div>
      </div>
      <ArrowNextSc linkNextSc={"AboutSc"} />
    </section>
  );
};

export default HeroSc;
