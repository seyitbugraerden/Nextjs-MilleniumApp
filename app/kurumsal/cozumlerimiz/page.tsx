import { metadatas } from "@/app/metadata/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: metadatas.cozumlerimiz.title,
  description: metadatas.cozumlerimiz.description,
  alternates: { canonical: metadatas.cozumlerimiz.canonical },
};

const page = () => {
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h1 style={{ fontSize: "38px !important" }}>Çözümlerimiz</h1>
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
              <p className="text-primary mb-0">Çözümlerimiz</p>
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

      <section className="section-feature-5">
        <div className="container-fluid position-relative section-padding bg-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="photo-description position-relative  rounded-4">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/features-5/img-1.png"
                    alt="Millenium Yazılım"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  İşletmeniz İçin Uçtan Uca
                  <span
                    className="fw-bold"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  >
                    {" "}
                    Dijital Dönüşüm Hizmetleri{" "}
                    <br className="d-none d-lg-inline" />
                  </span>
                </h4>
                <p className="fs-5">
                  Millenium Yazılım olarak dijital çağın ihtiyaçlarına uygun,
                  yenilikçi ve ölçülebilir çözümler sunuyoruz. Her ölçekten
                  işletmeye özel olarak geliştirdiğimiz hizmetlerle dijital
                  varlığınızı güçlendiriyor, müşteri deneyimini iyileştiriyor ve
                  sürdürülebilir büyümeye katkı sağlıyoruz.
                </p>
              </div>
            </div>
            <div className="row py-90">
              <div className="col-lg-10 px-lg-0 mx-lg-auto d-lg-flex justify-content-lg-between">
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={0}
                >
                  Web Tasarımı ve Geliştirme
                </div>
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  Mobil Uygulama Geliştirme
                </div>
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  E-Ticaret Çözümleri
                </div>
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Sosyal Medya Yönetimi
                </div>
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={400}
                >
                  Dijital Pazarlama ve SEO
                </div>
              </div>
              <div className="col-lg-10 px-lg-0 mx-lg-auto d-lg-flex justify-content-lg-between">
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={0}
                >
                  CRM Çözümleri
                </div>
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  Kurumsal Kimlik ve Marka Yönetimi
                </div>
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Web Yazılım Çözümleri
                </div>
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Özel Yazılım Geliştirme
                </div>
                <div
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={400}
                >
                  Bulut Çözümleri ve Veri Yönetimi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid position-relative bg-linear-3 section-padding">
          <div className="container">
            <div className="text-center mb-8">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <img
                  src="/assets/imgs/features-1/dots.png"
                  alt="Millenium Yazılım"
                />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  Ne sunuyoruz?
                </span>
              </div>
              <h3 className="ds-3 my-3 fw-regular">
                Dijital
                <span
                  className="fw-bold"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  {""} Dünyada Başarınızı <br className="d-none d-lg-block" />
                  Destekleyen {""}
                </span>
                Çözümler
              </h3>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={0}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-1.svg"
                    alt="Millenium Yazılım"
                  />
                  <h6 className="my-3 fs-5">Web Tasarımı ve Geliştirme</h6>
                  <p className="mb-6">
                    Millenium Yazılım olarak, modern ve kullanıcı dostu web
                    siteleri tasarlıyoruz. İşletmelerin dijital kimliklerini
                    güçlendirmek için SEO dostu, mobil uyumlu ve hızlı
                    performans gösteren web siteleri geliştiriyoruz.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-2.svg"
                    alt="Millenium Yazılım"
                  />
                  <h6 className="my-3 fs-5">Mobil Uygulama Geliştirme</h6>
                  <p className="mb-6">
                    Dijital dünyada mobil uygulamalar, markaların hedef
                    kitlelerine ulaşmasında kritik bir rol oynar. Millenium
                    Yazılım, iOS ve Android platformlarında yüksek performanslı,
                    güvenli ve kullanıcı dostu mobil uygulamalar geliştiriyoruz.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-3.svg"
                    alt="Millenium Yazılım"
                  />
                  <h6 className="my-3 fs-5">E-Ticaret Çözümleri</h6>
                  <p className="mb-6">
                    İnternetten satış yapmayı planlayan ya da mevcut e-ticaret
                    sistemini güçlendirmek isteyen işletmeler için özel çözümler
                    sunuyoruz.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-4.svg"
                    alt="Millenium Yazılım"
                  />
                  <h6 className="my-3 fs-5">Dijital Pazarlama ve SEO</h6>
                  <p className="mb-6">
                    İnternetin gücünden tam anlamıyla faydalanabilmek için
                    etkili dijital pazarlama stratejileri gereklidir. Millenium
                    Yazılım, markaların çevrimiçi görünürlüğünü artırmak için
                    SEO, içerik pazarlama, sosyal medya yönetimi ve dijital
                    reklam çözümleri sunuyor.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="row">
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={0}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-1.svg"
                    alt="Millenium Yazılım"
                  />
                  <h6 className="my-3 fs-5">Web Tasarımı ve Geliştirme</h6>
                  <p className="mb-6">
                    Millenium Yazılım olarak, modern ve kullanıcı dostu web
                    siteleri tasarlıyoruz. İşletmelerin dijital kimliklerini
                    güçlendirmek için SEO dostu, mobil uyumlu ve hızlı
                    performans gösteren web siteleri geliştiriyoruz.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-2.svg"
                    alt="Millenium Yazılım"
                  />
                  <h6 className="my-3 fs-5">Mobil Uygulama Geliştirme</h6>
                  <p className="mb-6">
                    Dijital dünyada mobil uygulamalar, markaların hedef
                    kitlelerine ulaşmasında kritik bir rol oynar. Millenium
                    Yazılım, iOS ve Android platformlarında yüksek performanslı,
                    güvenli ve kullanıcı dostu mobil uygulamalar geliştiriyoruz.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-3.svg"
                    alt="Millenium Yazılım"
                  />
                  <h6 className="my-3 fs-5">E-Ticaret Çözümleri</h6>
                  <p className="mb-6">
                    İnternetten satış yapmayı planlayan ya da mevcut e-ticaret
                    sistemini güçlendirmek isteyen işletmeler için özel çözümler
                    sunuyoruz.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-4.svg"
                    alt="Millenium Yazılım"
                  />
                  <h6 className="my-3 fs-5">Dijital Pazarlama ve SEO</h6>
                  <p className="mb-6">
                    İnternetin gücünden tam anlamıyla faydalanabilmek için
                    etkili dijital pazarlama stratejileri gereklidir. Millenium
                    Yazılım, markaların çevrimiçi görünürlüğünü artırmak için
                    SEO, içerik pazarlama, sosyal medya yönetimi ve dijital
                    reklam çözümleri sunuyor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
