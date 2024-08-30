import { EventType } from "@/lib/dummy.data";
import Image from "next/image";
import ItemHeader from "./item-header";

interface Props {
	event: EventType;
}
export default function EventItem({ event }: Props) {
	return (
		<section id="event-detail-container" className="p-12">
			<ItemHeader event={event} />
		</section>
	);
}
