import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useContextEvent } from "@/lib/hooks/event.context.hook";

export default function ItemContent() {
	const { event, date } = useContextEvent();
	const { city, province, zipCode } = event.location;
	return (
		<Card className="p-12 max-w-lg w-full mx-auto">
			<CardHeader>
				<CardTitle className="font-extrabold text-xl uppercase lg:text-4xl">
					{city}
				</CardTitle>
				<CardDescription className="font-semibold">
					{province}
					{", "}
					{zipCode}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-xs tracking-wider leading-6">
					{event.description}
				</p>
			</CardContent>
			<CardFooter>
				<div className="flex flex-col items-start">
					<p>
						<span className="text-sm">{date.day}, </span>
						<span className="font-semibold text-primary">
							{date.date}th
						</span>
					</p>
					<p>
						<span className="font-semibold text-primary">
							{date.month}{" "}
						</span>
						<span className="text-sm">{date.year}</span>
					</p>
				</div>
			</CardFooter>
		</Card>
	);
}
