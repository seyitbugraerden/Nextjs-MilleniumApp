'use client'
import Link from "next/link"
import CountUp from 'react-countup'

export default function Features9() {
	return (
		<>
			<section className="section-features-9 position-relative">
				<div className="container-fluid position-relative fix section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Download Mobile App</span>
								</div>
								<h2 className=" mt-3 mb-4 fw-black">Manage all from anywhere</h2>
								<p className="mb-6">⚡Don't miss any contact. Stay connected.</p>
								<ul className="list-unstyled phase-items">
									<li>
										<Link href="#" className="phase-item d-flex align-items-center mb-3">
											<img src="/assets/imgs/features-9/tick.svg" alt="infinia" />
											<p className=" mb-0 ms-2 fs-5 text-900">Beautiful awesome interface</p>
										</Link>
									</li>
									<li>
										<Link href="#" className="phase-item d-flex align-items-center mb-3">
											<img src="/assets/imgs/features-9/tick.svg" alt="infinia" />
											<p className=" mb-0 ms-2 fs-5 text-900">Online collaborative anytime</p>
										</Link>
									</li>
									<li>
										<Link href="#" className="phase-item d-flex align-items-center mb-3">
											<img src="/assets/imgs/features-9/tick.svg" alt="infinia" />
											<p className=" mb-0 ms-2 fs-5 text-900">Real-time updates</p>
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
								<div className="position-relative d-inline-block z-2">
									<img className="rounded-4 border border-3 border-white" src="/assets/imgs/features-9/img-1.png" alt="infinia" />
									<div className="position-absolute bottom-0 start-0 end-0 mb-3 mx-3 backdrop-filter rounded-3 text-start p-3">
										<Link href="/page-contact-1" className="d-flex align-items-center">
											<img src="/assets/imgs/cta-3/icon-contact.svg" alt="infinia" />
											<span className="ms-3">
												<span className="text-white text-uppercase mb-0 fs-7">Contact Us</span>
												<span className="fs-4 d-block">+01 (24) 568 900</span>
											</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-lg-0 mb-8">
								<div className="px-lg-8">
									<div className="d-flex align-items-center border-bottom pb-5 mt-5">
										<span className="h2 count fw-black "><span className="odometer" /><CountUp end={99} enableScrollSpy={true} /></span>
										<span className="fw-medium  fs-4 align-self-start">%</span>
										<p className="ms-3">
											Genuine <br />
											happy customers.
										</p>
									</div>
									<div className="d-flex align-items-center border-bottom pb-5 mt-5">
										<span className="h2 count fw-black "><span className="odometer" /><CountUp end={92} enableScrollSpy={true} /></span>
										<span className="fw-medium  fs-4 align-self-start">k</span>
										<p className="ms-3">
											Happy <br />
											Customers
										</p>
									</div>
									<div className="d-flex align-items-center border-bottom pb-5 mt-5">
										<span className="h2 count fw-black "><span className="odometer" /><CountUp end={25} enableScrollSpy={true} /></span>
										<span className="fw-medium  fs-4 align-self-start">k</span>
										<p className="ms-3">
											Consultation <br />
											Completed
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bouncing-blobs-container rounded-4 fix">
					<div className="bouncing-blobs-glass rounded-4" />
					<div className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--green" />
						<div className="bouncing-blob bouncing-blob--primary" />
						<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
					</div>
				</div>
			</section>
		</>
	)
}
