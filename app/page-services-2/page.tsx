'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from "react-countup"
export default function PageServices2() {

	return (
		<>

			<Layout >

				{/*Services 2*/}
				<section className="section-team-1 position-relative fix section-padding">
					<div className="container position-relative z-2">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular">
								Let’s Discover Our Service
								<span className=" fw-bold">Our Service <br className="d-none d-lg-inline" />
									Features</span>
								Charter
							</h3>
						</div>
						<div className="row mt-6 position-relative">
							{/* prettier-ignore */}
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Business Analytics</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Investment</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-3.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Tax Advisory</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-4.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Automated reports</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-5.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Funnel optimization</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-2 rounded-4 shadow-1 bg-white position-relative z-1 hover-up mb-4">
									<div className="card-service bg-white p-6 border rounded-4 text-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
											<div className="icon">
												<img src="/assets/imgs/service-2/icon-6.svg" alt="infinia" />
											</div>
										</div>
										<h5 className="my-3">Integrations</h5>
										<p className="mb-6">A business consultant provides expert advice and guidance to businesses on various aspects to improve their performance, efficiency, and profitability.</p>
										<Link href="#" className="text-primary fs-7 fw-bold">
											Learm More
											<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
												<g clipPath="url(#clip0_399_9647)">
													<path d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={18} height={18} fill="white" transform="translate(0.5)" />
													</clipPath>
												</defs>
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<svg className="position-absolute top-50 start-50 translate-middle z-0" xmlns="http://www.w3.org/2000/svg" width={828} height={699} viewBox="0 0 828 699" fill="none">
								<path className="fill-primary-soft" d="M0 130.481C0 110.236 15.1267 93.1822 35.2276 90.7667L783.228 0.880261C807.04 -1.98124 828 16.611 828 40.5945V533.155C828 552.691 813.888 569.369 794.622 572.603L46.6224 698.173C22.2271 702.269 0 683.462 0 658.725V130.481Z" fill="#F5EEFF" />
							</svg>
						</div>
						<div className="text-center mt-6 d-flex flex-wrap justify-content-center align-items-center gap-3">
							<Link href="/page-services-1" className="btn btn-gradient">
								Explore Now
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
							<Link href="/page-contact-1" className="btn btn-outline-secondary hover-up">
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								Contact Us
							</Link>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>
				{/*cta 1 */}
				<section className="section-cta-1 position-relative section-padding fix">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="text-start mb-lg-0 mb-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Download Mobile App</span>
									</div>
									<h3 className="ds-3 my-3">
										Manage all <br />
										from anywhere
									</h3>
									<p className="fs-5 mb-0">⚡Don't miss any contact. Stay connected.</p>
									<ul className="list-unstyled my-6">
										<li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={0}>
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Beautiful and awesome interface</span>
										</li>
										<li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={100}>
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Online collaborative anytime, anywhere.</span>
										</li>
										<li className="d-flex align-items-center mb-2" data-aos="fade-up" data-aos-delay={200}>
											<img src="/assets/imgs/pricing-1/check-primary.svg" alt="infinia" />
											<span className="mb-0 ms-2 fs-5 fw-bold">Real-time updates</span>
										</li>
									</ul>
									<div className="d-flex align-items-center mb-8 gap-2">
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-1.png" alt="infinia" />
										</Link>
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-2.png" alt="infinia" />
										</Link>
										<Link href="#">
											<img src="/assets/imgs/cta-1/app-3.png" alt="infinia" />
										</Link>
									</div>
									<div className="d-flex align-items-center">
										<div className="d-flex">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<div>
											<p className="text-900 mb-0 fs-8 fw-bold">Trusted by 1M+ customers</p>
											<span className="fs-6 fw-bold">4.8/5 <span className="text-secondary fw-medium">(<span className="odometer" /><CountUp end={26} enableScrollSpy={true} />k Reviews)</span></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 text-lg-end text-center">
								<img src="/assets/imgs/cta-1/img-1.png" alt="infinia" />
							</div>
						</div>
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--blue" />
							<div className="bouncing-blob bouncing-blob--primary" />
						</div>
					</div>
				</section>
				{/*Static 1*/}
				<section className="section-static-1 position-relative bg-primary fix z-0 section-padding">
					<div className="container position-relative z-3">
						<div className="row border-bottom border-primary-light pb-8">
							<div className="col-lg-6 me-lg-auto">
								<h5 className="ds-5 text-100 m-0">Numbers Speaking for Themselves</h5>
							</div>
							<div className="col-auto align-self-end mt-lg-0 mt-5">
								<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent text-100">
									Get a Quote
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
					<div className="container mt-8">
						<div className="inner">
							<div className="row justify-content-center">
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="fw-bold lh-sm count ds-2 text-100">+<span className="odometer" /><CountUp end={500} enableScrollSpy={true} /><span>k</span></span>
											<p className="fs-5 text-100">Users Active / Month</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="count lh-sm ds-2 fw-bold text-100">+<span className="odometer" /><CountUp end={38} enableScrollSpy={true} />k</span>
											<p className="fs-5 text-100">New Download / Month</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="count lh-sm ds-2 fw-bold text-100"><span className="odometer" /><CountUp end={150} enableScrollSpy={true} /></span>
											<p className="fs-5 text-100">Operating countries</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="count lh-sm ds-2 fw-bold text-100"><span className="odometer" /><CountUp end={4000} enableScrollSpy={true} /></span>
											<p className="fs-5 text-100">Businesses trust on the world</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="img-decorate position-absolute top-0 start-0">
						<img src="/assets/imgs/static-1/img-decorate.png" alt="infinia" />
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass bg-transparent" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--white" />
						</div>
					</div>
					{/* <div class="img-decorate-2 position-absolute top-100 start-50 translate-middle z-0">
    </div> */}
				</section>
				{/*Testimonial 1*/}
				<section className="section-testimonial-1 pb-120 pt-120 position-relative">
					<div className="container position-relative z-1">
						<div className="row">
							<div className="col-lg-4">
								<div className="pe-8 mt-10">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
									</div>
									<h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>What our clients say</h3>
									<span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={300}>Access top-tier group mentoring plans and exclusive professional benefits for your team. 🔥</span>
									<div className="d-flex flex-wrap align-items-center mt-8">
										<Link href="/page-contact-1" className="btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											Contact Us
										</Link>
										<Link href="#" className="ms-5 ms-md-5 mt-5 mt-md-0 fw-bold" data-aos="fade-zoom-in" data-aos-delay={300}>Help Center
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
												<path d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 mt-8 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={100}>
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
									<Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={200}>
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
									<Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={300}>
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
									<Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3 position-relative card-hover" data-aos="fade-zoom-in" data-aos-delay={400}>
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
									<Link href="#" className="position-absolute top-0 start-0 end-0 bottom-0" />
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/testimonial-1/bg-line.png" alt="infinia" />
					</div>
				</section>
				{/* Contact 2*/}
				<section className="section-contact-2 position-relative section-padding bg-5">
					<div className="container position-relative z-1">
						<div className="text-center">
							<h5 className="ds-5 mt-3 mb-3">
								Thinking about a project? <br className="d-md-block d-none" />
								Get in touch with us.
							</h5>
							<span className="fs-5 fw-medium">Connect with Us Today through the Details Below or Fill <br className="d-md-block d-none" />
								Out the Form for a Prompt Response</span>
						</div>
						<div className="row mt-8">
							<div className="col-lg-10 mx-lg-auto">
								<div className="row">
									<div className="col-lg-6 ps-lg-0 pb-5 pb-lg-0">
										<h4>Leave a message</h4>
										<form action="#">
											<div className="row mt-5">
												<div className="col-md-6">
													<div className="input-group rounded-1 d-flex align-items-center">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Your name *" aria-label="username" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group rounded-1 d-flex align-items-center mt-4 mt-md-0">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="info@" aria-label="email" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group rounded-1 d-flex align-items-center mt-4">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Phone" aria-label="phone" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="input-group rounded-1 d-flex align-items-center mt-4">
														<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
															<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path className="stroke-dark" d="M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V9.75001L12 4.75L4.75 9.75001V17.25C4.75 18.3546 5.64544 19.25 6.75 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M9.75 15.749C9.75 14.6444 10.6455 13.749 11.75 13.749H12.25C13.3546 13.749 14.25 14.6444 14.25 15.749V19.249H9.75V15.749Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</div>
														<input type="text" className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0" name="name" placeholder="Subject" aria-label="subject" />
													</div>
												</div>
												<div className="col-12">
													<div className="input-group rounded-1 d-flex mt-4">
														<div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
															<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																<path className="stroke-dark" d="M5.5 2.14844H3C1.89543 2.14844 1 3.04387 1 4.14844V14.6484C1 15.753 1.89543 16.6484 3 16.6484H13.5C14.6046 16.6484 15.5 15.753 15.5 14.6484V12.1484" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M17.3285 1.20344L16.4448 0.319749C16.0185 -0.106583 15.3248 -0.106583 14.8984 0.319749L7.82915 7.38907C7.76373 7.45449 7.71914 7.53782 7.70096 7.62854L7.2591 9.83772C7.22839 9.99137 7.27647 10.1502 7.38729 10.261C7.47605 10.3498 7.59561 10.3983 7.71864 10.3983C7.74923 10.3983 7.77997 10.3953 7.81053 10.3892L10.0197 9.94732C10.1104 9.92917 10.1938 9.88455 10.2592 9.81913L17.3285 2.74984C17.3285 2.74984 17.3286 2.74984 17.3286 2.74981C17.7549 2.32351 17.7549 1.6298 17.3285 1.20344ZM9.69678 9.05607L8.31606 9.33225L8.59224 7.95153L14.3461 2.19754L15.4507 3.30214L9.69678 9.05607ZM16.6658 2.0871L16.1135 2.6394L15.0089 1.53479L15.5612 0.982524C15.6221 0.921601 15.7212 0.92157 15.7821 0.982493L16.6658 1.86618C16.7267 1.92707 16.7267 2.0262 16.6658 2.0871Z" fill="black" />
															</svg>
														</div>
														<textarea className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10" name="name" placeholder="Describe Your Project in Short" aria-label="With textarea" />
													</div>
												</div>
												<div className="col-12">
													<button type="submit" className="btn btn-primary hover-up mt-4">
														Send Message
														<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
															<path className="stroke-white" d="M21.1059 12.2562H0.5V11.7443H21.1059H22.313L21.4594 10.8907L17.0558 6.48705L17.4177 6.12508L23.2929 12.0002L17.4177 17.8754L17.0558 17.5134L21.4594 13.1098L22.313 12.2562H21.1059Z" fill="black" stroke="white" />
														</svg>
													</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-6">
										<div className="ps-lg-6">
											<h6>Chat with us</h6>
											<p className="text-500">The support team is always available 24/7</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-1.svg" alt="infinia" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Whatsapp</Link>
											</div>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-2.svg" alt="infinia" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Viber</Link>
											</div>
											<div className="d-flex mb-2 mb-5">
												<img src="/assets/imgs/contact-2/icon-3.svg" alt="infinia" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Messager</Link>
											</div>
											<h6>Send us an email</h6>
											<p className="text-500">Our team will respond promptly to your inquiries</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">support@infinia.com</Link>
											</div>
											<div className="d-flex mb-2 mb-5">
												<img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">sale@infinia.com</Link>
											</div>
											<h6>For more inquiry</h6>
											<p className="text-500">Reach out for immediate assistance</p>
											<div className="d-flex mb-2">
												<img src="/assets/imgs/contact-2/icon-5.svg" alt="infinia" />
												<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">+01 (24) 568 900</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}