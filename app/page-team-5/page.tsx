
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageTeam5() {

	return (
		<>

			<Layout >


				{/*Team 5*/}
				<section className="section-team-5 section-padding position-relative">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3 fw-regular text-capitalize">Meet <span className="fw-bold">everyone</span> who <br className="d-none d-md-inline" /> made this <span className="fw-bold">possible.</span> </h3>
								<p className="fs-5">Meet the talented and passionate team members who drive our <br className="d-none d-md-inline" /> company forward every day.</p>
							</div>
						</div>
						<div className="row mt-6">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-primary-soft rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-1.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Michael Anderson</Link>
											</h6>
											<p className="mb-0">Co-Founder</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-3 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-2.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Emily Adams</Link>
											</h6>
											<p className="mb-0">Software Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-4 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-3.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">David Clark</Link>
											</h6>
											<p className="mb-0">Product Manager</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-neutral-100 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-4.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Sarah Brown</Link>
											</h6>
											<p className="mb-0">UX/UI Designer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-5 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-5.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Jessica Carter</Link>
											</h6>
											<p className="mb-0">DevOps Engineer</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-4 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-6.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">James Bennett</Link>
											</h6>
											<p className="mb-0">Data Analyst</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-primary-soft rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-7.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">Lauren Graham</Link>
											</h6>
											<p className="mb-0">Sales Executive</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 text-center mb-8">
								<div className="card-team position-relative d-inline-block hover-up">
									<div className="zoom-img bg-3 rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-5/img-portrait-8.png" alt="infinia" />
									</div>
									<div className="d-flex">
										<div>
											<h6 className="pt-3">
												<Link href="#" className="text-900">William Foster</Link>
											</h6>
											<p className="mb-0">Marketing Specialist</p>
										</div>
										<div className="arrow-icon bg-white icon-shape icon-sm rounded-circle border text-end ms-auto mt-auto">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.25 15.25V6.75H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7L6.75 17.25" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-10 mx-auto border-top  mt-3 pt-8">
								<div className="text-center">
									<img src="/assets/imgs/team-5/icon-sm.svg" alt="" />
									<h5 className="my-3">We are seeking skilled individuals.</h5>
									<p className="text-500 mb-8">Infinia is experiencing rapid growth, and we are continually seeking passionate, dynamic, <br className="d-none d-md-inline" /> and talented individuals to join our distributed team across the globe.</p>
									<Link href="#" className="btn btn-gradient">
										Become Our Member
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="#" className="ms-md-3 mt-md-0 mt-3 btn btn-outline-secondary hover-up">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Newsletter 1 */}
				<section className="section-newsletter-1 pb-120 @@classList fix position-relative">
					<div className="container position-relative fix">
						<div className="row align-items-center fix text-center border rounded-4 position-relative z-1">
							<div className="col-lg-6 my-4">
								<div className="row">
									<div className="ms-lg-4">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-1.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-2.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-3.png" alt="infinia" />
									</div>
								</div>
								<div className="row">
									<div>
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-4.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-5.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-6.png" alt="infinia" />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-7.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
									</div>
								</div>
								<div className="row d-none d-lg-flex">
									<div className="me-lg-0">
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-8.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={50} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3" src="/assets/imgs/newsletter-1/img-9.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={100} />
										<img className="rounded-4 border border-3 border-white me-3 mb-3 d-none d-md-inline" src="/assets/imgs/newsletter-1/img-10.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-lg-0 mt-5">
								<div className="px-lg-5 text-lg-start text-center">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Stay Updated</span>
									</div>
									<h4 className="mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Subscribe to our Newsletter!</h4>
									<span className="fs-6 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>Join 52,000+ people on our newsletter</span>
									<div className="input-group mb-3 mt-4 position-relative">
										<input type="text" className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
											<button className="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill" type="button" data-aos="fade-zoom-in" data-aos-delay={100}>Join Now</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-50 start-50 translate-middle z-0">
							<img src="/assets/imgs/newsletter-1/bg-line.png" alt="infinia" />
						</div>
						<div className="bouncing-blobs-container rounded-4 fix">
							<div className="bouncing-blobs-glass rounded-4" />
							<div className="bouncing-blobs">
								<div className="bouncing-blob bouncing-blob--green" />
								<div className="bouncing-blob bouncing-blob--primary" />
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}