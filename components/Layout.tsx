import Navbar from "./navbar/Navbar";
import Footer from "./navbar/Footer";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
