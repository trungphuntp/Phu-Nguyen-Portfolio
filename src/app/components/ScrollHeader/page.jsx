"use client";
import { useLenis } from "@/app/context/LenisScroll/page";
import React, { useEffect, useRef, useState } from "react";

const ScrollHeader = () => {
  const [isShowScrollMenu, setIsShowScrollMenu] = useState(false);

  const [activeMenuHamber, setActiveMenuHamber] = useState(false);
  const [showMenuHamber, setShowMenuHamber] = useState(false);
  const refHamberger = useRef();
  const { lenisScroll } = useLenis();

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

  const handleScrollMenuClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (e?.target) {
      lenisScroll.scrollTo(e?.target?.getAttribute("href"), {
        duration: 0.7, // thời gian cuộn (tính bằng giây)
        offset: 0, // có thể thêm offset nếu cần
        easing: (t) => t, // hàm easing nếu muốn custom
      });
    }
  };

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
              <a
                className="menuItem"
                onClick={(e) => {
                  handleScrollMenuClick(e);
                }}
                href="#AboutSc"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="menuItem"
                onClick={(e) => {
                  handleScrollMenuClick(e);
                }}
                href="#SkillsSc"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="menuItem"
                onClick={(e) => {
                  handleScrollMenuClick(e);
                }}
                href="#ProjectSc"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="menuItem"
                onClick={(e) => {
                  handleScrollMenuClick(e);
                }}
                href="#ContactSc"
              >
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
                  <a
                    className="dropdownMenu__menuItem"
                    onClick={(e) => {
                      handleScrollMenuClick(e);
                    }}
                    href="#AboutSc"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="dropdownMenu__menuItem"
                    onClick={(e) => {
                      handleScrollMenuClick(e);
                    }}
                    href="#SkillsSc"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="dropdownMenu__menuItem"
                    onClick={(e) => {
                      handleScrollMenuClick(e);
                    }}
                    href="#ProjectSc"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="dropdownMenu__menuItem"
                    onClick={(e) => {
                      handleScrollMenuClick(e);
                    }}
                    href="#ContactSc"
                  >
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
