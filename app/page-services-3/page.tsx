"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import CountUp from 'react-countup'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function PageServices3() {

	const swiperOptions = {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	}

	// Tab 
	const [isTab, setIsTab] = useState(1)

	const handleTab = (i: any) => {
		setIsTab(i)
	}

	// Nav
	const [isNav, setIsNav] = useState(1)

	const handleNav = (i: any) => {
		setIsNav(i)
	}

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Our Services</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Our Services</p>
							</div>
						</div>
					</div>
					<img className="position-absolute bottom-0 start-0 end-0 top-0 z-0" src="/assets/imgs/page-header/bg-line.png" alt="infinia" />
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
							<div className="position-absolute top-0 end-0 bouncing-blob--primary" />
						</div>
					</div>
				</section>
				{/* cta 7 */}
				<section>
					<div className="container-fluid position-relative section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<h5 className="fw-regular ds-5">High <span className="fw-bold">Performance <br /> Services For </span> All Industries.</h5>
								</div>
								<div className="row align-items-center">
									<div className="col-lg-6 text-lg-start text-center">
										<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
											<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-7/img-1.png" alt="infinia" />
											<div className="alltuchtopdown position-absolute top-50 start-50 ms-md-10 mt-md-10 backdrop-filter bg-primary rounded-4 px-6 py-4 text-center z-1">
												<span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={23} enableScrollSpy={true} />k</span>
												<p className="text-white text-nowrap border-bottom border-opacity-50 border-white pb-3 mb-3">Projects Completed</p>
												<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={98} enableScrollSpy={true} />k</span>
												<p className="text-white text-nowrap mb-0">Happy Clients</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 mt-lg-0 mt-5">
										<nav>
											<div className="nav nav-tabs bg-neutral-100 justify-content-evenly border-bottom-0 mb-5" id="nav-tab" role="tablist">
												<button className={`${isTab == 1 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(1)} role="tab" >Our History
													<span className="underline bg-primary" />
												</button>
												<button className={`${isTab == 2 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(2)} role="tab" >Our Mission
													<span className="underline bg-primary" />
												</button>
												<button className={`${isTab == 3 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(3)} role="tab" >Our Vision
													<span className="underline bg-primary" />
												</button>
											</div>
										</nav>
										<div className="tab-content" id="nav-tabContent">
											<div className={`${isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"}`} role="tabpanel" >
												<p className="text-900 mb-3">Founded in 1998, <span className="fw-black">Infinia</span> started as a small consulting firm with a big vision: to provide unparalleled strategic and operational expertise to businesses of all sizes.</p>
												<div className="row">
													<div className="col-12 col-md-6 mb-3 mb-md-0">
														<p className="text-900">Over the years, we have expanded our services and grown our team of skilled professionals, building a reputation for delivering results-driven solutions. From our humble beginnings to becoming a trusted partner for clients across diverse industries</p>
														<ul className="list-unstyled phase-items mb-0">
															<li className="d-flex align-items-center mt-3">
																<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
																<p className="ms-2 mb-0 text-900 fs-6">Best For IT Consulting</p>
															</li>
															<li className="d-flex align-items-center mt-3">
																<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
																<p className="ms-2 mb-0 text-900 fs-6">Tailored Solutions</p>
															</li>
															<li className="d-flex align-items-center mt-3">
																<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
																<p className="ms-2 mb-0 text-900 fs-6">Save Money  Time</p>
															</li>
															<li className="d-flex align-items-center mt-3">
																<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
																<p className="ms-2 mb-0 text-900 fs-6">Expert Team</p>
															</li>
														</ul>
													</div>
													<div className="col-12 col-md-6 position-relative text-center">
														<img className="rounded-3" src="/assets/imgs/cta-7/img-2.png" alt="" />
														<Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
															<span className="rounded-circle">
																<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/cta-2/avatar-1.png" alt="infinia" />
															</span>
															<h6 className="mt-1">Kensei <span className="text-500 fs-6">, CEO</span></h6>
														</Link>
														<div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
															<img src="/assets/imgs/cta-7/name-admin.svg" alt="" />
														</div>
													</div>
												</div>
											</div>
											<div className={`${isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"}`} role="tabpanel">
												<p className="text-900 mb-4">Deliver Results-Driven Solutions: To provide actionable and impactful strategies that drive measurable success for our clients.</p>
												<div className="row">
													<div className="col-12 col-md-6">
														<p className="text-900">Foster Innovation: To encourage creativity and forward-thinking in all our projects, ensuring our clients stay ahead of the curve.</p>
														<p>Build Lasting Partnerships: To cultivate strong, collaborative relationships with our clients, based on trust, transparency, and mutual respect.</p>
														<p>Enhance Operational Efficiency: To streamline processes and optimize operations, helping businesses achieve their goals more effectively.</p>
													</div>
													<div className="col position-relative text-center">
														<img src="/assets/imgs/cta-7/img-22.png" alt="" />
													</div>
												</div>
											</div>
											<div className={`${isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"}`} role="tabpanel">
												<p className="text-900 mb-4">At Infinia, our vision is to empower businesses to reach their full potential through innovative strategies and expert operational support. </p>
												<div className="row">
													<div className="col-12 col-md-6">
														<p className="text-900">We strive to be the leading consulting firm known for our unwavering commitment to excellence, integrity, and client success. By continuously evolving and adapting to the ever-changing business landscape, we aim to provide solutions that not only meet the needs of today but also anticipate the challenges of tomorrow.</p>
														<ul className="list-unstyled phase-items mb-0">
															<li className="d-flex align-items-center mt-3">
																<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
																<p className="ms-2 mb-0 text-900 fs-6">Empower Businesses</p>
															</li>
															<li className="d-flex align-items-center mt-3">
																<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
																<p className="ms-2 mb-0 text-900 fs-6">Commitment to Excellence</p>
															</li>
															<li className="d-flex align-items-center mt-3">
																<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
																<p className="ms-2 mb-0 text-900 fs-6">Continuous Evolution</p>
															</li>
															<li className="d-flex align-items-center mt-3">
																<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
																<p className="ms-2 mb-0 text-900 fs-6">Client-Centric Solutions</p>
															</li>
														</ul>
													</div>
													<div className="col position-relative text-center mt-3">
														<img className="rounded-3" src="/assets/imgs/cta-7/img-23.png" alt="" />
													</div>
												</div>
											</div>
										</div>
										<div className="border-top pt-6 mt-md-8 mt-6">
											<Link href="#" className="fw-bold btn btn-gradient d-inline-flex align-items-center hover-up">
												<span className="me-10">Get 15 Days Free Trial</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
													<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
												</svg>
											</Link>
											<p className="fs-7 text-500 mt-3">No Card Required. Cancel Anytime.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="position-absolute top-0 end-0 z-1 flickering p-10 m-10 d-none d-lg-block">
								<img src="/assets/imgs/cta-7/star-1.svg" alt="infinia" />
							</div>
						</div>
					</div>
				</section>
				{/*Services 4*/}
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
				{/*Static 2*/}
				<section className="section-static-1 position-relative fix z-0 section-padding">
					<div className="container">
						<div className="inner">
							<div className="row justify-content-between">
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>Continuous <br /> growth with</h6>
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={24} enableScrollSpy={true} /><span>k</span></span>
											<p className="fs-5">New accounts</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>Successfully <br /> completed</h6>
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={1024} enableScrollSpy={true} /></span>
											<p className="fs-5">Finished projects</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>Recruit more <br /> than</h6>
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={865} enableScrollSpy={true} /></span>
											<p className="fs-5">Skilled experts</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>Increase internet <br /> awareness</h6>
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={168} enableScrollSpy={true} /><span>k</span></span>
											<p className="fs-5">Media posts</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 7*/}
				<section className="section-features-7 bg-neutral-100 section-padding">
					<div className="container">
						<div className="row mb-8 mb-lg-6">
							<div className="col-lg-6">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why us ?</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Reach out to <br /> the world’s most</h3>
								<p className="fs-5 fw-medium">⚡Here are a few reasons why our customers choose Infinia.</p>
							</div>
							<div className="col-lg-2 col-md-3 col-5 ms-auto align-self-end mb-lg-7">
								<div className="position-relative z-0">
									<div className="swiper-button-prev bg-white ms-lg-7">
										<i className="bi bi-arrow-left" />
									</div>
									<div className="swiper-button-next bg-white">
										<i className="bi bi-arrow-right" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<Swiper {...swiperOptions}
								className="swiper slider-1 pb-3"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									{/* prettier-ignore */}
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Marketing Automation</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Project Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Social Media Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Marketing Automation</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Project Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Social Media Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}