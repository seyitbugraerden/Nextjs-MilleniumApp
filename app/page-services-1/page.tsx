
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageServices1() {

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Our Services</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Our Services</p>
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
				{/*Services 1*/}
				<section className="section-padding">
					<div className="container">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">What we offers</span>
							</div>
							<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={300}>Explore Our Services</h3>
							<p data-aos="fade-zoom-in" data-aos-delay={100}>By doing a financial analysis of these statements, you can see <br /> whether you have enough working capital.</p>
						</div>
						<div className="row mt-6 position-relative">
							<div className="col-lg-4">
								<div className="p-2 mt-lg-8 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
									<div className="card-service bg-white p-6 border rounded-4">
										<img src="/assets/imgs/service-1/icon-1.svg" alt="infinia" />
										<h6 className="my-3">Research planning</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-2.svg" alt="infinia" />
										<h6 className="my-3">Strategy Lab</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-3.svg" alt="infinia" />
										<h6 className="my-3">Business Consultancy</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={100}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-4.svg" alt="infinia" />
										<h6 className="my-3">Business promotion</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="p-2 mt-lg-8 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up hover-up" data-aos="fade-zoom-in" data-aos-delay={200}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-5.svg" alt="infinia" />
										<h6 className="my-3">Finance Advisory </h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
								<div className="p-2 mt-5 rounded-4 shadow-1 bg-white position-relative z-1 hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
									<div className="card-service bg-white p-6 border rounded-3">
										<img src="/assets/imgs/service-1/icon-6.svg" alt="infinia" />
										<h6 className="my-3">Revenue generation</h6>
										<p className="mb-6">Separating your work from your home life can improve work-life balance and coworking spaces provide a dedicated place to work</p>
										<Link href="#" className="rounded-pill border icon-shape d-inline-flex gap-3 icon-learn-more">
											<svg className="plus" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<g clipPath="url(#clip0_226_5470)">
													<path className="fill-dark" d="M15.375 7.375H8.625V0.625C8.625 0.279813 8.34519 0 8 0C7.65481 0 7.375 0.279813 7.375 0.625V7.375H0.625C0.279813 7.375 0 7.65481 0 8C0 8.34519 0.279813 8.625 0.625 8.625H7.375V15.375C7.375 15.7202 7.65481 16 8 16C8.34519 16 8.625 15.7202 8.625 15.375V8.625H15.375C15.7202 8.625 16 8.34519 16 8C16 7.65481 15.7202 7.375 15.375 7.375Z" fill="#111827" />
												</g>
												<defs>
													<clipPath>
														<rect width={16} height={16} fill="white" />
													</clipPath>
												</defs>
											</svg>
											<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width={18} height={10} viewBox="0 0 18 10" fill="none">
												<path className="fill-dark" d="M13.0633 0.0634766L12.2615 0.86529L15.8294 4.43321H0V5.56716H15.8294L12.2615 9.13505L13.0633 9.93686L18 5.00015L13.0633 0.0634766Z" fill="#111827" />
											</svg>
											<span className="fw-bold fs-7 text-900">Learm More</span>
										</Link>
									</div>
								</div>
							</div>
							<div className="position-absolute top-50 start-50 translate-middle z-0">
								<img src="/assets/imgs/service-1/img-bg.png" alt="infinia" />
							</div>
						</div>
					</div>
				</section>
				{/*Logo cloud 5*/}
				<section className="section-logo-cloud section-logo-cloud-5 position-relative">
					<div className="container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-3 pb-lg-0 pb-8">
									<h4 className="text-nowrap">Loved By Developers <br />
										Trusted By Enterprises
									</h4>
									<p className="pt-2 pb-4">We helped these brands turn online assessments into success stories. </p>
									<Link href="#" className="shadow-1 btn text-start bg-white d-inline-block text-primary hover-up">
										View our partners
										<svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
											<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
										</svg>
									</Link>
								</div>
								<div className="col-lg-9 ps-lg-8">
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-1.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-2.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-4.svg" alt="infinia" />
									</div>
									<div className="bg-white py-4 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										{/* <img src="/assets/imgs/logo-cloud-3/logo-5.svg" alt="infinia"> */}
										<svg xmlns="http://www.w3.org/2000/svg" width={95} height={16} viewBox="0 0 95 16" fill="none">
											<path d="M50.3764 0.182129C45.952 0.182129 42.3623 3.63852 42.3623 7.90437C42.3623 12.4397 45.796 15.83 50.3764 15.83C54.8424 15.83 58.3686 12.3949 58.3686 7.99341C58.3686 3.61815 54.866 0.182129 50.3764 0.182129Z" fill="url(#paint0_linear_815_29731)" />
											<path className="fill-dark" d="M4.87963 0.463976H0.571289V15.4912H4.85722C7.13112 15.4912 8.77566 14.9523 10.2183 13.7573C11.93 12.3377 12.9452 10.1971 12.9452 7.98487C12.9452 3.54822 9.63081 0.463976 4.87963 0.463976ZM8.30604 11.7503C7.37961 12.5862 6.18694 12.9473 4.29158 12.9473H3.50423V3.00848H4.29158C6.18694 3.00848 7.33392 3.34687 8.30604 4.22471C9.31977 5.12613 9.9244 6.52189 9.9244 7.96334C9.9244 9.40769 9.31977 10.8523 8.30604 11.7503ZM14.2982 15.4912H17.2262V0.463976H14.2982V15.4912ZM24.3947 6.22831C22.635 5.57625 22.117 5.1462 22.117 4.3379C22.117 3.3908 23.0391 2.67037 24.3031 2.67037C25.1818 2.67037 25.9028 3.03059 26.6712 3.88428L28.2014 1.88214C26.9398 0.7756 25.4303 0.213163 23.7837 0.213163C21.1275 0.213163 19.098 2.06167 19.098 4.51539C19.098 6.59027 20.0436 7.64822 22.7935 8.64216C23.9434 9.04573 24.528 9.31488 24.8216 9.49877C25.4073 9.88197 25.7015 10.4208 25.7015 11.0514C25.7015 12.2699 24.7317 13.1699 23.4229 13.1699C22.0257 13.1699 20.9002 12.4722 20.2237 11.1654L18.3333 12.9927C19.6825 14.9727 21.3052 15.8543 23.5384 15.8543C26.5802 15.8543 28.7196 13.8237 28.7196 10.9178C28.7196 8.52898 27.7307 7.44658 24.3947 6.22831ZM29.6432 7.98487C29.6432 12.4061 33.1144 15.8302 37.5772 15.8302C38.8389 15.8302 39.9204 15.5808 41.2513 14.9523V11.5029C40.0778 12.6758 39.0411 13.1478 37.7111 13.1478C34.7598 13.1478 32.6628 11.0066 32.6628 7.96334C32.6628 5.08045 34.8253 2.80422 37.5772 2.80422C38.9721 2.80422 40.033 3.29973 41.2513 4.49386V1.04474C39.9669 0.393271 38.9061 0.125 37.6442 0.125C33.204 0.125 29.6432 3.61834 29.6432 7.98487ZM65.0005 10.5582L60.9893 0.463976H57.7892L64.1686 15.875H65.7448L72.2357 0.463976H69.0592L65.0005 10.5582ZM73.568 15.4912H81.8821V12.9473H76.4972V8.88832H81.6761V6.34382H76.4972V3.00848H81.8821V0.463976H73.568V15.4912ZM93.4844 4.89888C93.4844 2.08378 91.5491 0.463976 88.1669 0.463976H83.8173V15.4912H86.7496V9.45163H87.1334L91.1875 15.4912H94.7931L90.0579 9.16125C92.2696 8.70908 93.4844 7.19868 93.4844 4.89888ZM87.6025 7.38053H86.7496V2.82691H87.6493C89.4786 2.82691 90.4697 3.59535 90.4697 5.05775C90.4697 6.56641 89.4786 7.38053 87.6025 7.38053Z" fill="black" />
											<defs>
												<linearGradient id="paint0_linear_815_29731" x1="45.4698" y1="1.60032" x2="56.2854" y2="13.0234" gradientUnits="userSpaceOnUse">
													<stop offset={1} stopColor="#F34F26" />
													<stop offset={1} stopColor="#F69E35" />
												</linearGradient>
											</defs>
										</svg>
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-6.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-8.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-9.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-13.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-11.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-12.svg" alt="infinia" />
									</div>
									<div className="bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-7.svg" alt="infinia" />
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
					</div>
				</section>
				{/*Testimonial 2*/}
				<section className="section-testimonial-2 position-relative bg-white section-padding">
					<div className="container position-relative z-1">
						<div className="row pb-9">
							<div className="col-lg-7 mx-lg-auto">
								<div className="text-center mb-lg-0 mb-5">
									<h4 className="ds-4 my-3">
										+100k users <span className="fw-regular">have loved </span><br />
										Infinia Conference <span className="fw-regular">System</span>
									</h4>
									<p className="fs-5 mb-0">
										Provide your team with top-tier group mentoring <br className="d-none d-lg-block" />
										programs and exceptional professional benefits.
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={0}>
									<p className="text-900">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
												<span className="fs-8">CEO of Tech Innovators Inc</span>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={100}>
									<p className="text-900">Our experience with this team has surpassed our expectations on every front. <span className="fw-bold">The comprehensive suite of over 1200 UI blocks has enabled us to craft highly functional</span> and aesthetically pleasing user interfaces that resonate with our target audience. Equally impressive is the premium support team's proactive approach.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-4.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Emily Adams</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-4.png" alt="infinia" />
												<span className="fs-8">Software Engineer</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3" data-aos="fade-zoom-in" data-aos-delay={200}>
									<p className="text-900">The individual email account feature has improved internal communication clarity and professionalism. Moreover, the premium support team's responsiveness and expertise have ensured minimal <span className="fw-bold">disruptions and quick resolutions</span> to any technical challenges we've faced. I highly recommend their services for any enterprise seeking robust SaaS solutions,</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
												<span className="fs-8">Marketing Director</span>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={0}>
									<p className="text-900">The individual email account feature has improved internal communication clarity and professionalism. Moreover, the premium support team's responsiveness and expertise have ensured minimal <span className="fw-bold">disruptions and quick resolutions</span> to any technical challenges we've faced. I highly recommend their services for any enterprise seeking robust SaaS solutions,</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-3.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Sarah Thompson</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-3.png" alt="infinia" />
												<span className="fs-8">Marketing Director</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="bg-neutral-100 p-5 mt-5 mt-lg-0 rounded-3" data-aos="fade-zoom-in" data-aos-delay={100}>
									<p className="text-900">Our collaboration with the team has been instrumental in optimizing our project management processes. <span className="fw-bold">The extensive selection of over 1200 UI blocks has allowed us to customize our project interfaces to meet specific client needs effectively.</span> The generous 10 GB of cloud storage has provided ample space for storing project files securely, enabling seamless collaboration across distributed teams.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-2.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Emily Davis</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-2.png" alt="infinia" />
												<span className="fs-8">Software Engineer</span>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-neutral-100 p-5 mt-5 rounded-3" data-aos="fade-zoom-in" data-aos-delay={200}>
									<p className="text-900">The team's dedication and expertise have transformed our business. <span className="fw-bold">Their innovative solutions and outstanding support</span> have significantly boosted our productivity and client satisfaction. Allowing us to streamline our processes and focus on what matters most.</p>
									<div className="d-flex align-items-center mt-5">
										<img className="avatar-lg" src="/assets/imgs/testimonial-1/avatar-1.png" alt="infinia" />
										<div className="d-flex flex-column">
											<h6 className="ms-3 fs-6 mb-0">Kathryn Murphy</h6>
											<div className="flag ms-3">
												<img src="/assets/imgs/testimonial-1/flag-1.png" alt="infinia" />
												<span className="fs-8">CEO of Tech Innovators Inc</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-8 position-relative z-3">
						<Link href="#" className="btn btn-dark hover-up">
							View More Testimonials
							<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
								<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								<path className="stroke-white" d="M17 7L6.75 17.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Link>
					</div>
					<div className="mask-image-2 position-absolute top-50 bottom-0 start-0 end-0 z-1" />
				</section>
				{/* Newsletter 1 */}
				<section className="section-newsletter-1 pb-120 pt-120 fix position-relative">
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