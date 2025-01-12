"use client";
import { useQueryState } from "nuqs";
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = [
  { id: "", label: "Tüm Projeler" },
  { id: "web-tasarim-ve-gelistirme", label: "Web Tasarım ve Geliştirme" },
  { id: "mobil-uygulama-cozumleri", label: "Mobil Uygulama Çözümleri" },
  { id: "e-ticaret-cozumleri", label: "E-Ticaret Çözümleri" },
  { id: "sosyal-medya-cozumleri", label: "Sosyal Medya Çözümleri" },
  { id: "seo-ve-dijital-pazarlama", label: "SEO ve Dijital Pazarlama" },
  { id: "marka-yonetimi-ve-strateji", label: "Marka Yönetimi ve Strateji" },
  { id: "crm-cozumleri", label: "CRM Çözümleri" },
  {
    id: "kurumsal-web-sitesi-cozumleri",
    label: "Kurumsal Web Sitesi Çözümleri",
  },
  { id: "web-uygulama-gelistirme", label: "Web Uygulama Geliştirme" },
  { id: "logo-ve-grafik-tasarim", label: "Logo ve Grafik Tasarım" },
];

const PROJECTS: any[] = [
  // { id: 1, filter: "crm-cozumleri", title: "CRM Çözümleri", description: "Şirketinizi Tek Bir Yerde Yönetin", image: "/assets/imgs/project-1/img-1.png" },
  // { id: 2, filter: "web-tasarim-ve-gelistirme", title: "Web Tasarım ve Geliştirme", description: "Modern ve İşlevsel Web Siteleri", image: "/assets/imgs/project-1/img-1.png" },
  // { id: 3, filter: "mobil-uygulama-cozumleri", title: "Mobil Uygulama Çözümleri", description: "İnovatif Mobil Deneyimler", image: "/assets/imgs/project-1/img-1.png" },
];

export default function Services5() {
  const [selectedFilter, setSelectedFilter] = useQueryState("filter");

  const filteredProjects = useMemo(() => {
    if (!selectedFilter) return PROJECTS;
    return PROJECTS.filter((project) => project.filter === selectedFilter);
  }, [selectedFilter]);

  return (
    <>
      <section className="section-team-1 position-relative fix section-padding">
        <div className="container position-relative z-2">
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <img src="/assets/imgs/features-1/dots.png" alt="Millenium Yazılım" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                Projelerimiz
              </span>
            </div>
            <h3 className="ds-3 my-3">Projelerimizi Keşfedin</h3>
            <p className="fs-5">
              Yaratıcı ve etkili dijital çözümlerle gerçekleştirdiğimiz
              projelerle markalarımıza değer katıyoruz.{" "}
              <br className="d-none d-lg-block" />
              Her bir proje, hedeflerinize ulaşmanız için sunduğumuz yenilikçi
              ve özgün yaklaşımların bir örneğidir.
            </p>
          </div>
          <div className="text-center mt-6">
            <div className="button-group filter-button-group filter-menu-active">
              {FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  className={`btn btn-md btn-filter mb-2 me-2 ${
                    selectedFilter === filter.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <motion.div layout className="row justify-content-between">
          <AnimatePresence>
            {filteredProjects?.map((project) => (
              <motion.div
                key={project.id}
                className="col-12 col-md-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <div className="project-item zoom-img rounded-2 fix position-relative">
                  <img
                    className="rounded-2"
                    src={project.image}
                    alt={project.title}
                  />
                  <a
                    href="#"
                    className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3"
                  >
                    <span className="shadow-sm d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1 mb-3">
                      <span className="fs-7 fw-medium text-primary mx-2">
                        {project.title}
                      </span>
                    </span>
                    <h5 className="text-700">{project.description}</h5>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
