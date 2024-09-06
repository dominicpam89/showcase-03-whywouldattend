import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/router";

export default function ItemHeaderCTA() {
	const router = useRouter();
	return (
		<div className="p-12 py-0 flex flex-col lg:flex-row gap-4 -translate-y-[80%] lg:-translate-y-[150%] w-full justify-center">
			<Button
				variant="outline"
				size="lg"
				onClick={() => router.push("/events")}
			>
				<AlertCircle className="mr-2" />
				<span>Find another Event</span>
			</Button>
			<Button size="lg">
				<span>I want to attend!</span>
			</Button>
		</div>
	);
}
