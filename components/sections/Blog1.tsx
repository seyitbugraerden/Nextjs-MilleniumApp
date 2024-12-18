
import Link from "next/link"

export default function Blog1() {
	return (
		<>
			<section className="section-blog-1 @@padding">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-12 col-md-6 me-auto">
							<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
								<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
								<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">From Blog</span>
							</div>
							<h3 className="ds-3 mt-3 mb-3" data-aos="fade-zoom-in" data-aos-delay={100}>Our Latest Articles</h3>
							<span className="fs-5 fw-medium" data-aos="fade-zoom-in" data-aos-delay={200}>Explore the insights and trends shaping our industry</span>
						</div>
						<div className="col-12 col-md-6 mt-3 mt-md-0">
							<Link href="#" className="ms-md-5 fw-bold text-primary">See all articles
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
									<path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
								</svg>
							</Link>
						</div>
					</div>
					<div className="row">
						{/* prettier-ignore */}
						<div className="col-lg-4 text-start">
							<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={100}>
								<img className="rounded-3" src="/assets/imgs/blog-1/card-img-1.png" alt="infinia" />
								<div className="card-body p-0 bg-white">
									<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
										<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Business</span>
									</Link>
									<h6 className="my-3">The Future of SaaS: Emerging Trends to Watch</h6>
									<p>As the SaaS industry continues to evolve, new trends are shaping the future of software delivery and consumption...</p>
								</div>
								<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
							</div>
						</div>
						<div className="col-lg-4 text-start">
							<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={200}>
								<img className="rounded-3" src="/assets/imgs/blog-1/card-img-2.png" alt="infinia" />
								<div className="card-body p-0 bg-white">
									<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
										<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">Technology</span>
									</Link>
									<h6 className="my-3">Choosing the Right SaaS Solution for Your Business</h6>
									<p>Selecting the right SaaS solution can be a daunting task with so many options available. This guide breaks down the key...</p>
								</div>
								<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
							</div>
						</div>
						<div className="col-lg-4 text-start">
							<div className="card border-0 rounded-3 mt-8 position-relative d-inline-flex" data-aos="fade-zoom-in" data-aos-delay={300}>
								<img className="rounded-3" src="/assets/imgs/blog-1/card-img-3.png" alt="infinia" />
								<div className="card-body p-0 bg-white">
									<Link href="#" className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3">
										<span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">security</span>
									</Link>
									<h6 className="my-3">The Importance of Data Security in Your SaaS Projects</h6>
									<p>Data security is a top priority for businesses adopting SaaS solutions. With increasing cyber threats, it's essential to understand...</p>
								</div>
								<Link href="#" className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
