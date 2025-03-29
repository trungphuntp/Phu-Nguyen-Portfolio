import ArrowNextSc from "@/app/components/ArrowNextSc/page";
import IconSkill from "@/app/components/IconSkill/page";
import MyTextbox from "@/app/components/MyTextbox/page";
import { MySkills } from "@/app/constants/general.js";

const SkillsSc = () => {
  return (
    <section
      id="SkillsSc"
      className="SkillsSc min-h-[100vh] flex flex-col relative pt-[calc(20px+var(--scroll-header-height))] "
    >
      <div className="container flex-1 flex flex-col">
        <MyTextbox title={"Experience"} desc={"Explore My"} />
        <div className="listskill mt-[40px] border border-[#353535] p-[24px] rounded-[32px] text-center flex justify-center flex-col">
          <div className="listskill__item ">
            <h4 className="listskill__item-title text-[28px] font-semibold">
              Frontend Development
            </h4>
            <div className="listskill__item-icons mt-[35px] flex flex-wrap gap-16 justify-center max-sm:gap-8">
              {MySkills?.length > 0 &&
                MySkills?.map((item, index) => {
                  return (
                    <IconSkill
                      key={index}
                      title={item.skill}
                      experience={item.experience}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <ArrowNextSc linkNextSc={"ProjectSc"} />
    </section>
  );
};

export default SkillsSc;
