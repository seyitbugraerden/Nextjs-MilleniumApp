'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Cta9() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>

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
												<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up me-3 shadow-1">
													<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
														<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
															<path className="stroke-dark" d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</span>
													<span className="fw-bold fs-7 text-900">
														Video Guide
													</span>
												</Link>
												<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
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

		</>
	)
}
