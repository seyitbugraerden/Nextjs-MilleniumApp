
import Marquee from "react-fast-marquee";
export default function Pricing2() {
	return (
		<>

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
		</>
	)
}
