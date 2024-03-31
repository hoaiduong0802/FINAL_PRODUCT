import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollTop from "../utils/scrollTop";

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    handleCloseMobileMenuShow();
    const myTimeout = setTimeout(() => {
      scrollTop();
    }, 100);
    return () => {
      clearTimeout(myTimeout);
    };
  }, [pathname]);

  const handleShowMobileMenuShow = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    $("body").addClass("mmenu-active");
  };
  const handleCloseMobileMenuShow = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    $("body").removeClass("mmenu-active");
  };
  return (
    <MainContext.Provider
      value={{ handleCloseMobileMenuShow, handleShowMobileMenuShow }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMainContext = () => useContext(MainContext);
