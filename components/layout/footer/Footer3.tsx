import Link from 'next/link'

export default function Footer3() {
	return (
		<>
			<footer>
				<div className="section-footer">
					<div className="container-fluid bgft-1">
						<div className=" container position-relative z-2">
							<div className="d-flex py-4 border-bottom border-white border-opacity-10 justify-content-between align-items-center">
								<div>
									<Link href="/"><img src="assets/imgs/logo/logo-white.svg" alt="infinia" /></Link>
								</div>
								<div>
									<div className="d-flex social-icons">
										<Link href="/https://www.facebook.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
												<path d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="white" />
											</svg>
										</Link>
										<Link href="/https://twitter.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-twitter-x" />
										</Link>
										<Link href="/https://www.linkedin.com/" className=" text-white border border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-linkedin" />
										</Link>
										<Link href="/https://www.behance.net/" className=" text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-behance" />
										</Link>
									</div>
								</div>
							</div>
							<div className="row py-90">
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-4 col-6">
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Company</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Mission &amp; Vision</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Our Team</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Careers</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Press &amp; Media</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Advertising</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Testimonials</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6">
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Guides</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Our Journeys</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Solutions</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Customers</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">News &amp; Events</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Project management</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Help Center</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6">
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Services</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Project software</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Resource software</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Workflow</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Gantt chart makers</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Project dashboards</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Task software</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6">
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Resource</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Knowledge Base</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Documents</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">System Status</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="/#">Security</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 pt-5 pt-lg-0">
									<p className="text-white fw-black opacity-50 text-uppercase">App &amp; Payment</p>
									<p className="text-white fw-medium mt-3 mb-4 opacity-50">Download our Apps and get
										extra 15% discount on your first order…!</p>
									<div className="d-flex gap-2">
										<Link href="/#">
											<img className="mb-2" src="assets/imgs/footer-4/app-payment-1.png" alt="App Store" />
										</Link>
										<Link href="/#">
											<img className="mb-2" src="assets/imgs/footer-4/app-payment-2.png" alt="Google Play" />
										</Link>
									</div>
									<div className="d-flex gap-2">
										<Link href="/#">
											<img className="mb-2" src="assets/imgs/footer-4/app-payment-3.png" alt="Microsoft" />
										</Link>
										<Link href="/#">
											<img className="mb-2" src="assets/imgs/footer-4/app-payment-4.png" alt="Amazon" />
										</Link>
									</div>
									<div className="col-1" />
								</div>
							</div>
							<div className="row">
								<div className="d-flex flex-md-row flex-column align-items-center justify-content-between bg-transparent py-4 border-top border-opacity-10">
									<span className="text-white opacity-50 mb-3 mb-md-0">Copyright © 2024 Infinia. All Rights Reserved</span>
									<div className="d-flex">
										<Link href="/#" className="link-hover-primary-light text-white me-3">
											Privacy policy
										</Link>
										<Link href="/#" className="link-hover-primary-light text-white me-3">
											Cookies
										</Link>
										<Link href="/#" className="link-hover-primary-light text-white me-3">
											Terms of service
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
