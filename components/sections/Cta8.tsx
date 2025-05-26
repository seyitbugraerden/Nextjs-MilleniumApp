"use client";
import CountUp from "react-countup";

export default function Cta8() {
  return (
    <>
      <section className="section-cta-8 bg-4">
        <div className="container-fluid position-relative section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
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
                    Biz Kimiz?
                  </span>
                </div>
                <h5 className="ds-5 mt-2">
                  Dijital Geleceğinizi Birlikte Tasarlayalım
                </h5>
                <p className="text-justify">
                  Web tasarımı ve geliştirme, mobil uygulama çözümleri,
                  e-ticaret altyapıları, sosyal medya yönetimi ve CRM sistemleri
                  başta olmak üzere, markanızın dijital dünyadaki tüm
                  ihtiyaçlarını karşılıyoruz. SEO ve dijital pazarlama
                  stratejilerimizle marka bilinirliğinizi artırıyor, kurumsal
                  web sitesi çözümleri ve web uygulama geliştirme
                  hizmetlerimizle dijital varlığınızı güçlendiriyoruz. Ayrıca,
                  marka yönetimi, grafik tasarım ve kullanıcı dostu arayüzlerle
                  hedef kitlenize etkili bir şekilde ulaştırıyoruz. Dijital
                  dönüşüm sürecinizde, yenilikçi ve sürdürülebilir
                  çözümlerimizle her zaman yanınızdayız.
                </p>
                <div className="d-flex pt-3 align-items-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-4/icon-1.svg"
                        alt="Millenium Yazılım"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6>Başarılı Sonuçlar</h6>
                    <p>
                      Her projede somut ve ölçülebilir sonuçlar elde etmeyi
                      amaçlıyoruz. Web tasarımı, mobil uygulama geliştirme,
                      sosyal medya yönetimi ve e-ticaret çözümlerimiz ile
                      markanızın dijital performansını en üst seviyeye
                      çıkarıyoruz. Stratejik yaklaşımlarımız ve veri odaklı
                      analiz yöntemlerimiz sayesinde başarıyı sürdürülebilir
                      hale getiriyoruz.
                    </p>
                  </div>
                </div>
                <div className="d-flex pt-3 align-items-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-4/icon-2.svg"
                        alt="Millenium Yazılım"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6>Müşteri Memnuniyeti</h6>
                    <p>
                      Müşteri memnuniyetini tüm süreçlerimizin merkezinde
                      tutuyoruz. İhtiyacınıza özel geliştirilen dijital çözümler
                      ile projeleri zamanında ve eksiksiz bir şekilde teslim
                      ediyoruz. Güvene dayalı iş ilişkileri, şeffaf iletişim ve
                      yüksek hizmet kalitesi anlayışımızla uzun vadeli iş
                      ortaklıkları kurmayı hedefliyoruz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
                <div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
                  <img
                    className="rounded-4 position-relative z-1"
                    src="/assets/imgs/cta-5/img-1.webp"
                    alt="Millenium Yazılım"
                  />
                  <div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
                    <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
                      <span className="odometer" />{" "}
                      <CountUp end={50} enableScrollSpy={true} />+
                    </span>
                    <p className="text-white text-nowrap mb-0">
                      Tamamlanmış Proje
                    </p>
                  </div>
                  <div className="position-absolute tag-dots z-0 pt-5">
                    <img
                      className="alltuchtopdown"
                      src="/assets/imgs/cta-4/vector.svg"
                      alt="Millenium Yazılım"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
