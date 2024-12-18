"use client"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Layout from "@/components/layout/Layout"
import Link from "next/link"

import dynamic from 'next/dynamic'
const Services5 = dynamic(() => import('@/components/sections/Services5'), {
	ssr: false,
})

export default function SectionProjects() {

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

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Projects</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Projects</p>
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
				{/*Services 5*/}
				<Services5 />
				{/*Project 2*/}
				<section className="section-project-2 pt-120 pb-8">
					<div className="container">
						<div className="row mb-8">
							<div className="col-lg-6">
								<div className="d-flex align-items-center justify-text-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Recent work</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Our feared projects</h3>
								<p className="fs-5 fw-medium">⚡Don't miss any contact. Stay connected.</p>
							</div>
							<div className="col-lg-2 col-md-3 col-6 ms-auto align-self-end mb-lg-7 mt-lg-0 mt-4">
								<div className="position-relative z-0">
									<div className="swiper-button-prev shadow bg-white ms-lg-7">
										<i className="bi bi-arrow-left" />
									</div>
									<div className="swiper-button-next shadow bg-white">
										<i className="bi bi-arrow-right" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<Swiper
								{...swiperOptions}
								className="swiper slider-1 pt-2 pb-8"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									{/* prettier-ignore */}
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-1.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">InnovateTech Inc.</p>
													<h6>Strategic Solutions Initiative</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Software Development</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-2.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">Pioneer Enterprises</p>
													<h6>Innovate Consulting Challenge</h6>
													<p className="text-900">Leveraging consulting practices to solve complex problems.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Consulting</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-3.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">Summit Corp</p>
													<h6>Growth Catalyst Program</h6>
													<p className="text-900">Accelerating business growth through strategic planning.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Financial Advisory</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-1.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">InnovateTech Inc.</p>
													<h6>Strategic Solutions Initiative</h6>
													<p className="text-900">Streamlining operations and growth strategies for market enhancement.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Software Development</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-2.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">Pioneer Enterprises</p>
													<h6>Innovate Consulting Challenge</h6>
													<p className="text-900">Leveraging consulting practices to solve complex problems.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Consulting</Link>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="text-center">
											<div className="zoom-img position-relative d-inline-block z-1">
												<div className="rounded-3 fix">
													<img className="img-fluid w-100" src="/assets/imgs/project-2/img-3.png" alt="infinia" />
												</div>
												<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-4 hover-up">
													<p className="fs-7 text-primary mb-1">Summit Corp</p>
													<h6>Growth Catalyst Program</h6>
													<p className="text-900">Accelerating business growth through strategic planning.</p>
												</Link>
												<Link href="#" className="badge text-primary bg-white px-3 py-2 rounded-pill m-4 fs-7 position-absolute top-0 end-0 z-1">Financial Advisory</Link>
											</div>
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