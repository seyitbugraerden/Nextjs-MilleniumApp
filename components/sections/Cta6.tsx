import Link from "next/link";

export default function Cta6() {
  return (
    <>
      <section className="section-cta-6 position-relative section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pe-lg-0">
              <div className="zoom-img rounded-end-lg-0 rounded-4">
                <img
                  className="rounded-end-lg-0 rounded-4"
                  src="/assets/imgs/cta-6/img-1.png"
                  alt="infinia"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
              <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
                <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill mb-2 px-4 py-2">
                  <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                  <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                    Başlıca Biz
                  </span>
                </div>
                <h1 className="fs-1">
                  Dijital Geleceğinizi Birlikte İnşa Ediyoruz
                </h1>
                <p>
                  Millenium Digital olarak, markaların dijital dünyadaki
                  potansiyellerini en üst seviyeye taşımak için yenilikçi
                  çözümler üretiyoruz. Web sitesi tasarımı, mobil uygulama
                  geliştirme, sosyal medya yönetimi, e-ticaret çözümleri ve CRM
                  sistemleri gibi geniş bir hizmet yelpazesiyle dijital dönüşüm
                  yolculuğunuzda yanınızdayız.
                </p>
                <p>
                  Uzman ekibimizle, her projeyi markanızın ihtiyaçlarına özel
                  olarak tasarlıyor, estetik ve işlevselliği bir araya getirerek
                  dijital dünyada fark yaratmanızı sağlıyoruz. Teknolojiyi
                  yakından takip ederek, sürdürülebilir ve kullanıcı dostu
                  çözümler sunuyoruz.
                </p>
                <p>
                  Dijital varlığınızı güçlendirmek ve hedeflerinize daha hızlı
                  ulaşmak için Millenium Digital ile tanışın. Geleceği birlikte
                  inşa edelim!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
