
import Link from "next/link"

export default function Blog5() {
	return (
		<>
			<section className="section-blog-1 section-padding position-relative border-top border-bottom">
				<div className="container position-relative z-2">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
							</div>
							<h3 className="ds-3 mt-3 mb-3">Our Latest Articles</h3>
							<span className="fs-5 fw-medium text-900">Explore the insights and trends shaping our industry</span>
						</div>
						<div className="col-lg-auto">
							<Link href="#" className="fw-bold text-primary btn bg-white hover-up shadow-2 mt-lg-0 mt-5 ms-lg-auto">See all articles
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
									<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
								</svg>
							</Link>
						</div>
					</div>
					<div className="row mt-8 align-items-center">
						<div className="col-lg-7">
							<div className="card-team position-relative d-flex flex-lg-row flex-column align-items-center rounded-3 border  card-hover shadow-2 mb-lg-0 mb-8">
								<img className="rounded rounded-bottom-0 rounded-start-lg rounded-end-lg-0 w-100 w-lg-auto" src="/assets/imgs/blog-5/img-1.png" alt="infinia" />
								<div className="bg-white align-self-stretch rounded rounded-start-lg-0 p-5">
									<Link href="#" className="z-1 position-relative bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-3 py-1 mb-2">
										<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">business</span>
									</Link>
									<h6 className="mb-3">The Future of SaaS: Emerging Trends to Watch</h6>
									<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									<div className="d-flex align-items-center justify-content-between mt-5 pt-5 border-top">
										<div className="d-flex align-items-center position-relative z-1">
											<div className="icon-shape rounded-circle border border-2 border-white">
												<img className="rounded-circle" src="/assets/imgs/blog-4/avatar-1.png" alt="infinia" />
											</div>
											<div className="ms-3">
												<h6 className="fs-7 m-0 mb-1">Evara Rose</h6>
												<p className="mb-0 fs-8">17 May 2024</p>
											</div>
											<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
										</div>
										<div className="arrow-icon icon-shape icon-md bg-white rounded-circle border">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
												<path d="M17.25 15.5322V7.03223H8.75" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M17 7.28223L6.75 17.5322" stroke="#6D4DF2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
									<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div>
								<Link href="#" className="d-flex flex-column flex-md-row align-items-center hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-2.png" alt="infinia" />
									<div className="content ms-5 mt-4 mt-md-0">
										<h6 className="mb-2">Why Consistent Brand Identity is Key to Business Success</h6>
										<p className="mb-0">As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
								</Link>
								<Link href="#" className="d-flex flex-column flex-md-row align-items-center mt-7 hover-up">
									<img className="rounded-3 w-100 w-md-auto" src="/assets/imgs/blog-5/img-3.png" alt="infinia" />
									<div className="content ms-5 mt-4 mt-md-0">
										<h6 className="mb-2">The Importance of Data Security in Your SaaS Projects</h6>
										<p className="mb-0">As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="bouncing-blobs-container">
					<div className="bouncing-blobs-glass" />
					<div className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
					</div>
				</div>
			</section>
		</>
	)
}
