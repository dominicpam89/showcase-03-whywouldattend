import Navbar from "./navbar/Navbar";
import Footer from "./navbar/Footer";
import { PropsWithChildren } from "react";
import { styleClassesInjection } from "@/lib/utils";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<header className={`${styleClassesInjection}`}>
				<Navbar />
			</header>
			<main
				className={`relative min-h-screen antialiased ${styleClassesInjection}`}
			>
				{children}
			</main>
			<Footer />
		</>
	);
}
