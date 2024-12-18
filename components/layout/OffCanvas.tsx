import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close">
					<button onClick={handleOffCanvas}><i className="far fa-window-close" /></button>
				</div>
				<div className="offCanvas__logo mb-30">
					<Link href="/"><img src="/assets/imgs/logo/logo-dark.svg" alt="Logo" /></Link>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<h4>Chat with us</h4>
						<p className="mb-3">
							The support team is always<br />
							available 24/7
						</p>
						<div className="d-flex mb-2">
							<img src="/assets/imgs/contact-2/icon-1.svg" alt="infinia" />
							<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Whatsapp</Link>
						</div>
						<div className="d-flex mb-2">
							<img src="/assets/imgs/contact-2/icon-2.svg" alt="infinia" />
							<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Viber</Link>
						</div>
						<div className="d-flex mb-2 mb-5">
							<img src="/assets/imgs/contact-2/icon-3.svg" alt="infinia" />
							<Link className="ms-2 text-decoration-underline text-900 fs-7" href="#">Chat via Messager</Link>
						</div>
					</div>
					<div className="contact-list mb-30">
						<h4>Office Address</h4>
						<p>
							123/A, Miranda City Likaoli <br />
							Prikano, Dope
						</p>
					</div>
					<div className="contact-list mb-30">
						<h4>Phone Number</h4>
						<p>(+01) 234 567 89</p>
						<p>(+01) 456 789 21</p>
					</div>
					<div className="contact-list mb-30">
						<h4>Business Emails</h4>
						<p><Link href="/mailto:contact@alithemes.com">contact@alithemes.com</Link></p>
						<p><Link href="/mailto:sale@alithemes.com ">sale@alithemes.com </Link></p>
					</div>
					<div className="contact-list mb-30">
						<h4>Help  support</h4>
						<p>Email <Link href="/mailto:support@alithemes.com">support@alithemes.com</Link> For help with a current product or service or refer to FAQs and developer tools.</p>
					</div>
				</div>
				<div className="offCanvas__social-icon mt-30">
					<Link href="/javascript:void(0)"><i className="fab fa-facebook-f" /></Link>
					<Link href="/javascript:void(0)"><i className="fab fa-twitter" /></Link>
					<Link href="/javascript:void(0)"><i className="fab fa-google-plus-g" /></Link>
					<Link href="/javascript:void(0)"><i className="fab fa-instagram" /></Link>
				</div>
			</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}  onClick={handleOffCanvas}/>
		</>
	)
}
