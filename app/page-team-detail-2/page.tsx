'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function PageTeamDetail2() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Daniel Martinez</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Daniel Martinez</p>
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
				{/* Team Detail 2 */}
				<section className="section-team-detail-2 pt-80 pb-120">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<img src="/assets/imgs/team-detail-2/img-1.png" alt="infinia" />
							</div>
							<div className="col-lg-7">
								<div className="ps-lg-5 mt-lg-0 mt-5">
									<h3>Daniel Martinez</h3>
									<p className="fs-5 mb-4">Co-Founder</p>
									<p className="fs-5 text-900 mb-4">"True innovation comes from a deep understanding of our clients' needs and a relentless pursuit of excellence. At Infinia, we are dedicated to transforming challenges into opportunities and creating lasting impact through our work."z</p>
									<img src="/assets/imgs/team-detail-1/name-author.svg" alt="infinia" />
									<p className="mb-4 mt-3">As Co-Founder of Infinia Agency, Daniel Martinez brings a wealth of knowledge, experience, and visionary leadership to the team. With a career spanning over two decades in the industry, <span className="fw-bold">Daniel</span> has been instrumental in driving the strategic direction and growth of Infinia. His passion for innovation and excellence is evident in every project and initiative he undertakes.</p>
									<div className="mt-5">
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
									<h5 className="mb-3 mt-5">Educational Qualifications</h5>
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
							</div>
						</div>
					</div>
				</section>
				{/* cta 9 */}
				<section className="section-cta-9 bg-3 pt-120 pb-lg-250 pb-120">
					<div className="container-fluid position-relative">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 text-start">
									<div className="position-relative d-inline-block">
										<div className="zoom-img rounded-3 mb-lg-0  mb-5">
											<img className="rounded-3" src="/assets/imgs/cta-9/img-1.png" alt="" />
										</div>
										<div className="position-lg-absolute position-relative end-0 play-video">
											<div className="zoom-img rounded-3 d-inline-block position-relative z-1 mb-lg-0 mb-5">
												<img className="rounded-3" src="/assets/imgs/cta-9/img-2.png" alt="" />
												<div className="position-absolute z-2 top-50 start-50 translate-middle">
													<Link href="#" scroll={false} onClick={() => setOpen(true)} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
														<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
															<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
																<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</span>
														<span className="fw-bold fs-7 text-900">
															Video Guide
														</span>
													</Link>
												</div>
											</div>
											<div className="box-gradient position-absolute d-none d-lg-block z-0">
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 px-lg-7">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why choose us</span>
									</div>
									<h5 className="ds-5 mt-3 mb-5">Build a sustainable <br /> future for your company</h5>
									<p className="mb-5">We strive to build long-lasting partnerships with our clients, understanding their unique challenges and opportunities, and providing tailored strategies that lead to measurable success.</p>
									<div className="mb-5">
										<p className="text-900 mb-1">Consulting</p>
										<div className="progress position-relative" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
											<div className="progress-bar" style={{ width: '85%' }} />
											<p className="progress-number" style={{ left: '85%' }}>85%</p>
										</div>
									</div>
									<div className="mb-5">
										<p className="text-900 mb-1">Marketing</p>
										<div className="progress position-relative" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}>
											<div className="progress-bar" style={{ width: '92%' }} />
											<span className="progress-number" style={{ left: '92%' }}>92%</span>
										</div>
									</div>
									<div className="mb-5">
										<p className="text-900 mb-1">Leadership</p>
										<div className="progress position-relative" role="progressbar" aria-label="Example 4px high" style={{ height: 8 }} aria-valuenow={81} aria-valuemin={0} aria-valuemax={100}>
											<div className="progress-bar" style={{ width: '81%' }} />
											<span className="progress-number" style={{ left: '81%' }}>81%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
			</Layout>
		</>
	)
}