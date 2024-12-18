import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<footer>
				<div className="section-footer position-relative">
					<div className="container-fluid bgft-1">
						<div className="container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-10" data-aos="fade-zoom-in" data-aos-delay={100}>
									<Link href="/"><img src="/assets/imgs/logo/logo-white.svg" alt="infinia" /></Link>
									<p className="text-white fw-medium mt-3 mb-6 opacity-50">You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.</p>
									<div className="d-flex social-icons">
										<Link href="https://www.facebook.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
												<path d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="white" />
											</svg>
										</Link>
										<Link href="https://twitter.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-twitter-x" />
										</Link>
										<Link href="https://www.linkedin.com/" className=" text-white border border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-linkedin" />
										</Link>
										<Link href="https://www.behance.net/" className=" text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-behance" />
										</Link>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={200}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Company</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Mission  Vision</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Our Team</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Careers</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Press  Media</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Advertising</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Testimonials</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={300}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Guides</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Our Journeys</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Solutions</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Customers</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">News  Events</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project management</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Help Center</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={400}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Services</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project software</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Resource software</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Workflow</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Gantt chart makers</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project dashboards</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Task software</Link>
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={500}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Resource</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Knowledge Base</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Documents</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">System Status</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Security</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row text-center py-4 border-top border-white border-opacity-10">
								<span className="text-white opacity-50" data-aos="fade-zoom-in" data-aos-delay={200}>Copyright © 2024 Infinia. All Rights Reserved</span>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/footer-1/line-bg.png" alt="infinia" />
					</div>
					<div className="position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-left.png" alt="infinia" />
					</div>
					<div className="position-absolute top-0 end-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-right.png" alt="infinia" />
					</div>
				</div>
			</footer>

		</>
	)
}
