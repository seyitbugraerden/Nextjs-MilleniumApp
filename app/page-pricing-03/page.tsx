"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Marquee from "react-fast-marquee"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function PagePricing03() {

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	const swiperOptions = {
		slidesPerView: 1,
		// spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	}

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Pricing Plans</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Pricing Plans</p>
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
				{/*Pricing 2*/}
				<section className="section-pricing-2 position-relative section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 position-relative pe-8">
								<div className="text-start mb-lg-0 mb-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">our plans</span>
									</div>
									<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={0}>Pick Your Premium</h3>
									<p className="fs-6 mb-0" data-aos="fade-zoom-in" data-aos-delay={200}>Upgrade to Spotify Premium and take your music journey to the next level. Enjoy uninterrupted music playback, even in offline mode</p>
									<div className="d-md-flex align-items-center mt-4">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">Get 30 day free trial</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">You can cancel anytime</span>
											</li>
										</ul>
										<ul className="list-unstyled phase-items ms-md-5 mb-0">
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">No any hidden fees pay</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">Monthly management</span>
											</li>
										</ul>
									</div>
									<div className="mt-lg-10 pt-5 pe-lg-10 me-lg-10">
										<p className="pt-lg-10">Trusted by secure payment service</p>
										<div className="carouselTicker carouselTicker-left position-relative z-1">
											<ul className="carouselTicker__list">
												<Marquee>
													<li className="carouselTicker__item m-0">
														<img className="rounded-4" src="/assets/imgs/pricing-2/logo-1.png" alt="inexa" />
													</li>
													<li className="carouselTicker__item m-0">
														<img className="rounded-4" src="/assets/imgs/pricing-2/logo-2.png" alt="inexa" />
													</li>
													<li className="carouselTicker__item m-0">
														<img className="rounded-4" src="/assets/imgs/pricing-2/logo-3.png" alt="inexa" />
													</li>
													<li className="carouselTicker__item m-0">
														<img className="rounded-4" src="/assets/imgs/pricing-2/logo-4.png" alt="inexa" />
													</li>
												</Marquee>
											</ul>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 end-0 translate-middle-y mt-3 me-8">
									<img className="flickering" src="/assets/imgs/pricing-2/star.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="row mt-lg-0 mt-5">
									<div className="col-lg-6 col-sm-6 mb-lg-0 mb-4">
										<div className="p-6 bg-white position-relative border rounded-4 z-1">
											<h6>Trial Plan</h6>
											<p className="fs-7">Protect for testing</p>
											<h3 className="text-primary mt-3 mb-0">Free</h3>
											<p className="fs-8">30 days trial</p>
											<button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
												Get Started
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
												</svg>
											</button>
											<ul className="list-unstyled mb-0">
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">Single Team Member</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">Over 1200 UI Blocks</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">10 GB of Cloud Storage</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-secondary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2 text-400">Personal Email Account</h6>
												</li>
												<li className="d-flex align-items-center">
													<img src="/assets/imgs/pricing-1/check-secondary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2 text-400">Priority Support</h6>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-lg-0 mb-4">
										<div className="p-6 bg-primary-soft position-relative border rounded-4 z-1">
											<h6>Premium</h6>
											<p className="fs-7">Great for large teams</p>
											<div className="d-flex">
												<span className="fs-5 text-600 me-1">$</span>
												<h3 className="text-primary mb-0">49</h3>
												<span className="fs-5 text-600 ms-1 fw-bold align-self-end">/mon</span>
											</div>
											<p className="fs-8">No credit card required</p>
											<button className="btn btn-gradient w-100 d-flex justify-content-between my-5">
												Get Started
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path className="fill-white" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="white" />
												</svg>
											</button>
											<ul className="list-unstyled mb-0">
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">05 Team Member</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">All multimedia channels</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">All advanced CRM features</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">Up to 15,000 contacts</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">100 GB Cloud Storage</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">Individual Email Account</h6>
												</li>
												<li className="d-flex align-items-center">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">Premium Support</h6>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* FAQs 2 */}
				<section className="section-faqs-2 section-padding bg-4 position-relative">
					<div className="container position-relative z-2">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Pricing FAQs</span>
							</div>
							<h3 className="ds-3 my-3 fw-bold">Ask us anything</h3>
							<p className="fs-5 mb-0">Have any questions? We’re here to assist you.</p>
						</div>
						<div className="row align-items-center position-relative z-1">
							<div className="col-lg-6">
								<div className="accordion">
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse" >
												<h6 className="m-0">What are the key benefits of using <span className="text-primary">Infinia System</span></h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse01" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse" >
												<h6 className="m-0">What features does <span className="text-primary">Infinia</span> offer?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse02" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<h6 className="m-0">How do your services work?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse03" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
												<h6 className="m-0">What is SEO and why do I need it?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse04" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse" >
												<h6 className="m-0">What SEO strategies do you use?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse05" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-2">
								<div className="accordion">
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 6 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(6)} data-bs-toggle="collapse" >
												<h6 className="m-0">How can you help with identity development?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse06" className={activeItem == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 7 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(7)} data-bs-toggle="collapse" >
												<h6 className="m-0">What is your process for starting a project?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse07" className={activeItem == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 8 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(8)} data-bs-toggle="collapse">
												<h6 className="m-0">How much do your services cost?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse08" className={activeItem == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 9 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(9)} data-bs-toggle="collapse" >
												<h6 className="m-0">How long does it take to see results?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse09" className={activeItem == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 10 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(10)} data-bs-toggle="collapse" >
												<h6 className="m-0">Do you offer ongoing support?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse10" className={activeItem == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 11 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(11)} data-bs-toggle="collapse" >
												<h6 className="m-0">Do you offer ongoing support?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse11" className={activeItem == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="ellipse-center position-absolute top-50 start-50 translate-middle z-0" />
					</div>
				</section>
				{/* FAQs 3 */}
				<section className="section-faqs-1 section-padding position-relative">
					<div className="container position-relative z-2">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="text-start">
									<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Frequently Asked questions</span>
									</div>
									<h3 className="ds-3 my-3 fw-bold">
										Got questions? <br />
										We’ve got answers
									</h3>
									<div className="position-relative d-inline-block mt-3 mb-6">
										<img src="/assets/imgs/faqs-3/img-1.png" alt="" className=" rounded-pill border border-3 border-white" />
										<img src="/assets/imgs/faqs-3/img-2.png" alt="" className="position-absolute z-1 top-0 start-50 mt-3 rounded-pill border border-3 border-white" />
									</div>
									<p className="fs-5 mb-0">
										Quick answers to questions you may have. Can't <br />
										find what you're looking for? Get in touch with us.
									</p>
									<div className="d-flex align-items-center mt-5">
										<Link href="#" className="btn btn-gradient">
											Get in touch
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
										<Link href="#" className="ms-5 fw-bold">Help Center</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-8 ">
								<div className="accordion">
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse" >
												<h6 className="m-0">What are the key benefits of using <span className="text-primary">Infinia System</span></h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse" >
												<h6 className="m-0">What features does <span className="text-primary">Infinia</span> offer?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse" >
												<h6 className="m-0">How do your services work?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
												<h6 className="m-0">What is SEO and why do I need it?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse4" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse" >
												<h6 className="m-0">What SEO strategies do you use?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse5" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Testimonial 4*/}
				<section className="section-testimonial-4 section-padding position-relative overflow-hidden">
					<div className="container position-relative z-1">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
							</div>
							<h5 className="ds-3 my-3">+500k Satisfied Customers</h5>
							<p className="fs-5">🔥 Don’t just take our words</p>
						</div>
						<div className="row mt-8 justify-content-center">
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-1.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-2.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-3.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-4.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-5.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-6.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-7.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-8.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-9.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-10.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-11.png" alt="" />
							</div>
						</div>
						<div className="row justify-content-center d-none d-lg-flex">
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-12.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-13.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-14.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-15.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-16.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-17.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-18.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-19.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-20.png" alt="" />
							</div>
							<div className="avatar-xxl rounded-circle">
								<img className="assessor rounded-circle border border-5 border-primary-soft" src="/assets/imgs/testimonial-4/avatar-21.png" alt="" />
							</div>
						</div>
						<div className="row mt-6">
							<div className="col-lg-6 mx-auto text-center">
								<Swiper {...swiperOptions}
									className="swiper slider-two pt-2 pb-3"
									modules={[Keyboard, Autoplay, Pagination, Navigation]}
								>
									<div className="swiper-wrapper">
										{/* prettier-ignore */}
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Automated reports</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Funnel optimization</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="swiper-slide">
											<div className="px-lg-6">
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Integrations</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
												<p className="text-900 mt-5">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
											</div>
										</SwiperSlide>
									</div>
									<div className="swiper-pagination" />
								</Swiper>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
				</section>

			</Layout>
		</>
	)
}