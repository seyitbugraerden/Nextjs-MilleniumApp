import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import Search from '../Search'
import OffCanvas from '../OffCanvas'
import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Menu from '../Menu'

export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<div className="top-bar position-relative z-4">
				<div className="container-fluid bg-primary">
					<div className="container-fluid py-2 px-8">
						<div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
							<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
								<a href="mailto:contact@infinia.com" className="pe-4 d-none d-md-flex">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
										<path d="M3.9585 6.95834C3.9585 6.03786 4.70469 5.29167 5.62516 5.29167H14.3752C15.2957 5.29167 16.0418 6.03786 16.0418 6.95834V14.0417C16.0418 14.9622 15.2957 15.7083 14.3752 15.7083H5.62516C4.70469 15.7083 3.9585 14.9622 3.9585 14.0417V6.95834Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M4.5835 5.91667L10.0002 10.7083L15.4168 5.91667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<span className="text-white ps-1 fs-7">contact@infinia.com</span>
								</a>
								<div className="location d-flex align-items-center">
									<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
										<path d="M5.62516 16.5418H14.3751C15.2956 16.5418 16.0418 15.7957 16.0418 14.8752V8.6252L10.0001 4.45853L3.9585 8.6252V14.8752C3.9585 15.7957 4.7047 16.5418 5.62516 16.5418Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path d="M8.12476 13.6244C8.12476 12.7039 8.87098 11.9577 9.7914 11.9577H10.2081C11.1286 11.9577 11.8747 12.7039 11.8747 13.6244V16.5411H8.12476V13.6244Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<span className="text-white ps-1 fs-7">0811 Erdman Prairie, Joaville CA</span>
								</div>
							</div>
							<div className="d-flex d-none d-lg-flex align-items-center justify-content-center justify-content-lg-end">
								<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
									<path d="M10.0002 16.5417C13.3369 16.5417 16.0418 13.8367 16.0418 10.5C16.0418 7.16327 13.3369 4.45833 10.0002 4.45833C6.66344 4.45833 3.9585 7.16327 3.9585 10.5C3.9585 13.8367 6.66344 16.5417 10.0002 16.5417Z" stroke="white" strokeWidth="1.5" />
									<path d="M10 7.16667V10.5L11.6667 12.1667" stroke="white" strokeWidth="1.5" />
								</svg>
								<span className="text-white pe-3 ps-1 fs-7">Mon-Fri: 10:00am - 09:00pm</span>
								<a href="https://www.facebook.com/" className=" text-white icon-shape icon-md">
									<svg xmlns="http://www.w3.org/2000/svg" width={9} height={17} viewBox="0 0 9 17" fill="none">
										<path d="M8.22314 9.20334H5.91602V16.094H2.83984V9.20334H0.317383V6.37326H2.83984V4.18918C2.83984 1.72824 4.31641 0.343964 6.56201 0.343964C7.63867 0.343964 8.77686 0.559296 8.77686 0.559296V2.98947H7.51562C6.28516 2.98947 5.91602 3.72775 5.91602 4.52756V6.37326H8.65381L8.22314 9.20334Z" fill="white" />
									</svg>
								</a>
								<a href="https://twitter.com/" className=" text-white icon-shape icon-md">
									<svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} viewBox="0 0 15 14" fill="none">
										<path d="M11.2163 0.820312H13.3696L8.63232 6.26514L14.231 13.6172H9.86279L6.41748 9.15674L2.51074 13.6172H0.32666L5.40234 7.83398L0.0498047 0.820312H4.54102L7.61719 4.91162L11.2163 0.820312ZM10.4473 12.3252H11.647L3.89502 2.05078H2.60303L10.4473 12.3252Z" fill="white" />
									</svg>
								</a>
								<a href="https://www.linkedin.com/" className=" text-white icon-shape icon-md">
									<svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
										<path d="M13.7188 0.328537C14.2417 0.328537 14.7031 0.789963 14.7031 1.34367V13.1254C14.7031 13.6791 14.2417 14.1098 13.7188 14.1098H1.87549C1.35254 14.1098 0.921875 13.6791 0.921875 13.1254V1.34367C0.921875 0.789963 1.35254 0.328537 1.87549 0.328537H13.7188ZM5.07471 12.141V5.58879H3.04443V12.141H5.07471ZM4.05957 4.66594C4.70557 4.66594 5.22852 4.14299 5.22852 3.49699C5.22852 2.851 4.70557 2.29729 4.05957 2.29729C3.38281 2.29729 2.85986 2.851 2.85986 3.49699C2.85986 4.14299 3.38281 4.66594 4.05957 4.66594ZM12.7344 12.141V8.54192C12.7344 6.7885 12.3345 5.40422 10.2734 5.40422C9.28906 5.40422 8.6123 5.95793 8.33545 6.48088H8.30469V5.58879H6.3667V12.141H8.39697V8.91106C8.39697 8.04973 8.55078 7.21916 9.62744 7.21916C10.6733 7.21916 10.6733 8.20354 10.6733 8.94182V12.141H12.7344Z" fill="white" />
									</svg>
								</a>
								<a href="https://www.behance.net/" className=" text-white icon-shape icon-md">
									<svg xmlns="http://www.w3.org/2000/svg" width={19} height={12} viewBox="0 0 19 12" fill="none">
										<path d="M7.65234 5.66483C8.9751 6.03397 9.62109 7.0491 9.62109 8.40262C9.62109 10.6175 7.77539 11.5711 5.77588 11.5711H0.515625V0.681427H5.65283C7.49854 0.681427 9.12891 1.20438 9.12891 3.38846C9.12891 4.46512 8.60596 5.17264 7.65234 5.66483ZM2.88428 2.52713V5.08035H5.31445C6.17578 5.08035 6.79102 4.71121 6.79102 3.78836C6.79102 2.77322 6.02197 2.52713 5.16064 2.52713H2.88428ZM5.46826 9.72537C6.42188 9.72537 7.22168 9.38699 7.22168 8.27957C7.22168 7.17215 6.57568 6.71072 5.49902 6.71072H2.88428V9.72537H5.46826ZM16.481 2.3118V1.23514H12.082V2.3118H16.481ZM18.2344 7.75662C18.2344 7.87967 18.2036 8.03348 18.2036 8.15652H12.5127C12.5127 9.41776 13.1895 10.156 14.4507 10.156C15.0967 10.156 15.958 9.81766 16.1733 9.1409H18.0806C17.4961 10.9251 16.2656 11.7864 14.3892 11.7864C11.8975 11.7864 10.3286 10.0945 10.3286 7.63358C10.3286 5.26492 11.959 3.44998 14.3892 3.44998C16.8501 3.44998 18.2344 5.41873 18.2344 7.75662ZM12.5127 6.77225H16.0503C15.958 5.72635 15.4043 5.11111 14.2969 5.11111C13.2817 5.11111 12.5742 5.75711 12.5127 6.77225Z" fill="white" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<header>
				<nav className={`navbar navbar-expand-lg navbar-light w-100 border-bottom z-999 ${scroll ? 'navbar-stick' : ''}`} style={{ position: `${scroll? "fixed" : "relative"}`, top: `${scroll? "0" : "auto"}`, bottom: `${scroll? "auto" : "0"}` }}>
					<div className="container-fluid px-lg-8">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img src="assets/imgs/template/favicon.svg" alt="infinia" />
							<span>Infinia</span>
						</Link>
						<Menu />
						<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
							<div className="d-lg-flex align-items-center pe-8 d-none">
								<a href="telto:+1234567890" className="icon-shape icon-lg bg-linear-2 rounded-circle mx-3">
									<svg className="d-block" xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
										<path className="stroke-white" d="M9.39286 5.25H6.56818C5.84017 5.25 5.25 5.84017 5.25 6.56818C5.25 13.8483 11.1517 19.75 18.4318 19.75C19.1598 19.75 19.75 19.1598 19.75 18.4318V15.6071L16.6429 13.5357L15.0317 15.1468C14.7519 15.4267 14.3337 15.5137 13.9821 15.3321C13.3858 15.024 12.4181 14.4452 11.4643 13.5357C10.4877 12.6045 9.91548 11.6011 9.62829 10.994C9.46734 10.6537 9.56052 10.2609 9.82669 9.99474L11.4643 8.35714L9.39286 5.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</a>
								<div>
									<p className="mb-0 text-500 fs-8">Have Any Questions?</p>
									<p className="mb-0 text-900 fw-bold">+01 567 890 68</p>
								</div>
							</div>
							<a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target=".offcanvasTop" onClick={handleSearch} className='cursor-pointer'>
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
									<path className="stroke-dark" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</a>
							<ThemeSwitch />
							<a href="#" className="btn btn-gradient d-none d-md-block">
								Get a Quote
								<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={19} height={18} viewBox="0 0 19 18" fill="none">
									<g clipPath="url(#clip0_474_2370)">
										<path className="fill-white" d="M13.5633 4.06331L12.7615 4.86512L16.3294 8.43305H0.5V9.56699H16.3294L12.7615 13.1349L13.5633 13.9367L18.5 8.99998L13.5633 4.06331Z" fill="white" />
									</g>
									<defs>
										<clipPath>
											<rect width={18} height={18} fill="white" transform="translate(0.5)" />
										</clipPath>
									</defs>
								</svg>
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

		</>
	)
}
