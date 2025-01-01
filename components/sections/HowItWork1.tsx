"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function HowItWork1() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="howitwork-1 section-padding position-relative fix">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <div
              className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Nasıl İlerliyoruz?
              </span>
            </div>
            <h3
              className="ds-3 my-3 fw-regular"
              data-aos="fade-zoom-in"
              data-aos-delay={100}
            >
              Başarıya Giden <br />
              <span className="fw-bold">
                {" "}
                Adımlarımız <br />
              </span>
            </h3>
            <p
              className="fs-5 mb-0"
              data-aos="fade-zoom-in"
              data-aos-delay={200}
            >
              Stratejik planlama, yenilikçi tasarım ve veriye dayalı
              optimizasyon adımlarıyla projelerinizi başarıya taşıyoruz. <br />
              İhtiyaçlarınıza özel dijital çözümler sunarak markanızın online
              görünürlüğünü artırıyor ve <br /> sürdürülebilir büyüme
              sağlıyoruz.
            </p>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/howitwork-1/img-bg-line.png" alt="infinia" />
        </div>
        <div className="container position-relative z-1">
          <div className="position-relative">
            <div className="position-lg-absolute top-0 start-0 bottom-0 w-lg-50 d-flex flex-column justify-content-between m-lg-10 pb-lg-0 pb-5 z-1">
              <div className="d-flex feature-item">
                <div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                  <div className="icon">
                    <img
                      src="/assets/imgs/howitwork-1/icon-1.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div data-aos="fade-zoom-in" data-aos-delay={100}>
                  <h5 className="text-lg-white text-900">
                    01. Analiz ve Strateji Geliştirme
                  </h5>
                  <p className="text-lg-white text-900 opacity-75">
                    Markanızın hedeflerini, ihtiyaçlarını ve <br /> hedef
                    kitlenizi detaylı bir şekilde analiz ediyoruz. <br />{" "}
                    Verilere dayalı stratejiler oluşturarak <br /> projenin
                    temelini sağlam temellere oturtuyoruz.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-item position-relative z-1">
                <div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                  <div className="icon">
                    <img
                      src="/assets/imgs/howitwork-1/icon-2.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div data-aos="fade-zoom-in" data-aos-delay={200}>
                  <h5 className="text-lg-white text-900">
                    02. Tasarım ve Geliştirme
                  </h5>
                  <p className="text-lg-white text-900 opacity-75">
                    Kullanıcı odaklı, estetik ve işlevsel tasarımlar
                    oluşturuyor,
                    <br /> en güncel teknolojilerle projelerinizi hayata
                    geçiriyoruz. <br /> Her adımda kullanıcı deneyimini ön
                    planda tutuyoruz.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-item">
                <div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
                  <div className="icon">
                    <img
                      src="/assets/imgs/howitwork-1/icon-3.svg"
                      alt="infinia"
                    />
                  </div>
                </div>
                <div data-aos="fade-zoom-in" data-aos-delay={300}>
                  <h5 className="text-lg-white text-900">
                    03. Test ve Optimizasyon
                  </h5>
                  <p className="text-lg-white text-900 opacity-75">
                    Projenizi yayına almadan önce kapsamlı testlerden geçiriyor,{" "}
                    <br /> performansı analiz ederek en iyi sonuçları <br />{" "}
                    elde etmek için sürekli optimizasyon sağlıyoruz.
                  </p>
                </div>
              </div>
              <div className="dashed-line-1 d-none d-lg-block" />
              <div className="dashed-line-2 d-none d-lg-block" />
            </div>
            <div className="position-relative d-inline-block">
              <img
                className="rounded-3 w-100 img-fluid"
                src="/assets/imgs/howitwork-1/img-bg.png"
                alt="infinia"
              />
              <div className="bg-linear-primary rounded-3 position-absolute top-0 start-0 w-75 h-100" />
              <div className="position-absolute bottom-0 end-0 m-md-8 m-4">
                <div className="d-flex align-items-center justify-content-center">
                  <Link
                    href="/iletisim"
                    className="btn btn-gradient d-none d-md-block rounded-4"
                  >
                    Jİletişime Geç
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-white"
                        d="M17.25 15.25V6.75H8.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="stroke-white"
                        d="M17 7L6.75 17.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rotate-center ellipse-rotate-success position-absolute z-0" />
        <div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
      </section>
    </>
  );
}
