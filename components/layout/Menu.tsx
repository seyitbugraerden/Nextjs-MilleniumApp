import Link from "next/link"

export default function Menu() {

	return (
		<>

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
		</>
	)
}
