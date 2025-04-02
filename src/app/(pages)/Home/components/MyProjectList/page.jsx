"use client";

import MyButton from "@/app/components/MyButton/page";
import { MyProject } from "@/app/constants/general";
import React from "react";
import styled from "styled-components";

const ItemProject = styled.div`
  @media screen and (min-width: 1024px) {
    && {
      .bgopacity {
        transition: 0.4s;
        transition-timing-function: var(--timing-animation);
        transform: scaleY(0);
        transform-origin: bottom;
      }
      .projectlist__item-name,
      .projectlist__item-actions {
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
        transition-timing-function: var(--timing-animation);
      }
      &:hover {
        .bgopacity {
          transform: scaleY(1);
        }
        .projectlist__item-name,
        .projectlist__item-actions {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`;
const MyProjectList = () => {
  return (
    <div className="projectlist flex justify-center items-stretch gap-14 mt-14 flex-wrap flex-1 ">
      {/* item */}
      {MyProject?.length > 0 &&
        MyProject?.map((project, index) => {
          return (
            <ItemProject
              key={index}
              className="projectlist__item border-[1px] border-[#000] max-lg:p-[24px] rounded-[32px] max-w-[calc(100%/3-35px*2/3)] max-xl:max-w-[calc(100%/2-35px*1/2)]  w-full h-[500px] max-lg:h-auto shadow-2xl relative overflow-hidden max-md:max-w-full"
            >
              {/* bg */}
              <div className="bgopacity max-lg:hidden absolute z-[9] h-full w-full bg-black opacity-70"></div>

              {/* img */}
              <div className="projectlist__item-img w-full max-lg:h-[280px] h-full aspect-[280/280] max-lg:border max-lg:border-[1px] rounded-[32px] overflow-hidden  select-none">
                <img
                  className="h-full w-full object-cover"
                  src={project.image || ""}
                  srcSet={`${project.image || ""} 2x`}
                  width="100"
                  height="100"
                  alt={project?.name || ""}
                />
              </div>

              {/* title */}
              <h3 className="projectlist__item-name max-lg:text-[2.8rem] text-black font-bold text-center mt-[15px] absolute  max-lg:static lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-[calc(50%-100px)] lg:left-1/2 z-10 lg:text-white text-[2.8rem]">
                {project?.name || ""}
              </h3>

              {/* actions */}
              <div className="projectlist__item-actions mt-[15px] flex gap-4 flex-wrap   justify-center absolute  max-lg:static lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 left-1/2 z-10 lg:w-full">
                {project?.linkGithub && (
                  <MyButton linkout={project?.linkGithub} variant="outline">
                    Github
                  </MyButton>
                )}
                {project?.linkDemo && (
                  <MyButton linkout={project?.linkDemo} variant="outline">
                    Live Demo
                  </MyButton>
                )}
                {project?.linkYoutube && (
                  <MyButton linkout={project?.linkYoutube} variant="outline">
                    Youtube
                  </MyButton>
                )}
              </div>
            </ItemProject>
          );
        })}
    </div>
  );
};

export default MyProjectList;
