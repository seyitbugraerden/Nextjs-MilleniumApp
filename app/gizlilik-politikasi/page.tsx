import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { metadatas } from "../metadata/metadata";

export const metadata: Metadata = {
  title: metadatas.gizlilikPolitikasi.title,
  description: metadatas.gizlilikPolitikasi.description,
  alternates: { canonical: metadatas.gizlilikPolitikasi.canonical },
};

const page = () => {
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h1 style={{ fontSize: "38px !important" }}>Gizlilik Politikası</h1>
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
              <p className="text-primary mb-0">Gizlilik Politikası</p>
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
              Millenium Yazılım olarak, kullanıcılarımızın gizliliğini önemsiyor
              ve verilerinizi güvenli bir şekilde koruyoruz. Web sitemizde ve
              hizmetlerimizde edindiğimiz her türlü kişisel bilgi, yalnızca açık
              rızanız doğrultusunda ve yasal gereklilikler çerçevesinde
              işlenmektedir.
            </p>
            <p>
              Hizmetlerimiz kapsamında, adınız, soyadınız, e-posta adresiniz,
              telefon numaranız gibi iletişim bilgileriniz ile IP adresiniz ve
              tarayıcı bilgileriniz gibi teknik veriler toplanabilir. Bu
              bilgiler, size daha iyi bir kullanıcı deneyimi sunmak,
              hizmetlerimizi geliştirmek ve size özel kampanyalar hazırlamak
              amacıyla kullanılmaktadır.
            </p>
            <p>
              Kişisel verileriniz üçüncü şahıslarla paylaşılmadan önce her zaman
              gerekli önlemleri alıyoruz. Yasal gereklilikler veya hizmet
              ortaklarımızla yapılan anlaşmalar kapsamında bazı durumlarda
              bilgileriniz paylaşılabilir. Ancak, bilgilerinizin güvenliği ve
              gizliliği her zaman önceliğimizdir.
            </p>
            <p>
              Web sitemiz kullanıcı deneyimini geliştirmek amacıyla çerezler
              kullanmaktadır. Çerezler, siteyi nasıl kullandığınızı analiz
              ederek, size daha iyi bir hizmet sunmamıza yardımcı olur. Çerez
              tercihlerinizi tarayıcı ayarlarınızdan kolayca
              düzenleyebilirsiniz.
            </p>
            <p>
              Kişisel verilerinizle ilgili olarak erişim talebinde bulunabilir,
              düzeltilmesini isteyebilir veya silinmesini talep edebilirsiniz.
              Talepleriniz için bizimle her zaman iletişime geçebilirsiniz. Bize
              ulaşmak için <strong>info@milleniumyazilim.com.tr</strong>
              adresini kullanabilirsiniz.
            </p>
            <p>
              Gizlilik politikamızda yapılan güncellemeler, kullanıcılarımızı
              bilgilendirmek için web sitemizde yayınlanacaktır. Daha fazla
              bilgi ve güncellemeler için lütfen bu sayfayı düzenli olarak
              kontrol edin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
