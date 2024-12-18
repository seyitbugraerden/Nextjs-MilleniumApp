'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function PageWorkProcess() {

	const [isOpen, setOpen] = useState(false)

	// Price Plan
	const [activePlan, setActivePlan] = useState('monthly')

	const handlePlanChange = (planType: any) => {
		setActivePlan(planType)
	}

	const getPrices = () => {
		if (activePlan === 'monthly') {
			return {
				standardPrice: '49',
				standardType: '/ month',
				businessPrice: '69',
				businessType: '/ month',
				enterprisePrice: '99',
				enterpriseType: '/ month',
			}
		} else {
			return {
				standardPrice: '441',
				standardType: '/ year',
				businessPrice: '621',
				businessType: '/ year',
				enterprisePrice: '891',
				enterpriseType: '/ year',
			}
		}
	}

	const prices = getPrices()

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	return (
		<>

			<Layout >

				{/* CTA 14 */}
				<section className="section-cta-14 position-relative section-padding">
					<div className="container position-relative z-2">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">How It Work</span>
							</div>
							<h5 className="ds-5 my-3 fw-regular">What are the <span className="fw-bold">Steps Involved</span> in <br /> Our <span className="fw-bold">Process?</span></h5>
						</div>
						<div className="row mt-8">
							<div className="col-10 mx-auto">
								<div className="position-relative">
									<div className="zoom-img rounded-4 border-5 border-white border position-relative z-2">
										<img className="rounded-3" src="/assets/imgs/cta-14/img-1.png" alt="infinia" />
										<div className="position-absolute top-50 start-50 translate-middle z-2">
											<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
												<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
													<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
														<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
												<span className="fw-bold fs-7 text-900">
													Video Guide
												</span>
											</Link>
										</div>
									</div>
									<div className="position-absolute top-100 start-0 translate-middle z-1">
										<img className="alltuchtopdown" src="/assets/imgs/cta-14/vector.svg" alt="infinia" />
									</div>
									<div className="vector-2 position-absolute z-2">
										<img className="alltuchtopdown" src="/assets/imgs/cta-14/vector-2.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>
				<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />

				{/* Work Process */}
				<div className="work-process-bg bg-3 position-absolute w-100 d-none d-lg-inline-block" />
				<section className="section-work-process">
					<div className="bg-3">
						<div className="container step-1 pt-120 pb-120">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<h3 className="ds-3">01<span className="text-primary">.</span></h3>
									<h5 className="ds-5">Choose Services. <br /> Initial Consultation.</h5>
									<p className="fs-5">⚡Begin by exploring the range of services we offer.</p>
									<ul className="list-unstyled mt-5">
										<li className="d-flex align-items-center mb-2">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
											</svg>
											<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Explore our services. Personalized planning</p>
										</li>
										<li className="d-flex align-items-center mb-2">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
											</svg>
											<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Assess your needs and goals.</p>
										</li>
										<li className="d-flex align-items-center mb-2">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
											</svg>
											<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Select services that align with your objectives.</p>
										</li>
										<li className="d-flex align-items-center mb-2">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
											</svg>
											<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Begin your journey with us by choosing the right services.</p>
										</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<div className="position-relative d-inline-block mt-lg-0 mt-8">
										<div className="position-relative z-1 d-inline-block zoom-img rounded-4 border-5 border-white border">
											<img src="/assets/imgs/other/img-3.png" alt="infinia" />
										</div>
										<div className="square position-absolute rounded-4 bg-linear-1 w-100 h-100 z-0" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container step-2 pt-120 pb-120">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="position-relative d-inline-block mb-lg-0 mb-8">
									<div className="position-relative z-1 d-inline-block zoom-img rounded-4 border-5 border-white border">
										<img src="/assets/imgs/other/img-4.png" alt="infinia" />
									</div>
									<div className="square-2 position-absolute rounded-4 bg-linear-1 w-100 h-100 z-0" />
								</div>
							</div>
							<div className="col-lg-6 ps-md-8">
								<h3 className="ds-3">02<span className="text-primary">.</span></h3>
								<h5 className="ds-5">Research  Strategy</h5>
								<p className="fs-5">We analyze market trends, evaluate your financial situation</p>
								<ul className="list-unstyled mt-5">
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Conduct thorough research on market trends</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Valuate your current financial status and resources</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Develop a customized strategy tailored</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Outline clear steps and milestones</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="container step-1 pt-120 pb-120">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<h3 className="ds-3">03<span className="text-primary">.</span></h3>
								<h5 className="ds-5">Implementation Plan</h5>
								<p className="fs-5">We analyze market trends, evaluate your financial situation</p>
								<ul className="list-unstyled mt-5">
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Create a detailed action plan</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Assign responsibilities and roles for each phase</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Set realistic timelines and benchmarks for progress</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Ensure the plan aligns with your financial strategy</p>
									</li>
								</ul>
							</div>
							<div className="col-lg-6">
								<div className="position-relative d-inline-block mt-lg-0 mt-8">
									<div className="position-relative z-1 d-inline-block zoom-img rounded-4 border-5 border-white border">
										<img src="/assets/imgs/other/img-5.png" alt="infinia" />
									</div>
									<div className="square position-absolute rounded-4 bg-linear-1 w-100 h-100 z-0" />
								</div>
							</div>
						</div>
					</div>
					<div className="container step-2 pt-120 pb-120">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="position-relative d-inline-block mb-lg-0 mb-8">
									<div className="position-relative z-1 d-inline-block zoom-img rounded-4 border-5 border-white border">
										<img src="/assets/imgs/other/img-6.png" alt="infinia" />
									</div>
									<div className="square-2 position-absolute rounded-4 bg-linear-1 w-100 h-100 z-0" />
								</div>
							</div>
							<div className="col-lg-6 ps-md-8">
								<h3 className="ds-3">04<span className="text-primary">.</span></h3>
								<h5 className="ds-5">Final Results</h5>
								<p className="fs-5">We analyze market trends, evaluate your financial situation</p>
								<ul className="list-unstyled mt-5">
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Implement the strategy and monitor progress.</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Receive updates on achieved outcomes.</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Ensure results meet your financial goals.</p>
									</li>
									<li className="d-flex align-items-center mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
											<path fillRule="evenodd" clipRule="evenodd" d="M8.00004 1.00403C11.8654 1.00403 15.0001 4.13873 15.0001 8.00407C15.0001 11.8694 11.8654 15.0041 8.00004 15.0041C4.13471 15.0041 1 11.8694 1 8.00407C1 4.13873 4.13471 1.00403 8.00004 1.00403ZM6.5464 10.2777L4.83261 8.56254C4.54065 8.27039 4.54059 7.79399 4.83261 7.50191C5.1247 7.20988 5.60322 7.21171 5.89319 7.50191L7.1014 8.71106L10.107 5.70545C10.3991 5.41336 10.8756 5.41336 11.1676 5.70545C11.4597 5.99748 11.4593 6.47435 11.1676 6.76603L7.63083 10.3028C7.33916 10.5945 6.86228 10.5949 6.57025 10.3028C6.56205 10.2946 6.55413 10.2862 6.5464 10.2777Z" fill="#6D4DF2" />
										</svg>
										<p className="fs-5 text-900 mb-0 ms-2 fw-bold">Set a path to financial success.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/*cta 3 */}
				<section className="section-cta-3 position-relative py-150 section-padding fix">
					<div className="container">
						<div className="row">
							<div className="col-auto ms-auto">
								<div className="bg-primary rounded-4">
									<div className="p-7">
										<h3 className="text-white">
											Providing the <br />
											Ultimate Experience <br />
											in Financial Services
										</h3>
										<Link href="/page-contact-1" className="d-flex align-items-center mt-8 mb-9">
											<img src="/assets/imgs/cta-3/icon-contact.svg" alt="infinia" />
											<span className="ms-3">
												<span className="text-white mb-0 fs-4">Contact Us</span>
												<span className="text-white fs-4 d-block">+01 (24) 568 900</span>
											</span>
										</Link>
										<Link href="#" className="fw-bold btn text-start bg-white-keep d-flex align-items-center justify-content-between text-primary hover-up w-100">
											<span>Get 15 Days Free Trial</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
												<path className="fill-primary" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Pricing 1*/}
				<section className="section-pricing-1 position-relative pb-120 pt-120 overflow-hidden">
					<div className="container">
						<div className="row pb-9 position-relative z-1">
							<div className="col-lg-auto me-lg-auto">
								<div className="text-start mb-lg-0 mb-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">our plans</span>
									</div>
									<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={200}>Pricing Plans</h3>
									<p className="fs-5 mb-0" data-aos="fade-zoom-in" data-aos-delay={300}>⚡We’ve got a pricing plan that’s perfect for you</p>
								</div>
							</div>
							<div className="col-lg-auto align-self-end">
								<div className="d-flex justify-content-lg-end">
									<ul className="list-unstyled d-flex align-items-center change-price-plan bg-white rounded-pill py-1 shadow-2">
										<li><Link href="#" scroll={false} className={` px-6 py-2 text-900 bg-transparent monthly rounded-pill text-white fs-5 fw-bold z-1 ${activePlan === 'monthly' ? 'active' : ''}`} onClick={() => handlePlanChange('monthly')} data-type="monthly">Monthly</Link></li>
										<li><Link href="#" scroll={false} className={`yearly px-md-6 px-2 py-2 rounded-pill bg-transparent text-900 fs-5 fw-bold ${activePlan === 'yearly' ? 'active' : ''}`} onClick={() => handlePlanChange('yearly')} data-type="yearly">Yearly (Save 25%)</Link></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row backdrop-filter-lg rounded-4 position-relative z-1">
							<div className="col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4">
								<div className="backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 rounded-end-lg-0">
									<h6>Trial Plan</h6>
									<p className="fs-7">Protect for testing</p>
									<h3 className="text-primary mt-3 mb-0">Free</h3>
									<p className="fs-8">30 days trial</p>
									<button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
										Get Started
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
										</svg>
									</button>
									<ul className="list-unstyled mb-0">
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Single Team Member</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Over 1200 UI Blocks</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">10 GB of Cloud Storage</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-secondary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2 text-400">Personal Email Account</h6>
										</li>
										<li className="d-flex align-items-center">
											<img src="/assets/imgs/pricing-1/check-secondary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2 text-400">Priority Support</h6>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4">
								<div className="backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0 rounded-end-lg-0">
									<h6>Standard</h6>
									<p className="fs-7">Great for large teams</p>
									<div className="d-flex">
										<span className="fs-5 text-600 me-1">$</span>
										<h3 className="text-primary mb-0 text-price-standard">{prices.standardPrice}</h3>
										<span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-standard">{prices.standardType}</span>
									</div>
									<p className="fs-8">No credit card required</p>
									<button className="btn btn-gradient w-100 d-flex justify-content-between my-5">
										Get Started
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="fill-white" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="white" />
										</svg>
									</button>
									<ul className="list-unstyled mb-0">
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">05 Team Member</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">All multimedia channels</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">All advanced CRM features</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Up to 15,000 contacts</h6>
										</li>
										<li className="d-flex align-items-center">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">24/7 Support (Email, Chat)</h6>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4">
								<div className="backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 rounded-start-lg-0 rounded-end-lg-0 border-start-lg-0">
									<h6>Business</h6>
									<p className="fs-7">Advanced projects</p>
									<div className="d-flex">
										<span className="fs-5 text-600 me-1">$</span>
										<h3 className="text-primary mb-0 text-price-business">{prices.businessPrice}</h3>
										<span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-business">{prices.businessType}</span>
									</div>
									<p className="fs-8">No credit card required</p>
									<button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
										Get Started
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
										</svg>
									</button>
									<ul className="list-unstyled mb-0">
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">50 Team Member</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Over 1500 UI Blocks</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">100 GB of Cloud Storage</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Personal Email Account</h6>
										</li>
										<li className="d-flex align-items-center">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Priority Support</h6>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4">
								<div className="backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0">
									<h6>Enterprise</h6>
									<p className=" fs-7">For big companies</p>
									<div className="d-flex">
										<span className="fs-5 text-600 me-1">$</span>
										<h3 className="text-primary mb-0 text-price-enterprise">{prices.enterprisePrice}</h3>
										<span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-enterprise">{prices.enterpriseType}</span>
									</div>
									<p className="fs-8">No credit card required</p>
									<button className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
										Get Started
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
										</svg>
									</button>
									<ul className="list-unstyled mb-0">
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Customized features</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Scalability  security</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Account manager</h6>
										</li>
										<li className="d-flex align-items-center mb-4">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">Unlimited chat history</h6>
										</li>
										<li className="d-flex align-items-center">
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<h6 className="fs-6 mb-0 ms-2">50 Integrations</h6>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
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


			</Layout>
		</>
	)
}