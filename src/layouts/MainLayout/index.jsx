import React from "react";
import MainContextProvider from "../../context/MainContext";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import MobileMenu from "../../components/MenuOverlay";
import ScrollToTop from "../../components/ScrollToTop";
import AuthenModal from "../../components/ModalAuth";
import Footer from "../../components/Footer";
import AuthContextProvider from "../../context/AuthContext";

const MainLayout = () => {
  return (
    <MainContextProvider>
      <AuthContextProvider>
        <div className="page-wrapper">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <ScrollToTop />
        <MobileMenu />
        <AuthenModal />
      </AuthContextProvider>
    </MainContextProvider>
  );
};

export default MainLayout;
