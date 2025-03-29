import ArrowNextSc from "@/app/components/ArrowNextSc/page";
import MyTextbox from "../../../../components/MyTextbox/page";
import MyProjectList from "../MyProjectList/page";

const ProjectSc = () => {
  return (
    <section
      id="ProjectSc"
      className="ProjectSc min-h-[100vh] flex flex-col relative pt-[calc(20px+var(--scroll-header-height))]"
    >
      <div className="container flex-1 flex flex-col">
        <MyTextbox title={"Projects"} desc={"Browse My Recent"} />
        <MyProjectList />
        <ArrowNextSc linkNextSc={"ContactSc"} />
      </div>
    </section>
  );
};

export default ProjectSc;
