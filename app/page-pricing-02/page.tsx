"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function PagePricing02() {

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
										<li><Link href="#" scroll={false} className={`px-6 py-2 text-900 bg-transparent monthly rounded-pill text-white fs-5 fw-bold z-1 ${activePlan === 'monthly' ? 'active' : ''}`} onClick={() => handlePlanChange('monthly')} data-type="monthly">Monthly</Link></li>
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
				{/* Compare */}
				<section className="section-compare position-relative @@classList">
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