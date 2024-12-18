"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Features7() {

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


		</>
	)
}
