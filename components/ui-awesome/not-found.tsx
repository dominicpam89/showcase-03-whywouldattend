import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

interface Props {
	title?: string;
	subtitle?: string;
	message?: string;
}
export default function NotFoundUI({
	title = "404",
	subtitle = "Something is missing",
	message = "Sorry, the page you are looking for does not exist or has been moved.",
}: Props) {
	const router = useRouter();
	return (
		<div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
			<span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
				{title}
			</span>
			<h2 className="font-heading my-2 text-2xl font-bold">{subtitle}</h2>
			<p>{message}</p>
			<div className="mt-8 flex justify-center gap-2">
				<Button onClick={() => router.back()} variant="default" size="lg">
					Go back
				</Button>
				<Button onClick={() => router.push("/")} variant="ghost" size="lg">
					Back to Home
				</Button>
			</div>
		</div>
	);
}
