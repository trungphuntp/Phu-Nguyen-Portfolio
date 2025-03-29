"use client";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [activeMenuHamber, setActiveMenuHamber] = useState(false);
  const [showMenuHamber, setShowMenuHamber] = useState(false);
  const refHamberger = useRef();

  const handleTogleActiveHamber = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActiveMenuHamber((prevState) => !prevState);
  };
  useEffect(() => {
    const showHamberger = () => {
      if (window.innerWidth > 1024) {
        setShowMenuHamber(false);
        setActiveMenuHamber(false);
      } else {
        setShowMenuHamber(true);
      }
    };
    showHamberger();

    const removeDropdown = (e) => {
      if (refHamberger.current && e?.target) {
        if (!refHamberger.current.contains(e?.target)) {
          setActiveMenuHamber(false);
        }
      }
    };
    const scrollRemoveDropdown = () => {
      if (innerWidth > 640) {
        if (scrollY > 170) {
          setActiveMenuHamber(false);
        }
      } else {
        if (scrollY > 80) {
          setActiveMenuHamber(false);
        }
      }
    };
    scrollRemoveDropdown();

    window.addEventListener("scroll", scrollRemoveDropdown);

    window.addEventListener("resize", showHamberger);
    document.addEventListener("click", removeDropdown);
    return () => {
      window.removeEventListener("resize", showHamberger);
      document.removeEventListener("click", removeDropdown);
      window.removeEventListener("scroll", scrollRemoveDropdown);
    };
  }, []);

  return (
    <header className="header normal h-[var(--header-height)] flex items-center justify-center text-[var(--text-color-body-2)] relative z-[999]">
      <div className="container flex items-center justify-between">
        <div className="header__left">
          <a href="/">
            <h1 className="header__left-name h1-heading ">Phu Nguyen</h1>
          </a>
        </div>
        <div className="header__right ">
          <ul
            className={`header__right-menu flex items-center gap-12 text-[2.4rem] ${
              showMenuHamber ? "hidden" : ""
            }`}
          >
            <li>
              <a className="menuItem" href="#AboutSc">
                About
              </a>
            </li>
            <li>
              <a className="menuItem" href="#SkillsSc">
                Experience
              </a>
            </li>
            <li>
              <a className="menuItem" href="#ProjectSc">
                Projects
              </a>
            </li>
            <li>
              <a className="menuItem" href="#ContactSc">
                Contact
              </a>
            </li>
          </ul>
          <div ref={refHamberger} className="burgerMenuWrapper">
            <div
              className={`burgerMenu ${showMenuHamber ? "isShow" : ""} ${
                activeMenuHamber ? "active" : ""
              }`}
              onClick={handleTogleActiveHamber}
            >
              <div className="burgerMenu__line"></div>
              <div className="burgerMenu__line"></div>
              <div className="burgerMenu__line"></div>
            </div>
            <nav className={`dropdownMenu ${activeMenuHamber ? "active" : ""}`}>
              <ul>
                <li>
                  <a className="dropdownMenu__menuItem" href="#AboutSc">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdownMenu__menuItem" href="#SkillsSc">
                    Experience
                  </a>
                </li>
                <li>
                  <a className="dropdownMenu__menuItem" href="#ProjectSc">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="dropdownMenu__menuItem" href="#ContactSc">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
