import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer>
        <div className="section-footer">
          <div className="container-fluid bg-white">
            <div className=" container position-relative z-2">
              <div className="row py-90">
                <div className="col-lg-4 pe-10">
                  <Link
                    className="navbar-brand d-flex main-logo align-items-center"
                    href="/"
                  >
                    <img src="/logo.svg" alt="Millenium Yazılım" width={200} />
                  </Link>
                  <p className="text-900 fw-medium mt-3 mb-6 opacity-50">
                    Millenium Yazılım, markaların dijital potansiyellerini
                    artırmak için yenilikçi çözümler sunar.
                  </p>
                  <div className="d-flex social-icons">
                    <Link
                      href="#"
                      className=" text-900 border border-end-0  border-opacity-10 icon-shape icon-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={17}
                        viewBox="0 0 10 17"
                        fill="none"
                      >
                        <path
                          className="fill-dark"
                          d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z"
                          fill="black"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className=" text-900 border border-end-0    border-opacity-10 icon-shape icon-md"
                    >
                      <i className="bi bi-twitter-x" />
                    </Link>
                    <Link
                      href="#"
                      className=" text-900 border    border-opacity-10 icon-shape icon-md"
                    >
                      <i className="bi bi-linkedin" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-6">
                      <h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Kurumsal
                      </h3>
                      <div className="d-flex flex-column align-items-start">
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/kurumsal/biz-kimiz"
                        >
                          Biz Kimiz?
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/kurumsal/misyon-ve-vizyon"
                        >
                          Misyon ve Vizyon
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/kurumsal/cozumlerimiz"
                        >
                          Çözümlerimiz
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/kurumsal/referanslarimiz"
                        >
                          Referanslarımız
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/kurumsal/projelerimiz"
                        >
                          Projelerimiz
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      <h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">
                        Hizmetlerimiz
                      </h3>
                      <div className="d-flex flex-column align-items-start">
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/web-tasarim-ve-gelistirme"
                        >
                          Web Tasarım ve Geliştirme
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/mobil-uygulama-cozumleri"
                        >
                          Mobil Uygulama Çözümleri
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/e-ticaret-cozumleri"
                        >
                          E-Ticaret Çözümleri
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/sosyal-medya-yonetimi"
                        >
                          Sosyal Medya Yönetimi
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/seo-ve-dijital-pazarlama"
                        >
                          SEO ve Dijital Pazarlama
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/marka-yonetimi-ve-stratejileri"
                        >
                          Marka Yönetimi ve Strateji
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/crm-cozumleri"
                        >
                          CRM Çözümleri
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/kurumsal-web-sitesi-cozumleri"
                        >
                          Kurumsal Web Sitesi Çözümleri
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/web-uygulama-gelistirme"
                        >
                          Web Uygulama Geliştirme
                        </Link>
                        <Link
                          className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                          href="/hizmetlerimiz/logo-ve-grafik-tasarim"
                        >
                          Logo ve Grafik Tasarım
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-3">
                      <h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">
                        İletişim
                      </h3>
                      <Link
                        href="/iletisim"
                        className="hover-effect text-900 mb-2 fw-medium fs-6 text-start"
                      >
                        Kızılırmak Mah. Dumlupınar Bulv. No:3 <br /> Kat:16
                        Daire:80, 06520 Çankaya/Ankara
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid bg-primary-soft">
            <div className="container">
              <div className="row">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10">
                  <p className="text-900 opacity-50 mb-0 fs-7">
                    Copyright © 2024 <strong>Millenium Yazılım</strong>. Tüm
                    Hakları Saklıdır.
                  </p>
                  <div className="d-flex">
                    <Link href="/gizlilik-politikasi" className="text-900 me-3">
                      {" "}
                      Gizlilik Politikası
                    </Link>

                    <Link href="/hizmet-sartlari" className="text-900 me-3">
                      {" "}
                      Hizmet Şartları
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
