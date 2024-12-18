
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageTeam1() {

	return (
		<>

			<Layout >

				{/*Team 1*/}
				<section className="section-team-1 section-padding position-relative overflow-hidden">
					<div className="container">
						<div className="row position-relative z-1">
							<div className="text-center">
								<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
									<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
									<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">OUR TEAM MEMBERS</span>
								</div>
								<h3 className="ds-3 my-3" data-aos="fade-zoom-in" data-aos-delay={200}>Meet Our Team</h3>
								<p className="fs-5" data-aos="fade-zoom-in" data-aos-delay={300}>Meet the talented and passionate team members who drive our company forward every day. <br className="d-none d-lg-block" /> company forward every day.</p>
							</div>
						</div>
						<div className="row mt-6">
							{/* prettier-ignore */}
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-1.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Michael Anderson</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Co-Founder</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-2.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Strategy Development</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Software Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-3.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Sarah Brown</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Product Manager</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={400}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-4.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>David Clark </h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">UX/UI Designer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={100}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-5.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Jessica Carter</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">DevOps Engineer</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={200}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-6.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>Lauren Graham</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Data Analyst</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={300}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-7.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>James Bennett</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Sales Executive</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-lg-4 mb-7 text-center" data-aos="fade-zoom-in" data-aos-delay={400}>
								<div className="position-relative d-inline-block z-1">
									<div className="zoom-img rounded-3">
										<img className="img-fluid w-100" src="/assets/imgs/team-1/avatar-8.png" alt="infinia" />
									</div>
									<Link href="#" className="card-team text-start rounded-3 position-absolute bottom-0 start-0 end-0 z-1 backdrop-filter w-auto p-4 m-3 hover-up">
										<h6>William Foster</h6>
										<div className="d-flex">
											<span className="fs-6 text-600 me-auto">Marketing Specialist</span>
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="#007BFF">
												<path className="fill-white" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="white" />
											</svg>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/team-1/bg-line.png" alt="infinia" />
					</div>
					<div className="rotate-center ellipse-rotate-success position-absolute z-0" />
					<div className="rotate-center-rev ellipse-rotate-primary position-absolute z-0" />
				</section>
				{/* feature-13 */}
				<section className="section-feature-13 border-bottom border-top bg-1 section-padding">
					<div className="text-center container">
						<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
							<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
							<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Meet Our Team</span>
						</div>
						<h5 className="ds-5 mb-3 mt-4">
							We bring a rich variety of <br />
							experience from multiple fields.
						</h5>
						<p className="text-500">
							Leveraging Extensive Experience: Comprehensive Solutions Crafted <br />
							from Diverse Professional Backgrounds
						</p>
						<div className="container mt-8">
							<div className="d-flex">
								<div className="zoom-img rounded-3 me-2">
									<img src="/assets/imgs/features-13/img-1.png" alt="infinia" />
								</div>
								<div className="zoom-img rounded-3 ms-2">
									<img src="/assets/imgs/features-13/img-2.png" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="container pt-120 pb-120">
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

			</Layout>
		</>
	)
}