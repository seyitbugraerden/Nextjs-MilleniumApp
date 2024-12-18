"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function PagePricing01() {

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

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

	return (
		<>

			<Layout >

				{/*Pricing 3*/}
				<section className="section-pricing-2 position-relative fix section-padding">
					<div className="container position-relative z-2">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Pricing</span>
							</div>
							<h3 className="ds-3 my-3 fw-bold">
								Straightforward
								<span className=" fw-regular">Pricing <br className="d-none d-lg-inline" />
									Custom</span>
								Integrations
							</h3>
							<p className="fs-5 mb-0">
								Meet the talented and passionate team members who drive our <br className="d-none d-lg-inline" />
								company forward every day.
							</p>
							<div className="d-flex justify-content-center mt-5">
								<ul className="list-unstyled d-flex align-items-center change-price-plan bg-white rounded-pill py-1 shadow-2">
									<li><Link href="#" scroll={false} className={`px-6 py-2 text-900 bg-transparent monthly rounded-pill text-white fs-5 fw-bold z-1 ${activePlan === 'monthly' ? 'active' : ''}`} onClick={() => handlePlanChange('monthly')} data-type="monthly">Monthly</Link></li>
									<li><Link href="#" scroll={false} className={`yearly px-md-6 px-2 py-2 rounded-pill bg-transparent text-900 fs-5 fw-bold ${activePlan === 'yearly' ? 'active' : ''}`} onClick={() => handlePlanChange('yearly')} data-type="yearly">Yearly (Save 25%)</Link></li>
								</ul>
							</div>
						</div>
						<div className="row justify-content-center align-items-center">
							<div className="col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4 ">
								<div className="p-6 bg-white position-relative border rounded-4 z-1 rounded-end-lg-0">
									<h6>Trial Plan</h6>
									<p className="fs-7">Protect for testing</p>
									<h3 className="text-primary mt-3 mb-0">Free</h3>
									<p className="fs-8">30 days trial</p>
									<Link href="#" className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
										Get Started
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
										</svg>
									</Link>
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
							<div className="col-lg-4 col-md-12 mb-lg-0 mb-4 px-lg-0">
								<div className="p-8 bg-linear-2 position-relative border rounded-4 z-1 border-start-lg-0">
									<div className="position-absolute top-0 end-0 z-0">
										<img src="/assets/imgs/pricing-3/bg-line-1.png" alt="infinia" />
									</div>
									<div className="position-relative z-1">
										<h6 className="text-white">Standard</h6>
										<p className="fs-7 text-white">Great for large teams</p>
										<div className="d-flex">
											<span className="fs-2 me-1 text-white">$</span>
											<h1 className="m-0 text-price-standard fw-black text-white">{prices.standardPrice}</h1>
											<span className="fs-2 text-white ms-1 fw-bold align-self-end text-type-standard">{prices.standardType}</span>
										</div>
										<p className="text-white opacity-50">No credit card required</p>
										<ul className="list-unstyled mb-0 mt-3">
											<li className="d-flex align-items-center mb-4">
												<img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
												<h6 className="fs-6 mb-0 ms-2 text-white">05 Team Member</h6>
											</li>
											<li className="d-flex align-items-center mb-4">
												<img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
												<h6 className="fs-6 mb-0 ms-2 text-white">All multimedia channels</h6>
											</li>
											<li className="d-flex align-items-center mb-4">
												<img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
												<h6 className="fs-6 mb-0 ms-2 text-white">All advanced CRM features</h6>
											</li>
											<li className="d-flex align-items-center mb-4">
												<img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
												<h6 className="fs-6 mb-0 ms-2 text-white">Up to 15,000 contacts</h6>
											</li>
											<li className="d-flex align-items-center">
												<img src="/assets/imgs/pricing-3/check-white.svg" alt="infinia" />
												<h6 className="fs-6 mb-0 ms-2 text-white">24/7 Support (Email, Chat)</h6>
											</li>
										</ul>
										<Link href="#" className="btn bg-white-keep text-primary hover-up w-100 d-flex justify-content-between mt-5">
											Get Started
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#6d4df2" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4">
								<div className="p-6 bg-white position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0">
									<h6>Enterprise</h6>
									<p className=" fs-7">For big companies</p>
									<div className="d-flex">
										<span className="fs-5 text-600 me-1">$</span>
										<h3 className="text-primary mb-0 text-price-enterprise">{prices.enterprisePrice}</h3>
										<span className="fs-5 text-600 ms-1 fw-bold align-self-end text-type-enterprise">{prices.enterpriseType}</span>
									</div>
									<p className="fs-8">No credit card required</p>
									<Link href="#" className="btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5">
										Get Started
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="fill-dark" d="M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z" fill="#111827" />
										</svg>
									</Link>
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
						<div className="row mt-10">
							<div className="d-flex align-items-center justify-content-lg-cener justify-content-center">
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
					<div className="position-absolute bottom-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/pricing-3/bg-line-2.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute top-50 z-1" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute top-50 z-1" />
				</section>
				{/* Compare */}
				<section className="section-compare position-relative section-padding">
					<div className="container position-relative z-1">
						<div className="text-center mb-10">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Compare Plans</span>
							</div>
							<h3 className="ds-3 my-3 fw-black">Compare Features</h3>
							<p className="fs-5 mb-0">A management platform to help you succeed</p>
						</div>
						<div className="row">
							<div className="table-responsive wow img-custom-anim-top">
								<table className="table table-borderless align-middle table-white">
									<thead>
										<tr>
											<th scope="col">
											</th>
											<th scope="col">
												<span className="h4">Starter</span>
												<p className="text-500 text-nowrap">from $19/month</p>
											</th>
											<th scope="col">
												<span className="h4">Standard</span>
												<p className="text-500">from $49/month</p>
											</th>
											<th scope="col">
												<span className="h4">Enterprise</span>
												<p className="text-500">from $99/month</p>
											</th>
										</tr>
									</thead>
									<tbody className="table-group-divider mt-5">
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Docs/month</span>
												<p className="mb-2 text-500 text-nowrap">Monthly Documentation Capacity</p>
											</th>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Integration</span>
												<p className="mb-2 text-500 text-nowrap">Seamless System Integration</p>
											</th>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Workspaces</span>
												<p className="mb-2 text-500 text-nowrap">Organized Work Environments</p>
											</th>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Collaborators</span>
												<p className="mb-2 text-500 text-nowrap">Team Collaboration Features</p>
											</th>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<g clipPath="url(#clip0_592_34276)">
														<path fillRule="evenodd" clipRule="evenodd" d="M0 10.9999C0 4.92484 4.92484 0 10.9999 0C17.0751 0 21.9999 4.92484 21.9999 10.9999C21.9999 17.0751 17.0751 21.9999 10.9999 21.9999C4.92484 21.9999 0 17.0751 0 10.9999Z" fill="#E5E7EB" />
														<path fillRule="evenodd" clipRule="evenodd" d="M7.16487 14.0646C6.95068 14.2789 6.95071 14.6261 7.16493 14.8403C7.37916 15.0545 7.72645 15.0545 7.94064 14.8403L11.0042 11.7762L14.0679 14.84C14.2821 15.0542 14.6295 15.0542 14.8436 14.84C15.0578 14.6258 15.0578 14.2785 14.8436 14.0643L11.7798 11.0005L14.8434 7.93632C15.0576 7.7221 15.0576 7.37481 14.8433 7.16062C14.6291 6.94643 14.2818 6.94646 14.0676 7.16069L11.0041 10.2248L7.94026 7.16095C7.72606 6.94675 7.37876 6.94675 7.16456 7.16095C6.95035 7.37516 6.95035 7.72245 7.16456 7.93666L10.2285 11.0005L7.16487 14.0646Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={22} height={22} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Real-time collaboration</span>
												<p className="mb-2 text-500 text-nowrap">Instant Collaborative Editing</p>
											</th>
											<td className="text-start">
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<g clipPath="url(#clip0_592_34276)">
														<path fillRule="evenodd" clipRule="evenodd" d="M0 10.9999C0 4.92484 4.92484 0 10.9999 0C17.0751 0 21.9999 4.92484 21.9999 10.9999C21.9999 17.0751 17.0751 21.9999 10.9999 21.9999C4.92484 21.9999 0 17.0751 0 10.9999Z" fill="#E5E7EB" />
														<path fillRule="evenodd" clipRule="evenodd" d="M7.16487 14.0646C6.95068 14.2789 6.95071 14.6261 7.16493 14.8403C7.37916 15.0545 7.72645 15.0545 7.94064 14.8403L11.0042 11.7762L14.0679 14.84C14.2821 15.0542 14.6295 15.0542 14.8436 14.84C15.0578 14.6258 15.0578 14.2785 14.8436 14.0643L11.7798 11.0005L14.8434 7.93632C15.0576 7.7221 15.0576 7.37481 14.8433 7.16062C14.6291 6.94643 14.2818 6.94646 14.0676 7.16069L11.0041 10.2248L7.94026 7.16095C7.72606 6.94675 7.37876 6.94675 7.16456 7.16095C6.95035 7.37516 6.95035 7.72245 7.16456 7.93666L10.2285 11.0005L7.16487 14.0646Z" fill="#111827" />
													</g>
													<defs>
														<clipPath>
															<rect width={22} height={22} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">File uploads</span>
												<p className="mb-2 text-500 text-nowrap">Effortless File Management</p>
											</th>
											<td className="text-start">
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
											<td>
												<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M11.004 1.38049C16.3188 1.38049 20.629 5.69071 20.629 11.0056C20.629 16.3204 16.3188 20.6306 11.004 20.6306C5.68913 20.6306 1.37891 16.3204 1.37891 11.0056C1.37891 5.69071 5.68913 1.38049 11.004 1.38049ZM9.0052 14.1318L6.64875 11.7734C6.24729 11.3717 6.24721 10.7167 6.64875 10.3151C7.05037 9.91354 7.70834 9.91605 8.10704 10.3151L9.76833 11.9777L13.901 7.84495C14.3027 7.44333 14.9578 7.44333 15.3593 7.84495C15.761 8.24649 15.7604 8.90218 15.3593 9.30324L10.4963 14.1663C10.0952 14.5673 9.43954 14.5679 9.038 14.1663C9.02672 14.155 9.01584 14.1435 9.0052 14.1318Z" fill="#6D4DF2" />
												</svg>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Transcripts</span>
												<p className="mb-2 text-500 text-nowrap">Accurate Meeting Transcripts</p>
											</th>
											<td className="text-start">
												<p className="text-500 fw-bold">2h / month</p>
											</td>
											<td className="text-start">
												<p className="text-900 fw-bold">Unlimited</p>
											</td>
											<td>
												<p className="text-900 fw-bold">Unlimited</p>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Image uploads</span>
												<p className="mb-2 text-500 text-nowrap">Simple Image Storage</p>
											</th>
											<td className="text-start">
												<p className="text-500 fw-bold">Up to 5 MB per file</p>
											</td>
											<td className="text-start">
												<p className="text-900 fw-bold">Unlimited</p>
											</td>
											<td>
												<p className="text-900 fw-bold">Unlimited</p>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Email Campaigns</span>
												<p className="mb-2 text-500 text-nowrap">Effective Email Marketing</p>
											</th>
											<td className="text-start">
												<p className="text-500 fw-bold">03 Campaigns</p>
											</td>
											<td className="text-start">
												<p className="text-900 fw-bold">Unlimited</p>
											</td>
											<td className="text-start">
												<p className="text-900 fw-bold">Unlimited</p>
											</td>
										</tr>
										<tr className="border-bottom">
											<th scope="row">
												<span className="h6 mt-2">Custom Branding</span>
												<p className="mb-2 text-500 text-nowrap">Personalized Brand Experience</p>
											</th>
											<td className="text-start">
												<p className="text-500 fw-bold">01 Workspaces</p>
											</td>
											<td className="text-start">
												<p className="text-500 fw-bold">05 Workspaces</p>
											</td>
											<td className="text-start">
												<p className="text-900 fw-bold">Unlimited</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="text-center mt-5">
							<p className="fs-5 text-900 mb-5">We also offer other customized services to fit your business.</p>
							<Link href="#" className="btn btn-gradient">
								Get a Free Quote
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
							<Link href="#" className="ms-md-3 mt-md-0 mt-3 btn btn-outline-secondary hover-up">
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								Our Help Center
							</Link>
						</div>
					</div>
				</section>
				{/*How It Work 2*/}
				<section className="howitwork-2 section-padding position-relative fix">
					<div className="container position-relative z-1">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">working process</span>
							</div>
							<h3 className="ds-3 my-3 fw-black">How It Works</h3>
							<p className="fs-5 mb-0">Comprehensive Suite of Cutting-Edge IT Services.</p>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/howitwork-2/img-bg-line.png" alt="infinia" />
					</div>
					<div className="container">
						<div className="row position-relative justify-content-center">
							<div className="col-lg-4 text-center px-md-10">
								<div className="card-service-4 text-center mt-2">
									<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/howitwork-2/icon-1.svg" alt="infinia" />
										</div>
									</div>
									<h5 className="my-3">Choose Services</h5>
									<p className="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
								</div>
							</div>
							<div className="col-lg-4 text-center px-md-10">
								<div className="card-service-4 text-center mt-2">
									<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/howitwork-2/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<h5 className="my-3">Project Analysis</h5>
									<p className="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
								</div>
							</div>
							<div className="col-lg-4 text-center px-md-10">
								<div className="card-service-4 text-center mt-2">
									<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/howitwork-2/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<h5 className="my-3">Got Final Result</h5>
									<p className="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
								</div>
							</div>
						</div>
						<div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
							<img src="/assets/imgs/howitwork-2/arrow-1.png" alt="infinia" />
						</div>
						<div className="navigation-arrow-2 d-none d-lg-block position-absolute">
							<img src="/assets/imgs/howitwork-2/arrow-2.png" alt="infinia" />
						</div>
						<div className="row">
							<div className="text-center mt-6">
								<p className="text-900 fw-bold"> Need more help? Go to our <Link href="/ #" className="text-primary text-decoration-underline">Support Center</Link></p>
							</div>
						</div>
						<div className="bouncing-blobs-container">
							<div className="bouncing-blobs-glass" />
							<div className="bouncing-blobs">
								<div className="bouncing-blob bouncing-blob--green" />
								<div className="bouncing-blob bouncing-blob--primary" />
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
				{/*Testimonial 3*/}
				<section className="section-testimonial-3 position-relative section-padding fix">
					<div className="container position-relative z-1">
						<div className="row pb-9">
							<div className="col-lg-7 mx-lg-auto">
								<div className="text-center mb-lg-0 mb-5">
									<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
									</div>
									<h5 className="ds-5 my-3 fw-regular">
										What <span className="fw-bold">People Say</span> About <br />
										<span className="fw-bold"> Our Company</span>
									</h5>
									<p className="fs-5 mb-0 text-900">
										Access top-tier group mentoring plans and exclusive professional <br className="d-none d-md-block" />
										benefits for your team. 🔥
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<Swiper
								{...swiperOptions}
								className="swiper slider-1 pt-2 pb-3"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									{/* prettier-ignore */}
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Automated reports</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Funnel optimization</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Integrations</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination" />
								<div className="text-center mt-8 position-relative z-3" />
							</Swiper>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
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