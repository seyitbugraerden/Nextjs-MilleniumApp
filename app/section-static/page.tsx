'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CountUp from 'react-countup'
export default function SectionStatic() {

	return (
		<>

			<Layout >

				<section className="section-page-header py-10 fix position-relative">
					<div className="container position-relative z-1">
						<div className="text-start">
							<h3>Static</h3>
							<div className="d-flex">
								<Link href="#">
									<p className="mb-0 text-900">Home</p>
								</Link>
								<svg className="mx-3 mt-1" xmlns="http://www.w3.org/2000/svg" width={8} height={13} viewBox="0 0 8 13" fill="none">
									<path className="stroke-dark" d="M1 1.5L6.5 6.75L1 12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p className="text-primary mb-0">Static</p>
							</div>
						</div>
					</div>
					<img className="position-absolute bottom-0 start-0 end-0 top-0 z-0" src="/assets/imgs/page-header/bg-line.png" alt="infinia" />
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass" />
						<div className="bouncing-blobs">
							<div className="position-absolute top-0 start-0 translate-middle-y bouncing-blob--green" />
							<div className="position-absolute top-0 end-0 bouncing-blob--primary" />
						</div>
					</div>
				</section>
				{/*Static 1*/}
				<section className="section-static-1 position-relative bg-primary fix z-0 section-padding">
					<div className="container position-relative z-3">
						<div className="row border-bottom border-primary-light pb-8">
							<div className="col-lg-6 me-lg-auto">
								<h5 className="ds-5 text-100 m-0">Numbers Speaking for Themselves</h5>
							</div>
							<div className="col-auto align-self-end mt-lg-0 mt-5">
								<Link href="#" className="btn btn-outline-secondary hover-up bg-transparent text-100">
									Get a Quote
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
					<div className="container mt-8">
						<div className="inner">
							<div className="row justify-content-center">
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="fw-bold lh-sm count ds-2 text-100">+<span className="odometer" /><CountUp end={500} enableScrollSpy={true} /><span>k</span></span>
											<p className="fs-5 text-100">Users Active / Month</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="count lh-sm ds-2 fw-bold text-100">+<span className="odometer" /><CountUp end={38} enableScrollSpy={true} />k</span>
											<p className="fs-5 text-100">New Download / Month</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="count lh-sm ds-2 fw-bold text-100"><span className="odometer" /><CountUp end={150} enableScrollSpy={true} /></span>
											<p className="fs-5 text-100">Operating countries</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="count lh-sm ds-2 fw-bold text-100"><span className="odometer" /><CountUp end={4000} enableScrollSpy={true} /></span>
											<p className="fs-5 text-100">Businesses trust on the world</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="img-decorate position-absolute top-0 start-0">
						<img src="/assets/imgs/static-1/img-decorate.png" alt="infinia" />
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass bg-transparent" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--white" />
						</div>
					</div>
				</section>
				{/*Static 2*/}
				<section className="section-static-1 position-relative fix z-0 section-padding">
					<div className="container">
						<div className="inner">
							<div className="row justify-content-between">
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>Continuous <br /> growth with</h6>
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={24} enableScrollSpy={true} /><span>k</span></span>
											<p className="fs-5">New accounts</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>Successfully <br /> completed</h6>
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={1024} enableScrollSpy={true} /></span>
											<p className="fs-5">Finished projects</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>Recruit more <br /> than</h6>
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={865} enableScrollSpy={true} /></span>
											<p className="fs-5">Skilled experts</p>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-sm-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<h6>Increase internet <br /> awareness</h6>
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={168} enableScrollSpy={true} /><span>k</span></span>
											<p className="fs-5">Media posts</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Static 2*/}
				<section className="section-static-1 position-relative fix z-0 py-8">
					<div className="container">
						<div className="inner">
							<div className="row align-items-center justify-content-between">
								<div className="col-lg-auto col-md-12 text-center text-lg-start mb-5 mb-lg-0">
									<h4 className="mb-0">
										See why we are <br /> trusted the world over
									</h4>
								</div>
								<div className="col-lg-auto col-md-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="h1 count fw-black text-primary my-0"><span className="odometer" /><CountUp end={469} enableScrollSpy={true} /><span>k</span></span>
											<p>New accounts</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={92} enableScrollSpy={true} /></span>
											<p>Finished projects</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={756} enableScrollSpy={true} /></span>
											<p>Skilled experts</p>
										</div>
									</div>
								</div>
								<div className="col-lg-auto col-md-6">
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto">
											<span className="h1 count fw-black text-primary my-0">+<span className="odometer" /><CountUp end={25} enableScrollSpy={true} /><span>k</span></span>
											<p>Media posts</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bouncing-blobs-container">
						<div className="bouncing-blobs-glass fix" />
						<div className="bouncing-blobs">
							<div className="bouncing-blob bouncing-blob--green" />
							<div className="bouncing-blob bouncing-blob--primary" />
							<div className="bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
						</div>
					</div>
				</section>


			</Layout>
		</>
	)
}