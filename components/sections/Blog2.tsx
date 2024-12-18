
"use client"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Blog2() {
	return (
		<>
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


		</>
	)
}
