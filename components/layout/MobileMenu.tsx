"use client";
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
  const [isAccordion, setIsAccordion] = useState(0);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      {/* Offcanvas search */}
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-logo">
            <Link
              className="navbar-brand d-flex main-logo align-items-center"
              href="/"
            >
              <img src="/logo.svg" alt="infinia" width={200} />
            </Link>
            <div
              className={`burger-icon burger-icon-white border rounded-3 ${
                isMobileMenu ? "burger-close" : ""
              }`}
              onClick={handleMobileMenu}
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading ps-0">
                    <li>
                      <span>
                        <i className="arrow-small-down"></i>
                      </span>
                      <Link className="active" href="#">
                        Ana Sayfa
                      </Link>
                    </li>
                    <li
                      className={`has-children ${
                        isAccordion === 2 ? "active" : ""
                      }`}
                    >
                      <span
                        className="menu-expand"
                        onClick={() => handleAccordion(2)}
                      >
                        <i className="arrow-small-down"></i>
                      </span>
                      <div onClick={() => handleAccordion(2)}>Kurumsal</div>
                      <ul
                        className="sub-menu"
                        style={{
                          display: `${isAccordion == 2 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/kurumsal/biz-kimiz">Biz Kimiz?</Link>
                        </li>
                        <li>
                          <Link href="/kurumsal/misyon-ve-vizyon">
                            Misyon ve Vizyon
                          </Link>
                        </li>
                        <li>
                          <Link href="/kurumsal/cozumlerimiz">
                            Çözümlerimiz
                          </Link>
                        </li>
                        <li>
                          <Link href="/kurumsal/referanslarimiz">
                            Referanslarımız
                          </Link>
                        </li>
                        <li>
                          <Link href="/kurumsal/projelerimiz">
                            Projelerimiz
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`has-children ${
                        isAccordion === 3 ? "active" : ""
                      }`}
                    >
                      <span
                        className="menu-expand"
                        onClick={() => handleAccordion(3)}
                      >
                        <i className="arrow-small-down"></i>
                      </span>
                      <div onClick={() => handleAccordion(3)}>
                        Hizmetlerimiz
                      </div>
                      <ul
                        className="sub-menu"
                        style={{
                          display: `${isAccordion == 3 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/hizmetlerimiz/web-tasarim-ve-gelistirme">
                            Web Tasarım ve Geliştirme
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/mobil-uygulama-cozumleri">
                            Mobil Uygulama Çözümleri
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/e-ticaret-cozumleri">
                            E-Ticaret Çözümleri
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/sosyal-medya-yonetimi">
                            Sosyal Medya Yönetimi
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/seo-ve-dijital-pazarlama">
                            SEO ve Dijital Pazarlama
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/marka-yonetimi-ve-stratejileri">
                            Marka Yönetimi ve Stratejileri
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/crm-cozumleri">
                            CRM Çözümleri
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/kurumsal-web-sitesi-cozumleri">
                            Kurumsal Web Sitesi Çözümleri
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/web-uygulama-gelistirme">
                            Web Uygulama Geliştirme
                          </Link>
                        </li>
                        <li>
                          <Link href="/hizmetlerimiz/logo-ve-grafik-tasarim">
                            Logo ve Grafik Tasarım
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span>
                        <i className="arrow-small-down"></i>
                      </span>
                      <Link className="active" href="/iletisim">
                        İletişim
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
