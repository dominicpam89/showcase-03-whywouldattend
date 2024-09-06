import { navlinks } from "./Navbar.const";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
	getActiveLink: (link: string, pathname: string) => boolean;
}
export default function NavbarDesktop({ getActiveLink }: Props) {
	const router = useRouter();
	return (
		<div
			aria-label="nav-menu-desktop"
			className="hidden lg:flex gap-5 items-center"
		>
			{navlinks.map((link) => {
				const isActive = getActiveLink(link.link, router.pathname);
				return (
					<Link
						key={link.link}
						href={link.link}
						className={`flex items-center gap-1 text-primary-foreground transform hover:scale-105 transition-all duration-150 ease-out ${
							isActive ? "font-bold text-primary" : "font-extralight"
						}`}
					>
						<span className={`${isActive ? "font-bold" : ""}`}>
							{link.icon}
						</span>
						{link.text}
					</Link>
				);
			})}
		</div>
	);
}
