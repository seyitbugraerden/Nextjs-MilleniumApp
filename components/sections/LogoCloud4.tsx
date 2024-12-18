
import Marquee from "react-fast-marquee";
export default function LogoCloud4() {
	return (
		<>


			<div className="container-fluid mt-8 mt-lg-0 bg-4">
				<div className="container">
					<div className="row">
						{/* Carausel Scroll */}
						<div className="carouselTicker carouselTicker-right my-7 position-relative z-1">
							<ul className="carouselTicker__list">
								<Marquee direction="right">
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud-4/logo-1.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud-4/logo-2.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud-4/logo-3.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud-4/logo-4.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud-4/logo-5.svg" alt="infinia" />
									</li>
									<li className="carouselTicker__item">
										<img src="/assets/imgs/logo-cloud-4/logo-6.svg" alt="infinia" />
									</li>
								</Marquee>
							</ul>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}
