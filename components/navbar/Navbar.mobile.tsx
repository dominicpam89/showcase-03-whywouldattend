import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navlinks } from "./Navbar.const";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
	getActiveLink: (link: string, pathname: string) => boolean;
}
export default function NavbarMobile({ getActiveLink }: Props) {
	const router = useRouter();
	return (
		<div
			aria-label="nav-menu-mobile"
			className="lg:hidden flex gap-2 items-center"
		>
			<Sheet>
				<SheetTrigger>
					<MenuIcon />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader className="p-8">
						<SheetTitle className="text-left">WhyWouldAttend</SheetTitle>
						<SheetDescription className="text-left">
							WhyWouldAttend is a website to showcase my mastery in
							nextjs, another abomination of complex javascript
							framework.
						</SheetDescription>
					</SheetHeader>
					<div
						aria-label="nav-menu-mobile"
						className="px-8 flex flex-col gap-4 items-start"
					>
						{navlinks.map((link) => {
							const isActive = getActiveLink(link.link, router.pathname);
							return (
								<Link
									key={link.link}
									href={link.link}
									className={`flex gap-1 items-center transform hover:scale-105 transition-all duration-150 ease-out ${
										isActive
											? "font-bold text-primary"
											: "font-extralight"
									}`}
								>
									<span>{link.icon}</span>
									<span>{link.text}</span>
								</Link>
							);
						})}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
