import Image from "next/image";
import React from "react";
import ArrowNextSc from "../../../../components/ArrowNextSc/page";
import MyTextbox from "../../../../components/MyTextbox/page";

const AboutSc = () => {
  return (
    <section
      id="AboutSc"
      className="AboutSc min-h-[100vh] relative pt-[calc(20px+var(--scroll-header-height))] flex flex-col"
    >
      <div className="container flex-1 flex flex-col ">
        <MyTextbox title={"About Me"} desc={"Get To Know More"} />
        <div className="mainContent flex-1 flex items-center justify-between gap-24 max-lg:mt-8 max-lg:flex-col">
          <div
            className={`mainContent__avatar flex max-w-[400px] w-full aspect-[400/400] rounded-[30px] overflow-hidden shrink-0`}
          >
            <Image
              className="h-auto w-full object-cover object-right-top"
              src={"/Mystory.jpeg"}
              alt="thunb story"
              width={400}
              height={400}
            />
          </div>
          <div className="mainContent__content ">
            <div className="mainContent__content-cards flex gap-[35px] max-sm:flex-col">
              {/* <div className="cardContent w-1/2 max-sm:w-full">
                <Image
                  src={"/experience.png"}
                  alt="my experience"
                  width={32}
                  height={32}
                />
                <h4 className="cardContent__title">Experience</h4>
                <p className="cardContent__item">2+ years</p>
                <p className="cardContent__item">Frontend Development</p>
              </div> */}
              <div className="cardContent w-full max-sm:w-full">
                <Image
                  className="cardContent__icon"
                  src={"/education.png"}
                  alt="my education"
                  width={32}
                  height={32}
                />
                <h4 className="cardContent__title">Education</h4>
                <p className="cardContent__item">
                  CFD Circle Front-end Master certificate
                </p>

                <p className="cardContent__item">
                  Bach Viet Polytechnic bachelor's degree
                </p>
                <p className="cardContent__item">
                  Certificate of soft skills training
                </p>
                <p className="cardContent__item">{`EnglishScore Certificate (B1)`}</p>
                <a
                  target="_blank"
                  href={`https://drive.google.com/drive/folders/1Dx3qmeN2zd7ceArCqR_Sa0wHEcPZnwEf`}
                  className="evidenceLink"
                >
                  evidence
                  <svg
                    className="icon h-[12px] w-[12px]"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mainContent__content-mystory mt-14">
              I'm a motivated and curious front-end developer with a passion for
              clean code and intuitive user interfaces. Although I’m just
              starting my career, I’ve spent time building small projects,
              learning modern frameworks, and staying up-to-date with the latest
              trends in web development. I’m excited to join a team where I can
              learn, contribute, and grow.
            </div>
          </div>
        </div>
      </div>
      <ArrowNextSc linkNextSc={"SkillsSc"} />
    </section>
  );
};

export default AboutSc;
