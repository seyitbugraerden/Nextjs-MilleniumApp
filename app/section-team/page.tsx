"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function SectionTeam() {

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

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Our Team</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Our Team</p>
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
				{/*Team 1*/}
				<section className="section-team-1 section-padding position-relative overflow-hidden">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={200}>Meet Our Team</h3>
								<p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>Meet the talented and passionate team members who drive our company forward every day. <br className="d-none d-lg-block" /> company forward every day.</p>
							</div>
						</div>
						<div className="row mt-6">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-1.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Michael Anderson</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Co-Founder</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-2.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Strategy Development</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Software Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-3.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Sarah Brown</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Product Manager</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={400}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-4.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>David Clark </h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">UX/UI Designer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-5.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Jessica Carter</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">DevOps Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-6.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Lauren Graham</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Data Analyst</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-7.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>James Bennett</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Sales Executive</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={400}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-8.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>William Foster</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Marketing Specialist</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
				</section>
				{/*Team 2*/}
				<section className="section-team-2 section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="text-start mb-lg-0 mb-lg-5 mb-10">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
									</div>
									<h3 className="ds-3 my-3">Meet Our Team</h3>
									<p className="fs-5 mb-0">
										Meet the talented and passionate team members who drive our <br />
										company forward every day.
									</p>
									<div className="d-flex align-items-center mt-8">
										<img src="/assets/imgs/team-2/contact.svg" alt="infinia" />
										<div className="ms-3">
											<p className="text-uppercase fs-7">Contact Us</p>
											<h5>+1 (24) 567 890</h5>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="row">
									<div className="col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
										<div className="position-relative d-inline-block z-1">
											<div className="zoom-img rounded-3">
												<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-1.png" alt="infinia" />
											</div>
											<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
												<h6>Strategy Development</h6>
												<div className="d-flex">
													<span className="fs-6 text-600 me-auto">Software Engineer</span>
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
														<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
													</svg>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
										<div className="position-relative d-inline-block z-1">
											<div className="zoom-img rounded-3">
												<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-2.png" alt="infinia" />
											</div>
											<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
												<h6>Strategy Development</h6>
												<div className="d-flex">
													<span className="fs-6 text-600 me-auto">Software Engineer</span>
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
														<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
													</svg>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={0}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-3.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Strategy Development</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Software Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-4.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Strategy Development</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Software Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-5.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Strategy Development</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Software Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-2/avatar-6.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Strategy Development</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Software Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Team 3*/}
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
				{/*Team 4*/}
				<section className="section-team-4 section-padding position-relative overflow-hidden">
					<div className="container">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
							</div>
							<h3 className="ds-3 my-3">Meet Our Team</h3>
							<p className="fs-5">
								Meet the talented and passionate team members who drive our
								<br />
								company forward every day.
							</p>
						</div>
						<div className="row mt-8 mb-lg-8 m-0">
							{/* prettier-ignore */}
							<div className="col-lg-4 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-1.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-6 shadow-1">
											<h6>Esther Howard</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Co-Founder</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-2.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-6 shadow-1">
											<h6>Ashley Hardy</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Chief Finance Officer</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-3.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-6 shadow-1">
											<h6>Clark Roberts</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">VP Sales and Marketing </span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-lg-10 mb-4">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-4.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1">
											<h6>Dennis Norris</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Chief Marketing Officer</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-5.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1">
											<h6>Gina Kennedy</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Administrator </span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-6.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1">
											<h6>Fernando Torres</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Tax Consultant</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-4/avatar-7.png" alt="infinia" />
									</div>
									<div className="hover-up">
										<Link href="#" className="card-team text-start rounded-3 position-absolute top-100 translate-middle-y start-0 end-0 w-100 z-1 backdrop-filter w-auto p-4 mx-4 shadow-1">
											<h6>Esther Howard</h6>
											<span className="d-flex justify-content-between">
												<span className="fs-6 text-600 me-auto">Amelia Earhart</span>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
													<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="#6d4df2" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Team 5*/}
				<section className="section-team-5 section-padding position-relative">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3 fw-regular text-capitalize">Meet <span className="fw-bold">everyone</span> who <br className="d-none d-md-inline" /> made this <span className="fw-bold">possible.</span> </h3>
								<p className="fs-5">Meet the talented and passionate team members who drive our <br className="d-none d-md-inline" /> company forward every day.</p>
							</div>
						</div>
						<div className="row mt-6">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-primary-soft rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-1.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Michael Anderson</Link>
											</h6>
											<p className="mb-0">Co-Founder</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-3 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-2.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Emily Adams</Link>
											</h6>
											<p className="mb-0">Software Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-4 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-3.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">David Clark</Link>
											</h6>
											<p className="mb-0">Product Manager</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-neutral-100 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-4.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Sarah Brown</Link>
											</h6>
											<p className="mb-0">UX/UI Designer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-5 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-5.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Jessica Carter</Link>
											</h6>
											<p className="mb-0">DevOps Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-4 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-6.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">James Bennett</Link>
											</h6>
											<p className="mb-0">Data Analyst</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-primary-soft rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-7.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Lauren Graham</Link>
											</h6>
											<p className="mb-0">Sales Executive</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-3 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-8.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">William Foster</Link>
											</h6>
											<p className="mb-0">Marketing Specialist</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-10 mx-auto border-top  mt-3 pt-8">
								<div className="text-center">
									<img src="/assets/imgs/team-5/icon-sm.svg" alt="" />
									<h5 className="my-3">We are seeking skilled individuals.</h5>
									<p className="text-500 mb-8">Infinia is experiencing rapid growth, and we are continually seeking passionate, dynamic, <br className="d-none d-md-inline" /> and talented individuals to join our distributed team across the globe.</p>
									<Link href="#" className="btn btn-gradient">
										Become Our Member
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#" className="ms-md-3 mt-md-0 mt-3 btn btn-outline-secondary hover-up">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Team 6*/}
				<section className="section-team-6 section-padding position-relative">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3">Meet Our Team</h3>
								<p className="fs-5">
									Meet the talented and passionate team members who drive our <br />
									company forward every day.
								</p>
							</div>
						</div>
						<div className="row mt-6">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Sarah Brown</Link>
											</h6>
											<p className="mb-0">Co-Founder</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-1.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Michael Anderson</Link>
											</h6>
											<p className="mb-0">Software Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-2.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">David Clark</Link>
											</h6>
											<p className="mb-0">Product Manager</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-3.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Emily Adams</Link>
											</h6>
											<p className="mb-0">UX/UI Designer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-4.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Jessica Carter</Link>
											</h6>
											<p className="mb-0">DevOps Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-5.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">William Foster</Link>
											</h6>
											<p className="mb-0">Marketing Specialist</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-6.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">Lauren Graham</Link>
											</h6>
											<p className="mb-0">Sales Executive</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-7.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-8 text-center">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="d-flex bg-primary-soft rounded-top-3 p-3">
										<div>
											<h6>
												<Link href="#" className="text-900">James Bennett</Link>
											</h6>
											<p className="mb-0">Data Analyst</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="zoom-img bg-primary-soft">
										<img className="img-fluid w-100" src="/assets/imgs/team-6/img-portrait-8.png" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="text-center mt-6">
								<div className="text-center">
									<p className="fs-4 mb-5 text-900">
										Easily Monitor, Control, and Enhance Your Personal and <br />
										Business Finances. Your All-In-One Solution.
									</p>
									<Link href="#" className="btn btn-gradient">
										Get a Free Quote
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Team 7*/}
				<section className="section-team-7 section-padding overflow-hidden">
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
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 col-sm-6 mb-6">
								<div className="position-relative z-1">
									<div className="zoom-img rounded-4">
										<img className="img-fluid w-100" src="/assets/imgs/team-7/portrait-1.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
										<div className="position-relative z-1">
											<h6 className="text-white">Michael Anderson</h6>
											<div className="d-flex">
												<span className="fs-7 text-white me-auto">Co-Founder</span>
												<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle">
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
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-6">
								<div className="position-relative z-1">
									<div className="zoom-img rounded-4">
										<img className="img-fluid w-100" src="/assets/imgs/team-7/portrait-2.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
										<div className="position-relative z-1">
											<h6 className="text-white">Strategy Development</h6>
											<div className="d-flex">
												<span className="fs-7 text-white me-auto">Software Engineer</span>
												<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle">
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
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-6">
								<div className="position-relative z-1">
									<div className="zoom-img rounded-4">
										<img className="img-fluid w-100" src="/assets/imgs/team-7/portrait-3.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
										<div className="position-relative z-1">
											<h6 className="text-white">Sarah Brown</h6>
											<div className="d-flex">
												<span className="fs-7 text-white me-auto">Product Manager</span>
												<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle">
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
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-6">
								<div className="position-relative z-1">
									<div className="zoom-img rounded-4">
										<img className="img-fluid w-100" src="/assets/imgs/team-7/portrait-4.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
										<div className="position-relative z-1">
											<h6 className="text-white">David Clark </h6>
											<div className="d-flex">
												<span className="fs-7 text-white me-auto">UX/UI Designer</span>
												<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle">
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
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-6">
								<div className="position-relative z-1">
									<div className="zoom-img rounded-4">
										<img className="img-fluid w-100" src="/assets/imgs/team-7/portrait-5.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
										<div className="position-relative z-1">
											<h6 className="text-white">Jessica Carter</h6>
											<div className="d-flex">
												<span className="fs-7 text-white me-auto">DevOps Engineer</span>
												<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle">
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
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-6">
								<div className="position-relative z-1">
									<div className="zoom-img rounded-4">
										<img className="img-fluid w-100" src="/assets/imgs/team-7/portrait-6.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
										<div className="position-relative z-1">
											<h6 className="text-white">Lauren Graham</h6>
											<div className="d-flex">
												<span className="fs-7 text-white me-auto">Data Analyst</span>
												<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle">
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
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-6">
								<div className="position-relative z-1">
									<div className="zoom-img rounded-4">
										<img className="img-fluid w-100" src="/assets/imgs/team-7/portrait-7.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
										<div className="position-relative z-1">
											<h6 className="text-white">James Bennett</h6>
											<div className="d-flex">
												<span className="fs-7 text-white me-auto">Sales Executive</span>
												<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle">
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
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 mb-6">
								<div className="position-relative z-1">
									<div className="zoom-img rounded-4">
										<img className="img-fluid w-100" src="/assets/imgs/team-7/portrait-8.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-4 position-absolute bottom-0 start-0 end-0 z-1 p-4">
										<div className="position-relative z-1">
											<h6 className="text-white">William Foster</h6>
											<div className="d-flex">
												<span className="fs-7 text-white me-auto">Marketing Specialist</span>
												<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle">
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
							</div>
						</div>
						<div className="text-center mt-5">
							<p className="fs-4 text-900 fw-medium">
								We are actively seeking <span className="fw-bold">talented professionals <br className="d-none d-lg-block" /></span> to join our growing team.
							</p>
							<Link href="#" className="btn btn-gradient mt-2 d-inline-flex">
								Become Our Member
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
						</div>
					</div>
				</section>


			</Layout>
		</>
	)
}