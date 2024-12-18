import Link from 'next/link'

export default function Footer2() {
	return (
		<>
			<footer>
				<div className="section-footer">
					<div className="container-fluid bg-white">
						<div className=" container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-10">
									<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
										<img src="assets/imgs/template/favicon.svg" alt="infinia" />
										<span>Infinia</span>
									</Link>
									<p className="text-900 fw-medium mt-3 mb-6 opacity-50">You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.</p>
									<div className="d-flex social-icons">
										<Link href="/https://www.facebook.com/" className=" text-900 border border-end-0  border-opacity-10 icon-shape icon-md">
											<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
												<path className="fill-dark" d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="black" />
											</svg>
										</Link>
										<Link href="/https://twitter.com/" className=" text-900 border border-end-0    border-opacity-10 icon-shape icon-md">
											<i className="bi bi-twitter-x" />
										</Link>
										<Link href="/https://www.linkedin.com/" className=" text-900 border    border-opacity-10 icon-shape icon-md">
											<i className="bi bi-linkedin" />
										</Link>
										<Link href="/https://www.behance.net/" className=" text-900 border border-start-0    border-opacity-10 icon-shape icon-md">
											<i className="bi bi-behance" />
										</Link>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-3 col-6">
											<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">Company</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Mission &amp; Vision</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Our Team</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Careers</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Press &amp; Media</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Advertising</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Testimonials</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-3 col-6">
											<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">Resource</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Knowledge Base</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Documents</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">System Status</Link>
												<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="/#">Security</Link>
											</div>
										</div>
										<div className="col-lg-6 col-md-3">
											<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">instagram posts</h3>
											<div className="d-flex">
												<Link href="/http://instagram.com/username" className="me-2 hover-up">
													<img className="rounded-3" src="assets/imgs/footer-3/img-inst-1.png" alt="infinia" />
												</Link>
												<Link href="/http://instagram.com/username" className="me-2 hover-up">
													<img className="rounded-3" src="assets/imgs/footer-3/img-inst-2.png" alt="infinia" />
												</Link>
												<Link href="/http://instagram.com/username" className="me-2 hover-up">
													<img className="rounded-3" src="assets/imgs/footer-3/img-inst-3.png" alt="infinia" />
												</Link>
											</div>
											<div className="d-flex mt-2">
												<Link href="/http://instagram.com/username" className="me-2 hover-up">
													<img className="rounded-3" src="assets/imgs/footer-3/img-inst-4.png" alt="infinia" />
												</Link>
												<Link href="/http://instagram.com/username" className="me-2 hover-up">
													<img className="rounded-3" src="assets/imgs/footer-3/img-inst-5.png" alt="infinia" />
												</Link>
												<Link href="/http://instagram.com/username" className="me-2 hover-up">
													<img className="rounded-3" src="assets/imgs/footer-3/img-inst-6.png" alt="infinia" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container-fluid bg-primary-soft">
						<div className="container">
							<div className="row">
								<div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10">
									<p className="text-900 opacity-50 mb-0 fs-7">Copyright © 2024 Infinia. All Rights Reserved</p>
									<div className="d-flex">
										<Link href="/#" className="text-900 me-3"> Privacy policy </Link>
										<Link href="/#" className="text-900 me-3"> Cookies </Link>
										<Link href="/#" className="text-900 me-3"> Terms of service </Link>
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
