'use client'
import Link from "next/link"
import CountUp from 'react-countup'

export default function Cta1() {
	return (
		<>
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
		</>
	)
}
