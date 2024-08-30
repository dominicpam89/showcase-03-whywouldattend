import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Building, LandPlot } from "lucide-react";
import { useContextEvent } from "@/lib/context/event.context.hook";
import LocationItem from "./item-content-info-item";

export default function ItemContentLocation() {
	const { location } = useContextEvent().event;
	return (
		<Card className="w-full p-8 space-y-6">
			<CardHeader>
				<CardTitle className="font-light text-5xl">
					Event Location
				</CardTitle>
				<CardDescription className="tracking-wide text-lg font-light">
					You should come if you are not that lazy
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-6">
				<LocationItem
					icon={<Building className="size-5" />}
					label="City"
					text={location.city}
				/>
				<LocationItem
					icon={<LandPlot className="size-5" />}
					label="Province"
					text={location.province}
				/>
			</CardContent>
		</Card>
	);
}
