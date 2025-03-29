"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollHeader = () => {
  const [isShowScrollMenu, setIsShowScrollMenu] = useState(false);

  const [activeMenuHamber, setActiveMenuHamber] = useState(false);
  const [showMenuHamber, setShowMenuHamber] = useState(false);
  const refHamberger = useRef();

  const handleTogleActiveHamber = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActiveMenuHamber((prevState) => !prevState);
  };

  useEffect(() => {
    if (!isShowScrollMenu) {
      setActiveMenuHamber(false);
    }
  }, [isShowScrollMenu]);

  useEffect(() => {
    const handleSetScrolling = () => {
      if (innerWidth > 640) {
        if (scrollY > 170) {
          setIsShowScrollMenu(true);
        } else {
          setIsShowScrollMenu(false);
        }
      } else {
        if (scrollY > 80) {
          setIsShowScrollMenu(true);
        } else {
          setIsShowScrollMenu(false);
        }
      }
    };
    handleSetScrolling();

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

    window.addEventListener("resize", showHamberger);
    window.addEventListener("scroll", handleSetScrolling);

    document.addEventListener("click", removeDropdown);
    return () => {
      window.removeEventListener("resize", showHamberger);
      window.removeEventListener("scroll", handleSetScrolling);

      document.removeEventListener("click", removeDropdown);
    };
  }, []);
  return (
    <div
      className={`header scrollheader ${
        isShowScrollMenu ? "scrolling" : ""
      } h-[var(--scroll-header-height)] flex items-center justify-center text-[var(--text-color-body-2)]  z-[999] bg-black text-white fixed w-full top-[calc(-1*var(--scroll-header-height))]`}
    >
      <div className="container flex items-center justify-between">
        <div className="header__left">
          <a href="/">
            <h1 className="header__left-name h1-heading ">Phu Nguyen</h1>
          </a>
        </div>
        <div className="header__right flex items-center">
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
          <div ref={refHamberger} className="burgerMenuWrapper light">
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
                  <a className="dropdownMenu__menuItem" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdownMenu__menuItem" href="#">
                    Experience
                  </a>
                </li>
                <li>
                  <a className="dropdownMenu__menuItem" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="dropdownMenu__menuItem" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollHeader;
