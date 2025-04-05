"use client";
import React, { createContext, useContext, useState } from "react";

const contextHeader = createContext();

const ContextHeaderProvider = ({ children }) => {
  const [isShowScrollMenu, setIsShowScrollMenu] = useState(false);
  const handleSetShowScroll = (state) => {
    console.log(isShowScrollMenu);
    setIsShowScrollMenu(state);
  };

  return (
    <contextHeader.Provider value={{ isShowScrollMenu, handleSetShowScroll }}>
      {children}
    </contextHeader.Provider>
  );
};

export const useContextHeader = () => {
  return useContext(contextHeader);
};

export default ContextHeaderProvider;
