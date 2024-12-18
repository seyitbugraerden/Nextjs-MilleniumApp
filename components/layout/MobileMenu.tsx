'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			{/* Offcanvas search */}
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img src="/assets/imgs/template/favicon.svg" alt="infinia" />
							<span>Infinia</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
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
										<li className={`has-children ${isAccordion === 1 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(1)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link className="active" href="#">Homepages</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}>
												<li><Link href="/">Home 1 - Business Startup</Link></li>
												<li><Link href="/home-2">Home 2 - Application Landing</Link></li>
												<li><Link href="/home-3">Home 3 - Marketing Services</Link></li>
												<li><Link href="/home-4">Home 4 - IT Services</Link></li>
												<li><Link href="/home-5">Home 5 - Consulting Services</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 2 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(2)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">About Us</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
												<li><Link href="/page-about">About us v.1</Link></li>
												<li><Link href="/page-about-2">About us v.2</Link></li>
												<li><Link href="/page-about-3">About us v.3</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 3 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(3)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Our Services</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
												<li><Link href="/page-services-1">Services v.1</Link></li>
												<li><Link href="/page-services-2">Services v.2</Link></li>
												<li><Link href="/page-services-3">Services v.3</Link></li>
												<li><Link href="/page-services-details-1">Services details v.1</Link></li>
												<li><Link href="/page-services-details-2">Services details v.2</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 4 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(4)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Our Team</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 4 ? "block" : "none"}` }}>
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
										<li className={`has-children ${isAccordion === 5 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(5)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Features</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 5 ? "block" : "none"}` }}>
												<li><Link href="/page-features-1">Features v.1</Link></li>
												<li><Link href="/page-features-2">Features v.2</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 6 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(6)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Pricing</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
												<li><Link href="/page-pricing-01">Pricing v.1</Link></li>
												<li><Link href="/page-pricing-02">Pricing v.2</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 7 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(7)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Contact Us</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 7 ? "block" : "none"}` }}>
												<li><Link href="/page-contact-1">Contact v.1</Link></li>
												<li><Link href="/page-contact-2">Contact v.2</Link></li>
												<li><Link href="/page-contact-3">Contact v.3</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 8 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(8)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Blog  News</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 8 ? "block" : "none"}` }}>
												<li><Link href="/page-blog-1">Blog v.1</Link></li>
												<li><Link href="/page-blog-2">Blog v.2</Link></li>
												<li><Link href="/page-blog-details">Blog details</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 9 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(9)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Case Study</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 9 ? "block" : "none"}` }}>
												<li><Link href="/page-case-study">Case Study</Link></li>
												<li><Link href="/page-case-study-details">Case study details</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 10 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(10)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Authentication</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 10 ? "block" : "none"}` }}>
												<li><Link href="/page-register">Register</Link></li>
												<li><Link href="/page-login">Sign in</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 11 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(11)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Utilities</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 11 ? "block" : "none"}` }}>
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
										<li className={`has-children ${isAccordion === 12 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(12)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">Style Guide</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 12 ? "block" : "none"}` }}>
												<li><Link href="/page-style-guide">Color  Typography</Link></li>
												<li><Link href="/page-elements">Basic elements</Link></li>
											</ul>
										</li>
										<li className={`has-children ${isAccordion === 13 ? "active" : ""}`}>
											<span className="menu-expand" onClick={() => handleAccordion(13)}>
												<i className="arrow-small-down"></i>
											</span>
											<Link href="#">All Sections</Link>
											<ul className="sub-menu" style={{ display: `${isAccordion == 13 ? "block" : "none"}` }}>
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
		</>
	)
}
