import { useCallback } from "react";
import NavbarDesktop from "./Navbar.desktop";
import NavbarLogo from "./Navbar.logo";
import NavbarMobile from "./Navbar.mobile";

export default function Navbar() {
	const getActiveLink = useCallback((link: string, pathname: string) => {
		if (link == "/") {
			return pathname == link;
		} else {
			return pathname.includes(link);
		}
	}, []);
	return (
		<nav
			aria-label="nav"
			className="p-6 flex justify-between items-center shadow-md bg-primary text-primary-foreground"
		>
			<NavbarLogo />
			<NavbarDesktop getActiveLink={getActiveLink} />
			<NavbarMobile getActiveLink={getActiveLink} />
		</nav>
	);
}
