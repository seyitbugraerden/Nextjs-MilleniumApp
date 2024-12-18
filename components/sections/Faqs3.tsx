
"use client"
import Link from "next/link"
import { useState } from "react";

export default function Faqs3() {

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
										<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse" >
											<h6 className="m-0">What are the key benefits of using <span className="text-primary">Infinia System</span></h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse" >
											<h6 className="m-0">What features does <span className="text-primary">Infinia</span> offer?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse" >
											<h6 className="m-0">How do your services work?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
											<h6 className="m-0">What is SEO and why do I need it?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse4" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
									</div>
								</div>
								<div className="mb-3 card p-3 border  bg-white rounded-2 shadow-2">
									<div className="px-0 card-header border-0 bg-gradient-1">
										<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse" >
											<h6 className="m-0">What SEO strategies do you use?</h6>
											<span className="ms-auto arrow me-2">
												<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
													<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
										</a>
									</div>
									<div id="collapse5" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
										<p className="ps-0card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
