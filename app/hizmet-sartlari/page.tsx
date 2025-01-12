import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { metadatas } from "../metadata/metadata";

export const metadata: Metadata = {
  title: metadatas.hizmetSartlari.title,
  description: metadatas.hizmetSartlari.description,
  alternates: { canonical: metadatas.hizmetSartlari.canonical },
};

const page = () => {
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h1 style={{ fontSize: "38px !important" }}>Hizmet Şartları</h1>
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
              <p className="text-primary mb-0">Hizmet Şartları</p>
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

      <section className="section-cta-6 position-relative fix">
        <div className="container">
          <div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
            <p>
              Bu hizmet şartları, Millenium Yazılım’ın sunduğu ürün ve
              hizmetlerden faydalanan kullanıcılar için geçerlidir.
              Hizmetlerimizi kullanarak, bu şartları kabul etmiş sayılırsınız.
              Lütfen detaylı olarak okuyunuz.
            </p>
            <h6>Hizmetlerin Kapsamı</h6>
            <p>
              Millenium Yazılım, web geliştirme, mobil uygulama çözümleri,
              e-ticaret altyapıları ve profesyonel marka yönetimi gibi hizmetler
              sunmaktadır. Tüm hizmetlerimiz, iş ortaklarımızla yaptığımız
              anlaşmalara ve yasal düzenlemelere uygun şekilde sağlanır.
            </p>
            <p>
              Kişisel verileriniz üçüncü şahıslarla paylaşılmadan önce her zaman
              gerekli önlemleri alıyoruz. Yasal gereklilikler veya hizmet
              ortaklarımızla yapılan anlaşmalar kapsamında bazı durumlarda
              bilgileriniz paylaşılabilir. Ancak, bilgilerinizin güvenliği ve
              gizliliği her zaman önceliğimizdir.
            </p>
            <h6>Kullanıcı Sorumlulukları</h6>
            <p>
              Kullanıcılar, Millenium Yazılım’ın sunduğu hizmetleri yalnızca
              yasal ve ahlaki amaçlar doğrultusunda kullanmayı kabul eder.
              Herhangi bir yasa dışı içerik paylaşımı, fikri mülkiyet haklarını
              ihlal eden materyallerin kullanımı veya üçüncü tarafların
              haklarını ihlal eden eylemler kesinlikle yasaktır.
            </p>
            <h6>Ödeme ve Faturalandırma</h6>
            <p>
              Millenium Yazılım tarafından sağlanan hizmetlerin
              ücretlendirilmesi, anlaşma sırasında belirlenen koşullara tabidir.
              Ödemeler, belirtilen sürelerde ve yöntemlerle yapılmalıdır.
              Ödemelerin gecikmesi durumunda hizmetlerin durdurulması veya
              askıya alınması hakkını saklı tutarız.
            </p>
            <h6>Hizmetlerde Değişiklik</h6>
            <p>
              Millenium Yazılım, sunduğu hizmetleri iyileştirmek, güncellemek
              veya durdurmak hakkını saklı tutar. Bu tür durumlarda,
              kullanıcıları önceden bilgilendirmek için makul çabalar
              gösterilir.
            </p>
            <h6>Sorumluluk Reddi</h6>
            <p>
              Millenium Yazılım, hizmetlerin kesintisiz, hatasız veya
              beklentilerinizi tamamen karşılayacağına dair garanti vermez.
              Kullanıcılar, hizmetlerimizden doğrudan veya dolaylı olarak
              kaynaklanabilecek herhangi bir kayıp veya zarar için şirketimizin
              sorumluluk taşımadığını kabul eder.
            </p>
            <h6>Fikri Mülkiyet Hakları</h6>
            <p>
              Millenium Yazılım tarafından sağlanan yazılım, tasarım, metin ve
              diğer içerikler telif hakkı ile korunmaktadır. Kullanıcılar, bu
              materyalleri izinsiz çoğaltamaz, dağıtamaz veya ticari amaçlarla
              kullanamaz.
            </p>
            <h6>İptal ve İade Koşulları</h6>
            <p>
              Kullanıcılar, hizmet başlangıç tarihinden önce iptal talebinde
              bulunabilir. Ancak, yapılan çalışmalar ve harcanan emek göz önüne
              alınarak belirli bir kesinti uygulanabilir. Tamamlanmış projeler
              için iade mümkün değildir.
            </p>
            <h6>Yasal Düzenlemeler</h6>
            <p>
              Bu hizmet şartları, Türkiye Cumhuriyeti yasalarına tabidir.
              Herhangi bir anlaşmazlık durumunda, Ankara Mahkemeleri yetkili
              olacaktır.
            </p>
            <h6>İletişim</h6>
            <p>
              Hizmet şartları hakkında sorularınız veya talepleriniz için
              bizimle iletişime geçebilirsiniz: E-posta:
              <strong>info@milleniumyazilim.com.tr</strong> Bu hizmet şartları,
              Millenium Yazılım’ın sunduğu tüm hizmetler için geçerlidir.
              Şartlarda yapılan değişiklikler, web sitemiz üzerinden
              duyurulacaktır. Güncellemeler için lütfen bu sayfayı düzenli
              olarak kontrol edin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
