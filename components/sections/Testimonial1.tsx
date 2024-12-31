import Link from "next/link";

export default function Testimonial1() {
  return (
    <>
      <section className="section-testimonial-1 pb-120 @@classList position-relative">
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-lg-4">
              <div className="pe-8 mt-10">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Başlıca Referanslarımız
                  </span>
                </div>
                <h3
                  className="ds-3 mt-3 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  Sizden Gelenler
                </h3>
                <span
                  className="fs-5 fw-medium"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Başarıyla tamamladığımız projeler ve memnun müşterilerimiz,
                  kalitemizin en güçlü göstergeleridir. Her biri, dijital
                  çözümlerimizle kazandıkları başarıları yansıtmaktadır.
                </span>
                <div className="d-flex flex-wrap align-items-center mt-8">
                  <Link
                    href="/iletisim"
                    className="btn btn-outline-secondary hover-up"
                    data-aos="fade-zoom-in"
                    data-aos-delay={100}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-dark"
                        d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                        stroke="#111827"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    İletişim
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <p className="text-900">
                  Ekibin özverisi ve uzmanlığı işimizi dönüştürdü.{" "}
                  <span className="fw-bold">
                    Yenilikçi çözümleri ve olağanüstü desteği
                  </span>{" "}
                  üretkenliğimizi ve müşteri memnuniyetimizi önemli ölçüde
                  artırdı. Süreçlerimizi düzene koymamızı ve en önemli olana
                  odaklanmamızı sağladı.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-1.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">A** G**</h6>
                    <div className="flag ms-3">
                      <span className="fs-8">Müşteri</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
              <div
                className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                <p className="text-900">
                  Ekibimizle olan iş birliğimiz proje yönetimi süreçlerimizi
                  optimize etmekte etkili oldu.{" "}
                  <span className="fw-bold">
                    1200'den fazla kullanıcı arayüzü bloğunun kapsamlı seçimi,
                    proje arayüzlerimizi belirli müşteri ihtiyaçlarını etkili
                    bir şekilde karşılayacak şekilde özelleştirmemize olanak
                    sağladı.
                  </span>{" "}
                  Cömert 10 GB bulut depolama alanı, proje dosyalarını güvenli
                  bir şekilde depolamak için yeterli alan sağladı ve dağıtılmış
                  ekipler arasında sorunsuz iş birliğine olanak sağladı.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-2.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">E** D**</h6>
                    <div className="flag ms-3">
                      <span className="fs-8">Müşteri</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                <p className="text-900">
                  Bireysel e-posta hesabı özelliği, dahili iletişim netliğini ve
                  profesyonelliği iyileştirdi. Dahası, premium destek ekibinin
                  duyarlılığı ve uzmanlığı, karşılaştığımız herhangi bir teknik
                  zorluğa minimum{" "}
                  <span className="fw-bold">kesinti ve hızlı çözümler</span>{" "}
                  sağladı. Sağlam SaaS çözümleri arayan her kuruluşa
                  hizmetlerini şiddetle tavsiye ediyorum,
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-3.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">S** T**</h6>
                    <div className="flag ms-3">
                      <span className="fs-8">Müşteri</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
              <div
                className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover"
                data-aos="fade-zoom-in"
                data-aos-delay={400}
              >
                <p className="text-900">
                  Bu ekiple yaşadığımız deneyim, her açıdan beklentilerimizi
                  aştı.{" "}
                  <span className="fw-bold">
                    1200'den fazla kullanıcı arayüzü bloğundan oluşan kapsamlı
                    paket, hedef kitlemizle uyumlu, son derece işlevsel
                  </span>{" "}
                  ve estetik açıdan hoş kullanıcı arayüzleri oluşturmamızı
                  sağladı. Aynı şekilde etkileyici olan, premium destek ekibinin
                  proaktif yaklaşımıdır.
                </p>
                <div className="d-flex align-items-center mt-5">
                  <img
                    className="avatar-lg"
                    src="/assets/imgs/testimonial-1/avatar-4.png"
                    alt="infinia"
                  />
                  <div className="d-flex flex-column">
                    <h6 className="ms-3 fs-6 mb-0">E** A**</h6>
                    <div className="flag ms-3">
                      <span className="fs-8">Müşteri</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 z-0">
          <img src="/assets/imgs/testimonial-1/bg-line.png" alt="infinia" />
        </div>
      </section>
    </>
  );
}
