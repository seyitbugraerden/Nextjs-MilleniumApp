"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import Marquee from "react-fast-marquee"
export default function SectionPricing() {

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

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Pricing</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Pricing</p>
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
				{/*Pricing 2*/}
				<section className="section-pricing-2 position-relative section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 position-relative pe-8">
								<div className="text-start mb-lg-0 mb-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">our plans</span>
									</div>
									<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={0}>Pick Your Premium</h3>
									<p className="fs-6 mb-0" data-aos="fade-zoom-in" data-aos-delay={200}>Upgrade to Spotify Premium and take your music journey to the next level. Enjoy uninterrupted music playback, even in offline mode</p>
									<div className="d-md-flex align-items-center mt-4">
										<ul className="list-unstyled phase-items mb-0">
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">Get 30 day free trial</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">You can cancel anytime</span>
											</li>
										</ul>
										<ul className="list-unstyled phase-items ms-md-5 mb-0">
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">No any hidden fees pay</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">Monthly management</span>
											</li>
										</ul>
									</div>
									<div className="mt-lg-10 pt-5 pe-lg-10 me-lg-10">
										<p className="pt-lg-10">Trusted by secure payment service</p>
										<div className="carouselTicker carouselTicker-left position-relative z-1">
											<ul className="carouselTicker__list">
												<Marquee>
													<li className="carouselTicker__item m-0">
														<img className="rounded-4" src="/assets/imgs/pricing-2/logo-1.png" alt="inexa" />
													</li>
													<li className="carouselTicker__item m-0">
														<img className="rounded-4" src="/assets/imgs/pricing-2/logo-2.png" alt="inexa" />
													</li>
													<li className="carouselTicker__item m-0">
														<img className="rounded-4" src="/assets/imgs/pricing-2/logo-3.png" alt="inexa" />
													</li>
													<li className="carouselTicker__item m-0">
														<img className="rounded-4" src="/assets/imgs/pricing-2/logo-4.png" alt="inexa" />
													</li>
												</Marquee>
											</ul>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 end-0 translate-middle-y mt-3 me-8">
									<img className="flickering" src="/assets/imgs/pricing-2/star.png" alt="infinia" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="row mt-lg-0 mt-5">
									<div className="col-lg-6 col-sm-6 mb-lg-0 mb-4">
										<div className="p-6 bg-white position-relative border rounded-4 z-1">
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
									<div className="col-lg-6 col-sm-6 mb-lg-0 mb-4">
										<div className="p-6 bg-primary-soft position-relative border rounded-4 z-1">
											<h6>Premium</h6>
											<p className="fs-7">Great for large teams</p>
											<div className="d-flex">
												<span className="fs-5 text-600 me-1">$</span>
												<h3 className="text-primary mb-0">49</h3>
												<span className="fs-5 text-600 ms-1 fw-bold align-self-end">/mon</span>
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
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">100 GB Cloud Storage</h6>
												</li>
												<li className="d-flex align-items-center mb-4">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">Individual Email Account</h6>
												</li>
												<li className="d-flex align-items-center">
													<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
													<h6 className="fs-6 mb-0 ms-2">Premium Support</h6>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
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

			</Layout>
		</>
	)
}