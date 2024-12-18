
import Link from "next/link"

export default function Hero1() {
	return (
		<>
			<section className="position-relative overflow-hidden section-padding">
				<div className="container">
					<div className="row content align-items-center">
						<div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
							<div className="pe-2">
								<Link href="#" className="d-flex align-items-center bg-linear-1 d-inline-flex rounded-pill px-2 py-1">
									<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">New</span>
									<span className="fs-7 fw-medium text-primary mx-2">Free Lifetime Update</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<h3 className="ds-3 mt-4 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>Boost your project's speed and efficiency.</h3>
								<p className="pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>Access top-tier group mentoring plans and exclusive professional benefits for your team.</p>
								<Link href="/page-services-1" className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={300}>
									Explore Now
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<Link href="/page-contact-1" className="ms-md-3 mt-3 mt-md-0 btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={500}>
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									Contact Us
								</Link>
								<div className="row mt-8 mb-3">
									<h6 className="text-500 fs-5" data-aos="fade-zoom-in" data-aos-delay={100}>Trusted by great companies</h6>
								</div>
								<div className="d-flex align-items-center">
									<div className="me-2" data-aos="fade-zoom-in" data-aos-delay={200}>
										<div className="d-flex">
											<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
											<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
											<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
										</div>
										<span className="fs-6 fw-bold">4.8/5 <span className="text-secondary fw-medium">(26k Reviews)</span></span>
									</div>
									<div className="ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
										<img src="/assets/imgs/hero-1/brand-1.svg" alt="infinia" />
									</div>
									<div className="ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
										<img src="/assets/imgs/hero-1/brand-2.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 position-relative justify-content-center">
							<img className="hero-img" src="/assets/imgs/hero-1/background.png" alt="infinia" />
							<div className="shape-1 position-absolute">
								<img className="rightToLeft" src="/assets/imgs/hero-1/shape-1.png" alt="infinia" data-aos="zoom-in" data-aos-delay={500} />
							</div>
							<div className="shape-2 position-absolute d-none d-md-block">
								<img src="/assets/imgs/hero-1/shape-2.png" alt="infinia" data-aos="zoom-in" data-aos-delay={200} />
							</div>
							<div className="shape-3 position-absolute d-none d-md-block">
								<img src="/assets/imgs/hero-1/shape-3.png" alt="infinia" data-aos="zoom-in" data-aos-delay={300} />
							</div>
							<div className="alltuchtopdown card-hero backdrop-filter rounded-3 text-center d-inline-block p-3 position-absolute">
								<img className="rounded-3" src="/assets/imgs/hero-1/shape-4.png" alt="infinia" />
								<h6 className="mt-3">Book A Call</h6>
								<p className="fs-7 text-700">
									Customer activity can be easily <br />
									tracked with one click
								</p>
								<Link href="#" className="shadow-sm d-flex align-items-center bg-white d-inline-flex rounded-pill px-2 py-1 mb-3">
									<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
									<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
									<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
										<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
