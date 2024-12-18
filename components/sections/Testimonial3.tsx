"use client"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Testimonial3() {

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


			<section className="section-testimonial-3 position-relative section-padding fix">
				<div className="container position-relative z-1">
					<div className="row pb-9">
						<div className="col-lg-7 mx-lg-auto">
							<div className="text-center mb-lg-0 mb-5">
								<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
								</div>
								<h5 className="ds-5 my-3 fw-regular">
									What <span className="fw-bold">People Say</span> About <br />
									<span className="fw-bold"> Our Company</span>
								</h5>
								<p className="fs-5 mb-0 text-900">
									Access top-tier group mentoring plans and exclusive professional <br className="d-none d-md-block" />
									benefits for your team. 🔥
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<Swiper {...swiperOptions}
							className="swiper slider-1 pt-2 pb-3"
							modules={[Keyboard, Autoplay, Pagination, Navigation]}
						>
							<div className="swiper-wrapper">
								{/* prettier-ignore */}
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
													<span className="fs-8">CEO of Tech Innovators Inc</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
													<span className="fs-8">CEO of Tech Innovators Inc</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
													<span className="fs-8">CEO of Tech Innovators Inc</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Automated reports</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
													<span className="fs-8">CEO of Tech Innovators Inc</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Funnel optimization</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
													<span className="fs-8">CEO of Tech Innovators Inc</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
										<div className="d-flex align-items-center mb-5">
											<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
											<div className="d-flex flex-column">
												<h6 className="ms-3 fs-6 mb-0">Integrations</h6>
												<div className="flag ms-3">
													<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
													<span className="fs-8">CEO of Tech Innovators Inc</span>
												</div>
											</div>
										</div>
										<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
										<div className="d-flex">
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
											<span className="fs-8 text-600 ms-2">(For services and support)</span>
										</div>
										<div className="position-absolute top-0 end-0 m-4">
											<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
												<g clipPath="url(#clip0_551_13914)">
													<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
													<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
												</g>
												<defs>
													<clipPath>
														<rect width={52} height={52} fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
									</div>
								</SwiperSlide>
							</div>
							<div className="swiper-pagination" />
							<div className="text-center mt-8 position-relative z-3" />
						</Swiper>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x z-0">
					<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
				</div>
				<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
				<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
			</section>


		</>
	)
}
