
import Link from "next/link"

export default function Newsletter3() {
	return (
		<>
			<section className="section-newsletter-3 position-relative pb-120">
				<div className="container">
					<div className="pt-120 pb-120 bg-4 rounded-5 position-relative">
						<div className="row align-items-center text-center position-relative z-1">
							<div className="col-lg-6 mx-auto">
								<div className="px-lg-3 text-center">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Let’s work together</span>
									</div>
									<h4 className="my-5">We are trusted by over <span className="text-primary">52,000+ clients.</span> <br className="d-none d-lg-block" /> Join them now and grow your business.</h4>
									<p className="fs-6 fw-medium text-900">By clicking the button, you are agreeing with our <Link href="#" className="text-decoration-underline link-hover-primary-light">Term  Conditions</Link></p>
									<form className="input-group mt-5 position-relative px-2">
										<input type="text" className="ps-5 py-3 form-control bg-white rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-white border-2 border border-start-0 border-white rounded-end-pill">
											<button type="submit" className="bg-linear-2 px-3 py-3 m-3 fs-7 fw-bold border-0 text-white rounded-pill">Join Now</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="position-absolute bottom-0 start-0 m-10 pb-5 ps-4">
							<img className=" " src="/assets/imgs/newsletter-3/icon-1.png" alt="infinia" />
						</div>
						<div className="position-absolute top-0 end-0 m-10 pb-5 ps-4">
							<img className=" " src="/assets/imgs/newsletter-3/icon-2.png" alt="infinia" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
