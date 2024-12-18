"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SectionBlog() {

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
							<h3>Blog</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Blog</p>
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
				{/*Blog 1*/}
				<section className="section-blog-1 section-padding">
					<div className="container">
						<div className="row align-items-end">
							<div className="col-12 col-md-6 me-auto">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Our Latest Articles</h3>
								<span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>Explore the insights and trends shaping our industry</span>
							</div>
							<div className="col-12 col-md-6 mt-3 mt-md-0">
								<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
										<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="row">
							{/* prettier-ignore */}
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3" src="/assets/imgs/blog-1/card-img-1.png" alt="infinia" />
									<div className="card-body p-0 bg-white">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
										</Link>
										<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={200}>
									<img className="rounded-3" src="/assets/imgs/blog-1/card-img-2.png" alt="infinia" />
									<div className="card-body p-0 bg-white">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={300}>
									<img className="rounded-3" src="/assets/imgs/blog-1/card-img-3.png" alt="infinia" />
									<div className="card-body p-0 bg-white">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Blog 2*/}
				<section className="section-blog-2 position-relative section-padding fix">
					<div className="container position-relative z-1">
						<div className="row">
							<div className="col-lg-4">
								<div className="pe-6">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
									</div>
									<h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={0}>Our Latest News and Articles</h3>
									<span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={0}>Explore the insights and trends shaping our industry. 🔥 </span>
									<div className="d-flex align-items-center mt-8">
										<Link href="#" className="fw-bold btn bg-white text-primary hover-up">See all articles
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
												<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-8">
								<div className="row">
									<Swiper
										className="swiper slider-one p-2 mt-lg-0 mt-5"
										modules={[Keyboard, Autoplay, Pagination, Navigation]}
										slidesPerView={2}
										spaceBetween={20}
										slidesPerGroup={1}
										centeredSlides={false}
										loop={true}
										autoplay={{
											delay: 4000,
										}}
										breakpoints={{
											1200: {
												slidesPerView: 2,
											},
											992: {
												slidesPerView: 2,
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
										}}
									>
										<div className="swiper-wrapper">
											<SwiperSlide className="swiper-slide">
												<div className="card border-0 rounded-3 position-relative d-inline-flex card-hover">
													<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-1.png" alt="infinia" />
													<div className="card-body">
														<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
															<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
														</Link>
														<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
														<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
													</div>
													<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0" />
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="card border-0 rounded-3 position-relative d-inline-flex card-hover">
													<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-2.png" alt="infinia" />
													<div className="card-body">
														<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
															<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
														</Link>
														<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
														<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
													</div>
													<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0" />
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="card border-0 rounded-3 position-relative d-inline-flex card-hover">
													<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-3.png" alt="infinia" />
													<div className="card-body">
														<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
															<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
														</Link>
														<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
														<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
													</div>
													<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0" />
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="card border-0 rounded-3 position-relative d-inline-flex card-hover">
													<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-1.png" alt="infinia" />
													<div className="card-body">
														<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
															<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
														</Link>
														<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
														<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
													</div>
													<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0" />
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="card border-0 rounded-3 position-relative d-inline-flex card-hover">
													<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-2.png" alt="infinia" />
													<div className="card-body">
														<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
															<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
														</Link>
														<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
														<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
													</div>
													<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0" />
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<div className="card border-0 rounded-3 position-relative d-inline-flex card-hover">
													<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-3.png" alt="infinia" />
													<div className="card-body">
														<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
															<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
														</Link>
														<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
														<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
													</div>
													<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0" />
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
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
				{/*Blog 3*/}
				<section className="section-blog-3 position-relative @@classList section-padding fix">
					<div className="container position-relative z-1">
						<div className="row align-items-end mb-5">
							<div className="col-md-auto col-12 me-auto">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Our Latest Articles</h3>
								<span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
							</div>
							<div className="col-md-auto col-12 pt-md-0 pt-3">
								<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
										<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 pe-lg-8">
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-3/img-1.png" alt="infinia" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">10 Proven SEO Strategies to Boost Your Website Traffic in 2024</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</span>
								</Link>
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-3/img-2.png" alt="infinia" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">The Power of Branding: How to Create a Memorable Brand Identity</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</span>
								</Link>
							</div>
							<div className="col-lg-6 pe-lg-8">
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-3/img-3.png" alt="infinia" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">Why Consistent Brand Identity is Key to Business Success</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</span>
								</Link>
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-3/img-4.png" alt="infinia" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">Top Trends in Digital Marketing and How They Impact Your Business</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</span>
								</Link>
							</div>
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
				{/*Blog 4*/}
				<section className="section-blog-4 pb-120 pt-120">
					<div className="container">
						<div className="row align-items-end">
							<div className="col-12 col-md-4 me-auto">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Our Latest Articles</h3>
								<span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
							</div>
							<div className="col-12 col-md-4 col-auto mt-5 mt-md-0">
								<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
										<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="row mt-8">
							<Swiper {...swiperOptions}
								className="swiper slider-1 pt-2 pb-3"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									{/* prettier-ignore */}
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
											<img className="rounded-top-3" src="/assets/imgs/blog-4/card-img-1.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Business</span>
											</Link>
											<div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
												<h6 className="mb-3">The Future of SaaS: Emerging Trends to Watch</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top ">
													<div className="d-flex align-items-center">
														<div className="icon-shape rounded-circle border border-2 border-white">
															<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-1.png" alt="infinia" />
														</div>
														<div className="ms-3">
															<h6 className="fs-7 m-0 mb-1">Evara Rose</h6>
															<p className="mb-0 fs-8">17 May 2024</p>
														</div>
													</div>
													<div className="icon-shape icon-md bg-white rounded-circle border">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
															<path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
											<img className="rounded-top-3" src="/assets/imgs/blog-4/card-img-2.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">SEO</span>
											</Link>
											<div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
												<h6 className="mb-3">Choosing the Right SaaS Solution for Your Business</h6>
												<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
												<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top ">
													<div className="d-flex align-items-center">
														<div className="icon-shape rounded-circle border border-2 border-white">
															<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-2.png" alt="infinia" />
														</div>
														<div className="ms-3">
															<h6 className="fs-7 m-0 mb-1">Olivia Smith</h6>
															<p className="mb-0 fs-8">21 June 2024</p>
														</div>
													</div>
													<div className="icon-shape icon-md bg-white rounded-circle border">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
															<path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
											<img className="rounded-top-3" src="/assets/imgs/blog-4/card-img-3.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Marketing</span>
											</Link>
											<div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
												<h6 className="mb-3">The Importance of Data Security in Your SaaS Projects</h6>
												<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
												<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top ">
													<div className="d-flex align-items-center">
														<div className="icon-shape rounded-circle border border-2 border-white">
															<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-3.png" alt="infinia" />
														</div>
														<div className="ms-3">
															<h6 className="fs-7 m-0 mb-1">Sophia Martinez</h6>
															<p className="mb-0 fs-8">29 June 2024</p>
														</div>
													</div>
													<div className="icon-shape icon-md bg-white rounded-circle border">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
															<path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
											<img className="rounded-top-3" src="/assets/imgs/blog-4/card-img-1.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Business</span>
											</Link>
											<div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
												<h6 className="mb-3">The Future of SaaS: Emerging Trends to Watch</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top ">
													<div className="d-flex align-items-center">
														<div className="icon-shape rounded-circle border border-2 border-white">
															<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-1.png" alt="infinia" />
														</div>
														<div className="ms-3">
															<h6 className="fs-7 m-0 mb-1">Evara Rose</h6>
															<p className="mb-0 fs-8">17 May 2024</p>
														</div>
													</div>
													<div className="icon-shape icon-md bg-white rounded-circle border">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
															<path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
											<img className="rounded-top-3" src="/assets/imgs/blog-4/card-img-2.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">SEO</span>
											</Link>
											<div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
												<h6 className="mb-3">Choosing the Right SaaS Solution for Your Business</h6>
												<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
												<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top ">
													<div className="d-flex align-items-center">
														<div className="icon-shape rounded-circle border border-2 border-white">
															<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-2.png" alt="infinia" />
														</div>
														<div className="ms-3">
															<h6 className="fs-7 m-0 mb-1">Olivia Smith</h6>
															<p className="mb-0 fs-8">21 June 2024</p>
														</div>
													</div>
													<div className="icon-shape icon-md bg-white rounded-circle border">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
															<path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover shadow-2">
											<img className="rounded-top-3" src="/assets/imgs/blog-4/card-img-3.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Marketing</span>
											</Link>
											<div className="card-body bg-white border border-top-0 rounded-bottom-3 p-6">
												<h6 className="mb-3">The Importance of Data Security in Your SaaS Projects</h6>
												<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
												<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top ">
													<div className="d-flex align-items-center">
														<div className="icon-shape rounded-circle border border-2 border-white">
															<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-3.png" alt="infinia" />
														</div>
														<div className="ms-3">
															<h6 className="fs-7 m-0 mb-1">Sophia Martinez</h6>
															<p className="mb-0 fs-8">29 June 2024</p>
														</div>
													</div>
													<div className="icon-shape icon-md bg-white rounded-circle border">
														<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
															<path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															<path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
												</div>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</section>
				{/*Blog 5*/}
				<section className="section-blog-1 section-padding position-relative border-top border-bottom">
					<div className="container position-relative z-2">
						<div className="row align-items-end">
							<div className="col-lg-7 me-auto">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Our Latest Articles</h3>
								<span className="fs-5 fw-medium text-900">Explore the insights and trends shaping our industry</span>
							</div>
							<div className="col-lg-auto">
								<Link href="#" className="fw-bold text-primary btn bg-white hover-up shadow-2 mt-lg-0 mt-5 ms-lg-auto">@@buttoncontent
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
										<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="row mt-8 align-items-center">
							<div className="col-lg-7">
								<div className="card-team position-relative d-flex flex-lg-row flex-column align-items-center rounded-3 border  card-hover shadow-2 mb-lg-0 mb-8">
									<img className="rounded rounded-bottom-0 rounded-start-lg rounded-end-lg-0 w-100 w-lg-auto" src="/assets/imgs/blog-5/img-1.png" alt="infinia" />
									<div className="bg-white align-self-stretch rounded rounded-start-lg-0 p-5">
										<Link href="#" className="z-1 position-relative bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1 mb-2">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">business</span>
										</Link>
										<h6 className="mb-3">The Future of SaaS: Emerging Trends to Watch</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
										<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top">
											<div className="d-flex align-items-center position-relative z-1">
												<div className="icon-shape rounded-circle border border-2 border-white">
													<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-1.png" alt="infinia" />
												</div>
												<div className="ms-3">
													<h6 className="fs-7 m-0 mb-1">Evara Rose</h6>
													<p className="mb-0 fs-8">17 May 2024</p>
												</div>
												<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
											</div>
											<div className="arrow-icon icon-shape icon-md bg-white rounded-circle border">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
													<path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</div>
										</div>
										<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
									</div>
								</div>
							</div>
							<div className="col-lg-5">
								<div>
									<Link href="#" className="d-flex flex-column flex-md-row align-items-center hover-up">
										<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-2.png" alt="infinia" />
										<div className="content ms-5 mt-4 mt-md-0">
											<h6 className="mb-2">Why Consistent Brand Identity is Key to Business Success</h6>
											<p className="mb-0">As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
										</div>
									</Link>
									<Link href="#" className="d-flex flex-column flex-md-row align-items-center mt-7 hover-up">
										<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-3.png" alt="infinia" />
										<div className="content ms-5 mt-4 mt-md-0">
											<h6 className="mb-2">The Importance of Data Security in Your SaaS Projects</h6>
											<p className="mb-0">As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
						</div>
					</div>
				</section>
				{/*Blog 6*/}
				<section className="section-blog-6 section-padding border-bottom">
					<div className="container">
						<div className="row align-items-end">
							<div className="col">
								<h5 className="ds-5 mt-3 mb-3">Trending News</h5>
								<span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
							</div>
						</div>
						<div className="row">
							{/* prettier-ignore */}
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-2.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-1.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">business</span>
										</Link>
										<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-3.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-4.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-5.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-6.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-7.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-8.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-9.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-10.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-11.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 col-md-6 text-start">
								<div className="card border-0 rounded-3 mt-4 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-6/img-12.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row pt-5 text-start">
							<div className="d-flex justify-content-start align-items-center">
								<nav aria-label="Page navigation example">
									<ul className="pagination gap-2">
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#" aria-label="Previous">
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
													<path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">1</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">2</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">3</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">...</Link>
										</li>
										<li className="page-item">
											<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#" aria-label="Next">
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path className="stroke-dark" d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
													<path className="stroke-dark" d="M16.9955 11H4.78125" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</section>
				{/*Blog 7*/}
				<section className="section-blog-7 section-padding border-bottom">
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<h3 className="ds-3 mt-3 mb-3">Recent Posts</h3>
								<span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-10 mx-lg-auto mt-8">
								{/* prettier-ignore */}
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-1.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">The Power of Branding: How to Create a Memorable Brand Identity</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-2.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">business</span>
										</Link>
										<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-3.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-4.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-5.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-6.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top mb-8" />
								<div className="container">
									<div className="row pt-5 text-start">
										<div className="d-flex justify-content-start align-items-center">
											<nav aria-label="Page navigation example">
												<ul className="pagination gap-2">
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#" aria-label="Previous">
															<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
																<path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">1</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">2</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">3</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">...</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#" aria-label="Next">
															<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
																<path className="stroke-dark" d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M16.9955 11H4.78125" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Blog 8*/}
				<section className="section-blog-8 section-padding position-relative fix">
					<div className="container position-relative z-1">
						<div className="row text-center">
							<h5 className="ds-5">Related Posts</h5>
						</div>
						<div className="row">
							{/* prettier-ignore */}
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-1.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
										</Link>
										<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-2.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
							<div className="col-lg-4 text-start">
								<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex">
									<img className="rounded-top-3" src="/assets/imgs/blog-1/card-img-3.png" alt="infinia" />
									<div className="card-body bg-white p-0">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
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


			</Layout>
		</>
	)
}