"use client";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const page = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Çözümlerimiz</h3>
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
              <Link href="/">
                <p className="mb-0 text-900">Kurumsal</p>
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
              <p className="text-primary mb-0">Çözümlerimiz</p>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src="/assets/imgs/page-header/bg-line.png"
          alt="infinia"
        />
        <div className="bouncing-blobs-container">
          <div className="bouncing-blobs-glass" />
          <div className="bouncing-blobs">
            <div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
            <div className="position-absolute top-0 end-0 bouncing-blob--primary" />
          </div>
        </div>
      </section>

      <section className="section-feature-5">
        <div className="container-fluid position-relative section-padding bg-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="photo-description position-relative  rounded-4">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/features-5/img-1.png"
                    alt="infinia"
                  />
                  <div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
                <h4 className="ds-4 fw-regular">
                  All that's necessary <br /> for{" "}
                  <span
                    className="fw-bold"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  >
                    effective team <br className="d-none d-lg-inline" /> effort.
                  </span>
                </h4>
                <p className="fs-5">
                  Provide your team with top-tier group mentoring programs and
                  exceptional professional benefits.
                </p>
                <Link
                  href="#"
                  className="btn btn-outline-secondary hover-up bg-transparent mt-5"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Explore Now
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      className="stroke-dark"
                      d="M17.25 15.25V6.75H8.75"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-dark"
                      d="M17 7L6.75 17.25"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="row py-90">
              <div className="col-lg-10 px-lg-0 mx-lg-auto d-lg-flex justify-content-lg-between">
                <Link
                  href="#"
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={0}
                >
                  Team Messaging
                </Link>
                <Link
                  href="#"
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100}
                >
                  4K Video
                </Link>
                <Link
                  href="#"
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  Ultimate Collaboration
                </Link>
                <Link
                  href="#"
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Unified Communications
                </Link>
                <Link
                  href="#"
                  className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3"
                  data-aos="fade-zoom-in"
                  data-aos-delay={400}
                >
                  Advanced Meeting
                </Link>
              </div>
            </div>
            <div className="row align-items-start pb-5 pt-lg-5 pt-0">
              <div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
                <h4 className="ds-4 fw-regular">
                  Experience the <br />{" "}
                  <span
                    className="fw-bold"
                    data-aos="fade-zoom-in"
                    data-aos-delay={200}
                  >
                    cutting-edge <br />
                  </span>
                  capabilities
                </h4>
                <p className="fs-5">
                  Provide your team with top-tier group mentoring programs and
                  exceptional professional benefits.
                </p>
                <Link
                  href="#"
                  className="btn btn-outline-secondary hover-up bg-transparent mt-5"
                  data-aos="fade-zoom-in"
                  data-aos-delay={300}
                >
                  Explore Now
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      className="stroke-dark"
                      d="M17.25 15.25V6.75H8.75"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      className="stroke-dark"
                      d="M17 7L6.75 17.25"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
                <div className="photo-description position-relative rounded-4 d-inline-block">
                  <img
                    className="rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/features-5/img-2.png"
                    alt="infinia"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle z-0">
                    <div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0"></div>
                  </div>
                  <img
                    className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1"
                    src="/assets/imgs/features-5/img-3.png"
                    alt="infinia"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid position-relative bg-linear-3 section-padding">
          <div className="container">
            <div className="text-center mb-8">
              <div
                className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
                  What we offers
                </span>
              </div>
              <h3 className="ds-3 my-3 fw-regular">
                Professional
                <span
                  className="fw-bold"
                  data-aos="fade-zoom-in"
                  data-aos-delay={200}
                >
                  UltraHD Video <br className="d-none d-lg-block" />
                  Conferencing
                </span>
                Platform
              </h3>
            </div>
            <div className="row">
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={0}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-1.svg"
                    alt="infinia"
                  />
                  <h6 className="my-3 fs-5">Unified Communications</h6>
                  <p className="mb-6">
                    Promptly solve urgent work issues! Create personal and group
                    chats that allow for exchanging messages not only during
                    conferences but also outside of them.
                  </p>
                  <Link
                    href="#"
                    className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                  >
                    <svg
                      className="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#)">
                        <path
                          className="fill-dark"
                          d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                          fill="#111827"
                        />
                      </g>
                    </svg>
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                        fill="#111827"
                      />
                    </svg>
                    <span className="fw-bold fs-7 text-900">Learm More</span>
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={100}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-2.svg"
                    alt="infinia"
                  />
                  <h6 className="my-3 fs-5">Team Messenger</h6>
                  <p className="mb-6">
                    Promptly solve urgent work issues! Create personal and group
                    chats that allow for exchanging messages not only during
                    conferences but also outside of them.
                  </p>
                  <Link
                    href="#"
                    className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                  >
                    <svg
                      className="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#)">
                        <path
                          className="fill-dark"
                          d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                          fill="#111827"
                        />
                      </g>
                    </svg>
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                        fill="#111827"
                      />
                    </svg>
                    <span className="fw-bold fs-7 text-900">Learm More</span>
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={200}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-3.svg"
                    alt="infinia"
                  />
                  <h6 className="my-3 fs-5">Telephony and PBX</h6>
                  <p className="mb-6">
                    Promptly solve urgent work issues! Create personal and group
                    chats that allow for exchanging messages not only during
                    conferences but also outside of them.
                  </p>
                  <Link
                    href="#"
                    className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                  >
                    <svg
                      className="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#)">
                        <path
                          className="fill-dark"
                          d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                          fill="#111827"
                        />
                      </g>
                    </svg>
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                        fill="#111827"
                      />
                    </svg>
                    <span className="fw-bold fs-7 text-900">Learm More</span>
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-zoom-in"
                data-aos-delay={300}
              >
                <div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
                  <img
                    className="filter-invert"
                    src="/assets/imgs/features-4/icon-4.svg"
                    alt="infinia"
                  />
                  <h6 className="my-3 fs-5">Smart Meeting</h6>
                  <p className="mb-6">
                    Promptly solve urgent work issues! Create personal and group
                    chats that allow for exchanging messages not only during
                    conferences but also outside of them.
                  </p>
                  <Link
                    href="#"
                    className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more"
                  >
                    <svg
                      className="plus"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#)">
                        <path
                          className="fill-dark"
                          d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z"
                          fill="#111827"
                        />
                      </g>
                    </svg>
                    <svg
                      className="arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      fill="none"
                    >
                      <path
                        className="fill-dark"
                        d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z"
                        fill="#111827"
                      />
                    </svg>
                    <span className="fw-bold fs-7 text-900">Learm More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-8">
              <div className="col-lg-7">
                <div className="d-flex align-items-center justify-content-lg-end justify-content-center">
                  <Link href="#" className="btn btn-gradient">
                    Get Free Quote
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        className="stroke-white"
                        d="M17.25 15.25V6.75H8.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="stroke-white"
                        d="M17 7L6.75 17.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="ms-5 text-decoration-underline fw-bold"
                  >
                    How We Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
