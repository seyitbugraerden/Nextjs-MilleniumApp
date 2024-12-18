
import Layout from "@/components/layout/Layout"
export default function PageComingSoon() {

	return (
		<>

			<Layout >

				{/* Comming Soon */}
				<section className="section-comming-soon section-padding">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="text-start mb-lg-0 mb-5">
									<div className="d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
										<img src="/assets/imgs/features-1/dots.png" alt="infinia" />
										<span className="tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Under Construction</span>
									</div>
									<h3 className="ds-3 my-3">
										Get Notified <br />
										When We Launch
									</h3>
									<p className="fs-5 mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
									<div className="input-group mb-3 mt-4 position-relative">
										<input type="text" className="ps-5 py-3 form-control bg-neutral-100 rounded-start-pill border-2 border-end-0 border-white" name="name" placeholder="Enter your mail .." />
										<div className="bg-neutral-100 border-2 border border-start-0 border-white rounded-end-pill">
											<button className="btn btn-gradient px-3 py-3 m-3 fs-7 fw-bold border-0 rounded-pill" type="button">Join Now</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 text-lg-end text-center">
								<img src="/assets/imgs/cta-1/img-1.png" alt="infinia" />
							</div>
						</div>
					</div>
				</section>


			</Layout>
		</>
	)
}