
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function SectionFaqs() {

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>FAQs</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">FAQs</p>
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
											<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
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
											<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
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
											<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
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
											<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
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
											<a className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center `} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
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
				{/* FAQs 2 */}
				<section className="section-faqs-2 section-padding bg-4 position-relative">
					<div className="container position-relative z-2">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Pricing FAQs</span>
							</div>
							<h3 className="ds-3 my-3 fw-bold">Ask us anything</h3>
							<p className="fs-5 mb-0">Have any questions? We’re here to assist you.</p>
						</div>
						<div className="row align-items-center position-relative z-1">
							<div className="col-lg-6">
								<div className="accordion">
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse" >
												<h6 className="m-0">What are the key benefits of using <span className="text-primary">Infinia System</span></h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse01" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse" >
												<h6 className="m-0">What features does <span className="text-primary">Infinia</span> offer?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse02" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<h6 className="m-0">How do your services work?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse03" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
												<h6 className="m-0">What is SEO and why do I need it?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse04" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse" >
												<h6 className="m-0">What SEO strategies do you use?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse05" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-2">
								<div className="accordion">
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 6 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(6)} data-bs-toggle="collapse" >
												<h6 className="m-0">How can you help with identity development?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse06" className={activeItem == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 7 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(7)} data-bs-toggle="collapse" >
												<h6 className="m-0">What is your process for starting a project?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse07" className={activeItem == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 8 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(8)} data-bs-toggle="collapse">
												<h6 className="m-0">How much do your services cost?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse08" className={activeItem == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 9 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(9)} data-bs-toggle="collapse" >
												<h6 className="m-0">How long does it take to see results?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse09" className={activeItem == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 10 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(10)} data-bs-toggle="collapse" >
												<h6 className="m-0">Do you offer ongoing support?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse10" className={activeItem == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 11 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(11)} data-bs-toggle="collapse" >
												<h6 className="m-0">Do you offer ongoing support?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse11" className={activeItem == 11 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="ellipse-center position-absolute top-50 start-50 translate-middle z-0" />
					</div>
				</section>
				{/* FAQs 3 */}
				<section className="section-faqs-1 section-padding position-relative">
					<div className="container position-relative z-2">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="text-start">
									<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Frequently Asked questions</span>
									</div>
									<h3 className="ds-3 my-3 fw-bold">
										Got questions? <br />
										We’ve got answers
									</h3>
									<div className="position-relative d-inline-block mt-3 mb-6">
										<img src="/assets/imgs/faqs-3/img-1.png" alt="" className=" rounded-pill border border-3 border-white" />
										<img src="/assets/imgs/faqs-3/img-2.png" alt="" className="position-absolute z-1 top-0 start-50 mt-3 rounded-pill border border-3 border-white" />
									</div>
									<p className="fs-5 mb-0">
										Quick answers to questions you may have. Can't <br />
										find what you're looking for? Get in touch with us.
									</p>
									<div className="d-flex align-items-center mt-5">
										<Link href="#" className="btn btn-gradient">
											Get in touch
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
										<Link href="#" className="ms-5 fw-bold">Help Center</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-8 ">
								<div className="accordion">
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse" >
												<h6 className="m-0">What are the key benefits of using <span className="text-primary">Infinia System</span></h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse01" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse" >
												<h6 className="m-0">What features does <span className="text-primary">Infinia</span> offer?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse02" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<h6 className="m-0">How do your services work?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse03" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
												<h6 className="m-0">What is SEO and why do I need it?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse04" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse" >
												<h6 className="m-0">What SEO strategies do you use?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse05" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">
												We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


			</Layout>
		</>
	)
}