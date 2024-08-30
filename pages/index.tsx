import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${poppins.className}`}
		>
			<h1>Events Feature here</h1>
		</main>
	);
}
