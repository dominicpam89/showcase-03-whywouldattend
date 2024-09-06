import { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
	return (
		<main className={`min-h-screen bg-background font-sans antialiased`}>
			{children}
		</main>
	);
}
