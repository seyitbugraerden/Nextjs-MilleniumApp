"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function PageTermsConditions() {

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

				<section className="section-terms-conditions section-padding">
					<div className="container">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Terms and Conditions</span>
							</div>
							<h3 className="ds-3 my-3">Terms and Conditions</h3>
							<p className="fs-5 mb-0">
								Welcome to Infinia System. These Terms and Conditions ("Terms") govern your use of our website, <br className="d-none d-lg-block" />
								platform, and services (collectively, "Services"). By accessing or using our Services, you agree to be <br className="d-none d-lg-block" />
								bound by these Terms. If you do not agree with these Terms, please do not use our Services.
							</p>
						</div>
						<div className="row pt-110">
							<div className="col-lg-8 col-md-10 mx-md-auto">
								<h4 className="text-primary">Use of Services</h4>
								<h5 className="my-3">Eligibility</h5>
								<p>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement.</p>
								<h5 className="mb-3 mt-4">Account Registration</h5>
								<p>To access certain features of our Services, you may be required to create an account. You agree to:</p>
								<ul>
									<li>Provide accurate, current, and complete information during the registration process.</li>
									<li>Maintain and promptly update your account information to keep it accurate, current, and complete.</li>
									<li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
									<li>Notify us immediately if you discover or suspect any security breaches related to your account.</li>
								</ul>
								<h5 className="mb-3 mt-4">Prohibited Conduct</h5>
								<p>You agree not to:</p>
								<ul>
									<li>Use our Services for any illegal or unauthorized purpose.</li>
									<li>Violate any laws, rules, or regulations in connection with your use of our Services.</li>
									<li>Interfere with or disrupt the operation of our Services.</li>
									<li>Impersonate any person or entity, or falsely state or otherwise misrepresent yourself.</li>
									<li>Engage in any activity that could harm or damage our Services, reputation, or users.</li>
								</ul>
								<h4 className="text-primary mt-4">Intellectual Property</h4>
								<h5 className="my-3">Ownership</h5>
								<p>All content and materials provided through our Services, including but not limited to text, graphics, logos, images, and software, are the property of Infinia System or our licensors and are protected by intellectual property laws.</p>
								<h5 className="mb-3 mt-4">License</h5>
								<p>We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for personal and commercial purposes in accordance with these Terms. You may not:</p>
								<ul>
									<li>Copy, modify, distribute, sell, or lease any part of our Services.</li>
									<li>Reverse engineer or attempt to extract the source code of our software.</li>
								</ul>
								<h4 className="text-primary mt-4">User Content</h4>
								<h5 className="my-3">Submissions</h5>
								<p>By submitting any content to our Services, you grant us a worldwide, perpetual, irrevocable, non-exclusive, royalty-free, fully paid, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with our Services and our business.</p>
								<h5 className="mb-3 mt-4">Responsibility</h5>
								<p>You are solely responsible for the content you submit and the consequences of sharing it. You represent and warrant that you have all necessary rights to submit the content and that it does not infringe or violate any third-party rights or any laws.</p>
								<h4 className="text-primary mt-4">Payment and Billing</h4>
								<h5 className="my-3">Fees</h5>
								<p>Certain features of our Services may be subject to fees. You agree to pay all applicable fees in connection with your use of our Services. We reserve the right to change our fees at any time, with notice to you if required by applicable law.</p>
								<h5 className="my-3">Billing</h5>
								<p>You authorize us to charge your designated payment method for the fees due. If we are unable to process your payment, we may suspend or terminate your access to the Services.</p>
								<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
								<h5 className="mb-3 mt-4">Termination</h5>
								<p>We may terminate or suspend your access to our Services, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our Services will immediately cease.</p>
								<h4 className="text-primary mt-4">Disclaimers and Limitation of Liability</h4>
								<h5 className="my-3">Disclaimers</h5>
								<p>Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, and course of dealing or performance.</p>
								<h5 className="mb-3 mt-4">Limitation of Liability</h5>
								<p>To the maximum extent permitted by law, Infinia System and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:</p>
								<ul>
									<li>Your use or inability to use our Services.</li>
									<li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
									<li>Any interruption or cessation of transmission to or from our Services.</li>
								</ul>
								<h5 className="mb-3 mt-4">Indemnification</h5>
								<p>You agree to defend, indemnify, and hold harmless Infinia System and its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:</p>
								<ul>
									<li>Your use of and access to the Services.</li>
									<li>Your violation of any term of these Terms.</li>
									<li>Your violation of any third-party right, including without limitation any intellectual property, property, or privacy right.</li>
									<li>Any claim that your content caused damage to a third party.</li>
								</ul>
								<h5 className="mb-3 mt-4">Governing Law</h5>
								<p>These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the personal jurisdiction of the courts located in [Your Jurisdiction] for the purpose of litigating all such claims or disputes.</p>
								<h5 className="mb-3 mt-4">Changes to Terms</h5>
								<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.</p>
								<h4 className="text-primary mt-4">Contact Us</h4>
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
							<Swiper {...swiperOptions}
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