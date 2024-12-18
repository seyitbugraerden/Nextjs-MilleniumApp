
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SectionNavigation() {

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Navigation</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Navigation</p>
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
				<div className="pb-120 border-top" />
				{/* Navbar */}
				<header>
					<nav className="navbar navbar-expand-lg @@classList z-999">
						<div className="container">
							<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
								<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
								<span>Infinia</span>
							</Link>
							<div className="d-none d-lg-flex">
								<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Home
										</Link>
										<div className="dropdown-menu fix">
											<ul className="list-unstyled">
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M16.1143 9.19978H12.8916V2.14741C12.8916 1.99512 12.7913 1.86072 12.6452 1.81775C12.4977 1.77478 12.3416 1.83287 12.2591 1.96075L5.59417 12.2801C5.52577 12.386 5.52061 12.5204 5.58111 12.6311C5.64127 12.7414 5.75711 12.8102 5.88292 12.8102H9.10558V19.8522C9.10558 20.0045 9.20596 20.1389 9.35205 20.1819C9.38436 20.1912 9.41702 20.196 9.44933 20.196C9.5638 20.196 9.67346 20.1386 9.73808 20.0389L16.403 9.72984C16.4715 9.62397 16.4766 9.48956 16.4161 9.37887C16.356 9.26853 16.2401 9.19978 16.1143 9.19978Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.1</span>
															<span className="text-600 fs-7">Business Startup</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-2">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3205 8.75C16.752 8.457 17 7.991 17 7.5C17 7.009 16.752 6.543 16.3205 6.25C15.016 5.365 13.004 4 11.961 3.2915C11.3905 2.9045 10.6095 2.9045 10.039 3.2915C8.996 4 6.984 5.365 5.6795 6.25C5.248 6.543 5 7.009 5 7.5C5 7.991 5.248 8.457 5.6795 8.75C6.984 9.635 8.996 11 10.039 11.7085C10.6095 12.0955 11.3905 12.0955 11.961 11.7085L16.3205 8.75Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 9.8605L9.4775 12.5355C10.3815 13.149 11.6185 13.149 12.5225 12.5355L16.465 9.8605C16.807 10.153 17 10.5665 17 11C17 11.491 16.752 11.957 16.3205 12.25C15.016 13.135 13.004 14.5 11.961 15.2085C11.3905 15.5955 10.6095 15.5955 10.039 15.2085C8.996 14.5 6.984 13.135 5.6795 12.25C5.248 11.957 5 11.491 5 11C5 10.5665 5.193 10.153 5.535 9.8605Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 13.3605L9.4775 16.0355C10.3815 16.649 11.6185 16.649 12.5225 16.0355L16.465 13.3605C16.807 13.653 17 14.0665 17 14.5C17 14.991 16.752 15.457 16.3205 15.75C15.016 16.635 13.004 18 11.961 18.7085C11.3905 19.0955 10.6095 19.0955 10.039 18.7085C8.996 18 6.984 16.635 5.6795 15.75C5.248 15.457 5 14.991 5 14.5C5 14.0665 5.193 13.653 5.535 13.3605Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.2</span>
															<span className="text-600 fs-7">Application Landing</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-3">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M19.3734 10.5591L16.8746 9.84501C15.7493 9.52775 14.7242 8.92703 13.8975 8.10031C13.0708 7.27359 12.4701 6.24855 12.1528 5.12326L11.4387 2.62442C11.4028 2.537 11.3417 2.46222 11.2632 2.40959C11.1847 2.35697 11.0923 2.32887 10.9978 2.32887C10.9033 2.32887 10.8109 2.35697 10.7324 2.40959C10.6539 2.46222 10.5928 2.537 10.5569 2.62442L9.84283 5.12326C9.52558 6.24855 8.92486 7.27359 8.09814 8.10031C7.27142 8.92703 6.24637 9.52775 5.12108 9.84501L2.62225 10.5591C2.5263 10.5863 2.44186 10.6441 2.38173 10.7237C2.3216 10.8033 2.28906 10.9003 2.28906 11C2.28906 11.0997 2.3216 11.1968 2.38173 11.2763C2.44186 11.3559 2.5263 11.4137 2.62225 11.4409L5.12108 12.155C6.24637 12.4723 7.27142 13.073 8.09814 13.8997C8.92486 14.7264 9.52558 15.7515 9.84283 16.8768L10.5569 19.3756C10.5841 19.4715 10.6419 19.556 10.7215 19.6161C10.8011 19.6762 10.8981 19.7088 10.9978 19.7088C11.0976 19.7088 11.1946 19.6762 11.2742 19.6161C11.3537 19.556 11.4115 19.4715 11.4387 19.3756L12.1528 16.8768C12.4701 15.7515 13.0708 14.7264 13.8975 13.8997C14.7242 13.073 15.7493 12.4723 16.8746 12.155L19.3734 11.4409C19.4694 11.4137 19.5538 11.3559 19.6139 11.2763C19.6741 11.1968 19.7066 11.0997 19.7066 11C19.7066 10.9003 19.6741 10.8033 19.6139 10.7237C19.5538 10.6441 19.4694 10.5863 19.3734 10.5591Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.3</span>
															<span className="text-600 fs-7">Marketing Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-4">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M10.9965 2.80334L13.3633 4.90828C13.5282 5.05379 14.3915 5.8201 13.8095 6.98412C13.2275 8.14814 10.9965 11.8827 10.9965 11.8827C10.9965 11.8827 8.76543 8.14814 8.18342 6.98412C7.60141 5.8201 8.46472 5.05379 8.62962 4.90828L10.9965 2.80334Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M19.6235 9.05026L18.3624 11.9603C18.2751 12.164 17.8192 13.2213 16.5291 13.0273C15.239 12.8333 11 11.8827 11 11.8827C11 11.8827 13.8519 8.60405 14.7734 7.68253C15.6949 6.76101 16.694 7.34302 16.888 7.45943L19.6235 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M2.375 9.05026L3.63602 11.9603C3.72332 12.164 4.17923 13.2213 5.46936 13.0273C6.75948 12.8333 10.9985 11.8827 10.9985 11.8827C10.9985 11.8827 8.14661 8.59435 7.21539 7.68253C6.29387 6.76101 5.29475 7.34302 5.10075 7.45943L2.375 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.62164 19.1966L8.7742 18.9056C8.9973 18.8862 10.1419 18.7795 10.365 17.4991C10.5784 16.209 10.9955 11.8827 10.9955 11.8827C10.9955 11.8827 6.98936 13.5705 5.82534 14.1622C4.66132 14.754 4.90383 15.8792 4.95233 16.1023L5.62164 19.1966Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3661 19.1966L13.2135 18.9056C12.9904 18.8862 11.8458 18.7795 11.6227 17.4991C11.4093 16.209 10.9922 11.8827 10.9922 11.8827C10.9922 11.8827 14.9984 13.5705 16.1624 14.1622C17.3264 14.754 17.0839 15.8792 17.0354 16.1023L16.3661 19.1966Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.4</span>
															<span className="text-600 fs-7">IT Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-5">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={18} height={17} viewBox="0 0 18 17" fill="none">
															<path d="M3.25295 4.15876C3.1292 4.13693 3.00309 4.12589 2.87813 4.12589C1.83455 4.12589 0.945478 4.87264 0.764063 5.90149L0.0328612 10.0485C-0.172874 11.2151 0.608946 12.3316 1.77559 12.5374C1.89935 12.5592 2.02546 12.5702 2.15041 12.5702C3.19391 12.5702 4.08307 11.8234 4.26448 10.7946L4.99573 6.64764C5.20138 5.48095 4.4196 4.36449 3.25295 4.15876Z" fill="#A38CFF" />
															<path d="M9.24512 2.25455C9.12137 2.23272 8.99525 2.22168 8.8703 2.22168C7.82676 2.22168 6.93764 2.96844 6.75627 3.99728L5.35351 11.9527C5.25386 12.5178 5.38028 13.088 5.70942 13.5581C6.03856 14.0281 6.53111 14.3419 7.09624 14.4416C7.21999 14.4634 7.34611 14.4745 7.47106 14.4745C8.5146 14.4745 9.40372 13.7277 9.58513 12.6989L10.9879 4.74344C11.1936 3.57675 10.4118 2.46029 9.24512 2.25455Z" fill="#A38CFF" />
															<path d="M16.6264 0.916441C16.2972 0.446361 15.8047 0.132602 15.2396 0.0329143C15.1158 0.0110861 14.9896 0 14.8646 0C13.8211 0 12.9321 0.746757 12.7507 1.77565L10.5644 14.1742C10.4648 14.7394 10.5912 15.3095 10.9204 15.7796C11.2495 16.2496 11.7421 16.5634 12.3071 16.6631C12.4309 16.685 12.557 16.696 12.682 16.696C13.7256 16.696 14.6147 15.9492 14.7961 14.9204L16.9823 2.5218C17.0819 1.95668 16.9556 1.38652 16.6264 0.916441Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.5</span>
															<span className="text-600 fs-7">Consulting Services</span>
														</span>
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Pages
										</Link>
										<div className="mega-menu fix start-50 translate-middle-x">
											<div className="container">
												<div className="row">
													<div className="col-12">
														<div className="mega-menu-content">
															<div className="row">
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">ABOUT US</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about">About us v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-2">About us v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-3">About us v.3</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">SERVICES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-1">Services v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-2">Services v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-3">Services v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-1">Services details v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-2">Services details v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">OUR TEAM</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-1">Our team v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-2">Our team v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-3">Our team v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-4">Our team v.4</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-5">Our team v.5</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-6">Our team v.6</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-1">Team detail v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-2">Team detail v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">FEATURES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-1">Features v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-2">Features v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">PRICING</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-01">Pricing v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-02">Pricing v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CONTACT</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-1">Contact v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-2">Contact v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-3">Contact v.3</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">BLOG</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-1">Blog v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-2">Blog v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-details">Blog details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CASE STUDY</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study">Case Study</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study-details">Case study details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">AUTHENTICATION</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-register">Register</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-login">Sign in</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">UTILITIES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-work-process">Work Process</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-book-a-demo">Book a demo</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-integration">Integration</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-changelog">Change log</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-privacy-policy">Privacy policy</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-terms-conditions">Terms conditions</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-comming-soon">Comming soon</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-404">Error 404</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-style-guide">Color  Typography</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-elements">Basic elements</Link></li>
																		</ul>
																	</div>
																	<div className="position-relative bg-4 rounded-3 mt-5">
																		<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
																		<div className="position-absolute top-50 start-50 translate-middle z-0">
																			<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="infinia" />
																			<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
																			<div className="d-flex mt-3 ms-3">
																				<img src="/assets/imgs/other/avatar-1.png" alt="infinia" />
																				<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="infinia" />
																				<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="infinia" />
																			</div>
																			<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																				Get this now
																				<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																					<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																					<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																				</svg>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="position-absolute top-0 start-50 translate-middle-x z-0">
												<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu-2">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Sections
										</Link>
										<div className="mega-menu fix">
											<div className="d-flex flex-wrap gap-2 position-relative z-1">
												<Link href="/section-navigation" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Navigation
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														09
													</span>
												</Link>
												<Link href="/section-hero" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Hero
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-logo-cloud" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Logo cloud
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-cta" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Call to action
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														15
													</span>
												</Link>
												<Link href="/section-how-it-work" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													How it work
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-services" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Services
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-team" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Team
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														07
													</span>
												</Link>
												<Link href="/section-pricing" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Pricing
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-faqs" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													FAQS
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-testimonial" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Testimonials
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-blog" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Blog
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-newsletter" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Newsletter
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-footer" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Footer
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-features" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Features
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														13
													</span>
												</Link>
												<Link href="/section-projects" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Projects
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-contact" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Contact
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														06
													</span>
												</Link>
												<Link href="/section-static" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Static
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
											</div>
											<div className="position-absolute bottom-0 end-0 z-0">
												<img src="/assets/imgs/other/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Style Guide
										</Link>
										<div className="dropdown-menu p-4 fix">
											<ul className="list-unstyled">
												<li className="position-relative border-bottom z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-style-guide">
														Style guide
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-elements">
														Elements
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item">
										<Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-1">Contact</Link>
									</li>
								</ul>
							</div>
							<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
								<Link href="/javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<div className="dark-light-switcher d-flex justify-content-center align-items-center icon-shape icon-md border bg-white rounded-3 ms-3 me-md-3 me-0">
									<i className="bi theme-icon bi-sun-fill" />
									<i className="bi theme-icon bi-moon-stars-fill" />
								</div>
								<Link href="#" className="btn btn-gradient d-none d-md-block">
									Join For Free Trial
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
						</div>
					</nav>
					{/* offCanvas-menu */}
					<div className="offCanvas__info">
						<div className="offCanvas__close-icon menu-close">
							<button><i className="far fa-window-close" /></button>
						</div>
						<div className="offCanvas__logo mb-30">
							<Link href="/"><img src="/assets/imgs/logo/logo-dark.svg" alt="Logo" /></Link>
						</div>
						<div className="offCanvas__side-info mb-30">
							<div className="contact-list mb-30">
								<h4>Chat with us</h4>
								<p className="mb-3">
									The support team is always<br />
									available 24/7
								</p>
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
							<div className="contact-list mb-30">
								<h4>Office Address</h4>
								<p>
									123/A, Miranda City Likaoli <br />
									Prikano, Dope
								</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Phone Number</h4>
								<p>(+01) 234 567 89</p>
								<p>(+01) 456 789 21</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Business Emails</h4>
								<p><Link href="/mailto:contact@alithemes.com">contact@alithemes.com</Link></p>
								<p><Link href="/mailto:sale@alithemes.com ">sale@alithemes.com </Link></p>
							</div>
							<div className="contact-list mb-30">
								<h4>Help  support</h4>
								<p>Email <Link href="/mailto:support@alithemes.com">support@alithemes.com</Link> For help with a current product or service or refer to FAQs and developer tools.</p>
							</div>
						</div>
						<div className="offCanvas__social-icon mt-30">
							<Link href="/javascript:void(0)"><i className="fab fa-facebook-f" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-twitter" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-google-plus-g" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-instagram" /></Link>
						</div>
					</div>
					<div className="offCanvas__overly" />
					{/* Offcanvas search */}
					<div className="offcanvas offcanvas-top offcanvasTop h-50" tabIndex={-1}>
						<div className="offcanvas-header">
							<button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
						</div>
						<div className="offcanvas-body">
							<div className="container">
								<div className="row py-md-5 py-2">
									<div className="col-12 col-lg-8 mx-auto">
										<h4 className="mb-2 fs-sm-5">What are you looking for?</h4>
										<p className="text-500 fs-6 mb-5">Explore our services and discover how we can help you achieve your goals</p>
										<div className="input-group" data-aos="zoom-in">
											<input type="text" className="form-control ps-5 rounded-start-pill" name="name" placeholder="Enter Your Keywords" />
											<button className="btn btn-primary rounded-end-pill">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
										<div className="d-flex flex-column flex-lg-row mt-5">
											<h6 className="d-inline me-2">Suggest:</h6>
											<div className="d-flex flex-wrap gap-2">
												<Link href="#">Startup</Link>
												<Link href="#">Agency</Link>
												<Link href="#">Creative</Link>
												<Link href="#">Consulting</Link>
												<Link href="#">IT services</Link>
												<Link href="#">Pricing</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Offcanvas search */}
					<div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
						<div className="mobile-header-wrapper-inner">
							<div className="mobile-header-logo">
								<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
									<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
									<span>Infinia</span>
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
							<div className="mobile-header-content-area">
								<div className="perfect-scroll">
									<div className="mobile-menu-wrap mobile-header-border">
										<nav>
											<ul className="mobile-menu font-heading ps-0">
												<li className="has-children">
													<Link className="active" href="#">Homepages</Link>
													<ul className="sub-menu">
														<li><Link href="/">Home 1 - Business Startup</Link></li>
														<li><Link href="/home-2">Home 2 - Application Landing</Link></li>
														<li><Link href="/home-3">Home 3 - Marketing Services</Link></li>
														<li><Link href="/home-4">Home 4 - IT Services</Link></li>
														<li><Link href="/home-5">Home 5 - Consulting Services</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">About Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-about">About us v.1</Link></li>
														<li><Link href="/page-about-2">About us v.2</Link></li>
														<li><Link href="/page-about-3">About us v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Services</Link>
													<ul className="sub-menu">
														<li><Link href="/page-services-1">Services v.1</Link></li>
														<li><Link href="/page-services-2">Services v.2</Link></li>
														<li><Link href="/page-services-3">Services v.3</Link></li>
														<li><Link href="/page-services-details-1">Services details v.1</Link></li>
														<li><Link href="/page-services-details-2">Services details v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Team</Link>
													<ul className="sub-menu">
														<li><Link href="/page-team-1">Our team v.1</Link></li>
														<li><Link href="/page-team-2">Our team v.2</Link></li>
														<li><Link href="/page-team-3">Our team v.3</Link></li>
														<li><Link href="/page-team-4">Our team v.4</Link></li>
														<li><Link href="/page-team-5">Our team v.5</Link></li>
														<li><Link href="/page-team-6">Our team v.6</Link></li>
														<li><Link href="/page-team-detail-1">Team detail v.1</Link></li>
														<li><Link href="/page-team-detail-2">Team detail v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Features</Link>
													<ul className="sub-menu">
														<li><Link href="/page-features-1">Features v.1</Link></li>
														<li><Link href="/page-features-2">Features v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Pricing</Link>
													<ul className="sub-menu">
														<li><Link href="/page-pricing-01">Pricing v.1</Link></li>
														<li><Link href="/page-pricing-02">Pricing v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Contact Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-contact-1">Contact v.1</Link></li>
														<li><Link href="/page-contact-2">Contact v.2</Link></li>
														<li><Link href="/page-contact-3">Contact v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Blog  News</Link>
													<ul className="sub-menu">
														<li><Link href="/page-blog-1">Blog v.1</Link></li>
														<li><Link href="/page-blog-2">Blog v.2</Link></li>
														<li><Link href="/page-blog-details">Blog details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Case Study</Link>
													<ul className="sub-menu">
														<li><Link href="/page-case-study">Case Study</Link></li>
														<li><Link href="/page-case-study-details">Case study details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Authentication</Link>
													<ul className="sub-menu">
														<li><Link href="/page-register">Register</Link></li>
														<li><Link href="/page-login">Sign in</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Utilities</Link>
													<ul className="sub-menu">
														<li><Link href="/page-work-process">Work Process</Link></li>
														<li><Link href="/page-book-a-demo">Book a demo</Link></li>
														<li><Link href="/page-integration">Integration</Link></li>
														<li><Link href="/page-changelog">Change log</Link></li>
														<li><Link href="/page-privacy-policy">Privacy policy</Link></li>
														<li><Link href="/page-terms-conditions">Terms conditions</Link></li>
														<li><Link href="/page-comming-soon">Comming soon</Link></li>
														<li><Link href="/page-404">Error 404</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Style Guide</Link>
													<ul className="sub-menu">
														<li><Link href="/page-style-guide">Color  Typography</Link></li>
														<li><Link href="/page-elements">Basic elements</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">All Sections</Link>
													<ul className="sub-menu">
														<li><Link href="/section-navigation"> Navigation </Link></li>
														<li><Link href="/section-hero"> Hero </Link></li>
														<li><Link href="/section-logo-cloud"> Logo cloud </Link></li>
														<li><Link href="/section-cta"> Call to action </Link></li>
														<li><Link href="/section-how-it-work"> How it work </Link></li>
														<li><Link href="/section-services"> Services </Link></li>
														<li><Link href="/section-team"> Team </Link></li>
														<li><Link href="/section-pricing"> Pricing </Link></li>
														<li><Link href="/section-faqs"> FAQS </Link></li>
														<li><Link href="/section-testimonial"> Testimonials </Link></li>
														<li><Link href="/section-blog"> Blog </Link></li>
														<li><Link href="/section-newsletter"> Newsletter </Link></li>
														<li><Link href="/section-footer"> Footer </Link></li>
														<li><Link href="/section-features"> Features </Link></li>
														<li><Link href="/section-projects"> Projects </Link></li>
														<li><Link href="/section-contact"> Contact </Link></li>
														<li><Link href="/section-static"> Static </Link></li>
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="pb-120 border-top" />
				{/* Navbar */}
				<header>
					<nav className="navbar navbar-expand-lg @@classList z-999">
						<div className="container-fluid px-md-8 px-2">
							<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
								<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
								<span>Infinia</span>
							</Link>
							<div className="d-none d-lg-flex">
								<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Home
										</Link>
										<div className="dropdown-menu fix">
											<ul className="list-unstyled">
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M16.1143 9.19978H12.8916V2.14741C12.8916 1.99512 12.7913 1.86072 12.6452 1.81775C12.4977 1.77478 12.3416 1.83287 12.2591 1.96075L5.59417 12.2801C5.52577 12.386 5.52061 12.5204 5.58111 12.6311C5.64127 12.7414 5.75711 12.8102 5.88292 12.8102H9.10558V19.8522C9.10558 20.0045 9.20596 20.1389 9.35205 20.1819C9.38436 20.1912 9.41702 20.196 9.44933 20.196C9.5638 20.196 9.67346 20.1386 9.73808 20.0389L16.403 9.72984C16.4715 9.62397 16.4766 9.48956 16.4161 9.37887C16.356 9.26853 16.2401 9.19978 16.1143 9.19978Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.1</span>
															<span className="text-600 fs-7">Business Startup</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-2">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3205 8.75C16.752 8.457 17 7.991 17 7.5C17 7.009 16.752 6.543 16.3205 6.25C15.016 5.365 13.004 4 11.961 3.2915C11.3905 2.9045 10.6095 2.9045 10.039 3.2915C8.996 4 6.984 5.365 5.6795 6.25C5.248 6.543 5 7.009 5 7.5C5 7.991 5.248 8.457 5.6795 8.75C6.984 9.635 8.996 11 10.039 11.7085C10.6095 12.0955 11.3905 12.0955 11.961 11.7085L16.3205 8.75Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 9.8605L9.4775 12.5355C10.3815 13.149 11.6185 13.149 12.5225 12.5355L16.465 9.8605C16.807 10.153 17 10.5665 17 11C17 11.491 16.752 11.957 16.3205 12.25C15.016 13.135 13.004 14.5 11.961 15.2085C11.3905 15.5955 10.6095 15.5955 10.039 15.2085C8.996 14.5 6.984 13.135 5.6795 12.25C5.248 11.957 5 11.491 5 11C5 10.5665 5.193 10.153 5.535 9.8605Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 13.3605L9.4775 16.0355C10.3815 16.649 11.6185 16.649 12.5225 16.0355L16.465 13.3605C16.807 13.653 17 14.0665 17 14.5C17 14.991 16.752 15.457 16.3205 15.75C15.016 16.635 13.004 18 11.961 18.7085C11.3905 19.0955 10.6095 19.0955 10.039 18.7085C8.996 18 6.984 16.635 5.6795 15.75C5.248 15.457 5 14.991 5 14.5C5 14.0665 5.193 13.653 5.535 13.3605Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.2</span>
															<span className="text-600 fs-7">Application Landing</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-3">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M19.3734 10.5591L16.8746 9.84501C15.7493 9.52775 14.7242 8.92703 13.8975 8.10031C13.0708 7.27359 12.4701 6.24855 12.1528 5.12326L11.4387 2.62442C11.4028 2.537 11.3417 2.46222 11.2632 2.40959C11.1847 2.35697 11.0923 2.32887 10.9978 2.32887C10.9033 2.32887 10.8109 2.35697 10.7324 2.40959C10.6539 2.46222 10.5928 2.537 10.5569 2.62442L9.84283 5.12326C9.52558 6.24855 8.92486 7.27359 8.09814 8.10031C7.27142 8.92703 6.24637 9.52775 5.12108 9.84501L2.62225 10.5591C2.5263 10.5863 2.44186 10.6441 2.38173 10.7237C2.3216 10.8033 2.28906 10.9003 2.28906 11C2.28906 11.0997 2.3216 11.1968 2.38173 11.2763C2.44186 11.3559 2.5263 11.4137 2.62225 11.4409L5.12108 12.155C6.24637 12.4723 7.27142 13.073 8.09814 13.8997C8.92486 14.7264 9.52558 15.7515 9.84283 16.8768L10.5569 19.3756C10.5841 19.4715 10.6419 19.556 10.7215 19.6161C10.8011 19.6762 10.8981 19.7088 10.9978 19.7088C11.0976 19.7088 11.1946 19.6762 11.2742 19.6161C11.3537 19.556 11.4115 19.4715 11.4387 19.3756L12.1528 16.8768C12.4701 15.7515 13.0708 14.7264 13.8975 13.8997C14.7242 13.073 15.7493 12.4723 16.8746 12.155L19.3734 11.4409C19.4694 11.4137 19.5538 11.3559 19.6139 11.2763C19.6741 11.1968 19.7066 11.0997 19.7066 11C19.7066 10.9003 19.6741 10.8033 19.6139 10.7237C19.5538 10.6441 19.4694 10.5863 19.3734 10.5591Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.3</span>
															<span className="text-600 fs-7">Marketing Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-4">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M10.9965 2.80334L13.3633 4.90828C13.5282 5.05379 14.3915 5.8201 13.8095 6.98412C13.2275 8.14814 10.9965 11.8827 10.9965 11.8827C10.9965 11.8827 8.76543 8.14814 8.18342 6.98412C7.60141 5.8201 8.46472 5.05379 8.62962 4.90828L10.9965 2.80334Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M19.6235 9.05026L18.3624 11.9603C18.2751 12.164 17.8192 13.2213 16.5291 13.0273C15.239 12.8333 11 11.8827 11 11.8827C11 11.8827 13.8519 8.60405 14.7734 7.68253C15.6949 6.76101 16.694 7.34302 16.888 7.45943L19.6235 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M2.375 9.05026L3.63602 11.9603C3.72332 12.164 4.17923 13.2213 5.46936 13.0273C6.75948 12.8333 10.9985 11.8827 10.9985 11.8827C10.9985 11.8827 8.14661 8.59435 7.21539 7.68253C6.29387 6.76101 5.29475 7.34302 5.10075 7.45943L2.375 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.62164 19.1966L8.7742 18.9056C8.9973 18.8862 10.1419 18.7795 10.365 17.4991C10.5784 16.209 10.9955 11.8827 10.9955 11.8827C10.9955 11.8827 6.98936 13.5705 5.82534 14.1622C4.66132 14.754 4.90383 15.8792 4.95233 16.1023L5.62164 19.1966Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3661 19.1966L13.2135 18.9056C12.9904 18.8862 11.8458 18.7795 11.6227 17.4991C11.4093 16.209 10.9922 11.8827 10.9922 11.8827C10.9922 11.8827 14.9984 13.5705 16.1624 14.1622C17.3264 14.754 17.0839 15.8792 17.0354 16.1023L16.3661 19.1966Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.4</span>
															<span className="text-600 fs-7">IT Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-5">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={18} height={17} viewBox="0 0 18 17" fill="none">
															<path d="M3.25295 4.15876C3.1292 4.13693 3.00309 4.12589 2.87813 4.12589C1.83455 4.12589 0.945478 4.87264 0.764063 5.90149L0.0328612 10.0485C-0.172874 11.2151 0.608946 12.3316 1.77559 12.5374C1.89935 12.5592 2.02546 12.5702 2.15041 12.5702C3.19391 12.5702 4.08307 11.8234 4.26448 10.7946L4.99573 6.64764C5.20138 5.48095 4.4196 4.36449 3.25295 4.15876Z" fill="#A38CFF" />
															<path d="M9.24512 2.25455C9.12137 2.23272 8.99525 2.22168 8.8703 2.22168C7.82676 2.22168 6.93764 2.96844 6.75627 3.99728L5.35351 11.9527C5.25386 12.5178 5.38028 13.088 5.70942 13.5581C6.03856 14.0281 6.53111 14.3419 7.09624 14.4416C7.21999 14.4634 7.34611 14.4745 7.47106 14.4745C8.5146 14.4745 9.40372 13.7277 9.58513 12.6989L10.9879 4.74344C11.1936 3.57675 10.4118 2.46029 9.24512 2.25455Z" fill="#A38CFF" />
															<path d="M16.6264 0.916441C16.2972 0.446361 15.8047 0.132602 15.2396 0.0329143C15.1158 0.0110861 14.9896 0 14.8646 0C13.8211 0 12.9321 0.746757 12.7507 1.77565L10.5644 14.1742C10.4648 14.7394 10.5912 15.3095 10.9204 15.7796C11.2495 16.2496 11.7421 16.5634 12.3071 16.6631C12.4309 16.685 12.557 16.696 12.682 16.696C13.7256 16.696 14.6147 15.9492 14.7961 14.9204L16.9823 2.5218C17.0819 1.95668 16.9556 1.38652 16.6264 0.916441Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.5</span>
															<span className="text-600 fs-7">Consulting Services</span>
														</span>
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Pages
										</Link>
										<div className="mega-menu fix start-50 translate-middle-x">
											<div className="container">
												<div className="row">
													<div className="col-12">
														<div className="mega-menu-content">
															<div className="row">
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">ABOUT US</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about">About us v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-2">About us v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-3">About us v.3</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">SERVICES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-1">Services v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-2">Services v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-3">Services v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-1">Services details v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-2">Services details v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">OUR TEAM</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-1">Our team v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-2">Our team v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-3">Our team v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-4">Our team v.4</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-5">Our team v.5</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-6">Our team v.6</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-1">Team detail v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-2">Team detail v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">FEATURES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-1">Features v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-2">Features v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">PRICING</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-01">Pricing v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-02">Pricing v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CONTACT</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-1">Contact v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-2">Contact v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-3">Contact v.3</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">BLOG</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-1">Blog v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-2">Blog v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-details">Blog details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CASE STUDY</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study">Case Study</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study-details">Case study details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">AUTHENTICATION</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-register">Register</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-login">Sign in</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">UTILITIES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-work-process">Work Process</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-book-a-demo">Book a demo</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-integration">Integration</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-changelog">Change log</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-privacy-policy">Privacy policy</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-terms-conditions">Terms conditions</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-comming-soon">Comming soon</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-404">Error 404</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-style-guide">Color  Typography</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-elements">Basic elements</Link></li>
																		</ul>
																	</div>
																	<div className="position-relative bg-4 rounded-3 mt-5">
																		<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
																		<div className="position-absolute top-50 start-50 translate-middle z-0">
																			<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="infinia" />
																			<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
																			<div className="d-flex mt-3 ms-3">
																				<img src="/assets/imgs/other/avatar-1.png" alt="infinia" />
																				<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="infinia" />
																				<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="infinia" />
																			</div>
																			<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																				Get this now
																				<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																					<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																					<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																				</svg>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="position-absolute top-0 start-50 translate-middle-x z-0">
												<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu-2">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Sections
										</Link>
										<div className="mega-menu fix">
											<div className="d-flex flex-wrap gap-2 position-relative z-1">
												<Link href="/section-navigation" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Navigation
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														09
													</span>
												</Link>
												<Link href="/section-hero" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Hero
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-logo-cloud" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Logo cloud
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-cta" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Call to action
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														15
													</span>
												</Link>
												<Link href="/section-how-it-work" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													How it work
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-services" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Services
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-team" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Team
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														07
													</span>
												</Link>
												<Link href="/section-pricing" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Pricing
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-faqs" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													FAQS
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-testimonial" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Testimonials
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-blog" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Blog
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-newsletter" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Newsletter
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-footer" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Footer
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-features" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Features
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														13
													</span>
												</Link>
												<Link href="/section-projects" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Projects
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-contact" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Contact
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														06
													</span>
												</Link>
												<Link href="/section-static" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Static
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
											</div>
											<div className="position-absolute bottom-0 end-0 z-0">
												<img src="/assets/imgs/other/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Style Guide
										</Link>
										<div className="dropdown-menu p-4 fix">
											<ul className="list-unstyled">
												<li className="position-relative border-bottom z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-style-guide">
														Style guide
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-elements">
														Elements
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item">
										<Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-1">Contact</Link>
									</li>
								</ul>
							</div>
							<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
								<Link href="/javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<div className="dark-light-switcher d-flex justify-content-center align-items-center icon-shape icon-md border bg-white rounded-3 ms-3 me-md-3 me-0">
									<i className="bi theme-icon bi-sun-fill" />
									<i className="bi theme-icon bi-moon-stars-fill" />
								</div>
								<Link href="#" className="btn btn-gradient d-none d-md-block">
									Join For Free Trial
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
						</div>
					</nav>
					{/* offCanvas-menu */}
					<div className="offCanvas__info">
						<div className="offCanvas__close-icon menu-close">
							<button><i className="far fa-window-close" /></button>
						</div>
						<div className="offCanvas__logo mb-30">
							<Link href="/"><img src="/assets/imgs/logo/logo-dark.svg" alt="Logo" /></Link>
						</div>
						<div className="offCanvas__side-info mb-30">
							<div className="contact-list mb-30">
								<h4>Chat with us</h4>
								<p className="mb-3">
									The support team is always<br />
									available 24/7
								</p>
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
							<div className="contact-list mb-30">
								<h4>Office Address</h4>
								<p>
									123/A, Miranda City Likaoli <br />
									Prikano, Dope
								</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Phone Number</h4>
								<p>(+01) 234 567 89</p>
								<p>(+01) 456 789 21</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Business Emails</h4>
								<p><Link href="/mailto:contact@alithemes.com">contact@alithemes.com</Link></p>
								<p><Link href="/mailto:sale@alithemes.com ">sale@alithemes.com </Link></p>
							</div>
							<div className="contact-list mb-30">
								<h4>Help  support</h4>
								<p>Email <Link href="/mailto:support@alithemes.com">support@alithemes.com</Link> For help with a current product or service or refer to FAQs and developer tools.</p>
							</div>
						</div>
						<div className="offCanvas__social-icon mt-30">
							<Link href="/javascript:void(0)"><i className="fab fa-facebook-f" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-twitter" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-google-plus-g" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-instagram" /></Link>
						</div>
					</div>
					<div className="offCanvas__overly" />
					{/* Offcanvas search */}
					<div className="offcanvas offcanvas-top offcanvasTop h-50" tabIndex={-1}>
						<div className="offcanvas-header">
							<button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
						</div>
						<div className="offcanvas-body">
							<div className="container">
								<div className="row py-md-5 py-2">
									<div className="col-12 col-lg-8 mx-auto">
										<h4 className="mb-2 fs-sm-5">What are you looking for?</h4>
										<p className="text-500 fs-6 mb-5">Explore our services and discover how we can help you achieve your goals</p>
										<div className="input-group" data-aos="zoom-in">
											<input type="text" className="form-control ps-5 rounded-start-pill" name="name" placeholder="Enter Your Keywords" />
											<button className="btn btn-primary rounded-end-pill">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
										<div className="d-flex flex-column flex-lg-row mt-5">
											<h6 className="d-inline me-2">Suggest:</h6>
											<div className="d-flex flex-wrap gap-2">
												<Link href="#">Startup</Link>
												<Link href="#">Agency</Link>
												<Link href="#">Creative</Link>
												<Link href="#">Consulting</Link>
												<Link href="#">IT services</Link>
												<Link href="#">Pricing</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Offcanvas search */}
					<div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
						<div className="mobile-header-wrapper-inner">
							<div className="mobile-header-logo">
								<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
									<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
									<span>Infinia</span>
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
							<div className="mobile-header-content-area">
								<div className="perfect-scroll">
									<div className="mobile-menu-wrap mobile-header-border">
										<nav>
											<ul className="mobile-menu font-heading ps-0">
												<li className="has-children">
													<Link className="active" href="#">Homepages</Link>
													<ul className="sub-menu">
														<li><Link href="/">Home 1 - Business Startup</Link></li>
														<li><Link href="/home-2">Home 2 - Application Landing</Link></li>
														<li><Link href="/home-3">Home 3 - Marketing Services</Link></li>
														<li><Link href="/home-4">Home 4 - IT Services</Link></li>
														<li><Link href="/home-5">Home 5 - Consulting Services</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">About Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-about">About us v.1</Link></li>
														<li><Link href="/page-about-2">About us v.2</Link></li>
														<li><Link href="/page-about-3">About us v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Services</Link>
													<ul className="sub-menu">
														<li><Link href="/page-services-1">Services v.1</Link></li>
														<li><Link href="/page-services-2">Services v.2</Link></li>
														<li><Link href="/page-services-3">Services v.3</Link></li>
														<li><Link href="/page-services-details-1">Services details v.1</Link></li>
														<li><Link href="/page-services-details-2">Services details v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Team</Link>
													<ul className="sub-menu">
														<li><Link href="/page-team-1">Our team v.1</Link></li>
														<li><Link href="/page-team-2">Our team v.2</Link></li>
														<li><Link href="/page-team-3">Our team v.3</Link></li>
														<li><Link href="/page-team-4">Our team v.4</Link></li>
														<li><Link href="/page-team-5">Our team v.5</Link></li>
														<li><Link href="/page-team-6">Our team v.6</Link></li>
														<li><Link href="/page-team-detail-1">Team detail v.1</Link></li>
														<li><Link href="/page-team-detail-2">Team detail v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Features</Link>
													<ul className="sub-menu">
														<li><Link href="/page-features-1">Features v.1</Link></li>
														<li><Link href="/page-features-2">Features v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Pricing</Link>
													<ul className="sub-menu">
														<li><Link href="/page-pricing-01">Pricing v.1</Link></li>
														<li><Link href="/page-pricing-02">Pricing v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Contact Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-contact-1">Contact v.1</Link></li>
														<li><Link href="/page-contact-2">Contact v.2</Link></li>
														<li><Link href="/page-contact-3">Contact v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Blog  News</Link>
													<ul className="sub-menu">
														<li><Link href="/page-blog-1">Blog v.1</Link></li>
														<li><Link href="/page-blog-2">Blog v.2</Link></li>
														<li><Link href="/page-blog-details">Blog details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Case Study</Link>
													<ul className="sub-menu">
														<li><Link href="/page-case-study">Case Study</Link></li>
														<li><Link href="/page-case-study-details">Case study details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Authentication</Link>
													<ul className="sub-menu">
														<li><Link href="/page-register">Register</Link></li>
														<li><Link href="/page-login">Sign in</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Utilities</Link>
													<ul className="sub-menu">
														<li><Link href="/page-work-process">Work Process</Link></li>
														<li><Link href="/page-book-a-demo">Book a demo</Link></li>
														<li><Link href="/page-integration">Integration</Link></li>
														<li><Link href="/page-changelog">Change log</Link></li>
														<li><Link href="/page-privacy-policy">Privacy policy</Link></li>
														<li><Link href="/page-terms-conditions">Terms conditions</Link></li>
														<li><Link href="/page-comming-soon">Comming soon</Link></li>
														<li><Link href="/page-404">Error 404</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Style Guide</Link>
													<ul className="sub-menu">
														<li><Link href="/page-style-guide">Color  Typography</Link></li>
														<li><Link href="/page-elements">Basic elements</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">All Sections</Link>
													<ul className="sub-menu">
														<li><Link href="/section-navigation"> Navigation </Link></li>
														<li><Link href="/section-hero"> Hero </Link></li>
														<li><Link href="/section-logo-cloud"> Logo cloud </Link></li>
														<li><Link href="/section-cta"> Call to action </Link></li>
														<li><Link href="/section-how-it-work"> How it work </Link></li>
														<li><Link href="/section-services"> Services </Link></li>
														<li><Link href="/section-team"> Team </Link></li>
														<li><Link href="/section-pricing"> Pricing </Link></li>
														<li><Link href="/section-faqs"> FAQS </Link></li>
														<li><Link href="/section-testimonial"> Testimonials </Link></li>
														<li><Link href="/section-blog"> Blog </Link></li>
														<li><Link href="/section-newsletter"> Newsletter </Link></li>
														<li><Link href="/section-footer"> Footer </Link></li>
														<li><Link href="/section-features"> Features </Link></li>
														<li><Link href="/section-projects"> Projects </Link></li>
														<li><Link href="/section-contact"> Contact </Link></li>
														<li><Link href="/section-static"> Static </Link></li>
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="pb-120 border-top" />
				{/*top-bar*/}
				<div className="top-bar position-relative z-4 @@classList">
					<div className="container-fluid bg-primary-soft">
						<div className="container py-2">
							<div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
								<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
									<Link href="/tel:123456789" className="pe-4">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
											<path d="M7.41064 4.45833H5.05674C4.45006 4.45833 3.95825 4.95014 3.95825 5.55681C3.95825 11.6236 8.87634 16.5417 14.9431 16.5417C15.5498 16.5417 16.0416 16.0498 16.0416 15.4432V13.0892L13.4523 11.3631L12.1097 12.7057C11.8765 12.9389 11.528 13.0114 11.235 12.8601C10.7381 12.6033 9.93167 12.121 9.13684 11.3631C8.32299 10.5871 7.84615 9.75091 7.60683 9.245C7.4727 8.96141 7.55035 8.63409 7.77216 8.41228L9.13684 7.04761L7.41064 4.45833Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<span className="text-900 fs-7">+01 (24) 568 900</span>
									</Link>
									<div className="location d-flex align-items-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
											<path d="M5.62516 16.5418H14.3751C15.2956 16.5418 16.0418 15.7957 16.0418 14.8752V8.6252L10.0001 4.45853L3.9585 8.6252V14.8752C3.9585 15.7957 4.7047 16.5418 5.62516 16.5418Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.12476 13.6244C8.12476 12.7039 8.87098 11.9577 9.7914 11.9577H10.2081C11.1286 11.9577 11.8747 12.7039 11.8747 13.6244V16.5411H8.12476V13.6244Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<span className="text-900 ps-1 fs-7">0811 Erdman Prairie, Joaville CA</span>
									</div>
								</div>
								<div className="d-flex d-none d-lg-flex align-items-center justify-content-center justify-content-lg-end">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
										<path d="M10.0002 16.5417C13.3369 16.5417 16.0418 13.8367 16.0418 10.5C16.0418 7.16327 13.3369 4.45833 10.0002 4.45833C6.66344 4.45833 3.9585 7.16327 3.9585 10.5C3.9585 13.8367 6.66344 16.5417 10.0002 16.5417Z" stroke="#6B7280" strokeWidth="1.5" />
										<path d="M10 7.16667V10.5L11.6667 12.1667" stroke="#6B7280" strokeWidth="1.5" />
									</svg>
									<span className="text-900 pe-3 ps-1 fs-7">Mon-Fri: 10:00am - 09:00pm</span>
									<Link href="/mailto:contact@infinia.com" className="ps-4">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
											<path d="M3.9585 6.95834C3.9585 6.03786 4.70469 5.29167 5.62516 5.29167H14.3752C15.2957 5.29167 16.0418 6.03786 16.0418 6.95834V14.0417C16.0418 14.9622 15.2957 15.7083 14.3752 15.7083H5.62516C4.70469 15.7083 3.9585 14.9622 3.9585 14.0417V6.95834Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M4.5835 5.91667L10.0002 10.7083L15.4168 5.91667" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<span className="text-900 ps-1 fs-7">contact@infinia.com</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Navbar */}
				<header>
					<nav className="navbar navbar-expand-lg @@classList z-999">
						<div className="container">
							<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
								<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
								<span>Infinia</span>
							</Link>
							<div className="d-none d-lg-flex">
								<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Home
										</Link>
										<div className="dropdown-menu fix">
											<ul className="list-unstyled">
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M16.1143 9.19978H12.8916V2.14741C12.8916 1.99512 12.7913 1.86072 12.6452 1.81775C12.4977 1.77478 12.3416 1.83287 12.2591 1.96075L5.59417 12.2801C5.52577 12.386 5.52061 12.5204 5.58111 12.6311C5.64127 12.7414 5.75711 12.8102 5.88292 12.8102H9.10558V19.8522C9.10558 20.0045 9.20596 20.1389 9.35205 20.1819C9.38436 20.1912 9.41702 20.196 9.44933 20.196C9.5638 20.196 9.67346 20.1386 9.73808 20.0389L16.403 9.72984C16.4715 9.62397 16.4766 9.48956 16.4161 9.37887C16.356 9.26853 16.2401 9.19978 16.1143 9.19978Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.1</span>
															<span className="text-600 fs-7">Business Startup</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-2">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3205 8.75C16.752 8.457 17 7.991 17 7.5C17 7.009 16.752 6.543 16.3205 6.25C15.016 5.365 13.004 4 11.961 3.2915C11.3905 2.9045 10.6095 2.9045 10.039 3.2915C8.996 4 6.984 5.365 5.6795 6.25C5.248 6.543 5 7.009 5 7.5C5 7.991 5.248 8.457 5.6795 8.75C6.984 9.635 8.996 11 10.039 11.7085C10.6095 12.0955 11.3905 12.0955 11.961 11.7085L16.3205 8.75Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 9.8605L9.4775 12.5355C10.3815 13.149 11.6185 13.149 12.5225 12.5355L16.465 9.8605C16.807 10.153 17 10.5665 17 11C17 11.491 16.752 11.957 16.3205 12.25C15.016 13.135 13.004 14.5 11.961 15.2085C11.3905 15.5955 10.6095 15.5955 10.039 15.2085C8.996 14.5 6.984 13.135 5.6795 12.25C5.248 11.957 5 11.491 5 11C5 10.5665 5.193 10.153 5.535 9.8605Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 13.3605L9.4775 16.0355C10.3815 16.649 11.6185 16.649 12.5225 16.0355L16.465 13.3605C16.807 13.653 17 14.0665 17 14.5C17 14.991 16.752 15.457 16.3205 15.75C15.016 16.635 13.004 18 11.961 18.7085C11.3905 19.0955 10.6095 19.0955 10.039 18.7085C8.996 18 6.984 16.635 5.6795 15.75C5.248 15.457 5 14.991 5 14.5C5 14.0665 5.193 13.653 5.535 13.3605Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.2</span>
															<span className="text-600 fs-7">Application Landing</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-3">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M19.3734 10.5591L16.8746 9.84501C15.7493 9.52775 14.7242 8.92703 13.8975 8.10031C13.0708 7.27359 12.4701 6.24855 12.1528 5.12326L11.4387 2.62442C11.4028 2.537 11.3417 2.46222 11.2632 2.40959C11.1847 2.35697 11.0923 2.32887 10.9978 2.32887C10.9033 2.32887 10.8109 2.35697 10.7324 2.40959C10.6539 2.46222 10.5928 2.537 10.5569 2.62442L9.84283 5.12326C9.52558 6.24855 8.92486 7.27359 8.09814 8.10031C7.27142 8.92703 6.24637 9.52775 5.12108 9.84501L2.62225 10.5591C2.5263 10.5863 2.44186 10.6441 2.38173 10.7237C2.3216 10.8033 2.28906 10.9003 2.28906 11C2.28906 11.0997 2.3216 11.1968 2.38173 11.2763C2.44186 11.3559 2.5263 11.4137 2.62225 11.4409L5.12108 12.155C6.24637 12.4723 7.27142 13.073 8.09814 13.8997C8.92486 14.7264 9.52558 15.7515 9.84283 16.8768L10.5569 19.3756C10.5841 19.4715 10.6419 19.556 10.7215 19.6161C10.8011 19.6762 10.8981 19.7088 10.9978 19.7088C11.0976 19.7088 11.1946 19.6762 11.2742 19.6161C11.3537 19.556 11.4115 19.4715 11.4387 19.3756L12.1528 16.8768C12.4701 15.7515 13.0708 14.7264 13.8975 13.8997C14.7242 13.073 15.7493 12.4723 16.8746 12.155L19.3734 11.4409C19.4694 11.4137 19.5538 11.3559 19.6139 11.2763C19.6741 11.1968 19.7066 11.0997 19.7066 11C19.7066 10.9003 19.6741 10.8033 19.6139 10.7237C19.5538 10.6441 19.4694 10.5863 19.3734 10.5591Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.3</span>
															<span className="text-600 fs-7">Marketing Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-4">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M10.9965 2.80334L13.3633 4.90828C13.5282 5.05379 14.3915 5.8201 13.8095 6.98412C13.2275 8.14814 10.9965 11.8827 10.9965 11.8827C10.9965 11.8827 8.76543 8.14814 8.18342 6.98412C7.60141 5.8201 8.46472 5.05379 8.62962 4.90828L10.9965 2.80334Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M19.6235 9.05026L18.3624 11.9603C18.2751 12.164 17.8192 13.2213 16.5291 13.0273C15.239 12.8333 11 11.8827 11 11.8827C11 11.8827 13.8519 8.60405 14.7734 7.68253C15.6949 6.76101 16.694 7.34302 16.888 7.45943L19.6235 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M2.375 9.05026L3.63602 11.9603C3.72332 12.164 4.17923 13.2213 5.46936 13.0273C6.75948 12.8333 10.9985 11.8827 10.9985 11.8827C10.9985 11.8827 8.14661 8.59435 7.21539 7.68253C6.29387 6.76101 5.29475 7.34302 5.10075 7.45943L2.375 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.62164 19.1966L8.7742 18.9056C8.9973 18.8862 10.1419 18.7795 10.365 17.4991C10.5784 16.209 10.9955 11.8827 10.9955 11.8827C10.9955 11.8827 6.98936 13.5705 5.82534 14.1622C4.66132 14.754 4.90383 15.8792 4.95233 16.1023L5.62164 19.1966Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3661 19.1966L13.2135 18.9056C12.9904 18.8862 11.8458 18.7795 11.6227 17.4991C11.4093 16.209 10.9922 11.8827 10.9922 11.8827C10.9922 11.8827 14.9984 13.5705 16.1624 14.1622C17.3264 14.754 17.0839 15.8792 17.0354 16.1023L16.3661 19.1966Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.4</span>
															<span className="text-600 fs-7">IT Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-5">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={18} height={17} viewBox="0 0 18 17" fill="none">
															<path d="M3.25295 4.15876C3.1292 4.13693 3.00309 4.12589 2.87813 4.12589C1.83455 4.12589 0.945478 4.87264 0.764063 5.90149L0.0328612 10.0485C-0.172874 11.2151 0.608946 12.3316 1.77559 12.5374C1.89935 12.5592 2.02546 12.5702 2.15041 12.5702C3.19391 12.5702 4.08307 11.8234 4.26448 10.7946L4.99573 6.64764C5.20138 5.48095 4.4196 4.36449 3.25295 4.15876Z" fill="#A38CFF" />
															<path d="M9.24512 2.25455C9.12137 2.23272 8.99525 2.22168 8.8703 2.22168C7.82676 2.22168 6.93764 2.96844 6.75627 3.99728L5.35351 11.9527C5.25386 12.5178 5.38028 13.088 5.70942 13.5581C6.03856 14.0281 6.53111 14.3419 7.09624 14.4416C7.21999 14.4634 7.34611 14.4745 7.47106 14.4745C8.5146 14.4745 9.40372 13.7277 9.58513 12.6989L10.9879 4.74344C11.1936 3.57675 10.4118 2.46029 9.24512 2.25455Z" fill="#A38CFF" />
															<path d="M16.6264 0.916441C16.2972 0.446361 15.8047 0.132602 15.2396 0.0329143C15.1158 0.0110861 14.9896 0 14.8646 0C13.8211 0 12.9321 0.746757 12.7507 1.77565L10.5644 14.1742C10.4648 14.7394 10.5912 15.3095 10.9204 15.7796C11.2495 16.2496 11.7421 16.5634 12.3071 16.6631C12.4309 16.685 12.557 16.696 12.682 16.696C13.7256 16.696 14.6147 15.9492 14.7961 14.9204L16.9823 2.5218C17.0819 1.95668 16.9556 1.38652 16.6264 0.916441Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.5</span>
															<span className="text-600 fs-7">Consulting Services</span>
														</span>
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Pages
										</Link>
										<div className="mega-menu fix start-50 translate-middle-x">
											<div className="container">
												<div className="row">
													<div className="col-12">
														<div className="mega-menu-content">
															<div className="row">
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">ABOUT US</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about">About us v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-2">About us v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-3">About us v.3</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">SERVICES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-1">Services v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-2">Services v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-3">Services v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-1">Services details v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-2">Services details v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">OUR TEAM</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-1">Our team v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-2">Our team v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-3">Our team v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-4">Our team v.4</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-5">Our team v.5</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-6">Our team v.6</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-1">Team detail v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-2">Team detail v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">FEATURES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-1">Features v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-2">Features v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">PRICING</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-01">Pricing v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-02">Pricing v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CONTACT</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-1">Contact v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-2">Contact v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-3">Contact v.3</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">BLOG</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-1">Blog v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-2">Blog v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-details">Blog details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CASE STUDY</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study">Case Study</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study-details">Case study details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">AUTHENTICATION</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-register">Register</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-login">Sign in</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">UTILITIES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-work-process">Work Process</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-book-a-demo">Book a demo</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-integration">Integration</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-changelog">Change log</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-privacy-policy">Privacy policy</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-terms-conditions">Terms conditions</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-comming-soon">Comming soon</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-404">Error 404</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-style-guide">Color  Typography</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-elements">Basic elements</Link></li>
																		</ul>
																	</div>
																	<div className="position-relative bg-4 rounded-3 mt-5">
																		<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
																		<div className="position-absolute top-50 start-50 translate-middle z-0">
																			<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="infinia" />
																			<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
																			<div className="d-flex mt-3 ms-3">
																				<img src="/assets/imgs/other/avatar-1.png" alt="infinia" />
																				<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="infinia" />
																				<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="infinia" />
																			</div>
																			<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																				Get this now
																				<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																					<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																					<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																				</svg>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="position-absolute top-0 start-50 translate-middle-x z-0">
												<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu-2">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Sections
										</Link>
										<div className="mega-menu fix">
											<div className="d-flex flex-wrap gap-2 position-relative z-1">
												<Link href="/section-navigation" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Navigation
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														09
													</span>
												</Link>
												<Link href="/section-hero" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Hero
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-logo-cloud" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Logo cloud
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-cta" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Call to action
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														15
													</span>
												</Link>
												<Link href="/section-how-it-work" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													How it work
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-services" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Services
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-team" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Team
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														07
													</span>
												</Link>
												<Link href="/section-pricing" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Pricing
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-faqs" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													FAQS
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-testimonial" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Testimonials
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-blog" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Blog
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-newsletter" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Newsletter
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-footer" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Footer
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-features" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Features
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														13
													</span>
												</Link>
												<Link href="/section-projects" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Projects
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-contact" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Contact
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														06
													</span>
												</Link>
												<Link href="/section-static" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Static
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
											</div>
											<div className="position-absolute bottom-0 end-0 z-0">
												<img src="/assets/imgs/other/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Style Guide
										</Link>
										<div className="dropdown-menu p-4 fix">
											<ul className="list-unstyled">
												<li className="position-relative border-bottom z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-style-guide">
														Style guide
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-elements">
														Elements
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item">
										<Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-1">Contact</Link>
									</li>
								</ul>
							</div>
							<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
								<Link href="/javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<div className="dark-light-switcher d-flex justify-content-center align-items-center icon-shape icon-md border bg-white rounded-3 ms-3 me-md-3 me-0">
									<i className="bi theme-icon bi-sun-fill" />
									<i className="bi theme-icon bi-moon-stars-fill" />
								</div>
								<Link href="#" className="btn btn-gradient d-none d-md-block">
									Join For Free Trial
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
						</div>
					</nav>
					{/* offCanvas-menu */}
					<div className="offCanvas__info">
						<div className="offCanvas__close-icon menu-close">
							<button><i className="far fa-window-close" /></button>
						</div>
						<div className="offCanvas__logo mb-30">
							<Link href="/"><img src="/assets/imgs/logo/logo-dark.svg" alt="Logo" /></Link>
						</div>
						<div className="offCanvas__side-info mb-30">
							<div className="contact-list mb-30">
								<h4>Chat with us</h4>
								<p className="mb-3">
									The support team is always<br />
									available 24/7
								</p>
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
							<div className="contact-list mb-30">
								<h4>Office Address</h4>
								<p>
									123/A, Miranda City Likaoli <br />
									Prikano, Dope
								</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Phone Number</h4>
								<p>(+01) 234 567 89</p>
								<p>(+01) 456 789 21</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Business Emails</h4>
								<p><Link href="/mailto:contact@alithemes.com">contact@alithemes.com</Link></p>
								<p><Link href="/mailto:sale@alithemes.com ">sale@alithemes.com </Link></p>
							</div>
							<div className="contact-list mb-30">
								<h4>Help  support</h4>
								<p>Email <Link href="/mailto:support@alithemes.com">support@alithemes.com</Link> For help with a current product or service or refer to FAQs and developer tools.</p>
							</div>
						</div>
						<div className="offCanvas__social-icon mt-30">
							<Link href="/javascript:void(0)"><i className="fab fa-facebook-f" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-twitter" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-google-plus-g" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-instagram" /></Link>
						</div>
					</div>
					<div className="offCanvas__overly" />
					{/* Offcanvas search */}
					<div className="offcanvas offcanvas-top offcanvasTop h-50" tabIndex={-1}>
						<div className="offcanvas-header">
							<button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
						</div>
						<div className="offcanvas-body">
							<div className="container">
								<div className="row py-md-5 py-2">
									<div className="col-12 col-lg-8 mx-auto">
										<h4 className="mb-2 fs-sm-5">What are you looking for?</h4>
										<p className="text-500 fs-6 mb-5">Explore our services and discover how we can help you achieve your goals</p>
										<div className="input-group" data-aos="zoom-in">
											<input type="text" className="form-control ps-5 rounded-start-pill" name="name" placeholder="Enter Your Keywords" />
											<button className="btn btn-primary rounded-end-pill">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
										<div className="d-flex flex-column flex-lg-row mt-5">
											<h6 className="d-inline me-2">Suggest:</h6>
											<div className="d-flex flex-wrap gap-2">
												<Link href="#">Startup</Link>
												<Link href="#">Agency</Link>
												<Link href="#">Creative</Link>
												<Link href="#">Consulting</Link>
												<Link href="#">IT services</Link>
												<Link href="#">Pricing</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Offcanvas search */}
					<div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
						<div className="mobile-header-wrapper-inner">
							<div className="mobile-header-logo">
								<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
									<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
									<span>Infinia</span>
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
							<div className="mobile-header-content-area">
								<div className="perfect-scroll">
									<div className="mobile-menu-wrap mobile-header-border">
										<nav>
											<ul className="mobile-menu font-heading ps-0">
												<li className="has-children">
													<Link className="active" href="#">Homepages</Link>
													<ul className="sub-menu">
														<li><Link href="/">Home 1 - Business Startup</Link></li>
														<li><Link href="/home-2">Home 2 - Application Landing</Link></li>
														<li><Link href="/home-3">Home 3 - Marketing Services</Link></li>
														<li><Link href="/home-4">Home 4 - IT Services</Link></li>
														<li><Link href="/home-5">Home 5 - Consulting Services</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">About Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-about">About us v.1</Link></li>
														<li><Link href="/page-about-2">About us v.2</Link></li>
														<li><Link href="/page-about-3">About us v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Services</Link>
													<ul className="sub-menu">
														<li><Link href="/page-services-1">Services v.1</Link></li>
														<li><Link href="/page-services-2">Services v.2</Link></li>
														<li><Link href="/page-services-3">Services v.3</Link></li>
														<li><Link href="/page-services-details-1">Services details v.1</Link></li>
														<li><Link href="/page-services-details-2">Services details v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Team</Link>
													<ul className="sub-menu">
														<li><Link href="/page-team-1">Our team v.1</Link></li>
														<li><Link href="/page-team-2">Our team v.2</Link></li>
														<li><Link href="/page-team-3">Our team v.3</Link></li>
														<li><Link href="/page-team-4">Our team v.4</Link></li>
														<li><Link href="/page-team-5">Our team v.5</Link></li>
														<li><Link href="/page-team-6">Our team v.6</Link></li>
														<li><Link href="/page-team-detail-1">Team detail v.1</Link></li>
														<li><Link href="/page-team-detail-2">Team detail v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Features</Link>
													<ul className="sub-menu">
														<li><Link href="/page-features-1">Features v.1</Link></li>
														<li><Link href="/page-features-2">Features v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Pricing</Link>
													<ul className="sub-menu">
														<li><Link href="/page-pricing-01">Pricing v.1</Link></li>
														<li><Link href="/page-pricing-02">Pricing v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Contact Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-contact-1">Contact v.1</Link></li>
														<li><Link href="/page-contact-2">Contact v.2</Link></li>
														<li><Link href="/page-contact-3">Contact v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Blog  News</Link>
													<ul className="sub-menu">
														<li><Link href="/page-blog-1">Blog v.1</Link></li>
														<li><Link href="/page-blog-2">Blog v.2</Link></li>
														<li><Link href="/page-blog-details">Blog details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Case Study</Link>
													<ul className="sub-menu">
														<li><Link href="/page-case-study">Case Study</Link></li>
														<li><Link href="/page-case-study-details">Case study details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Authentication</Link>
													<ul className="sub-menu">
														<li><Link href="/page-register">Register</Link></li>
														<li><Link href="/page-login">Sign in</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Utilities</Link>
													<ul className="sub-menu">
														<li><Link href="/page-work-process">Work Process</Link></li>
														<li><Link href="/page-book-a-demo">Book a demo</Link></li>
														<li><Link href="/page-integration">Integration</Link></li>
														<li><Link href="/page-changelog">Change log</Link></li>
														<li><Link href="/page-privacy-policy">Privacy policy</Link></li>
														<li><Link href="/page-terms-conditions">Terms conditions</Link></li>
														<li><Link href="/page-comming-soon">Comming soon</Link></li>
														<li><Link href="/page-404">Error 404</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Style Guide</Link>
													<ul className="sub-menu">
														<li><Link href="/page-style-guide">Color  Typography</Link></li>
														<li><Link href="/page-elements">Basic elements</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">All Sections</Link>
													<ul className="sub-menu">
														<li><Link href="/section-navigation"> Navigation </Link></li>
														<li><Link href="/section-hero"> Hero </Link></li>
														<li><Link href="/section-logo-cloud"> Logo cloud </Link></li>
														<li><Link href="/section-cta"> Call to action </Link></li>
														<li><Link href="/section-how-it-work"> How it work </Link></li>
														<li><Link href="/section-services"> Services </Link></li>
														<li><Link href="/section-team"> Team </Link></li>
														<li><Link href="/section-pricing"> Pricing </Link></li>
														<li><Link href="/section-faqs"> FAQS </Link></li>
														<li><Link href="/section-testimonial"> Testimonials </Link></li>
														<li><Link href="/section-blog"> Blog </Link></li>
														<li><Link href="/section-newsletter"> Newsletter </Link></li>
														<li><Link href="/section-footer"> Footer </Link></li>
														<li><Link href="/section-features"> Features </Link></li>
														<li><Link href="/section-projects"> Projects </Link></li>
														<li><Link href="/section-contact"> Contact </Link></li>
														<li><Link href="/section-static"> Static </Link></li>
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="pb-120 border-top" />
				{/* Navbar */}
				<header>
					<nav className="navbar navbar-expand-lg @@classList z-999 header-4">
						<div className="container">
							<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
								<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
								<span>Infinia</span>
							</Link>
							<div className="d-none d-lg-flex">
								<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Home
										</Link>
										<div className="dropdown-menu fix">
											<ul className="list-unstyled">
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M16.1143 9.19978H12.8916V2.14741C12.8916 1.99512 12.7913 1.86072 12.6452 1.81775C12.4977 1.77478 12.3416 1.83287 12.2591 1.96075L5.59417 12.2801C5.52577 12.386 5.52061 12.5204 5.58111 12.6311C5.64127 12.7414 5.75711 12.8102 5.88292 12.8102H9.10558V19.8522C9.10558 20.0045 9.20596 20.1389 9.35205 20.1819C9.38436 20.1912 9.41702 20.196 9.44933 20.196C9.5638 20.196 9.67346 20.1386 9.73808 20.0389L16.403 9.72984C16.4715 9.62397 16.4766 9.48956 16.4161 9.37887C16.356 9.26853 16.2401 9.19978 16.1143 9.19978Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.1</span>
															<span className="text-600 fs-7">Business Startup</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-2">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3205 8.75C16.752 8.457 17 7.991 17 7.5C17 7.009 16.752 6.543 16.3205 6.25C15.016 5.365 13.004 4 11.961 3.2915C11.3905 2.9045 10.6095 2.9045 10.039 3.2915C8.996 4 6.984 5.365 5.6795 6.25C5.248 6.543 5 7.009 5 7.5C5 7.991 5.248 8.457 5.6795 8.75C6.984 9.635 8.996 11 10.039 11.7085C10.6095 12.0955 11.3905 12.0955 11.961 11.7085L16.3205 8.75Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 9.8605L9.4775 12.5355C10.3815 13.149 11.6185 13.149 12.5225 12.5355L16.465 9.8605C16.807 10.153 17 10.5665 17 11C17 11.491 16.752 11.957 16.3205 12.25C15.016 13.135 13.004 14.5 11.961 15.2085C11.3905 15.5955 10.6095 15.5955 10.039 15.2085C8.996 14.5 6.984 13.135 5.6795 12.25C5.248 11.957 5 11.491 5 11C5 10.5665 5.193 10.153 5.535 9.8605Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 13.3605L9.4775 16.0355C10.3815 16.649 11.6185 16.649 12.5225 16.0355L16.465 13.3605C16.807 13.653 17 14.0665 17 14.5C17 14.991 16.752 15.457 16.3205 15.75C15.016 16.635 13.004 18 11.961 18.7085C11.3905 19.0955 10.6095 19.0955 10.039 18.7085C8.996 18 6.984 16.635 5.6795 15.75C5.248 15.457 5 14.991 5 14.5C5 14.0665 5.193 13.653 5.535 13.3605Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.2</span>
															<span className="text-600 fs-7">Application Landing</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-3">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M19.3734 10.5591L16.8746 9.84501C15.7493 9.52775 14.7242 8.92703 13.8975 8.10031C13.0708 7.27359 12.4701 6.24855 12.1528 5.12326L11.4387 2.62442C11.4028 2.537 11.3417 2.46222 11.2632 2.40959C11.1847 2.35697 11.0923 2.32887 10.9978 2.32887C10.9033 2.32887 10.8109 2.35697 10.7324 2.40959C10.6539 2.46222 10.5928 2.537 10.5569 2.62442L9.84283 5.12326C9.52558 6.24855 8.92486 7.27359 8.09814 8.10031C7.27142 8.92703 6.24637 9.52775 5.12108 9.84501L2.62225 10.5591C2.5263 10.5863 2.44186 10.6441 2.38173 10.7237C2.3216 10.8033 2.28906 10.9003 2.28906 11C2.28906 11.0997 2.3216 11.1968 2.38173 11.2763C2.44186 11.3559 2.5263 11.4137 2.62225 11.4409L5.12108 12.155C6.24637 12.4723 7.27142 13.073 8.09814 13.8997C8.92486 14.7264 9.52558 15.7515 9.84283 16.8768L10.5569 19.3756C10.5841 19.4715 10.6419 19.556 10.7215 19.6161C10.8011 19.6762 10.8981 19.7088 10.9978 19.7088C11.0976 19.7088 11.1946 19.6762 11.2742 19.6161C11.3537 19.556 11.4115 19.4715 11.4387 19.3756L12.1528 16.8768C12.4701 15.7515 13.0708 14.7264 13.8975 13.8997C14.7242 13.073 15.7493 12.4723 16.8746 12.155L19.3734 11.4409C19.4694 11.4137 19.5538 11.3559 19.6139 11.2763C19.6741 11.1968 19.7066 11.0997 19.7066 11C19.7066 10.9003 19.6741 10.8033 19.6139 10.7237C19.5538 10.6441 19.4694 10.5863 19.3734 10.5591Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.3</span>
															<span className="text-600 fs-7">Marketing Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-4">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M10.9965 2.80334L13.3633 4.90828C13.5282 5.05379 14.3915 5.8201 13.8095 6.98412C13.2275 8.14814 10.9965 11.8827 10.9965 11.8827C10.9965 11.8827 8.76543 8.14814 8.18342 6.98412C7.60141 5.8201 8.46472 5.05379 8.62962 4.90828L10.9965 2.80334Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M19.6235 9.05026L18.3624 11.9603C18.2751 12.164 17.8192 13.2213 16.5291 13.0273C15.239 12.8333 11 11.8827 11 11.8827C11 11.8827 13.8519 8.60405 14.7734 7.68253C15.6949 6.76101 16.694 7.34302 16.888 7.45943L19.6235 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M2.375 9.05026L3.63602 11.9603C3.72332 12.164 4.17923 13.2213 5.46936 13.0273C6.75948 12.8333 10.9985 11.8827 10.9985 11.8827C10.9985 11.8827 8.14661 8.59435 7.21539 7.68253C6.29387 6.76101 5.29475 7.34302 5.10075 7.45943L2.375 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.62164 19.1966L8.7742 18.9056C8.9973 18.8862 10.1419 18.7795 10.365 17.4991C10.5784 16.209 10.9955 11.8827 10.9955 11.8827C10.9955 11.8827 6.98936 13.5705 5.82534 14.1622C4.66132 14.754 4.90383 15.8792 4.95233 16.1023L5.62164 19.1966Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3661 19.1966L13.2135 18.9056C12.9904 18.8862 11.8458 18.7795 11.6227 17.4991C11.4093 16.209 10.9922 11.8827 10.9922 11.8827C10.9922 11.8827 14.9984 13.5705 16.1624 14.1622C17.3264 14.754 17.0839 15.8792 17.0354 16.1023L16.3661 19.1966Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.4</span>
															<span className="text-600 fs-7">IT Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-5">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={18} height={17} viewBox="0 0 18 17" fill="none">
															<path d="M3.25295 4.15876C3.1292 4.13693 3.00309 4.12589 2.87813 4.12589C1.83455 4.12589 0.945478 4.87264 0.764063 5.90149L0.0328612 10.0485C-0.172874 11.2151 0.608946 12.3316 1.77559 12.5374C1.89935 12.5592 2.02546 12.5702 2.15041 12.5702C3.19391 12.5702 4.08307 11.8234 4.26448 10.7946L4.99573 6.64764C5.20138 5.48095 4.4196 4.36449 3.25295 4.15876Z" fill="#A38CFF" />
															<path d="M9.24512 2.25455C9.12137 2.23272 8.99525 2.22168 8.8703 2.22168C7.82676 2.22168 6.93764 2.96844 6.75627 3.99728L5.35351 11.9527C5.25386 12.5178 5.38028 13.088 5.70942 13.5581C6.03856 14.0281 6.53111 14.3419 7.09624 14.4416C7.21999 14.4634 7.34611 14.4745 7.47106 14.4745C8.5146 14.4745 9.40372 13.7277 9.58513 12.6989L10.9879 4.74344C11.1936 3.57675 10.4118 2.46029 9.24512 2.25455Z" fill="#A38CFF" />
															<path d="M16.6264 0.916441C16.2972 0.446361 15.8047 0.132602 15.2396 0.0329143C15.1158 0.0110861 14.9896 0 14.8646 0C13.8211 0 12.9321 0.746757 12.7507 1.77565L10.5644 14.1742C10.4648 14.7394 10.5912 15.3095 10.9204 15.7796C11.2495 16.2496 11.7421 16.5634 12.3071 16.6631C12.4309 16.685 12.557 16.696 12.682 16.696C13.7256 16.696 14.6147 15.9492 14.7961 14.9204L16.9823 2.5218C17.0819 1.95668 16.9556 1.38652 16.6264 0.916441Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.5</span>
															<span className="text-600 fs-7">Consulting Services</span>
														</span>
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Pages
										</Link>
										<div className="mega-menu fix start-50 translate-middle-x">
											<div className="container">
												<div className="row">
													<div className="col-12">
														<div className="mega-menu-content">
															<div className="row">
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">ABOUT US</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about">About us v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-2">About us v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-3">About us v.3</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">SERVICES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-1">Services v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-2">Services v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-3">Services v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-1">Services details v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-2">Services details v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">OUR TEAM</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-1">Our team v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-2">Our team v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-3">Our team v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-4">Our team v.4</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-5">Our team v.5</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-6">Our team v.6</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-1">Team detail v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-2">Team detail v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">FEATURES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-1">Features v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-2">Features v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">PRICING</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-01">Pricing v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-02">Pricing v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CONTACT</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-1">Contact v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-2">Contact v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-3">Contact v.3</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">BLOG</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-1">Blog v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-2">Blog v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-details">Blog details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CASE STUDY</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study">Case Study</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study-details">Case study details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">AUTHENTICATION</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-register">Register</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-login">Sign in</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">UTILITIES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-work-process">Work Process</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-book-a-demo">Book a demo</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-integration">Integration</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-changelog">Change log</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-privacy-policy">Privacy policy</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-terms-conditions">Terms conditions</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-comming-soon">Comming soon</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-404">Error 404</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-style-guide">Color  Typography</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-elements">Basic elements</Link></li>
																		</ul>
																	</div>
																	<div className="position-relative bg-4 rounded-3 mt-5">
																		<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
																		<div className="position-absolute top-50 start-50 translate-middle z-0">
																			<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="infinia" />
																			<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
																			<div className="d-flex mt-3 ms-3">
																				<img src="/assets/imgs/other/avatar-1.png" alt="infinia" />
																				<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="infinia" />
																				<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="infinia" />
																			</div>
																			<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																				Get this now
																				<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																					<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																					<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																				</svg>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="position-absolute top-0 start-50 translate-middle-x z-0">
												<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu-2">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Sections
										</Link>
										<div className="mega-menu fix">
											<div className="d-flex flex-wrap gap-2 position-relative z-1">
												<Link href="/section-navigation" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Navigation
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														09
													</span>
												</Link>
												<Link href="/section-hero" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Hero
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-logo-cloud" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Logo cloud
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-cta" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Call to action
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														15
													</span>
												</Link>
												<Link href="/section-how-it-work" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													How it work
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-services" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Services
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-team" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Team
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														07
													</span>
												</Link>
												<Link href="/section-pricing" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Pricing
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-faqs" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													FAQS
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-testimonial" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Testimonials
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-blog" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Blog
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-newsletter" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Newsletter
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-footer" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Footer
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-features" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Features
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														13
													</span>
												</Link>
												<Link href="/section-projects" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Projects
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-contact" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Contact
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														06
													</span>
												</Link>
												<Link href="/section-static" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Static
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
											</div>
											<div className="position-absolute bottom-0 end-0 z-0">
												<img src="/assets/imgs/other/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Style Guide
										</Link>
										<div className="dropdown-menu p-4 fix">
											<ul className="list-unstyled">
												<li className="position-relative border-bottom z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-style-guide">
														Style guide
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-elements">
														Elements
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item">
										<Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-1">Contact</Link>
									</li>
								</ul>
							</div>
							<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
								<Link href="/javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<div className="dark-light-switcher d-flex justify-content-center align-items-center icon-shape icon-md border bg-white rounded-3 ms-3 me-md-3 me-0">
									<i className="bi theme-icon bi-sun-fill" />
									<i className="bi theme-icon bi-moon-stars-fill" />
								</div>
								<Link href="/javascript:void(0)" className="menu-tigger bg-primary icon-shape icon-md rounded-2 d-none d-md-flex">
									<img src="/assets/imgs/logo/icon-menu.svg" alt="infinia" />
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
						</div>
					</nav>
					{/* offCanvas-menu */}
					<div className="offCanvas__info">
						<div className="offCanvas__close-icon menu-close">
							<button><i className="far fa-window-close" /></button>
						</div>
						<div className="offCanvas__logo mb-30">
							<Link href="/"><img src="/assets/imgs/logo/logo-dark.svg" alt="Logo" /></Link>
						</div>
						<div className="offCanvas__side-info mb-30">
							<div className="contact-list mb-30">
								<h4>Chat with us</h4>
								<p className="mb-3">
									The support team is always<br />
									available 24/7
								</p>
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
							<div className="contact-list mb-30">
								<h4>Office Address</h4>
								<p>
									123/A, Miranda City Likaoli <br />
									Prikano, Dope
								</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Phone Number</h4>
								<p>(+01) 234 567 89</p>
								<p>(+01) 456 789 21</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Business Emails</h4>
								<p><Link href="/mailto:contact@alithemes.com">contact@alithemes.com</Link></p>
								<p><Link href="/mailto:sale@alithemes.com ">sale@alithemes.com </Link></p>
							</div>
							<div className="contact-list mb-30">
								<h4>Help  support</h4>
								<p>Email <Link href="/mailto:support@alithemes.com">support@alithemes.com</Link> For help with a current product or service or refer to FAQs and developer tools.</p>
							</div>
						</div>
						<div className="offCanvas__social-icon mt-30">
							<Link href="/javascript:void(0)"><i className="fab fa-facebook-f" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-twitter" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-google-plus-g" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-instagram" /></Link>
						</div>
					</div>
					<div className="offCanvas__overly" />
					{/* Offcanvas search */}
					<div className="offcanvas offcanvas-top offcanvasTop h-50" tabIndex={-1}>
						<div className="offcanvas-header">
							<button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
						</div>
						<div className="offcanvas-body">
							<div className="container">
								<div className="row py-md-5 py-2">
									<div className="col-12 col-lg-8 mx-auto">
										<h4 className="mb-2 fs-sm-5">What are you looking for?</h4>
										<p className="text-500 fs-6 mb-5">Explore our services and discover how we can help you achieve your goals</p>
										<div className="input-group" data-aos="zoom-in">
											<input type="text" className="form-control ps-5 rounded-start-pill" name="name" placeholder="Enter Your Keywords" />
											<button className="btn btn-primary rounded-end-pill">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
										<div className="d-flex flex-column flex-lg-row mt-5">
											<h6 className="d-inline me-2">Suggest:</h6>
											<div className="d-flex flex-wrap gap-2">
												<Link href="#">Startup</Link>
												<Link href="#">Agency</Link>
												<Link href="#">Creative</Link>
												<Link href="#">Consulting</Link>
												<Link href="#">IT services</Link>
												<Link href="#">Pricing</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Offcanvas search */}
					<div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
						<div className="mobile-header-wrapper-inner">
							<div className="mobile-header-logo">
								<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
									<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
									<span>Infinia</span>
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
							<div className="mobile-header-content-area">
								<div className="perfect-scroll">
									<div className="mobile-menu-wrap mobile-header-border">
										<nav>
											<ul className="mobile-menu font-heading ps-0">
												<li className="has-children">
													<Link className="active" href="#">Homepages</Link>
													<ul className="sub-menu">
														<li><Link href="/">Home 1 - Business Startup</Link></li>
														<li><Link href="/home-2">Home 2 - Application Landing</Link></li>
														<li><Link href="/home-3">Home 3 - Marketing Services</Link></li>
														<li><Link href="/home-4">Home 4 - IT Services</Link></li>
														<li><Link href="/home-5">Home 5 - Consulting Services</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">About Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-about">About us v.1</Link></li>
														<li><Link href="/page-about-2">About us v.2</Link></li>
														<li><Link href="/page-about-3">About us v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Services</Link>
													<ul className="sub-menu">
														<li><Link href="/page-services-1">Services v.1</Link></li>
														<li><Link href="/page-services-2">Services v.2</Link></li>
														<li><Link href="/page-services-3">Services v.3</Link></li>
														<li><Link href="/page-services-details-1">Services details v.1</Link></li>
														<li><Link href="/page-services-details-2">Services details v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Team</Link>
													<ul className="sub-menu">
														<li><Link href="/page-team-1">Our team v.1</Link></li>
														<li><Link href="/page-team-2">Our team v.2</Link></li>
														<li><Link href="/page-team-3">Our team v.3</Link></li>
														<li><Link href="/page-team-4">Our team v.4</Link></li>
														<li><Link href="/page-team-5">Our team v.5</Link></li>
														<li><Link href="/page-team-6">Our team v.6</Link></li>
														<li><Link href="/page-team-detail-1">Team detail v.1</Link></li>
														<li><Link href="/page-team-detail-2">Team detail v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Features</Link>
													<ul className="sub-menu">
														<li><Link href="/page-features-1">Features v.1</Link></li>
														<li><Link href="/page-features-2">Features v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Pricing</Link>
													<ul className="sub-menu">
														<li><Link href="/page-pricing-01">Pricing v.1</Link></li>
														<li><Link href="/page-pricing-02">Pricing v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Contact Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-contact-1">Contact v.1</Link></li>
														<li><Link href="/page-contact-2">Contact v.2</Link></li>
														<li><Link href="/page-contact-3">Contact v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Blog  News</Link>
													<ul className="sub-menu">
														<li><Link href="/page-blog-1">Blog v.1</Link></li>
														<li><Link href="/page-blog-2">Blog v.2</Link></li>
														<li><Link href="/page-blog-details">Blog details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Case Study</Link>
													<ul className="sub-menu">
														<li><Link href="/page-case-study">Case Study</Link></li>
														<li><Link href="/page-case-study-details">Case study details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Authentication</Link>
													<ul className="sub-menu">
														<li><Link href="/page-register">Register</Link></li>
														<li><Link href="/page-login">Sign in</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Utilities</Link>
													<ul className="sub-menu">
														<li><Link href="/page-work-process">Work Process</Link></li>
														<li><Link href="/page-book-a-demo">Book a demo</Link></li>
														<li><Link href="/page-integration">Integration</Link></li>
														<li><Link href="/page-changelog">Change log</Link></li>
														<li><Link href="/page-privacy-policy">Privacy policy</Link></li>
														<li><Link href="/page-terms-conditions">Terms conditions</Link></li>
														<li><Link href="/page-comming-soon">Comming soon</Link></li>
														<li><Link href="/page-404">Error 404</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Style Guide</Link>
													<ul className="sub-menu">
														<li><Link href="/page-style-guide">Color  Typography</Link></li>
														<li><Link href="/page-elements">Basic elements</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">All Sections</Link>
													<ul className="sub-menu">
														<li><Link href="/section-navigation"> Navigation </Link></li>
														<li><Link href="/section-hero"> Hero </Link></li>
														<li><Link href="/section-logo-cloud"> Logo cloud </Link></li>
														<li><Link href="/section-cta"> Call to action </Link></li>
														<li><Link href="/section-how-it-work"> How it work </Link></li>
														<li><Link href="/section-services"> Services </Link></li>
														<li><Link href="/section-team"> Team </Link></li>
														<li><Link href="/section-pricing"> Pricing </Link></li>
														<li><Link href="/section-faqs"> FAQS </Link></li>
														<li><Link href="/section-testimonial"> Testimonials </Link></li>
														<li><Link href="/section-blog"> Blog </Link></li>
														<li><Link href="/section-newsletter"> Newsletter </Link></li>
														<li><Link href="/section-footer"> Footer </Link></li>
														<li><Link href="/section-features"> Features </Link></li>
														<li><Link href="/section-projects"> Projects </Link></li>
														<li><Link href="/section-contact"> Contact </Link></li>
														<li><Link href="/section-static"> Static </Link></li>
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="pb-120 border-top" />
				{/*top-bar*/}
				<div className="top-bar position-relative z-4">
					<div className="container-fluid bg-primary">
						<div className="container-fluid py-2 px-8">
							<div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
								<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
									<Link href="/mailto:contact@infinia.com" className="pe-4 d-none d-md-flex">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
											<path d="M3.9585 6.95834C3.9585 6.03786 4.70469 5.29167 5.62516 5.29167H14.3752C15.2957 5.29167 16.0418 6.03786 16.0418 6.95834V14.0417C16.0418 14.9622 15.2957 15.7083 14.3752 15.7083H5.62516C4.70469 15.7083 3.9585 14.9622 3.9585 14.0417V6.95834Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M4.5835 5.91667L10.0002 10.7083L15.4168 5.91667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<span className="text-white ps-1 fs-7">contact@infinia.com</span>
									</Link>
									<div className="location d-flex align-items-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
											<path d="M5.62516 16.5418H14.3751C15.2956 16.5418 16.0418 15.7957 16.0418 14.8752V8.6252L10.0001 4.45853L3.9585 8.6252V14.8752C3.9585 15.7957 4.7047 16.5418 5.62516 16.5418Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.12476 13.6244C8.12476 12.7039 8.87098 11.9577 9.7914 11.9577H10.2081C11.1286 11.9577 11.8747 12.7039 11.8747 13.6244V16.5411H8.12476V13.6244Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<span className="text-white ps-1 fs-7">0811 Erdman Prairie, Joaville CA</span>
									</div>
								</div>
								<div className="d-flex d-none d-lg-flex align-items-center justify-content-center justify-content-lg-end">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
										<path d="M10.0002 16.5417C13.3369 16.5417 16.0418 13.8367 16.0418 10.5C16.0418 7.16327 13.3369 4.45833 10.0002 4.45833C6.66344 4.45833 3.9585 7.16327 3.9585 10.5C3.9585 13.8367 6.66344 16.5417 10.0002 16.5417Z" stroke="white" strokeWidth="1.5" />
										<path d="M10 7.16667V10.5L11.6667 12.1667" stroke="white" strokeWidth="1.5" />
									</svg>
									<span className="text-white pe-3 ps-1 fs-7">Mon-Fri: 10:00am - 09:00pm</span>
									<Link href="https://www.facebook.com/" className=" text-white icon-shape icon-md">
										<svg xmlns="http://www.w3.org/2000/svg" width={9} height={17} viewBox="0 0 9 17" fill="none">
											<path d="M8.22314 9.20334H5.91602V16.094H2.83984V9.20334H0.317383V6.37326H2.83984V4.18918C2.83984 1.72824 4.31641 0.343964 6.56201 0.343964C7.63867 0.343964 8.77686 0.559296 8.77686 0.559296V2.98947H7.51562C6.28516 2.98947 5.91602 3.72775 5.91602 4.52756V6.37326H8.65381L8.22314 9.20334Z" fill="white" />
										</svg>
									</Link>
									<Link href="https://twitter.com/" className=" text-white icon-shape icon-md">
										<svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} viewBox="0 0 15 14" fill="none">
											<path d="M11.2163 0.820312H13.3696L8.63232 6.26514L14.231 13.6172H9.86279L6.41748 9.15674L2.51074 13.6172H0.32666L5.40234 7.83398L0.0498047 0.820312H4.54102L7.61719 4.91162L11.2163 0.820312ZM10.4473 12.3252H11.647L3.89502 2.05078H2.60303L10.4473 12.3252Z" fill="white" />
										</svg>
									</Link>
									<Link href="https://www.linkedin.com/" className=" text-white icon-shape icon-md">
										<svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
											<path d="M13.7188 0.328537C14.2417 0.328537 14.7031 0.789963 14.7031 1.34367V13.1254C14.7031 13.6791 14.2417 14.1098 13.7188 14.1098H1.87549C1.35254 14.1098 0.921875 13.6791 0.921875 13.1254V1.34367C0.921875 0.789963 1.35254 0.328537 1.87549 0.328537H13.7188ZM5.07471 12.141V5.58879H3.04443V12.141H5.07471ZM4.05957 4.66594C4.70557 4.66594 5.22852 4.14299 5.22852 3.49699C5.22852 2.851 4.70557 2.29729 4.05957 2.29729C3.38281 2.29729 2.85986 2.851 2.85986 3.49699C2.85986 4.14299 3.38281 4.66594 4.05957 4.66594ZM12.7344 12.141V8.54192C12.7344 6.7885 12.3345 5.40422 10.2734 5.40422C9.28906 5.40422 8.6123 5.95793 8.33545 6.48088H8.30469V5.58879H6.3667V12.141H8.39697V8.91106C8.39697 8.04973 8.55078 7.21916 9.62744 7.21916C10.6733 7.21916 10.6733 8.20354 10.6733 8.94182V12.141H12.7344Z" fill="white" />
										</svg>
									</Link>
									<Link href="https://www.behance.net/" className=" text-white icon-shape icon-md">
										<svg xmlns="http://www.w3.org/2000/svg" width={19} height={12} viewBox="0 0 19 12" fill="none">
											<path d="M7.65234 5.66483C8.9751 6.03397 9.62109 7.0491 9.62109 8.40262C9.62109 10.6175 7.77539 11.5711 5.77588 11.5711H0.515625V0.681427H5.65283C7.49854 0.681427 9.12891 1.20438 9.12891 3.38846C9.12891 4.46512 8.60596 5.17264 7.65234 5.66483ZM2.88428 2.52713V5.08035H5.31445C6.17578 5.08035 6.79102 4.71121 6.79102 3.78836C6.79102 2.77322 6.02197 2.52713 5.16064 2.52713H2.88428ZM5.46826 9.72537C6.42188 9.72537 7.22168 9.38699 7.22168 8.27957C7.22168 7.17215 6.57568 6.71072 5.49902 6.71072H2.88428V9.72537H5.46826ZM16.481 2.3118V1.23514H12.082V2.3118H16.481ZM18.2344 7.75662C18.2344 7.87967 18.2036 8.03348 18.2036 8.15652H12.5127C12.5127 9.41776 13.1895 10.156 14.4507 10.156C15.0967 10.156 15.958 9.81766 16.1733 9.1409H18.0806C17.4961 10.9251 16.2656 11.7864 14.3892 11.7864C11.8975 11.7864 10.3286 10.0945 10.3286 7.63358C10.3286 5.26492 11.959 3.44998 14.3892 3.44998C16.8501 3.44998 18.2344 5.41873 18.2344 7.75662ZM12.5127 6.77225H16.0503C15.958 5.72635 15.4043 5.11111 14.2969 5.11111C13.2817 5.11111 12.5742 5.75711 12.5127 6.77225Z" fill="white" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Navbar */}
				<header>
					<nav className="navbar navbar-expand-lg navbar-light w-100 border-bottom z-999">
						<div className="container-fluid px-lg-8">
							<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
								<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
								<span>Infinia</span>
							</Link>
							<div className="d-none d-lg-flex">
								<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Home
										</Link>
										<div className="dropdown-menu fix">
											<ul className="list-unstyled">
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M16.1143 9.19978H12.8916V2.14741C12.8916 1.99512 12.7913 1.86072 12.6452 1.81775C12.4977 1.77478 12.3416 1.83287 12.2591 1.96075L5.59417 12.2801C5.52577 12.386 5.52061 12.5204 5.58111 12.6311C5.64127 12.7414 5.75711 12.8102 5.88292 12.8102H9.10558V19.8522C9.10558 20.0045 9.20596 20.1389 9.35205 20.1819C9.38436 20.1912 9.41702 20.196 9.44933 20.196C9.5638 20.196 9.67346 20.1386 9.73808 20.0389L16.403 9.72984C16.4715 9.62397 16.4766 9.48956 16.4161 9.37887C16.356 9.26853 16.2401 9.19978 16.1143 9.19978Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.1</span>
															<span className="text-600 fs-7">Business Startup</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-2">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3205 8.75C16.752 8.457 17 7.991 17 7.5C17 7.009 16.752 6.543 16.3205 6.25C15.016 5.365 13.004 4 11.961 3.2915C11.3905 2.9045 10.6095 2.9045 10.039 3.2915C8.996 4 6.984 5.365 5.6795 6.25C5.248 6.543 5 7.009 5 7.5C5 7.991 5.248 8.457 5.6795 8.75C6.984 9.635 8.996 11 10.039 11.7085C10.6095 12.0955 11.3905 12.0955 11.961 11.7085L16.3205 8.75Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 9.8605L9.4775 12.5355C10.3815 13.149 11.6185 13.149 12.5225 12.5355L16.465 9.8605C16.807 10.153 17 10.5665 17 11C17 11.491 16.752 11.957 16.3205 12.25C15.016 13.135 13.004 14.5 11.961 15.2085C11.3905 15.5955 10.6095 15.5955 10.039 15.2085C8.996 14.5 6.984 13.135 5.6795 12.25C5.248 11.957 5 11.491 5 11C5 10.5665 5.193 10.153 5.535 9.8605Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.535 13.3605L9.4775 16.0355C10.3815 16.649 11.6185 16.649 12.5225 16.0355L16.465 13.3605C16.807 13.653 17 14.0665 17 14.5C17 14.991 16.752 15.457 16.3205 15.75C15.016 16.635 13.004 18 11.961 18.7085C11.3905 19.0955 10.6095 19.0955 10.039 18.7085C8.996 18 6.984 16.635 5.6795 15.75C5.248 15.457 5 14.991 5 14.5C5 14.0665 5.193 13.653 5.535 13.3605Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.2</span>
															<span className="text-600 fs-7">Application Landing</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-3">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path d="M19.3734 10.5591L16.8746 9.84501C15.7493 9.52775 14.7242 8.92703 13.8975 8.10031C13.0708 7.27359 12.4701 6.24855 12.1528 5.12326L11.4387 2.62442C11.4028 2.537 11.3417 2.46222 11.2632 2.40959C11.1847 2.35697 11.0923 2.32887 10.9978 2.32887C10.9033 2.32887 10.8109 2.35697 10.7324 2.40959C10.6539 2.46222 10.5928 2.537 10.5569 2.62442L9.84283 5.12326C9.52558 6.24855 8.92486 7.27359 8.09814 8.10031C7.27142 8.92703 6.24637 9.52775 5.12108 9.84501L2.62225 10.5591C2.5263 10.5863 2.44186 10.6441 2.38173 10.7237C2.3216 10.8033 2.28906 10.9003 2.28906 11C2.28906 11.0997 2.3216 11.1968 2.38173 11.2763C2.44186 11.3559 2.5263 11.4137 2.62225 11.4409L5.12108 12.155C6.24637 12.4723 7.27142 13.073 8.09814 13.8997C8.92486 14.7264 9.52558 15.7515 9.84283 16.8768L10.5569 19.3756C10.5841 19.4715 10.6419 19.556 10.7215 19.6161C10.8011 19.6762 10.8981 19.7088 10.9978 19.7088C11.0976 19.7088 11.1946 19.6762 11.2742 19.6161C11.3537 19.556 11.4115 19.4715 11.4387 19.3756L12.1528 16.8768C12.4701 15.7515 13.0708 14.7264 13.8975 13.8997C14.7242 13.073 15.7493 12.4723 16.8746 12.155L19.3734 11.4409C19.4694 11.4137 19.5538 11.3559 19.6139 11.2763C19.6741 11.1968 19.7066 11.0997 19.7066 11C19.7066 10.9003 19.6741 10.8033 19.6139 10.7237C19.5538 10.6441 19.4694 10.5863 19.3734 10.5591Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.3</span>
															<span className="text-600 fs-7">Marketing Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1 border-bottom">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-4">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
															<path fillRule="evenodd" clipRule="evenodd" d="M10.9965 2.80334L13.3633 4.90828C13.5282 5.05379 14.3915 5.8201 13.8095 6.98412C13.2275 8.14814 10.9965 11.8827 10.9965 11.8827C10.9965 11.8827 8.76543 8.14814 8.18342 6.98412C7.60141 5.8201 8.46472 5.05379 8.62962 4.90828L10.9965 2.80334Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M19.6235 9.05026L18.3624 11.9603C18.2751 12.164 17.8192 13.2213 16.5291 13.0273C15.239 12.8333 11 11.8827 11 11.8827C11 11.8827 13.8519 8.60405 14.7734 7.68253C15.6949 6.76101 16.694 7.34302 16.888 7.45943L19.6235 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M2.375 9.05026L3.63602 11.9603C3.72332 12.164 4.17923 13.2213 5.46936 13.0273C6.75948 12.8333 10.9985 11.8827 10.9985 11.8827C10.9985 11.8827 8.14661 8.59435 7.21539 7.68253C6.29387 6.76101 5.29475 7.34302 5.10075 7.45943L2.375 9.05026Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M5.62164 19.1966L8.7742 18.9056C8.9973 18.8862 10.1419 18.7795 10.365 17.4991C10.5784 16.209 10.9955 11.8827 10.9955 11.8827C10.9955 11.8827 6.98936 13.5705 5.82534 14.1622C4.66132 14.754 4.90383 15.8792 4.95233 16.1023L5.62164 19.1966Z" fill="#A38CFF" />
															<path fillRule="evenodd" clipRule="evenodd" d="M16.3661 19.1966L13.2135 18.9056C12.9904 18.8862 11.8458 18.7795 11.6227 17.4991C11.4093 16.209 10.9922 11.8827 10.9922 11.8827C10.9922 11.8827 14.9984 13.5705 16.1624 14.1622C17.3264 14.754 17.0839 15.8792 17.0354 16.1023L16.3661 19.1966Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.4</span>
															<span className="text-600 fs-7">IT Services</span>
														</span>
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/home-5">
														<svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width={18} height={17} viewBox="0 0 18 17" fill="none">
															<path d="M3.25295 4.15876C3.1292 4.13693 3.00309 4.12589 2.87813 4.12589C1.83455 4.12589 0.945478 4.87264 0.764063 5.90149L0.0328612 10.0485C-0.172874 11.2151 0.608946 12.3316 1.77559 12.5374C1.89935 12.5592 2.02546 12.5702 2.15041 12.5702C3.19391 12.5702 4.08307 11.8234 4.26448 10.7946L4.99573 6.64764C5.20138 5.48095 4.4196 4.36449 3.25295 4.15876Z" fill="#A38CFF" />
															<path d="M9.24512 2.25455C9.12137 2.23272 8.99525 2.22168 8.8703 2.22168C7.82676 2.22168 6.93764 2.96844 6.75627 3.99728L5.35351 11.9527C5.25386 12.5178 5.38028 13.088 5.70942 13.5581C6.03856 14.0281 6.53111 14.3419 7.09624 14.4416C7.21999 14.4634 7.34611 14.4745 7.47106 14.4745C8.5146 14.4745 9.40372 13.7277 9.58513 12.6989L10.9879 4.74344C11.1936 3.57675 10.4118 2.46029 9.24512 2.25455Z" fill="#A38CFF" />
															<path d="M16.6264 0.916441C16.2972 0.446361 15.8047 0.132602 15.2396 0.0329143C15.1158 0.0110861 14.9896 0 14.8646 0C13.8211 0 12.9321 0.746757 12.7507 1.77565L10.5644 14.1742C10.4648 14.7394 10.5912 15.3095 10.9204 15.7796C11.2495 16.2496 11.7421 16.5634 12.3071 16.6631C12.4309 16.685 12.557 16.696 12.682 16.696C13.7256 16.696 14.6147 15.9492 14.7961 14.9204L16.9823 2.5218C17.0819 1.95668 16.9556 1.38652 16.6264 0.916441Z" fill="#A38CFF" />
														</svg>
														<span className="ms-2">
															<span className="d-block fw-bold fs-6">Home page v.5</span>
															<span className="text-600 fs-7">Consulting Services</span>
														</span>
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Pages
										</Link>
										<div className="mega-menu fix start-50 translate-middle-x">
											<div className="container">
												<div className="row">
													<div className="col-12">
														<div className="mega-menu-content">
															<div className="row">
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">ABOUT US</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about">About us v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-2">About us v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-about-3">About us v.3</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">SERVICES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-1">Services v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-2">Services v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-3">Services v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-1">Services details v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-services-details-2">Services details v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">OUR TEAM</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-1">Our team v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-2">Our team v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-3">Our team v.3</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-4">Our team v.4</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-5">Our team v.5</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-6">Our team v.6</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-1">Team detail v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-team-detail-2">Team detail v.2</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">FEATURES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-1">Features v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-features-2">Features v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">PRICING</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-01">Pricing v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-pricing-02">Pricing v.2</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CONTACT</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-1">Contact v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-2">Contact v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-contact-3">Contact v.3</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">BLOG</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-1">Blog v.1</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-2">Blog v.2</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-blog-details">Blog details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">CASE STUDY</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study">Case Study</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-case-study-details">Case study details</Link></li>
																		</ul>
																		<p className="text-primary fw-bold mb-1 fs-7 mt-4">AUTHENTICATION</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-register">Register</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-login">Sign in</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">UTILITIES</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-work-process">Work Process</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-book-a-demo">Book a demo</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-integration">Integration</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-changelog">Change log</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-privacy-policy">Privacy policy</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-terms-conditions">Terms conditions</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-comming-soon">Comming soon</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-404">Error 404</Link></li>
																		</ul>
																	</div>
																</div>
																<div className="col-2">
																	<div className="mega-menu-list">
																		<p className="text-primary fw-bold mb-1 fs-7">STYLE GUIDE</p>
																		<ul className="list-unstyled">
																			<li><Link className="dropdown-item position-relative z-1" href="/page-style-guide">Color  Typography</Link></li>
																			<li><Link className="dropdown-item position-relative z-1" href="/page-elements">Basic elements</Link></li>
																		</ul>
																	</div>
																	<div className="position-relative bg-4 rounded-3 mt-5">
																		<img className="rounded-3" src="/assets/imgs/template/bg-card.png" alt="" />
																		<div className="position-absolute top-50 start-50 translate-middle z-0">
																			<img className="ms-3" src="/assets/imgs/logo/logo-dark.svg" alt="infinia" />
																			<p className="fs-7 fw-bold text-900 text-center my-3 text-nowrap">Multi-layout SaaS  <br /> Startup Website <br /> Template</p>
																			<div className="d-flex mt-3 ms-3">
																				<img src="/assets/imgs/other/avatar-1.png" alt="infinia" />
																				<img className="avt-hero" src="/assets/imgs/other/avatar-2.png" alt="infinia" />
																				<img className="avt-hero " src=" assets/imgs/other/avatar-3.png" alt="infinia" />
																			</div>
																			<Link href="#" className="btn btn-md btn-gradient fs-8 mt-3 text-nowrap">
																				Get this now
																				<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
																					<path d="M12.5477 11.3147V5.30603H6.53906" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																					<path d="M12.3707 5.48276L5.125 12.7284" stroke="white" strokeWidth="1.06034" strokeLinecap="round" strokeLinejoin="round" />
																				</svg>
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="position-absolute top-0 start-50 translate-middle-x z-0">
												<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0" />
										</div>
									</li>
									<li className="nav-item dropdown has-mega-menu-2">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Sections
										</Link>
										<div className="mega-menu fix">
											<div className="d-flex flex-wrap gap-2 position-relative z-1">
												<Link href="/section-navigation" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Navigation
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														09
													</span>
												</Link>
												<Link href="/section-hero" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Hero
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-logo-cloud" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Logo cloud
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-cta" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Call to action
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														15
													</span>
												</Link>
												<Link href="/section-how-it-work" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													How it work
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-services" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Services
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-team" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Team
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														07
													</span>
												</Link>
												<Link href="/section-pricing" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Pricing
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-faqs" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													FAQS
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-testimonial" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Testimonials
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														04
													</span>
												</Link>
												<Link href="/section-blog" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Blog
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-newsletter" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Newsletter
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
												<Link href="/section-footer" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Footer
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														05
													</span>
												</Link>
												<Link href="/section-features" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Features
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														13
													</span>
												</Link>
												<Link href="/section-projects" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Projects
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														02
													</span>
												</Link>
												<Link href="/section-contact" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Contact
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														06
													</span>
												</Link>
												<Link href="/section-static" className="btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex">
													Static
													<span className="rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1">
														03
													</span>
												</Link>
											</div>
											<div className="position-absolute bottom-0 end-0 z-0">
												<img src="/assets/imgs/other/bg-line.png" alt="infinia" />
											</div>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item dropdown menu-item-has-children">
										<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Style Guide
										</Link>
										<div className="dropdown-menu p-4 fix">
											<ul className="list-unstyled">
												<li className="position-relative border-bottom z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-style-guide">
														Style guide
													</Link>
												</li>
												<li className="position-relative z-1">
													<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/page-elements">
														Elements
													</Link>
												</li>
											</ul>
											<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
											<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
										</div>
									</li>
									<li className="nav-item">
										<Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-1">Contact</Link>
									</li>
								</ul>
							</div>
							<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
								<div className="d-lg-flex align-items-center pe-8 d-none">
									<Link href="/telto:+1234567890" className="icon-shape icon-lg bg-linear-2 rounded-circle mx-3">
										<svg className="d-block" xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
											<path className="stroke-white" d="M9.39286 5.25H6.56818C5.84017 5.25 5.25 5.84017 5.25 6.56818C5.25 13.8483 11.1517 19.75 18.4318 19.75C19.1598 19.75 19.75 19.1598 19.75 18.4318V15.6071L16.6429 13.5357L15.0317 15.1468C14.7519 15.4267 14.3337 15.5137 13.9821 15.3321C13.3858 15.024 12.4181 14.4452 11.4643 13.5357C10.4877 12.6045 9.91548 11.6011 9.62829 10.994C9.46734 10.6537 9.56052 10.2609 9.82669 9.99474L11.4643 8.35714L9.39286 5.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
									<div>
										<p className="mb-0 text-500 fs-8">Have Any Questions?</p>
										<p className="mb-0 text-900 fw-bold">+01 567 890 68</p>
									</div>
								</div>
								<Link href="/javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<div className="dark-light-switcher d-flex justify-content-center align-items-center icon-shape icon-md border bg-white rounded-3 ms-3 me-md-3 me-0">
									<i className="bi theme-icon bi-sun-fill" />
									<i className="bi theme-icon bi-moon-stars-fill" />
								</div>
								<Link href="#" className="btn btn-gradient d-none d-md-block">
									Get a Quote
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
										<g clipPath="url(#clip0_474_2370)">
											<path className="fill-white" d="M13.5633 4.06331L12.7615 4.86512L16.3294 8.43305H0.5V9.56699H16.3294L12.7615 13.1349L13.5633 13.9367L18.5 8.99998L13.5633 4.06331Z" fill="white" />
										</g>
										<defs>
											<clipPath>
												<rect width={18} height={18} fill="white" transform="translate(0.5)" />
											</clipPath>
										</defs>
									</svg>
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
						</div>
					</nav>
					{/* offCanvas-menu */}
					<div className="offCanvas__info">
						<div className="offCanvas__close-icon menu-close">
							<button><i className="far fa-window-close" /></button>
						</div>
						<div className="offCanvas__logo mb-30">
							<Link href="/"><img src="/assets/imgs/logo/logo-dark.svg" alt="Logo" /></Link>
						</div>
						<div className="offCanvas__side-info mb-30">
							<div className="contact-list mb-30">
								<h4>Chat with us</h4>
								<p className="mb-3">
									The support team is always<br />
									available 24/7
								</p>
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
							<div className="contact-list mb-30">
								<h4>Office Address</h4>
								<p>
									123/A, Miranda City Likaoli <br />
									Prikano, Dope
								</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Phone Number</h4>
								<p>(+01) 234 567 89</p>
								<p>(+01) 456 789 21</p>
							</div>
							<div className="contact-list mb-30">
								<h4>Business Emails</h4>
								<p><Link href="/mailto:contact@alithemes.com">contact@alithemes.com</Link></p>
								<p><Link href="/mailto:sale@alithemes.com ">sale@alithemes.com </Link></p>
							</div>
							<div className="contact-list mb-30">
								<h4>Help  support</h4>
								<p>Email <Link href="/mailto:support@alithemes.com">support@alithemes.com</Link> For help with a current product or service or refer to FAQs and developer tools.</p>
							</div>
						</div>
						<div className="offCanvas__social-icon mt-30">
							<Link href="/javascript:void(0)"><i className="fab fa-facebook-f" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-twitter" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-google-plus-g" /></Link>
							<Link href="/javascript:void(0)"><i className="fab fa-instagram" /></Link>
						</div>
					</div>
					<div className="offCanvas__overly" />
					{/* Offcanvas search */}
					<div className="offcanvas offcanvas-top offcanvasTop h-50" tabIndex={-1}>
						<div className="offcanvas-header">
							<button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
						</div>
						<div className="offcanvas-body">
							<div className="container">
								<div className="row py-md-5 py-2">
									<div className="col-12 col-lg-8 mx-auto">
										<h4 className="mb-2 fs-sm-5">What are you looking for?</h4>
										<p className="text-500 fs-6 mb-5">Explore our services and discover how we can help you achieve your goals</p>
										<div className="input-group" data-aos="zoom-in">
											<input type="text" className="form-control ps-5 rounded-start-pill" name="name" placeholder="Enter Your Keywords" />
											<button className="btn btn-primary rounded-end-pill">
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
										</div>
										<div className="d-flex flex-column flex-lg-row mt-5">
											<h6 className="d-inline me-2">Suggest:</h6>
											<div className="d-flex flex-wrap gap-2">
												<Link href="#">Startup</Link>
												<Link href="#">Agency</Link>
												<Link href="#">Creative</Link>
												<Link href="#">Consulting</Link>
												<Link href="#">IT services</Link>
												<Link href="#">Pricing</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Offcanvas search */}
					<div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
						<div className="mobile-header-wrapper-inner">
							<div className="mobile-header-logo">
								<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
									<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
									<span>Infinia</span>
								</Link>
								<div className="burger-icon burger-icon-white border rounded-3">
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
							<div className="mobile-header-content-area">
								<div className="perfect-scroll">
									<div className="mobile-menu-wrap mobile-header-border">
										<nav>
											<ul className="mobile-menu font-heading ps-0">
												<li className="has-children">
													<Link className="active" href="#">Homepages</Link>
													<ul className="sub-menu">
														<li><Link href="/">Home 1 - Business Startup</Link></li>
														<li><Link href="/home-2">Home 2 - Application Landing</Link></li>
														<li><Link href="/home-3">Home 3 - Marketing Services</Link></li>
														<li><Link href="/home-4">Home 4 - IT Services</Link></li>
														<li><Link href="/home-5">Home 5 - Consulting Services</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">About Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-about">About us v.1</Link></li>
														<li><Link href="/page-about-2">About us v.2</Link></li>
														<li><Link href="/page-about-3">About us v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Services</Link>
													<ul className="sub-menu">
														<li><Link href="/page-services-1">Services v.1</Link></li>
														<li><Link href="/page-services-2">Services v.2</Link></li>
														<li><Link href="/page-services-3">Services v.3</Link></li>
														<li><Link href="/page-services-details-1">Services details v.1</Link></li>
														<li><Link href="/page-services-details-2">Services details v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Our Team</Link>
													<ul className="sub-menu">
														<li><Link href="/page-team-1">Our team v.1</Link></li>
														<li><Link href="/page-team-2">Our team v.2</Link></li>
														<li><Link href="/page-team-3">Our team v.3</Link></li>
														<li><Link href="/page-team-4">Our team v.4</Link></li>
														<li><Link href="/page-team-5">Our team v.5</Link></li>
														<li><Link href="/page-team-6">Our team v.6</Link></li>
														<li><Link href="/page-team-detail-1">Team detail v.1</Link></li>
														<li><Link href="/page-team-detail-2">Team detail v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Features</Link>
													<ul className="sub-menu">
														<li><Link href="/page-features-1">Features v.1</Link></li>
														<li><Link href="/page-features-2">Features v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Pricing</Link>
													<ul className="sub-menu">
														<li><Link href="/page-pricing-01">Pricing v.1</Link></li>
														<li><Link href="/page-pricing-02">Pricing v.2</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Contact Us</Link>
													<ul className="sub-menu">
														<li><Link href="/page-contact-1">Contact v.1</Link></li>
														<li><Link href="/page-contact-2">Contact v.2</Link></li>
														<li><Link href="/page-contact-3">Contact v.3</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Blog  News</Link>
													<ul className="sub-menu">
														<li><Link href="/page-blog-1">Blog v.1</Link></li>
														<li><Link href="/page-blog-2">Blog v.2</Link></li>
														<li><Link href="/page-blog-details">Blog details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Case Study</Link>
													<ul className="sub-menu">
														<li><Link href="/page-case-study">Case Study</Link></li>
														<li><Link href="/page-case-study-details">Case study details</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Authentication</Link>
													<ul className="sub-menu">
														<li><Link href="/page-register">Register</Link></li>
														<li><Link href="/page-login">Sign in</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Utilities</Link>
													<ul className="sub-menu">
														<li><Link href="/page-work-process">Work Process</Link></li>
														<li><Link href="/page-book-a-demo">Book a demo</Link></li>
														<li><Link href="/page-integration">Integration</Link></li>
														<li><Link href="/page-changelog">Change log</Link></li>
														<li><Link href="/page-privacy-policy">Privacy policy</Link></li>
														<li><Link href="/page-terms-conditions">Terms conditions</Link></li>
														<li><Link href="/page-comming-soon">Comming soon</Link></li>
														<li><Link href="/page-404">Error 404</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">Style Guide</Link>
													<ul className="sub-menu">
														<li><Link href="/page-style-guide">Color  Typography</Link></li>
														<li><Link href="/page-elements">Basic elements</Link></li>
													</ul>
												</li>
												<li className="has-children">
													<Link href="#">All Sections</Link>
													<ul className="sub-menu">
														<li><Link href="/section-navigation"> Navigation </Link></li>
														<li><Link href="/section-hero"> Hero </Link></li>
														<li><Link href="/section-logo-cloud"> Logo cloud </Link></li>
														<li><Link href="/section-cta"> Call to action </Link></li>
														<li><Link href="/section-how-it-work"> How it work </Link></li>
														<li><Link href="/section-services"> Services </Link></li>
														<li><Link href="/section-team"> Team </Link></li>
														<li><Link href="/section-pricing"> Pricing </Link></li>
														<li><Link href="/section-faqs"> FAQS </Link></li>
														<li><Link href="/section-testimonial"> Testimonials </Link></li>
														<li><Link href="/section-blog"> Blog </Link></li>
														<li><Link href="/section-newsletter"> Newsletter </Link></li>
														<li><Link href="/section-footer"> Footer </Link></li>
														<li><Link href="/section-features"> Features </Link></li>
														<li><Link href="/section-projects"> Projects </Link></li>
														<li><Link href="/section-contact"> Contact </Link></li>
														<li><Link href="/section-static"> Static </Link></li>
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="pb-120 border-top" />


			</Layout>
		</>
	)
}