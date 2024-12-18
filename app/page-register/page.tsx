
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function PageRegister() {

	return (
		<>

			<Layout >


				{/* Section Register */}
				<section className="position-relative border-bottom">
					<div className="container">
						<div className="row pt-7 pb-120">
							<div className="col-lg-5 ms-auto ps-lg-10 text-center">
								<h3>Create an account</h3>
								<p className="text-500">Create an account today and start using our platform</p>
								<Link href="#" className="btn rounded-3 bg-white border w-100 mb-3">
									<img src="/assets/imgs/other/icon-gg.svg" alt="infinia" />
									<span className="fs-7 text-900 fw-bold ms-1">Sign up with Google</span>
								</Link>
								<Link href="#" className="btn rounded-3 bg-white border w-100 mb-3">
									<img className="filter-invert" src="/assets/imgs/other/icon-apid.svg" alt="infinia" />
									<span className="fs-7 text-900 fw-bold ms-1">Sign up with Google</span>
								</Link>
								<Link href="#" className="btn rounded-3 bg-white border w-100 mb-3">
									<img className="filter-invert" src="/assets/imgs/other/icon-twt.svg" alt="infinia" />
									<span className="fs-7 text-900 fw-bold ms-1">Sign up with Google</span>
								</Link>
								<div className="border-top mt-3 mb-2 position-relative">
									<p className="text-500 position-absolute top-50 start-50 translate-middle bg-white px-2">or sign up by email</p>
								</div>
								<div className="col text-start">
									<label htmlFor="name" className="form-label mt-2 text-900">Username *</label>
									<div className="input-group d-flex align-items-center">
										<div className="icon-input border border-end-0 rounded-3 rounded-end-0 ps-3">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-dark" d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25 8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-dark" d="M6.84723 19.25H17.1522C18.2941 19.25 19.1737 18.2681 18.6405 17.2584C17.856 15.7731 16.0677 14 11.9997 14C7.93174 14 6.1434 15.7731 5.35897 17.2584C4.8257 18.2681 5.70531 19.25 6.84723 19.25Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<input type="text" className="form-control ms-0 border rounded-3 rounded-start-0 border-start-0" name="name" placeholder="Enter your username" id="name" aria-label="username" />
									</div>
								</div>
								<div className="col text-start">
									<label htmlFor="inputEmail4" className="form-label mt-2 text-900">Email *</label>
									<div className="input-group d-flex align-items-center">
										<div className="icon-input border border-end-0 rounded-3 rounded-end-0 ps-3">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-dark" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-dark" d="M5.5 6.5L12 12.25L18.5 6.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<input type="text" className="form-control ms-0 border rounded-3 rounded-start-0 border-start-0" name="name" placeholder="Email address" id="inputEmail4" aria-label="email" />
									</div>
								</div>
								<div className="col text-start">
									<label htmlFor="password" className="form-label mt-2 text-900">Password *</label>
									<div className="input-group d-flex align-items-center">
										<div className="icon-input border border-end-0 rounded-3 rounded-end-0 ps-3">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path className="stroke-dark" d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H9.25C9.80228 4.75 10.25 5.19772 10.25 5.75V9.25C10.25 9.80228 9.80228 10.25 9.25 10.25H5.75C5.19772 10.25 4.75 9.80228 4.75 9.25V5.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-dark" d="M4.75 14.75C4.75 14.1977 5.19772 13.75 5.75 13.75H9.25C9.80228 13.75 10.25 14.1977 10.25 14.75V18.25C10.25 18.8023 9.80228 19.25 9.25 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V14.75Z" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-dark" d="M13.75 5.75C13.75 5.19772 14.1977 4.75 14.75 4.75H18.25C18.8023 4.75 19.25 5.19772 19.25 5.75V9.25C19.25 9.80228 18.8023 10.25 18.25 10.25H14.75C14.1977 10.25 13.75 9.80228 13.75 9.25V5.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												<path className="stroke-dark" d="M13.75 14.75C13.75 14.1977 14.1977 13.75 14.75 13.75H18.25C18.8023 13.75 19.25 14.1977 19.25 14.75V18.25C19.25 18.8023 18.8023 19.25 18.25 19.25H14.75C14.1977 19.25 13.75 18.8023 13.75 18.25V14.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<input type="password" className="form-control ms-0 border rounded-3 rounded-start-0 border-start-0" name="name" placeholder="at least 8 characters" id="password" aria-label="password" />
									</div>
								</div>
								<div className="col-12 mt-2">
									<div className="form-check text-start">
										<input className="form-check-input" type="checkbox" id="gridCheck" />
										<label className="form-check-label text-500 fs-7" htmlFor="gridCheck"> I agree to term and conditions </label>
									</div>
								</div>
								<div className="col-12 mt-5">
									<button type="submit" className="btn btn-primary w-100">
										Create new account
										<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
											<g clipPath="url(#clip0_741_28206)">
												<path className="stroke-white" d="M21.6059 12.256H1V11.744H21.6059H22.813L21.9594 10.8905L17.5558 6.4868L17.9177 6.12484L23.7929 12L17.9177 17.8751L17.5558 17.5132L21.9594 13.1095L22.813 12.256H21.6059Z" stroke="white" />
											</g>
											<defs>
												<clipPath>
													<rect width={24} height={24} fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</button>
								</div>
								<p className="text-500 fs-7 mt-5">Already have an account? <Link href="#" className="text-900 text-decoration-underline fs-7">Login Here</Link></p>
							</div>
						</div>
					</div>
					<div className="position-lg-absolute start-0 bottom-0 top-0">
						<img className="h-100 w-100 object-fit-cover" src="/assets/imgs/other/img-7.png" alt="infinia" />
						<div className="position-absolute bottom-0 end-0 m-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
							<p className="pt-2 text-white fs-5">
								Loved by over 4k <br />
								happy clients
							</p>
							<div className="d-flex align-items-center justify-content-center py-4">
								<img src="/assets/imgs/features-3/avatar-1.png" alt="infinia" />
								<img className="avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="infinia" />
								<img className="avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="infinia" />
							</div>
							<div className="d-flex align-items-center justify-content-center">
								<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
									<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#64E1B0" />
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
									<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#64E1B0" />
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
									<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#64E1B0" />
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
									<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#64E1B0" />
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 26 26" fill="none">
									<path d="M10.8881 5.26869C11.4269 3.61033 13.7731 3.61033 14.3119 5.26869L15.0248 7.46262C15.2657 8.20426 15.9568 8.70639 16.7367 8.70639H19.0435C20.7872 8.70639 21.5122 10.9377 20.1015 11.9626L18.2352 13.3185C17.6044 13.7769 17.3404 14.5894 17.5813 15.331L18.2942 17.5249C18.833 19.1833 16.935 20.5623 15.5243 19.5374L13.658 18.1815C13.0271 17.7231 12.1729 17.7231 11.542 18.1815L9.67572 19.5374C8.26504 20.5623 6.36697 19.1833 6.90581 17.5249L7.61866 15.331C7.85963 14.5894 7.59565 13.7769 6.96477 13.3185L5.0985 11.9626C3.68782 10.9377 4.41282 8.70639 6.15652 8.70639H8.46335C9.24316 8.70639 9.93428 8.20426 10.1752 7.46262L10.8881 5.26869Z" fill="#64E1B0" />
								</svg>
							</div>
						</div>
					</div>
				</section>
				<section className="section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 pe-6">
								<div className="bg-success rounded-circle d-inline-flex icon-sm icon-shape p-4">
									<h5 className="m-0 text-white">1</h5>
								</div>
								<h6 className="mt-3">Register</h6>
								<p className="text-500">All you need is your name, email and a strong password, Or use your social media accounts.</p>
							</div>
							<div className="col-lg-3 col-md-6 pe-6">
								<div className="bg-primary rounded-circle d-inline-flex icon-sm icon-shape p-4">
									<h5 className="m-0 text-white">2</h5>
								</div>
								<h6 className="mt-3">Activate</h6>
								<p className="text-500">Use the code sent to your email to activate your account.</p>
							</div>
							<div className="col-lg-3 col-md-6 pe-6">
								<div className="bg-primary rounded-circle d-inline-flex icon-sm icon-shape p-4">
									<h5 className="m-0 text-white">3</h5>
								</div>
								<h6 className="mt-3">Connect Infinia</h6>
								<p className="text-500">Create a real or demo trading account on our platform. No credit card required.</p>
							</div>
							<div className="col-lg-3 col-md-6 pe-6">
								<div className="bg-primary rounded-circle d-inline-flex icon-sm icon-shape p-4">
									<h5 className="m-0 text-white">4</h5>
								</div>
								<h6 className="mt-3">Almost done</h6>
								<p className="text-500">Start your amazing journey on our platform.</p>
							</div>
						</div>
					</div>
				</section>


			</Layout>
		</>
	)
}