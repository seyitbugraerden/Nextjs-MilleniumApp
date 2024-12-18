import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import Search from '../Search'
import OffCanvas from '../OffCanvas'
import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Menu from '../Menu'

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<div>
				<div className="top-bar position-relative z-4 @@classList">
					<div className="container-fluid bg-primary-soft">
						<div className="container py-2">
							<div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
								<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
									<a href="tel:123456789" className="pe-4">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
											<path d="M7.41064 4.45833H5.05674C4.45006 4.45833 3.95825 4.95014 3.95825 5.55681C3.95825 11.6236 8.87634 16.5417 14.9431 16.5417C15.5498 16.5417 16.0416 16.0498 16.0416 15.4432V13.0892L13.4523 11.3631L12.1097 12.7057C11.8765 12.9389 11.528 13.0114 11.235 12.8601C10.7381 12.6033 9.93167 12.121 9.13684 11.3631C8.32299 10.5871 7.84615 9.75091 7.60683 9.245C7.4727 8.96141 7.55035 8.63409 7.77216 8.41228L9.13684 7.04761L7.41064 4.45833Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<span className="text-900 fs-7">+01 (24) 568 900</span>
									</a>
									<div className="location d-flex align-items-center">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
											<path d="M5.62516 16.5418H14.3751C15.2956 16.5418 16.0418 15.7957 16.0418 14.8752V8.6252L10.0001 4.45853L3.9585 8.6252V14.8752C3.9585 15.7957 4.7047 16.5418 5.62516 16.5418Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M8.12476 13.6244C8.12476 12.7039 8.87098 11.9577 9.7914 11.9577H10.2081C11.1286 11.9577 11.8747 12.7039 11.8747 13.6244V16.5411H8.12476V13.6244Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<span className="text-900 ps-1 fs-7">0811 Erdman Prairie, Joaville CA</span>
									</div>
								</div>
								<div className="d-flex d-none d-lg-flex align-items-center justify-content-center justify-content-lg-end">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
										<path d="M10.0002 16.5417C13.3369 16.5417 16.0418 13.8367 16.0418 10.5C16.0418 7.16327 13.3369 4.45833 10.0002 4.45833C6.66344 4.45833 3.9585 7.16327 3.9585 10.5C3.9585 13.8367 6.66344 16.5417 10.0002 16.5417Z" stroke="#6B7280" strokeWidth="1.5" />
										<path d="M10 7.16667V10.5L11.6667 12.1667" stroke="#6B7280" strokeWidth="1.5" />
									</svg>
									<span className="text-900 pe-3 ps-1 fs-7">Mon-Fri: 10:00am - 09:00pm</span>
									<a href="mailto:contact@infinia.com" className="ps-4">
										<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
											<path d="M3.9585 6.95834C3.9585 6.03786 4.70469 5.29167 5.62516 5.29167H14.3752C15.2957 5.29167 16.0418 6.03786 16.0418 6.95834V14.0417C16.0418 14.9622 15.2957 15.7083 14.3752 15.7083H5.62516C4.70469 15.7083 3.9585 14.9622 3.9585 14.0417V6.95834Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M4.5835 5.91667L10.0002 10.7083L15.4168 5.91667" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										<span className="text-900 ps-1 fs-7">contact@infinia.com</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Navbar */}
				<header>
					<nav className={`navbar navbar-expand-lg navbar-light w-100 z-999 ${scroll ? 'navbar-stick' : ''}`} style={{ position: `${scroll? "fixed" : "relative"}`, top: `${scroll? "0" : "auto"}`, bottom: `${scroll? "auto" : "0"}` }}>
						<div className="container">
							<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
								<img src="assets/imgs/template/favicon.svg" alt="infinia" />
								<span>Infinia</span>
							</Link>
							<Menu />
							<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
								<a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop" onClick={handleSearch} className='cursor-pointer'>
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</a>
								<ThemeSwitch />
								<a href="#" className="btn btn-gradient d-none d-md-block">
									Join For Free Trial
								</a>
								<div className="burger-icon burger-icon-white border rounded-3" onClick={handleMobileMenu}>
									<span className="burger-icon-top" />
									<span className="burger-icon-mid" />
									<span className="burger-icon-bottom" />
								</div>
							</div>
						</div>
					</nav>
					
				<OffCanvas handleOffCanvas={handleOffCanvas} isOffCanvas={isOffCanvas} />
				<Search isSearch={isSearch} handleSearch={handleSearch} />
				<MobileMenu handleMobileMenu={handleMobileMenu} isMobileMenu={isMobileMenu} />
				</header>
			</div>

		</>
	)
}
