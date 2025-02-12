import { metadatas } from "@/app/metadata/metadata";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import ItemCard from "./components/itemCard";

export const metadata: Metadata = {
  title: metadatas.projelerimiz.title,
  description: metadatas.projelerimiz.description,
  alternates: { canonical: metadatas.projelerimiz.canonical },
};

const page = () => {
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h1 style={{ fontSize: "38px !important" }}>Projelerimiz</h1>
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
              <p className="text-primary mb-0">Projelerimiz</p>
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

      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img
                src="/assets/imgs/features-1/dots.png"
                alt="Millenium Yazılım"
              />
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
        </div>
        <div className="container mt-6">
          <div className="masonary-active justify-content-between row">
            <ItemCard
              src="/ref/adc_makine.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="ADC MAKİNE"
            />{" "}
            <ItemCard
              src="/ref/adiltestere.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="ADİL TESTERE"
            />
            <ItemCard
              src="/ref/alas.png"
              title="Web Tasarım ve Geliştirme"
              description="ALAS FIRE"
            />
            <ItemCard
              src="/ref/atlas.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="ATLAS GRUP"
            />
            <ItemCard
              src="/ref/berkcel.png"
              title="Marka Yönetimi ve Strateji"
              description="BERKÇEL"
            />
            <ItemCard
              src="/ref/bioservis.png"
              title="Web Tasarım ve Geliştirme"
              description="BIOSERVİS"
            />{" "}
            <ItemCard
              src="/ref/doris.png"
              title="Web Uygulama Geliştirme"
              description="DORIS FIRE"
            />
            <ItemCard
              src="/ref/drmoto.png"
              title="Web Tasarım ve Geliştirme"
              description="DR. MOTO REPAIR"
            />
            <ItemCard
              src="/ref/ermaksan_disli.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="ERMAKSAN DİŞLİ"
            />
            <ItemCard
              src="/ref/ertemizcam.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="ERTEMİZ CAM"
            />{" "}
            <ItemCard
              src="/ref/evadecor.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="EVA DECOR"
            />
            <ItemCard
              src="/ref/grup_oto.png"
              title="Web Uygulama Geliştirme"
              description="GRUP OTOMOBİL"
            />
            <ItemCard
              src="/ref/grup_sigorta.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="GRUP SİGORTA"
            />
            <ItemCard
              src="/ref/istanbulotopremium.png"
              title="Web Tasarım ve Geliştirme"
              description="İSTANBUL OTO PREMIUM"
            />
            <ItemCard
              src="/ref/mey.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="MEY DESIGN"
            />
            <ItemCard
              src="/ref/miltas_insaat.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="MİLTAŞ İNŞAAT"
            />
            <ItemCard
              src="/ref/setkim.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="SETKİM"
            />
            <ItemCard
              src="/ref/trb.png"
              title="SEO ve Dijital Pazarlama"
              description="TRB"
            />
            <ItemCard
              src="/ref/turkuaz.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="TURKUAZ VADİSİ"
            />
            <ItemCard
              src="/ref/vhs.png"
              title="Kurumsal Web Sitesi Çözümleri"
              description="VHS TEKNİK"
            />
            <ItemCard
              src="/ref/yalcinkaya.png"
              title="Marka Yönetimi ve Strateji"
              description="YALÇINKAYA NET TURİZM"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
