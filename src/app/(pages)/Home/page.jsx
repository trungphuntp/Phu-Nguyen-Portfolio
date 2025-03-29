import React from "react";
import HeroSc from "./components/HeroSc/page";
import AboutSc from "./components/AboutSc/page";
import SkillsSc from "./components/SkillsSc/page";
import ProjectSc from "./components/ProjectSc/page";
import ContactSc from "./components/ContactSc/page";

const Homepage = () => {
  return (
    <main className="mainHome">
      <HeroSc />
      <AboutSc />
      <SkillsSc />
      <ProjectSc />
      <ContactSc />
    </main>
  );
};

export default Homepage;
