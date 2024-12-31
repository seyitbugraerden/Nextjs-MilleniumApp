import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Misyon ve Vizyon</h3>
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
          alt="infinia"
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
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Misyon ve Vizyon
                  </span>
                </div>
                <h1 className="fs-1">Misyonumuz</h1>
                <p>
                  Millenium Yazılım olarak, müşterilerimize dijital dünyada
                  etkili ve sürdürülebilir çözümler sunmayı hedefliyoruz.
                  Yenilikçi web tasarımı, mobil uygulama geliştirme, e-ticaret
                  çözümleri ve sosyal medya yönetimi gibi hizmetlerle markaların
                  çevrimiçi varlıklarını güçlendiriyor, iş hedeflerine
                  ulaşmalarını sağlıyoruz. Amacımız, her projede yüksek kaliteli
                  ve kullanıcı dostu dijital deneyimler sunarak müşteri
                  memnuniyetini en üst düzeye çıkarmaktır.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
              <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
                <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill mb-2 px-4 py-2">
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Misyon ve Vizyon
                  </span>
                </div>
                <h1 className="fs-1">Vizyonumuz</h1>
                <p>
                  Millenium Digital, dijital dönüşümde öncü olmayı ve
                  teknolojiyi verimli bir şekilde kullanarak işletmelerin
                  büyümesine katkıda bulunmayı vizyon edinmiştir. Yenilikçi
                  çözümlerimizle globalde tanınan bir marka olmayı, sektörümüzde
                  lider konumda bulunmayı hedefliyoruz. Sürekli gelişen dijital
                  pazarlama trendleriyle uyumlu çalışarak, müşterilerimizin
                  çevrimiçi başarılarını garanti altına alıyoruz. Bu metin, hem
                  SEO açısından anahtar kelimeler içeriyor hem de kullanıcı
                  dostu bir şekilde yazılmıştır.
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
