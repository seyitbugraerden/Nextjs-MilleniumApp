
"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function PageServicesDetails1() {

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
							<h3>Innovative Business</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Service Details</p>
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
				{/* Other sections */}
				<section className="section-services-details pt-80">
					<div className="container">
						<img className="rounded-3" src="/assets/imgs/services-details/img-1.png" alt="infinia" />
						<div className="row">
							<div className="col-lg-4 col-md-3" />
						</div>
						<div className="row pt-8">
							<div className="col-lg-4 sidebar">
								<Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
									Financial Consultancy
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
									</svg>
								</Link>
								<Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
									Business Consultancy
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
									</svg>
								</Link>
								<Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
									Solicitory Consultancy
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
									</svg>
								</Link>
								<Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
									HR Consultancy
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
									</svg>
								</Link>
								<Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
									Strategy Consultancy
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
									</svg>
								</Link>
								<Link href="#" className="btn btn-outline-secondary-2 w-100 text-start mb-2 fs-5 py-3 d-flex justify-content-between align-items-center">
									Start Ups
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="fill-neutral-100" d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#f3f4f6" />
									</svg>
								</Link>
								<div className="bg-neutral-100 px-5 pb-5 mt-5 rounded-4 border">
									<h6 className="mb-4 mt-3">Service Brochure</h6>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-1.svg" alt="infinia" />
										<p className="text-900 fs-7 mb-0 ms-3">PDF. Download (25 Mb)</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-2.svg" alt="infinia" />
										<p className="text-900 fs-7 mb-0 ms-3">DOC. Download (28 Mb)</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center mb-3">
										<img src="/assets/imgs/services-details/icon-3.svg" alt="infinia" />
										<p className="text-900 fs-7 mb-0 ms-3">Open on Google Driver</p>
									</Link>
									<Link href="#" className="bg-white rounded-3 p-3 border d-flex align-items-center">
										<img src="/assets/imgs/services-details/icon-4.svg" alt="infinia" />
										<p className="text-900 fs-7 mb-0 ms-3">Open on Google Driver</p>
									</Link>
								</div>
								<div className="bg-primary rounded-4 mt-5 position-relative">
									<div className="p-7">
										<h4 className="text-white">
											Providing the <br />
											Ultimate Experience <br />
											in Financial Services
										</h4>
										<Link href="/tel:+12345678900" className="d-flex align-items-center mt-8 mb-9">
											<img src="/assets/imgs/services-details/icon-contact.svg" alt="infinia" />
											<div className="ms-3">
												<span className="text-white mb-0 fs-4">Contact Us</span>
												<h5 className="text-white d-block">+01 (24) 568 900</h5>
											</div>
										</Link>
										<Link href="#" className="fw-bold btn text-start bg-white fs-6 d-flex align-items-center justify-content-between text-primary hover-up w-100">
											<span>Get 15 Days Free Trial</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#6D4DF2" />
											</svg>
										</Link>
									</div>
									<img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-3.png" alt="infinia" />
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-4 border">
									<h6 className="mb-4">Get A Quote</h6>
									<div className="row mt-5">
										<div className="col-12">
											<div className="input-group d-flex align-items-center">
												<div className="icon-input border border-end-0 rounded-1 rounded-end-0 ps-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Your name *" aria-label="username" />
											</div>
										</div>
										<div className="col-12">
											<div className="input-group d-flex align-items-center mt-2">
												<div className="icon-input border border-end-0 rounded-1 rounded-end-0 ps-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Phone *" aria-label="phone" />
											</div>
										</div>
										<div className="col-12">
											<div className="input-group d-flex align-items-center mt-2">
												<div className="icon-input border border-end-0 rounded-1 rounded-end-0 ps-3">
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
														<path className="stroke-dark" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path className="stroke-dark" d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
												<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Email *" aria-label="email" />
											</div>
										</div>
										<div className="col-12">
											<div className="input-group d-flex mt-2">
												<div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
													<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
														<path className="stroke-dark" d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														<path className="stroke-dark" d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z" fill="black" />
													</svg>
												</div>
												<textarea className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10" name="name" placeholder="Your message...." aria-label="With textarea" />
											</div>
										</div>
										<div className="col-12">
											<button type="submit" className="btn btn-primary hover-up mt-4 w-100 d-flex align-items-center justify-content-between">
												Send Message
												<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path className="stroke-white" d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="white" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-8 ps-lg-4 mt-lg-0 mt-8 content">
								<h4 className="mb-3">Innovative Business Services</h4>
								<p className="mb-0">In today's fast-paced and competitive business environment, staying ahead requires more than just traditional methods. At Infinia, we understand the necessity of innovation in driving business growth and success. <span className="text-900 fw-bold">Our innovative business</span> services are designed to help you navigate the complexities of the modern marketplace, leveraging cutting-edge technology and forward-thinking strategies to transform your operations and achieve your goals. We implement intelligent automation tools tailored to your specific needs.</p>
								<div className="d-md-flex align-items-center mt-3 mb-3">
									<ul className="list-unstyled phase-items mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/services-details/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Customer Journey Mapping</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/services-details/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Customer Feedback Systems</span>
										</li>
									</ul>
									<ul className="list-unstyled phase-items ms-md-6 mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/services-details/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Sustainable Business Practices</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/services-details/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Corporate Social Responsibility</span>
										</li>
									</ul>
									<ul className="list-unstyled phase-items ms-md-6 mb-0">
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/services-details/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Ideation and Concept</span>
										</li>
										<li className="d-flex align-items-center mt-3">
											<img src="/assets/imgs/services-details/check.svg" alt="infinia" />
											<span className="ms-2 text-900 fw-medium fs-6">Intellectual Property</span>
										</li>
									</ul>
								</div>
								<h5 className="pt-4 border-top mb-3 mt-5">Digital Transformation</h5>
								<p className="mb-4">At Infinia, we are committed to delivering innovative solutions that drive real results. Our team of experts combines industry knowledge with technological expertise to provide services that are both practical and visionary. We work closely with you to understand your unique challenges and tailor our services to meet your specific needs.</p>
								<div className="row">
									<div className="col-lg-7">
										<div className="d-flex">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
												<div className="icon">
													<img src="/assets/imgs/services-details/icon-5.svg" alt="infinia" />
												</div>
											</div>
											<div className="ps-5">
												<h6>Market Analysis and Insights</h6>
												<p>
													Gain a deep understanding of your industry <br />
													and competitors with our comprehensive <br />
													market analysis.
												</p>
											</div>
										</div>
										<div className="d-flex pt-3">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
												<div className="icon">
													<img src="/assets/imgs/services-details/icon-6.svg" alt="infinia" />
												</div>
											</div>
											<div className="ps-5">
												<h6>Business Model Innovation</h6>
												<p>
													We assist in redefining your business model <br />
													to align with current market trends and <br />
													future demands
												</p>
											</div>
										</div>
										<div className="d-flex pt-3">
											<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
												<div className="icon">
													<img src="/assets/imgs/services-details/icon-7.svg" alt="infinia" />
												</div>
											</div>
											<div className="ps-5">
												<h6>Change Management</h6>
												<p>
													Successfully manage organizational change with <br />
													our expert guidance. We help you navigate <br />
													transitions smoothly
												</p>
											</div>
										</div>
									</div>
									<div className="col-lg-5 mt-lg-0 mt-5">
										<img className="rounded-3" src="/assets/imgs/services-details/img-2.png" alt="infinia" />
									</div>
								</div>
								<h4 className="mt-3 pt-3 border-top mb-3">Sustainability and CSR</h4>
								<p className="mb-3">Embrace the future of business with Infinia's innovative services. Let us help you transform your organization and achieve unprecedented success. Contact us today to learn more about how we can support your journey towards innovation and excellence.</p>
								<p className="fw-bold text-900">Ideation and Concept Development: <span className="fw-medium text-600">Foster a culture of innovation within your organization. We facilitate ideation sessions and help you develop viable concepts that can be turned into profitable ventures.</span></p>
								<p className="fw-bold text-900">RD Support: <span className="fw-medium text-600">Accelerate your research and development efforts with our expert support. We provide the resources and expertise needed to bring your innovative ideas to life.</span></p>
								<p className="fw-bold text-900">Intellectual Property Management: <span className="fw-medium text-600">Protect your innovations with our comprehensive IP management services. From patent filing to trademark registration, we safeguard your intellectual assets.</span></p>
								<p className="fw-bold text-900">Market Analysis and Insights: <span className="fw-medium text-600">Stay ahead of the competition with in-depth market analysis. We provide you with actionable insights that help you identify new opportunities and make informed strategic decisions.</span></p>
								<p className="fw-bold text-900">Business Model Innovation: <span className="fw-medium text-600">Reinvent your business model to meet the demands of today's market. Our experts help you create a flexible, scalable model that drives</span></p>
								<h5 className="pt-3 border-top mb-3 mt-5">Questions about service</h5>
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0">Digital product engineering</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Crafting SaaS development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">AI app development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0">E-commerce development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
												<h6 className="m-0">Web Development Services</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600 mb-0">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="container pt-120">
					<div className="banner bg-primary-light rounded-3 position-relative p-8">
						<div className="d-flex flex-lg-row flex-column align-items-lg-end">
							<h5 className="fw-regular ds-5 text-white me-auto">
								Transform
								<span className="fw-bold">Your <br />
									Business</span>
								with
								<span className="fw-bold">Infinia's <br />
									Innovative</span>
								Services
							</h5>
							<div className="mt-lg-0 mt-8">
								<div className="row mb-3">
									<h6 className="text-white">Trusted by great companies</h6>
								</div>
								<div className="d-flex flex-md-row flex-column align-items-center">
									<div className="me-2 mt-md-0 mt-3">
										<div className="d-flex">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<span className="fs-6 fw-bold text-900">4.8/5 <span className="text-white fw-medium">(26k Reviews)</span></span>
									</div>
									<div className="ms-3 mt-md-0 mt-3">
										<img src="/assets/imgs/services-details/brand-1.svg" alt="infinia" />
									</div>
									<div className="ms-3 mt-md-0 mt-3">
										<img src="/assets/imgs/services-details/brand-2.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
						<img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-1.png" alt="infinia" />
						<img className="position-absolute bottom-0 start-0" src="/assets/imgs/services-details/bg-line-2.png" alt="infinia" />
					</div>
				</div>
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

			</Layout>
		</>
	)
}