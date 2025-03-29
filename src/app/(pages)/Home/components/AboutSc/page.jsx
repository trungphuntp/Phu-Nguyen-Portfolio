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
              <div className="cardContent w-1/2 max-sm:w-full">
                <Image
                  src={"/experience.png"}
                  alt="my experience"
                  width={32}
                  height={32}
                />
                <h4 className="cardContent__title">Experience</h4>
                <p className="cardContent__item">2+ years</p>
                <p className="cardContent__item">Frontend Development</p>
              </div>
              <div className="cardContent w-1/2 max-sm:w-full">
                <Image
                  src={"/education.png"}
                  alt="my education"
                  width={32}
                  height={32}
                />
                <h4 className="cardContent__title">Education</h4>
                <p className="cardContent__item">B.Sc. Bachelors Degree</p>
                <p className="cardContent__item">M.Sc. Masters Degree</p>
              </div>
            </div>
            <div className="mainContent__content-mystory mt-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </div>
          </div>
        </div>
      </div>
      <ArrowNextSc linkNextSc={"SkillsSc"} />
    </section>
  );
};

export default AboutSc;
