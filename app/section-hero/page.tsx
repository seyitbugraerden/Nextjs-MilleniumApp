"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import CountUp from 'react-countup'
import Marquee from "react-fast-marquee"
import ModalVideo from 'react-modal-video'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SectionHero() {

	const [isOpen, setOpen] = useState(false)

	const swiperOptions = {
		slidesPerView: 1,
		// spaceBetween: 20,
		slidesPerGroup: 1,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	}

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Hero</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Hero</p>
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
				{/*Hero 1*/}
				<section className="position-relative overflow-hidden section-padding">
					<div className="container">
						<div className="row content align-items-center">
							<div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
								<div className="pe-2">
									<Link href="#" className="d-flex align-items-center bg-linear-1 d-inline-flex rounded-pill px-2 py-1">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">New</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Lifetime Update</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
											<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.25 9.5H3.5625" stroke="#6342EC" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<h3 className="ds-3 mt-4 mb-5" data-aos="fade-zoom-in" data-aos-delay={0}>Boost your project's speed and efficiency.</h3>
									<p className="pe-10 mb-5" data-aos="fade-zoom-in" data-aos-delay={200}>Access top-tier group mentoring plans and exclusive professional benefits for your team.</p>
									<Link href="/page-services-1" className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={300}>
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="/page-contact-1" className="ms-md-3 mt-3 mt-md-0 btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={500}>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Contact Us
									</Link>
									<div className="row mt-8 mb-3">
										<h6 className="text-500 fs-5" data-aos="fade-zoom-in" data-aos-delay={100}>Trusted by great companies</h6>
									</div>
									<div className="d-flex align-items-center">
										<div className="me-2" data-aos="fade-zoom-in" data-aos-delay={200}>
											<div className="d-flex">
												<img src="/assets/imgs/hero-1/avatar-1.png" alt="infinia" />
												<img className="avt-hero" src="/assets/imgs/hero-1/avatar-2.png" alt="infinia" />
												<img className="avt-hero" src=" assets/imgs/hero-1/avatar-3.png" alt="infinia" />
											</div>
											<span className="fs-6 fw-bold">4.8/5 <span className="text-secondary fw-medium">(26k Reviews)</span></span>
										</div>
										<div className="ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
											<img src="/assets/imgs/hero-1/brand-1.svg" alt="infinia" />
										</div>
										<div className="ms-3" data-aos="fade-zoom-in" data-aos-delay={300}>
											<img src="/assets/imgs/hero-1/brand-2.svg" alt="infinia" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 position-relative justify-content-center">
								<img className="hero-img" src="/assets/imgs/hero-1/background.png" alt="infinia" />
								<div className="shape-1 position-absolute">
									<img className="rightToLeft" src="/assets/imgs/hero-1/shape-1.png" alt="infinia" data-aos="zoom-in" data-aos-delay={500} />
								</div>
								<div className="shape-2 position-absolute d-none d-md-block">
									<img src="/assets/imgs/hero-1/shape-2.png" alt="infinia" data-aos="zoom-in" data-aos-delay={200} />
								</div>
								<div className="shape-3 position-absolute d-none d-md-block">
									<img src="/assets/imgs/hero-1/shape-3.png" alt="infinia" data-aos="zoom-in" data-aos-delay={300} />
								</div>
								<div className="alltuchtopdown card-hero backdrop-filter rounded-3 text-center d-inline-block p-3 position-absolute">
									<img className="rounded-3" src="/assets/imgs/hero-1/shape-4.png" alt="infinia" />
									<h6 className="mt-3">Book A Call</h6>
									<p className="fs-7 text-700">
										Customer activity can be easily <br />
										tracked with one click
									</p>
									<Link href="#" className="shadow-sm d-flex align-items-center bg-white d-inline-flex rounded-pill px-2 py-1 mb-3">
										<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
										<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
											<path d="M10.3125 5.5625L14.4375 9.5L10.3125 13.4375" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M14.25 9.5H3.5625" stroke="#6D4DF2" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Hero 2*/}
				<section className="section-hero-2 position-relative fix section-padding pb-lg-0">
					<div className="container">
						<div className="row text-center position-relative z-1">
							<div className="col">
								<div className="border-linear-1 rounded-pill d-inline-block mb-2" data-aos="zoom-in" data-aos-delay={100}>
									<div className="text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2">🚀 Free Lifetime Update</div>
								</div>
								<h3 className="ds-3 fw-normal position-relative z-2 mb-5">
									Online Conference Tools <br />
									<span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={20}>High-Quality</span> Video and Audio
								</h3>
								<div className="d-flex gap-3 flex-column flex-md-row justify-content-center">
									<Link href="#" className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={100}>
										Get Started
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<Link href="/page-contact-1" className="btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Contact Us
									</Link>
								</div>
								<div className="mt-10 mt-md-8 position-relative z-1  text-900">
									<img src="/assets/imgs/hero-2/macbook.png" alt="infinia" data-aos="fade-up" data-aos-delay={100} />
									<img className="alltuchtopdown d-none d-md-block position-absolute bottom-0 end-0 pe-10 me-lg-10 mb-lg-10" src="/assets/imgs/hero-2/vector.png" alt="infinia" />
									<div className="position-md-absolute d-inline-block pt-10 pt-md-5 top-50 start-0 translate-middle-y mt-10">
										<div className="alltuchtopdown backdrop-filter rounded-4 p-4">
											<h6 className="text-900">Features</h6>
											<p className="fs-6 text-900">
												Discover why hundreds of millions <br />
												people use Infinia to chat and call <br />
												every day.
											</p>
											<ul className="list-unstyled phase-items text-900">
												<li className="d-flex align-items-center mt-2">
													<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
													<span className="ms-2">HD video calling</span>
												</li>
												<li className="d-flex align-items-center mt-2">
													<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
													<span className="ms-2">Smart messaging</span>
												</li>
												<li className="d-flex align-items-center mt-2">
													<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
													<span className="ms-2">Screen sharing</span>
												</li>
												<li className="d-flex align-items-center mt-2">
													<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
													<span className="ms-2">Private conversations</span>
												</li>
												<li className="d-flex align-items-center mt-2">
													<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
													<span className="ms-2">Call recording</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="position-absolute top-0 start-0 ms-10 mt-10 pt-10">
									<img className="flickering" src="/assets/imgs/hero-2/star-1.png" alt="infinia" />
								</div>
								<div className="rotateme position-absolute top-0 end-0 me-10 pe-8 z-0">
									<img className="flickering" src="/assets/imgs/hero-2/star-3.png" alt="infinia" />
								</div>
								<div className="position-absolute top-50 end-0 translate-middle-y pe-md-10 pe-5 pt-10 mt-8">
									<div className="shake">
										<img className="flickering" src="/assets/imgs/hero-2/star-2.png" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x">
						<img src="/assets/imgs/hero-2/bg-line.png" alt="infinia" />
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--green" />
							<div className="bouncing-blob bouncing-blob--green" />
							<div className="bouncing-blob bouncing-blob--white" />
							<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
							<div className="bouncing-blob bouncing-blob--purple" />
							<div className="bouncing-blob bouncing-blob--purple" />
							<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
						</div>
					</div>
					<div className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block z-2">
						<div className="socials rotate-90 bg-white px-3 py-2 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
							<p className="text-900 mb-0">Follow us:</p>
							<ul className="list-unstyled d-flex mb-0">
								<li className="ms-3">
									<Link href="http://www.facebook.com" target="_blank">
										<span className="icon">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
												<path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
											</svg>
										</span>
									</Link>
								</li>
								<li className="ms-3">
									<Link href="http://www.twittet.com" target="_blank">
										<span className="icon">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
											</svg>
										</span>
									</Link>
								</li>
								<li className="ms-3">
									<Link href="#">
										<span className="icon">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
											</svg>
										</span>
									</Link>
								</li>
								<li className="ms-3">
									<Link href="#">
										<span className="icon">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
												<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
											</svg>
										</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>
				{/*Hero 3*/}
				<section className="section-hero-3 position-relative fix section-padding">
					<div className="container">
						<div className="row align-items-center position-relative">
							<div className="col-lg-7 position-relative z-1 mb-lg-0 pb-10 mb-">
								<div className="text-start mb-lg-0 mb-5">
									<div className="border-linear-1 rounded-pill d-inline-block mb-3">
										<div className="text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2">🚀 Free Lifetime Update</div>
									</div>
									<div className="d-flex align-items-center">
										<h1 className="ds-1 my-3 me-4 lh-1">Elevate your</h1>
										<div className="mt-3 d-none d-md-flex">
											<div className="avt-hero">
												<img className=" icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle" src="/assets/imgs/hero-3/avatar-1.png" alt="infinia" />
											</div>
											<div className="avt-hero">
												<img className=" icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle" src="/assets/imgs/hero-3/avatar-2.png" alt="infinia" />
											</div>
											<div className="avt-hero icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle">
												<img src=" assets/imgs/hero-3/icon.svg" alt="infinia" />
											</div>
										</div>
									</div>
									<h1 className="ds-1 lh-1 m-0">brand with Infinia.</h1>
									<p className="fs-5 text-900 my-6">
										Access top-tier group mentoring plans and <br />
										exclusive professional benefits for your team.
									</p>
									<Link href="#" className="btn btn-gradient">
										Get Free Quote
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<div className="mt-6 pt-4 max-w-300px">
										<p className="text-uppercase mb-2">Trusted by the best</p>
										<div className="carouselTicker carouselTicker-right">
											<ul className="carouselTicker__list">
												<Marquee direction="right">
													<li className="carouselTicker__item mx-2">
														<img className="filter-invert rounded-4" src="/assets/imgs/hero-3/logo-1.png" alt="infinia" />
													</li>
													<li className="carouselTicker__item mx-2">
														<img className="rounded-4" src="/assets/imgs/hero-3/logo-2.png" alt="infinia" />
													</li>
													<li className="carouselTicker__item mx-2">
														<img className="rounded-4" src="/assets/imgs/hero-3/logo-3.png" alt="infinia" />
													</li>
												</Marquee>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-7 position-xl-absolute mb-lg-10 top-50 end-0 translate-middle-lg-y z-0">
								<div className="row">
									<div className="col-6 align-self-end">
										<div className="border-5 border-white border rounded-4  mb-4 d-block d-xl-none">
											<img className="rounded-4" src="/assets/imgs/hero-3/img-4.png" alt="infinia" />
										</div>
										<div className="border-5 border-white border rounded-4">
											<img className="rounded-4" src="/assets/imgs/hero-3/img-3.png" alt="infinia" />
										</div>
									</div>
									<div className="col-6 align-self-end">
										<div className="border-5 border-white border rounded-4 mb-4">
											<img className="rounded-4" src="/assets/imgs/hero-3/img-1.png" alt="infinia" />
										</div>
										<div className="border-5 border-white border rounded-4">
											<img className="rounded-4" src="/assets/imgs/hero-3/img-2.png" alt="infinia" />
										</div>
									</div>
								</div>
								<div className="position-absolute top-50 start-50 translate-middle pb-10 pe-10">
									<img className="rotateme" src="/assets/imgs/hero-3/star-rotate.png" alt="infinia" />
								</div>
								<div className="position-absolute top-50 start-50 translate-middle">
									<div className="ellipse-primary" />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Hero 4*/}
				<section className="section-hero-4 position-relative fix pt-150">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="col-lg-6 text-center text-lg-start">
								<div className="position-relative d-inline-block">
									<img className="rounded-5 border border-5 border-white" src="/assets/imgs/hero-4/img-1.png" alt="infinia" />
									<div className="alltuchtopdown backdrop-filter rounded-4 text-center d-inline-block px-6 py-4 m-5 position-absolute bottom-0 end-0">
										<h2 className="count text-900 fw-black">+<span className="odometer" /><CountUp end={23} enableScrollSpy={true} /><span>k</span></h2>
										<h6 className="text-500">Professionals</h6>
										<p className="text-500 fs-7">Love Our System</p>
										<Link href="#" className="shadow-sm d-flex align-items-center bg-white d-inline-flex rounded-pill px-2 py-1 mb-3">
											<span className="bg-primary fs-9 fw-bold rounded-pill px-2 py-1 text-white">Get</span>
											<span className="fs-7 fw-medium text-primary mx-2">Free Update</span>
										</Link>
									</div>
									<div className="position-absolute start-0 bottom-50 translate-middle-x">
										<div className="alltuchtopdown">
											<img src="/assets/imgs/hero-4/vector-1.svg" alt="infinia" />
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="position-relative align-self-end mt-10">
									<h3 className="ds-3 fw-regular">
										Complex
										<span className=" fw-bold">IT <br />Solution</span>
										For <span className=" fw-bold">Grow <br /></span> Your <span className=" fw-bold">Business</span>
									</h3>
									<p className="fs-5 text-500 py-3">Provide your team with top-tier group mentoring programs and exceptional professional benefits.</p>
									<Link href="#" className="fw-bold btn bg-neutral-100 d-inline-flex align-items-center text-900 hover-up">
										<span className="me-10">Get 15 Days Free Trial</span>
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="fill-dark" d="M17.4177 5.41776L16.3487 6.48684L21.1059 11.2441H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5823L24 12L17.4177 5.41776Z" fill="black" />
										</svg>
									</Link>
									<p className="text-500 fs-8 pt-3 pb-8">No Card Required. Cancel Anytime.</p>
									<div className="row">
										<div className="row position-relative align-items-center justify-content-between">
											<div className="col d-flex align-items-center">
												<div className="counter-item-cover counter-item">
													<div className="content text-center mx-auto">
														<h2 className="count fw-black text-900 text-nowrap"><span className="odometer" /><CountUp end={12} enableScrollSpy={true} />M+</h2>
													</div>
												</div>
												<p className="ms-3 fs-5">
													Transaction
													<br />
													Completed
												</p>
											</div>
											<div className="col d-flex align-items-center pe-lg-8 ">
												<span className="line-verticarl border-start h-50 ms-4 position-absolute top-50 start-50 translate-middle d-none d-md-block" />
												<div className="counter-item-cover counter-item ms-md-auto">
													<div className="content ">
														<h2 className="count fw-black text-900"><span className="odometer" /><CountUp end={25} enableScrollSpy={true} />k+</h2>
													</div>
												</div>
												<p className="ms-3 fs-5">
													Happy <br />
													Clients
												</p>
											</div>
										</div>
										<div className="row mt-8 mb-10">
											<Swiper {...swiperOptions}
												className="swiper slider-two pb-5 mt-lg-0 mt-5"
												modules={[Keyboard, Pagination, Navigation]}
											>
												<div className="swiper-wrapper">
													<SwiperSlide className="swiper-slide">
														<div className="d-flex">
															<div className="img align-self-start">
																<img className="rounded-circle" src="/assets/imgs/hero-4/avatar-1.png" alt="infinia" />
															</div>
															<div className="content ms-3">
																<div className="d-flex">
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																</div>
																<p className="text-500 mt-2">
																	Access the same project through five different dynamic <br className="d-md-block d-none" />
																	views: a kanban board, Gantt chart, spreadsheet, calendar <br />
																	or simple task list.
																</p>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<div className="d-flex">
															<div className="img align-self-start">
																<img className="rounded-circle" src="/assets/imgs/hero-4/avatar-1.png" alt="infinia" />
															</div>
															<div className="content ms-3">
																<div className="d-flex">
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																</div>
																<p className="text-500 mt-2">
																	Access the same project through five different dynamic <br className="d-md-block d-none" />
																	views: a kanban board, Gantt chart, spreadsheet, calendar <br />
																	or simple task list.
																</p>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<div className="d-flex">
															<div className="img align-self-start">
																<img className="rounded-circle" src="/assets/imgs/hero-4/avatar-1.png" alt="infinia" />
															</div>
															<div className="content ms-3">
																<div className="d-flex">
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																</div>
																<p className="text-500 mt-2">
																	Access the same project through five different dynamic <br className="d-md-block d-none" />
																	views: a kanban board, Gantt chart, spreadsheet, calendar <br />
																	or simple task list.
																</p>
															</div>
														</div>
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<div className="d-flex">
															<div className="img align-self-start">
																<img className="rounded-circle" src="/assets/imgs/hero-4/avatar-1.png" alt="infinia" />
															</div>
															<div className="content ms-3">
																<div className="d-flex">
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																	<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
																</div>
																<p className="text-500 mt-2">
																	Access the same project through five different dynamic <br className="d-md-block d-none" />
																	views: a kanban board, Gantt chart, spreadsheet, calendar <br />
																	or simple task list.
																</p>
															</div>
														</div>
													</SwiperSlide>
												</div>
												<div className="swiper-pagination" />
											</Swiper>
										</div>
									</div>
									<div className="position-absolute top-0 end-0 z-1 flickering pt-9 pe-4">
										<img src="/assets/imgs/hero-4/star-1.svg" alt="infinia" />
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute top-0 start-0 bottom-0 mb-5 bg-2 rounded-4 fix">
							<img className="h-100" src="/assets/imgs/hero-4/line-bg.png" alt="infinia" />
						</div>
						<div className="position-absolute bg-rotate d-none d-lg-block pb-10 ps-9 mb-8 z-0">
							<img src="/assets/imgs/hero-4/favicon.svg" alt="infinia" />
						</div>
					</div>
				</section>
				{/*Hero 5*/}
				<div className="section-hero-5 position-relative">
					<Swiper {...swiperOptions}
						className="swiper slider-two"
						modules={[Keyboard, Pagination, Navigation]}
					>
						<div className="swiper-wrapper">
							{/* prettier-ignore */}
							<SwiperSlide className="swiper-slide">
								<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png)` }}>
									<div className="container position-relative z-2">
										<div className="row">
											<div className="col-lg-6">
												<div className="backdrop-filter p-8 position-relative rounded-3">
													<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
														<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
													</div>
													<h3 className="ds-3 my-3">Best
														<span className="fw-regular">
															Solutions <br />
															<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
															for
														</span>
														Innovation
													</h3>
													<p className="fs-5 text-900">
														Infinia offers full range of consultancy  training methods for business consultation.
													</p>
													<div className="d-flex flex-column flex-md-row align-items-center">
														<Link href="#" className="btn btn-gradient rounded-4">
															View Our Services
															<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
														<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
													<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
														<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
															<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="position-absolute top-0 start-0 z-0">
										<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-2.png)` }}>
									<div className="container position-relative z-2">
										<div className="row">
											<div className="col-lg-6">
												<div className="backdrop-filter p-8 position-relative rounded-3">
													<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
														<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
													</div>
													<h3 className="ds-3 my-3">Best
														<span className="fw-regular">
															Solutions <br />
															<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
															for
														</span>
														Innovation
													</h3>
													<p className="fs-5 text-900">
														Infinia offers full range of consultancy  training methods for business consultation.
													</p>
													<div className="d-flex flex-column flex-md-row align-items-center">
														<Link href="#" className="btn btn-gradient rounded-4">
															View Our Services
															<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
														<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
													<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
														<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
															<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="position-absolute top-0 start-0 z-0">
										<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png)` }}>
									<div className="container position-relative z-2">
										<div className="row">
											<div className="col-lg-6">
												<div className="backdrop-filter p-8 position-relative rounded-3">
													<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
														<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
													</div>
													<h3 className="ds-3 my-3">Best
														<span className="fw-regular">
															Solutions <br />
															<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
															for
														</span>
														Innovation
													</h3>
													<p className="fs-5 text-900">
														Infinia offers full range of consultancy  training methods for business consultation.
													</p>
													<div className="d-flex flex-column flex-md-row align-items-center">
														<Link href="#" className="btn btn-gradient rounded-4">
															View Our Services
															<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
														<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
													<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
														<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
															<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="position-absolute top-0 start-0 z-0">
										<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-2.png)` }}>
									<div className="container position-relative z-2">
										<div className="row">
											<div className="col-lg-6">
												<div className="backdrop-filter p-8 position-relative rounded-3">
													<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
														<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
													</div>
													<h3 className="ds-3 my-3">Best
														<span className="fw-regular">
															Solutions <br />
															<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
															for
														</span>
														Innovation
													</h3>
													<p className="fs-5 text-900">
														Infinia offers full range of consultancy  training methods for business consultation.
													</p>
													<div className="d-flex flex-column flex-md-row align-items-center">
														<Link href="#" className="btn btn-gradient rounded-4">
															View Our Services
															<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
														<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
													<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
														<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
															<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="position-absolute top-0 start-0 z-0">
										<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-1.png)` }}>
									<div className="container position-relative z-2">
										<div className="row">
											<div className="col-lg-6">
												<div className="backdrop-filter p-8 position-relative rounded-3">
													<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
														<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
													</div>
													<h3 className="ds-3 my-3">Best
														<span className="fw-regular">
															Solutions <br />
															<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
															for
														</span>
														Innovation
													</h3>
													<p className="fs-5 text-900">
														Infinia offers full range of consultancy  training methods for business consultation.
													</p>
													<div className="d-flex flex-column flex-md-row align-items-center">
														<Link href="#" className="btn btn-gradient rounded-4">
															View Our Services
															<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
														<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
													<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
														<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
															<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="position-absolute top-0 start-0 z-0">
										<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="swiper-slide">
								<div className="position-relative py-188 img-pull" style={{ backgroundImage: `url(/assets/imgs/hero-5/img-bg-2.png)` }}>
									<div className="container position-relative z-2">
										<div className="row">
											<div className="col-lg-6">
												<div className="backdrop-filter p-8 position-relative rounded-3">
													<div className="bg-white bg-opacity-50 border border-primary-soft d-inline-flex rounded-pill px-4 py-1">
														<span className="tag-spacing fs-6 text-primary">🚀 Welcome to Infinia</span>
													</div>
													<h3 className="ds-3 my-3">Best
														<span className="fw-regular">
															Solutions <br />
															<img className="alltuchtopdown img-fluid filter-invert" src="/assets/imgs/hero-5/icon-1.svg" alt="infinia" />
															for
														</span>
														Innovation
													</h3>
													<p className="fs-5 text-900">
														Infinia offers full range of consultancy  training methods for business consultation.
													</p>
													<div className="d-flex flex-column flex-md-row align-items-center">
														<Link href="#" className="btn btn-gradient rounded-4">
															View Our Services
															<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
																<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
																<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
														<Link href="#" onClick={() => setOpen(true)} scroll={false} className="d-inline-flex align-items-center rounded-4 text-nowrap backdrop-filter align-self-md-stretch px-3 py-2 popup-video hover-up ms-md-3 mt-3 mt-md-0">
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
													<div className="position-absolute top-50 start-0 translate-middle d-none d-md-block z-2">
														<div className="tag-home-5 rotate-90 backdrop-filter px-6 py-3 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
															<p className="text-900 mb-0 fs-18px fw-bold">20+ Years of Experience</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="position-absolute top-0 start-0 z-0">
										<img src="/assets/imgs/hero-5/img-bg-line.png" alt="infinia" />
									</div>
								</div>
							</SwiperSlide>
						</div>
						<div className="swiper-button-prev d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white ms-lg-7">
							<i className="bi bi-arrow-left" />
						</div>
						<div className="swiper-button-next d-none d-lg-flex shadow-2 position-absolute top-50 translate-middle-y bg-white me-lg-7">
							<i className="bi bi-arrow-right" />
						</div>
						<div className="swiper-pagination mb-8" />
					</Swiper>
				</div>

				<ModalVideo channel='youtube' isOpen={isOpen} videoId="gXFATcwrO-U" onClose={() => setOpen(false)} />

			</Layout>
		</>
	)
}