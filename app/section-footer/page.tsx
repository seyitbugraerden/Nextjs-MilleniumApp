
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SectionFooter() {

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Footer</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Footer</p>
							</div>
						</div>
					</div>
					<img className="position-absolute bottom-0 start-0 end-0 top-0 z-0" src="/assets/imgs/page-header/bg-line.png" alt="infinia" />
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
							<div className="position-absolute top-0 end-0 bouncing-blob--primary" />
						</div>
					</div>
				</section>
				{/* Footer 1 */}
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
				{/* Footer 2 */}
				<footer>
					<div className=" position-relative d-none d-md-flex">
						<div className="col-6 bg-primary py-md-6" />
						<div className="col-6 bg-primary-dark py-md-6" />
						<div className="container position-absolute top-50 start-50 translate-middle">
							<div className="row">
								<div className="col-6 d-lg-flex gap-5">
									<Link href="#" className="d-flex mb-lg-0 mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<p className="text-white mb-0 ms-2">0811 Erdman Prairie, Joaville CA</p>
									</Link>
									<Link href="#" className="d-flex">
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
										<Link href="#" className="text-white ms-2 link-hover-primary-light"> Learn more </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-footer position-relative">
						<div className="container-fluid bgft-1">
							<div className=" container position-relative z-2">
								<div className="row py-90">
									<div className="col-lg-4 pe-10 mb-5 mb-lg-0">
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
											<div className="col-lg-3 col-md-3 col-6 mb-5 mb-lg-0">
												<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3">Company</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Mission  Vision</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Our Team</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Careers</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Press  Media</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Advertising</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Testimonials</Link>
												</div>
											</div>
											<div className="col-lg-3 col-md-3 col-6 mb-5 mb-lg-0">
												<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3">Guides</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Our Journeys</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Solutions</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Customers</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">News  Events</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project management</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Help Center</Link>
												</div>
											</div>
											<div className="col-lg-3 col-md-3 col-6">
												<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3">Services</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project software</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Resource software</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Workflow</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Gantt chart makers</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project dashboards</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Task software</Link>
												</div>
											</div>
											<div className="col-lg-3 col-md-3 col-6">
												<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3">Resource</h3>
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
								<div className="row">
									<div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10">
										<span className="text-white opacity-50">Copyright © 2024 Infinia. All Rights Reserved</span>
										<div className="d-flex">
											<Link href="#" className="link-hover-primary-light text-white me-3"> Privacy policy </Link>
											<Link href="#" className="link-hover-primary-light text-white me-3"> Cookies </Link>
											<Link href="#" className="link-hover-primary-light text-white me-3"> Terms of service </Link>
										</div>
									</div>
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
				{/* Footer 3 */}
				<footer>
					<div className="section-footer">
						<div className="container-fluid bg-white">
							<div className=" container position-relative z-2">
								<div className="row py-90">
									<div className="col-lg-4 pe-10">
										<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
											<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
											<span>Infinia</span>
										</Link>
										<p className="text-900 fw-medium mt-3 mb-6 opacity-50">You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much.</p>
										<div className="d-flex social-icons">
											<Link href="https://www.facebook.com/" className=" text-900 border border-end-0  border-opacity-10 icon-shape icon-md">
												<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
													<path className="fill-dark" d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="black" />
												</svg>
											</Link>
											<Link href="https://twitter.com/" className=" text-900 border border-end-0    border-opacity-10 icon-shape icon-md">
												<i className="bi bi-twitter-x" />
											</Link>
											<Link href="https://www.linkedin.com/" className=" text-900 border    border-opacity-10 icon-shape icon-md">
												<i className="bi bi-linkedin" />
											</Link>
											<Link href="https://www.behance.net/" className=" text-900 border border-start-0    border-opacity-10 icon-shape icon-md">
												<i className="bi bi-behance" />
											</Link>
										</div>
									</div>
									<div className="col-lg-8">
										<div className="row">
											<div className="col-lg-3 col-md-3 col-6">
												<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">Company</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Mission  Vision</Link>
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Our Team</Link>
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Careers</Link>
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Press  Media</Link>
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Advertising</Link>
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Testimonials</Link>
												</div>
											</div>
											<div className="col-lg-3 col-md-3 col-6">
												<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">Resource</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Knowledge Base</Link>
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Documents</Link>
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">System Status</Link>
													<Link className="hover-effect text-900 mb-2 fw-medium fs-6" href="#">Security</Link>
												</div>
											</div>
											<div className="col-lg-6 col-md-3">
												<h3 className="text-900 fs-6 fw-black text-uppercase pb-3 pt-5">instagram posts</h3>
												<div className="d-flex">
													<Link href="/http://instagram.com/username" className="me-2 hover-up">
														<img className="rounded-3" src="/assets/imgs/footer-3/img-inst-1.png" alt="infinia" />
													</Link>
													<Link href="/http://instagram.com/username" className="me-2 hover-up">
														<img className="rounded-3" src="/assets/imgs/footer-3/img-inst-2.png" alt="infinia" />
													</Link>
													<Link href="/http://instagram.com/username" className="me-2 hover-up">
														<img className="rounded-3" src="/assets/imgs/footer-3/img-inst-3.png" alt="infinia" />
													</Link>
												</div>
												<div className="d-flex mt-2">
													<Link href="/http://instagram.com/username" className="me-2 hover-up">
														<img className="rounded-3" src="/assets/imgs/footer-3/img-inst-4.png" alt="infinia" />
													</Link>
													<Link href="/http://instagram.com/username" className="me-2 hover-up">
														<img className="rounded-3" src="/assets/imgs/footer-3/img-inst-5.png" alt="infinia" />
													</Link>
													<Link href="/http://instagram.com/username" className="me-2 hover-up">
														<img className="rounded-3" src="/assets/imgs/footer-3/img-inst-6.png" alt="infinia" />
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
											<Link href="#" className="text-900 me-3"> Privacy policy </Link>
											<Link href="#" className="text-900 me-3"> Cookies </Link>
											<Link href="#" className="text-900 me-3"> Terms of service </Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
				{/* Footer 4 */}
				<footer>
					<div className="section-footer">
						<div className="container-fluid bgft-1">
							<div className=" container position-relative z-2">
								<div className="d-flex py-4 border-bottom border-white border-opacity-10 justify-content-between align-items-center">
									<div>
										<Link href="/"><img src="/assets/imgs/logo/logo-white.svg" alt="infinia" /></Link>
									</div>
									<div>
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
								</div>
								<div className="row py-90">
									<div className="col-lg-8">
										<div className="row">
											<div className="col-lg-3 col-md-4 col-6">
												<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Company</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Mission  Vision</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Our Team</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Careers</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Press  Media</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Advertising</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Testimonials</Link>
												</div>
											</div>
											<div className="col-lg-3 col-md-4 col-6">
												<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Guides</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Our Journeys</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Solutions</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Customers</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">News  Events</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project management</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Help Center</Link>
												</div>
											</div>
											<div className="col-lg-3 col-md-4 col-6">
												<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Services</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project software</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Resource software</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Workflow</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Gantt chart makers</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Project dashboards</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Task software</Link>
												</div>
											</div>
											<div className="col-lg-3 col-md-4 col-6">
												<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0">Resource</h3>
												<div className="d-flex flex-column align-items-start">
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Knowledge Base</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Documents</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">System Status</Link>
													<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Security</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 pt-5 pt-lg-0">
										<p className="text-white fw-black opacity-50 text-uppercase">App  Payment</p>
										<p className="text-white fw-medium mt-3 mb-4 opacity-50">Download our Apps and get
											extra 15% discount on your first order…!</p>
										<div className="d-flex gap-2">
											<Link href="#">
												<img className="mb-2" src="/assets/imgs/footer-4/app-payment-1.png" alt="App Store" />
											</Link>
											<Link href="#">
												<img className="mb-2" src="/assets/imgs/footer-4/app-payment-2.png" alt="Google Play" />
											</Link>
										</div>
										<div className="d-flex gap-2">
											<Link href="#">
												<img className="mb-2" src="/assets/imgs/footer-4/app-payment-3.png" alt="Microsoft" />
											</Link>
											<Link href="#">
												<img className="mb-2" src="/assets/imgs/footer-4/app-payment-4.png" alt="Amazon" />
											</Link>
										</div>
										<div className="col-1" />
									</div>
								</div>
								<div className="row">
									<div className="d-flex flex-md-row flex-column align-items-center justify-content-between bg-transparent py-4 border-top border-opacity-10">
										<span className="text-white opacity-50 mb-3 mb-md-0">Copyright © 2024 Infinia. All Rights Reserved</span>
										<div className="d-flex">
											<Link href="#" className="link-hover-primary-light text-white me-3">
												Privacy policy
											</Link>
											<Link href="#" className="link-hover-primary-light text-white me-3">
												Cookies
											</Link>
											<Link href="#" className="link-hover-primary-light text-white me-3">
												Terms of service
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>

			</Layout>
		</>
	)
}