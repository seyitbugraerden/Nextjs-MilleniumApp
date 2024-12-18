"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import CountUp from 'react-countup'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function PageCaseStudyDetails() {

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
							<h3>Case Study Details</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Case Study Details</p>
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
				<section>
					<div className="container section-padding">
						<div className="row">
							<div className="d-flex gap-2">
								<Link href="#" className="bg-primary-soft rounded-pill px-3 fw-bold py-2 text-primary text-uppercase fs-7">Business</Link>
								<Link href="#" className="bg-primary-soft rounded-pill px-3 fw-bold py-2 text-primary text-uppercase fs-7">mARKETING</Link>
							</div>
							<h5 className="ds-5 mt-3 mb-8">Top Trends in Digital Marketing and <br className="d-none d-lg-block" /> How They Impact Your Business</h5>
							<div className="col-lg-8 col-12">
								<div className="position-relative mb-9">
									<Swiper {...swiperOptions}
										className="swiper slider-two rounded-3"
										modules={[Keyboard, Autoplay, Pagination, Navigation]}
									>
										<div className="swiper-wrapper">
											<SwiperSlide className="swiper-slide">
												<img className="w-100" src="/assets/imgs/case-study-details/img-1.png" alt="infinia" />
											</SwiperSlide>
											<SwiperSlide className="swiper-slide">
												<img className="w-100" src="/assets/imgs/case-study-details/img-2.png" alt="infinia" />
											</SwiperSlide>
										</div>
									</Swiper>
									<div>
										<div className="swiper-button-prev bg-white position-absolute top-100 start-50 translate-middle-y me-8 mt-1 shadow">
											<i className="bi bi-arrow-left" />
										</div>
										<div className="swiper-button-next bg-white position-absolute top-100 start-50 translate-middle-y ms-8 mt-1 shadow">
											<i className="bi bi-arrow-right" />
										</div>
									</div>
								</div>
								<div className="d-flex flex-column flex-md-row text-center align-items-center justify-content-between border-top border-bottom mb-7">
									<div className="py-3">
										<span className="text-500 fs-6">Client</span>
										<p className="text-900 mb-0">Quantum Solutions</p>
									</div>
									<div className="py-3">
										<span className="text-500 fs-6">Start</span>
										<p className="text-900 mb-0">01 Aug 2024</p>
									</div>
									<div className="py-3">
										<span className="text-500 fs-6">Complete</span>
										<p className="text-900 mb-0">01 Sep 2024</p>
									</div>
									<div className="py-3">
										<span className="text-500 fs-6">Services</span>
										<p className="text-900 mb-0">UI/UX Design</p>
									</div>
									<div className="py-3">
										<span className="text-500 fs-6">Website</span>
										<p className="text-900 mb-0">quantum.sw</p>
									</div>
								</div>
								<p className="fs-5 text-900">Infinia System, a rapidly growing app, faced a significant challenge in maintaining and enhancing user engagement. With an initial user base of 5,000, the company struggled with low interaction rates, high churn. Despite having a unique value proposition, the lack of effective engagement strategies hindered their growth potential. Infinia System needed a robust approach to transform their user experience and drive substantial engagement.</p>
								<h5 className="mt-5 mb-3">Research</h5>
								<p>Understanding the importance of user engagement for their app’s success, Infinia System’s team conducted extensive research to identify the pain points and preferences of their user base. They aimed to uncover why users were not engaging as expected and what features or improvements could make a difference. Through surveys, user feedback sessions, and analyzing usage data, Infinia System identified several key areas needing improvement: personalized content delivery, user-friendly interface enhancements, and proactive user support.</p>
								<h5 className="mt-5 mb-3">Solution</h5>
								<p>Armed with these insights, Infinia System implemented a comprehensive engagement strategy focused on personalization, user experience optimization, and enhanced customer support.</p>
								<p className="fw-bold text-900">Personalization: <span className="fw-medium text-600">Infinia System leveraged AI-driven algorithms to deliver personalized content and recommendations based on user behavior and preferences. This approach ensured that users received relevant and timely information, increasing their likelihood of interaction with the app.</span></p>
								<p className="fw-bold text-900">User Experience Optimization: <span className="fw-medium text-600">Infinia System revamped its user interface to make it more intuitive and engaging. Simplified navigation, interactive tutorials, and user-centric design elements were introduced to enhance the overall user experience. These changes made it easier for users to find and utilize the app’s features, leading to increased satisfaction and usage.</span></p>
								<p className="fw-bold text-900">Proactive User Support: <span className="fw-medium text-600">Infinia System integrated an in-app chat feature powered by AI chatbots to provide immediate assistance to users. This feature addressed user queries in real time, reducing frustration and improving user retention. Additionally, Infinia System set up automated email campaigns to re-engage users who had been inactive for a certain period, encouraging them to return and explore new features.</span></p>
								<h5 className="mt-5 mb-3">Results</h5>
								<p>The implementation of these strategies yielded impressive results for Infinia System. Within six months, the user base skyrocketed from 5,000 to 50,000. The personalized content approach led to a significant increase in user interaction, with engagement rates doubling. The improved user interface received positive feedback, with users spending more time on the app and exploring its features. The proactive support system reduced churn rates, with more users staying active and satisfied with the app.</p>
								<p>Overall, Infinia System's commitment to enhancing user engagement through personalized experiences, optimized design, and proactive support transformed their user base and positioned them for continued growth and success.</p>
								<h5 className="mt-5 mb-3">Conclusion</h5>
								<p>Infinia System's journey from 5,000 to 50,000 users in just six months highlights the critical role of user engagement in app success. By focusing on personalized content, user-friendly design, and proactive support, Infinia System not only increased its user base but also created a loyal and engaged community. This case study demonstrates the power of understanding user needs and implementing targeted strategies to drive meaningful engagement and growth.</p>
							</div>
							<div className="col-lg-4">
								<div className="bg-primary mt-lg-0 mt-5 rounded-3 position-relative">
									<div className="p-7">
										<h4 className="text-white">
											Providing the <br />
											Ultimate Experience <br />
											in Financial Services
										</h4>
										<Link href="/page-contact-1" className="d-flex align-items-center mt-8 mb-9">
											<img src="/assets/imgs/services-details/icon-contact.svg" alt="infinia" />
											<div className="ms-3">
												<span className="text-white mb-0 fs-4">Contact Us</span>
												<h5 className="text-white d-block">+1(234)567890</h5>
											</div>
										</Link>
										<Link href="#" className="fw-bold btn text-start bg-white mb-3 fs-6 d-flex align-items-center justify-content-between text-primary hover-up w-100">
											<span>Get 15 Days Free Trial</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M17.4177 5.41772L16.3487 6.48681L21.1059 11.244H0V12.756H21.1059L16.3487 17.5132L17.4177 18.5822L24 12L17.4177 5.41772Z" fill="#6D4DF2" />
											</svg>
										</Link>
									</div>
									<img className="position-absolute top-0 end-0" src="/assets/imgs/services-details/bg-line-3.png" alt="infinia" />
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
											<h2 className="count ds-2 fw-bold text-primary my-0">+<span className="odometer" /> <CountUp end={50} enableScrollSpy={true} />  k</h2>
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

			</Layout>
		</>
	)
}