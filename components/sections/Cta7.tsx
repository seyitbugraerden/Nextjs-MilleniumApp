'use client'
import Link from "next/link"
import { useState } from "react"
import CountUp from 'react-countup'

export default function Cta7() {

	// Tab
	const [isTab, setIsTab] = useState(1)

	const handleTab = (i: any) => {
		setIsTab(i)
	}

	return (
		<>

			<section>
				<div className="container-fluid position-relative section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<h5 className="fw-regular ds-5">High <span className="fw-bold">Performance <br /> Services For </span> All Industries.</h5>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-6 text-lg-start text-center">
									<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-7/img-1.png" alt="infinia" />
										<div className="alltuchtopdown position-absolute top-50 start-50 ms-md-10 mt-md-10 backdrop-filter bg-primary rounded-4 px-6 py-4 text-center z-1">
											<span className="h2 count fw-black mb-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={23} enableScrollSpy={true} />k</span>
											<p className="text-white text-nowrap border-bottom border-opacity-50 border-white pb-3 mb-3">Projects Completed</p>
											<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap">+<span className="odometer" /><CountUp end={98} enableScrollSpy={true} />k</span>
											<p className="text-white text-nowrap mb-0">Happy Clients</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 mt-lg-0 mt-5">
									<nav>
										<div className="nav nav-tabs bg-neutral-100 justify-content-evenly border-bottom-0 mb-5" id="nav-tab" role="tablist">
											<button className={`${isTab == 1 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(1)} role="tab" >Our History
												<span className="underline bg-primary" />
											</button>
											<button className={`${isTab == 2 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(2)} role="tab" >Our Mission
												<span className="underline bg-primary" />
											</button>
											<button className={`${isTab == 3 ? "nav-link active" : "nav-link"} position-relative`} data-bs-toggle="tab" type="button" onClick={() => handleTab(3)} role="tab" >Our Vision
												<span className="underline bg-primary" />
											</button>
										</div>
									</nav>
									<div className="tab-content" id="nav-tabContent">
										<div className={`${isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"}`} role="tabpanel" >
											<p className="text-900 mb-3">Founded in 1998, <span className="fw-black">Infinia</span> started as a small consulting firm with a big vision: to provide unparalleled strategic and operational expertise to businesses of all sizes.</p>
											<div className="row">
												<div className="col-12 col-md-6 mb-3 mb-md-0">
													<p className="text-900">Over the years, we have expanded our services and grown our team of skilled professionals, building a reputation for delivering results-driven solutions. From our humble beginnings to becoming a trusted partner for clients across diverse industries</p>
													<ul className="list-unstyled phase-items mb-0">
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Best For IT Consulting</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Tailored Solutions</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Save Money  Time</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Expert Team</p>
														</li>
													</ul>
												</div>
												<div className="col-12 col-md-6 position-relative text-center">
													<img className="rounded-3" src="/assets/imgs/cta-7/img-2.png" alt="" />
													<Link href="#" className="position-md-absolute d-block translate-middle-md  w-50 start-0 ms-md-0 ms-10 mt-3 mt-md-0 p-3 rounded-3 bg-linear-1">
														<span className="rounded-circle">
															<img className="rounded-circle border border-5 border-primary-light" src=" assets/imgs/cta-2/avatar-1.png" alt="infinia" />
														</span>
														<h6 className="mt-1">Kensei <span className="text-500 fs-6">, CEO</span></h6>
													</Link>
													<div className="position-md-absolute bottom-0 start-50 mt-3 mt-md-0 translate-middle-md-x">
														<img src="/assets/imgs/cta-7/name-admin.svg" alt="" />
													</div>
												</div>
											</div>
										</div>
										<div className={`${isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"}`} role="tabpanel">
											<p className="text-900 mb-4">Deliver Results-Driven Solutions: To provide actionable and impactful strategies that drive measurable success for our clients.</p>
											<div className="row">
												<div className="col-12 col-md-6">
													<p className="text-900">Foster Innovation: To encourage creativity and forward-thinking in all our projects, ensuring our clients stay ahead of the curve.</p>
													<p>Build Lasting Partnerships: To cultivate strong, collaborative relationships with our clients, based on trust, transparency, and mutual respect.</p>
													<p>Enhance Operational Efficiency: To streamline processes and optimize operations, helping businesses achieve their goals more effectively.</p>
												</div>
												<div className="col position-relative text-center">
													<img src="/assets/imgs/cta-7/img-22.png" alt="" />
												</div>
											</div>
										</div>
										<div className={`${isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"}`} role="tabpanel">
											<p className="text-900 mb-4">At Infinia, our vision is to empower businesses to reach their full potential through innovative strategies and expert operational support. </p>
											<div className="row">
												<div className="col-12 col-md-6">
													<p className="text-900">We strive to be the leading consulting firm known for our unwavering commitment to excellence, integrity, and client success. By continuously evolving and adapting to the ever-changing business landscape, we aim to provide solutions that not only meet the needs of today but also anticipate the challenges of tomorrow.</p>
													<ul className="list-unstyled phase-items mb-0">
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Empower Businesses</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Commitment to Excellence</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Continuous Evolution</p>
														</li>
														<li className="d-flex align-items-center mt-3">
															<img src="/assets/imgs/cta-2/check.svg" alt="infinia" />
															<p className="ms-2 mb-0 text-900 fs-6">Client-Centric Solutions</p>
														</li>
													</ul>
												</div>
												<div className="col position-relative text-center mt-3">
													<img className="rounded-3" src="/assets/imgs/cta-7/img-23.png" alt="" />
												</div>
											</div>
										</div>
									</div>
									<div className="border-top pt-6 mt-md-8 mt-6">
										<Link href="#" className="fw-bold btn btn-gradient d-inline-flex align-items-center hover-up">
											<span className="me-10">Get 15 Days Free Trial</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</Link>
										<p className="fs-7 text-500 mt-3">No Card Required. Cancel Anytime.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-0 end-0 z-1 flickering p-10 m-10 d-none d-lg-block">
							<img src="/assets/imgs/cta-7/star-1.svg" alt="infinia" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
