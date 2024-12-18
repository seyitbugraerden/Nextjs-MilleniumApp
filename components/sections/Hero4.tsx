'use client'
import Link from "next/link"
import CountUp from 'react-countup'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Hero4() {

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

			<section className="section-hero-4 position-relative fix pt-150">
				<div className="container">
					<div className="row position-relative z-1">
						<div className="col-lg-6 text-center text-lg-start">
							<div className="position-relative d-inline-block">
								<img className="rounded-5 border border-5 border-white" src="/assets/imgs/hero-4/img-1.png" alt="infinia" />
								<div className="alltuchtopdown backdrop-filter rounded-4 text-center d-inline-block px-6 py-4 m-5 position-absolute bottom-0 end-0">
									<h2 className="count text-900 fw-black">+<span className="odometer" /><CountUp end={23} enableScrollSpy={true} /><span>k</span></h2>
									<h6 className="text-500">Professionals</h6>
									<p className="text-500 fs-7">Love Our System</p>
									<Link href="#" className="shadow-sm d-flex align-items-center bg-white d-inline-flex rounded-pill px-2 py-1 mb-3">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
									</Link>
								</div>
								<div className="position-absolute start-0 bottom-50 translate-middle-x">
									<div className="alltuchtopdown">
										<img src="/assets/imgs/hero-4/vector-1.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="position-relative align-self-end mt-10">
								<h3 className="ds-3 fw-regular">
									Complex
									<span className=" fw-bold">IT <br />Solution</span>
									For <span className=" fw-bold">Grow <br /></span> Your <span className=" fw-bold">Business</span>
								</h3>
								<p className="fs-5 text-500 py-3">Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
								<Link href="#" className="fw-bold btn bg-neutral-100 d-inline-flex align-items-center text-900 hover-up">
									<span className="me-10">Get 15 Days Free Trial</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="fill-dark" d="M17.4177 5.41776L16.3487 6.48684L21.1059 11.2441H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5823L24 12L17.4177 5.41776Z" fill="black" />
									</svg>
								</Link>
								<p className="text-500 fs-8 pt-3 pb-8">No Card Required. Cancel Anytime.</p>
								<div className="row">
									<div className="row position-relative align-items-center justify-content-between">
										<div className="col d-flex align-items-center">
											<div className="counter-item-cover counter-item">
												<div className="content text-center mx-auto">
													<h2 className="count fw-black text-900 text-nowrap"><span className="odometer" /><CountUp end={12} enableScrollSpy={true} />M+</h2>
												</div>
											</div>
											<p className="ms-3 fs-5">
												Transaction
												<br />
												Completed
											</p>
										</div>
										<div className="col d-flex align-items-center pe-lg-8 ">
											<span className="line-verticarl border-start h-50 ms-4 position-absolute top-50 start-50 translate-middle d-none d-md-block" />
											<div className="counter-item-cover counter-item ms-md-auto">
												<div className="content ">
													<h2 className="count fw-black text-900"><span className="odometer" /><CountUp end={25} enableScrollSpy={true} />k+</h2>
												</div>
											</div>
											<p className="ms-3 fs-5">
												Happy <br />
												Clients
											</p>
										</div>
									</div>
									<div className="row mt-8 mb-10">
										<Swiper {...swiperOptions}
											className="swiper slider-two pb-5 mt-lg-0 mt-5"
											modules={[Keyboard, Autoplay, Pagination, Navigation]}
										>
											<div className="swiper-wrapper">
												<SwiperSlide className="swiper-slide">
													<div className="d-flex">
														<div className="img align-self-start">
															<img className="rounded-circle" src="/assets/imgs/hero-4/avatar-1.png" alt="infinia" />
														</div>
														<div className="content ms-3">
															<div className="d-flex">
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
															</div>
															<p className="text-500 mt-2">
																Access the same project through five different dynamic <br className="d-md-block d-none" />
																views: a kanban board, Gantt chart, spreadsheet, calendar <br />
																or simple task list.
															</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide className="swiper-slide">
													<div className="d-flex">
														<div className="img align-self-start">
															<img className="rounded-circle" src="/assets/imgs/hero-4/avatar-1.png" alt="infinia" />
														</div>
														<div className="content ms-3">
															<div className="d-flex">
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
															</div>
															<p className="text-500 mt-2">
																Access the same project through five different dynamic <br className="d-md-block d-none" />
																views: a kanban board, Gantt chart, spreadsheet, calendar <br />
																or simple task list.
															</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide className="swiper-slide">
													<div className="d-flex">
														<div className="img align-self-start">
															<img className="rounded-circle" src="/assets/imgs/hero-4/avatar-1.png" alt="infinia" />
														</div>
														<div className="content ms-3">
															<div className="d-flex">
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
															</div>
															<p className="text-500 mt-2">
																Access the same project through five different dynamic <br className="d-md-block d-none" />
																views: a kanban board, Gantt chart, spreadsheet, calendar <br />
																or simple task list.
															</p>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide className="swiper-slide">
													<div className="d-flex">
														<div className="img align-self-start">
															<img className="rounded-circle" src="/assets/imgs/hero-4/avatar-1.png" alt="infinia" />
														</div>
														<div className="content ms-3">
															<div className="d-flex">
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
															</div>
															<p className="text-500 mt-2">
																Access the same project through five different dynamic <br className="d-md-block d-none" />
																views: a kanban board, Gantt chart, spreadsheet, calendar <br />
																or simple task list.
															</p>
														</div>
													</div>
												</SwiperSlide>
											</div>
											<div className="swiper-pagination" />
										</Swiper>
									</div>
								</div>
								<div className="position-absolute top-0 end-0 z-1 flickering pt-9 pe-4">
									<img src="/assets/imgs/hero-4/star-1.svg" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-0 bottom-0 mb-5 bg-2 rounded-4 fix">
						<img className="h-100" src="/assets/imgs/hero-4/line-bg.png" alt="infinia" />
					</div>
					<div className="position-absolute bg-rotate d-none d-lg-block pb-10 ps-9 mb-8 z-0">
						<img src="/assets/imgs/hero-4/favicon.svg" alt="infinia" />
					</div>
				</div>
			</section>

		</>
	)
}
