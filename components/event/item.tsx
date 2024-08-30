import { EventType } from "@/lib/dummy.data";
import ItemHeader from "./item-header";
import ItemContent from "./item-content";
import ContextEventProvider from "@/lib/context/event.context";

interface Props {
	event: EventType;
}
export default function EventItem({ event }: Props) {
	return (
		<section id="event-detail-container" className="p-12">
			<ContextEventProvider event={event}>
				<ItemHeader />
				<ItemContent />
			</ContextEventProvider>
		</section>
	);
}
