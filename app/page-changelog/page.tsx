
import Layout from "@/components/layout/Layout"
import Marquee from "react-fast-marquee"
export default function PageChangelog() {

	return (
		<>

			<Layout >

				{/* Section Changelog */}
				<section className="section-page-changelog section-padding">
					<div className="container">
						<div className="text-center">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Changelog</span>
							</div>
							<h3 className="ds-3 my-3">Latest updates and changes</h3>
							<p className="fs-5">
								Each entry should follow this format for consistency and readability. Ensure that you regularly <br />
								update this page with the latest changes to keep users informed.
							</p>
						</div>
						<div className="row pt-120">
							<div className="col">
								<ul className="timeline">
									<li className="timeline-item d-flex flex-lg-row flex-column">
										<div className="pe-lg-7">
											<h6>[Version 2.3.0] - 2024-07-10</h6>
											<p className="fw-bold text-900">New Features</p>
											<ul>
												<li>Dashboard Redesign: We've completely revamped the user dashboard for a more intuitive and streamlined experience.</li>
												<li>User Profiles: Enhanced profile customization options and added new privacy settings.</li>
												<li>Search Functionality: Improved search algorithm for more accurate and faster results.</li>
											</ul>
											<p className="fw-bold text-900">Improvements</p>
											<ul>
												<li>Performance Enhancements: Optimized database queries to improve load times by up to 30%.</li>
												<li>Real-time Notifications: Users can now receive real-time notifications for important updates and alerts.</li>
												<li>Multi-language Support: Added support for French, German, and Spanish.</li>
											</ul>
										</div>
										<img className="rounded-3 mt-lg-0 mt-4" src="/assets/imgs/changelog/img-1.png" alt="infinia" />
									</li>
									<li className="timeline-item pt-120 d-flex flex-lg-row flex-column">
										<div className="pe-lg-7">
											<h6>[Version 2.2.1] - 2024-06-20</h6>
											<p className="fw-bold text-900">New Features</p>
											<ul>
												<li>Security Update: Implemented additional security measures to protect user data.</li>
												<li>Mobile App: Improved performance and stability of the mobile app.</li>
											</ul>
											<p className="fw-bold text-900">Bug Fixes</p>
											<ul>
												<li>Password Reset: Fixed an issue where password reset emails were not being sent.</li>
												<li>Report Generation: Resolved a bug that caused report generation to fail under certain conditions.</li>
											</ul>
										</div>
										<img className="rounded-3 mt-lg-0 mt-4" src="/assets/imgs/changelog/img-2.png" alt="infinia" />
									</li>
									<li className="timeline-item pt-120 d-flex flex-lg-row flex-column">
										<div className="pe-lg-7">
											<h6>[Version 2.2.0] - 2024-06-05</h6>
											<p className="fw-bold text-900">New Features</p>
											<ul>
												<li>Advanced Analytics: Introduced new analytics dashboards for more in-depth data insights.</li>
												<li>Integration with Third-Party Services: Added support for integration with popular third-party services like Zapier and Slack.</li>
											</ul>
											<p className="fw-bold text-900">Improvements</p>
											<ul>
												<li>Data Export: Fixed an issue where data exports were not including all selected fields.</li>
												<li>Notification Settings: Resolved a problem where notification settings were not being saved correctly.</li>
											</ul>
										</div>
										<img className="rounded-3 mt-lg-0 mt-4" src="/assets/imgs/changelog/img-3.png" alt="infinia" />
									</li>
									<li className="timeline-item pt-120 d-flex flex-lg-row flex-column">
										<div className="pe-lg-7">
											<h6>[Version 2.1.0] - 2024-05-15</h6>
											<p className="fw-bold text-900">New Features</p>
											<ul>
												<li>Team Collaboration Tools: Added new tools to facilitate better team collaboration and communication.</li>
												<li>Custom Reports: Users can now create and save custom reports.</li>
											</ul>
											<p className="fw-bold text-900">Bug Fixes</p>
											<ul>
												<li>Billing Issues: Fixed a bug causing incorrect billing calculations for some users.</li>
												<li>Session Timeout: Addressed an issue where sessions were timing out prematurely.</li>
											</ul>
										</div>
										<img className="rounded-3 mt-lg-0 mt-4" src="/assets/imgs/changelog/img-4.png" alt="infinia" />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				{/* prettier-ignore */}
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

			</Layout>
		</>
	)
}