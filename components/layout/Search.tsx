import Link from 'next/link'

export default function Search({ isSearch, handleSearch }: any) {
	return (
		<>
			{/* Offcanvas search */}
			<div className={`offcanvas offcanvas-top offcanvasTop h-50 ${isSearch ? 'show' : ''}`} tabIndex={-1}>
				<div className="offcanvas-header">
					<button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleSearch} />
				</div>
				<div className="offcanvas-body">
					<div className="container">
						<div className="row py-md-5 py-2">
							<div className="col-12 col-lg-8 mx-auto">
								<h4 className="mb-2 fs-sm-5">What are you looking for?</h4>
								<p className="text-500 fs-6 mb-5">Explore our services and discover how we can help you achieve your goals</p>
								<div className="input-group" data-aos="zoom-in">
									<input type="text" className="form-control ps-5 rounded-start-pill" name="name" placeholder="Enter Your Keywords" />
									<button className="btn btn-primary rounded-end-pill">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
											<path d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</button>
								</div>
								<div className="d-flex flex-column flex-lg-row mt-5">
									<h6 className="d-inline me-2">Suggest:</h6>
									<div className="d-flex flex-wrap gap-2">
										<Link href="#">Startup</Link>
										<Link href="#">Agency</Link>
										<Link href="#">Creative</Link>
										<Link href="#">Consulting</Link>
										<Link href="#">IT services</Link>
										<Link href="#">Pricing</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</>
	)
}
