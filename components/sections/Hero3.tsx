
import Marquee from "react-fast-marquee";
import Link from "next/link"

export default function Hero3() {
	return (
		<>
			<section className="section-hero-3 position-relative fix section-padding">
				<div className="container">
					<div className="row align-items-center position-relative">
						<div className="col-lg-7 position-relative z-1 mb-lg-0 pb-10 mb-">
							<div className="text-start mb-lg-0 mb-5">
								<div className="border-linear-1 rounded-pill d-inline-block mb-3">
									<div className="text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2">🚀 Free Lifetime Update</div>
								</div>
								<div className="d-flex align-items-center">
									<h1 className="ds-1 my-3 me-4 lh-1">Elevate your</h1>
									<div className="mt-3 d-none d-md-flex">
										<div className="avt-hero">
											<img className=" icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle" src="/assets/imgs/hero-3/avatar-1.png" alt="infinia" />
										</div>
										<div className="avt-hero">
											<img className=" icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle" src="/assets/imgs/hero-3/avatar-2.png" alt="infinia" />
										</div>
										<div className="avt-hero icon-shape icon-xxl border border-5 border-white-keep bg-primary-soft rounded-circle">
											<img src=" assets/imgs/hero-3/icon.svg" alt="infinia" />
										</div>
									</div>
								</div>
								<h1 className="ds-1 lh-1 m-0">brand with Infinia.</h1>
								<p className="fs-5 text-900 my-6">
									Access top-tier group mentoring plans and <br />
									exclusive professional benefits for your team.
								</p>
								<Link href="#" className="btn btn-gradient">
									Get Free Quote
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<div className="mt-6 pt-4 max-w-300px">
									<p className="text-uppercase mb-2">Trusted by the best</p>
									<div className="carouselTicker carouselTicker-right">
										<ul className="carouselTicker__list">
											<Marquee direction="right">
												<li className="carouselTicker__item mx-2">
													<img className="filter-invert rounded-4" src="/assets/imgs/hero-3/logo-1.png" alt="infinia" />
												</li>
												<li className="carouselTicker__item mx-2">
													<img className="rounded-4" src="/assets/imgs/hero-3/logo-2.png" alt="infinia" />
												</li>
												<li className="carouselTicker__item mx-2">
													<img className="rounded-4" src="/assets/imgs/hero-3/logo-3.png" alt="infinia" />
												</li>
											</Marquee>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-7 position-xl-absolute mb-lg-10 top-50 end-0 translate-middle-lg-y z-0">
							<div className="row">
								<div className="col-6 align-self-end">
									<div className="border-5 border-white border rounded-4  mb-4 d-block d-xl-none">
										<img className="rounded-4" src="/assets/imgs/hero-3/img-4.png" alt="infinia" />
									</div>
									<div className="border-5 border-white border rounded-4">
										<img className="rounded-4" src="/assets/imgs/hero-3/img-3.png" alt="infinia" />
									</div>
								</div>
								<div className="col-6 align-self-end">
									<div className="border-5 border-white border rounded-4 mb-4">
										<img className="rounded-4" src="/assets/imgs/hero-3/img-1.png" alt="infinia" />
									</div>
									<div className="border-5 border-white border rounded-4">
										<img className="rounded-4" src="/assets/imgs/hero-3/img-2.png" alt="infinia" />
									</div>
								</div>
							</div>
							<div className="position-absolute top-50 start-50 translate-middle pb-10 pe-10">
								<img className="rotateme" src="/assets/imgs/hero-3/star-rotate.png" alt="infinia" />
							</div>
							<div className="position-absolute top-50 start-50 translate-middle">
								<div className="ellipse-primary" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
