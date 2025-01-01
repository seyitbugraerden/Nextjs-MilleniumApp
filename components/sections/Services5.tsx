"use client";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState, useCallback } from "react";

export default function Services5() {
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    isotope.current = new Isotope(".masonary-active", {
      itemSelector: ".filter-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".filter-item",
      },
    });
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key: string) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value: string) =>
    value === filterKey
      ? "active btn btn-md btn-filter mb-2 me-2"
      : "btn btn-md btn-filter mb-2 me-2";

  return (
    <>
      {/* Services 5 */}
      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Projelerimiz
              </span>
            </div>
            <h3 className="ds-3 my-3">Projelerimizi Keşfedin</h3>
            <p className="fs-5">
              Yaratıcı ve etkili dijital çözümlerle gerçekleştirdiğimiz
              projelerle markalarımıza değer katıyoruz.{" "}
              <br className="d-none d-lg-block" />
              Her bir proje, hedeflerinize ulaşmanız için sunduğumuz yenilikçi
              ve özgün yaklaşımların bir örneğidir.
            </p>
          </div>
          <div className="text-center mt-6">
            <div className="button-group filter-button-group filter-menu-active">
              <button
                className={activeBtn("*")}
                onClick={handleFilterKeyChange("*")}
              >
                Tüm Projeler
              </button>
              <button
                className={activeBtn("web-design")}
                onClick={handleFilterKeyChange("web-design")}
              >
                Web Tasarım ve Geliştirme
              </button>
              <button
                className={activeBtn("mobile-app")}
                onClick={handleFilterKeyChange("mobile-app")}
              >
                Mobil Uygulama Çözümleri
              </button>
              <button
                className={activeBtn("ecommerce")}
                onClick={handleFilterKeyChange("ecommerce")}
              >
                E-Ticaret Çözümleri
              </button>
              <button
                className={activeBtn("marketing-solutions")}
                onClick={handleFilterKeyChange("marketing-solutions")}
              >
                Marketing
              </button>
              <button
                className={activeBtn("social-media")}
                onClick={handleFilterKeyChange("social-media")}
              >
                Sosyal Medya Çözümleri
              </button>
              <button
                className={activeBtn("seo-marketing")}
                onClick={handleFilterKeyChange("seo-marketing")}
              >
                SEO ve Dijital Pazarlama
              </button>
              <button
                className={activeBtn("brand-management")}
                onClick={handleFilterKeyChange("brand-management")}
              >
                Marka Yönetimi ve Strateji
              </button>
              <button
                className={activeBtn("crm-solutions")}
                onClick={handleFilterKeyChange("crm-solutions")}
              >
                CRM Çözümleri
              </button>
              <button
                className={activeBtn("corporate-web")}
                onClick={handleFilterKeyChange("corporate-web")}
              >
                Kurumsal Web Sitesi Çözümleri
              </button>
              <button
                className={activeBtn("web-app")}
                onClick={handleFilterKeyChange("web-app")}
              >
                Web Uygulama Geliştirme
              </button>
              <button
                className={activeBtn("graphic-design")}
                onClick={handleFilterKeyChange("graphic-design")}
              >
                Logo ve Grafik Tasarım
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-6">
          <div className="masonary-active justify-content-between row">
            <div className="grid-sizer" />
            <div className="filter-item col-12 col-md-4 seo marketing">
              <div className="project-item zoom-img rounded-2 fix position-relative">
                <img
                  className="rounded-2"
                  src="/assets/imgs/project-1/img-1.png"
                  alt="infinia"
                />
                <a
                  href="#"
                  className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 "
                >
                  <span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
                    <span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">
                      CRM
                    </span>
                    <span className="fs-7 fw-medium text-primary mx-2">
                      Çözümleri
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={19}
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375"
                        stroke="#6D4DF2"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.25 9.5H3.5625"
                        stroke="#6D4DF2"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h5 className="text-700">
                    Şirketinizi Tek Bir Yerde Yönetin
                  </h5>
                  {/* <p className="fs-7 mb-0">Achieve Your a of Business</p>*/}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
