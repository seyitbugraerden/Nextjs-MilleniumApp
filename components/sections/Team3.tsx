"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Team3() {

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

	return (
		<>


			<section className="section-team-3 section-padding overflow-hidden">
				<div className="container">
					<div className="row position-relative z-1">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
							</div>
							<h3 className="ds-3 my-3">Meet Our Team</h3>
							<p>Meet the talented and passionate team members who drive our company forward every day. <br /> company forward every day.</p>
						</div>
					</div>
					<div className="row mt-6">
						<Swiper {...swiperOptions}
							className="swiper slider-2 px-1"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div className="swiper-wrapper">
								{/* prettier-ignore */}
								<SwiperSlide className="swiper-slide">
									<div className="position-relative z-1">
										<div className="zoom-img rounded-4">
											<img className="img-fluid w-100" src="/assets/imgs/team-3/portrait-1.png" alt="infinia" />
										</div>
										<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
											<div className="position-relative z-1">
												<h6 className="text-white">Michael Anderson</h6>
												<div className="d-flex">
													<span className="fs-7 text-white me-auto">Co-Founder</span>
													<div className="arrow-icon bg-white-keep icon-shape icon-sm rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<span className="bg-primary opacity-75 position-absolute bottom-0 start-0 end-0 top-0 z-0 rounded-4" />
										</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="position-relative z-1">
										<div className="zoom-img rounded-4">
											<img className="img-fluid w-100" src="/assets/imgs/team-3/portrait-2.png" alt="infinia" />
										</div>
										<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
											<div className="position-relative z-1">
												<h6 className="text-white">Strategy Development</h6>
												<div className="d-flex">
													<span className="fs-7 text-white me-auto">Software Engineer</span>
													<div className="arrow-icon bg-white-keep icon-shape icon-sm rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<span className="bg-primary opacity-75 position-absolute bottom-0 start-0 end-0 top-0 z-0 rounded-4" />
										</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="position-relative z-1">
										<div className="zoom-img rounded-4">
											<img className="img-fluid w-100" src="/assets/imgs/team-3/portrait-3.png" alt="infinia" />
										</div>
										<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
											<div className="position-relative z-1">
												<h6 className="text-white">Sarah Brown</h6>
												<div className="d-flex">
													<span className="fs-7 text-white me-auto">Product Manager</span>
													<div className="arrow-icon bg-white-keep icon-shape icon-sm rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<span className="bg-primary opacity-75 position-absolute bottom-0 start-0 end-0 top-0 z-0 rounded-4" />
										</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="position-relative z-1">
										<div className="zoom-img rounded-4">
											<img className="img-fluid w-100" src="/assets/imgs/team-3/portrait-4.png" alt="infinia" />
										</div>
										<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
											<div className="position-relative z-1">
												<h6 className="text-white">David Clark </h6>
												<div className="d-flex">
													<span className="fs-7 text-white me-auto">UX/UI Designer</span>
													<div className="arrow-icon bg-white-keep icon-shape icon-sm rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<span className="bg-primary opacity-75 position-absolute bottom-0 start-0 end-0 top-0 z-0 rounded-4" />
										</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="position-relative z-1">
										<div className="zoom-img rounded-4">
											<img className="img-fluid w-100" src="/assets/imgs/team-3/portrait-1.png" alt="infinia" />
										</div>
										<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
											<div className="position-relative z-1">
												<h6 className="text-white">Jessica Carter</h6>
												<div className="d-flex">
													<span className="fs-7 text-white me-auto">DevOps Engineer</span>
													<div className="arrow-icon bg-white-keep icon-shape icon-sm rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<span className="bg-primary opacity-75 position-absolute bottom-0 start-0 end-0 top-0 z-0 rounded-4" />
										</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="position-relative z-1">
										<div className="zoom-img rounded-4">
											<img className="img-fluid w-100" src="/assets/imgs/team-3/portrait-2.png" alt="infinia" />
										</div>
										<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
											<div className="position-relative z-1">
												<h6 className="text-white">Lauren Graham</h6>
												<div className="d-flex">
													<span className="fs-7 text-white me-auto">Data Analyst</span>
													<div className="arrow-icon bg-white-keep icon-shape icon-sm rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<span className="bg-primary opacity-75 position-absolute bottom-0 start-0 end-0 top-0 z-0 rounded-4" />
										</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="position-relative z-1">
										<div className="zoom-img rounded-4">
											<img className="img-fluid w-100" src="/assets/imgs/team-3/portrait-3.png" alt="infinia" />
										</div>
										<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
											<div className="position-relative z-1">
												<h6 className="text-white">James Bennett</h6>
												<div className="d-flex">
													<span className="fs-7 text-white me-auto">Sales Executive</span>
													<div className="arrow-icon bg-white-keep icon-shape icon-sm rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<span className="bg-primary opacity-75 position-absolute bottom-0 start-0 end-0 top-0 z-0 rounded-4" />
										</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="position-relative z-1">
										<div className="zoom-img rounded-4">
											<img className="img-fluid w-100" src="/assets/imgs/team-3/portrait-4.png" alt="infinia" />
										</div>
										<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
											<div className="position-relative z-1">
												<h6 className="text-white">William Foster</h6>
												<div className="d-flex">
													<span className="fs-7 text-white me-auto">Marketing Specialist</span>
													<div className="arrow-icon bg-white-keep icon-shape icon-sm rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<span className="bg-primary opacity-75 position-absolute bottom-0 start-0 end-0 top-0 z-0 rounded-4" />
										</Link>
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
