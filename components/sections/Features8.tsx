"use client";
import Link from "next/link";
import CountUp from "react-countup";

export default function Features8() {
  return (
    <>
      <section>
        <div className="container-fluid position-relative bg-primary-light section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-5 pe-lg-10 position-relative z-1">
                <img
                  src="/assets/imgs/features-8/icon-star.svg"
                  alt="Millenium Yazılım"
                />
                <h2 className="text-white mt-3 mb-4 fw-black">
                  Başlıca Çözümlerimiz
                </h2>
                <p className="text-white">
                  Sorunlarınızı hızla analiz ediyor, en uygun dijital çözümleri
                  en kısa sürede sunarak kalıcı ve sürdürülebilir başarıyı
                  hedefliyoruz.
                </p>
                <div className="col d-flex align-items-center mt-5 min-w-">
                  <span className="h2 count fw-black text-white min-w-70">
                    <span className="odometer" />
                    <CountUp end={98} enableScrollSpy={true} />
                  </span>
                  <span className="fw-medium text-white fs-4 align-self-start">
                    +
                  </span>
                  <p className="ms-3 text-white">
                    Tamamlanmış Proje
                    <br />
                    Mutlu Müşteriler
                  </p>
                </div>
                <div className="col d-flex align-items-center mt-5">
                  <span className="h2 count fw-black text-white min-w-70">
                    <span className="odometer" />
                    <CountUp end={100} enableScrollSpy={true} />
                  </span>
                  <span className="fs-4 fw-medium text-white align-self-start">
                    %
                  </span>
                  <p className="ms-3 text-white">Memnuniyet Garantisi</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-lg-8">
                <ul className="list-unstyled ">
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Millenium Yazılım"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Önceliğimiz Mutlu Müşteriler
                        </h5>
                        <p className="text-white mb-0">
                          Müşteri memnuniyetini her zaman ön planda tutuyor,
                          ihtiyaçlarınıza özel dijital çözümler sunarak
                          markanızı dijital dünyada başarıya ulaştırmayı
                          hedefliyoruz.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Millenium Yazılım"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Büyük Düşünün, Dijitalde Fark Yaratın
                        </h5>
                        <p className="text-white mb-0">
                          Markaların dijital dünyada sınırları aşmasını
                          sağlıyoruz. Yenilikçi stratejiler ve güçlü çözümlerle
                          büyük hedeflerinizi gerçeğe dönüştürüyoruz.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Millenium Yazılım"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Fark Yaratın, Dijitalde Öne Çıkın
                        </h5>
                        <p className="text-white mb-0">
                          Markanızı dijital dünyada benzersiz kılmak için
                          yaratıcı ve etkili çözümler sunuyoruz. Her projede
                          özgünlük ve değer katmayı hedefliyoruz.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 mb-lg-0 mb-8 pe-lg-8">
                <ul className="list-unstyled ">
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Millenium Yazılım"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Dürüstlük ve Güvenle Büyüyün
                        </h5>
                        <p className="text-white mb-0">
                          Tüm projelerimizde şeffaflık ve dürüstlük ilkelerine
                          bağlı kalarak güvenilir dijital çözümler sunuyoruz.
                          Müşterilerimizle uzun vadeli ve sağlam ilişkiler
                          kuruyoruz.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Millenium Yazılım"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Doğru Yer, Doğru Zaman
                        </h5>
                        <p className="text-white mb-0">
                          Her projede doğru stratejileri belirleyerek markanızı
                          dijital dünyada başarıya taşımak için çalışıyoruz.
                          Sizi doğru yolda yönlendiriyor ve hedeflerinize
                          ulaşmanızı sağlıyoruz.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-start mb-6">
                      <img
                        className="mt-2"
                        src="/assets/imgs/features-2/tick.svg"
                        alt="Millenium Yazılım"
                      />
                      <div className="ms-3 pb-4 border-bottom">
                        <h5 className="text-white mb-2">
                          Birlikte Daha Güçlüyüz
                        </h5>
                        <p className="text-white mb-0">
                          Güçlü bir ekip ruhuyla çalışarak markanızı dijital
                          dünyada daha sağlam bir konuma getiriyoruz. Birlikte
                          hareket ederek, her projede daha güçlü sonuçlar elde
                          ediyoruz.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-0 bg-rotate z-0">
            <img
              className="rotate-center"
              src="/assets/imgs/features-8/bg-img-favicon.png"
              alt="Millenium Yazılım"
            />
          </div>
          <div className="position-absolute top-0 end-0 z-1 p-8">
            <div className="bloom" />
          </div>
        </div>
      </section>
    </>
  );
}
