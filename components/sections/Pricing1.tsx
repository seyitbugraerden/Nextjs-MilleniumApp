"use client"
import Link from "next/link"
import { useState } from "react"

export default function Pricing1() {

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

			<section className="section-pricing-1 position-relative pb-120 @@classList overflow-hidden">
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

		</>
	)
}
