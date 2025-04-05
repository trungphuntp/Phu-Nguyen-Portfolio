import React from "react";
import ArrowNextSc from "../ArrowNextSc/page";

const Footer = () => {
  return (
    <footer className="footer min-h-[25vh] relative">
      <div className="containe text-center">
        <ul className="footer__menu flex justify-center items-center text-[24px] text-black gap-[30px] min-h-[15vh] max-sm:flex-col">
          <li>
            <a className="footer__menu-item" href="#AboutSc">
              About
            </a>
          </li>
          <li>
            <a className="footer__menu-item" href="#SkillsSc">
              Experience
            </a>
          </li>
          <li>
            <a className="footer__menu-item" href="#ProjectSc">
              Projects
            </a>
          </li>
          <li>
            <a className="footer__menu-item" href="#ContactSc">
              Contact
            </a>
          </li>
        </ul>
        <div className="footer__copy min-h-[15vh] max-sm:mt-8">
          <p>Copyright © 2025 Phu Nguyen. All Rights Reserved.</p>
        </div>
      </div>
      <ArrowNextSc
        className={`rotate-180 bottom-[30%]`}
        linkNextSc={"herosc"}
      />
    </footer>
  );
};

export default Footer;
