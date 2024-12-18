"use client"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function SectionServices() {

	const swiperOptions = {
		slidesPerView: 4,
		spaceBetween: 30,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
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
							<h3>Services</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Services</p>
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
				{/*Services 1*/}
				<section className="section-padding">
					<div className="container">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div>
							<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>Explore Our Services</h3>
							<p data-aos="fade-zoom-in" data-aos-delay={100}>By doing a financial analysis of these statements, you can see <br /> whether you have enough working capital.</p>
						</div>
						<div className="row mt-6 position-relative">
							<div className="col-lg-4">
								<div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
									<div className="card-service bg-white p-6 border rounded-4">
										<img src="/assets/imgs/service-1/icon-1.svg" alt="infinia" />
										<h6 className="my-3">Research planning</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-2.svg" alt="infinia" />
										<h6 className="my-3">Strategy Lab</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-3.svg" alt="infinia" />
										<h6 className="my-3">Business Consultancy</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-4.svg" alt="infinia" />
										<h6 className="my-3">Business promotion</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-5.svg" alt="infinia" />
										<h6 className="my-3">Finance Advisory </h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-6.svg" alt="infinia" />
										<h6 className="my-3">Revenue generation</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="position-absolute top-50 start-50 translate-middle z-0">
								<img src="/assets/imgs/service-1/img-bg.png" alt="infinia" />
							</div>
						</div>
					</div>
				</section>
				{/*Services 2*/}
				<section className="section-team-1 position-relative fix section-padding">
					<div className="container position-relative z-2">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular">
								Let’s Discover Our Service
								<span className=" fw-bold">Our Service <br className="d-none d-lg-inline" />
									Features</span>
								Charter
							</h3>
						</div>
						<div className="row mt-6 position-relative">
							{/* prettier-ignore */}
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Business Analytics</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Investment</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-3.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Tax Advisory</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-4.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Automated reports</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-5.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Funnel optimization</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-6.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Integrations</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<svg className="position-absolute top-50 start-50 translate-middle z-0" xmlns="http://www.w3.org/2000/svg" width={828} height={699} viewBox="0 0 828 699" fill="none">
								<path className="fill-primary-soft" d="M0 130.481C0 110.236 15.1267 93.1822 35.2276 90.7667L783.228 0.880261C807.04 -1.98124 828 16.611 828 40.5945V533.155C828 552.691 813.888 569.369 794.622 572.603L46.6224 698.173C22.2271 702.269 0 683.462 0 658.725V130.481Z" fill="#F5EEFF" />
							</svg>
						</div>
						<div className="text-center mt-6 d-flex flex-wrap justify-content-center align-items-center gap-3">
							<Link href="/page-services-1" className="btn btn-gradient">
								Explore Now
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
							<Link href="/page-contact-1" className="btn btn-outline-secondary hover-up">
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								Contact Us
							</Link>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>
				{/*Services 3*/}
				<section className="section-services-3  section-padding">
					<div className="container position-relative z-2">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular">The Leading <span className=" fw-bold">IT Solutions <br className="d-lg-block d-none" /> Company</span> For You</h3>
						</div>
						<div className="row mt-6 position-relative">
							<Swiper {...swiperOptions}
								className="swiper slider-2 px-1"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-1.svg" alt="infinia" />
												</div>
											</div>
											<h5 className="my-3">IT Consulting</h5>
											<p className="mb-6">Beauis utter enim amet lacus ornare ullamcorper Praesent
												neque purus rhoncus.</p>
											<Link href="#" className="text-primary fs-7 fw-bold">
												Learm More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-2.svg" alt="infinia" />
												</div>
											</div>
											<h5 className="my-3">Network Design</h5>
											<p className="mb-6">Beauis utter enim amet lacus ornare ullamcorper Praesent
												neque purus rhoncus.</p>
											<Link href="#" className="text-primary fs-7 fw-bold">
												Learm More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-3.svg" alt="infinia" />
												</div>
											</div>
											<h5 className="my-3">Software Dev</h5>
											<p className="mb-6">Beauis utter enim amet lacus ornare ullamcorper Praesent
												neque purus rhoncus.</p>
											<Link href="#" className="text-primary fs-7 fw-bold">
												Learm More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-4.svg" alt="infinia" />
												</div>
											</div>
											<h5 className="my-3">IT Training</h5>
											<p className="mb-6">Beauis utter enim amet lacus ornare ullamcorper Praesent
												neque purus rhoncus.</p>
											<Link href="#" className="text-primary fs-7 fw-bold">
												Learm More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-1.svg" alt="infinia" />
												</div>
											</div>
											<h5 className="my-3">IT Consulting</h5>
											<p className="mb-6">Beauis utter enim amet lacus ornare ullamcorper Praesent
												neque purus rhoncus.</p>
											<Link href="#" className="text-primary fs-7 fw-bold">
												Learm More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-2.svg" alt="infinia" />
												</div>
											</div>
											<h5 className="my-3">Network Design</h5>
											<p className="mb-6">Beauis utter enim amet lacus ornare ullamcorper Praesent
												neque purus rhoncus.</p>
											<Link href="#" className="text-primary fs-7 fw-bold">
												Learm More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-3.svg" alt="infinia" />
												</div>
											</div>
											<h5 className="my-3">Software Dev</h5>
											<p className="mb-6">Beauis utter enim amet lacus ornare ullamcorper Praesent
												neque purus rhoncus.</p>
											<Link href="#" className="text-primary fs-7 fw-bold">
												Learm More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card-service-4 position-relative bg-white p-6 border rounded-3 text-center shadow-1 hover-up mt-2">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
												<div className="icon">
													<img src="/assets/imgs/service-3/icon-4.svg" alt="infinia" />
												</div>
											</div>
											<h5 className="my-3">IT Training</h5>
											<p className="mb-6">Beauis utter enim amet lacus ornare ullamcorper Praesent
												neque purus rhoncus.</p>
											<Link href="#" className="text-primary fs-7 fw-bold">
												Learm More
												<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
													<g clipPath="url(#clip0_399_9647)">
														<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={18} height={18} fill="white" transform="translate(0.5)" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<div className="rectangle position-absolute bottom-0 start-50 translate-middle-x" />
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="swiper-button-prev d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white ms-lg-7">
								<i className="bi bi-arrow-left" />
							</div>
							<div className="swiper-button-next d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white">
								<i className="bi bi-arrow-right" />
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


			</Layout>
		</>
	)
}