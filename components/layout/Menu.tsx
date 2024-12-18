import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="d-none d-lg-flex">
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center py-2">
          <li className="nav-item dropdown menu-item-has-children">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ana Sayfa
            </Link>
            <div className="dropdown-menu fix">
              <ul className="list-unstyled">
                <li className="position-relative z-1 border-bottom">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="/"
                  >
                    <svg
                      className="mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M16.1143 9.19978H12.8916V2.14741C12.8916 1.99512 12.7913 1.86072 12.6452 1.81775C12.4977 1.77478 12.3416 1.83287 12.2591 1.96075L5.59417 12.2801C5.52577 12.386 5.52061 12.5204 5.58111 12.6311C5.64127 12.7414 5.75711 12.8102 5.88292 12.8102H9.10558V19.8522C9.10558 20.0045 9.20596 20.1389 9.35205 20.1819C9.38436 20.1912 9.41702 20.196 9.44933 20.196C9.5638 20.196 9.67346 20.1386 9.73808 20.0389L16.403 9.72984C16.4715 9.62397 16.4766 9.48956 16.4161 9.37887C16.356 9.26853 16.2401 9.19978 16.1143 9.19978Z"
                        fill="#A38CFF"
                      />
                    </svg>
                    <span className="ms-2">
                      <span className="d-block fw-bold fs-6">Test</span>
                      <span className="text-600 fs-7">Business Startup</span>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
              <div className="ellipse-rotate-primary-sm position-absolute top-50 z-0" />
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
            >
              Hizmetlerimiz
            </Link>
          </li>
          {/* <li className="nav-item dropdown has-mega-menu">
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
					</li> */}
          {/* <li className="nav-item dropdown has-mega-menu-2">
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
					</li> */}
          <li className="nav-item dropdown menu-item-has-children">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Kurumsal
            </Link>
            <div className="dropdown-menu p-4 fix">
              <ul className="list-unstyled">
                <li className="position-relative border-bottom z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="#"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li className="position-relative z-1">
                  <Link
                    className="dropdown-item position-relative z-1 d-flex align-items-start"
                    href="#"
                  >
                    Misyon ve Vizyon
                  </Link>
                </li>
              </ul>
              <div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
              <div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/page-contact-1"
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
