"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function PageElements() {

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
							<h3>Elements</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Elements</p>
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
				{/* Coming Soon */}
				<section className="section-comming-soon section-padding">
					<div className="container">
						<h5 className="ds-5 pb-5 border-bottom mb-5">Accordion</h5>
						<div className="row">
							<div className="col-md-6">
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0">Digital product engineering</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Crafting SaaS development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapse2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="accordion">
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<h6 className="m-0">What are the key benefits of using <span className="text-primary">Infinia System</span></h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
										</div>
									</div>
									<div className="mb-3 card p-3 border bg-white rounded-3">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
												<h6 className="m-0">What features does <span className="text-primary">Infinia</span> offer?</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseTwo" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="ps-0 card-body">We start with a comprehensive analysis of your current brand and online presence, followed by a tailored strategy to improve your brand identity, optimize your website for search engines, and create a cohesive branding plan.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<h5 className="ds-5 pb-5 border-bottom mb-5 mt-8">Alerts</h5>
						<div className="row">
							<div className="col-12 col-lg-9">
								<div className="d-flex flex-wrap">
									<div>
										<div className="alert alert-primary d-flex align-items-center justify-content-between" role="alert">
											<div className="alert-content d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<g clipPath="url(#clip0_695_93004)">
														<path d="M8.9817 1.56601C8.88271 1.39358 8.73998 1.25031 8.56791 1.15069C8.39584 1.05106 8.20053 0.998596 8.0017 0.998596C7.80287 0.998596 7.60756 1.05106 7.43549 1.15069C7.26343 1.25031 7.12069 1.39358 7.0217 1.56601L0.164702 13.233C-0.292298 14.011 0.255702 15 1.1447 15H14.8577C15.7467 15 16.2957 14.01 15.8377 13.233L8.9817 1.56601ZM7.9997 5.00001C8.5347 5.00001 8.9537 5.46201 8.8997 5.99501L8.5497 9.50201C8.53794 9.63978 8.4749 9.76813 8.37306 9.86165C8.27121 9.95517 8.13797 10.0071 7.9997 10.0071C7.86143 10.0071 7.72819 9.95517 7.62635 9.86165C7.5245 9.76813 7.46146 9.63978 7.4497 9.50201L7.0997 5.99501C7.08713 5.86925 7.10105 5.74224 7.14055 5.62218C7.18005 5.50212 7.24426 5.39166 7.32905 5.29792C7.41383 5.20419 7.51731 5.12925 7.63282 5.07794C7.74833 5.02663 7.87331 5.00008 7.9997 5.00001ZM8.0017 11C8.26692 11 8.52127 11.1054 8.70881 11.2929C8.89634 11.4804 9.0017 11.7348 9.0017 12C9.0017 12.2652 8.89634 12.5196 8.70881 12.7071C8.52127 12.8947 8.26692 13 8.0017 13C7.73649 13 7.48213 12.8947 7.2946 12.7071C7.10706 12.5196 7.0017 12.2652 7.0017 12C7.0017 11.7348 7.10706 11.4804 7.2946 11.2929C7.48213 11.1054 7.73649 11 8.0017 11Z" fill="#6D4DF2" />
													</g>
													<defs>
														<clipPath>
															<rect width={16} height={16} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<div className="pe-10 ps-3">A simple primary alert—check it out!</div>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 6.75L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 6.75L17.25 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="alert alert-danger d-flex align-items-center justify-content-between" role="alert">
											<div className="alert-content d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<g clipPath="url(#clip0_695_93014)">
														<path d="M8.9817 1.56595C8.88271 1.39352 8.73998 1.25025 8.56791 1.15062C8.39584 1.051 8.20053 0.998535 8.0017 0.998535C7.80287 0.998535 7.60756 1.051 7.43549 1.15062C7.26343 1.25025 7.12069 1.39352 7.0217 1.56595L0.164702 13.233C-0.292298 14.011 0.255702 15 1.1447 15H14.8577C15.7467 15 16.2957 14.01 15.8377 13.233L8.9817 1.56595ZM7.9997 4.99995C8.5347 4.99995 8.9537 5.46195 8.8997 5.99495L8.5497 9.50195C8.53794 9.63972 8.4749 9.76806 8.37306 9.86159C8.27121 9.95511 8.13797 10.007 7.9997 10.007C7.86143 10.007 7.72819 9.95511 7.62635 9.86159C7.5245 9.76806 7.46146 9.63972 7.4497 9.50195L7.0997 5.99495C7.08713 5.86919 7.10105 5.74218 7.14055 5.62212C7.18005 5.50206 7.24426 5.3916 7.32905 5.29786C7.41383 5.20413 7.51731 5.12919 7.63282 5.07788C7.74833 5.02657 7.87331 5.00002 7.9997 4.99995ZM8.0017 11C8.26692 11 8.52127 11.1053 8.70881 11.2928C8.89634 11.4804 9.0017 11.7347 9.0017 12C9.0017 12.2652 8.89634 12.5195 8.70881 12.7071C8.52127 12.8946 8.26692 13 8.0017 13C7.73649 13 7.48213 12.8946 7.2946 12.7071C7.10706 12.5195 7.0017 12.2652 7.0017 12C7.0017 11.7347 7.10706 11.4804 7.2946 11.2928C7.48213 11.1053 7.73649 11 8.0017 11Z" fill="#EC4040" />
													</g>
													<defs>
														<clipPath>
															<rect width={16} height={16} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<div className="pe-10 ps-3">A simple danger alert—check it out!</div>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 6.75L6.75 17.25" stroke="#EC4040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 6.75L17.25 17.25" stroke="#EC4040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="alert alert-success d-flex align-items-center justify-content-between" role="alert">
											<div className="alert-content d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<g clipPath="url(#clip0_695_93023)">
														<path d="M8.9817 1.56595C8.88271 1.39352 8.73998 1.25025 8.56791 1.15062C8.39584 1.051 8.20053 0.998535 8.0017 0.998535C7.80287 0.998535 7.60756 1.051 7.43549 1.15062C7.26343 1.25025 7.12069 1.39352 7.0217 1.56595L0.164702 13.233C-0.292298 14.011 0.255702 15 1.1447 15H14.8577C15.7467 15 16.2957 14.01 15.8377 13.233L8.9817 1.56595ZM7.9997 4.99995C8.5347 4.99995 8.9537 5.46195 8.8997 5.99495L8.5497 9.50195C8.53794 9.63972 8.4749 9.76806 8.37306 9.86159C8.27121 9.95511 8.13797 10.007 7.9997 10.007C7.86143 10.007 7.72819 9.95511 7.62635 9.86159C7.5245 9.76806 7.46146 9.63972 7.4497 9.50195L7.0997 5.99495C7.08713 5.86919 7.10105 5.74218 7.14055 5.62212C7.18005 5.50206 7.24426 5.3916 7.32905 5.29786C7.41383 5.20413 7.51731 5.12919 7.63282 5.07788C7.74833 5.02657 7.87331 5.00002 7.9997 4.99995ZM8.0017 11C8.26692 11 8.52127 11.1053 8.70881 11.2928C8.89634 11.4804 9.0017 11.7347 9.0017 12C9.0017 12.2652 8.89634 12.5195 8.70881 12.7071C8.52127 12.8946 8.26692 13 8.0017 13C7.73649 13 7.48213 12.8946 7.2946 12.7071C7.10706 12.5195 7.0017 12.2652 7.0017 12C7.0017 11.7347 7.10706 11.4804 7.2946 11.2928C7.48213 11.1053 7.73649 11 8.0017 11Z" fill="#115A3D" />
													</g>
													<defs>
														<clipPath>
															<rect width={16} height={16} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<div className="pe-10 ps-3">A simple success alert—check it out!</div>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 6.75L6.75 17.25" stroke="#115A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 6.75L17.25 17.25" stroke="#115A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="alert alert-warning d-flex align-items-center justify-content-between" role="alert">
											<div className="alert-content d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<g clipPath="url(#clip0_695_93033)">
														<path d="M8.9817 1.56595C8.88271 1.39352 8.73998 1.25025 8.56791 1.15062C8.39584 1.051 8.20053 0.998535 8.0017 0.998535C7.80287 0.998535 7.60756 1.051 7.43549 1.15062C7.26343 1.25025 7.12069 1.39352 7.0217 1.56595L0.164702 13.233C-0.292298 14.011 0.255702 15 1.1447 15H14.8577C15.7467 15 16.2957 14.01 15.8377 13.233L8.9817 1.56595ZM7.9997 4.99995C8.5347 4.99995 8.9537 5.46195 8.8997 5.99495L8.5497 9.50195C8.53794 9.63972 8.4749 9.76806 8.37306 9.86159C8.27121 9.95511 8.13797 10.007 7.9997 10.007C7.86143 10.007 7.72819 9.95511 7.62635 9.86159C7.5245 9.76806 7.46146 9.63972 7.4497 9.50195L7.0997 5.99495C7.08713 5.86919 7.10105 5.74218 7.14055 5.62212C7.18005 5.50206 7.24426 5.3916 7.32905 5.29786C7.41383 5.20413 7.51731 5.12919 7.63282 5.07788C7.74833 5.02657 7.87331 5.00002 7.9997 4.99995ZM8.0017 11C8.26692 11 8.52127 11.1053 8.70881 11.2928C8.89634 11.4804 9.0017 11.7347 9.0017 12C9.0017 12.2652 8.89634 12.5195 8.70881 12.7071C8.52127 12.8946 8.26692 13 8.0017 13C7.73649 13 7.48213 12.8946 7.2946 12.7071C7.10706 12.5195 7.0017 12.2652 7.0017 12C7.0017 11.7347 7.10706 11.4804 7.2946 11.2928C7.48213 11.1053 7.73649 11 8.0017 11Z" fill="#F39E0D" />
													</g>
													<defs>
														<clipPath>
															<rect width={16} height={16} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<div className="pe-10 ps-3">A simple warning alert—check it out!</div>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 6.75L6.75 17.25" stroke="#F39E0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 6.75L17.25 17.25" stroke="#F39E0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<div className="ps-3">
										<div className="alert alert-info d-flex align-items-center justify-content-between" role="alert">
											<div className="alert-content d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<g clipPath="url(#clip0_695_93043)">
														<path d="M8.9817 1.56601C8.88271 1.39358 8.73998 1.25031 8.56791 1.15069C8.39584 1.05106 8.20053 0.998596 8.0017 0.998596C7.80287 0.998596 7.60756 1.05106 7.43549 1.15069C7.26343 1.25031 7.12069 1.39358 7.0217 1.56601L0.164702 13.233C-0.292298 14.011 0.255702 15 1.1447 15H14.8577C15.7467 15 16.2957 14.01 15.8377 13.233L8.9817 1.56601ZM7.9997 5.00001C8.5347 5.00001 8.9537 5.46201 8.8997 5.99501L8.5497 9.50201C8.53794 9.63978 8.4749 9.76813 8.37306 9.86165C8.27121 9.95517 8.13797 10.0071 7.9997 10.0071C7.86143 10.0071 7.72819 9.95517 7.62635 9.86165C7.5245 9.76813 7.46146 9.63978 7.4497 9.50201L7.0997 5.99501C7.08713 5.86925 7.10105 5.74224 7.14055 5.62218C7.18005 5.50212 7.24426 5.39166 7.32905 5.29792C7.41383 5.20419 7.51731 5.12925 7.63282 5.07794C7.74833 5.02663 7.87331 5.00008 7.9997 5.00001ZM8.0017 11C8.26692 11 8.52127 11.1054 8.70881 11.2929C8.89634 11.4804 9.0017 11.7348 9.0017 12C9.0017 12.2652 8.89634 12.5196 8.70881 12.7071C8.52127 12.8947 8.26692 13 8.0017 13C7.73649 13 7.48213 12.8947 7.2946 12.7071C7.10706 12.5196 7.0017 12.2652 7.0017 12C7.0017 11.7348 7.10706 11.4804 7.2946 11.2929C7.48213 11.1054 7.73649 11 8.0017 11Z" fill="#5577A7" />
													</g>
													<defs>
														<clipPath>
															<rect width={16} height={16} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<div className="pe-10 ps-3">A simple info alert—check it out!</div>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 6.75L6.75 17.25" stroke="#5577A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 6.75L17.25 17.25" stroke="#5577A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="alert alert-light d-flex align-items-center justify-content-between" role="alert">
											<div className="alert-content d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<g clipPath="url(#clip0_695_93050)">
														<path d="M8.9817 1.56595C8.88271 1.39352 8.73998 1.25025 8.56791 1.15062C8.39584 1.051 8.20053 0.998535 8.0017 0.998535C7.80287 0.998535 7.60756 1.051 7.43549 1.15062C7.26343 1.25025 7.12069 1.39352 7.0217 1.56595L0.164702 13.233C-0.292298 14.011 0.255702 15 1.1447 15H14.8577C15.7467 15 16.2957 14.01 15.8377 13.233L8.9817 1.56595ZM7.9997 4.99995C8.5347 4.99995 8.9537 5.46195 8.8997 5.99495L8.5497 9.50195C8.53794 9.63972 8.4749 9.76806 8.37306 9.86159C8.27121 9.95511 8.13797 10.007 7.9997 10.007C7.86143 10.007 7.72819 9.95511 7.62635 9.86159C7.5245 9.76806 7.46146 9.63972 7.4497 9.50195L7.0997 5.99495C7.08713 5.86919 7.10105 5.74218 7.14055 5.62212C7.18005 5.50206 7.24426 5.3916 7.32905 5.29786C7.41383 5.20413 7.51731 5.12919 7.63282 5.07788C7.74833 5.02657 7.87331 5.00002 7.9997 4.99995ZM8.0017 11C8.26692 11 8.52127 11.1053 8.70881 11.2928C8.89634 11.4804 9.0017 11.7347 9.0017 12C9.0017 12.2652 8.89634 12.5195 8.70881 12.7071C8.52127 12.8946 8.26692 13 8.0017 13C7.73649 13 7.48213 12.8946 7.2946 12.7071C7.10706 12.5195 7.0017 12.2652 7.0017 12C7.0017 11.7347 7.10706 11.4804 7.2946 11.2928C7.48213 11.1053 7.73649 11 8.0017 11Z" fill="#4B5563" />
													</g>
													<defs>
														<clipPath>
															<rect width={16} height={16} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<div className="pe-10 ps-3">A simple light alert—check it out!</div>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 6.75L6.75 17.25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 6.75L17.25 17.25" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="alert alert-dark d-flex align-items-center justify-content-between" role="alert">
											<div className="alert-content d-flex align-items-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<g clipPath="url(#clip0_695_93057)">
														<path d="M8.9817 1.56595C8.88271 1.39352 8.73998 1.25025 8.56791 1.15062C8.39584 1.051 8.20053 0.998535 8.0017 0.998535C7.80287 0.998535 7.60756 1.051 7.43549 1.15062C7.26343 1.25025 7.12069 1.39352 7.0217 1.56595L0.164702 13.233C-0.292298 14.011 0.255702 15 1.1447 15H14.8577C15.7467 15 16.2957 14.01 15.8377 13.233L8.9817 1.56595ZM7.9997 4.99995C8.5347 4.99995 8.9537 5.46195 8.8997 5.99495L8.5497 9.50195C8.53794 9.63972 8.4749 9.76806 8.37306 9.86159C8.27121 9.95511 8.13797 10.007 7.9997 10.007C7.86143 10.007 7.72819 9.95511 7.62635 9.86159C7.5245 9.76806 7.46146 9.63972 7.4497 9.50195L7.0997 5.99495C7.08713 5.86919 7.10105 5.74218 7.14055 5.62212C7.18005 5.50206 7.24426 5.3916 7.32905 5.29786C7.41383 5.20413 7.51731 5.12919 7.63282 5.07788C7.74833 5.02657 7.87331 5.00002 7.9997 4.99995ZM8.0017 11C8.26692 11 8.52127 11.1053 8.70881 11.2928C8.89634 11.4804 9.0017 11.7347 9.0017 12C9.0017 12.2652 8.89634 12.5195 8.70881 12.7071C8.52127 12.8946 8.26692 13 8.0017 13C7.73649 13 7.48213 12.8946 7.2946 12.7071C7.10706 12.5195 7.0017 12.2652 7.0017 12C7.0017 11.7347 7.10706 11.4804 7.2946 11.2928C7.48213 11.1053 7.73649 11 8.0017 11Z" fill="white" />
													</g>
													<defs>
														<clipPath>
															<rect width={16} height={16} fill="white" />
														</clipPath>
													</defs>
												</svg>
												<div className="pe-10 ps-3">A simple dark alert—check it out!</div>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 6.75L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 6.75L17.25 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<h5 className="ds-5 pb-5 border-bottom mb-5 mt-8">Badges</h5>
						<div className="row">
							<div className="col-12 col-lg-5">
								<div className="row">
									<div className="col-12 col-lg-6">
										<span className="badge align-items-center d-inline-flex rounded-pill text-bg-linear-1 mb-3 px-3 py-2">
											<span>These are badges</span>
											<span className="rounded-pill ms-2 fs-9 bg-primary text-white px-2 py-1"> 10 </span>
										</span>
										<br />
										<span className="badge align-items-center d-inline-flex rounded-pill text-bg-success mb-3 px-3 py-2">
											<span>These are badges</span>
											<span className="rounded-pill ms-2 fs-9 tag text-white px-2 py-1"> 10 </span>
										</span>
										<br />
										<span className="badge align-items-center d-inline-flex rounded-pill text-bg-danger mb-3 px-3 py-2">
											<span>These are badges</span>
											<span className="rounded-pill ms-2 fs-9 bg-danger text-white px-2 py-1"> 10 </span>
										</span>
										<br />
										<span className="badge align-items-center d-inline-flex rounded-pill text-bg-warning mb-3 px-3 py-2">
											<span>These are badges</span>
											<span className="rounded-pill ms-2 fs-9 bg-warning text-white px-2 py-1"> 10 </span>
										</span>
										<br />
										<span className="badge align-items-center d-inline-flex rounded-pill text-bg-info mb-3 px-3 py-2">
											<span>These are badges</span>
											<span className="rounded-pill ms-2 fs-9 tag text-white px-2 py-1"> 10 </span>
										</span>
									</div>
									<div className="col-12 col-lg-6">
										<div className="mb-3 align-items-center bg-linear-1 d-inline-flex rounded-pill px-2 py-1">
											<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">New</span>
											<span className="fs-7 fw-medium text-primary mx-2">Free Lifetime Update</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
												<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M14.25 9.5H3.5625" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="mb-3 align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2">
											<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
											<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
										</div>
										<div className="mb-3 border-linear-1 rounded-pill d-inline-block mb-3">
											<div className="text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2">🚀 Free Lifetime Update</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<h5 className="ds-5 pb-5 border-bottom mb-5 mt-8">Breadcrumb</h5>
						<div className="d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-dark" d="M6.75 19.2502H17.25C18.3546 19.2502 19.25 18.3548 19.25 17.2502V9.75025L12 4.75024L4.75 9.75025V17.2502C4.75 18.3548 5.64544 19.2502 6.75 19.2502Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path className="stroke-dark" d="M9.75 15.7493C9.75 14.6447 10.6455 13.7493 11.75 13.7493H12.25C13.3546 13.7493 14.25 14.6447 14.25 15.7493V19.2493H9.75V15.7493Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<p className="text-900 mx-2 mb-0">Home</p>
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-dark" d="M10.75 8.75L14.25 12L10.75 15.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<p className="text-500 ms-2 mb-0">Contact Us</p>
						</div>
						<div className="d-flex align-items-center mt-4">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-dark" d="M6.75 19.2502H17.25C18.3546 19.2502 19.25 18.3548 19.25 17.2502V9.75025L12 4.75024L4.75 9.75025V17.2502C4.75 18.3548 5.64544 19.2502 6.75 19.2502Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path className="stroke-dark" d="M9.75 15.7493C9.75 14.6447 10.6455 13.7493 11.75 13.7493H12.25C13.3546 13.7493 14.25 14.6447 14.25 15.7493V19.2493H9.75V15.7493Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<p className="text-900 mx-2 mb-0">Home</p>
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-dark" d="M10.75 8.75L14.25 12L10.75 15.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<p className="text-900 mx-2 mb-0">Blog</p>
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-dark" d="M10.75 8.75L14.25 12L10.75 15.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<p className="text-500 ms-2 mb-0">The Future of SaaS: Emerging Trends to Watch</p>
						</div>
						<h5 className="ds-5 pb-5 border-bottom mb-8 mt-8">Button</h5>
						<div className="d-flex flex-wrap align-items-center gap-4">
							<div className="btn btn-gradient">
								Call to Action
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<div className="btn btn-gradient">Call to Action</div>
							<div className="btn btn-gradient rounded-pill pe-3">
								<span className="fs-6"> Call to Action </span>
								<svg className="ms-2 rounded-circle bg-primary-light icon-shape icon-md" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
									<path className="stroke-white" d="M9.0625 4.8125L12.4018 8L9.0625 11.1875" stroke="white" strokeWidth="0.910714" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-white" d="M12.2455 8H3.59375" stroke="white" strokeWidth="0.910714" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
						<div className="d-flex flex-wrap align-items-center gap-4 mt-4">
							<div className="btn btn-outline-secondary hover-up">
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								Call to Action
							</div>
							<div className="btn btn-outline-secondary hover-up">
								Explore Now
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
						<div className="d-flex flex-wrap align-items-center gap-4 mt-4">
							<div className="btn btn-dark hover-up">
								View More Testimonials
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-white" d="M17 7L6.75 17.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<div className="d-flex  flex-wrap gap-4">
								<div className="shadow-2 bg-white icon-shape rounded-circle icon-xxl">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M10.25 6.75L4.75 12L10.25 17.25" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-dark" d="M19.25 12L5 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div className="shadow-2 bg-primary icon-shape rounded-circle icon-xxl">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-white" d="M13.75 6.75L19.25 12L13.75 17.25" stroke="#F3F4F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-white" d="M19 12L4.75 12" stroke="#F3F4F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div className="shadow-2 bg-white icon-shape rounded-circle icon-xxl">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M7.64939 4.96873L18.1464 10.2052C19.6182 10.9418 19.6178 13.0388 18.1457 13.7748L7.64869 19.0391C6.31879 19.704 4.75299 18.7388 4.75299 17.2541L4.75299 6.75335C4.75299 5.26832 6.31949 4.30314 7.64939 4.96873Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
						</div>
						<h5 className="ds-5 pb-5 border-bottom mt-8">Pagination</h5>
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
						<h5 className="ds-5 pb-5 border-bottom mb-8 mt-8">Progress</h5>
						<div className="row">
							<div className="col-12 col-md-5">
								<div className="mb-5">
									<p className="text-900 mb-1">Consulting</p>
									<div className="progress position-relative bg-neutral-200" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
										<div className="progress-bar" style={{ width: '85%' }} />
										<p className="progress-number" style={{ left: '85%' }}>85%</p>
									</div>
								</div>
								<div className="mb-5">
									<p className="text-900 mb-1">Marketing</p>
									<div className="progress position-relative bg-neutral-200" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}>
										<div className="progress-bar" style={{ width: '92%' }} />
										<span className="progress-number" style={{ left: '92%' }}>92%</span>
									</div>
								</div>
								<div className="mb-5">
									<p className="text-900 mb-1">Leadership</p>
									<div className="progress position-relative bg-neutral-200" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={81} aria-valuemin={0} aria-valuemax={100}>
										<div className="progress-bar" style={{ width: '81%' }} />
										<span className="progress-number" style={{ left: '81%' }}>81%</span>
									</div>
								</div>
							</div>
						</div>
						<h5 className="ds-5 pb-5 border-bottom mb-8 mt-8">Form</h5>
						<div className="row">
							<div className="col-12 col-lg-3">
								<p className="text-900 mb-1">input</p>
								<div className="input-group d-flex align-items-center">
									<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Your name *" aria-label="username" />
								</div>
								<p className="text-900 mb-2 mt-3">checkbox</p>
								<div className="form-check mb-2">
									<input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked />
									<label className="form-check-label text-900 fw-bold" htmlFor="flexCheckChecked"> Research planning </label>
								</div>
								<div className="form-check mb-2 me-3">
									<input className="form-check-input" type="checkbox" id="flexCheckDefault" />
									<label className="form-check-label text-900 fw-bold" htmlFor="flexCheckDefault"> Finance Advisory </label>
								</div>
								<p className="text-900 mb-2 mt-3">Radios</p>
								<div className="form-check mb-2">
									<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
									<label className="form-check-label text-900 fw-bold" htmlFor="flexRadioDefault1"> Research planning </label>
								</div>
								<div className="form-check mb-2">
									<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
									<label className="form-check-label text-900 fw-bold" htmlFor="flexRadioDefault2"> Finance Advisory </label>
								</div>
							</div>
							<div className="col-12 col-lg-5 mt-5 mt-md-0">
								<p className="text-900 mb-1">select</p>
								<div className="input-group d-flex align-items-center">
									<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>
									<select className="form-select border-start-0" aria-label="Default select example">
										<option selected>Open this select menu</option>
										<option value={1}>One</option>
										<option value={2}>Two</option>
										<option value={3}>Three</option>
									</select>
								</div>
								<p className="text-900 mb-2 mt-3">textarea</p>
								<div className="input-group">
									<div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
											<path className="stroke-dark" d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="fill-dark" d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z" fill="black" />
										</svg>
									</div>
									<textarea className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10" name="name" placeholder="Describe Your Project in Short" aria-label="With textarea" />
								</div>
							</div>
							<div className="col-12 col-lg-4 mt-5 mt-md-0">
								<p className="text-900 mb-1">Range</p>
								<label htmlFor="range-1" className="form-label text-500 mb-0 mt-2">Example range</label>
								<input type="range" min={0} max={100} id="range-1" />
								<div className="value d-none">0</div>
							</div>
						</div>
					</div>
				</section>


			</Layout>
		</>
	)
}