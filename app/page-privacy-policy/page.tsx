"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function PagePrivacyPolicy() {

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

	return (
		<>

			<Layout >

				{/* Section Privacy Policy */}
				<section className="section-privacy-policy section-padding">
					<div className="container">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Privacy Policy</span>
							</div>
							<h3 className="ds-3 my-3">Infinia System Privacy Policy</h3>
							<p className="fs-5">
								At Infinia System, we value your privacy and are committed to protecting your personal information. This <br className="d-none d-lg-block" />
								Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services.
							</p>
						</div>
						<div className="row pt-110">
							<div className="col-lg-8 col-md-10 mx-md-auto">
								<p>Infinia System ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, platform, and services (collectively, "Services"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Services.</p>
								<h5 className="mb-3 mt-4">Information We Collect</h5>
								<p>We may collect personal information that you provide directly to us, including but not limited to:</p>
								<ul>
									<li>Contact Information: Name, email address, phone number, and postal address.</li>
									<li>Account Information: Username, password, and other login details.</li>
									<li>Payment Information: Credit card details, billing address, and transaction history.</li>
									<li>Communication Information: Feedback, messages, and other communications with us.</li>
								</ul>
								<h5 className="mb-3 mt-4">Non-Personal Information</h5>
								<p>We may also collect non-personal information about your interactions with our Services, including but not limited to:</p>
								<ul>
									<li>Usage Data: IP address, browser type, operating system, access times, and pages viewed.</li>
									<li>Device Information: Device type, unique device identifiers, and mobile network information.</li>
									<li>Location Data: General location information based on IP address or GPS data (with your consent).</li>
								</ul>
								<h5 className="mb-3 mt-4">How We Use Your Information</h5>
								<p>We may use the information we collect for various purposes, including but not limited to:</p>
								<ul>
									<li>Providing, maintaining, and improving our Services.</li>
									<li>Processing transactions and managing billing.</li>
									<li>Communicating with you about your account and our Services.</li>
									<li>Responding to your inquiries and providing customer support.</li>
									<li>Analyzing usage patterns to enhance user experience.</li>
									<li>Sending marketing and promotional communications (with your consent).</li>
									<li>Complying with legal obligations and protecting our legal rights.</li>
								</ul>
								<p>Overall, Infinia System's commitment to enhancing user engagement through personalized experiences, optimized design, and proactive support transformed their user base and positioned them for continued growth and success.</p>
								<h5 className="mb-3 mt-4">How We Share Your Information</h5>
								<p>We may share your information in the following circumstances:</p>
								<ul>
									<li>Service Providers: With third-party vendors, consultants, and service providers who perform services on our behalf.</li>
									<li>Business Transfers: In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
									<li>Legal Requirements: To comply with legal obligations, enforce our terms of service, or protect our rights, privacy, safety, or property.</li>
									<li>Consent: With your consent or at your direction.</li>
								</ul>
								<h5 className="mb-3 mt-4">Data Security</h5>
								<p>We implement reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
								<h5 className="mb-3 mt-4">Your Rights and Choices</h5>
								<p>You have the following rights regarding your personal information:</p>
								<ul>
									<li>Access and Update: You can access and update your personal information through your account settings.</li>
									<li>Opt-Out: You can opt out of receiving marketing communications by following the unsubscribe instructions in those communications.</li>
									<li>Data Portability: You can request a copy of your personal information in a structured, machine-readable format.</li>
									<li>Deletion: You can request the deletion of your personal information, subject to certain exceptions prescribed by law.</li>
								</ul>
								<h5 className="mb-3 mt-4">Children's Privacy</h5>
								<p>Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.</p>
								<h5 className="mb-3 mt-4">Changes to This Privacy Policy</h5>
								<p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email (sent to the email address specified in your account) or by means of a notice on our Services prior to the change becoming effective. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.</p>
								<h4 className="text-primary">Contact Us</h4>
								<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
								<div className="row">
									<div className="col">
										<h6>Chat with us</h6>
										<p className="text-500">The support team is always available 24/7</p>
										<div className="d-flex mb-2">
											<img src="/assets/imgs/contact-2/icon-1.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Whatsapp</Link>
										</div>
										<div className="d-flex mb-2">
											<img src="/assets/imgs/contact-2/icon-2.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Viber</Link>
										</div>
										<div className="d-flex mb-2 mb-5">
											<img src="/assets/imgs/contact-2/icon-3.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Messager</Link>
										</div>
									</div>
									<div className="col">
										<h6>Send us an email</h6>
										<p className="text-500">Our team will respond promptly to your inquiries</p>
										<div className="d-flex mb-2">
											<img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">support@infinia.com</Link>
										</div>
										<div className="d-flex mb-2 mb-5">
											<img src="/assets/imgs/contact-2/icon-4.svg" alt="infinia" />
											<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">sale@infinia.com</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* prettier-ignore */}
				{/*Testimonial 3*/}
				<section className="section-testimonial-3 position-relative section-padding fix">
					<div className="container position-relative z-1">
						<div className="row pb-9">
							<div className="col-lg-7 mx-lg-auto">
								<div className="text-center mb-lg-0 mb-5">
									<div className="d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1">
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Testimonials</span>
									</div>
									<h5 className="ds-5 my-3 fw-regular">
										What <span className="fw-bold">People Say</span> About <br />
										<span className="fw-bold"> Our Company</span>
									</h5>
									<p className="fs-5 mb-0 text-900">
										Access top-tier group mentoring plans and exclusive professional <br className="d-none d-md-block" />
										benefits for your team. 🔥
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<Swiper
								{...swiperOptions}
								className="swiper slider-1 pt-2 pb-3"
								modules={[Keyboard, Autoplay, Pagination, Navigation]}
							>
								<div className="swiper-wrapper">
									{/* prettier-ignore */}
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">John Anderson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Automated reports</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Funnel optimization</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className="swiper-slide">
										<div className="bg-neutral-100 card-testimonial-3 p-5 rounded-3 position-relative">
											<div className="d-flex align-items-center mb-5">
												<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
												<div className="d-flex flex-column">
													<h6 className="ms-3 fs-6 mb-0">Integrations</h6>
													<div className="flag ms-3">
														<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
														<span className="fs-8">CEO of Tech Innovators Inc</span>
													</div>
												</div>
											</div>
											<p className="text-900 border-bottom pb-4 mb-4">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
											<div className="d-flex">
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<img src="/assets/imgs/hero-4/star-yellow.svg" alt="infinia" />
												<span className="fs-8 text-600 ms-2">(For services and support)</span>
											</div>
											<div className="position-absolute top-0 end-0 m-4">
												<svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none">
													<g clipPath="url(#clip0_551_13914)">
														<path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
														<path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
													</g>
													<defs>
														<clipPath>
															<rect width={52} height={52} fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</SwiperSlide>
								</div>
								<div className="swiper-pagination" />
								<div className="text-center mt-8 position-relative z-3" />
							</Swiper>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/service-2/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-1" />
				</section>

			</Layout>
		</>
	)
}