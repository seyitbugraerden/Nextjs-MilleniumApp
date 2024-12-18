"use client"
import Link from "next/link"
import { useState } from "react"

export default function Pricing3() {

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
		</>
	)
}
