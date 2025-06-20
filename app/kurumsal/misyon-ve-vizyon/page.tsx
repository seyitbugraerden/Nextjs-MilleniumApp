import { metadatas } from "@/app/metadata/metadata";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: metadatas.misyonVizyon.title,
  description: metadatas.misyonVizyon.description,
  alternates: { canonical: metadatas.misyonVizyon.canonical },
};

const page = () => {
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h1 style={{ fontSize: "38px !important" }}>Misyon ve Vizyon</h1>
            <div className="d-flex">
              <Link href="/">
                <p className="mb-0 text-900">Ana Sayfa</p>
              </Link>
              <svg
                className="mx-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={13}
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M1 1.5L6.5 6.75L1 12"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link href="/">
                <p className="mb-0 text-900">Kurumsal</p>
              </Link>
              <svg
                className="mx-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={13}
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M1 1.5L6.5 6.75L1 12"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-primary mb-0">Misyon ve Vizyon</p>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src="/assets/imgs/page-header/bg-line.png"
          alt="Millenium Yazılım"
        />
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
            <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
          </div>
        </div>
      </section>

      <section className="section-cta-6 position-relative section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
              <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
                <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill mb-2 px-4 py-2">
                  <img
                    src="/assets/imgs/features-1/dots.png"
                    alt="Millenium Yazılım"
                  />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Misyon ve Vizyon
                  </span>
                </div>
                <h3 className="fs-1">Misyonumuz</h3>
                <p>
                  Millenium Yazılım olarak amacımız, müşterilerimize dijital
                  dünyada etkili, yenilikçi ve sürdürülebilir çözümler
                  sunmaktır. Web tasarımı, mobil uygulama geliştirme, e-ticaret
                  çözümleri ve sosyal medya yönetimi gibi alanlarda sunduğumuz
                  hizmetlerle markaların çevrimiçi varlıklarını güçlendiriyor,
                  iş hedeflerine ulaşmalarına destek oluyoruz. Her projede
                  yüksek kaliteli, kullanıcı odaklı dijital deneyimler sunarak
                  müşteri memnuniyetini en üst seviyeye taşımayı hedefliyoruz.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
              <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
                <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill mb-2 px-4 py-2">
                  <img
                    src="/assets/imgs/features-1/dots.png"
                    alt="Millenium Yazılım"
                  />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Misyon ve Vizyon
                  </span>
                </div>
                <h3 className="fs-1">Vizyonumuz</h3>
                <p>
                  Millenium Yazılım olarak vizyonumuz, dijital dönüşümde öncü
                  bir rol üstlenmek ve teknolojiyi verimli kullanarak
                  işletmelerin sürdürülebilir büyümesine katkı sağlamaktır.
                  Yenilikçi çözümlerimizle global ölçekte tanınan bir marka
                  olmayı ve sektörümüzde lider konuma ulaşmayı hedefliyoruz.
                  Sürekli değişen dijital pazarlama trendlerine uyum sağlayarak,
                  müşterilerimizin çevrimiçi başarısını kalıcı hale getirmeyi
                  amaçlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
