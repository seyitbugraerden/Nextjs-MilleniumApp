"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function SectionNewsletter() {

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

	const swiperOptions2 = {
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
							<h3>Newsletter</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Newsletter</p>
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
				{/*Testimonial 1*/}
				<section className="section-testimonial-1 pb-120 pt-120 position-relative">
					<div className="container position-relative z-1">
						<div className="row">
							<div className="col-lg-4">
								<div className="pe-8 mt-10">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
									</div>
									<h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>What our clients say</h3>
									<span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={300}>Access top-tier group mentoring plans and exclusive professional benefits for your team. 🔥</span>
									<div className="d-flex flex-wrap align-items-center mt-8">
										<Link href="/page-contact-1" className="btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											Contact Us
										</Link>
										<Link href="#" className="ms-5 ms-md-5 mt-5 mt-md-0 fw-bold" data-aos="fade-zoom-in" data-aos-delay={300}>Help Center
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
												<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={100}>
									<p className="text-900">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
												<span className="fs-8">CEO of Tech Innovators Inc</span>
											</div>
										</div>
									</div>
									<Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={200}>
									<p className="text-900">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Emily Davis</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
												<span className="fs-8">Software Engineer</span>
											</div>
										</div>
									</div>
									<Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={300}>
									<p className="text-900">The individual email account feature has improved internal communication clarity and professionalism. Moreover, the premium support team's responsiveness and expertise have ensured minimal <span className="fw-bold">disruptions and quick resolutions</span> to any technical challenges we've faced. I highly recommend their services for any enterprise seeking robust SaaS solutions,</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
												<span className="fs-8">Marketing Director</span>
											</div>
										</div>
									</div>
									<Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={400}>
									<p className="text-900">Our experience with this team has surpassed our expectations on every front. <span className="fw-bold">The comprehensive suite of over 1200 UI blocks has enabled us to craft highly functional</span> and aesthetically pleasing user interfaces that resonate with our target audience. Equally impressive is the premium support team's proactive approach.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
												<span className="fs-8">Software Engineer</span>
											</div>
										</div>
									</div>
									<Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/testimonial-1/bg-line.png" alt="infinia" />
					</div>
				</section>
				{/*Testimonial 2*/}
				<section className="section-testimonial-2 position-relative bg-white section-padding">
					<div className="container position-relative z-1">
						<div className="row pb-9">
							<div className="col-lg-7 mx-lg-auto">
								<div className="text-center mb-lg-0 mb-5">
									<h4 className="ds-4 my-3">
										+100k users <span className="fw-regular">have loved </span><br />
										Infinia Conference <span className="fw-regular">System</span>
									</h4>
									<p className="fs-5 mb-0">
										Provide your team with top-tier group mentoring <br className="d-none d-lg-block" />
										programs and exceptional professional benefits.
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={0}>
									<p className="text-900">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
												<span className="fs-8">CEO of Tech Innovators Inc</span>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={100}>
									<p className="text-900">Our experience with this team has surpassed our expectations on every front. <span className="fw-bold">The comprehensive suite of over 1200 UI blocks has enabled us to craft highly functional</span> and aesthetically pleasing user interfaces that resonate with our target audience. Equally impressive is the premium support team's proactive approach.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
												<span className="fs-8">Software Engineer</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3" data-aos="fade-zoom-in" data-aos-delay={200}>
									<p className="text-900">The individual email account feature has improved internal communication clarity and professionalism. Moreover, the premium support team's responsiveness and expertise have ensured minimal <span className="fw-bold">disruptions and quick resolutions</span> to any technical challenges we've faced. I highly recommend their services for any enterprise seeking robust SaaS solutions,</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
												<span className="fs-8">Marketing Director</span>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={0}>
									<p className="text-900">The individual email account feature has improved internal communication clarity and professionalism. Moreover, the premium support team's responsiveness and expertise have ensured minimal <span className="fw-bold">disruptions and quick resolutions</span> to any technical challenges we've faced. I highly recommend their services for any enterprise seeking robust SaaS solutions,</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
												<span className="fs-8">Marketing Director</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3" data-aos="fade-zoom-in" data-aos-delay={100}>
									<p className="text-900">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Emily Davis</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
												<span className="fs-8">Software Engineer</span>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={200}>
									<p className="text-900">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
												<span className="fs-8">CEO of Tech Innovators Inc</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-8 position-relative z-3">
						<Link href="#" className="btn btn-dark hover-up">
							View More Testimonials
							<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path className="stroke-white" d="M17 7L6.75 17.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
					</div>
					<div className="mask-image-2 position-absolute top-50 bottom-0 start-0 end-0 z-1" />
				</section>
				{/*Testimonial 3*/}
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
							<Swiper {...swiperOptions2}
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