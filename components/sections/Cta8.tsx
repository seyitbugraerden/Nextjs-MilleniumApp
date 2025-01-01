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
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Biz Kimiz?
                  </span>
                </div>
                <h5 className="ds-5 mt-2">
                  Dijital Dünyada Birlikte Güçleniyoruz
                </h5>
                <p>
                  Web tasarımı, mobil uygulama geliştirme, sosyal medya
                  yönetimi, e-ticaret çözümleri ve CRM sistemleriyle markaların
                  dijital dünyadaki potansiyelini maksimize ediyoruz. Yenilikçi
                  ve kullanıcı dostu çözümlerle dijital dönüşüm yolculuğunuzda
                  yanınızdayız.
                </p>
                <div className="d-flex pt-3 align-items-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-4/icon-1.svg"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6>Başarılı Sonuçlar</h6>
                    <p>
                      her projede somut ve ölçülebilir sonuçlar elde etmeyi
                      hedefliyoruz. Web tasarımı, mobil uygulama geliştirme,
                      sosyal medya yönetimi ve e-ticaret çözümlerimizle
                      markanızın dijital performansını en üst seviyeye
                      taşıyoruz. Stratejik yaklaşımlar ve veri odaklı
                      analizlerle başarıyı sürdürülebilir hale getiriyoruz.
                    </p>
                  </div>
                </div>
                <div className="d-flex pt-3 align-items-center">
                  <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                    <div className="icon">
                      <img
                        src="/assets/imgs/service-4/icon-2.svg"
                        alt="infinia"
                      />
                    </div>
                  </div>
                  <div className="ps-5">
                    <h6>Müşteri Memnuniyeti</h6>
                    <p>
                      Müşteri memnuniyetini her zaman ön planda tutuyoruz.
                      İhtiyaçlarınıza özel dijital çözümler sunarak,
                      projelerimizi zamanında ve eksiksiz teslim ediyoruz.
                      Güven, şeffaf iletişim ve kaliteli hizmet anlayışımızla
                      uzun vadeli iş ortaklıkları kurmayı hedefliyoruz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
                <div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
                  <img
                    className="rounded-4 position-relative z-1"
                    src="/assets/imgs/cta-5/img-1.png"
                    alt="infinia"
                  />
                  <div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
                    <span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">
                      <span className="odometer" />{" "}
                      <CountUp end={45} enableScrollSpy={true} />+
                    </span>
                    <p className="text-white text-nowrap mb-0">
                      Tamamlanmış Proje
                    </p>
                  </div>
                  <div className="position-absolute tag-dots z-0 pt-5">
                    <img
                      className="alltuchtopdown"
                      src="/assets/imgs/cta-4/vector.svg"
                      alt="infinia"
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
