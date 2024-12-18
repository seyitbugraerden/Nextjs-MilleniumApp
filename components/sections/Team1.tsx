
import Link from "next/link"

export default function Team1() {
	return (
		<>

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
		</>
	)
}
