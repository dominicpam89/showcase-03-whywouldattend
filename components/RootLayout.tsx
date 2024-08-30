import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<main
			className={`min-h-screen bg-background font-sans antialiased ${poppins.variable}`}
		>
			{children}
		</main>
	);
}
