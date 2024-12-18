'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'

export default function SectionCta() {

	const [isOpen, setOpen] = useState(false)

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	// Tab
	const [isTab, setIsTab] = useState(1)

	const handleTab = (i: any) => {
		setIsTab(i)
	}

	return (
		<>

			<Layout >

				{/* prettier-ignore */}
				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Call to action</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Call to action</p>
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
				{/*cta 1 */}
				<section className="section-cta-1 position-relative section-padding fix">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="text-start mb-lg-0 mb-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Download Mobile App</span>
									</div>
									<h3 className="ds-3 my-3">
										Manage all <br />
										from anywhere
									</h3>
									<p className="fs-5 mb-0">⚡Don't miss any contact. Stay connected.</p>
									<ul className="list-unstyled my-6">
										<li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={0}>
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Beautiful and awesome interface</span>
										</li>
										<li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={100}>
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Online collaborative anytime, anywhere.</span>
										</li>
										<li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={200}>
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Real-time updates</span>
										</li>
									</ul>
									<div className="d-flex align-items-center mb-8 gap-2">
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-1.png" alt="infinia" />
										</Link>
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-2.png" alt="infinia" />
										</Link>
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-3.png" alt="infinia" />
										</Link>
									</div>
									<div className="d-flex align-items-center">
										<div className="d-flex">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<div>
											<p className="text-900 mb-0 fs-8 fw-bold">Trusted by 1M+ customers</p>
											<span className="fs-6 fw-bold">4.8/5 <span className="text-secondary fw-medium">(<span className="odometer" /><CountUp end={26} enableScrollSpy={true} />k Reviews)</span></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 text-lg-end text-center">
								<img src="/assets/imgs/cta-1/img-1.png" alt="infinia" />
							</div>
						</div>
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--blue" />
							<div className="bouncing-blob bouncing-blob--primary" />
						</div>
					</div>
				</section>
				{/*cta 2 */}
				<section className="section-cta-2 bg-3 position-relative section-padding fix">
					<div className="container">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why We Are The Best</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular">We provide <span className=" fw-bold">solutions</span> to <br className="d-lg-block d-none" /> <span className=" fw-bold">big  small</span> organizations</h3>
						</div>
						<div className="row">
							<div className="col-lg-5 pe-lg-0">
								<div className="bg-linear-1 text-center rounded-4 position-relative">
									<img className="rounded-4 border border-2 border-white mb-10 mt-5" src="/assets/imgs/cta-2/img-1.png" alt="infinia" />
									<div className="position-absolute bottom-0 left-0 mb-3 w-100">
										<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
											<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
											<span className="fw-bold fs-7 text-900">
												Video Guide
											</span>
										</Link>

									</div>
									<div className="position-absolute top-0 end-0">
										<img className="flickering" src="/assets/imgs/cta-2/star-2.png" alt="infinia" />
									</div>
									<div className="position-absolute bottom-0 start-0">
										<img className="alltuchtopdown" src="/assets/imgs/cta-2/star-1.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 ps-lg-0 pe-lg-5 mt-lg-0 mt-6">
								<h5 className="ds-5">Where your financial dreams become reality</h5>
								<p className="fs-5 text-500">Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
								<div className="d-md-flex align-items-center mt-4 mb-5">
									<ul className="list-unstyled phase-items mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Best For IT Consulting</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Save Money  Time</span>
										</li>
									</ul>
									<ul className="list-unstyled phase-items ms-md-5 mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Innovative Approaches</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">100% Satisfaction</span>
										</li>
									</ul>
								</div>
								<div className="row position-relative mt-5 mt-md-0">
									<div className="col-md-6 d-flex align-items-center">
										<div className="rounded-circle">
											<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/cta-2/avatar-1.png" alt="infinia" />
										</div>
										<div className="ms-3">
											<img className="filter-invert" src="/assets/imgs/cta-2/name-ad.svg" alt="infinia" />
											<h6 className="mt-1">Kensei <span className="text-500 fs-6">, CEO</span></h6>
										</div>
									</div>
									<div className="col-md-6 d-flex align-items-center">
										<span className="line-verticarl border-start h-50 pe-8 position-absolute top-50 start-50 translate-middle d-none d-md-block" />
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto">
												<h2 className="count ds-2 fw-black text-primary">+<span className="odometer" /><CountUp end={12} enableScrollSpy={true} /></h2>
											</div>
										</div>
										<p className="ms-3 fs-5">Years’ <br /> Experience</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />

				{/*cta 3 */}
				<section className="section-cta-3 position-relative py-150 section-padding fix">
					<div className="container">
						<div className="row">
							<div className="col-auto ms-auto">
								<div className="bg-primary rounded-4">
									<div className="p-7">
										<h3 className="text-white">
											Providing the <br />
											Ultimate Experience <br />
											in Financial Services
										</h3>
										<Link href="/page-contact-1" className="d-flex align-items-center mt-8 mb-9">
											<img src="/assets/imgs/cta-3/icon-contact.svg" alt="infinia" />
											<span className="ms-3">
												<span className="text-white mb-0 fs-4">Contact Us</span>
												<span className="text-white fs-4 d-block">+01 (24) 568 900</span>
											</span>
										</Link>
										<Link href="#" className="fw-bold btn text-start bg-white-keep d-flex align-items-center justify-content-between text-primary hover-up w-100">
											<span>Get 15 Days Free Trial</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*cta 4 */}
				<section className="section-cta-4 pb-110 pt-110">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 text-center">
								<div className="text-center rounded-4 position-relative d-inline-flex">
									<div className="zoom-img rounded-4 position-relative z-1">
										<img className="rounded-4" src="/assets/imgs/cta-4/img-1.png" alt="infinia" />
										<div className="position-absolute top-50 start-50 translate-middle z-2">
											<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
												<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
														<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
												<span className="fw-bold fs-7 text-900">
													Video Guide
												</span>
											</Link>
											{/* <ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} /> */}
										</div>
									</div>
									<div className="position-absolute top-100 start-0 translate-middle z-0 pt-5">
										<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-8">
								<h6 className="text-primary">What We Do</h6>
								<h5 className="ds-5 my-3">Custom Services For <br />
									Your Business</h5>
								<p className="fs-5 text-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
								<div className="d-md-flex align-items-center mt-4 mb-5">
									<ul className="list-unstyled phase-items mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900">Creative Ideas</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900">Web Development</span>
										</li>
									</ul>
									<ul className="list-unstyled phase-items ms-md-5 mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900">Digital Marketing</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900">App Development</span>
										</li>
									</ul>
								</div>
								<div className="row mt-8">
									<div className="d-flex align-items-center">
										<Link href="#" className="btn btn-gradient">
											Get Free Quote
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
										<Link href="#" className="ms-5 text-decoration-underline fw-bold">How We Work</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*CTA 5*/}
				<section>
					<div className="container-fluid position-relative section-padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 text-lg-start text-center">
									<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" />
										<div className="position-absolute bottom-0 start-md-100 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
											<p className="pt-2">Loved by over 4k <br /> happy clients</p>
											<div className="d-flex align-items-center justify-content-center py-4">
												<img src="/assets/imgs/features-3/avatar-1.png" alt="infinia" />
												<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="infinia" />
												<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="infinia" />
											</div>
											<div className="d-flex align-items-center justify-content-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
											</div>
										</div>
										<div className="position-absolute top-0 start-0 translate-middle z-0 pt-5">
											<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
										</div>
									</div>
								</div>
								<div className="col-lg-6 mt-lg-0 mt-5">
									<h5 className="ds-5">We Provide Best IT Services For Your Need
									</h5>
									<p className="fs-5 my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
									<div className="accordion">
										<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
											<div className="px-0 card-header border-0 bg-gradient-1">
												<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
													<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
													<h6 className="m-0">Digital product engineering</h6>
													<span className="ms-auto arrow me-2">
														<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
												<p className="px-0 card-body fs-6 text-600">
													Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
												</p>
											</div>
										</div>
										<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
											<div className="px-0 card-header border-0 bg-gradient-1">
												<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
													<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
													<h6 className="m-0">Crafting SaaS development</h6>
													<span className="ms-auto arrow me-2">
														<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
												<p className="px-0 card-body fs-6 text-600">
													Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
												</p>
											</div>
										</div>
										<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
											<div className="px-0 card-header border-0 bg-gradient-1">
												<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
													<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
													<h6 className="m-0">AI app development</h6>
													<span className="ms-auto arrow me-2">
														<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
												<p className="px-0 card-body fs-6 text-600">
													Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
												</p>
											</div>
										</div>
										<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
											<div className="px-0 card-header border-0 bg-gradient-1">
												<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
													<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
													<h6 className="m-0">E-commerce development</h6>
													<span className="ms-auto arrow me-2">
														<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
												<p className="px-0 card-body fs-6 text-600">
													Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
												</p>
											</div>
										</div>
										<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
											<div className="px-0 card-header border-0 bg-gradient-1">
												<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
													<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
													<h6 className="m-0">Web Development Services</h6>
													<span className="ms-auto arrow me-2">
														<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
															<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
												</a>
											</div>
											<div id="collapseFive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
												<p className="px-0 card-body fs-6 text-600">
													Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* CTA 6 */}
				<section className="section-cta-6 position-relative section-padding fix">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 pe-lg-0">
								<div className="zoom-img rounded-end-lg-0 rounded-4">
									<img className="rounded-end-lg-0 rounded-4" src="/assets/imgs/cta-6/img-1.png" alt="infinia" />
								</div>
							</div>
							<div className="col-12 col-lg-6 ps-lg-0 align-self-stretch">
								<div className="bg-white p-md-8 p-5 rounded-start-lg-0 h-100 rounded-4 mt-lg-0 mt-5 border border-start-lg-0 shadow-1">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill mb-2 px-4 py-2">
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
									</div>
									<h1 className="fs-1">Looking to speak with a marketing specialist?</h1>
									<p className="mb-9">Our seasoned marketing specialists are here to help! Whether you need insights on digital campaigns, social media tactics, or overall branding, our experts offer tailored advice to meet your specific needs.</p>
									<div className="d-flex flex-md-row flex-column align-items-center justify-content-start">
										<Link href="#" className="btn btn-gradient">
											Get Free Quote
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
										<Link href="#" className="ms-md-5 mt-md-0 mt-5 text-decoration-underline fw-bold">How We Work</Link>
									</div>
								</div>
							</div>
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
				{/* cta 8 */}
				<section className="section-cta-8 bg-4">
					<div className="container-fluid position-relative section-padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Recent work</span>
									</div>
									<h5 className="ds-5 mt-2">Doing the successful thing, at the right time.</h5>
									<p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Research planning</h6>
											<p>Separating your work from your home life can <br /> improve work-life balance.</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Investment</h6>
											<p>A business consultant provides expert advice and <br /> guidance to businesses.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
									<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" />
										<div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
											<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /><CountUp end={25} enableScrollSpy={true} />+</span>
											<p className="text-white text-nowrap mb-0">Years of Experience</p>
										</div>
										<div className="position-absolute tag-dots z-0 pt-5">
											<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* cta 9 */}
				<section className="section-cta-9 bg-3 pt-120 pb-lg-250 pb-120">
					<div className="container-fluid position-relative">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 text-start">
									<div className="position-relative d-inline-block">
										<div className="zoom-img rounded-3 mb-lg-0  mb-5">
											<img className="rounded-3" src="/assets/imgs/cta-9/img-1.png" alt="" />
										</div>
										<div className="position-lg-absolute position-relative end-0 play-video">
											<div className="zoom-img rounded-3 d-inline-block position-relative z-1 mb-lg-0 mb-5">
												<img className="rounded-3" src="/assets/imgs/cta-9/img-2.png" alt="" />
												<div className="position-absolute z-2 top-50 start-50 translate-middle">
													<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
														<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
															<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
																<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</span>
														<span className="fw-bold fs-7 text-900">
															Video Guide
														</span>
													</Link>
													{/* <ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} /> */}
												</div>
											</div>
											<div className="box-gradient position-absolute d-none d-lg-block z-0">
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 px-lg-7">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why choose us</span>
									</div>
									<h5 className="ds-5 mt-3 mb-5">Build a sustainable <br /> future for your company</h5>
									<p className="mb-5">We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
									<div className="mb-5">
										<p className="text-900 mb-1">Consulting</p>
										<div className="progress position-relative" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
											<div className="progress-bar" style={{ width: '85%' }} />
											<p className="progress-number" style={{ left: '85%' }}>85%</p>
										</div>
									</div>
									<div className="mb-5">
										<p className="text-900 mb-1">Marketing</p>
										<div className="progress position-relative" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}>
											<div className="progress-bar" style={{ width: '92%' }} />
											<span className="progress-number" style={{ left: '92%' }}>92%</span>
										</div>
									</div>
									<div className="mb-5">
										<p className="text-900 mb-1">Leadership</p>
										<div className="progress position-relative" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={81} aria-valuemin={0} aria-valuemax={100}>
											<div className="progress-bar" style={{ width: '81%' }} />
											<span className="progress-number" style={{ left: '81%' }}>81%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*cta 10 */}
				<section className="section-cta-10 position-relative section-padding fix">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 ps-lg-0 pe-lg-8">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Who we are</span>
								</div>
								<h5 className="ds-5 my-3">Where your financial dreams become reality</h5>
								<p className="fs-5 text-500">Infinia is a digital company specializing in website creation. Enterprises of all sizes—from emerging startups to large corporations—utilize our theme to develop and manage their online presence.</p>
								<div className="d-md-flex align-items-center mt-4 mb-5">
									<ul className="list-unstyled phase-items mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Best For IT Consulting</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Save Money  Time</span>
										</li>
									</ul>
									<ul className="list-unstyled phase-items ms-md-5 mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Innovative Approaches</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">100% Satisfaction</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-5 offset-lg-1">
								<div className="text-center position-relative">
									<img className="rounded-4 border border-2 bg-white shadow-2 hover-up mt-5 p-6 position-relative z-1" src="/assets/imgs/cta-10/img-1.png" alt="infinia" />
									<div className="bg-linear-1 rounded-4 position-absolute top-0 start-0 bottom-0 end-0 h-75 z-0" />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*cta 11 */}
				<section className="section-cta-11 position-relative section-padding fix">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="d-flex justify-content-md-between justify-content-center position-relative">
									<div className="d-flex flex-column align-items-end d-none d-md-flex">
										<div className="zoom-img rounded-3">
											<img className="rounded-3" src="/assets/imgs/cta-11/img-1.png" alt="" />
										</div>
										<div className="zoom-img rounded-3 mt-2">
											<img className="rounded-3" src="/assets/imgs/cta-11/img-3.png" alt="" />
										</div>
									</div>
									<div>
										<div className="d-flex justify-content-between mt-5">
											<div className="alltuchtopdown tag-year backdrop-filter bg-success rounded-4 px-5 py-4 text-center z-1">
												<h5 className="count fw-bold mb-2 text-900 text-nowrap"><span className="odometer" /><CountUp end={25} enableScrollSpy={true} />M+</h5>
												<p className="text-600-keep text-nowrap mb-0">
													Transaction <br />
													Completed
												</p>
											</div>
											<div className="alltuchtopdown tag-year backdrop-filter bg-primary rounded-4 px-5 py-4 text-center z-1">
												<h5 className="count fw-bold mb-2 text-white text-nowrap"><span className="odometer" /><CountUp end={12} enableScrollSpy={true} />k+</h5>
												<p className="text-white text-nowrap mb-0">
													Transaction <br />
													Completed
												</p>
											</div>
										</div>
										<div className="zoom-img rounded-3">
											<img className="rounded-3 mw-lg-310" src="/assets/imgs/cta-11/img-2.png" alt="" />
										</div>
									</div>
									<div className="position-absolute bottom-0 start-0 flickering ms-6 mb-4 z-0 d-none d-md-block">
										<svg xmlns="http://www.w3.org/2000/svg" width={86} height={86} viewBox="0 0 86 86" fill="none">
											<path d="M0.235352 64.6171C23.6511 58.8609 27.3738 62.5843 21.6183 86C31.9666 62.5843 45.1375 62.5843 55.4859 86C49.7296 62.5843 53.4531 58.8615 76.8688 64.6171C53.4531 54.2688 53.4531 41.0978 76.8688 30.7495C53.4531 36.5057 49.7303 32.7823 55.4859 9.36658C45.1375 32.7823 31.9666 32.7823 21.6183 9.36658C27.3745 32.7823 23.6511 36.5051 0.235352 30.7495C23.6511 41.0978 23.6511 54.2688 0.235352 64.6171Z" fill="#64E1B0" />
											<path d="M85.7917 4.74567C80.5949 6.02293 79.7687 5.19679 81.046 0C78.7493 5.19679 75.8266 5.19679 73.5298 0C74.8071 5.19679 73.981 6.02293 68.7842 4.74567C73.981 7.0424 73.981 9.96508 68.7842 12.2618C73.981 10.9846 74.8071 11.8107 73.5298 17.0075C75.8266 11.8107 78.7493 11.8107 81.046 17.0075C79.7687 11.8107 80.5949 10.9846 85.7917 12.2618C80.5949 9.96508 80.5949 7.0424 85.7917 4.74567Z" fill="#64E1B0" />
										</svg>
									</div>
								</div>
							</div>
							<div className="col-lg-6 ps-lg-8 mt-lg-0 mt-5">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Mission</span>
								</div>
								<h5 className="ds-5 my-3">Empowering Your Digital Success Through Innovative Solutions</h5>
								<p className="fs-5 text-500 mb-8">We believe in building strong relationships with our clients, based on trust, transparency, and mutual success.</p>
								<div className="d-flex flex-column flex-md-row">
									<div className="evaluate-1 me-2">
										<div className="d-flex align-items-center">
											<img className="rounded-circle" src="/assets/imgs/cta-11/avatar-1.png" alt="" />
											<div className="d-flex flex-column ps-3">
												<div className="d-flex">
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												</div>
												<h6 className="mt-2 mb-0 fs-6">John Smith</h6>
											</div>
										</div>
										<p className="text-500 mt-3">Infinia's platform is intuitive and powerful. The custom solutions provided have streamlined our workflow.</p>
									</div>
									<div className="evaluate-2 ms-2 mt-md-0 mt-5">
										<div className="d-flex align-items-center">
											<img className="rounded-circle" src="/assets/imgs/cta-11/avatar-2.png" alt="" />
											<div className="d-flex flex-column ps-3">
												<div className="d-flex">
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
													<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												</div>
												<h6 className="mt-2 mb-0 fs-6">Azumi Rose</h6>
											</div>
										</div>
										<p className="text-500 mt-3">Their innovative solutions and responsive support have been game-changers for us. We couldn’t be happier!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*cta 12 */}
				<section className="section-cta-12 bg-3 position-relative section-padding fix">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our History</span>
								</div>
								<h5 className="ds-5 my-3">A Journey of <br className="d-none d-md-inline" />
									Innovation and Growth</h5>
								<p className="fs-5 text-500 mb-8">Loved By Developers Trusted By Enterprises</p>
								<div className="d-flex align-items-center mt-5">
									<Link href="#" className="btn btn-gradient">
										Get Free Quote
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#" className="ms-5 fw-bold">How We Work</Link>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1 mt-lg-0 mt-8">
								<p className="fs-5 text-900 mb-5"><span className="fw-bold">Infinia</span> was founded with a passion for technology and a desire to make a difference in the digital world. From our humble beginnings, we have grown into a reputable and sought-after web development agency, serving a diverse range of clients across various industries. Over the years, <span className="fw-bold">we have successfully delivered countless projects</span>, each one a testament to our dedication, expertise, and innovative approach. Our journey has been marked by <span className="fw-bold">continuous growth, learning, and adaptation,</span> and we are proud of the milestones we have achieved along the way.</p>
								<p className="fs-5 text-900 mb-5">Thank you for considering <span className="fw-bold">Infinia</span> as your web development partner. We look forward to helping you achieve your <span className="fw-bold">digital goals and creating a lasting impact</span> on your business.</p>
								<div className="d-flex">
									<img className="rounded-circle border border-5 border-primary-light" src="/assets/imgs/cta-12/avatar-1.png" alt="" />
									<div className="ms-2">
										<img className="filter-invert" src="/assets/imgs/cta-12/name.svg" alt="" />
										<h6 className="mt-1 mb-0">Kensei <span className="text-500 fs-6">, CEO</span></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*CTA 13*/}
				<section className="section-testimonial-13 position-relative section-padding fix">
					<div className="container position-relative z-1">
						<div className="row pb-9">
							<div className="col-lg-7 mx-lg-auto">
								<div className="text-center mb-lg-0 mb-5">
									<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">About our company</span>
									</div>
									<h5 className="ds-5 my-3 fw-regular">Uncover <span className="fw-bold">Our Journey: <br className="d-none d-md-inline" /> </span> Uniting Through <span className="fw-bold">Creativity</span></h5>
									<p className="fs-5 mb-0 text-500">Our dedication to quality and excellence has made us a trusted partner for enterprises looking to enhance their online presence.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8">
								<div className="position-relative mb-lg-0 mb-8 fix">
									<div className="zoom-img rounded-4 fix">
										<img src="/assets/imgs/cta-13/img-1.png" alt="infinia" />
									</div>
									<div className="position-absolute alltuchtopdown bottom-0 start-0 m-md-5 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
										<p className="pt-2">Loved by over 4k <br /> happy clients</p>
										<div className="d-flex align-items-center justify-content-center py-4">
											<img src="/assets/imgs/features-3/avatar-1.png" alt="infinia" />
											<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="infinia" />
											<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="infinia" />
										</div>
										<div className="d-flex align-items-center justify-content-center">
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
											<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
												<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="row flex-lg-column">
									<div className="col-md-6 col-lg-12">
										<div className="backdrop-filter bg-linear-2 rounded-4 px-6 py-4 z-1">
											<div className="d-flex align-items-center justify-content-between">
												<div className="my-lg-3 text-center">
													<span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={23} enableScrollSpy={true} />k</span>
													<p className="text-white text-nowrap border-opacity-50 border-white pb-3 mb-3">Projects Completed</p>
													<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={98} enableScrollSpy={true} />k</span>
													<p className="text-white text-nowrap mb-0">Happy Clients</p>
												</div>
												<div className="my-lg-3 text-center">
													<span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={38} enableScrollSpy={true} />k</span>
													<p className="text-white text-nowrap border-opacity-50 border-white pb-3 mb-3">Users Actived</p>
													<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /><CountUp end={150} enableScrollSpy={true} /></span>
													<p className="text-white text-nowrap mb-0">Operating countries</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-12">
										<div className="zoom-img rounded-4 fix d-inline-block mt-4 mt-lg-4 mt-md-0 h-100">
											<img className="h-100" src="/assets/imgs/cta-13/img-2.png" alt="infinia" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>
				{/* CTA 14 */}
				<section className="section-cta-14 position-relative section-padding">
					<div className="container position-relative z-2">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">How It Work</span>
							</div>
							<h5 className="ds-5 my-3 fw-regular">What are the <span className="fw-bold">Steps Involved</span> in <br /> Our <span className="fw-bold">Process?</span></h5>
						</div>
						<div className="row mt-8">
							<div className="col-10 mx-auto">
								<div className="position-relative">
									<div className="zoom-img rounded-4 border-5 border-white border position-relative z-2">
										<img className="rounded-3" src="/assets/imgs/cta-14/img-1.png" alt="infinia" />
										<div className="position-absolute top-50 start-50 translate-middle z-2">
											<Link href="#" scroll={false} onClick={() => setOpen(true)} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
												<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
														<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
												<span className="fw-bold fs-7 text-900">
													Video Guide
												</span>
											</Link>
											{/* <ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} /> */}
										</div>
									</div>
									<div className="position-absolute top-100 start-0 translate-middle z-1">
										<img className="alltuchtopdown" src="/assets/imgs/cta-14/vector.svg" alt="infinia" />
									</div>
									<div className="vector-2 position-absolute z-2">
										<img className="alltuchtopdown" src="/assets/imgs/cta-14/vector-2.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>
				{/*CTA 15*/}
				<section className="section-testimonial-13 position-relative pt-120 pb-80 fix">
					<div className="container position-relative z-1">
						<div className="row pb-9">
							<div className="col-lg-10 mx-lg-auto">
								<div className="text-center mb-lg-0 mb-5">
									<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">About us</span>
									</div>
									<h3 className="ds-3 my-3 fw-regular">Together, We are <span className="fw-bold">Shaping </span> a<br /> <span className="fw-bold">Promising</span> Future<span className="fw-bold">.</span></h3>
								</div>
							</div>
						</div>
						<img className="position-absolute z-2 top-0 end-0 pe-10 pe-lg-10" src="/assets/imgs/cta-15/star-2.svg" alt="infinia" />
						<img className="position-absolute z-2 bottom-0 start-0 ps-10 ms-10" src="/assets/imgs/cta-15/star-1.svg" alt="infinia" />
					</div>
					<div className="container-fluid">
						<div className="d-flex align-items-center justify-content-center position-relative">
							<div className="pe-3 position-relative z-1 d-none d-md-block">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-1.png" alt="infinia" />
							</div>
							<div className="pe-3 position-relative z-1">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-2.png" alt="infinia" />
							</div>
							<div className="pe-3 position-relative z-1">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-3.png" alt="infinia" />
							</div>
							<div className="pe-3 position-relative z-1">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-4.png" alt="infinia" />
							</div>
							<div className="pe-3 position-relative z-1 d-none d-md-block">
								<img className="rounded-3 border border-3 border-white" src="/assets/imgs/cta-15/img-5.png" alt="infinia" />
							</div>
							<img className="position-absolute top-50 end-50 translate-middle-y z-0" src="/assets/imgs/cta-15/bg-ellipse.png" alt="infinia" />
						</div>
						<div className="text-center mt-5">
							<div className="socials bg-white px-3 shadow-1 py-2 border rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
								<p className="text-900 mb-0">Follow us:</p>
								<ul className="list-unstyled d-flex mb-0">
									<li className="ms-3">
										<Link href="http://www.facebook.com" target="_blank">
											<span className="icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
													<path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
												</svg>
											</span>
										</Link>
									</li>
									<li className="ms-3">
										<Link href="http://www.twittet.com" target="_blank">
											<span className="icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
													<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
												</svg>
											</span>
										</Link>
									</li>
									<li className="ms-3">
										<Link href="#">
											<span className="icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
													<path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
												</svg>
											</span>
										</Link>
									</li>
									<li className="ms-3">
										<Link href="#">
											<span className="icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
													<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
												</svg>
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
						<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
					</div>
				</section>


			</Layout>
		</>
	)
}