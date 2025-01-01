import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="d-none d-lg-flex">
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center py-2">
          <li className="nav-item">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/"
            >
              Ana Sayfa
            </Link>
          </li>

          <li className="nav-item dropdown menu-item-has-children">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Kurumsal
            </Link>
            <div className="dropdown-menu p-4 fix">
              <ul className="list-unstyled">
                <li className="position-relative border-bottom z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/kurumsal/biz-kimiz"
                  >
                    Biz Kimiz?
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/kurumsal/misyon-ve-vizyon"
                  >
                    Misyon ve Vizyon
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/kurumsal/cozumlerimiz"
                  >
                    Çözümlerimiz
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/kurumsal/referanslarimiz"
                  >
                    Referanslarımız
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/kurumsal/projelerimiz"
                  >
                    Projelerimiz
                  </Link>
                </li>
              </ul>
              <div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
              <div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
            </div>
          </li>
          <li className="nav-item dropdown menu-item-has-children">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hizmetlerimiz
            </Link>
            <div className="dropdown-menu p-4 fix">
              <ul className="list-unstyled">
                <li className="position-relative border-bottom z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/web-tasarim-ve-gelistirme"
                  >
                    Web Tasarımı ve Geliştirme
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/mobil-uygulama-cozumleri"
                  >
                    Mobil Uygulama Çözümleri
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/e-ticaret-cozumleri"
                  >
                    E-Ticaret Çözümleri
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/sosyal-medya-yonetimi"
                  >
                    Sosyal Medya Yönetimi
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/seo-ve-dijital-pazarlama"
                  >
                    SEO ve Dijital Pazarlama
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/marka-yonetimi-ve-strateji"
                  >
                    Marka Yönetimi ve Strateji
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/crm-cozumleri"
                  >
                    CRM Çözümleri
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/kurumsal-web-sitesi-cozumleri"
                  >
                    Kurumsal Web Sitesi Çözümleri
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/web-uygulama-gelistirme"
                  >
                    Web Uygulama Geliştirme
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/hizmetlerimiz/logo-ve-grafik-tasarim"
                  >
                    Logo ve Grafik Tasarım
                  </Link>
                </li>
              </ul>
              <div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
              <div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/iletisim"
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
