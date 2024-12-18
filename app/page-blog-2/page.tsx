
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageBlog2() {

	return (
		<>

			<Layout >

				{/*Blog 3*/}
				<section className="section-blog-3 position-relative border section-padding fix">
					<div className="container position-relative z-1">
						<div className="row align-items-end mb-5">
							<div className="col-md-auto col-12 me-auto">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
								</div>
								<h3 className="ds-3 mt-3 mb-3">Our Latest Articles</h3>
								<span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
							</div>
							<div className="col-md-auto col-12 pt-md-0 pt-3">
								<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
										<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
									</svg>
								</Link>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 pe-lg-8">
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-3/img-1.png" alt="infinia" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">10 Proven SEO Strategies to Boost Your Website Traffic in 2024</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</span>
								</Link>
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-3/img-2.png" alt="infinia" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">The Power of Branding: How to Create a Memorable Brand Identity</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</span>
								</Link>
							</div>
							<div className="col-lg-6 pe-lg-8">
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-3/img-3.png" alt="infinia" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">Why Consistent Brand Identity is Key to Business Success</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</span>
								</Link>
								<Link href="#" className="d-flex flex-md-row flex-column align-items-center mb-4 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-3/img-4.png" alt="infinia" />
									<span className="content ms-5 mt-md-0 mt-3">
										<h6 className="mb-2">Top Trends in Digital Marketing and How They Impact Your Business</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/blog-2/img-bg-line.png" alt="infinia" />
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--green" />
							<div className="bouncing-blob bouncing-blob--primary" />
						</div>
					</div>
				</section>
				<div className="container pt-120 @@classList">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="banner bg-primary-light rounded-3 position-relative px-8 py-lg-0 py-8">
								<div className="d-flex flex-column flex-lg-row align-items-center justify-content-between position-relative z-1">
									<h6 className="fw-regular ds-6 text-white">
										We are<span className="fw-bold"> Looking to <br />Expand </span> Our Team
									</h6>
									<img src="/assets/imgs/banner-2/img-1.png" alt="infinia" />
									<Link href="#" className="btn btn-success d-block mt-3 mt-lg-0">
										Explore Now
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</Link>
								</div>
								<img className="position-absolute top-0 end-0 z-0" src="/assets/imgs/services-details/bg-line-1.png" alt="infinia" />
								<img className="position-absolute bottom-0 start-0 z-0" src="/assets/imgs/services-details/bg-line-2.png" alt="infinia" />
								<img className="flickering position-absolute top-0 end-50 me-5 mt-3 z-0" src="/assets/imgs/banner-2/star-1.png" alt="infinia" />
								<img className="flickering position-absolute bottom-0 start-50 ms-md-10 mb-3 ps-10 z-0" src="/assets/imgs/banner-2/star-2.png" alt="infinia" />
							</div>
						</div>
					</div>
				</div>
				{/*Blog 7*/}
				<section className="section-blog-7 section-padding border-bottom">
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<h3 className="ds-3 mt-3 mb-3">Recent Posts</h3>
								<span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-10 mx-lg-auto mt-8">
								{/* prettier-ignore */}
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-1.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">The Power of Branding: How to Create a Memorable Brand Identity</h6>
										<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-2.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">business</span>
										</Link>
										<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-3.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-4.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-5.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
										</Link>
										<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
										<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center" data-aos="fade-zoom-in" data-aos-delay={100}>
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-7/img-6.png" alt="infinia" />
									<div className="ms-5 w-lg-50 me-auto">
										<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
											<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
										</Link>
										<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
										<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
									</div>
									<Link href="#" className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none">
										<svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
											<path className="fill-dark" d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z" fill="#111827" />
										</svg>
										<span className="ms-2 fw-bold text-900">Learn More</span>
									</Link>
								</div>
								<div className="border-top mb-8" />
								<div className="container">
									<div className="row pt-5 text-start">
										<div className="d-flex justify-content-start align-items-center">
											<nav aria-label="Page navigation example">
												<ul className="pagination gap-2">
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#" aria-label="Previous">
															<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
																<path className="stroke-dark" d="M9.49554 6.5L4.78125 11L9.49554 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M17.2143 11H5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">1</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">2</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">3</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#">...</Link>
													</li>
													<li className="page-item">
														<Link className="icon-xl fs-5 page-link pagination_item border-0 rounded-circle icon-shape fw-bold bg-neutral-100 text-900" href="#" aria-label="Next">
															<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
																<path className="stroke-dark" d="M12.5 6.5L17.2143 11L12.5 15.5" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
																<path className="stroke-dark" d="M16.9955 11H4.78125" stroke="#111827" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</Link>
													</li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Newsletter 2 */}
				<section className="section-newsletter-2 section-padding bg-primary position-relative">
					<div className="container position-relative fix">
						<div className="row align-items-center text-center position-relative z-1">
							<div className="col-lg-6 mx-auto">
								<div className="px-lg-3 text-center">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Join Our Community</span>
									</div>
									<h4 className="my-5 text-white">
										We are trusted by over 52,000+ clients. <br />
										Join them now and grow your business.
									</h4>
									<p className="fs-6 fw-medium text-white">By clicking the button, you are agreeing with our <Link href="#" className="text-decoration-underline link-hover-primary-light text-white">Term  Conditions</Link></p>
									<form className="input-group mt-5 position-relative">
										<input type="text" className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
											<button type="submit" className="bg-linear-2 px-3 py-3 m-3 fs-7 fw-bold border-0 text-white rounded-pill">Join Now</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}