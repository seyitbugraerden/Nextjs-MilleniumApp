"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import CountUp from 'react-countup'
import ModalVideo from 'react-modal-video'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SectionFeatures() {

	const swiperOptions = {
		slidesPerView: 3,
		spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	}

	const [isOpen, setOpen] = useState(false)

	// Accordion
	const [activeItem, setActiveItem] = useState(1)

	const handleActiveItem = (index: any) => {
		setActiveItem(index)
	}

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Features</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Features</p>
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
				{/*Features 1*/}
				<section className="features-1 section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="d-flex align-items-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
								</div>
								<h2 className="fw-medium mt-4 lh-sm">Together, we are creating a
									<span className="fw-black">Bright Future.</span>
									<span className="text-primary fst-italic" data-aos="fade-zoom-in" data-aos-delay={400}>Join us.</span>
								</h2>
							</div>
							<div className="col-lg-8">
								<div className="d-flex flex-md-row flex-column align-items-center position-relative ps-lg-8 pt-lg-0 pt-10">
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={100}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-1.png" alt="infinia" />
									</div>
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={200}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-2.png" alt="infinia" />
									</div>
									<div className="pe-md-3 pb-3 pb-md-0 position-relative z-1" data-aos="fade-zoom-in" data-aos-delay={300}>
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-1/img-3.png" alt="infinia" />
										<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter px-3 py-2 popup-video hover-up position-absolute bottom-0 mb-4 start-50 translate-middle-x">
											<span className="backdrop-filter me-2 icon-shape icon-md rounded-circle">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
													<path d="M5.0978 3.31244L12.0958 6.80342C13.077 7.29449 13.0767 8.69249 12.0954 9.18316L5.09734 12.6927C4.21074 13.136 3.16687 12.4925 3.16687 11.5027L3.16687 4.50219C3.16687 3.51217 4.2112 2.86872 5.0978 3.31244Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</span>
											<span className="fw-bold fs-7 text-900">
												How It Work ?
											</span>
										</Link>
										<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />
									</div>
									<img className="position-absolute top-50 start-0 translate-middle-y z-0" src="/assets/imgs/features-1/bg-ellipse.png" alt="infinia" />
									<img className="position-absolute z-2 star-lg" src="/assets/imgs/features-1/star-lg.png" alt="infinia" />
									<img className="position-absolute z-2 star-md" src="/assets/imgs/features-1/star-md.png" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row mt-10">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={50}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-1.svg" alt="infinia" />
										</div>
									</div>
									<h6>Work organization</h6>
									<p>A business consultant provides expert advice and guidance to businesses on various aspects.</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<h6>Strategy Development</h6>
									<p>Business consultants play a crucial role by offering expert advice and guidance to companies</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<h6>Data analytics</h6>
									<p>Consultants provide invaluable expertise to businesses, assisting them with strategic advice</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="feature-item mb-5 mb-lg-0">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-4.svg" alt="infinia" />
										</div>
									</div>
									<h6>Business Intelligence </h6>
									<p>Through their deep understanding of industry trends and best practices, consultants empower organizations</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 2*/}
				<section>
					<div className="container-fluid position-relative bg-primary-light section-padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
									<img src="/assets/imgs/features-2/icon-1.svg" alt="infinia" className="hover-up" />
									<h2 className="text-white mt-3 mb-4 fw-medium hover-up">Scalable Business for <span className="fw-bold">Startups</span>.</h2>
									<ul className="list-unstyled phase-items">
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
													<path d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z" fill="white" />
													<path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
												</svg>
												<p className="text-white mb-0 ms-3">Success Accelerators</p>
											</Link>
										</li>
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
													<path d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z" fill="white" />
													<path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
												</svg>
												<p className="text-white mb-0 ms-3">Started politician Club</p>
											</Link>
										</li>
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
													<path d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z" fill="white" />
													<path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
												</svg>
												<p className="text-white mb-0 ms-3">Success Accelerators</p>
											</Link>
										</li>
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<svg xmlns="http://www.w3.org/2000/svg" width={23} height={24} viewBox="0 0 23 24" fill="none">
													<path d="M22.5 12C22.5 12.96 21.3206 13.7512 21.0844 14.6362C20.8406 15.5512 21.4575 16.8263 20.9944 17.6269C20.5238 18.4406 19.1081 18.5381 18.4481 19.1981C17.7881 19.8581 17.6906 21.2738 16.8769 21.7444C16.0763 22.2075 14.8012 21.5906 13.8862 21.8344C13.0012 22.0706 12.21 23.25 11.25 23.25C10.29 23.25 9.49875 22.0706 8.61375 21.8344C7.69875 21.5906 6.42375 22.2075 5.62313 21.7444C4.80938 21.2738 4.71187 19.8581 4.05188 19.1981C3.39188 18.5381 1.97625 18.4406 1.50563 17.6269C1.0425 16.8263 1.65938 15.5512 1.41563 14.6362C1.17938 13.7512 0 12.96 0 12C0 11.04 1.17938 10.2487 1.41563 9.36375C1.65938 8.44875 1.0425 7.17375 1.50563 6.37313C1.97625 5.55938 3.39188 5.46187 4.05188 4.80188C4.71187 4.14188 4.80938 2.72625 5.62313 2.25563C6.42375 1.7925 7.69875 2.40938 8.61375 2.16563C9.49875 1.92938 10.29 0.75 11.25 0.75C12.21 0.75 13.0012 1.92938 13.8862 2.16563C14.8012 2.40938 16.0763 1.7925 16.8769 2.25563C17.6906 2.72625 17.7881 4.14188 18.4481 4.80188C19.1081 5.46187 20.5238 5.55938 20.9944 6.37313C21.4575 7.17375 20.8406 8.44875 21.0844 9.36375C21.3206 10.2487 22.5 11.04 22.5 12Z" fill="white" />
													<path d="M14.5013 8.64754L10.2188 12.93L7.99875 10.7119C7.51688 10.23 6.735 10.23 6.25313 10.7119C5.77125 11.1938 5.77125 11.9757 6.25313 12.4575L9.36751 15.5719C9.83626 16.0407 10.5975 16.0407 11.0663 15.5719L16.245 10.3932C16.7269 9.91129 16.7269 9.12941 16.245 8.64754C15.7631 8.16566 14.9831 8.16566 14.5013 8.64754Z" fill="#A38CFF" />
												</svg>
												<p className="text-white mb-0 ms-3">Transformational Strategy</p>
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
									<div className="position-relative d-inline-block z-2  hover-up">
										<img className="rounded-3 border border-3 border-white" src="/assets/imgs/features-2/img-1.png" alt="infinia" />
										<div className="position-absolute bottom-0 start-0 end-0 mb-3 mx-3 backdrop-filter rounded-3 text-start p-3">
											<Link href="/ #" className="d-flex align-items-center bg-white-keep d-inline-flex rounded-pill px-2 py-1">
												<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
												<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
											</Link>
											<h6 className="mt-3">
												Transform Your Business <br />
												Into Profession
											</h6>
											<p className="fs-7 text-700">Achieve Your a of Business</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 mb-lg-0 mb-8">
									<div className="px-lg-8">
										<img src="/assets/imgs/features-2/icon-2.svg" alt="infinia" className="hover-up" />
										<div data-aos="fade-zoom-in" data-aos-delay={100}>
											<h5 className="text-white mt-3 mb-3">Efficiency Experts</h5>
											<p className="text-white border-bottom pb-3">A business consultant provides expert advice and guidance to businesses on various aspects.</p>
										</div>
										<div data-aos="fade-zoom-in" data-aos-delay={4200}>
											<h5 className="text-white mt-8 mb-3">Strategic Solutions</h5>
											<p className="text-white">Discover why hundreds of millions people use Infinia to chat and call every day.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute bg-rotate z-0">
							<img className="rotate-center" src="/assets/imgs/features-2/bg-img-favicon.png" alt="infinia" />
						</div>
						<div className="position-absolute top-0 end-0 z-1 p-8">
							<div className="bloom" />
						</div>
					</div>
				</section>
				{/*Features 3*/}
				<section>
					<div className="container-fluid position-relative bg-neutral-100 section-padding bg-neutral-100">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6 text-lg-end text-center">
									<div className="position-relative d-inline-block mb-lg-0 mb-8">
										<img className="rounded-4" src="/assets/imgs/features-3/img-1.png" alt="infinia" data-aos="fade-zoom-in" data-aos-delay={200} />
										<div className="position-absolute bottom-0 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-3 p-md-4 p-3 text-center">
											<h6>Rate For Us</h6>
											<div className="d-flex align-items-center justify-content-center py-4">
												<img src="/assets/imgs/features-3/avatar-1.png" alt="infinia" />
												<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="infinia" />
												<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="infinia" />
											</div>
											<div className="d-flex align-items-center justify-content-center">
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
													<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#F28833" />
												</svg>
											</div>
											<p className="pt-2">
												Loved by over 4k <br />
												happy clients
											</p>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="ps-lg-5">
										<h6 data-aos="fade-zoom-in" data-aos-delay={100}>Company's vision</h6>
										<h3 className="ds-3 mt-2 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>Powerful agency for corporate business.</h3>
										<p className="mb-5" data-aos="fade-zoom-in" data-aos-delay={300}>Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
										<div className="d-flex align-items-center pb-7 border-bottom">
											<Link href="#" className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={0}>
												Get Free Quote
												<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>
											<Link href="#" className="ms-5 text-decoration-underline fw-bold" data-aos="fade-zoom-in" data-aos-delay={300}>How We Work</Link>
										</div>
										<div className="row">
											<div className="col-12 col-md-6 d-flex align-items-center justify-content-center border-end mt-5">
												<h2 className="odometer">
													<CountUp end={99} enableScrollSpy={true} />
												</h2>
												<span className="fs-4 fw-medium align-self-start">%</span>
												<p className="ms-3" data-aos="fade-zoom-in" data-aos-delay={200}>
													Genuine repeated <br />
													happy customers.
												</p>
											</div>
											<div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-5">
												<h2 className="odometer" >
													<CountUp end={98} enableScrollSpy={true} />
												</h2>
												<span className="fs-4 fw-medium align-self-start">%</span>
												<p className="ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
													Trusted by <br />
													companies
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 4*/}
				<section>
					<div className="container-fluid position-relative bg-linear-3 section-padding">
						<div className="container">
							<div className="text-center mb-8">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1" data-aos="zoom-in" data-aos-delay={200}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
								</div>
								<h3 className="ds-3 my-3 fw-regular">
									Professional
									<span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>UltraHD Video <br className="d-none d-lg-block" />
										Conferencing</span>
									Platform
								</h3>
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={0}>
									<div className="card-service bg-white p-5 rounded-4 hover-up">
										<img className="filter-invert" src="/assets/imgs/features-4/icon-1.svg" alt="infinia" />
										<h6 className="my-3 fs-5">Unified Communications</h6>
										<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={100}>
									<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
										<img className="filter-invert" src="/assets/imgs/features-4/icon-2.svg" alt="infinia" />
										<h6 className="my-3 fs-5">Team Messenger</h6>
										<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={200}>
									<div className="card-service bg-white p-5 rounded-4 hover-up">
										<img className="filter-invert" src="/assets/imgs/features-4/icon-3.svg" alt="infinia" />
										<h6 className="my-3 fs-5">Telephony and PBX</h6>
										<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-zoom-in" data-aos-delay={300}>
									<div className="card-service bg-white p-5 rounded-4 hover-up mt-lg-6">
										<img className="filter-invert" src="/assets/imgs/features-4/icon-4.svg" alt="infinia" />
										<h6 className="my-3 fs-5">Smart Meeting</h6>
										<p className="mb-6">Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="row mt-8">
								<div className="col-lg-7">
									<div className="d-flex align-items-center justify-content-lg-end justify-content-center">
										<Link href="#" className="btn btn-gradient">
											Get Free Quote
											<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</Link>
										<Link href="#" className="ms-5 text-decoration-underline fw-bold">How We Work</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 5*/}
				<section className="section-feature-5">
					<div className="container-fluid position-relative section-padding bg-1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5">
									<div className="photo-description position-relative  rounded-4">
										<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-1.png" alt="infinia" />
										<div className="box-gradient-1 ms-lg-8 position-absolute bottom-0 start-0 bg-linear-1 rounded-4 z-0" />
									</div>
								</div>
								<div className="col-lg-6 offset-lg-1 mt-lg-0 mt-5">
									<h4 className="ds-4 fw-regular">All that's necessary <br /> for <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>effective team <br className="d-none d-lg-inline" /> effort.</span></h4>
									<p className="fs-5">Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
									<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={200}>
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
							<div className="row py-90">
								<div className="col-lg-10 px-lg-0 mx-lg-auto d-lg-flex justify-content-lg-between">
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={0}>Team Messaging</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>4K Video</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={200}>Ultimate Collaboration</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={300}>Unified Communications</Link>
									<Link href="#" className="px-4 py-3 bg-white hover-up rounded-pill text-500 fs-5 text-nowrap d-inline-block mb-lg-0 mb-3" data-aos="fade-zoom-in" data-aos-delay={400}>Advanced Meeting</Link>
								</div>
							</div>
							<div className="row align-items-start pb-5 pt-lg-5 pt-0">
								<div className="col-lg-5 order-2 order-lg-1 mt-lg-0 mt-10 pt-lg-0 pt-5">
									<h4 className="ds-4 fw-regular">Experience the <br /> <span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={200}>cutting-edge <br /></span>capabilities</h4>
									<p className="fs-5">Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
									<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent mt-5" data-aos="fade-zoom-in" data-aos-delay={300}>
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M17.25 15.25V6.75H8.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-dark" d="M17 7L6.75 17.25" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
								<div className="col-lg-6 offset-lg-1 order-1 order-lg-2 mt-5 text-lg-end text-center">
									<div className="photo-description position-relative rounded-4 d-inline-block">
										<img className="rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-2.png" alt="infinia" />
										<div className="position-absolute top-50 start-50 translate-middle z-0">
											<div className="box-gradient-2 position-relative bg-linear-1 rounded-4 z-0">
											</div>
										</div>
										<img className="position-absolute top-100 start-0 d-none d-md-block translate-middle rounded-4 border border-2 border-white position-relative z-1" src="/assets/imgs/features-5/img-3.png" alt="infinia" data-aos="zoom-in" data-aos-delay={100} />
									</div>
								</div>
							</div>
							<div className="row pt-lg-150 pt-8 text-center d-none d-md-block">
								<div className="col-lg-10 col mx-lg-auto">
									<p className="text-500">Compatible with all operating systems and browsers in the world</p>
									<div className="compatible-group bg-white p-5 mt-5 rounded-4 d-md-flex justify-content-between">
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-1.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">MacOs</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-2.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Windows</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-3.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Linux</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-4.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Android</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-5.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">iOS</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-6.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Firefox</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-7.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Chrome</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-8.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Safari</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-9.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Opera</p>
										</div>
										<div className="compatible hover-up">
											<img src="/assets/imgs/features-5/icon-10.png" alt="infinia" />
											<p className="text-900 mt-3 mb-0">Opera</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Features 6*/}
				<section className="section-team-1 position-relative fix section-padding">
					<div className="container position-relative z-2">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why We Are The Best</span>
							</div>
							<h3 className="ds-3 my-3 fw-regular">Proud projects <span className=" fw-bold">that make <br className="d-none d-lg-inline" /> us stand</span> out</h3>
						</div>
						<div className="row mt-8">
							<div className="col-lg-6 mt-lg-0 mt-5">
								<div>
									<div className="counter-item-cover counter-item">
										<div className="content text-start mx-auto">
											<h2 className="count ds-2 fw-bold text-primary my-0">+<span className="odometer" /> <CountUp end={50} enableScrollSpy={true} /> k</h2>
										</div>
									</div>
								</div>
								<p className="fs-5 text-500">Nunc bibendum augue sed mattis porta. Donec pharetra magna tortor, quis bibendum ligula faucibus vitae,</p>
								<div className="accordion">
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
												<h6 className="m-0">Offshore Software Development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">
												Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
											</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
												<h6 className="m-0">Custom Software Development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">
												Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
											</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
												<h6 className="m-0">Software Outsourcing Services</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">
												Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
											</p>
										</div>
									</div>
									<div className="px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
										<div className="px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
												<span className="icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
												<h6 className="m-0">Software Product Development</h6>
												<span className="ms-auto arrow me-2">
													<svg xmlns="http://www.w3.org/2000/svg" width={13} height={8} viewBox="0 0 13 8" fill="none">
														<path className="stroke-dark" d="M11.5 1L6.25 6.5L1 1" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</span>
											</a>
										</div>
										<div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p className="px-0 card-body fs-6 text-600">
												Getting started is simple! Download the app from the App Store or Google Play Store, create an account using your email or social media login, and start making video calls instantly.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 px-lg-6 mt-lg-0 mt-8">
								<Link href="#" className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/features-6/img-1.png" alt="infinia" />
									<div className="content mt-md-0 mt-4 ms-5">
										<h6 className="mb-2">Cloud Migration Services</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
								</Link>
								<Link href="#" className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/features-6/img-2.png" alt="infinia" />
									<div className="content mt-md-0 mt-4 ms-5">
										<h6 className="mb-2">Mobile App Development</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
								</Link>
								<Link href="#" className="d-flex flex-column flex-md-row align-items-center mb-6 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/features-6/img-3.png" alt="infinia" />
									<div className="content mt-md-0 mt-4 ms-5">
										<h6 className="mb-2">UI/UX Design Teaching</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-1" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>
				{/*Features 7*/}
				<section className="section-features-7 bg-neutral-100 section-padding">
					<div className="container">
						<div className="row mb-8 mb-lg-6">
							<div className="col-lg-6">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Why us ?</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Reach out to <br /> the world’s most</h3>
								<p className="fs-5 fw-medium">⚡Here are a few reasons why our customers choose Infinia.</p>
							</div>
							<div className="col-lg-2 col-md-3 col-5 ms-auto align-self-end mb-lg-7">
								<div className="position-relative z-0">
									<div className="swiper-button-prev bg-white ms-lg-7">
										<i className="bi bi-arrow-left" />
									</div>
									<div className="swiper-button-next bg-white">
										<i className="bi bi-arrow-right" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<Swiper {...swiperOptions}
								className="swiper slider-1 pb-3"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									{/* prettier-ignore */}
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Marketing Automation</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Project Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Social Media Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-1.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">business</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Marketing Automation</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-2.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Research</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Project Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="card border-0 position-relative rounded-3 d-inline-flex card-hover">
											<img className="rounded-top-3" src="/assets/imgs/features-7/img-3.png" alt="infinia" />
											<Link href="#" className="position-absolute z-1 m-3 bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1">
												<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Social Media</span>
											</Link>
											<div className="card-body bg-white p-6">
												<h6 className="mb-3">Social Media Management</h6>
												<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
												<Link href="#" className="fw-bold text-primary d-inline-block pt-3 position-relative z-1">Keep Reading
													<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
														<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
													</svg>
												</Link>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
						</div>
					</div>
				</section>
				{/*Features 8*/}
				<section>
					<div className="container-fluid position-relative bg-primary-light section-padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-5 pe-lg-10 position-relative z-1">
									<img src="/assets/imgs/features-8/icon-star.svg" alt="infinia" />
									<h2 className="text-white mt-3 mb-4 fw-black">Core values</h2>
									<p className="text-white">We break down barriers so teams can focus on what matters – working together to create products their customers love.</p>
									<div className="col d-flex align-items-center mt-5 min-w-">
										<span className="h2 count fw-black text-white min-w-70"><span className="odometer" /> <CountUp end={98} enableScrollSpy={true} /></span><span className="fw-medium text-white fs-4 align-self-start">%</span>
										<p className="ms-3 text-white">
											Genuine repeated <br />
											happy customers.
										</p>
									</div>
									<div className="col d-flex align-items-center mt-5">
										<span className="h2 count fw-black text-white min-w-70"><span className="odometer" /> <CountUp end={98} enableScrollSpy={true} /></span><span className="fs-4 fw-medium text-white align-self-start">%</span>
										<p className="ms-3 text-white">
											Genuine repeated <br />
											happy customers.
										</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 pe-lg-8">
									<ul className="list-unstyled ">
										<li>
											<Link href="#" className="d-flex align-items-start mb-6">
												<img className="mt-2" src="/assets/imgs/features-2/tick.svg" alt="infinia" />
												<div className="ms-3 pb-4 border-bottom">
													<h5 className="text-white mb-2">Customers First</h5>
													<p className="text-white mb-0">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#" className="d-flex align-items-start mb-6">
												<img className="mt-2" src="/assets/imgs/features-2/tick.svg" alt="infinia" />
												<div className="ms-3 pb-4 border-bottom">
													<h5 className="text-white mb-2">Think Big</h5>
													<p className="text-white mb-0">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#" className="d-flex align-items-start mb-6">
												<img className="mt-2" src="/assets/imgs/features-2/tick.svg" alt="infinia" />
												<div className="ms-3 pb-4 border-bottom">
													<h5 className="text-white mb-2">Make a Difference</h5>
													<p className="text-white mb-0">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
												</div>
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 mb-lg-0 mb-8 pe-lg-8">
									<ul className="list-unstyled ">
										<li>
											<Link href="#" className="d-flex align-items-start mb-6">
												<img className="mt-2" src="/assets/imgs/features-2/tick.svg" alt="infinia" />
												<div className="ms-3 pb-4 border-bottom">
													<h5 className="text-white mb-2">Act With Integrity</h5>
													<p className="text-white mb-0">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#" className="d-flex align-items-start mb-6">
												<img className="mt-2" src="/assets/imgs/features-2/tick.svg" alt="infinia" />
												<div className="ms-3 pb-4 border-bottom">
													<h5 className="text-white mb-2">Do the right thing</h5>
													<p className="text-white mb-0">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
												</div>
											</Link>
										</li>
										<li>
											<Link href="#" className="d-flex align-items-start mb-6">
												<img className="mt-2" src="/assets/imgs/features-2/tick.svg" alt="infinia" />
												<div className="ms-3 pb-4 border-bottom">
													<h5 className="text-white mb-2">Stronger united</h5>
													<p className="text-white mb-0">Our company exists to help merchants sell more. We make every decision and measure every outcome based on how well it serves our customers.</p>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="position-absolute bottom-0 start-0 bg-rotate z-0">
							<img className="rotate-center" src="/assets/imgs/features-8/bg-img-favicon.png" alt="infinia" />
						</div>
						<div className="position-absolute top-0 end-0 z-1 p-8">
							<div className="bloom" />
						</div>
					</div>
				</section>
				{/*Features 9*/}
				<section className="section-features-9 position-relative">
					<div className="container-fluid position-relative fix section-padding">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-6 mb-lg-0 mb-8 position-relative z-1">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft d-inline-flex rounded-pill border-white border px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Download Mobile App</span>
									</div>
									<h2 className=" mt-3 mb-4 fw-black">Manage all from anywhere</h2>
									<p className="mb-6">⚡Don't miss any contact. Stay connected.</p>
									<ul className="list-unstyled phase-items">
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<img src="/assets/imgs/features-9/tick.svg" alt="infinia" />
												<p className=" mb-0 ms-2 fs-5 text-900">Beautiful awesome interface</p>
											</Link>
										</li>
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<img src="/assets/imgs/features-9/tick.svg" alt="infinia" />
												<p className=" mb-0 ms-2 fs-5 text-900">Online collaborative anytime</p>
											</Link>
										</li>
										<li>
											<Link href="#" className="phase-item d-flex align-items-center mb-3">
												<img src="/assets/imgs/features-9/tick.svg" alt="infinia" />
												<p className=" mb-0 ms-2 fs-5 text-900">Real-time updates</p>
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-md-6 mb-lg-0 mb-8">
									<div className="position-relative d-inline-block z-2">
										<img className="rounded-4 border border-3 border-white" src="/assets/imgs/features-9/img-1.png" alt="infinia" />
										<div className="position-absolute bottom-0 start-0 end-0 mb-3 mx-3 backdrop-filter rounded-3 text-start p-3">
											<Link href="/page-contact-1" className="d-flex align-items-center">
												<img src="/assets/imgs/cta-3/icon-contact.svg" alt="infinia" />
												<span className="ms-3">
													<span className="text-white text-uppercase mb-0 fs-7">Contact Us</span>
													<span className="fs-4 d-block">+01 (24) 568 900</span>
												</span>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 mb-lg-0 mb-8">
									<div className="px-lg-8">
										<div className="d-flex align-items-center border-bottom pb-5 mt-5">
											<span className="h2 count fw-black "><span className="odometer" /> <CountUp end={99} enableScrollSpy={true} /></span>
											<span className="fw-medium  fs-4 align-self-start">%</span>
											<p className="ms-3">
												Genuine <br />
												happy customers.
											</p>
										</div>
										<div className="d-flex align-items-center border-bottom pb-5 mt-5">
											<span className="h2 count fw-black "><span className="odometer" /> <CountUp end={92} enableScrollSpy={true} /></span>
											<span className="fw-medium  fs-4 align-self-start">k</span>
											<p className="ms-3">
												Happy <br />
												Customers
											</p>
										</div>
										<div className="d-flex align-items-center border-bottom pb-5 mt-5">
											<span className="h2 count fw-black "><span className="odometer" /> <CountUp end={25} enableScrollSpy={true} /></span>
											<span className="fw-medium  fs-4 align-self-start">k</span>
											<p className="ms-3">
												Consultation <br />
												Completed
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bouncing-blobs-container rounded-4 fix">
						<div className="bouncing-blobs-glass rounded-4" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--green" />
							<div className="bouncing-blob bouncing-blob--primary" />
							<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
						</div>
					</div>
				</section>
				{/*Features 10*/}
				<section className="features-10 py-9 bg-primary-light">
					<div className="container">
						<div className="row">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-1.svg" alt="infinia" />
										</div>
									</div>
									<h6>Best Solutions</h6>
									<p>delivering exceptional results and Innovation solutons maximizing your success.</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-2.svg" alt="infinia" />
										</div>
									</div>
									<h6>Secure payment</h6>
									<p>We ensure your transactions are safe with advanced encryption and secure payment options.</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<h6>Save Money</h6>
									<p>Enjoy competitive pricing, exclusive discounts, promotions to maximize your savings.</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img src="/assets/imgs/features-1/icon-4.svg" alt="infinia" />
										</div>
									</div>
									<h6>Quick Support</h6>
									<p>Our dedicated support team offers prompt assistance through live chat, email, and phone.</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
									<div className="position-absolute end-0 top-0">
										<img src="/assets/imgs/feature-10/bg-line.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* feature-11 */}
				<section className="section-feature-11 border-bottom">
					<div className="container-fluid position-relative section-padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 position-relative">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
									</div>
									<h5 className="ds-5 mt-2">Optimize Your <br /> Finances with Ease.</h5>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-1.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our History</h6>
											<p>A Journey of Innovation, Growth, <br /> and Technological Advancement</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-2.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our Mission</h6>
											<p>Empowering Your Digital Success Through <br /> Innovative Solutions</p>
										</div>
									</div>
									<div className="d-flex pt-3 align-items-center">
										<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div className="icon">
												<img src="/assets/imgs/features-11/icon-3.svg" alt="infinia" />
											</div>
										</div>
										<div className="ps-5">
											<h6>Our Vision</h6>
											<p>Leading the Future of Web Development <br /> with Excellence and Innovation</p>
										</div>
									</div>
									<div className="position-absolute flickering top-0 end-0 mt-5 me-10 d-none d-md-block">
										<img src="/assets/imgs/features-11/icon-4.svg" alt="" />
									</div>
								</div>
								<div className="col-lg-7 text-center mt-lg-0 mt-8 d-flex">
									<div className="zoom-img rounded-3 mt-8 me-3">
										<img src="/assets/imgs/features-11/img-1.png" alt="infinia" />
									</div>
									<div className="zoom-img rounded-3">
										<img className="rounded-3" src="/assets/imgs/features-11/img-2.png" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* feature-12 */}
				<section className="section-feature-12 border-bottom pb-120 pt-110">
					<div className="container">
						<div className="text-center">
							<h5 className="ds-5">Our Core Values</h5>
							<p className="fs-5 pb-4">
								We break down barriers so teams can focus on what matters – working together <br className="d-none d-lg-block" />
								to create products their customers love.
							</p>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img className="filter-invert" src="/assets/imgs/service-1/icon-6.svg" alt="infinia" />
										</div>
									</div>
									<h4>Customers First</h4>
									<p>
										Your satisfaction and trust are our top priorities, and we <br />
										are committed to building lasting relationships through <br />
										exceptional service and support.
									</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
								<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img className="filter-invert" src="/assets/imgs/service-1/icon-5.svg" alt="infinia" />
										</div>
									</div>
									<h4>Commitment to Excellence</h4>
									<p>
										Your satisfaction and trust are our top priorities, and we <br />
										are committed to building lasting relationships through <br />
										exceptional service and support.
									</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img className="filter-invert" src="/assets/imgs/service-1/icon-4.svg" alt="infinia" />
										</div>
									</div>
									<h4>Personal Accountability</h4>
									<p>
										Your satisfaction and trust are our top priorities, and we <br />
										are committed to building lasting relationships through <br />
										exceptional service and support.
									</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
								<div className="feature-item mb-5 bg-neutral-100 p-7 rounded-4 hover-up">
									<div className="icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											<img className="filter-invert" src="/assets/imgs/service-1/icon-3.svg" alt="infinia" />
										</div>
									</div>
									<h4>Team Empowerment</h4>
									<p>
										Your satisfaction and trust are our top priorities, and we <br />
										are committed to building lasting relationships through <br />
										exceptional service and support.
									</p>
									<Link href="#" className="text-primary fs-7 fw-bold">
										Learm More
										<svg className=" ms-2 " xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
											<g clipPath="url(#clip0_399_9647)">
												<path className="fill-dark" d="M13.5633 4.06348L12.7615 4.86529L16.3294 8.43321H0.5V9.56716H16.3294L12.7615 13.135L13.5633 13.9369L18.5 9.00015L13.5633 4.06348Z" fill="#111827" />
											</g>
											<defs>
												<clipPath>
													<rect width={18} height={18} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>


			</Layout>
		</>
	)
}