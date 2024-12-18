"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Header5 from "./header/Header5";

interface LayoutProps {
  headerStyle?: Number;
  footerStyle?: Number;
  children?: React.ReactNode;
  breadcrumbTitle?: string;
}

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = (): void => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-active")
      : document.body.classList.remove("mobile-menu-active");
  };

  // Search
  const [isSearch, setSearch] = useState<boolean>(false);
  const handleSearch = (): void => setSearch(!isSearch);

  // OffCanvas
  const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
  const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas);

  useEffect(() => {
    const WOW: any = require("wowjs");
    (window as any).wow = new WOW.WOW({
      live: false,
    });

    // Initialize WOW.js
    (window as any).wow.init();

    AOS.init();

    const handleScroll = (): void => {
      const scrollCheck: boolean = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="top" />
      <Header1
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
        isSearch={isSearch}
        handleSearch={handleSearch}
        isOffCanvas={isOffCanvas}
        handleOffCanvas={handleOffCanvas}
      />
      <main>
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}
      </main>
      <Footer2 />

      <BackToTop target="#top" />
    </>
  );
}
