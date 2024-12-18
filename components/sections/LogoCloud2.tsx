import Marquee from "react-fast-marquee";


export default function LogoCloud2() {
	return (
		<>
			<div className="section-logo-cloud container-fluid bg-dark-1 py-86 border-top border-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="border-linear-dark-2 rounded-pill d-inline-block mb-3">
								<div className="text-primary bg-dark-1 px-4 py-2 rounded-pill">Trusted by great companies</div>
							</div>
							<h1 className="ds-xs-4 fw-regular m-0 text-white opacity-50">We always evaluate our skills</h1>
							<h1 className="fs-1 text-white m-0" data-aos="fade-zoom-in" data-aos-delay={200}>through our performance</h1>
						</div>
						<div className="col-lg-6">
							{/* Carausel Scroll */}
							<div className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
								<ul className="carouselTicker__list">
									<Marquee>
										<li className="carouselTicker__item">
											<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-1.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-2.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-3.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-4.png" alt="infinia" />
										</li>
									</Marquee>
								</ul>
							</div>
							<div className="carouselTicker carouselTicker-right mt-6 position-relative z-1">
								<ul className="carouselTicker__list">
									<Marquee direction="right">
										<li className="carouselTicker__item">
											<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-5.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-6.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item">
											<img className="rounded-4" src="/assets/imgs/logo-cloud-2/logo-7.png" alt="infinia" />
										</li>
									</Marquee>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
