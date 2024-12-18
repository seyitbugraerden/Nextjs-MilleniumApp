'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function SectionHowItWork() {

	const [isOpen, setOpen] = useState(false)

	return (
		<>

			<Layout >


				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>How It Work</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">How It Work</p>
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
				{/*How It Work 1*/}
				<section className="howitwork-1 section-padding position-relative fix">
					<div className="container position-relative z-1">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular" data-aos="fade-zoom-in" data-aos-delay={100}>We make <span className="fw-bold">things easy <br /> for</span> your business</h3>
							<p className="fs-5 mb-0" data-aos="fade-zoom-in" data-aos-delay={200}>Meet the talented and passionate team members who drive our <br /> company forward every day.</p>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/howitwork-1/img-bg-line.png" alt="infinia" />
					</div>
					<div className="container position-relative z-1">
						<div className="position-relative">
							<div className="position-lg-absolute top-0 start-0 bottom-0 w-lg-50 d-flex flex-column justify-content-between m-lg-10 pb-lg-0 pb-5 z-1">
								<div className="d-flex feature-item">
									<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
										<div className="icon">
											<img src="/assets/imgs/howitwork-1/icon-1.svg" alt="infinia" />
										</div>
									</div>
									<div data-aos="fade-zoom-in" data-aos-delay={100}>
										<h5 className="text-lg-white text-900">01. Choose A Package</h5>
										<p className="text-lg-white text-900 opacity-75">A business consultant provides expert <br /> advice and guidance to businesses on <br /> various aspects.</p>
									</div>
								</div>
								<div className="d-flex feature-item position-relative z-1">
									<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
										<div className="icon">
											<img src="/assets/imgs/howitwork-1/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<div data-aos="fade-zoom-in" data-aos-delay={200}>
										<h5 className="text-lg-white text-900">02. Make Secure Payment</h5>
										<p className="text-lg-white text-900 opacity-75">A business consultant provides expert <br /> advice and guidance to businesses on <br /> various aspects.</p>
									</div>
								</div>
								<div className="d-flex feature-item">
									<div className="bg-primary-soft-keep icon-flip position-relative icon-shape icon-xxl rounded-3 me-5">
										<div className="icon">
											<img src="/assets/imgs/howitwork-1/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<div data-aos="fade-zoom-in" data-aos-delay={300}>
										<h5 className="text-lg-white text-900">03. Get Instant Access</h5>
										<p className="text-lg-white text-900 opacity-75">A business consultant provides expert <br /> advice and guidance to businesses on <br /> various aspects.</p>
									</div>
								</div>
								<div className="dashed-line-1 d-none d-lg-block" />
								<div className="dashed-line-2 d-none d-lg-block" />
							</div>
							<div className="position-relative d-inline-block">
								<img className="rounded-3 w-100 img-fluid" src="/assets/imgs/howitwork-1/img-bg.png" alt="infinia" />
								<div className="bg-linear-primary rounded-3 position-absolute top-0 start-0 w-75 h-100" />
								<div className="position-absolute bottom-0 end-0 m-md-8 m-4">
									<div className="d-flex align-items-center justify-content-center">
										<Link href="#" onClick={() => setOpen(true)} scroll={false} className="mb-md-0 mb-3 d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 align-self-stretch popup-video hover-up me-3">
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

										<Link href="#" className="btn btn-gradient d-none d-md-block rounded-4">
											Join Free for 30 Days
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
				</section>
				{/*How It Work 2*/}
				<section className="howitwork-2 section-padding position-relative fix">
					<div className="container position-relative z-1">
						<div className="text-center mb-8">
							<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">working process</span>
							</div>
							<h3 className="ds-3 my-3 fw-black">How It Works</h3>
							<p className="fs-5 mb-0">Comprehensive Suite of Cutting-Edge IT Services.</p>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/howitwork-2/img-bg-line.png" alt="infinia" />
					</div>
					<div className="container">
						<div className="row position-relative justify-content-center">
							<div className="col-lg-4 text-center px-md-10">
								<div className="card-service-4 text-center mt-2">
									<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/howitwork-2/icon-1.svg" alt="infinia" />
										</div>
									</div>
									<h5 className="my-3">Choose Services</h5>
									<p className="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
								</div>
							</div>
							<div className="col-lg-4 text-center px-md-10">
								<div className="card-service-4 text-center mt-2">
									<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/howitwork-2/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<h5 className="my-3">Project Analysis</h5>
									<p className="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
								</div>
							</div>
							<div className="col-lg-4 text-center px-md-10">
								<div className="card-service-4 text-center mt-2">
									<div className="bg-white icon-flip position-relative icon-shape icon-xxl rounded-3">
										<div className="icon">
											<img src="/assets/imgs/howitwork-2/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<h5 className="my-3">Got Final Result</h5>
									<p className="mb-6">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
								</div>
							</div>
						</div>
						<div className="navigation-arrow-1 d-none d-lg-block position-absolute top-50">
							<img src="/assets/imgs/howitwork-2/arrow-1.png" alt="infinia" />
						</div>
						<div className="navigation-arrow-2 d-none d-lg-block position-absolute">
							<img src="/assets/imgs/howitwork-2/arrow-2.png" alt="infinia" />
						</div>
						<div className="row">
							<div className="text-center mt-6">
								<p className="text-900 fw-bold"> Need more help? Go to our <Link href="/ #" className="text-primary text-decoration-underline">Support Center</Link></p>
							</div>
						</div>
						<div className="bouncing-blobs-container">
							<div className="bouncing-blobs-glass" />
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