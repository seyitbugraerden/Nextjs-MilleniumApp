import Link from "next/link";

export default function HowItWork2({
  selectedService,
}: {
  selectedService: any;
}) {
  return (
    <>
      <section className="howitwork-2 section-padding position-relative fix">
        <div className="container position-relative z-1">
          <div className="text-center mb-8">
            <div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
              <img src="/assets/imgs/features-1/dots.png" alt="Millenium Yazılım" />
              <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                {selectedService?.how.title}
              </span>
            </div>
            <h3 className="ds-3 my-3 fw-black">
              {selectedService?.how.subTitle}
            </h3>
            <p className="fs-5 mb-0">{selectedService?.how.description}</p>
          </div>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x z-0">
          <img src="/assets/imgs/howitwork-2/img-bg-line.png" alt="Millenium Yazılım" />
        </div>
        <div className="container">
          <div className="row position-relative justify-content-center">
            <div className="col-lg-4 text-center px-md-10">
              <div className="card-service-4 text-center mt-2">
                <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                  <div className="icon">
                    <img
                      src="/assets/imgs/howitwork-2/icon-1.svg"
                      alt="Millenium Yazılım"
                    />
                  </div>
                </div>
                <h5 className="my-3">{selectedService?.how.step_one.title}</h5>
                <p className="mb-6">
                  {selectedService?.how.step_one.description}
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center px-md-10">
              <div className="card-service-4 text-center mt-2">
                <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                  <div className="icon">
                    <img
                      src="/assets/imgs/howitwork-2/icon-2.svg"
                      alt="Millenium Yazılım"
                    />
                  </div>
                </div>
                <h5 className="my-3">{selectedService?.how.step_two.title}</h5>
                <p className="mb-6">
                  {selectedService?.how.step_two.description}
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-center px-md-10">
              <div className="card-service-4 text-center mt-2">
                <div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
                  <div className="icon">
                    <img
                      src="/assets/imgs/howitwork-2/icon-3.svg"
                      alt="Millenium Yazılım"
                    />
                  </div>
                </div>
                <h5 className="my-3">{selectedService?.how.step_three.title}</h5>
                <p className="mb-6">
                  {selectedService?.how.step_three.description}
                </p>
              </div>
            </div>
          </div>
          <div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
            <img src="/assets/imgs/howitwork-2/arrow-1.png" alt="Millenium Yazılım" />
          </div>
          <div className="navigation-arrow-2 d-none d-lg-block position-absolute">
            <img src="/assets/imgs/howitwork-2/arrow-2.png" alt="Millenium Yazılım" />
          </div>
          <div className="bouncing-blobs-container">
            <div className="bouncing-blobs-glass" />
            <div className="bouncing-blobs">
              <div className="bouncing-blob bouncing-blob--green" />
              <div className="bouncing-blob bouncing-blob--primary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
