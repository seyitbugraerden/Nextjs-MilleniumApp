
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from "react-fast-marquee"
export default function SectionLogoCloud() {

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Logo cloud</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Logo cloud</p>
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
				{/*Logo cloud 1*/}
				<div className="section-logo-cloud container-fluid mt-8 mt-lg-0 border-top border-bottom">
					<div className="container">
						<div className="row mask-image">
							{/* Carausel Scroll */}
							<div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
								<ul className="carouselTicker__list">
									<Marquee direction="right">
										<li className="carouselTicker__item">
											<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={101} height={34} viewBox="0 0 101 34" fill="none">
												<path className="fill-dark" d="M0.0283813 0.59375H21.9034V11.5312H10.9659L0.0283813 0.59375ZM0.0283813 11.5312H10.9659L21.9034 22.4688H0.0283813V11.5312ZM0.0283813 22.4688H10.9659V33.4062L0.0283813 22.4688Z" fill="#111827" />
												<path className="fill-dark" d="M34.246 9.22237H43.0883V12.0322H37.5927V15.9369H43.0883V18.6847H37.5927V23.6843H34.246V9.22237ZM44.9063 13.7261H48.0674V15.8128C48.2325 15.0957 48.5703 14.5453 49.0797 14.1599C49.6021 13.7601 50.1821 13.5609 50.8151 13.5609C51.1459 13.5609 51.4216 13.589 51.6413 13.6435V16.5774C51.326 16.5394 51.0088 16.5189 50.691 16.5154C49.8233 16.5154 49.1698 16.7971 48.7284 17.3621C48.2885 17.913 48.0674 18.7392 48.0674 19.8416V23.6843H44.9078V13.7261H44.9063ZM56.6314 23.953C55.6676 23.953 54.8269 23.7253 54.1108 23.2709C53.4083 22.8166 52.8498 22.1715 52.4995 21.4114C52.1277 20.6132 51.9405 19.71 51.9405 18.7052C51.9405 17.7134 52.1347 16.8176 52.52 16.0195C52.8813 15.2483 53.4548 14.5963 54.1729 14.1394C54.902 13.685 55.7357 13.4574 56.6729 13.4574C57.375 13.4574 58.0025 13.6095 58.553 13.9122C59.1034 14.216 59.5168 14.6293 59.7925 15.1517V13.7261H62.9326V23.6843H59.7925V22.2791C59.5168 22.775 59.0899 23.1809 58.5115 23.4981C57.933 23.8049 57.2864 23.961 56.6314 23.953ZM57.5407 21.3288C58.2978 21.3288 58.8833 21.0811 59.2966 20.5852C59.7099 20.0893 59.9166 19.4623 59.9166 18.7052C59.9166 17.9616 59.7099 17.3416 59.2966 16.8456C58.8833 16.3497 58.2978 16.102 57.5407 16.102C56.8236 16.102 56.2461 16.3427 55.8052 16.8251C55.3784 17.3075 55.1647 17.9335 55.1647 18.7052C55.1647 19.4768 55.3784 20.1098 55.8052 20.6057C56.2461 21.0881 56.8246 21.3288 57.5407 21.3288ZM65.1434 13.7261H68.3045V15.1723C68.5257 14.6618 68.883 14.2485 69.3784 13.9327C69.8888 13.617 70.4808 13.4574 71.1553 13.4574C72.7256 13.4574 73.766 14.0699 74.2749 15.2964C74.5552 14.7404 74.9935 14.2805 75.5355 13.9743C76.1149 13.6255 76.7805 13.4468 77.4565 13.4574C79.812 13.4574 80.9894 14.8065 80.9894 17.5067V23.6843H77.8078V18.0852C77.8078 17.4111 77.6837 16.9152 77.436 16.5979C77.1878 16.2817 76.816 16.1225 76.3201 16.1225C75.7832 16.1225 75.3698 16.3087 75.0806 16.6805C74.7914 17.0388 74.6467 17.6648 74.6467 18.5606V23.6843H71.4651V18.0646C71.4651 17.3901 71.3415 16.9007 71.0933 16.5979C70.8601 16.2817 70.4943 16.1225 69.9994 16.1225C69.4479 16.1225 69.0276 16.3087 68.7384 16.6805C68.4491 17.0388 68.3045 17.6648 68.3045 18.5606V23.6843H65.1444V13.7261H65.1434ZM92.8642 18.1887C92.8642 18.6151 92.8362 19.077 92.7801 19.5729H85.4266C85.4546 20.2204 85.6743 20.7153 86.0876 21.0606C86.501 21.4044 87.0599 21.577 87.761 21.577C88.7393 21.577 89.3593 21.2803 89.6206 20.6883H92.7196C92.5675 21.6666 92.0305 22.4578 91.1078 23.0643C90.199 23.6562 89.0831 23.953 87.761 23.953C86.0536 23.953 84.7105 23.4911 83.7322 22.5684C82.7684 21.6451 82.286 20.358 82.286 18.7052C82.286 17.6308 82.5062 16.701 82.9471 15.9159C83.3729 15.1317 84.0294 14.4972 84.8271 14.0979C85.6403 13.6715 86.5835 13.4574 87.6589 13.4574C88.6773 13.4574 89.579 13.657 90.3642 14.0568C91.1628 14.4567 91.7763 15.0141 92.2027 15.7302C92.644 16.4473 92.8642 17.2665 92.8642 18.1887ZM89.7431 17.6103C89.7296 16.9492 89.544 16.4458 89.1852 16.102C88.8279 15.7582 88.3105 15.5856 87.6359 15.5856C86.9614 15.5856 86.4244 15.7713 86.0246 16.1436C85.6393 16.5019 85.4396 16.9903 85.4251 17.6103H89.7431ZM94.2579 13.7261H97.419V15.8128C97.5841 15.0957 97.9219 14.5453 98.4313 14.1599C98.9257 13.7706 99.5372 13.5594 100.167 13.5609C100.497 13.5609 100.773 13.589 100.993 13.6435V16.5774C100.678 16.5394 100.36 16.5189 100.043 16.5154C99.1749 16.5154 98.5214 16.7971 98.08 17.3621C97.6386 17.913 97.419 18.7392 97.419 19.8416V23.6843H94.2579V13.7261Z" fill="#111827" />
											</svg>
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud/logo-2.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud/logo-3.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud/logo-4.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											{/* <img src="/assets/imgs/logo-cloud/logo-5.png" alt="infinia"> */}
											<svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width={95} height={16} viewBox="0 0 95 16" fill="none">
												<path d="M50.2795 0.182373C45.8551 0.182373 42.2654 3.63876 42.2654 7.90461C42.2654 12.4399 45.6991 15.8302 50.2795 15.8302C54.7456 15.8302 58.2718 12.3951 58.2718 7.99365C58.2718 3.61839 54.7691 0.182373 50.2795 0.182373Z" fill="url(#paint0_linear_815_25436)" />
												<path className="fill-dark" d="M4.7827 0.463976H0.474365V15.4912H4.7603C7.0342 15.4912 8.67874 14.9523 10.1213 13.7573C11.8331 12.3377 12.8483 10.1971 12.8483 7.98487C12.8483 3.54822 9.53389 0.463976 4.7827 0.463976ZM8.20912 11.7503C7.28268 12.5862 6.09001 12.9473 4.19466 12.9473H3.4073V3.00848H4.19466C6.09001 3.00848 7.237 3.34687 8.20912 4.22471C9.22285 5.12613 9.82747 6.52189 9.82747 7.96334C9.82747 9.40769 9.22285 10.8523 8.20912 11.7503ZM14.2013 15.4912H17.1293V0.463976H14.2013V15.4912ZM24.2978 6.22831C22.538 5.57625 22.0201 5.1462 22.0201 4.3379C22.0201 3.3908 22.9422 2.67037 24.2061 2.67037C25.0849 2.67037 25.8059 3.03059 26.5743 3.88428L28.1045 1.88214C26.8429 0.7756 25.3334 0.213163 23.6868 0.213163C21.0305 0.213163 19.0011 2.06167 19.0011 4.51539C19.0011 6.59027 19.9467 7.64822 22.6966 8.64216C23.8465 9.04573 24.4311 9.31488 24.7246 9.49877C25.3104 9.88197 25.6045 10.4208 25.6045 11.0514C25.6045 12.2699 24.6347 13.1699 23.326 13.1699C21.9288 13.1699 20.8033 12.4722 20.1268 11.1654L18.2364 12.9927C19.5856 14.9727 21.2083 15.8543 23.4415 15.8543C26.4832 15.8543 28.6227 13.8237 28.6227 10.9178C28.6227 8.52898 27.6337 7.44658 24.2978 6.22831ZM29.5462 7.98487C29.5462 12.4061 33.0175 15.8302 37.4803 15.8302C38.7419 15.8302 39.8235 15.5808 41.1543 14.9523V11.5029C39.9809 12.6758 38.9442 13.1478 37.6142 13.1478C34.6629 13.1478 32.5659 11.0066 32.5659 7.96334C32.5659 5.08045 34.7284 2.80422 37.4803 2.80422C38.8752 2.80422 39.9361 3.29973 41.1543 4.49386V1.04474C39.87 0.393271 38.8092 0.125 37.5472 0.125C33.1071 0.125 29.5462 3.61834 29.5462 7.98487ZM64.9036 10.5582L60.8923 0.463976H57.6923L64.0717 15.875H65.6479L72.1387 0.463976H68.9623L64.9036 10.5582ZM73.4711 15.4912H81.7852V12.9473H76.4002V8.88832H81.5791V6.34382H76.4002V3.00848H81.7852V0.463976H73.4711V15.4912ZM93.3874 4.89888C93.3874 2.08378 91.4522 0.463976 88.07 0.463976H83.7204V15.4912H86.6527V9.45163H87.0365L91.0905 15.4912H94.6962L89.961 9.16125C92.1726 8.70908 93.3874 7.19868 93.3874 4.89888ZM87.5055 7.38053H86.6527V2.82691H87.5524C89.3817 2.82691 90.3727 3.59535 90.3727 5.05775C90.3727 6.56641 89.3817 7.38053 87.5055 7.38053Z" fill="black" />
												<defs>
													<linearGradient x1="45.373" y1="1.60057" x2="56.1885" y2="13.0236" gradientUnits="userSpaceOnUse">
														<stop offset={1} stopColor="#F34F26" />
														<stop offset={1} stopColor="#F69E35" />
													</linearGradient>
												</defs>
											</svg>
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud/logo-6.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud/logo-7.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud/logo-4.png" alt="infinia" />
										</li>
									</Marquee>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/*Logo cloud 2*/}
				<div className="section-logo-cloud container-fluid bg-dark-1 py-86 border-top border-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="border-linear-dark-2 rounded-pill d-inline-block mb-3">
									<div className="text-primary bg-dark-1 px-4 py-2 rounded-pill">Trusted by great companies</div>
								</div>
								<h1 className="ds-xs-4 fw-regular m-0 text-white opacity-50">We always evaluate our skills</h1>
								<h1 className="fs-1 text-white m-0" data-aos="fade-zoom-in" data-aos-delay={200}>through our performance</h1>
							</div>
							<div className="col-lg-6">
								{/* Carausel Scroll */}
								<div className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
									<ul className="carouselTicker__list">
										<Marquee>
											<li className="carouselTicker__item">
												<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-1.png" alt="infinia" />
											</li>
											<li className="carouselTicker__item">
												<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-2.png" alt="infinia" />
											</li>
											<li className="carouselTicker__item">
												<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-3.png" alt="infinia" />
											</li>
											<li className="carouselTicker__item">
												<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-4.png" alt="infinia" />
											</li>
										</Marquee>
									</ul>
								</div>
								<div className="carouselTicker carouselTicker-right mt-6 position-relative z-1">
									<ul className="carouselTicker__list">
										<Marquee direction="right">
											<li className="carouselTicker__item">
												<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-5.png" alt="infinia" />
											</li>
											<li className="carouselTicker__item">
												<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-6.png" alt="infinia" />
											</li>
											<li className="carouselTicker__item">
												<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-7.png" alt="infinia" />
											</li>
										</Marquee>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*Logo cloud 3*/}
				<div className="section-logo-cloud container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
					<div className="container">
						<h5 className="text-500 mb-5 text-center">Trusted by great companies</h5>
						<div className="carouselTicker carouselTicker-right">
							<ul className="carouselTicker__list pb-4">
								<Marquee direction="right">
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-1.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-2.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-4.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width={95} height={16} viewBox="0 0 95 16" fill="none">
											<path d="M50.2795 0.182373C45.8551 0.182373 42.2654 3.63876 42.2654 7.90461C42.2654 12.4399 45.6991 15.8302 50.2795 15.8302C54.7456 15.8302 58.2718 12.3951 58.2718 7.99365C58.2718 3.61839 54.7691 0.182373 50.2795 0.182373Z" fill="url(#paint0_linear_815_25436)" />
											<path className="fill-dark" d="M4.7827 0.463976H0.474365V15.4912H4.7603C7.0342 15.4912 8.67874 14.9523 10.1213 13.7573C11.8331 12.3377 12.8483 10.1971 12.8483 7.98487C12.8483 3.54822 9.53389 0.463976 4.7827 0.463976ZM8.20912 11.7503C7.28268 12.5862 6.09001 12.9473 4.19466 12.9473H3.4073V3.00848H4.19466C6.09001 3.00848 7.237 3.34687 8.20912 4.22471C9.22285 5.12613 9.82747 6.52189 9.82747 7.96334C9.82747 9.40769 9.22285 10.8523 8.20912 11.7503ZM14.2013 15.4912H17.1293V0.463976H14.2013V15.4912ZM24.2978 6.22831C22.538 5.57625 22.0201 5.1462 22.0201 4.3379C22.0201 3.3908 22.9422 2.67037 24.2061 2.67037C25.0849 2.67037 25.8059 3.03059 26.5743 3.88428L28.1045 1.88214C26.8429 0.7756 25.3334 0.213163 23.6868 0.213163C21.0305 0.213163 19.0011 2.06167 19.0011 4.51539C19.0011 6.59027 19.9467 7.64822 22.6966 8.64216C23.8465 9.04573 24.4311 9.31488 24.7246 9.49877C25.3104 9.88197 25.6045 10.4208 25.6045 11.0514C25.6045 12.2699 24.6347 13.1699 23.326 13.1699C21.9288 13.1699 20.8033 12.4722 20.1268 11.1654L18.2364 12.9927C19.5856 14.9727 21.2083 15.8543 23.4415 15.8543C26.4832 15.8543 28.6227 13.8237 28.6227 10.9178C28.6227 8.52898 27.6337 7.44658 24.2978 6.22831ZM29.5462 7.98487C29.5462 12.4061 33.0175 15.8302 37.4803 15.8302C38.7419 15.8302 39.8235 15.5808 41.1543 14.9523V11.5029C39.9809 12.6758 38.9442 13.1478 37.6142 13.1478C34.6629 13.1478 32.5659 11.0066 32.5659 7.96334C32.5659 5.08045 34.7284 2.80422 37.4803 2.80422C38.8752 2.80422 39.9361 3.29973 41.1543 4.49386V1.04474C39.87 0.393271 38.8092 0.125 37.5472 0.125C33.1071 0.125 29.5462 3.61834 29.5462 7.98487ZM64.9036 10.5582L60.8923 0.463976H57.6923L64.0717 15.875H65.6479L72.1387 0.463976H68.9623L64.9036 10.5582ZM73.4711 15.4912H81.7852V12.9473H76.4002V8.88832H81.5791V6.34382H76.4002V3.00848H81.7852V0.463976H73.4711V15.4912ZM93.3874 4.89888C93.3874 2.08378 91.4522 0.463976 88.07 0.463976H83.7204V15.4912H86.6527V9.45163H87.0365L91.0905 15.4912H94.6962L89.961 9.16125C92.1726 8.70908 93.3874 7.19868 93.3874 4.89888ZM87.5055 7.38053H86.6527V2.82691H87.5524C89.3817 2.82691 90.3727 3.59535 90.3727 5.05775C90.3727 6.56641 89.3817 7.38053 87.5055 7.38053Z" fill="black" />
											<defs>
												<linearGradient x1="45.373" y1="1.60057" x2="56.1885" y2="13.0236" gradientUnits="userSpaceOnUse">
													<stop offset={1} stopColor="#F34F26" />
													<stop offset={1} stopColor="#F69E35" />
												</linearGradient>
											</defs>
										</svg>
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-6.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
										<img src="/assets/imgs/logo-cloud-3/logo-7.svg" alt="infinia" />
									</li>
								</Marquee>
							</ul>
						</div>
						<div className="row">
							<div className="col-lg-10 mx-lg-auto">
								<div className="carouselTicker carouselTicker-left">
									<ul className="carouselTicker__list pb-4">
										<Marquee>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-8.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-9.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-10.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img src="/assets/imgs/logo-cloud-3/logo-11.svg" alt="infinia" />
											</li>
											<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
												<img className="filter-invert" src="/assets/imgs/logo-cloud-3/logo-12.svg" alt="infinia" />
											</li>
										</Marquee>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*Logo cloud 4*/}
				<div className="container-fluid mt-8 mt-lg-0 bg-4">
					<div className="container">
						<div className="row">
							{/* Carausel Scroll */}
							<div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
								<ul className="carouselTicker__list">
									<Marquee direction="right">
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud-4/logo-1.svg" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud-4/logo-2.svg" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud-4/logo-3.svg" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud-4/logo-4.svg" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud-4/logo-5.svg" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img src="/assets/imgs/logo-cloud-4/logo-6.svg" alt="infinia" />
										</li>
									</Marquee>
								</ul>
							</div>
						</div>
					</div>
				</div>
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


			</Layout>
		</>
	)
}