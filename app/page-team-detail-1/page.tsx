'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from 'react-countup'

export default function PageTeamDetail1() {

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Esther Howard</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Team Details</p>
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
				{/* Team Detail 1 */}
				<section className="section-team-detail-1 pt-80px pb-120">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="d-flex flex-lg-row flex-column align-items-center p-5 rounded-4 bg-white shadow-2">
									<img className="rounded-3 mb-lg-0 mb-5" src="/assets/imgs/team-detail-1/img-1.png" alt="infinia" />
									<div className="mx-lg-8">
										<h3>Esther Howard</h3>
										<p className="fs-5 mb-4">Co-Founder</p>
										<p className="fs-5 text-900 mb-5">"True innovation comes from a deep understanding of our clients' needs and a relentless pursuit of excellence. At Infinia, we are dedicated to transforming challenges into opportunities and creating lasting impact through our work."z</p>
										<img src="/assets/imgs/team-detail-1/name-author.svg" alt="infinia" />
										<div className="pt-5 mt-4 border-top d-flex flex-md-row flex-column align-items-center">
											<div className="p">
												<div className="d-flex mb-3">
													<img src="/assets/imgs/contact-2/icon-5.svg" alt="infinia" />
													<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">+01 (24) 568 900</Link>
												</div>
												<div className="d-flex mb-3">
													<img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
													<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">sale@infinia.com</Link>
												</div>
												<div className="d-flex">
													<img src="/assets/imgs/contact-2/icon-1.svg" alt="infinia" />
													<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Whatsapp</Link>
												</div>
											</div>
											<div className="ps-md-10 ms-md-10 mt-md-0 mt-5">
												<p className="fw-bold text-900">Social network:</p>
												<div className="d-flex social-icons">
													<Link href="https://www.facebook.com/" className=" text-900 border border-end-0  border-opacity-10 icon-shape icon-md">
														<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
															<path className="fill-dark" d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="black" />
														</svg>
													</Link>
													<Link href="https://twitter.com/" className=" text-900 border border-end-0  border-opacity-10 icon-shape icon-md">
														<i className="bi bi-twitter-x" />
													</Link>
													<Link href="https://www.linkedin.com/" className=" text-900 border  border-opacity-10 icon-shape icon-md">
														<i className="bi bi-linkedin" />
													</Link>
													<Link href="https://www.behance.net/" className=" text-900 border border-start-0  border-opacity-10 icon-shape icon-md">
														<i className="bi bi-behance" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row pt-8">
							<div className="col-lg-7 pe-lg-5 mt-lg-0 mt-8 content-left">
								<p className="mb-4 pb-4 border-bottom">As Co-Founder of Infinia Agency, Daniel Martinez brings a wealth of knowledge, experience, and visionary leadership to the team. With a career spanning over two decades in the industry, <span className="fw-bold">Daniel</span> has been instrumental in driving the strategic direction and growth of Infinia. His passion for innovation and excellence is evident in every project and initiative he undertakes.</p>
								<h5 className="mb-3">Educational Qualifications</h5>
								<p>Daniel's strong educational foundation has equipped his with the strategic acumen and marketing expertise necessary to lead Infinia Agency to success.</p>
								<ul className="ps-3">
									<li>
										<p className="text-900 fw-bold">
											MBA in Business Administration
											<span className="fw-regular">- Harvard Business School</span>
										</p>
									</li>
									<li>
										<p className="text-900 fw-bold">
											Bachelor’s Degree in Marketing
											<span className="fw-regular"> - University of California, Berkeley</span>
										</p>
									</li>
									<li>
										<p className="text-900 fw-bold">
											Certified Digital Marketing Professional (CDMP)
											<span className="fw-regular"> - Digital Marketing Institute</span>
										</p>
									</li>
									<li>
										<p className="text-900 fw-bold">
											Executive Leadership Program
											<span className="fw-regular"> - Stanford Graduate School of Business</span>
										</p>
									</li>
									<li>
										<p className="text-900 fw-bold">
											Advanced Certificate in Strategic Management
											<span className="fw-regular"> - MIT Sloan School of Management</span>
										</p>
									</li>
								</ul>
								<h5 className="pt-4 border-top mb-3 mt-5">Awards</h5>
								<p className="mb-4">Daniel's contributions to the industry have been recognized through numerous awards, underscoring his impact and dedication.</p>
								<ul className="ps-3">
									<li>
										<p className="text-900 fw-bold">Top 50 in Marketing (2022)</p>
									</li>
									<li>
										<p className="text-900 fw-bold">Innovative Leader of the Year (2021)</p>
									</li>
									<li>
										<p className="text-900 fw-bold">Excellence in Business Strategy Award (2020)</p>
									</li>
									<li>
										<p className="text-900 fw-bold">Marketing Excellence Award (2019)</p>
									</li>
									<li>
										<p className="text-900 fw-bold">Businessman of the Year (2018)</p>
									</li>
									<li>
										<p className="text-900 fw-bold">Leadership in Innovation Award (2017)</p>
									</li>
								</ul>
								<h5 className="mt-4 pt-4 border-top mb-3">Latest Projects</h5>
								<p className="fw-bold text-900">Digital Transformation Initiative for Global Retailer: <span className="fw-medium text-600">Led a comprehensive digital overhaul for a major retail chain, enhancing their online presence and optimizing their e-commerce platform.</span></p>
								<p className="fw-bold text-900">Sustainability Strategy Development for a Fortune 500 Company: <span className="fw-medium text-600">Designed and implemented a sustainability strategy that reduced the</span></p>
							</div>
							<div className="col-lg-5 ps-lg-8 content-right mt-lg-0 mt-5">
								<h5 className="mb-5">Skills  Experience</h5>
								<div>
									<div className="d-flex">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/team-detail-1/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Market Analysis and Insights</h6>
											<p>
												Gain a deep understanding of your industry <br />
												and competitors with our comprehensive <br />
												market analysis.
											</p>
										</div>
									</div>
									<div className="d-flex pt-3">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/team-detail-1/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Business Model Innovation</h6>
											<p>
												We assist in redefining your business model <br />
												to align with current market trends and <br />
												future demands
											</p>
										</div>
									</div>
									<div className="d-flex pt-3">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/team-detail-1/icon-3.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Change Management</h6>
											<p>
												Successfully manage organizational change with <br />
												our expert guidance. We help you navigate <br />
												transitions smoothly
											</p>
										</div>
									</div>
									<div className="d-flex pt-3">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/team-detail-1/icon-4.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Marketing Support</h6>
											<p>
												Successfully manage organizational change with <br />
												our expert guidance. We help you navigate <br />
												transitions smoothly
											</p>
										</div>
									</div>
									<div className="d-flex pt-3">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/team-detail-1/icon-5.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>HR Consultant</h6>
											<p>
												Successfully manage organizational change with <br />
												our expert guidance. We help you navigate <br />
												transitions smoothly
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* cta 8 */}
				<section className="section-cta-8 bg-4">
					<div className="container-fluid position-relative section-padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Recent work</span>
									</div>
									<h5 className="ds-5 mt-2">Doing the successful thing, at the right time.</h5>
									<p>We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/service-4/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Research planning</h6>
											<p>Separating your work from your home life can <br /> improve work-life balance.</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/service-4/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Investment</h6>
											<p>A business consultant provides expert advice and <br /> guidance to businesses.</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6 offset-lg-1 text-center mt-lg-0 mt-8">
									<div className="position-relative z-1 d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="infinia" />
										<div className="alltuchtopdown tag-year position-absolute backdrop-filter bg-primary rounded-4 px-4 py-5 text-center z-1">
											<span className="h2 count fw-black my-0 lh-1 text-white text-nowrap"><span className="odometer" /> <CountUp end={25} enableScrollSpy={true} />+</span>
											<p className="text-white text-nowrap mb-0">Years of Experience</p>
										</div>
										<div className="position-absolute tag-dots z-0 pt-5">
											<img className="alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="infinia" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}