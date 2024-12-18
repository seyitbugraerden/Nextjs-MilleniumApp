
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function PageFeatures2() {

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	return (
		<>

			<Layout >

				{/* feature-11 */}
				<section className="section-feature-11 border-bottom">
					<div className="container-fluid position-relative section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 position-relative">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
									</div>
									<h5 className="ds-5 mt-2">Optimize Your <br /> Finances with Ease.</h5>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our History</h6>
											<p>A Journey of Innovation, Growth, <br /> and Technological Advancement</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our Mission</h6>
											<p>Empowering Your Digital Success Through <br /> Innovative Solutions</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-3.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our Vision</h6>
											<p>Leading the Future of Web Development <br /> with Excellence and Innovation</p>
										</div>
									</div>
									<div className="position-absolute flickering top-0 end-0 mt-5 me-10 d-none d-md-block">
										<img src="/assets/imgs/features-11/icon-4.svg" alt="" />
									</div>
								</div>
								<div className="col-lg-7 text-center mt-lg-0 mt-8 d-flex">
									<div className="zoom-img rounded-3 mt-8 me-3">
										<img src="/assets/imgs/features-11/img-1.png" alt="infinia" />
									</div>
									<div className="zoom-img rounded-3">
										<img className="rounded-3" src="/assets/imgs/features-11/img-2.png" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* feature-13 */}
				<section className="section-feature-13 border-bottom border-top bg-1 section-padding">
					<div className="text-center container">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Meet Our Team</span>
						</div>
						<h5 className="ds-5 mb-3 mt-4">
							We bring a rich variety of <br />
							experience from multiple fields.
						</h5>
						<p className="text-500">
							Leveraging Extensive Experience: Comprehensive Solutions Crafted <br />
							from Diverse Professional Backgrounds
						</p>
						<div className="container mt-8">
							<div className="d-flex">
								<div className="zoom-img rounded-3 me-2">
									<img src="/assets/imgs/features-13/img-1.png" alt="infinia" />
								</div>
								<div className="zoom-img rounded-3 ms-2">
									<img src="/assets/imgs/features-13/img-2.png" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* FAQs 1 */}
				<section className="section-faqs-1 section-padding position-relative">
					<div className="container position-relative z-2">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="text-start position-relative d-inline-block mb-lg-0 mb-5">
									<img className="rounded-4" src=" assets/imgs/faqs-1/img-1.png" alt="infinia" />
									<div className="px-0 card-team rounded-4 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto px-5 py-8 m-5">
										<div className="d-flex flex-column flex-md-row align-items-start gap-3 mb-4" data-aos="fade-zoom-in" data-aos-delay={0}>
											<img src="/assets/imgs/faqs-1/icon-1.png" alt="infinia" />
											<div>
												<h6 className="m-0">Live chat support 24/7</h6>
												<p className="m-0">More than 300 employees are ready to help you</p>
											</div>
										</div>
										<div className="d-flex flex-column flex-md-row align-items-start gap-3 mb-4" data-aos="fade-zoom-in" data-aos-delay={100}>
											<img src="/assets/imgs/faqs-1/icon-2.png" alt="infinia" />
											<div>
												<h6 className="m-0">Help desk support center</h6>
												<p className="m-0">Via ticket system. 24/7 available.</p>
											</div>
										</div>
										<div className="d-flex flex-column flex-md-row align-items-start gap-3" data-aos="fade-zoom-in" data-aos-delay={200}>
											<img src="/assets/imgs/faqs-1/icon-3.png" alt="infinia" />
											<div>
												<h6 className="m-0">Book a demo</h6>
												<p className="m-0">Live support via video call</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-5">
								<h3 className="ds-3" data-aos="fade-up" data-aos-delay={0}>Frequently Asked Questions</h3>
								<p className="fs-5 my-4" data-aos="fade-up" data-aos-delay={0}>Find the answers to all of our most frequently asked questions</p>
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0">The Future of SaaS: Emerging Trends to Watch</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Is the video call app free to use?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">What devices are compatible with the video call app?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0">How can I ensure my video calls are secure?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0" data-aos="fade-up" data-aos-delay={0}>
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
												<h6 className="m-0">Can I share my screen during a video call?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseFive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/faqs-1/img-bg-line.png" alt="infinia" />
				</section>
				{/*Features 4*/}
				<section>
					<div className="container-fluid position-relative bg-linear-3 section-padding">
						<div className="container">
							<div className="text-center mb-8">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
								</div>
								<h3 className="ds-3 my-3 fw-regular">
									Professional
									<span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>UltraHD Video <br className="d-none d-lg-block" />
										Conferencing</span>
									Platform
								</h3>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={0}>
									<div className="card-service bg-white p-5 rounded-4 hover-up">
										<img className="filter-invert" src="/assets/imgs/features-4/icon-1.svg" alt="infinia" />
										<h6 className="my-3 fs-5">Unified Communications</h6>
										<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={100}>
									<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
										<img className="filter-invert" src="/assets/imgs/features-4/icon-2.svg" alt="infinia" />
										<h6 className="my-3 fs-5">Team Messenger</h6>
										<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={200}>
									<div className="card-service bg-white p-5 rounded-4 hover-up">
										<img className="filter-invert" src="/assets/imgs/features-4/icon-3.svg" alt="infinia" />
										<h6 className="my-3 fs-5">Telephony and PBX</h6>
										<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={300}>
									<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
										<img className="filter-invert" src="/assets/imgs/features-4/icon-4.svg" alt="infinia" />
										<h6 className="my-3 fs-5">Smart Meeting</h6>
										<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="row mt-8">
								<div className="col-lg-7">
									<div className="d-flex align-items-center justify-content-lg-end justify-content-center">
										<Link href="#" className="btn btn-gradient">
											Get Free Quote
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
										<Link href="#" className="ms-5 text-decoration-underline fw-bold">How We Work</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 2*/}
				<section>
					<div className="container-fluid position-relative bg-primary-light section-padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
									<img src="/assets/imgs/features-2/icon-1.svg" alt="infinia" className="hover-up" />
									<h2 className="text-white mt-3 mb-4 fw-medium hover-up">Scalable Business for <span className="fw-bold">Startups</span>.</h2>
									<ul className="list-unstyled phase-items">
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
													<path d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z" fill="white" />
													<path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
												</svg>
												<p className="text-white mb-0 ms-3">Success Accelerators</p>
											</Link>
										</li>
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
													<path d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z" fill="white" />
													<path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
												</svg>
												<p className="text-white mb-0 ms-3">Started politician Club</p>
											</Link>
										</li>
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
													<path d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z" fill="white" />
													<path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
												</svg>
												<p className="text-white mb-0 ms-3">Success Accelerators</p>
											</Link>
										</li>
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
													<path d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z" fill="white" />
													<path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
												</svg>
												<p className="text-white mb-0 ms-3">Transformational Strategy</p>
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
									<div className="position-relative d-inline-block z-2  hover-up">
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-2/img-1.png" alt="infinia" />
										<div className="position-absolute bottom-0 start-0 end-0 mb-3 mx-3 backdrop-filter rounded-3 text-start p-3">
											<Link href="/ #" className="d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1">
												<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
												<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
											</Link>
											<h6 className="mt-3">
												Transform Your Business <br />
												Into Profession
											</h6>
											<p className="fs-7 text-700">Achieve Your a of Business</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 mb-lg-0 mb-8">
									<div className="px-lg-8">
										<img src="/assets/imgs/features-2/icon-2.svg" alt="infinia" className="hover-up" />
										<div data-aos="fade-zoom-in" data-aos-delay={100}>
											<h5 className="text-white mt-3 mb-3">Efficiency Experts</h5>
											<p className="text-white border-bottom pb-3">A business consultant provides expert advice and guidance to businesses on various aspects.</p>
										</div>
										<div data-aos="fade-zoom-in" data-aos-delay={4200}>
											<h5 className="text-white mt-8 mb-3">Strategic Solutions</h5>
											<p className="text-white">Discover why hundreds of millions people use Infinia to chat and call every day.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute bg-rotate z-0">
							<img className="rotate-center" src="/assets/imgs/features-2/bg-img-favicon.png" alt="infinia" />
						</div>
						<div className="position-absolute top-0 end-0 z-1 p-8">
							<div className="bloom" />
						</div>
					</div>
				</section>
				{/* feature-12 */}
				<section className="section-feature-12 border-bottom pb-120 pt-110">
					<div className="container">
						<div className="text-center">
							<h5 className="ds-5">Our Core Values</h5>
							<p className="fs-5 pb-4">
								We break down barriers so teams can focus on what matters – working together <br className="d-none d-lg-block" />
								to create products their customers love.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img className="filter-invert" src="/assets/imgs/service-1/icon-6.svg" alt="infinia" />
										</div>
									</div>
									<h4>Customers First</h4>
									<p>
										Your satisfaction and trust are our top priorities, and we <br />
										are committed to building lasting relationships through <br />
										exceptional service and support.
									</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
								<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img className="filter-invert" src="/assets/imgs/service-1/icon-5.svg" alt="infinia" />
										</div>
									</div>
									<h4>Commitment to Excellence</h4>
									<p>
										Your satisfaction and trust are our top priorities, and we <br />
										are committed to building lasting relationships through <br />
										exceptional service and support.
									</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img className="filter-invert" src="/assets/imgs/service-1/icon-4.svg" alt="infinia" />
										</div>
									</div>
									<h4>Personal Accountability</h4>
									<p>
										Your satisfaction and trust are our top priorities, and we <br />
										are committed to building lasting relationships through <br />
										exceptional service and support.
									</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
								<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img className="filter-invert" src="/assets/imgs/service-1/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<h4>Team Empowerment</h4>
									<p>
										Your satisfaction and trust are our top priorities, and we <br />
										are committed to building lasting relationships through <br />
										exceptional service and support.
									</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Newsletter 1 */}
				<section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
					<div className="container position-relative fix">
						<div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
							<div className="col-lg-6 my-4">
								<div className="row">
									<div className="ms-lg-4">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-1.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-2.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-3.png" alt="infinia" />
									</div>
								</div>
								<div className="row">
									<div>
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-4.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-5.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-6.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-7.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
									</div>
								</div>
								<div className="row d-none d-lg-flex">
									<div className="me-lg-0">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-8.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-9.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-10.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-5">
								<div className="px-lg-5 text-lg-start text-center">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Stay Updated</span>
									</div>
									<h4 className="mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Subscribe to our Newsletter!</h4>
									<span className="fs-6 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>Join 52,000+ people on our newsletter</span>
									<div className="input-group mb-3 mt-4 position-relative">
										<input type="text" className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
											<button className="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill" type="button" data-aos="fade-zoom-in" data-aos-delay={100}>Join Now</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-50 start-50 translate-middle z-0">
							<img src="/assets/imgs/newsletter-1/bg-line.png" alt="infinia" />
						</div>
						<div className="bouncing-blobs-container rounded-4 fix">
							<div className="bouncing-blobs-glass rounded-4" />
							<div className="bouncing-blobs">
								<div className="bouncing-blob bouncing-blob--green" />
								<div className="bouncing-blob bouncing-blob--primary" />
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}