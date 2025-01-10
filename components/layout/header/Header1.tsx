import Menu from "../Menu";
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import ThemeSwitch from "@/components/elements/ThemeSwitch";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
}: any) {
  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg navbar-light w-100 z-999 ${
            scroll ? "navbar-stick" : ""
          }`}
          style={{
            position: `${scroll ? "fixed" : "relative"}`,
            top: `${scroll ? "0" : "auto"}`,
          }}
        >
          <div className="container">
            <Link
              className="navbar-brand d-flex main-logo align-items-center"
              href="/"
            >
              <img src="/logo.svg" alt="Millenium" width={200} />
            </Link>
            <Menu />
            <div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
              <ThemeSwitch />
              <div
                className="burger-icon burger-icon-white border rounded-3"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </nav>
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isMobileMenu={isMobileMenu}
        />
      </header>
    </>
  );
}
