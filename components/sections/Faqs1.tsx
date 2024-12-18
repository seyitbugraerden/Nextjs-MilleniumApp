
"use client"
import Link from "next/link"
import { useState } from "react";

export default function Faqs1() {

	const [activeItem, setActiveItem] = useState(1);

	const handleActiveItem = (index: any) => {
		setActiveItem(index);
	};

	return (
		<>
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
		</>
	)
}
