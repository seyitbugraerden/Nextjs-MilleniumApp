"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function Services6() {

    // Nav
    const [isNav, setIsNav] = useState(1)

    const handleNav = (i: any) => {
        setIsNav(i)
    }

    return (
        <>
            <section className="section-services-4 position-relative fix section-padding">
                <div className="container position-relative z-2">
                    <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                            <img src="/assets/imgs/features-1/dots.png" alt="infinia" />
                            <span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
                        </div>
                        <h3 className="ds-3 my-3 fw-regular">Building <span className=" fw-bold">enduring value <br className="d-none d-md-inline" /> </span>through <span className="fw-bold">bold</span> strategies</h3>
                    </div>
                    <div className="row pt-8">
                        <div className="col-lg-4">
                            <div className="d-flex align-items-start">
                                <div className="nav w-100 flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button className={`${isNav == 1 ? "active" : ""} nav-link pe-5 justify-content-between d-flex`} onClick={() => handleNav(1)} id="v-pills-financial-tab" data-bs-toggle="pill" data-bs-target="#v-pills-financial" type="button" role="tab" aria-controls="v-pills-financial" aria-selected="true">
                                        Financial Consultancy
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path className="fill-white" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="white" />
                                        </svg>
                                    </button>
                                    <button className={`${isNav == 2 ? "active" : ""} nav-link pe-5 justify-content-between d-flex`} onClick={() => handleNav(2)} id="v-pills-business-tab" data-bs-toggle="pill" data-bs-target="#v-pills-business" type="button" role="tab" aria-controls="v-pills-business" aria-selected="false">
                                        Business Consultancy
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path className="fill-white" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="white" />
                                        </svg>
                                    </button>
                                    <button className={`${isNav == 3 ? "active" : ""} nav-link pe-5 justify-content-between d-flex`} onClick={() => handleNav(3)} id="v-pills-solicitory-tab" data-bs-toggle="pill" data-bs-target="#v-pills-solicitory" type="button" role="tab" aria-controls="v-pills-solicitory" aria-selected="false">
                                        Solicitory Consultancy
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path className="fill-white" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="white" />
                                        </svg>
                                    </button>
                                    <button className={`${isNav == 4 ? "active" : ""} nav-link pe-5 justify-content-between d-flex`} onClick={() => handleNav(4)} id="v-pills-hr-consultancy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hr-consultancy" type="button" role="tab" aria-controls="v-pills-hr-consultancy" aria-selected="false">
                                        HR Consultancy
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path className="fill-white" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="white" />
                                        </svg>
                                    </button>
                                    <button className={`${isNav == 5 ? "active" : ""} nav-link pe-5 justify-content-between d-flex`} onClick={() => handleNav(5)} id="v-pills-strategy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-strategy" type="button" role="tab" aria-controls="v-pills-strategy" aria-selected="false">
                                        Strategy Consultancy
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path className="fill-white" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="white" />
                                        </svg>
                                    </button>
                                    <button className={`${isNav == 6 ? "active" : ""} nav-link pe-5 justify-content-between d-flex`} onClick={() => handleNav(6)} id="v-pills-start-up-tab" data-bs-toggle="pill" data-bs-target="#v-pills-start-up" type="button" role="tab" aria-controls="v-pills-start-up" aria-selected="false">
                                        Start Ups
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path className="fill-white" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className={`${isNav == 1 ? "show active" : ""} tab-pane fade`} id="v-pills-financial" role="tabpanel" aria-labelledby="v-pills-financial-tab" tabIndex={0}>
                                    <div className="row align-items-center rounded-3 bg-white p-5">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                            <img className="rounded-3" src="/assets/imgs/service-4/img-1.png" alt="" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-lg-3">
                                                <h4 className="fw-regular">Pick Your <span className="fw-bold">Premium</span></h4>
                                                <p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
                                                <div className="d-flex pt-5">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Research planning</h6>
                                                        <p>Separating your work from your home <br /> life can improve work-life balance.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Investment</h6>
                                                        <p>A business consultant provides expert <br /> advice and guidance to businesses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${isNav == 2 ? "show active" : ""} tab-pane fade`} id="v-pills-business" role="tabpanel" aria-labelledby="v-pills-business-tab" tabIndex={0}>
                                    <div className="row align-items-center rounded-3 bg-white p-5">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                            <img className="rounded-3" src="/assets/imgs/service-4/img-2.png" alt="" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-lg-3">
                                                <h4 className="fw-regular">Build Lasting<span className="fw-bold">Partnerships</span></h4>
                                                <p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
                                                <div className="d-flex pt-5">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Research planning</h6>
                                                        <p>Separating your work from your home <br /> life can improve work-life balance.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Investment</h6>
                                                        <p>A business consultant provides expert <br /> advice and guidance to businesses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${isNav == 3 ? "show active" : ""} tab-pane fade`} id="v-pills-solicitory" role="tabpanel" aria-labelledby="v-pills-solicitory-tab" tabIndex={0}>
                                    <div className="row align-items-center rounded-3 bg-white p-5">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                            <img className="rounded-3" src="/assets/imgs/service-4/img-3.png" alt="" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-lg-3">
                                                <h4 className="fw-regular">Enhance <span className="fw-bold">Operational</span></h4>
                                                <p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
                                                <div className="d-flex pt-5">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Research planning</h6>
                                                        <p>Separating your work from your home <br /> life can improve work-life balance.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Investment</h6>
                                                        <p>A business consultant provides expert <br /> advice and guidance to businesses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${isNav == 4 ? "show active" : ""} tab-pane fade`} id="v-pills-hr-consultancy" role="tabpanel" aria-labelledby="v-pills-hr-consultancy-tab" tabIndex={0}>
                                    <div className="row align-items-center rounded-3 bg-white p-5">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                            <img className="rounded-3" src="/assets/imgs/service-4/img-4.png" alt="" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-lg-3">
                                                <h4 className="fw-regular">Sustainable <span className="fw-bold">Growth</span></h4>
                                                <p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
                                                <div className="d-flex pt-5">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Research planning</h6>
                                                        <p>Separating your work from your home <br /> life can improve work-life balance.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Investment</h6>
                                                        <p>A business consultant provides expert <br /> advice and guidance to businesses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${isNav == 5 ? "show active" : ""} tab-pane fade`} id="v-pills-strategy" role="tabpanel" aria-labelledby="v-pills-strategy-tab" tabIndex={0}>
                                    <div className="row align-items-center rounded-3 bg-white p-5">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                            <img className="rounded-3" src="/assets/imgs/service-4/img-5.png" alt="" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-lg-3">
                                                <h4 className="fw-regular">Continuous <span className="fw-bold">Evolution</span></h4>
                                                <p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
                                                <div className="d-flex pt-5">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Research planning</h6>
                                                        <p>Separating your work from your home <br /> life can improve work-life balance.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Investment</h6>
                                                        <p>A business consultant provides expert <br /> advice and guidance to businesses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${isNav == 6 ? "show active" : ""} tab-pane fade`} id="v-pills-start-up" role="tabpanel" aria-labelledby="v-pills-start-up-tab" tabIndex={0}>
                                    <div className="row align-items-center rounded-3 bg-white p-5">
                                        <div className="col-lg-5 mb-lg-0 mb-5">
                                            <img className="rounded-3" src="/assets/imgs/service-4/img-6.png" alt="" />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="p-lg-3">
                                                <h4 className="fw-regular">Empower <span className="fw-bold">Businesses</span></h4>
                                                <p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
                                                <div className="d-flex pt-5">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Research planning</h6>
                                                        <p>Separating your work from your home <br /> life can improve work-life balance.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
                                                        <div className="icon">
                                                            <img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
                                                        </div>
                                                    </div>
                                                    <div className="ps-5">
                                                        <h6>Investment</h6>
                                                        <p>A business consultant provides expert <br /> advice and guidance to businesses.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <Link href="#" className="btn btn-gradient">
                            Get a Free Quote
                            <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link href="#" className="ms-md-3 mt-md-0 mt-3 btn btn-outline-secondary hover-up">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Our Help Center
                        </Link>
                    </div>
                </div>
                <div className="position-absolute top-0 start-50 translate-middle-x z-0">
                    <img src="/assets/imgs/blog-2/img-bg-line.png" alt="infinia" />
                </div>
                <div className="bouncing-blobs-container">
                    <div className="bouncing-blobs-glass" />
                    <div className="bouncing-blobs">
                        <div className="bouncing-blob bouncing-blob--green" />
                        <div className="bouncing-blob bouncing-blob--primary" />
                    </div>
                </div>
            </section>
        </>
    )
}
