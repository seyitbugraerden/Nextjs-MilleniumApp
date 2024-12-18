import Link from 'next/link'

export default function Footer4() {
	return (
		<>
			<footer>
				<div className=" position-relative d-none d-md-flex">
					<div className="col-6 bg-primary py-md-6" />
					<div className="col-6 bg-primary-dark py-md-6" />
					<div className="container position-absolute top-50 start-50 translate-middle">
						<div className="row">
							<div className="col-6 d-lg-flex gap-5">
								<Link href="/#" className="d-flex mb-lg-0 mb-2">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<p className="text-white mb-0 ms-2">0811 Erdman Prairie, Joaville CA</p>
								</Link>
								<Link href="/#" className="d-flex">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<p className="text-white mb-0 ms-2">+01 (24) 568 900</p>
								</Link>
							</div>
							<div className="col-6">
								<div className="d-flex ms-md-5">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M13 16H12V12H11M12 8H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<p className="text-white mb-0 ms-2">Our website uses cookies to improve your experience.</p>
									<Link href="/#" className="text-white ms-2 link-hover-primary-light"> Learn more </Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-footer">
					<div className="container-fluid bg-6">
						<div className="container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-10">
									<Link href="/"><img src="assets/imgs/logo/logo-white.svg" alt="infinia" /></Link>
									<p className="text-white fw-medium mt-3 mb-6 opacity-50">You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.</p>
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
								<div className="col-lg-8">
									<div className="row">
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
										<div className="col-lg-6 pt-5 pt-lg-0">
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
								</div>
							</div>
							<div className="row text-center py-4 border-top border-white border-opacity-10">
								<span className="text-white opacity-50">Copyright © 2024 Infinia. All Rights Reserved</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
