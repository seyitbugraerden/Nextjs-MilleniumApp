"use client"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Hero5() {

	const [isOpen, setOpen] = useState(false)

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

			<div className="section-hero-5 position-relative">
				<Swiper {...swiperOptions}
					className="swiper slider-two"
					modules={[Keyboard, Autoplay, Pagination, Navigation]}
				>
					<div className="swiper-wrapper">
						{/* prettier-ignore */}
						<SwiperSlide className="swiper-slide">
							<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png` }}>
								<div className="container position-relative z-2">
									<div className="row">
										<div className="col-lg-6">
											<div className="backdrop-filter p-8 position-relative rounded-3">
												<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
													<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
												</div>
												<h3 className="ds-3 my-3">Best
													<span className="fw-regular">
														Solutions <br />
														<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
														for
													</span>
													Innovation
												</h3>
												<p className="fs-5 text-900">
													Infinia offers full range of consultancy  training methods for business consultation.
												</p>
												<div className="d-flex flex-column flex-md-row align-items-center">
													<Link href="#" className="btn btn-gradient rounded-4">
														View Our Services
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</Link>
													<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
												<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
													<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
														<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 start-0 z-0">
									<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-2.png` }}>
								<div className="container position-relative z-2">
									<div className="row">
										<div className="col-lg-6">
											<div className="backdrop-filter p-8 position-relative rounded-3">
												<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
													<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
												</div>
												<h3 className="ds-3 my-3">Best
													<span className="fw-regular">
														Solutions <br />
														<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
														for
													</span>
													Innovation
												</h3>
												<p className="fs-5 text-900">
													Infinia offers full range of consultancy  training methods for business consultation.
												</p>
												<div className="d-flex flex-column flex-md-row align-items-center">
													<Link href="#" className="btn btn-gradient rounded-4">
														View Our Services
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</Link>
													<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
												<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
													<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
														<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 start-0 z-0">
									<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png` }}>
								<div className="container position-relative z-2">
									<div className="row">
										<div className="col-lg-6">
											<div className="backdrop-filter p-8 position-relative rounded-3">
												<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
													<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
												</div>
												<h3 className="ds-3 my-3">Best
													<span className="fw-regular">
														Solutions <br />
														<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
														for
													</span>
													Innovation
												</h3>
												<p className="fs-5 text-900">
													Infinia offers full range of consultancy  training methods for business consultation.
												</p>
												<div className="d-flex flex-column flex-md-row align-items-center">
													<Link href="#" className="btn btn-gradient rounded-4">
														View Our Services
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</Link>
													<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
												<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
													<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
														<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 start-0 z-0">
									<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-2.png` }}>
								<div className="container position-relative z-2">
									<div className="row">
										<div className="col-lg-6">
											<div className="backdrop-filter p-8 position-relative rounded-3">
												<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
													<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
												</div>
												<h3 className="ds-3 my-3">Best
													<span className="fw-regular">
														Solutions <br />
														<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
														for
													</span>
													Innovation
												</h3>
												<p className="fs-5 text-900">
													Infinia offers full range of consultancy  training methods for business consultation.
												</p>
												<div className="d-flex flex-column flex-md-row align-items-center">
													<Link href="#" className="btn btn-gradient rounded-4">
														View Our Services
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</Link>
													<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
												<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
													<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
														<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 start-0 z-0">
									<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png` }}>
								<div className="container position-relative z-2">
									<div className="row">
										<div className="col-lg-6">
											<div className="backdrop-filter p-8 position-relative rounded-3">
												<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
													<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
												</div>
												<h3 className="ds-3 my-3">Best
													<span className="fw-regular">
														Solutions <br />
														<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
														for
													</span>
													Innovation
												</h3>
												<p className="fs-5 text-900">
													Infinia offers full range of consultancy  training methods for business consultation.
												</p>
												<div className="d-flex flex-column flex-md-row align-items-center">
													<Link href="#" className="btn btn-gradient rounded-4">
														View Our Services
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</Link>
													<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
												<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
													<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
														<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 start-0 z-0">
									<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className="swiper-slide">
							<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-2.png` }}>
								<div className="container position-relative z-2">
									<div className="row">
										<div className="col-lg-6">
											<div className="backdrop-filter p-8 position-relative rounded-3">
												<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
													<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
												</div>
												<h3 className="ds-3 my-3">Best
													<span className="fw-regular">
														Solutions <br />
														<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
														for
													</span>
													Innovation
												</h3>
												<p className="fs-5 text-900">
													Infinia offers full range of consultancy  training methods for business consultation.
												</p>
												<div className="d-flex flex-column flex-md-row align-items-center">
													<Link href="#" className="btn btn-gradient rounded-4">
														View Our Services
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</Link>
													<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
												<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
													<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
														<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 start-0 z-0">
									<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
								</div>
							</div>
						</SwiperSlide>
					</div>
					<div className="swiper-button-prev d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white ms-lg-7">
						<i className="bi bi-arrow-left" />
					</div>
					<div className="swiper-button-next d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white me-lg-7">
						<i className="bi bi-arrow-right" />
					</div>
					<div className="swiper-pagination mb-8" />
				</Swiper>
			</div>


			<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
		</>
	)
}
