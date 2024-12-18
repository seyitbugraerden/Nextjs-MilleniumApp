
import Link from "next/link"

export default function Hero2() {
	return (
		<>

			<section className="section-hero-2 position-relative fix section-padding pb-lg-0">
				<div className="container">
					<div className="row text-center position-relative z-1">
						<div className="col">
							<div className="border-linear-1 rounded-pill d-inline-block mb-2" data-aos="zoom-in" data-aos-delay={100}>
								<div className="text-primary bg-white px-4 py-2 rounded-pill fw-medium position-relative z-2">🚀 Free Lifetime Update</div>
							</div>
							<h3 className="ds-3 fw-normal position-relative z-2 mb-5">
								Online Conference Tools <br />
								<span className="fw-bold" data-aos="fade-zoom-in" data-aos-delay={20}>High-Quality</span> Video and Audio
							</h3>
							<div className="d-flex gap-3 flex-column flex-md-row justify-content-center">
								<Link href="#" className="btn btn-gradient" data-aos="fade-zoom-in" data-aos-delay={100}>
									Get Started
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								<Link href="/page-contact-1" className="btn btn-outline-secondary hover-up" data-aos="fade-zoom-in" data-aos-delay={300}>
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									Contact Us
								</Link>
							</div>
							<div className="mt-10 mt-md-8 position-relative z-1  text-900">
								<img src="/assets/imgs/hero-2/macbook.png" alt="infinia" data-aos="fade-up" data-aos-delay={100} />
								<img className="alltuchtopdown d-none d-md-block position-absolute bottom-0 end-0 pe-10 me-lg-10 mb-lg-10" src="/assets/imgs/hero-2/vector.png" alt="infinia" />
								<div className="position-md-absolute d-inline-block pt-10 pt-md-5 top-50 start-0 translate-middle-y mt-10">
									<div className="alltuchtopdown backdrop-filter rounded-4 p-4">
										<h6 className="text-900">Features</h6>
										<p className="fs-6 text-900">
											Discover why hundreds of millions <br />
											people use Infinia to chat and call <br />
											every day.
										</p>
										<ul className="list-unstyled phase-items text-900">
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">HD video calling</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">Smart messaging</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">Screen sharing</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">Private conversations</span>
											</li>
											<li className="d-flex align-items-center mt-2">
												<img src="/assets/imgs/hero-2/check.png" alt="infinia" />
												<span className="ms-2">Call recording</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="position-absolute top-0 start-0 ms-10 mt-10 pt-10">
								<img className="flickering" src="/assets/imgs/hero-2/star-1.png" alt="infinia" />
							</div>
							<div className="rotateme position-absolute top-0 end-0 me-10 pe-8 z-0">
								<img className="flickering" src="/assets/imgs/hero-2/star-3.png" alt="infinia" />
							</div>
							<div className="position-absolute top-50 end-0 translate-middle-y pe-md-10 pe-5 pt-10 mt-8">
								<div className="shake">
									<img className="flickering" src="/assets/imgs/hero-2/star-2.png" alt="infinia" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="position-absolute top-0 start-50 translate-middle-x">
					<img src="/assets/imgs/hero-2/bg-line.png" alt="infinia" />
				</div>
				<div className="bouncing-blobs-container">
					<div className="bouncing-blobs-glass" />
					<div className="bouncing-blobs">
						<div className="bouncing-blob bouncing-blob--green" />
						<div className="bouncing-blob bouncing-blob--green" />
						<div className="bouncing-blob bouncing-blob--white" />
						<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
						<div className="bouncing-blob bouncing-blob--purple" />
						<div className="bouncing-blob bouncing-blob--purple" />
						<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
					</div>
				</div>
				<div className="position-absolute top-50 start-0 translate-middle-y d-none d-md-block z-2">
					<div className="socials rotate-90 bg-white px-3 py-2 rounded-pill d-inline-flex d-flex align-items-center justify-content-center">
						<p className="text-900 mb-0">Follow us:</p>
						<ul className="list-unstyled d-flex mb-0">
							<li className="ms-3">
								<Link href="http://www.facebook.com" target="_blank">
									<span className="icon">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
											<path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
										</svg>
									</span>
								</Link>
							</li>
							<li className="ms-3">
								<Link href="http://www.twitter.com" target="_blank">
									<span className="icon">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
											<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
										</svg>
									</span>
								</Link>
							</li>
							<li className="ms-3">
								<Link href="https://www.behance.net/" target="_blank">
									<span className="icon">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
										</svg>
									</span>
								</Link>
							</li>
							<li className="ms-3">
								<Link href="https://www.youtube.com/" target="_blank">
									<span className="icon">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
											<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
										</svg>
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>

		</>
	)
}
